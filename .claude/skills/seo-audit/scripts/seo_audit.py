#!/usr/bin/env python3
"""Static SEO audit for the daydaivn.com Next.js repo.

Usage: python3 -I .claude/skills/seo-audit/scripts/seo_audit.py [repo_root]

Prints findings grouped by severity (ERROR / WARN / INFO). Exit code 1 if any ERROR.
Stdlib only, no network.
"""
from __future__ import annotations

import csv
import datetime as dt
import re
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
SRC = ROOT / "src"
APP = SRC / "app"
PUBLIC = ROOT / "public"
STEEL_DENSITY = 7.85  # g/cm³

findings: list[tuple[str, str, str]] = []  # (severity, area, message)


def add(sev: str, area: str, msg: str) -> None:
    findings.append((sev, area, msg))


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8")


def route_of(page: Path) -> str:
    rel = page.parent.relative_to(APP).as_posix()
    return "/" if rel == "." else "/" + rel


# ---------------------------------------------------------------- routes
pages = sorted(p for p in APP.rglob("page.tsx") if "/api/" not in p.as_posix())
routes = {route_of(p): p for p in pages}
static_routes = {r for r in routes if "[" not in r}

products_src = read(SRC / "data" / "products.ts")
product_slugs = set(re.findall(r'slug:\s*"(/san-pham/[^"]+)"', products_src))
article_slugs: list[str] = []
for f in ["articles.ts", "priority-articles.ts", "secondary-articles.ts"]:
    article_slugs += re.findall(r'^\s{4}slug:\s*"([^"]+)"', read(SRC / "data" / f), re.M)
article_routes = {f"/tu-van/{s}" for s in article_slugs}
all_routes = static_routes | product_slugs | article_routes

# ---------------------------------------------------------------- per-page metadata
titles: dict[str, list[str]] = defaultdict(list)
primary_kw: dict[str, list[str]] = defaultdict(list)
for route, page in routes.items():
    if "[" in route:
        continue
    s = read(page)
    has_meta = "export const metadata" in s or "generateMetadata" in s
    if not has_meta and route != "/":
        add("ERROR", "metadata", f"{route}: không có metadata (title/description)")
        continue
    if route != "/" and "canonical" not in s:
        add("ERROR", "canonical", f"{route}: thiếu alternates.canonical")
    m = re.search(r'title:\s*"([^"]+)"', s)
    if m:
        t = m.group(1)
        titles[t].append(route)
        if len(t) > 70:
            add("WARN", "title", f"{route}: title {len(t)} ký tự (>70, dễ bị cắt): {t}")
    d = re.search(r'description:\s*\n?\s*"([^"]+)"', s)
    if d and not (50 <= len(d.group(1)) <= 170):
        add("WARN", "description", f"{route}: description {len(d.group(1))} ký tự (nên 50–170)")
    kw = re.search(r"keywords:\s*\[\s*\"([^\"]+)\"", s)
    if kw:
        primary_kw[kw.group(1).lower()].append(route)
    h1 = len(re.findall(r"<h1[\s>]", s))
    if h1 > 1:
        add("WARN", "h1", f"{route}: {h1} thẻ <h1> trong file page")

for t, rs in titles.items():
    if len(rs) > 1:
        add("ERROR", "title", f"Title trùng giữa {rs}: {t}")
for k, rs in primary_kw.items():
    if len(rs) > 1:
        add("WARN", "cannibalization", f"Từ khoá chính '{k}' là keyword đầu tiên của nhiều trang: {rs}")

# ---------------------------------------------------------------- sitemap
sitemap = read(APP / "sitemap.ts")
sitemap_routes = {r if r else "/" for r in re.findall(r"\$\{siteConfig\.url\}(/[^`]*)`", sitemap)}
sitemap_routes = {("/" if r == "/" else r.rstrip("/")) for r in sitemap_routes}
for r in sorted(static_routes):
    if r not in sitemap_routes and r not in {"/san-pham/[slug]", "/tu-van/[slug]"}:
        add("ERROR", "sitemap", f"{r}: có trang nhưng KHÔNG có trong sitemap.ts")
for r in sorted(sitemap_routes):
    if "${" in r or r.startswith("/tu-van/$"):
        continue
    if r not in static_routes:
        add("ERROR", "sitemap", f"{r}: có trong sitemap nhưng không có page.tsx")
if sitemap.count("lastModified: now") > 10:
    add("INFO", "sitemap", f"{sitemap.count('lastModified: now')} URL dùng lastModified: now — Google sẽ bỏ qua tín hiệu này; nên dùng ngày sửa thật")

# ---------------------------------------------------------------- internal links + assets
link_re = re.compile(r'href(?:=|:\s*)[{`"]*"?(/[a-z0-9\-/]*)(?:#[^"`]*)?["`]')
asset_re = re.compile(r'"(/(?:images|videos|brand)/[^"]+)"')
broken_links: dict[str, set[str]] = defaultdict(set)
for f in SRC.rglob("*.ts*"):
    s = read(f)
    for href in link_re.findall(s):
        h = href.rstrip("/") or "/"
        if h.startswith("/api") or h in all_routes or h == "/san-pham":
            continue
        broken_links[h].add(f.relative_to(ROOT).as_posix())
    for a in asset_re.findall(s):
        if not (PUBLIC / a.lstrip("/")).exists():
            add("ERROR", "asset", f"{a} được tham chiếu trong {f.relative_to(ROOT)} nhưng không có trong public/")
