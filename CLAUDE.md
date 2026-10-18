# daydaivn.com

Website B2B bán dây đai thép, khoá đai (bọ sắt) và dụng cụ đóng đai. Next.js 15 App Router + TypeScript + Tailwind, deploy Docker lên VPS (xem `DEPLOY.md`).

## Mục tiêu then chốt

Đứng **top 1 Google Việt Nam** cho mọi từ khoá liên quan sản phẩm, trước hết là **dây đai thép**. Ưu tiên: SEO → chuyển đổi (gọi / Zalo / form) → hiệu năng. Bắt đầu mọi việc SEO bằng skill `seo-top1`.

## Skill dự án (`.claude/skills/`)

- `seo-top1`: kim chỉ nam, chọn việc ưu tiên, điều phối các skill dưới
- `seo-keyword-research`: gợi ý Google VN → phân loại → `seo-keyword-tracking.csv`
- `seo-landing-page`: tạo hoặc nâng cấp landing page nhắm từ khoá
- `seo-article`: bài `/tu-van/<slug>`
- `seo-audit`: `python3 -I .claude/skills/seo-audit/scripts/seo_audit.py .`

## Quy ước

- Số liệu kỹ thuật lấy từ `src/data/steel-strapping-guide.ts`, giá lấy từ `src/config/pricing.ts`; không gõ số tay vào trang.
- Không bịa giá, chứng nhận, địa chỉ, khách hàng hay review. Thiếu thì hỏi chủ site.
- Kiểm tra: `npx tsc --noEmit`, `npx next lint`, rồi chạy audit.
