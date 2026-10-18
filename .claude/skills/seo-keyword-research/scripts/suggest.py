#!/usr/bin/env python3
"""Google autocomplete (Vietnam) keyword expansion for daydaivn.com.

Usage:
  python3 -I suggest.py --csv seo-keyword-tracking.csv "dây đai thép" "bọ sắt"
  python3 -I suggest.py --csv seo-keyword-tracking.csv --expand "dây đai thép"

  --expand   also query "<seed> a", "<seed> b", ... and "<seed> 1".."9" (slower, wider)
  --csv      mark suggestions already tracked in the keyword CSV

Output: one line per suggestion, tagged
  [tracked]  already in the CSV
  [exclude]  matches a known wrong-intent pattern (construction rebar, belts, safety harness…)
  [new]      candidate worth classifying
"""
from __future__ import annotations

import argparse
import csv
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

ENDPOINT = "https://suggestqueries.google.com/complete/search?client=chrome&hl=vi&gl=vn&q="
LETTERS = list("abcdđghklmnpqstvx") + [str(i) for i in range(1, 10)]

# Wrong-intent patterns (see SKILL.md "Không nhắm").
EXCLUDE = [
    "đai thép cột", "thép đai", "đai sắt 15x15", "đai sắt phi", "đai sắt 6", "đai sắt 8",
    "đai thép d6", "đai thép d8", "dầm", "móng", "giằng", "cb cóc",
    "lõi thép", "dây đai pu", "dây đai răng", "curoa", "cvt",
    "dây đai an toàn", "bảo hộ", "đai bó gối", "đầu gối", "bó tiền",
    "airblade", "vision", "lead", "xe máy", "ô tô",
]


def fetch(q: str) -> list[str]:
    url = ENDPOINT + urllib.parse.quote(q)
    try:
        raw = urllib.request.urlopen(url, timeout=10).read()
    except Exception as exc:  # network errors are reported, not fatal
        print(f"# lỗi khi truy vấn '{q}': {exc}")
        return []
    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError:
        text = raw.decode("latin-1")
    return list(json.loads(text)[1])


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("seeds", nargs="+")
    ap.add_argument("--expand", action="store_true")
    ap.add_argument("--csv", type=Path)
    args = ap.parse_args()

    tracked: set[str] = set()
    if args.csv and args.csv.exists():
        with args.csv.open(encoding="utf-8") as fh:
            tracked = {row["keyword"].strip().lower() for row in csv.DictReader(fh)}

    seen: dict[str, int] = {}
    for seed in args.seeds:
        queries = [seed] + ([f"{seed} {c}" for c in LETTERS] if args.expand else [])
        for q in queries:
            for s in fetch(q):
                seen[s.lower()] = seen.get(s.lower(), 0) + 1
            time.sleep(0.25)

    # More seeds returning the same suggestion ≈ more common query.
    for kw, hits in sorted(seen.items(), key=lambda kv: (-kv[1], kv[0])):
        if kw in tracked:
            tag = "tracked"
        elif any(p in kw for p in EXCLUDE):
            tag = "exclude"
        else:
            tag = "new"
        print(f"[{tag}] x{hits}\t{kw}")


if __name__ == "__main__":
    main()
