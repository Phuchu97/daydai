---
name: seo-top1
description: Kim chỉ nam SEO của daydaivn.com — mục tiêu đứng top 1 Google Việt Nam cho mọi từ khoá ngành dây đai thép. Dùng khi người dùng hỏi "làm gì tiếp cho SEO", "lên kế hoạch SEO", "tuần này làm gì", "tại sao chưa lên top", hoặc trước khi bắt đầu bất kỳ thay đổi nào về nội dung, trang mới, metadata, schema, internal link. Chọn việc ưu tiên nhất rồi điều phối sang seo-keyword-research, seo-landing-page, seo-article, seo-audit.
---

# SEO top 1 — daydaivn.com

## Mục tiêu then chốt (không thay đổi)

Khi người dùng Google Việt Nam tìm **bất kỳ từ khoá nào liên quan tới sản phẩm của daydaivn.com** — trước hết là **dây đai thép**, sau đó là khoá đai / bọ sắt và dụng cụ đóng đai — website phải **đứng top 1**. Mọi thay đổi trong repo phải trả lời được câu hỏi: *"việc này giúp trang nào lên top cho từ khoá nào?"*. Việc nào không trả lời được thì để sau.

Thứ tự ưu tiên khi các mục tiêu xung đột: **SEO → chuyển đổi (gọi điện / Zalo / form) → hiệu năng**.

## Nguồn dữ liệu chuẩn

| Cái gì | Ở đâu |
|---|---|
| Bản đồ từ khoá → trang đích, độ ưu tiên P1–P3 | `seo-keyword-tracking.csv` |
| Số liệu kỹ thuật (bản rộng, độ dày, chịu lực, m/kg, tải) | `src/data/steel-strapping-guide.ts` (`SPEC_ROWS`, `LOAD_GUIDE_ROWS`, `STRAP_PRICE_ROWS`…) |
| Giá | `src/config/pricing.ts` + `src/data/products.ts` |
| Thông tin công ty, SĐT, Zalo | `src/config/site.ts` |
| Sitemap | `src/app/sitemap.ts` |
| Link nội bộ dùng chung | `src/components/seo/SeoRelatedLinks.tsx` |
| Quy tắc SEO chi tiết của dự án | `.cursor/rules/seo-steel-company.mdc`, `SEO_EXECUTION_PLAYBOOK_VN.md` |

## Quy trình mỗi phiên

1. **Chạy audit trước**: `python3 -I .claude/skills/seo-audit/scripts/seo_audit.py .`. Mọi `ERROR` được ưu tiên trước việc làm nội dung mới; lỗi kỹ thuật làm hỏng cả những trang đang lên top.
2. **Đọc `seo-keyword-tracking.csv`** để chọn việc theo thứ tự:
   1. Từ khoá P1 chưa có trang đích (`target_url` bắt đầu bằng `(`) → skill `seo-landing-page` hoặc `seo-article`.
   2. Từ khoá P1 có trang nhưng `current_position` > 3, hoặc chưa có số liệu → nâng cấp trang đó (nội dung sâu hơn, FAQ, bảng số, internal link).
   3. Từ khoá P2, rồi P3.
   4. Mỗi tháng một lần: skill `seo-keyword-research` để tìm từ khoá mới.
3. **Hỏi người dùng khi cần sự thật kinh doanh**: có bán sản phẩm đó không (bản 25mm, dây đen, máy đóng đai, kéo cắt, inox), giá thật, địa chỉ kho. **Không bao giờ bịa**: không tự nghĩ ra giá, chứng nhận, số năm hoạt động, địa chỉ, tên khách hàng hay review.
4. Sau khi sửa: `npx tsc --noEmit`, `npx next lint`, chạy lại audit. Cập nhật cột `notes`/`next_action` trong CSV cho từ khoá vừa xử lý.
5. Kết thúc phiên bằng một danh sách ngắn gửi người dùng: đã làm gì, cho từ khoá nào, việc tiếp theo đề xuất.

## Nguyên tắc không đổi

- **Một từ khoá chính ↔ một trang.** Trước khi tạo trang mới, grep `keywords:` và CSV để chắc chắn chưa có trang nào đang nhắm cùng ý định tìm kiếm. Ý định trùng thì nâng cấp trang cũ, không tạo trang mới.
- **Số liệu phải đúng vật lý.** m/kg = 1 / (rộng_mm × dày_mm × 7,85 / 1000). Lấy số từ `steel-strapping-guide.ts`, không gõ tay số mới vào trang.
- **Không spam schema.** Không thêm `aggregateRating`/review giả, không khai miễn phí vận chuyển nếu không đúng, giá trong schema phải khớp giá hiển thị.
- **Trang nào cũng có**: H1 chứa từ khoá chính, title ≤ 70 ký tự, description 50–170 ký tự, canonical, breadcrumb + JSON-LD, FAQ, bảng số liệu, CTA gọi điện/Zalo/form, ít nhất 3 link nội bộ đi và 2 link nội bộ đến.
- **Biến thể người Việt hay gõ**: "dây đai sắt", "đai thép", bản không dấu ("day dai thep"), dạng câu hỏi ("giá bao nhiêu", "là gì"). Dùng tự nhiên trong H2/FAQ, không nhồi nhét.
- Những việc ngoài repo nhưng quyết định thứ hạng (Google Business Profile, Search Console, backlink, review thật từ khách) thì nhắc người dùng làm. Xem `references/off-page.md`.

## Đo lường

Top 1 chỉ xác nhận được bằng dữ liệu thật. Đề nghị người dùng xuất Google Search Console → Hiệu suất → Truy vấn (28 ngày) và điền `current_position`, `impressions_28d`, `ctr` vào CSV. Khi có số liệu:
- Vị trí 4–15 và impression cao → nâng cấp nội dung trang đó trước (dễ lên top nhất).
- CTR thấp khi đã ở top 3 → viết lại title/description.
- Không có impression sau 4 tuần → kiểm tra index (URL Inspection), internal link, ý định tìm kiếm.
