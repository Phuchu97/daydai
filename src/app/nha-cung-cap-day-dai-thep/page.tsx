import type { Metadata } from "next";
import Link from "next/link";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { siteConfig } from "@/config/site";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export const metadata: Metadata = {
  title: "Nhà cung cấp dây đai thép | hỗ trợ doanh nghiệp B2B",
  description:
    "Trang thông tin nhà cung cấp dây đai thép cho nhà máy, xưởng sản xuất, logistics: hỗ trợ chọn quy cách, báo giá nhanh, đồng bộ dây đai - khóa đai - dụng cụ.",
  keywords: [
    "nhà cung cấp dây đai thép",
    "công ty dây đai thép",
    "mua dây đai thép số lượng lớn",
  ],
  alternates: {
    canonical: `${siteConfig.url}/nha-cung-cap-day-dai-thep`,
  },
  openGraph: {
    title: "Nhà cung cấp dây đai thép | hỗ trợ doanh nghiệp B2B",
    description:
      "Trang thông tin nhà cung cấp dây đai thép cho nhà máy, xưởng sản xuất và logistics với tư vấn kỹ thuật và báo giá nhanh.",
    url: `${siteConfig.url}/nha-cung-cap-day-dai-thep`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Nhà cung cấp dây đai thép B2B",
      },
    ],
  },
};

export default function SupplierPage() {
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
        name: "Nhà cung cấp dây đai thép",
        item: `${siteConfig.url}/nha-cung-cap-day-dai-thep`,
      },
    ],
  };
  const supplierJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.legalName,
    url: `${siteConfig.url}/nha-cung-cap-day-dai-thep`,
    telephone: siteConfig.company.phone,
    areaServed: ["VN", "Hà Nội", "Miền Bắc"],
    description:
      "Nhà cung cấp dây đai thép và giải pháp đóng đai công nghiệp cho doanh nghiệp B2B.",
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Tư vấn và cung cấp dây đai thép cho doanh nghiệp B2B",
    provider: {
      "@type": "Organization",
      name: siteConfig.company.legalName,
      telephone: siteConfig.company.phone,
    },
    areaServed: ["VN", "Hà Nội", "Miền Bắc"],
  };
  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Gói giải pháp cho doanh nghiệp",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Gói dây đai thép + khóa đai theo quy cách",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Gói đồng bộ dây đai + bộ dụng cụ đóng đai",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(supplierJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />
      <MarketingPageLayout>
        <article className="container mx-auto max-w-5xl px-4">
          <nav className="text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>{" "}
            / <span className="text-foreground">Nhà cung cấp dây đai thép</span>
          </nav>

          <h1 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Nhà cung cấp dây đai thép cho nhà máy, xưởng sản xuất và logistics
          </h1>
          <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Chúng tôi tập trung vào nhu cầu B2B: chọn quy cách đúng tải trọng,
            đảm bảo tiến độ giao và hỗ trợ đồng bộ vật tư đóng đai để giảm rủi
            ro vận hành trong kho.
          </p>

          <QuickQuoteForm
            sourcePage="/nha-cung-cap-day-dai-thep"
            className="mt-8"
            title="Nhận tư vấn từ nhà cung cấp"
          />

          <section className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Doanh nghiệp thường yêu cầu gì?
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                <li>• Quy cách ổn định giữa các lô hàng.</li>
                <li>• Thời gian phản hồi báo giá nhanh.</li>
                <li>• Tư vấn kỹ thuật theo nhóm hàng nặng.</li>
                <li>• Đồng bộ dây đai, khóa đai và dụng cụ.</li>
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Trang bạn nên xem thêm
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/bao-gia-day-dai-thep" className="font-medium text-primary">
                    Báo giá dây đai thép
                  </Link>
                </li>
                <li>
                  <Link href="/day-dai-thep-ha-noi" className="font-medium text-primary">
                    Dây đai thép Hà Nội
                  </Link>
                </li>
                <li>
                  <Link href="/day-dai-thep-mien-bac" className="font-medium text-primary">
                    Dây đai thép miền Bắc
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section className="surface-card mt-6 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              So sánh nhu cầu theo quy mô doanh nghiệp
            </h2>
            <div className="mt-3 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Quy mô</th>
                    <th className="px-3 py-2">Nhu cầu thường gặp</th>
                    <th className="px-3 py-2">Ưu tiên triển khai</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2">Kho vừa</td>
                    <td className="px-3 py-2">Đơn hàng lẻ, đổi quy cách linh hoạt</td>
                    <td className="px-3 py-2">Tư vấn bản dây phù hợp, tránh dư chi phí</td>
                  </tr>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2">Nhà máy lớn</td>
                    <td className="px-3 py-2">Khối lượng ổn định theo tháng</td>
                    <td className="px-3 py-2">Đồng bộ dây + khóa + dụng cụ theo line</td>
                  </tr>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2">Đơn vị logistics</td>
                    <td className="px-3 py-2">Tần suất bốc xếp cao, nhiều tuyến</td>
                    <td className="px-3 py-2">Kiểm soát mối đai và thời gian thao tác</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </article>
      </MarketingPageLayout>
    </>
  );
}
