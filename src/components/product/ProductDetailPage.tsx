import Link from "next/link";
import type { CatalogProduct } from "@/data/products";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { BenefitsSection } from "@/components/product/BenefitsSection";
import { DescriptionSection } from "@/components/product/DescriptionSection";
import { SteelStrappingGuide } from "@/components/product/SteelStrappingGuide";
import { SpecsTable } from "@/components/product/SpecsTable";
import { UpsellSection } from "@/components/product/UpsellSection";
import { FAQSection, type FaqItem } from "@/components/product/FAQSection";
import { steelStrappingFaqs } from "@/data/steel-strapping-content";
import { ReviewsSection } from "@/components/product/ReviewsSection";
import { getRelatedArticlesByProduct } from "@/data/articles";

type Props = {
  product: CatalogProduct;
};

function getBreadcrumbLabel(product: CatalogProduct) {
  return product.name;
}

function getFaqsForProduct(product: CatalogProduct): FaqItem[] {
  if (product.id === "steel-strapping") return steelStrappingFaqs;
  return [];
}

export function ProductDetailPage({ product }: Props) {
  const relatedArticles = getRelatedArticlesByProduct(product.id, 3);
  const productFaqs = getFaqsForProduct(product);

  return (
    <SiteShell showTopBar stackContactsAboveCartBar={false}>
      <section className="overflow-x-hidden border-b border-border/60 bg-background pb-10 pt-5 sm:pb-12 sm:pt-6">
        <div className="container mx-auto w-full max-w-5xl space-y-5 px-4 sm:space-y-6">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Trang chủ
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/san-pham" className="hover:text-foreground">
                  Sản phẩm
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-foreground">
                {getBreadcrumbLabel(product)}
              </li>
            </ol>
          </nav>

          <div className="grid min-w-0 gap-8 max-md:gap-6 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-start">
            <div className="min-w-0">
              <ProductGallery images={product.images} />
            </div>
            <div className="min-w-0">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection product={product} />
      {product.id === "steel-strapping" ? (
        <SteelStrappingGuide />
      ) : (
        <DescriptionSection product={product} />
      )}
      {product.id !== "steel-strapping" ? (
        <SpecsTable product={product} />
      ) : null}
      <UpsellSection excludeProductId={product.id} />
      <ReviewsSection product={product} />
      <FAQSection faqs={productFaqs.length > 0 ? productFaqs : undefined} />
      {relatedArticles.length > 0 && (
        <section className="border-t border-border bg-background py-10">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">
              Bài viết tư vấn liên quan
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((article) => (
                <article
                  key={article.slug}
                  className="rounded-2xl border border-border bg-muted/20 p-4 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    <Link
                      href={`/tu-van/${article.slug}`}
                      className="hover:text-primary"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