for h, files in sorted(broken_links.items()):
    add("ERROR", "link", f"Link nội bộ hỏng {h} (trong {', '.join(sorted(files)[:3])})")

# Orphan check: static landing pages that nothing links to.
linked = set()
for f in SRC.rglob("*.ts*"):
    for href in link_re.findall(read(f)):
        linked.add(href.rstrip("/") or "/")
for r in sorted(static_routes - linked - {"/"}):
    add("WARN", "orphan", f"{r}: không có link nội bộ nào trỏ tới (chỉ có trong sitemap)")

# ---------------------------------------------------------------- facts: m/kg
guide = read(SRC / "data" / "steel-strapping-guide.ts")
for m in re.finditer(
    r'widthMm:\s*(\d+),\s*thicknessMm:\s*"([\d.]+)\s*-\s*([\d.]+)"[^}]*?metersPerKg:\s*"([\d.]+)\s*-\s*([\d.]+)"',
    guide,
    re.S,
):
    w, t1, t2, lo, hi = int(m[1]), float(m[2]), float(m[3]), float(m[4]), float(m[5])
    exp_lo = 1 / (w * t2 * STEEL_DENSITY / 1000)
    exp_hi = 1 / (w * t1 * STEEL_DENSITY / 1000)
    if abs(lo - exp_lo) > 0.6 or abs(hi - exp_hi) > 0.6:
        add("ERROR", "facts", f"Bản {w}mm dày {t1}-{t2}: m/kg ghi {lo}-{hi}, tính đúng ≈ {exp_lo:.1f}-{exp_hi:.1f}")

# ---------------------------------------------------------------- pricing consistency
pricing = read(SRC / "config" / "pricing.ts")
tools_cfg = re.search(r"STEEL_STRAPPING_TOOLS_SALE_PRICE\s*=\s*([\d_]+)", pricing)
tools_prod = re.search(r'id:\s*"steel-strapping-tools"[\s\S]*?salePrice:\s*(\d+)', products_src)
if tools_cfg and tools_prod:
    a, b = int(tools_cfg[1].replace("_", "")), int(tools_prod[1])
    if a != b:
        add("ERROR", "pricing", f"Giá bộ dụng cụ đóng đai thép lệch: pricing.ts={a:,} vs products.ts={b:,} (schema & trang hiển thị 2 giá)")
upd = re.search(r'PRICE_PAGE_LAST_UPDATED\s*=\s*"(\d{4}-\d{2}-\d{2})"', pricing)
if upd:
    age = (dt.date.today() - dt.date.fromisoformat(upd[1])).days
    if age > 45:
        add("WARN", "freshness", f"PRICE_PAGE_LAST_UPDATED = {upd[1]} ({age} ngày) — cập nhật bảng giá + ngày để giữ tín hiệu 'mới'")

# ---------------------------------------------------------------- reviews / rating schema
# Review trên site chưa được xác minh → không được xuất hiện trong JSON-LD.
for f in SRC.rglob("*.ts*"):
    if "aggregateRating" in read(f) and f.name != "reviews.ts":
        add("ERROR", "schema", f"{f.relative_to(ROOT)} đưa aggregateRating vào JSON-LD — review chưa xác minh, rủi ro manual action")

# ---------------------------------------------------------------- articles
for s in set(article_slugs):
    if article_slugs.count(s) > 1:
        add("INFO", "articles", f"Slug bài viết '{s}' định nghĩa ở nhiều file (bản priority/secondary sẽ ghi đè bản gốc)")
for m in re.finditer(r'publishedAt:\s*"([\d-]+)",\s*updatedAt:\s*"([\d-]+)"', "".join(
    read(SRC / "data" / f) for f in ["articles.ts", "priority-articles.ts", "secondary-articles.ts"]
)):
    if m[2] < m[1]:
        add("ERROR", "articles", f"updatedAt {m[2]} < publishedAt {m[1]}")

# ---------------------------------------------------------------- keyword tracking CSV
csv_path = ROOT / "seo-keyword-tracking.csv"
if csv_path.exists():
    with csv_path.open(encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            url = (row.get("target_url") or "").strip()
            if url.startswith("/") and url.rstrip("/") not in all_routes and url != "/san-pham":
                add("WARN", "keyword-map", f"'{row['keyword']}' trỏ tới {url} nhưng route không tồn tại")
            if url.startswith("("):
                add("INFO", "keyword-map", f"'{row['keyword']}' ({row['priority']}) chưa có trang đích: {url}")

# ---------------------------------------------------------------- secrets hygiene
gi = read(ROOT / ".gitignore") if (ROOT / ".gitignore").exists() else ""
if (ROOT / ".env").exists() and not re.search(r"^\.env$", gi, re.M):
    add("ERROR", "security", ".env không nằm trong .gitignore (chứa API key/mật khẩu)")

# ---------------------------------------------------------------- report
order = {"ERROR": 0, "WARN": 1, "INFO": 2}
findings.sort(key=lambda f: (order[f[0]], f[1], f[2]))
counts = defaultdict(int)
for sev, area, msg in findings:
    counts[sev] += 1
    print(f"[{sev}] {area}: {msg}")
print(
    f"\nTổng: {counts['ERROR']} ERROR, {counts['WARN']} WARN, {counts['INFO']} INFO · "
    f"{len(static_routes)} trang tĩnh, {len(product_slugs)} sản phẩm, {len(set(article_slugs))} bài viết"
)
sys.exit(1 if counts["ERROR"] else 0)
