import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/config/site";
import { localBusinessLocationJsonLd } from "@/lib/local-business-schema";
import {
  SteelHero,
  TrustSection,
  ProductsSection,
  WhyChooseUsSection,
  BulkShippingShowcase,
  RealUsageSection,
  TestimonialsSection,
  LeadFormSection,
  FAQSection,
  FinalCTASection,
} from "@/components/landing/steel";

export default function HomePage() {
  const baseUrl = siteConfig.url;
  const faqItems = [
    {
      question: "Dây đai thép chịu tải được bao nhiêu?",
      answer:
        "Tùy quy cách bản rộng và độ dày. Với hàng nặng, chúng tôi tư vấn theo tải trọng và số điểm đai để đảm bảo an toàn vận chuyển.",
    },
    {
      question: "Có giao dây đai thép toàn quốc không?",
      answer:
        "Có. Chúng tôi giao tại Hà Nội, miền Bắc và toàn quốc qua chành xe hoặc đơn vị vận chuyển phù hợp.",
    },
    {
      question: "Có báo giá nhanh cho doanh nghiệp không?",
      answer:
        "Có. Đội ngũ tư vấn báo giá theo số lượng và quy cách, hỗ trợ nhanh qua hotline và Zalo.",
    },
  ];
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteConfig.name,
    url: baseUrl,
    inLanguage: "vi-VN",
    publisher: { "@id": `${baseUrl}/#organization` },
  };
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: siteConfig.company.legalName,
    url: baseUrl,
    image: `${baseUrl}${siteConfig.ogImage}`,
    logo: `${baseUrl}${siteConfig.logoIcon}`,
    telephone: siteConfig.company.phone,
    ...localBusinessLocationJsonLd,
    areaServed: siteConfig.company.serviceArea,
    sameAs: [`https://zalo.me/${siteConfig.company.zaloPhone}`],
    description: siteConfig.description,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <SiteShell showTopBar stackContactsAboveCartBar={false}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SteelHero />
      <TrustSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <BulkShippingShowcase />
      <RealUsageSection />
      <TestimonialsSection />
      <LeadFormSection />
      <FAQSection />
      <FinalCTASection />
    </SiteShell>
  );
}
