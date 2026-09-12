import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import type { CatalogProduct, ProductImage } from "@/data/products";
import { getRelatedArticlesByProduct } from "@/data/articles";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { UpsellSection } from "@/components/product/UpsellSection";
import { ReviewsSection } from "@/components/product/ReviewsSection";
import { FAQSection, type FaqItem } from "@/components/product/FAQSection";

export type HybridBreadcrumbItem = {
  label: string;
  href?: string;
};

type HybridProductGuideProps = {
  product: CatalogProduct;
  heading: string;
  lead: string;
  cartName?: string;
  images?: ProductImage[];
  breadcrumbs: HybridBreadcrumbItem[];
  faqs: FaqItem[];
  children: ReactNode;
};

export function HybridProductGuide({
  product,
  heading,
  lead,
  cartName,
  images,
  breadcrumbs,
  faqs,
  children,
}: HybridProductGuideProps) {
  const galleryImages = images ?? product.images;
  const relatedArticles = getRelatedArticlesByProduct(product.id, 3);

  return (
    <SiteShell showTopBar stackContactsAboveCartBar={false}>
      <section className="overflow-x-hidden border-b border-border/60 bg-background pb-10 pt-5 sm:pb-12 sm:pt-6">
        <div className="site-container space-y-5 sm:space-y-6">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <Fragment key={`${item.label}-${index}`}>
                    {index > 0 ? <li aria-hidden>/</li> : null}
                    <li className={isLast ? "font-medium text-foreground" : undefined}>
                      {item.href && !isLast ? (
                        <Link href={item.href} className="hover:text-foreground">
                          {item.label}
                        </Link>
                      ) : (
                        item.label
                      )}
                    </li>
                  </Fragment>
                );
              })}
            </ol>
          </nav>

          <div className="grid min-w-0 gap-8 max-md:gap-6 md:grid-cols-[minmax(0,1fr),minmax(0,1.05fr)] md:items-start lg:grid-cols-[minmax(0,0.95fr),minmax(0,1fr)]">
            <div className="min-w-0 w-full">
              <ProductGallery images={galleryImages} />
            </div>
            <div className="min-w-0">
              <ProductInfo
                product={product}
                heading={heading}
                lead={lead}
                cartName={cartName}
              />
            </div>
          </div>
        </div>
      </section>

      {children}

      <UpsellSection excludeProductId={product.id} />
      <ReviewsSection product={product} />
      <FAQSection faqs={faqs} />

      {relatedArticles.length > 0 ? (
        <section className="border-t border-border bg-background py-12 md:py-16">
          <div className="site-container">
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">
              Bài viết tư vấn liên quan
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((article) => (
                <article
                  key={article.slug}
                  className="rounded-2xl border border-border bg-muted/20 p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    <Link
                      href={`/tu-van/${article.slug}`}
                      className="hover:text-primary"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </SiteShell>
  );
}
