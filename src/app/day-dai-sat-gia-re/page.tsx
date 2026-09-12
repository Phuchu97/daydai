import type { Metadata } from "next";
import { HybridProductGuide } from "@/components/seo/HybridProductGuide";
import { DayDaiSatGiaReGuideBody } from "@/components/seo/DayDaiSatGiaReGuideBody";
import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { catalogProducts } from "@/data/products";
import { getProductAggregateRating } from "@/data/reviews";
import { buildProductSchemaOffer } from "@/lib/merchant-offer-schema";

const PAGE_PATH = "/day-dai-sat-gia-re";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const HEADING = "Dây đai sắt giá rẻ — tối ưu chi phí theo kg, giao nhanh";
const LEAD = `Dây đai sắt (dây đai thép đóng hàng) 16/19/32mm giá theo kg. Tham khảo từ ${STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg — chọn đúng quy cách, đặt lô để giảm chi phí kiện, giao Hà Nội & KCN miền Bắc.`;

const faqs = [
  {
    question: "Dây đai sắt giá rẻ có kém lực không?",
    answer:
      "Không nếu chọn đúng bản và độ dày theo tải. “Giá rẻ” là tối ưu chi phí/kg kiện (bản vừa, bề mặt dầu cho kho khô, đặt đủ lô) — không phải dùng dây mỏng quá tải.",
  },
  {
    question: "Giá dây đai sắt bao nhiêu một kg?",
    answer: `Giá website tham khảo ${STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg. Giá lô chốt theo dầu / mạ kẽm / sơn, độ dày, số kg và điểm giao. Cuộn phổ biến 30–50kg.`,
  },
  {
    question: "Làm sao mua dây đai sắt tiết kiệm nhất?",
    answer:
      "Chọn bản đủ tải (tránh oversized), ưu tiên dây dầu nếu kho khô, đặt theo kg/tháng và khớp bọ + kìm đúng size để khỏi phải siết lại.",
  },
  {
    question: "Địa chỉ và hotline báo giá?",
    answer: `${siteConfig.company.legalName} — ${siteConfig.company.address}. Hotline / Zalo ${siteConfig.company.phone}.`,
  },
];

const galleryImages = [
  {
    src: "/images/day-dai-thep-dau.jpg",
    alt: "Dây đai sắt giá rẻ phủ dầu tại kho",
  },
  {
    src: "/images/lo-day-dai-thep-giao-cho-khach-hang.jpg",
    alt: "Lô dây đai sắt giao nhanh cho doanh nghiệp",
  },
  {
    src: "/images/day-dai-thep-chat-luong-cao.jpg",
    alt: "Cuộn dây đai sắt chất lượng đều",
  },
  {
    src: "/images/day-dai-thep-tai-kho-khach-hang.jpg",
    alt: "Dây đai sắt sẵn tại kho khách hàng",
  },
];

export const metadata: Metadata = {
  title: "Dây đai sắt giá rẻ | tối ưu chi phí theo kg, giao nhanh",
  description: `Mua dây đai sắt giá rẻ 16mm, 19mm, 32mm. Giá từ ${STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg, chọn đúng quy cách, đặt lô, giao Hà Nội và KCN miền Bắc.`,
  keywords: [
    "dây đai sắt giá rẻ",
    "mua dây đai sắt giá rẻ",
    "giá dây đai sắt",
    "dây đai sắt theo kg",
    "đai sắt đóng hàng giá rẻ",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Dây đai sắt giá rẻ | tối ưu chi phí theo kg, giao nhanh",
    description:
      "Dây đai sắt 16/19/32mm giá theo kg — tối ưu chi phí kiện, khớp bọ và kìm, giao Hà Nội & miền Bắc.",
    url: PAGE_URL,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/day-dai-thep-dau.jpg`,
        width: 1200,
        height: 630,
        alt: "Dây đai sắt giá rẻ",
      },
    ],
  },
};

export default function CheapIronStrappingPage() {
  const product = catalogProducts.find((item) => item.id === "steel-strapping")!;
  const aggregateRating = getProductAggregateRating(product.id);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Dây đai sắt giá rẻ",
    alternateName: ["dây đai thép giá rẻ", "đai sắt đóng hàng giá rẻ"],
    description: LEAD,
    image: galleryImages.map((img) => `${siteConfig.url}${img.src}`),
    sku: "steel-strapping-sat-gia-re",
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: buildProductSchemaOffer(product, PAGE_URL),
    ...(aggregateRating ? { aggregateRating } : {}),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${siteConfig.url}/` },
      { "@type": "ListItem", position: 2, name: "Dây đai sắt", item: `${siteConfig.url}/day-dai-sat` },
      { "@type": "ListItem", position: 3, name: "Dây đai sắt giá rẻ", item: PAGE_URL },
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
        cartName="Dây đai sắt giá rẻ"
        images={galleryImages}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Dây đai sắt", href: "/day-dai-sat" },
          { label: "Giá rẻ" },
        ]}
        faqs={faqs}
      >
        <DayDaiSatGiaReGuideBody />
      </HybridProductGuide>
    </>
  );
}
