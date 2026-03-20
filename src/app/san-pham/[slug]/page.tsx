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
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/san-pham/${slug}`,
      siteName: siteConfig.name,
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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

  return (
    <>
      {/* ProductDetailPage includes header/footer; breadcrumb SEO handled there */}
      <ProductDetailPage product={product} />
    </>
  );
}

