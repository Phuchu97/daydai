import type { Metadata } from "next";
import { HybridProductGuide } from "@/components/seo/HybridProductGuide";
import { SteelSealsGuideBody } from "@/components/seo/SteelSealsGuideBody";
import { siteConfig } from "@/config/site";
import { catalogProducts } from "@/data/products";
import { getProductAggregateRating } from "@/data/reviews";
import { buildProductSchemaOffer } from "@/lib/merchant-offer-schema";

const PAGE_PATH = "/khoa-dai-thep";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const HEADING = "Khóa đai thép (bọ sắt) 16-19-25-32mm khớp bản dây";
const LEAD =
  "Bọ sắt kín và chữ U cho dây đai thép 16mm, 19mm, 25mm, 32mm. Chọn đúng khổ bọ và kìm bấm để mối đai không tuột khi vận chuyển hàng nặng.";

const faqs = [
  {
    question: "Khóa đai thép khác bọ sắt có gì không?",
    answer:
      "Không. Trong kho vận, khóa đai thép, bọ sắt, bọ kín, bọ chữ U đều là phụ kiện giữ mối nối dây đai thép sau khi siết.",
  },
  {
    question: "Dây 19mm dùng bọ mấy mm?",
    answer:
      "Dây 19mm dùng bọ 19.2mm (bọ kín hoặc chữ U). Bọ nhỏ hơn bản dây khoảng 0.2mm để bấm ôm tốt.",
  },
  {
    question: "Bọ kín hay bọ chữ U?",
    answer:
      "Bọ kín phổ biến hơn cho kiện nặng và tuyến xa. Bọ chữ U phù hợp một số quy trình siết tay hoặc khi cần tháo nhanh.",
  },
  {
    question: "Có giao khóa đai thép tại Hà Nội không?",
    answer: `Có. ${siteConfig.name} giao Hà Nội, KCN miền Bắc và toàn quốc, kèm tư vấn khớp dây + kìm bấm.`,
  },
];

const galleryImages = [
  {
    src: "/images/bo-thep-kin.jpg",
    alt: "Khóa đai thép bọ kín dùng với dây đai công nghiệp",
  },
  {
    src: "/images/bo-thep-kin-19-mat-truoc.jpg",
    alt: "Bọ thép kín 19mm mặt trước",
  },
  {
    src: "/images/bo-thep-u-1.jpg",
    alt: "Khóa đai thép chữ U",
  },
  {
    src: "/images/bo-thep-kin-2.jpg",
    alt: "Khóa đai thép bọ kín nhiều khổ",
  },
  {
    src: "/images/bo-thep-kin-mat-sau.jpg",
    alt: "Khóa đai thép mặt sau chi tiết bấm",
  },
];

export const metadata: Metadata = {
  title: "Khóa đai thép (bọ sắt) 16-19-25-32mm | tư vấn nhanh",
  description:
    "Khóa đai thép, bọ sắt kín/chữ U dùng cho dây đai thép công nghiệp. Hướng dẫn chọn khóa theo bản dây và loại dụng cụ siết bấm.",
  keywords: [
    "khóa đai thép",
    "bọ sắt đóng đai",
    "bọ đai thép 19mm",
    "khoa dai thep",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Khóa đai thép (bọ sắt) 16-19-25-32mm | tư vấn nhanh",
    description:
      "Bảng quy cách khóa đai thép và cách chọn theo tải trọng, dụng cụ đóng đai.",
    url: PAGE_URL,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bo-thep-kin.jpg`,
        width: 1200,
        height: 630,
        alt: "Khóa đai thép công nghiệp",
      },
    ],
  },
};

export default function SteelSealsPage() {
  const product = catalogProducts.find((item) => item.id === "steel-seals")!;
  const aggregateRating = getProductAggregateRating(product.id);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Khóa đai thép (bọ sắt)",
    alternateName: ["bọ sắt đóng đai", "bọ kín", "bọ chữ U"],
    description: LEAD,
    image: galleryImages.map((img) => `${siteConfig.url}${img.src}`),
    sku: "steel-seals",
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: buildProductSchemaOffer(product, PAGE_URL),
    ...(aggregateRating ? { aggregateRating } : {}),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${siteConfig.url}/` },
      { "@type": "ListItem", position: 2, name: "Khóa đai thép", item: PAGE_URL },
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
        heading={HEADING}
        lead={LEAD}
        cartName="Khóa đai thép (bọ sắt)"
        images={galleryImages}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/san-pham" },
          { label: "Khóa đai thép" },
        ]}
        faqs={faqs}
      >
        <SteelSealsGuideBody />
      </HybridProductGuide>
    </>
  );
}
