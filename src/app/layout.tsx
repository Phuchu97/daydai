import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";
import { ToastContainer } from "@/components/ui/toast/ToastContainer";
import { AttributionTracker } from "@/components/analytics/AttributionTracker";
import { WebVitalsTracker } from "@/components/analytics/WebVitalsTracker";

export const metadata: Metadata = {
  title: {
    default: "Dây đai thép & bộ dụng cụ đóng đai công nghiệp",
    template: `%s | ${siteConfig.name}`,
  },
  icons: {
    icon: "/images/day-dai-3.JPG",
  },
  description:
    "Chuyên cung cấp dây đai thép và bộ dụng cụ đóng đai cho nhà máy, kho bãi, logistics và xây dựng. Hàng luôn có sẵn, giao nhanh toàn quốc, tư vấn kỹ thuật miễn phí.",
  keywords: [
    "dây đai thép",
    "dây đai thép đóng gói",
    "bộ dụng cụ đóng đai thép",
    "dụng cụ siết đai thép",
    "đóng gói công nghiệp",
    "đóng gói pallet thép",
    "vật tư đóng gói",
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Dây đai thép & bộ dụng cụ đóng đai công nghiệp",
    description:
      "Giải pháp dây đai thép và bộ dụng cụ đóng đai cho nhà máy, kho bãi, logistics và xây dựng. Giao hàng toàn quốc, hỗ trợ kỹ thuật miễn phí.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dây đai thép & bộ dụng cụ đóng đai công nghiệp",
    description:
      "Giải pháp đóng gói an toàn cho hàng hóa trọng tải lớn. Hàng luôn có sẵn, giao nhanh toàn quốc.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen font-sans">
        <AttributionTracker />
        <WebVitalsTracker />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
