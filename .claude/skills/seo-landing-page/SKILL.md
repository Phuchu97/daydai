---
name: seo-landing-page
description: Tạo mới hoặc nâng cấp một landing page nhắm từ khoá cho daydaivn.com (ví dụ /day-dai-thep-25mm, /day-dai-thep-dong-hang, trang theo tỉnh, theo bề mặt, theo ứng dụng). Dùng khi một từ khoá thương mại trong seo-keyword-tracking.csv chưa có trang đích, khi người dùng nói "làm trang cho từ khoá X", hoặc khi cần đẩy một trang đang ở vị trí 4–15 lên top. Đảm bảo đúng khuôn mẫu Next.js, metadata, JSON-LD, sitemap, link nội bộ và số liệu chuẩn của dự án.
---

# Landing page nhắm từ khoá

## 0. Kiểm tra trước khi tạo

1. Grep từ khoá trong `src/app/**/page.tsx` (mảng `keywords:`) và `seo-keyword-tracking.csv`. Nếu trang khác đã nhắm **cùng ý định** thì **nâng cấp trang đó**, không tạo trang mới (tránh cannibalization).
2. Sản phẩm hoặc quy cách đó có thật sự được bán không? Chưa rõ thì hỏi người dùng trước.
3. Ý định quá gần một trang có sẵn (ví dụ "đóng pallet" và "đóng hàng") → chia rõ: trang hẹp giữ ý định hẹp, trang rộng bao quát và link qua lại.

## 1. Khuôn mẫu

Có 3 kiểu, chọn kiểu phù hợp:

| Kiểu | Dùng khi | Mẫu tham khảo |
|---|---|---|
| Theo bản rộng | dây đai thép 16/19/25/32mm | Thêm 1 phần tử vào `SIZE_GUIDES` trong `src/data/steel-strapping-guide.ts`, rồi tạo `src/app/<slug>/page.tsx` chép từ `src/app/day-dai-thep-16mm/page.tsx` (dùng `getSizeGuide`, `SizeLandingPage`) |
| Theo bề mặt | dầu / mạ kẽm / sơn / đen | Thêm vào `SURFACE_GUIDES`, chép page từ `src/app/day-dai-thep-dau/page.tsx` (`SurfaceLandingPage`) |
| Ứng dụng, tỉnh, nhà cung cấp | đóng hàng, Hà Nội, miền Bắc… | `src/app/day-dai-thep-dong-hang/page.tsx` (page độc lập dùng `MarketingPageLayout`) |

Nếu là kiểu data-driven thì thêm data và route theo đúng cách các trang cùng loại đang làm. Đọc 1 trang cùng loại trước khi viết.

## 2. Checklist bắt buộc cho mỗi trang

**Metadata** (`export const metadata`):
- `title`: từ khoá chính đứng đầu, ≤ 70 ký tự, không trùng title trang khác. Dùng hằng số, dùng chung cho `openGraph.title`.
- `description`: 50–170 ký tự; có từ khoá chính, lợi ích cụ thể (bản rộng, giao hàng) và lời kêu gọi.
- `keywords`: phần tử đầu là từ khoá chính (audit dùng phần tử này để phát hiện cannibalization), tiếp theo là biến thể "sắt", không dấu, câu hỏi.
- `alternates.canonical: ${siteConfig.url}${PAGE_PATH}`.
- `openGraph` có ảnh thật trong `public/images`.

**Nội dung**:
- 1 `<h1>` chứa từ khoá chính. Đoạn mở đầu 2–4 câu trả lời thẳng câu hỏi của người tìm.
- `BreadcrumbNav` + JSON-LD `BreadcrumbList`.
- `SeoPageGallery` với ảnh thật và alt mô tả có ngữ cảnh công nghiệp.
- `QuickQuoteForm sourcePage={PAGE_PATH}` gần đầu trang.
- Ít nhất 1 bảng số liệu lấy từ `SPEC_ROWS` / `LOAD_GUIDE_ROWS` / `STRAP_PRICE_ROWS`. **Không gõ số tay.**
- H2 dùng các biến thể tìm kiếm thật (lấy từ CSV hoặc autocomplete).
- FAQ 4–6 câu, câu hỏi viết đúng kiểu người dùng gõ ("…giá bao nhiêu", "…là gì"), kèm JSON-LD `FAQPage`.
- Offer: `buildOfferCatalogItem` / `buildMerchantOffer` từ `src/lib/merchant-offer-schema.ts`, giá lấy từ `src/config/pricing.ts`.
- CTA: `PhoneCtaButton`. Nút Zalo và gọi điện nổi đã có sẵn trong layout.
- `SeoRelatedLinks excludeHref={PAGE_PATH}` ở cuối.

**Đăng ký trang**:
- Thêm URL vào `src/app/sitemap.ts`.
- Thêm vào `DEFAULT_LINKS` của `SeoRelatedLinks.tsx` nếu là trang P1 hoặc P2.
- Thêm ít nhất 2 link **đến** trang mới từ trang liên quan nhất (trang trụ cột `/day-dai-thep` qua `DayDaiThepGuideBody.tsx`, trang anh em cùng cụm, bài tư vấn liên quan). Anchor text mô tả rõ, không lặp y nguyên một cụm.
- Cập nhật `target_url` trong `seo-keyword-tracking.csv`.

## 3. Quy tắc nội dung

- Tiếng Việt tự nhiên cho người mua B2B (thủ kho, quản đốc, nhân viên mua hàng). Dùng thuật ngữ ngành: bản rộng, độ dày, chịu lực (N), m/kg, bọ kín / chữ U, kìm siết, kìm bấm, pallet, kiện, container, chành xe.
- Mỗi trang phải có góc nhìn riêng (bảng chọn theo loại hàng, theo tải, theo tuyến…), không sao chép đoạn văn của trang khác.
- Không bịa: chứng nhận, số năm, tên khách hàng, địa chỉ, giá, cam kết giao hàng mà người dùng chưa xác nhận.
- Ví dụ tính toán phải đúng: m/kg = 1 / (rộng × dày × 7,85 / 1000); số mét = kg × m/kg.

## 4. Kiểm tra

```bash
npx tsc --noEmit && npx next lint
python3 -I .claude/skills/seo-audit/scripts/seo_audit.py .
```
Không được có `ERROR` mới. Báo người dùng URL trang, từ khoá nhắm, và nhắc: sau khi deploy, vào Search Console → URL Inspection → Request indexing.
