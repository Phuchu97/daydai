import { HybridProductGuide } from "@/components/seo/HybridProductGuide";
import { SurfaceGuideBody } from "@/components/seo/SurfaceGuideBody";
import { STEEL_STRAPPING_TIER_SUMMARY } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { catalogProducts } from "@/data/products";
import { buildProductSchemaOffer } from "@/lib/merchant-offer-schema";
import type { FaqItem } from "@/components/product/FAQSection";
import type { SurfaceGuide } from "@/data/steel-strapping-guide";

const product = catalogProducts.find((item) => item.id === "steel-strapping")!;

function buildFaqs(guide: SurfaceGuide): FaqItem[] {
  return [
    {
      question: `${guide.name} phù hợp môi trường nào?`,
      answer: guide.bestFor.join("; "),
    },
    {
      question: "Có những khổ rộng nào?",
      answer: `Phổ biến ${guide.widths.join("mm, ")}mm. Độ dày thường ${guide.thicknessMm}mm, cuộn khoảng ${guide.coilWeightKg}.`,
    },
    {
      question: `Giá ${guide.name.toLowerCase()} tham khảo?`,
      answer: `Giá theo tổng số kg mỗi đơn, áp dụng mọi khổ 16–32mm: ${STEEL_STRAPPING_TIER_SUMMARY}.`,
    },
    {
      question: "Có báo giá theo lô không?",
      answer: "Có. Đơn càng nhiều tấn giá càng tốt; đơn dự án số lượng rất lớn gửi quy cách, số lượng và địa điểm giao để nhận báo giá riêng trong ngày làm việc.",
    },
  ];
}

export function SurfaceLandingPage({ guide }: { guide: SurfaceGuide }) {
  const pageUrl = `${siteConfig.url}/${guide.slug}`;
  const galleryImages = [
    { src: guide.heroImage.src, alt: guide.heroImage.alt },
    ...guide.gallery.map((item) => ({ src: item.src, alt: item.alt })),
  ];
  const faqs = buildFaqs(guide);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: guide.name,
    description: guide.intro,
    image: galleryImages.map((img) => `${siteConfig.url}${img.src}`),
    sku: `steel-strapping-${guide.surface}`,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: buildProductSchemaOffer(product, pageUrl),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${siteConfig.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dây đai thép",
        item: `${siteConfig.url}/day-dai-thep`,
      },
      { "@type": "ListItem", position: 3, name: guide.name, item: pageUrl },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HybridProductGuide
        product={product}
        heading={guide.h1}
        lead={guide.intro}
        cartName={guide.name}
        images={galleryImages}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Dây đai thép", href: "/day-dai-thep" },
          { label: guide.name },
        ]}
        faqs={faqs}
      >
        <SurfaceGuideBody guide={guide} />
      </HybridProductGuide>
    </>
  );
}
