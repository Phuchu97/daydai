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

type Props = {
  product: CatalogProduct;
};

function getBreadcrumbLabel(product: CatalogProduct) {
  return product.name;
}

export function ProductDetailPage({ product }: Props) {
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
      </main>
      <Footer />
      <StickyContacts />
      <StickyAddToCartBar />
    </>
  );
}

