import type { Metadata } from "next";
import { HybridProductGuide } from "@/components/seo/HybridProductGuide";
import { DayDaiThepGuideBody } from "@/components/seo/DayDaiThepGuideBody";
import { STEEL_STRAPPING_TIER_SUMMARY } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { catalogProducts } from "@/data/products";
import { buildProductSchemaOffer } from "@/lib/merchant-offer-schema";

const PAGE_PATH = "/day-dai-thep";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const HEADING = "Dây đai thép 16mm 19mm 25mm 32mm cho pallet hàng nặng";
const LEAD =
  "Dây đai thép (dây đai sắt) bản 16–32mm, dầu / mạ kẽm / sơn tĩnh điện. Giá theo kg, khớp bọ sắt và kìm siết, giao Hà Nội cùng KCN miền Bắc.";

const faqs = [
  {
    question: "Dây đai thép khác dây đai nhựa PET như thế nào?",
    answer:
      "Dây đai thép chịu lực cao hơn, ít co giãn sau khi siết, phù hợp hàng nặng và cạnh sắc. PET nhẹ hơn, an toàn hơn khi cắt và thường rẻ hơn cho hàng vừa.",
  },
  {
    question: "Nên chọn dây dầu, mạ kẽm hay sơn tĩnh điện?",
    answer:
      "Cùng bảng giá theo số lượng, nên chọn theo môi trường: kho khô nội địa dùng dầu; ẩm / xuất khẩu / lưu kho dài ngày ưu tiên mạ kẽm hoặc sơn tĩnh điện.",
  },
  {
    question: "Nên lấy dây đai thép 16mm, 19mm hay 32mm?",
    answer:
      "Pallet dưới ~500kg thường dùng 16mm. Kiện 500-1.200kg ưu tiên 19mm. Cuộn thép hoặc kiện trên 1.200kg dùng 32mm, kèm bọ và kìm đúng khổ.",
  },
  {
    question: "Dây đai thép xuất xứ từ đâu?",
    answer: `${siteConfig.company.materialSource}. ${siteConfig.name} cung ứng dây đai thép từ ${siteConfig.company.foundingYear}.`,
  },
  {
    question: "Giá dây đai thép bao nhiêu một kg?",
    answer: `Giá theo tổng số kg mỗi đơn, áp dụng mọi bản rộng và bề mặt: ${STEEL_STRAPPING_TIER_SUMMARY}. Đơn dự án số lượng rất lớn liên hệ báo giá riêng.`,
  },
  {
    question: "Có giao dây đai thép tại Hà Nội không?",
    answer: `Có. ${siteConfig.name} ưu tiên Hà Nội và KCN miền Bắc trong 24-48 giờ khi hàng sẵn kho.`,
  },
];

export const metadata: Metadata = {
  title: "Dây đai thép 16–32mm | giá theo kg, giao Hà Nội",
  description:
    "Mua dây đai thép 16mm, 19mm, 25mm, 32mm — dầu / mạ kẽm / sơn tĩnh điện. Giá theo kg, bảng quy cách, chọn theo tải, khớp khóa đai. Giao Hà Nội, miền Bắc.",
  keywords: [
    "dây đai thép",
    "mua dây đai thép",
    "dây đai thép 19mm",
    "giá dây đai thép",
    "dây đai sắt",
    "day dai thep",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Dây đai thép 16–32mm | giá theo kg, giao Hà Nội",
    description:
      "Dây đai thép chịu lực cao cho pallet hàng nặng. Chọn khổ 16–32mm, báo giá theo kg, giao Hà Nội và KCN miền Bắc.",
    url: PAGE_URL,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/day-dai-thep-chat-luong-cao.jpg`,
        width: 1200,
        height: 630,
        alt: "Dây đai thép công nghiệp",
      },
    ],
  },
};

const product = catalogProducts.find((item) => item.id === "steel-strapping")!;

const galleryImages = [
  {
    src: "/images/day-dai-thep-chat-luong-cao.jpg",
    alt: "Cuộn dây đai thép chất lượng cao tại kho",
  },
  {
    src: "/images/day-dai-thep-dau.jpg",
    alt: "Dây đai thép dầu phủ dầu chống gỉ",
  },
  {
    src: "/images/day-dai-thep-ma-kem-xanh.jpg",
    alt: "Dây đai thép mạ kẽm chống gỉ",
  },
  {
    src: "/images/day-dai-thep-tai-kho-khach-hang.jpg",
    alt: "Dây đai thép tại kho khách hàng",
  },
  {
    src: "/images/lo-day-dai-thep-giao-cho-khach-hang.jpg",
    alt: "Lô dây đai thép giao cho nhà máy",
  },
];

export default function SteelStrappingPillarPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Dây đai thép",
    alternateName: ["dây đai sắt", "đai thép đóng hàng"],
    description: LEAD,
    image: galleryImages.map((img) => `${siteConfig.url}${img.src}`),
    sku: "steel-strapping",
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: buildProductSchemaOffer(product, PAGE_URL),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${siteConfig.url}/` },
      { "@type": "ListItem", position: 2, name: "Dây đai thép", item: PAGE_URL },
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
        cartName="Dây đai thép"
        images={galleryImages}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/san-pham" },
          { label: "Dây đai thép" },
        ]}
        faqs={faqs}
      >
        <DayDaiThepGuideBody />
      </HybridProductGuide>
    </>
  );
}
