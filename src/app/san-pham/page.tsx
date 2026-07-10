import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { catalogProducts } from "@/data/products";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { ProductCatalogCard } from "@/components/product/ProductCatalogCard";
import { ProductsCatalogBottomCta } from "@/components/product/ProductsCatalogBottomCta";
import { ProductsCatalogHero } from "@/components/product/ProductsCatalogHero";

export const metadata: Metadata = {
  title: "Dây đai thép, khóa đai thép và bộ dụng cụ đóng đai",
  description:
    "Danh mục dây đai thép công nghiệp, khóa đai thép và bộ dụng cụ đóng đai cho nhà máy, xưởng sản xuất, logistics tại Việt Nam.",
  keywords: [
    "dây đai thép",
    "dây đai sắt",
    "khóa đai thép",
    "bộ dụng cụ đóng đai thép",
    "day dai thep",
  ],
  alternates: {
    canonical: `${siteConfig.url}/san-pham`,
  },
  openGraph: {
    title: "Dây đai thép, khóa đai thép và bộ dụng cụ đóng đai",
    description:
      "Chọn đúng dây đai thép và dụng cụ đóng đai theo tải trọng, quy cách và nhu cầu vận hành thực tế.",
    url: `${siteConfig.url}/san-pham`,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Danh mục sản phẩm dây đai thép",
      },
    ],
  },
};

export default function ProductIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: catalogProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}${product.slug}`,
      name: product.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <MarketingPageLayout>
        <div className="space-y-4 sm:space-y-5">
          <BreadcrumbNav
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Sản phẩm" },
            ]}
          />

          <ProductsCatalogHero />

          <div
            className="grid grid-cols-2 gap-3 xl:grid-cols-4 xl:gap-4"
            role="list"
            aria-label="Danh mục sản phẩm"
          >
            {catalogProducts.map((product) => (
              <div key={product.id} role="listitem" className="min-w-0">
                <ProductCatalogCard product={product} />
              </div>
            ))}
          </div>

          <ProductsCatalogBottomCta />
        </div>
      </MarketingPageLayout>
    </>
  );
}
