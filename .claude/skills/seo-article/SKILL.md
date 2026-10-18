---
name: seo-article
description: Viết hoặc cập nhật bài tư vấn /tu-van/<slug> cho daydaivn.com nhắm từ khoá tìm hiểu (dây đai thép là gì, dùng để làm gì, tiếng Anh, mã HS, so sánh, cách đóng, cách chọn, lỗi thường gặp). Dùng khi từ khoá trong seo-keyword-tracking.csv có target_url "(bài viết mới)", khi người dùng nói "viết bài về X", hoặc khi cần làm mới bài cũ. Bài phải dẫn người đọc về trang sản phẩm hoặc trang báo giá.
---

# Bài tư vấn (/tu-van)

## Dữ liệu ở đâu

- Kiểu `Article` trong `src/data/articles.ts`: `slug, title, description, excerpt, publishedAt, updatedAt, keywords, relatedProductIds, sections[{heading, paragraphs, table?}], faqs?`.
- Bài mới: thêm vào `src/data/secondary-articles.ts` (bài thường) hoặc `priority-articles.ts` (bài trụ cột 800–1200 từ). Bản trong hai file này ghi đè bản cùng slug trong `rawArticles` của `articles.ts`.
- Route, sitemap, OG image và JSON-LD được sinh tự động từ data (`src/app/tu-van/[slug]/page.tsx`, `sitemap.ts`). **Không cần sửa sitemap.**
- `relatedProductIds` hợp lệ: `steel-strapping`, `steel-strapping-tools`, `plastic-strapping-tools`, `steel-seals`.

## Trước khi viết

1. Grep slug và từ khoá trong 3 file data. Đã có bài cùng ý định thì **cập nhật bài đó** (sửa `updatedAt`), không viết bài mới.
2. Một bài nên gom một cụm câu hỏi gần nhau, ví dụ "dây đai thép là gì" + "dùng để làm gì", hoặc "tiếng Anh là gì" + "mã HS".
3. Có thông tin cần xác minh (mã HS, tiêu chuẩn) → dùng WebSearch hoặc WebFetch tìm nguồn chính thống (biểu thuế, hải quan). Ghi rõ trong bài là "tham khảo, xác nhận với hải quan". Không chắc thì hỏi người dùng.

## Cấu trúc bài

- `slug`: không dấu, gạch nối, chứa từ khoá chính.
- `title` ≤ 70 ký tự, từ khoá chính ở đầu; dạng câu hỏi nếu từ khoá là câu hỏi.
- `description` 120–160 ký tự; `excerpt` 1–2 câu.
- `publishedAt`/`updatedAt` là ngày hôm nay (ISO). Khi sửa bài cũ chỉ đổi `updatedAt`.
- `keywords`: từ khoá chính đầu tiên, sau đó là biến thể.
- `sections`: 5–8 mục. Mục đầu **trả lời thẳng** câu hỏi trong 2–3 câu (để giành featured snippet). Có ít nhất 1 `table` với số liệu từ `src/data/steel-strapping-guide.ts`. Có 1 mục hướng người đọc tới hành động: chọn quy cách → trang size/bề mặt; mua → `/bao-gia-day-dai-thep`.
- `faqs`: 3–5 câu, viết đúng kiểu người dùng gõ.
- Đoạn văn gọn, mỗi đoạn 2–4 câu, giọng chuyên gia kho vận, không văn quảng cáo.

## Internal link

Trang chi tiết bài đã tự gắn link thương mại và sản phẩm liên quan. Ngoài ra:
- Thêm link **từ** 1–2 landing page liên quan tới bài mới (dạng "Xem thêm bài …").
- Cập nhật `target_url` trong `seo-keyword-tracking.csv` thành `/tu-van/<slug>`.

## Kiểm tra

`npx tsc --noEmit`, `npx next lint`, rồi chạy `seo-audit`. Báo người dùng URL bài, từ khoá nhắm, và nhắc yêu cầu index trong Search Console sau khi deploy.
