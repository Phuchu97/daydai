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

- **Vercel**: Kết nối repo, build command `npm run build`, output: Next.js.
- **Docker / VPS**: Chạy `npm run build && npm start`, expose port 3000.

---

Base này dùng Next.js 15, React 19, TypeScript, Tailwind CSS và App Router.
