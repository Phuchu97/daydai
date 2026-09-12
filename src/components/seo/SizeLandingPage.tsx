import { HybridProductGuide } from "@/components/seo/HybridProductGuide";
import { SizeGuideBody } from "@/components/seo/SizeGuideBody";
import { siteConfig } from "@/config/site";
import { catalogProducts } from "@/data/products";
import { getProductAggregateRating } from "@/data/reviews";
import { buildProductSchemaOffer } from "@/lib/merchant-offer-schema";
import type { FaqItem } from "@/components/product/FAQSection";
import type { SizeGuide } from "@/data/steel-strapping-guide";
import { PAIRING_ROWS, STRAP_PRICE_ROWS } from "@/data/steel-strapping-guide";

const product = catalogProducts.find((item) => item.id === "steel-strapping")!;

function buildFaqs(guide: SizeGuide): FaqItem[] {
  const pairing = PAIRING_ROWS.find((row) => row.strapWidthMm === guide.widthMm);
  return [
    {
      question: `Khi nào nên dùng dây đai thép ${guide.widthMm}mm?`,
      answer: guide.whenToChoose.join(" "),
    },
    {
      question: `Thông số kỹ thuật dây ${guide.widthMm}mm?`,
      answer: `Độ dày ${guide.thicknessMm}mm, chịu lực khoảng ${guide.breakLoadN}N, ${guide.metersPerKg} m/kg, tải tham khảo ${guide.loadHint}.`,
    },
    {
      question: "Khi nào nên đổi quy cách khác?",
      answer: guide.whenToUpgrade,
    },
    {
      question: `Giá dây đai thép ${guide.widthMm}mm bao nhiêu?`,
      answer: `Giá tham khảo theo loại bề mặt: ${STRAP_PRICE_ROWS.filter((row) => row.widthMm === guide.widthMm)
        .map((row) => `${row.surfaceLabel} ${row.priceLabel}`)
        .join("; ")}. Chốt lô theo số kg và điểm giao.`,
    },
    ...(pairing
      ? [
          {
            question: `Khóa đai khớp dây ${guide.widthMm}mm?`,
            answer: `${pairing.sealWidthLabel}. ${pairing.note}.`,
          },
        ]
      : []),
  ];
}

export function SizeLandingPage({ guide }: { guide: SizeGuide }) {
  const pageUrl = `${siteConfig.url}/${guide.slug}`;
  const galleryImages = [
    { src: guide.heroImage.src, alt: guide.heroImage.alt },
    ...guide.gallery.map((item) => ({ src: item.src, alt: item.alt })),
  ];
  const faqs = buildFaqs(guide);
  const aggregateRating = getProductAggregateRating(product.id);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: guide.name,
    description: guide.intro,
    image: galleryImages.map((img) => `${siteConfig.url}${img.src}`),
    sku: `steel-strapping-${guide.widthMm}mm`,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: buildProductSchemaOffer(product, pageUrl),
    ...(aggregateRating ? { aggregateRating } : {}),
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
        <SizeGuideBody guide={guide} />
      </HybridProductGuide>
    </>
  );
}
