import type { Metadata } from "next";
import { HybridProductGuide } from "@/components/seo/HybridProductGuide";
import { LocalRegionGuideBody } from "@/components/seo/LocalRegionGuideBody";
import { siteConfig } from "@/config/site";
import { localBusinessLocationJsonLd } from "@/lib/local-business-schema";
import { catalogProducts } from "@/data/products";
import { buildProductSchemaOffer } from "@/lib/merchant-offer-schema";

const PAGE_PATH = "/day-dai-thep-ha-noi";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const HEADING = "Dây đai thép Hà Nội — giao nhanh KCN, báo giá trong ngày";
const LEAD =
  "Cung cấp dây đai thép 16/19/32mm, khóa đai và bộ dụng cụ cho kho và nhà máy tại Hà Nội, Bắc Ninh, Hưng Yên. Giao 24–48h khi hàng sẵn kho.";

const faqs = [
  {
    question: "Có giao dây đai thép nội thành Hà Nội không?",
    answer:
      "Có. Chúng tôi ưu tiên giao Hà Nội và các KCN phụ cận theo lịch nhập hàng của kho, thường trong 24–48 giờ khi hàng sẵn.",
  },
  {
    question: "Bao lâu nhận được báo giá tại Hà Nội?",
    answer:
      "Trong ngày làm việc sau khi nhận đủ quy cách (bản, độ dày, loại bề mặt) và số kg cần lấy.",
  },
  {
    question: "Có tư vấn khóa đai và dụng cụ cùng lúc không?",
    answer:
      "Có. Chúng tôi đồng bộ dây, bọ sắt và kìm siết/bấm theo tải trọng để giảm lỗi tuột mối.",
  },
  {
    question: "Địa chỉ và hotline liên hệ?",
    answer: `${siteConfig.company.legalName} — ${siteConfig.company.address}. Hotline ${siteConfig.company.phone}.`,
  },
];

const galleryImages = [
  {
    src: "/images/day-dai-thep-tai-kho-khach-hang.jpg",
    alt: "Dây đai thép tại kho khu vực Hà Nội",
  },
  {
    src: "/images/lo-day-dai-thep-giao-cho-khach-hang.jpg",
    alt: "Lô dây đai thép giao nhanh cho doanh nghiệp Hà Nội",
  },
  {
    src: "/images/day-dai-thep-chat-luong-cao.jpg",
    alt: "Cuộn dây đai thép chất lượng cao",
  },
  {
    src: "/images/day-dai-thep-ma-kem-xanh.jpg",
    alt: "Dây đai thép mạ kẽm giao kho Hà Nội",
  },
];

export const metadata: Metadata = {
  title: "Dây đai thép Hà Nội | giao nhanh KCN, báo giá trong ngày",
  description:
    "Mua dây đai thép tại Hà Nội: 16mm, 19mm, 32mm, khóa đai và dụng cụ đồng bộ. Giao nhanh KCN miền Bắc, báo giá trong ngày làm việc.",
  keywords: [
    "dây đai thép hà nội",
    "mua dây đai thép hà nội",
    "khóa đai thép hà nội",
    "nhà cung cấp dây đai thép hà nội",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Dây đai thép Hà Nội | giao nhanh KCN, báo giá trong ngày",
    description:
      "Dây đai thép và khóa đai cho doanh nghiệp Hà Nội, Bắc Ninh, Hưng Yên, Hải Dương.",
    url: PAGE_URL,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/day-dai-thep-tai-kho-khach-hang.jpg`,
        width: 1200,
        height: 630,
        alt: "Dây đai thép Hà Nội",
      },
    ],
  },
};

export default function HanoiLandingPage() {
  const product = catalogProducts.find((item) => item.id === "steel-strapping")!;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.company.legalName,
    url: PAGE_URL,
    telephone: siteConfig.company.phone,
    image: `${siteConfig.url}/images/day-dai-thep-tai-kho-khach-hang.jpg`,
    ...localBusinessLocationJsonLd,
    areaServed: ["Hà Nội", "Bắc Ninh", "Hưng Yên", "Hải Dương", "Vĩnh Phúc"],
    priceRange: "$$",
  };
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Dây đai thép Hà Nội",
    description: LEAD,
    image: galleryImages.map((img) => `${siteConfig.url}${img.src}`),
    sku: "steel-strapping-hanoi",
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: buildProductSchemaOffer(product, PAGE_URL),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${siteConfig.url}/` },
      { "@type": "ListItem", position: 2, name: "Dây đai thép Hà Nội", item: PAGE_URL },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
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
        cartName="Dây đai thép (giao Hà Nội)"
        images={galleryImages}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Dây đai thép", href: "/day-dai-thep" },
          { label: "Hà Nội" },
        ]}
        faqs={faqs}
      >
        <LocalRegionGuideBody region="hanoi" />
      </HybridProductGuide>
    </>
  );
}
