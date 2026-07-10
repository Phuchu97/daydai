# Daithep – Base Landing Page (Next.js)

Base dự án Next.js chuẩn để xây dựng landing page: TypeScript, Tailwind, App Router, SEO và cấu trúc mở rộng.

## Yêu cầu

- Node.js 18+
- npm / yarn / pnpm

## Cài đặt

```bash
npm install
```

## Chạy development

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

## Cấu trúc thư mục

```
src/
├── app/                 # App Router
│   ├── layout.tsx       # Root layout + SEO metadata
│   ├── page.tsx         # Trang chủ
│   └── globals.css      # Design tokens & Tailwind
├── components/
│   ├── layout/          # Header, Footer
│   └── landing/         # Hero, Features, CTA, Section
├── config/
│   └── site.ts         # Tên site, nav, links, SEO
├── lib/
│   └── utils.ts        # cn() và helpers
└── types/               # TypeScript types (khi cần)
```

## SEO sau khi deploy

1. Đặt `NEXT_PUBLIC_SITE_URL=https://daydaivn.com` (không dấu `/` cuối) trên production.
2. Xác minh Search Console bằng bản ghi DNS TXT (hoặc `GOOGLE_SITE_VERIFICATION` nếu dùng thẻ meta).
3. Gửi sitemap: `https://daydaivn.com/sitemap.xml` trong Google Search Console.
4. Kiểm tra `https://daydaivn.com/robots.txt` cho phép crawl toàn site (trừ `/api/`).
5. Trang SEO chính: `/gioi-thieu`, `/lien-he`, `/bao-gia-day-dai-thep`, `/tu-van`, các landing địa phương.

Khi đổi bảng giá, cập nhật `PRICE_PAGE_LAST_UPDATED` trong `src/config/pricing.ts`.

## Tùy chỉnh

1. **Branding & SEO**  
   Sửa `src/config/site.ts`: `name`, `description`, `url`, `nav`, `links`.

2. **Màu & font**  
   Sửa biến CSS trong `src/app/globals.css` (`:root` và `.dark`).

3. **Nội dung landing**  
   - Hero: `src/components/landing/Hero.tsx` (headline, CTA).  
   - Features: `src/components/landing/Features.tsx` (danh sách tính năng).  
   - CTA cuối: `src/components/landing/CTA.tsx`.

4. **Thêm section**  
   Tạo component trong `src/components/landing/`, export trong `index.ts`, thêm vào `src/app/page.tsx`.

## Scripts

| Script   | Mô tả                |
|----------|----------------------|
| `npm run dev`   | Chạy dev với Turbopack |
| `npm run build` | Build production      |
| `npm run start` | Chạy bản build        |
| `npm run lint`  | Chạy ESLint           |

## Deploy

Xem **[DEPLOY.md](./DEPLOY.md)** — hướng dẫn deploy Docker lên VPS (`160.30.160.31`).

```bash
VPS_PASSWORD='...' ./scripts/deploy-docker.sh
```

---

Base này dùng Next.js 15, React 19, TypeScript, Tailwind CSS và App Router.
