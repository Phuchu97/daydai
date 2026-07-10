import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";
import { aboutFaqs, aboutProductShowcase } from "@/data/about-content";
import { siteConfig } from "@/config/site";

const pageDescription =
  "Giới thiệu Dây Đai Thép Việt Nam (daydaivn.com): nhà cung cấp dây đai thép mạ kẽm, khóa đai thép, bộ dụng cụ đóng dây đai thép và nhựa. Tư vấn quy cách, hàng sẵn kho, giao toàn quốc.";

export const metadata: Metadata = {
  title: "Giới thiệu | nhà cung cấp dây đai thép & dụng cụ đóng đai",
  description: pageDescription,
  keywords: [
    "giới thiệu dây đai thép",
    "nhà cung cấp dây đai thép",
    "công ty dây đai thép việt nam",
    "bộ dụng cụ đóng đai thép",
    "khóa đai thép",
    "dây đai thép công nghiệp",
    "daydaivn",
  ],
  alternates: {
    canonical: `${siteConfig.url}/gioi-thieu`,
  },
  openGraph: {
    title: "Giới thiệu Dây Đai Thép Việt Nam",
    description: pageDescription,
    url: `${siteConfig.url}/gioi-thieu`,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/kho-dung-cu.jpeg`,
        width: 1200,
        height: 900,
        alt: "Kho dây đai thép và dụng cụ đóng đai — Dây Đai Thép Việt Nam",
      },
    ],
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `Giới thiệu ${siteConfig.name}`,
    url: `${siteConfig.url}/gioi-thieu`,
    description: pageDescription,
    inLanguage: "vi-VN",
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.company.legalName,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.logo}`,
      telephone: siteConfig.company.phone,
      description: siteConfig.description,
      areaServed: {
        "@type": "Country",
        name: "Việt Nam",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hà Nội",
        addressCountry: "VN",
      },
      knowsAbout: [
        "Dây đai thép công nghiệp",
        "Khóa đai thép",
        "Bộ dụng cụ đóng dây đai thép",
        "Bộ dụng cụ đóng dây đai nhựa",
      ],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: `${siteConfig.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Giới thiệu",
        item: `${siteConfig.url}/gioi-thieu`,
      },
    ],
  };

  const productListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sản phẩm Dây Đai Thép Việt Nam",
    itemListElement: aboutProductShowcase.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${siteConfig.url}${product.slug}`,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aboutFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <MarketingPageLayout>
        <AboutPageContent />
      </MarketingPageLayout>
    </>
  );
}
