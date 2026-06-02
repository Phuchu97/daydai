import type { Metadata, Viewport } from "next";
import { Geist, Outfit } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";
import { ToastContainer } from "@/components/ui/toast/ToastContainer";
import { AttributionTracker } from "@/components/analytics/AttributionTracker";
import { WebVitalsTracker } from "@/components/analytics/WebVitalsTracker";

const fontSans = Geist({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Outfit({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dây đai thép, khóa đai thép và dụng cụ đóng đai công nghiệp",
    template: `%s | ${siteConfig.name}`,
  },
  icons: {
    icon: "/images/day-dai-3.JPG",
  },
  description:
    "Nhà cung cấp dây đai thép, khóa đai thép và bộ dụng cụ đóng đai cho nhà máy, kho bãi, logistics tại Việt Nam. Báo giá nhanh, giao hàng toàn quốc.",
  keywords: siteConfig.seo.primaryKeywords,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Dây đai thép, khóa đai thép và dụng cụ đóng đai công nghiệp",
    description:
      "Chuyên dây đai thép công nghiệp, khóa đai thép, bộ dụng cụ siết đai cho hàng nặng. Phục vụ Hà Nội, miền Bắc và toàn quốc.",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Dây đai thép công nghiệp tại kho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dây đai thép, khóa đai thép và dụng cụ đóng đai công nghiệp",
    description:
      "Nhà cung cấp dây đai thép cho nhà máy, kho bãi và logistics tại Việt Nam.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
  category: "Industrial Packaging",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "VN-HN",
    "geo.placename": "Ha Noi",
    "og:locale:alternate": "en_US",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: siteConfig.company.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hà Nội",
      addressCountry: "VN",
      streetAddress: siteConfig.company.address,
    },
    areaServed: "VN",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.company.phone,
        contactType: "sales",
        areaServed: "VN",
        availableLanguage: ["vi"],
      },
    ],
  };

  return (
    <html lang="vi" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="min-h-screen font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only z-[70] rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
        >
          Bỏ qua menu và tới nội dung chính
        </a>
        <AttributionTracker />
        <WebVitalsTracker />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
