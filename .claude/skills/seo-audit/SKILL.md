---
name: seo-audit
description: Kiểm tra SEO kỹ thuật toàn bộ repo daydaivn.com — metadata, canonical, title trùng, cannibalization, sitemap, link nội bộ hỏng, trang mồ côi, ảnh thiếu, số liệu m/kg sai, giá lệch giữa các file, độ mới bảng giá, rủi ro schema review, bản đồ từ khoá và bí mật trong .env. Dùng trước và sau mọi thay đổi SEO, trước khi deploy, hoặc khi người dùng hỏi "site có lỗi SEO gì", "kiểm tra SEO", "audit".
---

# SEO audit

## Chạy

```bash
python3 -I .claude/skills/seo-audit/scripts/seo_audit.py .
```

Exit code 1 nếu có `ERROR`. Script chỉ đọc file, không gọi mạng.

## Các mục kiểm tra

| Khu vực | Mức | Ý nghĩa |
|---|---|---|
| metadata / canonical | ERROR | Trang không có title/description/canonical |
| title | ERROR / WARN | Title trùng giữa các trang; title > 70 ký tự |
| description | WARN | Ngoài khoảng 50–170 ký tự |
| cannibalization | WARN | Nhiều trang có cùng từ khoá đứng đầu mảng `keywords` |
| sitemap | ERROR | Trang có mà sitemap thiếu, hoặc sitemap có mà trang không tồn tại |
| link | ERROR | `href` nội bộ trỏ tới route không tồn tại |
| orphan | WARN | Trang không có link nội bộ nào trỏ tới |
| asset | ERROR | Ảnh hoặc video được tham chiếu nhưng không có trong `public/` |
| facts | ERROR | m/kg trong `SPEC_ROWS` sai so với công thức thép 7,85 g/cm³ |
| pricing | ERROR | Giá bộ dụng cụ khác nhau giữa `pricing.ts` và `products.ts` |
| freshness | WARN | `PRICE_PAGE_LAST_UPDATED` quá 45 ngày |
| schema | ERROR | Có file đưa `aggregateRating` vào JSON-LD (review trên site chưa xác minh) |
| keyword-map | WARN / INFO | `target_url` trong CSV không tồn tại / từ khoá chưa có trang |
| security | ERROR | `.env` không nằm trong `.gitignore` |

## Cách xử lý kết quả

1. Sửa toàn bộ `ERROR` về link, sitemap, canonical và asset ngay; đây là lỗi máy móc, an toàn để sửa.
2. Lỗi cần quyết định kinh doanh (giá nào đúng, review nào là thật, nội dung `.env`) → **hỏi người dùng**, không tự chọn.
3. `cannibalization` → xem 2 trang: tách ý định (sửa từ khoá chính của một trang) hoặc gộp trang và redirect.
4. `freshness` → hỏi người dùng giá mới, cập nhật `STRAP_PRICE_ROWS` và `PRICE_PAGE_LAST_UPDATED`. Title trang báo giá tự đổi theo ngày này.
5. Sau đó chạy `npx tsc --noEmit && npx next lint`. Nếu được phép, chạy thêm `npm run build` để chắc chắn mọi route static build được.

## Mở rộng script

Khi phát hiện một loại lỗi SEO mới lặp lại, thêm một check vào `scripts/seo_audit.py`: một khối, một `add(sev, area, msg)`. Thử bằng cách cố ý gây lỗi trong một bản sao repo ở thư mục scratchpad để chắc check bắt được, rồi mới tin kết quả "sạch".

## Ngoài phạm vi script

Script không thay được việc kiểm tra trên trang thật. Sau khi deploy, nhắc người dùng:
- Rich Results Test (search.google.com/test/rich-results) cho trang sản phẩm và trang có FAQ.
- PageSpeed Insights trên mobile cho trang chủ, `/day-dai-thep`, `/bao-gia-day-dai-thep`.
- Search Console → Trang (Pages) để xem URL chưa được index.
