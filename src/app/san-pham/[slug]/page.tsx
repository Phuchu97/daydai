import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { catalogProducts } from "@/data/products";
import type { CatalogProduct } from "@/data/products";
import { ProductDetailPage } from "@/components/product/ProductDetailPage";
import { siteConfig } from "@/config/site";

type Params = {
  slug: string;
};

function getProductFromSlug(slug: string): CatalogProduct | undefined {
  const path = `/san-pham/${slug}`;
  return catalogProducts.find((p) => p.slug === path);
}

function getFaqForProduct(product: CatalogProduct) {
  if (product.id === "steel-strapping-tools") {
    return [
      {
        question: "Bộ dụng cụ đóng đai thép gồm những gì?",
        answer:
          "Bộ cơ bản gồm tensioner (siết đai), sealer (bấm khóa) và tùy mẫu có thể có tool kết hợp.",
      },
      {
        question: "Dụng cụ dùng được cho những bản dây nào?",
        answer:
          "Phổ biến cho dây bản 16mm, 19mm và 32mm tùy model. Chúng tôi sẽ tư vấn đúng loại theo nhu cầu.",
      },
      {
        question: "Có hướng dẫn sử dụng không?",
        answer:
          "Có. Chúng tôi hỗ trợ hướng dẫn thao tác trực tiếp hoặc online để đảm bảo đóng đai đúng kỹ thuật.",
      },
    ];
  }

  if (product.id === "steel-seals") {
    return [
      {
        question: "Khóa đai thép dùng cho dây nào?",
        answer:
          "Khóa đai thép có nhiều kích thước, thường dùng cho dây bản 16-32mm tùy quy cách.",
      },
      {
        question: "Khóa đai có ảnh hưởng độ chắc của vòng đai không?",
        answer:
          "Có. Chọn đúng kích thước khóa sẽ giúp giữ lực siết tốt hơn và hạn chế tuột đầu đai.",
      },
      {
        question: "Có bán sỉ số lượng lớn không?",
        answer:
          "Có. Chúng tôi có chính sách giá sỉ theo số lượng, vui lòng liên hệ để được báo giá nhanh.",
      },
    ];
  }

  return [
    {
      question: "Dây đai thép chịu lực bao nhiêu?",
      answer:
        "Tùy bản rộng và độ dày, có thể đạt mức chịu tải cao khi đóng đúng kỹ thuật. Chúng tôi sẽ tư vấn theo loại hàng cụ thể.",
    },
    {
      question: "Có giao hàng toàn quốc không?",
      answer:
        "Có. Chúng tôi hỗ trợ giao hàng toàn quốc qua chành xe hoặc đơn vị vận chuyển phù hợp.",
    },
    {
      question: "Có bán sỉ cho nhà máy và đại lý không?",
      answer:
        "Có. Chúng tôi có chính sách giá sỉ theo khối lượng đơn hàng và tần suất nhập hàng.",
    },
  ];
}

export function generateStaticParams() {
  return catalogProducts.map((p) => ({
    slug: p.slug.replace("/san-pham/", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductFromSlug(slug);
  if (!product) return {};

  const title = `${product.name}`;
  const description = product.shortDescription;

  const keywords = [
    product.name,
    "dây đai thép",
    "bộ dụng cụ đóng đai thép",
    "đóng gói công nghiệp",
    "pallet hàng nặng",
    "kho bãi",
    "logistics",
  ];

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords,
    alternates: {
      canonical: `${siteConfig.url}/san-pham/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/san-pham/${slug}`,
      siteName: siteConfig.name,
      locale: "vi_VN",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}${product.images[0]?.src ?? siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: product.images[0]?.alt ?? product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}${product.images[0]?.src ?? siteConfig.ogImage}`],
    },
  };
}

export default async function ProductRoutePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductFromSlug(slug);
  if (!product) notFound();

  const productUrl = `${siteConfig.url}/san-pham/${slug}`;
  const faqs = getFaqForProduct(product);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((img) => `${siteConfig.url}${img.src}`),
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price:
        product.salePrice ??
        product.basePrice ??
        0,
      availability: "https://schema.org/InStock",
      url: productUrl,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "256",
    },
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
        name: "Sản phẩm",
        item: `${siteConfig.url}/#products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* ProductDetailPage includes header/footer; breadcrumb SEO handled there */}
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
      <ProductDetailPage product={product} />
    </>
  );
}

