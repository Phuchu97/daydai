import type { Metadata } from "next";
import { HybridProductGuide } from "@/components/seo/HybridProductGuide";
import { BoSatGuideBody } from "@/components/seo/BoSatGuideBody";
import { siteConfig } from "@/config/site";
import { catalogProducts } from "@/data/products";
import { buildProductSchemaOffer } from "@/lib/merchant-offer-schema";

const PAGE_PATH = "/bo-sat";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const HEADING = "Bọ sắt, bọ kẹp đai 16-19-25-32mm khớp bản dây";
const LEAD =
  "Bọ sắt / bọ kẹp đai (khóa đai thép) kín và chữ U cho dây 16mm, 19mm, 25mm, 32mm. Chọn đúng khổ bọ và kìm bấm để mối đai không tuột khi vận chuyển hàng nặng.";

const faqs = [
  {
    question: "Bọ sắt và bọ kẹp đai khác nhau không?",
    answer:
      "Không. Bọ sắt, bọ kẹp đai, khóa đai thép, bọ kín, bọ chữ U đều là phụ kiện giữ mối nối dây đai thép sau khi siết — khác hình dạng và khổ theo bản dây.",
  },
  {
    question: "Dây 19mm dùng bọ kẹp đai mấy mm?",
    answer:
      "Dây 19mm dùng bọ 19.2mm (bọ kín hoặc chữ U). Bọ lớn hơn bản dây khoảng 0.2mm để bấm ôm tốt.",
  },
  {
    question: "Nên lấy bọ kín hay bọ chữ U?",
    answer:
      "Bọ kín phổ biến hơn cho kiện nặng và tuyến xa. Bọ chữ U phù hợp một số quy trình siết tay hoặc khi cần tháo nhanh.",
  },
  {
    question: "Địa chỉ và hotline mua bọ sắt?",
    answer: `${siteConfig.company.legalName} — ${siteConfig.company.address}. Hotline / Zalo ${siteConfig.company.phone}.`,
  },
];

const galleryImages = [
  {
    src: "/images/bo-thep-kin.jpg",
    alt: "Bọ sắt kín — bọ kẹp đai thép công nghiệp",
  },
  {
    src: "/images/bo-thep-kin-19-mat-truoc.jpg",
    alt: "Bọ sắt kín 19mm mặt trước",
  },
  {
    src: "/images/bo-thep-u-1.jpg",
    alt: "Bọ kẹp đai chữ U",
  },
  {
    src: "/images/bo-thep-kin-2.jpg",
    alt: "Bọ sắt nhiều khổ 16-19-32mm",
  },
];

export const metadata: Metadata = {
  title: "Bọ sắt, bọ kẹp đai 16-19-25-32mm | khớp dây đai thép",
  description:
    "Mua bọ sắt, bọ kẹp đai (khóa đai thép) kín và chữ U. Hướng dẫn chọn khổ theo dây 16/19/25/32mm, giá tham khảo, giao Hà Nội & miền Bắc.",
  keywords: [
    "bọ sắt",
    "bọ kẹp đai",
    "bọ sắt đóng đai",
    "bọ kẹp đai thép",
    "bọ kín",
    "bọ chữ U",
    "khóa đai thép",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Bọ sắt, bọ kẹp đai 16-19-25-32mm | khớp dây đai thép",
    description:
      "Bọ sắt / bọ kẹp đai kín và chữ U — chọn đúng khổ theo bản dây, khớp kìm bấm.",
    url: PAGE_URL,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bo-thep-kin.jpg`,
        width: 1200,
        height: 630,
        alt: "Bọ sắt, bọ kẹp đai",
      },
    ],
  },
};

export default function BoSatPage() {
  const product = catalogProducts.find((item) => item.id === "steel-seals")!;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Bọ sắt, bọ kẹp đai",
    alternateName: ["bọ sắt", "bọ kẹp đai", "khóa đai thép", "bọ kín", "bọ chữ U"],
    description: LEAD,
    image: galleryImages.map((img) => `${siteConfig.url}${img.src}`),
    sku: "steel-seals-bo-sat",
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: buildProductSchemaOffer(product, PAGE_URL),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${siteConfig.url}/` },
      { "@type": "ListItem", position: 2, name: "Khóa đai thép", item: `${siteConfig.url}/khoa-dai-thep` },
      { "@type": "ListItem", position: 3, name: "Bọ sắt, bọ kẹp đai", item: PAGE_URL },
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
        cartName="Bọ sắt (bọ kẹp đai)"
        images={galleryImages}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Khóa đai thép", href: "/khoa-dai-thep" },
          { label: "Bọ sắt" },
        ]}
        faqs={faqs}
      >
        <BoSatGuideBody />
      </HybridProductGuide>
    </>
  );
}
