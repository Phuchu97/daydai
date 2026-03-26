/**
 * Site metadata & config for SEO and shared content
 */
export const siteConfig = {
  name: "Thiết bị đóng đai công nghiệp",
  description:
    "Chuyên dây đai thép và bộ dụng cụ đóng đai cho nhà máy, logistics và xây dựng. Hàng luôn có sẵn, giao nhanh toàn quốc, tư vấn kỹ thuật miễn phí.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://daydaivn.com",
  ogImage: "/og.png",
  links: {
    twitter: "",
    github: "",
  },
  nav: [
    { label: "Giới thiệu", href: "#hero" },
    { label: "Sản phẩm", href: "#products" },
    { label: "Ưu điểm", href: "#why-us" },
    { label: "Khách hàng", href: "#testimonials" },
    { label: "Liên hệ", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
