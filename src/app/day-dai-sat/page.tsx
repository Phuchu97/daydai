import type { Metadata } from "next";
import { HybridProductGuide } from "@/components/seo/HybridProductGuide";
import { DayDaiSatGuideBody } from "@/components/seo/DayDaiSatGuideBody";
import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { catalogProducts } from "@/data/products";
import { getProductAggregateRating } from "@/data/reviews";
import { buildProductSchemaOffer } from "@/lib/merchant-offer-schema";

const PAGE_PATH = "/day-dai-sat";
const PAGE_URL = `${siteConfig.url}${PAGE_PATH}`;
const HEADING = "Dây đai sắt 16mm 19mm 32mm cho pallet hàng nặng";
const LEAD =
  "Dây đai sắt (cùng loại dây đai thép đóng hàng) bản 16/19/32mm, tính giá theo kg. Chọn quy cách theo tải, khớp bọ sắt và kìm siết, giao Hà Nội cùng KCN miền Bắc.";

const faqs = [
  {
    question: "Dây đai sắt khác dây đai thép không?",
    answer:
      "Không. Trong đóng pallet, dây đai sắt và dây đai thép là một sản phẩm: băng thép dẹt 16mm, 19mm hoặc 32mm. Khác với đai thép cột hay thép phi dùng trong xây dựng.",
  },
  {
    question: "Nên lấy dây đai sắt 16mm, 19mm hay 32mm?",
    answer:
      "Pallet dưới khoảng 500kg thường dùng 16mm. Kiện 500-1.200kg và tuyến rung lắc ưu tiên 19mm. Cuộn thép hoặc kiện trên 1.200kg dùng 32mm, kèm bọ và kìm đúng khổ.",
  },
  {
    question: "Giá dây đai sắt bao nhiêu một kg?",
    answer: `Giá website tham khảo ${STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg. Giá lô chốt theo loại dầu / mạ kẽm / sơn, độ dày, số kg và điểm giao. Cuộn phổ biến 30-50kg.`,
  },
  {
    question: "Dây đai sắt dầu hay mạ kẽm?",
    answer:
      "Kho khô nội địa lấy dầu để tối ưu chi phí. Kho ẩm, bãi ngoài trời hoặc xuất khẩu ưu tiên mạ kẽm hoặc sơn tĩnh điện để chống gỉ lâu hơn.",
  },
  {
    question: "Cần bọ sắt và dụng cụ gì đi kèm?",
    answer:
      "Mỗi bản dây cần bọ đúng khổ (16.2 / 19.2 / 32mm) và kìm siết, kìm bấm bọ cùng size. Lệch size dễ tuột mối dù dây mới.",
  },
  {
    question: "Có giao dây đai sắt tại Hà Nội không?",
    answer: `Có. ${siteConfig.name} ưu tiên Hà Nội và KCN miền Bắc trong 24-48 giờ khi hàng sẵn kho, đồng thời gửi chành xe toàn quốc.`,
  },
];

export const metadata: Metadata = {
  title: "Dây đai sắt 16/19/32mm, giá theo kg, giao Hà Nội",
  description:
    "Dây đai sắt đóng hàng (dây đai thép) 16mm, 19mm, 32mm. Giá theo kg, chọn dầu / mạ kẽm / sơn, khớp bọ sắt và kìm siết. Giao Hà Nội, miền Bắc và toàn quốc.",
  keywords: [
    "dây đai sắt",
    "đai sắt đóng hàng",
    "dây đai sắt 19mm",
    "dây đai sắt 16mm",
    "dây đai sắt 32mm",
    "giá dây đai sắt",
    "bọ sắt đóng đai",
    "day dai sat",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Dây đai sắt 16/19/32mm, giá theo kg, giao Hà Nội",
    description:
      "Cùng loại dây đai thép đóng pallet. Chọn khổ 16/19/32mm theo tải, báo giá theo kg, giao Hà Nội và KCN miền Bắc.",
    url: PAGE_URL,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/day-dai-thep-dau.jpg`,
        width: 1200,
        height: 630,
        alt: "Cuộn dây đai sắt đóng hàng tại kho",
      },
    ],
  },
};

const product = catalogProducts.find((item) => item.id === "steel-strapping")!;

const galleryImages = [
  {
    src: "/images/day-dai-thep-dau.jpg",
    alt: "Cuộn dây đai sắt phủ dầu, dùng đóng pallet hàng nặng",
  },
  {
    src: "/images/day-dai-thep-chat-luong-cao.jpg",
    alt: "Dây đai sắt chất lượng cao cuốn đều tại kho",
  },
  {
    src: "/images/day-dai-thep-ma-kem-xanh.jpg",
    alt: "Dây đai sắt mạ kẽm bản rộng, chống gỉ khi lưu kho",
  },
  {
    src: "/images/day-dai-thep-tai-kho-khach-hang.jpg",
    alt: "Dây đai sắt tại kho khách hàng sẵn sàng xuất dùng",
  },
  {
    src: "/images/lo-day-dai-thep-giao-cho-khach-hang.jpg",
    alt: "Lô dây đai sắt giao cho nhà máy và logistics",
  },
];

export default function SteelBandPage() {
  const aggregateRating = getProductAggregateRating(product.id);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Dây đai sắt",
    alternateName: ["dây đai thép", "đai sắt đóng hàng", "dây đai sắt 19mm"],
    description: LEAD,
    image: galleryImages.map((img) => `${siteConfig.url}${img.src}`),
    sku: "steel-strapping-sat",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: buildProductSchemaOffer(product, PAGE_URL),
    ...(aggregateRating ? { aggregateRating } : {}),
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
        name: "Dây đai sắt",
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
        cartName="Dây đai sắt"
        images={galleryImages}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/san-pham" },
          { label: "Dây đai sắt" },
        ]}
        faqs={faqs}
      >
        <DayDaiSatGuideBody />
      </HybridProductGuide>
    </>
  );
}
