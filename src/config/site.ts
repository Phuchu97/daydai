/**
 * Site metadata & config for SEO and shared content
 */
export const siteConfig = {
  name: "Dây Đai Thép Việt Nam",
  shortName: "daydaivn",
  domain: "daydaivn.com",
  tagline:
    "Chuyên cung cấp dây đai thép và bộ dụng cụ đóng đai cho nhà máy, xưởng sản xuất, logistics",
  description:
    "Dây Đai Thép Việt Nam (daydaivn.com) chuyên dây đai thép, khóa đai thép và bộ dụng cụ đóng đai. Hàng luôn có sẵn, giao nhanh toàn quốc, tư vấn kỹ thuật miễn phí.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://daydaivn.com",
  logo: "/brand/logo.svg",
  logoIcon: "/brand/logo-icon.svg",
  ogImage: "/images/day-dai-thep-chat-luong-cao.jpg",
  company: {
    legalName: "Dây Đai Thép Việt Nam",
    phone: "0339.689.386",
    zaloPhone: "0339689386",
    address: "Hà Nội, Việt Nam",
    serviceArea: "Toàn quốc, ưu tiên Hà Nội và miền Bắc",
  },
  seo: {
    primaryKeywords: [
      "dây đai thép",
      "dây đai sắt",
      "đai thép",
      "dây đai thép công nghiệp",
      "khóa đai thép",
      "bộ dụng cụ đóng đai thép",
      "máy đóng đai thép",
      "dây thép đóng pallet",
      "day dai thep",
      "daydaivn",
      "khoa dai thep",
    ],
  },
  links: {
    twitter: "",
    github: "",
  },
  nav: [
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Sản phẩm", href: "/san-pham" },
    { label: "Báo giá", href: "/bao-gia-day-dai-thep" },
    { label: "Tư vấn", href: "/tu-van" },
    { label: "Liên hệ", href: "/lien-he" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
