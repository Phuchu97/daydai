import Link from "next/link";
import { StickyTopBar } from "@/components/layout/StickyTopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyContacts } from "@/components/layout/StickyContacts";
import {
  ProductGallery,
  ProductInfo,
  BenefitsSection,
  DescriptionSection,
  SpecsTable,
  UpsellSection,
  FAQSection,
  StickyAddToCartBar,
} from "@/components/product";

export default function SteelStrappingPage() {
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
                  Dây đai thép công nghiệp
                </li>
              </ol>
            </nav>

            <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-start">
              <ProductGallery />
              <ProductInfo />
            </div>
          </div>
        </section>

        <BenefitsSection />
        <DescriptionSection />
        <SpecsTable />
        <UpsellSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyContacts />
      <StickyAddToCartBar />
    </>
  );
}

