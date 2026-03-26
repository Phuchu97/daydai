import Link from "next/link";
import type { CatalogProduct } from "@/data/products";
import { StickyTopBar } from "@/components/layout/StickyTopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyContacts } from "@/components/layout/StickyContacts";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { BenefitsSection } from "@/components/product/BenefitsSection";
import { DescriptionSection } from "@/components/product/DescriptionSection";
import { SpecsTable } from "@/components/product/SpecsTable";
import { UpsellSection } from "@/components/product/UpsellSection";
import { FAQSection } from "@/components/product/FAQSection";
import { StickyAddToCartBar } from "@/components/product/StickyAddToCartBar";
import { ReviewsSection } from "@/components/product/ReviewsSection";
import { getRelatedArticlesByProduct } from "@/data/articles";

type Props = {
  product: CatalogProduct;
};

function getBreadcrumbLabel(product: CatalogProduct) {
  return product.name;
}

export function ProductDetailPage({ product }: Props) {
  const relatedArticles = getRelatedArticlesByProduct(product.id, 3);

  return (
    <>
      <StickyTopBar />
      <Header />
      <main className="bg-background">
        <section className="border-b border-border/60 bg-background pt-4 pb-8 sm:pt-6">
          <div className="container mx-auto max-w-5xl px-4 space-y-4">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-1">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Trang chủ
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/#products" className="hover:text-foreground">
                    Đóng gói công nghiệp
                  </Link>
                </li>
                <li>/</li>
                <li className="font-medium text-foreground">
                  {getBreadcrumbLabel(product)}
                </li>
              </ol>
            </nav>

            <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-start">
              <ProductGallery images={product.images} />
              <ProductInfo product={product} />
            </div>
          </div>
        </section>

        <BenefitsSection />
        <DescriptionSection product={product} />
        <SpecsTable product={product} />
        <UpsellSection />
        <ReviewsSection product={product} />
        <FAQSection />
        {relatedArticles.length > 0 && (
          <section className="border-t border-border bg-background py-10">
            <div className="container mx-auto max-w-5xl px-4">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Bài viết tư vấn liên quan
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
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
      </main>
      <Footer />
      <StickyContacts />
      <StickyAddToCartBar />
    </>
  );
}

