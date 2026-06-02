import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { siteConfig } from "@/config/site";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export const metadata: Metadata = {
  title: "Nhà cung cấp dây đai thép miền Bắc | tư vấn nhanh",
  description:
    "Nhà cung cấp dây đai thép, khóa đai thép và bộ dụng cụ đóng đai cho doanh nghiệp khu vực miền Bắc. Hỗ trợ tư vấn tải trọng và phương án đóng đai theo tuyến vận chuyển.",
  keywords: [
    "dây đai thép miền bắc",
    "nhà cung cấp dây đai thép",
    "công ty dây đai thép",
    "dây đai thép cho hàng nặng",
  ],
  alternates: {
    canonical: `${siteConfig.url}/day-dai-thep-mien-bac`,
  },
  openGraph: {
    title: "Nhà cung cấp dây đai thép miền Bắc | tư vấn nhanh",
    description:
      "Giải pháp dây đai thép cho nhà máy, xưởng sản xuất và logistics tại miền Bắc, hỗ trợ báo giá và tư vấn nhanh.",
    url: `${siteConfig.url}/day-dai-thep-mien-bac`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Nhà cung cấp dây đai thép miền Bắc",
      },
    ],
  },
};

export default function NorthLandingPage() {
  const faq = [
    {
      q: "Miền Bắc có hỗ trợ giao theo lịch nhập kho không?",
      a: "Có. Chúng tôi hỗ trợ sắp lịch giao theo ca nhận hàng của từng kho hoặc nhà máy.",
    },
    {
      q: "Có thể đặt đồng thời dây đai, khóa đai và dụng cụ không?",
      a: "Có. Chúng tôi tư vấn và cấu hình đồng bộ để giảm lỗi vận hành tại điểm đóng đai.",
    },
    {
      q: "Doanh nghiệp mới dùng dây đai thép có được hỗ trợ kỹ thuật không?",
      a: "Có. Đội ngũ hỗ trợ hướng dẫn lựa chọn quy cách và checklist kiểm tra mối đai.",
    },
  ];
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
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Cung cấp dây đai thép khu vực miền Bắc",
    provider: {
      "@type": "Organization",
      name: siteConfig.company.legalName,
      telephone: siteConfig.company.phone,
    },
    areaServed: ["Miền Bắc", "Hà Nội", "Bắc Ninh", "Hưng Yên", "Hải Dương"],
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
        name: "Dây đai thép miền Bắc",
        item: `${siteConfig.url}/day-dai-thep-mien-bac`,
      },
    ],
  };
  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Giải pháp dây đai thép miền Bắc",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Dây đai thép cho pallet hàng nặng",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Khóa đai thép và dụng cụ đóng đai đồng bộ",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
      <MarketingPageLayout>
        <article className="container mx-auto max-w-5xl px-4">
          <nav className="text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>{" "}
            / <span className="text-foreground">Dây đai thép miền Bắc</span>
          </nav>

          <h1 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Nhà cung cấp dây đai thép miền Bắc cho doanh nghiệp B2B
          </h1>
          <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Tập trung nhóm khách hàng kho vận, nhà máy và ngành vật liệu nặng,
            chúng tôi cung cấp dây đai thép theo quy cách phù hợp tải trọng và
            điều kiện vận chuyển thực tế.
          </p>

          <QuickQuoteForm
            sourcePage="/day-dai-thep-mien-bac"
            className="mt-8"
            title="Nhận báo giá dây đai thép miền Bắc"
          />

          <section className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="surface-card p-5">
              <p className="text-2xl font-semibold text-primary [font-variant-numeric:tabular-nums]">
                16 - 32mm
              </p>
              <p className="mt-1 text-sm text-foreground">Dải bản dây phổ biến</p>
            </div>
            <div className="surface-card p-5">
              <p className="text-2xl font-semibold text-primary [font-variant-numeric:tabular-nums]">
                Trong ngày
              </p>
              <p className="mt-1 text-sm text-foreground">Hỗ trợ phản hồi báo giá</p>
            </div>
            <div className="surface-card p-5">
              <p className="text-2xl font-semibold text-primary [font-variant-numeric:tabular-nums]">
                1 đầu mối
              </p>
              <p className="mt-1 text-sm text-foreground">Tư vấn dây + khóa + dụng cụ</p>
            </div>
          </section>

          <section className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-muted">
              <Image
                src="/images/day-dai-thep-32mm.jpg"
                alt="Dây đai thép 32mm dùng cho hàng nặng"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-muted">
              <Image
                src="/images/day-dai-thep-32-chat-luong.jpg"
                alt="Dây đai thép 32 chất lượng cao"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-muted">
              <Image
                src="/images/day-dai-thep-ma-kem-xanh.jpg"
                alt="Dây đai thép mạ kẽm xanh cho doanh nghiệp miền Bắc"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </section>

          <section className="surface-card mt-6 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              3 lợi ích khi chọn đúng nhà cung cấp
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
              <li>
                • Đồng bộ quy cách dây đai, khóa đai và dụng cụ để giảm lỗi tuột
                mối.
              </li>
              <li>
                • Tối ưu chi phí theo lô nhập và kế hoạch giao hàng của từng kho.
              </li>
              <li>
                • Có đầu mối kỹ thuật xử lý nhanh khi phát sinh trong ca vận hành.
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/san-pham" className="text-primary">
                Xem danh mục sản phẩm
              </Link>
              <Link href="/bao-gia-day-dai-thep" className="text-primary">
                Xem bảng giá tham khảo
              </Link>
              <Link href="/tu-van" className="text-primary">
                Xem cụm bài tư vấn kỹ thuật
              </Link>
            </div>
          </section>

          <section className="surface-card mt-6 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Câu hỏi thường gặp tại miền Bắc
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

          <a
            href={`tel:${siteConfig.company.phone}`}
            className="btn-lift mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Gọi tư vấn khu vực miền Bắc
          </a>
        </article>
      </MarketingPageLayout>
    </>
  );
}
