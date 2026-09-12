import type { Metadata } from "next";
import { HybridProductGuide } from "@/components/seo/HybridProductGuide";
import { SteelToolsGuideBody } from "@/components/seo/SteelToolsGuideBody";
import { siteConfig } from "@/config/site";
import { catalogProducts } from "@/data/products";
import { getProductAggregateRating } from "@/data/reviews";
import { buildProductSchemaOffer } from "@/lib/merchant-offer-schema";

const PAGE_PATH = "/siet-day-thep";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const HEADING = "Siết dây thép — bộ kìm siết và kìm bấm bọ";
const LEAD =
  "Siết dây thép (đóng đai thép) bằng bộ kìm siết + kìm bấm bọ cho dây 16mm, 19mm, 32mm. Chọn đúng khổ theo bản dây đang dùng tại kho, giảm lỗi tuột mối và tiết kiệm thời gian thao tác.";

const faqs = [
  {
    question: "Bộ dụng cụ đóng đai thép gồm những gì?",
    answer:
      "Thường gồm kìm siết (tensioner) căng dây và kìm bấm bọ (sealer) khóa mối nối. Hai dụng cụ phải cùng khổ với bản dây và bọ.",
  },
  {
    question: "Bộ 16-19mm có dùng dây 32mm được không?",
    answer:
      "Không. Bộ 16-19mm chỉ hỗ trợ dây mỏng đến khoảng 0.8mm. Dây 32mm cần bộ 32mm riêng.",
  },
  {
    question: "Quy trình đóng đai chuẩn?",
    answer:
      "Luồn dây → siết căng bằng kìm siết → bấm bọ bằng sealer → kiểm tra mối khóa trước khi xuất kho.",
  },
  {
    question: "Có tư vấn chọn bộ theo ảnh pallet không?",
    answer: `Có. Gửi ảnh qua Zalo ${siteConfig.company.phone}, chúng tôi đề xuất bộ và quy cách dây phù hợp.`,
  },
];

const galleryImages = [
  {
    src: "/images/bo-dung-cu-dong-dai.jpg",
    alt: "Bộ dụng cụ siết dây thép gồm kìm siết và kìm bấm",
  },
  {
    src: "/images/kim-siet-dai.jpg",
    alt: "Kìm siết dây thép",
  },
  {
    src: "/images/kim-bam-bo.webp",
    alt: "Kìm bấm bọ sắt khóa đai thép",
  },
  {
    src: "/images/dung-cu-dong-dai-3.jpg",
    alt: "Bộ dụng cụ siết dây thép chi tiết",
  },
  {
    src: "/images/dung-cu-dong-dai-chi-tiet.jpg",
    alt: "Chi tiết bộ dụng cụ siết dây thép",
  },
];

export const metadata: Metadata = {
  title: "Siết dây thép | bộ kìm siết và kìm bấm bọ",
  description:
    "Siết dây thép bằng bộ dụng cụ đóng đai: kìm siết + kìm bấm bọ theo bản 16/19/32mm. Hướng dẫn quy trình siết - bấm - khóa đúng kỹ thuật cho kho và nhà máy.",
  keywords: [
    "siết dây thép",
    "siết đai thép",
    "kìm siết dây thép",
    "bộ dụng cụ siết dây thép",
    "đóng đai thép",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Siết dây thép | bộ kìm siết và kìm bấm bọ",
    description:
      "Thông số, quy trình sử dụng và checklist chọn bộ dụng cụ siết dây thép phù hợp tải trọng.",
    url: PAGE_URL,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bo-dung-cu-dong-dai.jpg`,
        width: 1200,
        height: 630,
        alt: "Siết dây thép — bộ dụng cụ đóng đai",
      },
    ],
  },
};

export default function TensionSteelStrapPage() {
  const product = catalogProducts.find((item) => item.id === "steel-strapping-tools")!;
  const aggregateRating = getProductAggregateRating(product.id);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Siết dây thép",
    alternateName: [
      "bộ dụng cụ đóng đai thép",
      "kìm siết đai thép",
      "kìm bấm bọ sắt",
    ],
    description: LEAD,
    image: galleryImages.map((img) => `${siteConfig.url}${img.src}`),
    sku: "steel-strapping-tools-siet-day",
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: buildProductSchemaOffer(product, PAGE_URL),
    ...(aggregateRating ? { aggregateRating } : {}),
  };
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Quy trình siết dây thép",
    step: [
      {
        "@type": "HowToStep",
        name: "Luồn dây và đặt bọ",
        text: "Luồn dây đúng vị trí quanh kiện hàng và đặt bọ thép đúng bản dây.",
      },
      {
        "@type": "HowToStep",
        name: "Siết căng dây",
        text: "Dùng kìm siết siết tới lực phù hợp với tải trọng kiện hàng.",
      },
      {
        "@type": "HowToStep",
        name: "Bấm khóa và kiểm tra",
        text: "Dùng sealer bấm bọ, sau đó kiểm tra độ ổn định của mối đai.",
      },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${siteConfig.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bộ dụng cụ đóng đai thép",
        item: `${siteConfig.url}/bo-dung-cu-dong-dai-thep`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Siết dây thép",
        item: PAGE_URL,
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
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
        cartName="Bộ dụng cụ siết dây thép"
        images={galleryImages}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Bộ dụng cụ đóng đai thép", href: "/bo-dung-cu-dong-dai-thep" },
          { label: "Siết dây thép" },
        ]}
        faqs={faqs}
      >
        <SteelToolsGuideBody />
      </HybridProductGuide>
    </>
  );
}
