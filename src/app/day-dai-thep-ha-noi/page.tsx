import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dây đai thép Hà Nội | báo giá nhanh trong ngày",
  description:
    "Cung cấp dây đai thép tại Hà Nội: quy cách 16mm, 19mm, 32mm, hỗ trợ giao nhanh khu công nghiệp miền Bắc và tư vấn kỹ thuật đóng đai hàng nặng.",
  keywords: [
    "dây đai thép hà nội",
    "mua dây đai thép hà nội",
    "khóa đai thép hà nội",
    "nhà cung cấp dây đai thép hà nội",
  ],
  alternates: {
    canonical: `${siteConfig.url}/day-dai-thep-ha-noi`,
  },
  openGraph: {
    title: "Dây đai thép Hà Nội | báo giá nhanh trong ngày",
    description:
      "Giải pháp dây đai thép và khóa đai thép cho doanh nghiệp tại Hà Nội, Bắc Ninh, Hưng Yên, Hải Dương.",
    url: `${siteConfig.url}/day-dai-thep-ha-noi`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Dây đai thép Hà Nội",
      },
    ],
  },
};

export default function HanoiLandingPage() {
  const faq = [
    {
      q: "Có hỗ trợ giao dây đai thép nội thành Hà Nội không?",
      a: "Có. Chúng tôi hỗ trợ điều phối giao theo khu vực và lịch nhập hàng của kho.",
    },
    {
      q: "Bao lâu nhận được báo giá tại Hà Nội?",
      a: "Thông thường trong ngày làm việc, sau khi nhận đủ thông tin quy cách và số lượng.",
    },
    {
      q: "Có tư vấn luôn khóa đai và dụng cụ không?",
      a: "Có. Chúng tôi hỗ trợ đồng bộ dây, khóa và bộ dụng cụ siết bấm theo từng tải trọng.",
    },
  ];
  const serviceAreaJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Cung cấp dây đai thép và khóa đai thép tại Hà Nội",
    provider: {
      "@type": "Organization",
      name: siteConfig.company.legalName,
      telephone: siteConfig.company.phone,
    },
    areaServed: ["Hà Nội", "Bắc Ninh", "Hưng Yên", "Hải Dương"],
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
        name: "Dây đai thép Hà Nội",
        item: `${siteConfig.url}/day-dai-thep-ha-noi`,
      },
    ],
  };
  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Giải pháp dây đai thép khu vực Hà Nội",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Dây đai thép cho doanh nghiệp Hà Nội",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Khóa đai thép và bộ dụng cụ đồng bộ",
        },
      },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="bg-background py-10">
        <article className="container mx-auto max-w-5xl px-4">
          <nav className="text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>{" "}
            / <span className="text-foreground">Dây đai thép Hà Nội</span>
          </nav>

          <h1 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Dây đai thép Hà Nội cho kho và nhà máy công nghiệp
          </h1>
          <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Chúng tôi hỗ trợ doanh nghiệp tại Hà Nội và các KCN lân cận chọn
            đúng dây đai thép theo tải trọng, đồng thời cung cấp khóa đai và bộ
            dụng cụ tương thích để giảm lỗi vận hành.
          </p>

          <QuickQuoteForm
            sourcePage="/day-dai-thep-ha-noi"
            className="mt-8"
            title="Nhận báo giá dây đai thép tại Hà Nội"
          />

          <section className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Khu vực hỗ trợ giao nhanh
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                <li>• Nội thành Hà Nội và vùng công nghiệp phụ cận</li>
                <li>• Bắc Ninh, Hưng Yên, Hải Dương, Vĩnh Phúc</li>
                <li>• Hỗ trợ điều phối theo ca nhập hàng của kho</li>
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Dịch vụ đi kèm
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                <li>• Tư vấn quy cách dây theo nhóm hàng nặng</li>
                <li>• Đề xuất khóa đai và dụng cụ siết bấm phù hợp</li>
                <li>• Hỗ trợ báo giá nhanh trong ngày làm việc</li>
              </ul>
            </div>
          </section>

          <section className="surface-card mt-6 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Câu hỏi thường gặp tại khu vực Hà Nội
            </h2>
            <div className="mt-3 space-y-3">
              {faq.map((item) => (
                <article key={item.q} className="rounded-lg border border-border/70 bg-muted/35 p-4">
                  <h3 className="text-sm font-semibold text-foreground">{item.q}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.a}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="surface-card mt-6 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Trang liên quan bạn nên xem
            </h2>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <Link href="/bao-gia-day-dai-thep" className="text-primary">
                Báo giá dây đai thép mới nhất
              </Link>
              <Link href="/day-dai-thep-16mm-19mm-32mm" className="text-primary">
                So sánh quy cách 16mm 19mm 32mm
              </Link>
              <Link href="/khoa-dai-thep" className="text-primary">
                Chọn khóa đai thép tương thích
              </Link>
            </div>
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="btn-lift mt-4 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Gọi ngay {siteConfig.company.phone}
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
