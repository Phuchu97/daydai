import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyTopBar } from "@/components/layout/StickyTopBar";
import { StickyContacts } from "@/components/layout/StickyContacts";
import {
  SteelHero,
  TrustSection,
  ProductsSection,
  WhyChooseUsSection,
  RealUsageSection,
  TestimonialsSection,
  LeadFormSection,
  FAQSection,
  FinalCTASection,
} from "@/components/landing/steel";

export default function HomePage() {
  return (
    <>
      <StickyTopBar />
      <Header />
      <main>
        <SteelHero />
        <TrustSection />
        <ProductsSection />
        <WhyChooseUsSection />
        <RealUsageSection />
        <TestimonialsSection />
        <LeadFormSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyContacts />
    </>
  );
}
