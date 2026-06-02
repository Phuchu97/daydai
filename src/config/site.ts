/**
 * Site metadata & config for SEO and shared content
 */
export const siteConfig = {
  name: "Thiết bị đóng đai công nghiệp",
  description:
    "Chuyên dây đai thép và bộ dụng cụ đóng đai cho nhà máy, logistics và xây dựng. Hàng luôn có sẵn, giao nhanh toàn quốc, tư vấn kỹ thuật miễn phí.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://daydaivn.com",
  ogImage: "/images/day-dai-3.JPG",
  company: {
    legalName: "Thiết bị đóng đai công nghiệp",
    phone: "0339689386",
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
      "khoa dai thep",
    ],
  },
  links: {
    twitter: "",
    github: "",
  },
  nav: [
    { label: "Giới thiệu", href: "/#hero" },
    { label: "Sản phẩm", href: "/san-pham" },
    { label: "Báo giá", href: "/bao-gia-day-dai-thep" },
    { label: "Tư vấn", href: "/tu-van" },
    { label: "Liên hệ", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
