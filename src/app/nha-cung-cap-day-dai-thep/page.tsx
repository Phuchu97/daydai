import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCtaButton } from "@/components/contact/PhoneCtaButton";
import { TrustFacts } from "@/components/marketing/TrustFacts";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { SeoPageGallery } from "@/components/seo/SeoPageGallery";
import { SeoRelatedLinks } from "@/components/seo/SeoRelatedLinks";
import { SteelStrappingPriceTiers } from "@/components/seo/SteelStrappingPriceTiers";
import {
  STEEL_STRAPPING_PRICE_PER_KG,
  STEEL_STRAPPING_PROJECT_PRICE_PER_KG,
  STEEL_STRAPPING_TIER_SUMMARY,
  STEEL_STRAPPING_TOOLS_SALE_PRICE,
} from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { aboutProcess } from "@/data/about-content";
import { postalAddressJsonLd } from "@/lib/local-business-schema";
import { buildOfferCatalogItem } from "@/lib/merchant-offer-schema";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export const metadata: Metadata = {
  title: "Nhà cung cấp dây đai thép cho doanh nghiệp B2B",
  description:
    "Trang thông tin nhà cung cấp dây đai thép cho nhà máy, xưởng sản xuất, logistics: hỗ trợ chọn quy cách, báo giá nhanh, đồng bộ dây đai - khóa đai - dụng cụ.",
  keywords: [
    "nhà cung cấp dây đai thép",
    "công ty dây đai thép",
    "mua dây đai thép số lượng lớn",
    "đại lý dây đai thép",
    "dây đai thép giá sỉ",
    "nha cung cap day dai thep",
  ],
  alternates: {
    canonical: `${siteConfig.url}/nha-cung-cap-day-dai-thep`,
  },
  openGraph: {
    title: "Nhà cung cấp dây đai thép cho doanh nghiệp B2B",
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

const PAGE_PATH = "/nha-cung-cap-day-dai-thep";
const { company } = siteConfig;

const FAQ = [
  {
    q: "Dây đai thép của Dây Đai Thép Việt Nam lấy nguyên liệu từ đâu?",
    a: `${company.materialSource}. Công ty cung ứng dây đai thép từ năm ${company.foundingYear}.`,
  },
  {
    q: "Kho hàng ở đâu, giao những khu vực nào?",
    a: `Kho tại ${company.address}. ${company.serviceArea}.`,
  },
  {
    q: "Mua số lượng lớn có giá sỉ không?",
    a: `Có, giá giảm theo tổng số kg mỗi đơn: ${STEEL_STRAPPING_TIER_SUMMARY}. Đơn dự án số lượng rất lớn báo giá riêng từ ${STEEL_STRAPPING_PROJECT_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg.`,
  },
  {
    q: "Đã cung cấp cho doanh nghiệp nào?",
    a: `Khách hàng tiêu biểu: ${company.notableClients.join(", ")}.`,
  },
  {
    q: "Bao lâu nhận được báo giá?",
    a: "Thường trong ngày làm việc sau khi có quy cách (bản rộng, độ dày, bề mặt), số lượng và địa điểm giao.",
  },
];

export default function SupplierPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
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
        name: "Nhà cung cấp dây đai thép",
        item: `${siteConfig.url}/nha-cung-cap-day-dai-thep`,
      },
    ],
  };
  const supplierJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.company.legalName,
    url: siteConfig.url,
    telephone: siteConfig.company.phone,
    foundingDate: String(company.foundingYear),
    address: postalAddressJsonLd,
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
      buildOfferCatalogItem(
        "Gói dây đai thép + khóa đai theo quy cách",
        STEEL_STRAPPING_PRICE_PER_KG,
        {
          url: `${siteConfig.url}/day-dai-thep`,
          unitText: "kg",
          image: `${siteConfig.url}/images/day-dai-thep-dau.jpg`,
        },
      ),
      buildOfferCatalogItem(
        "Gói đồng bộ dây đai + bộ dụng cụ đóng đai",
        STEEL_STRAPPING_TOOLS_SALE_PRICE,
        {
          url: `${siteConfig.url}/san-pham/bo-dung-cu-dong-dai-thep`,
          unitText: "bộ",
          image: `${siteConfig.url}/images/dung-cu-dong-dai-3.jpg`,
        },
      ),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <MarketingPageLayout>
        <article className="space-y-6 sm:space-y-8">
          <BreadcrumbNav
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Nhà cung cấp dây đai thép" },
            ]}
          />

          <header>
            <h1 className="text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Nhà cung cấp dây đai thép cho nhà máy, xưởng sản xuất và logistics
            </h1>
            <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
              {company.legalName} cung ứng dây đai thép, bọ sắt và dụng cụ đóng
              đai cho doanh nghiệp từ năm {company.foundingYear}.{" "}
              {company.materialSource}. Kho tại {company.address}, giao Hà Nội,
              các KCN miền Bắc và toàn quốc.
            </p>
          </header>

          <SeoPageGallery
            variant="editorial"
            hero={{
              src: "/images/nha-may-dong-dai.webp",
              alt: "Nhà cung cấp dây đai thép phục vụ nhà máy và logistics",
              caption: "Cung ứng B2B - quy cách ổn định, giao theo tiến độ kho",
            }}
            gallery={[
              {
                src: "/images/xuat-hang-1.jpg",
                alt: "Xuất kho dây đai thép số lượng lớn",
              },
              {
                src: "/images/kho-dung-cu-2.jpeg",
                alt: "Kho vật tư đóng đai thép của nhà cung cấp",
              },
            ]}
          />

          <QuickQuoteForm
            sourcePage={PAGE_PATH}
            className="mt-8"
            title="Nhận tư vấn từ nhà cung cấp"
          />

          <section className="grid gap-6 md:grid-cols-2">
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
                  <Link href="/day-dai-thep" className="font-medium text-primary">
                    Tổng quan dây đai thép
                  </Link>
                </li>
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

          <TrustFacts embedded />

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Bảng giá sỉ dây đai thép cho doanh nghiệp
            </h2>
            <SteelStrappingPriceTiers />
            <p className="mt-3 text-sm text-muted-foreground">
              Bọ sắt và bộ dụng cụ báo giá riêng, xem{" "}
              <Link href="/bao-gia-day-dai-thep" className="text-primary hover:underline">
                bảng giá đầy đủ
              </Link>
              .
            </p>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Quy trình đặt dây đai thép số lượng lớn
            </h2>
            <ol className="mt-4 grid gap-4 sm:grid-cols-2">
              {aboutProcess.map((item) => (
                <li key={item.step} className="rounded-xl border border-border/60 p-4">
                  <p className="text-xs font-semibold text-primary">Bước {item.step}</p>
                  <h3 className="mt-1 text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ol>
            <PhoneCtaButton className="mt-4 px-4 py-2">
              Gọi đặt hàng {company.phone}
            </PhoneCtaButton>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-lg font-semibold text-foreground">
              So sánh nhu cầu theo quy mô doanh nghiệp
            </h2>
            <div className="responsive-table-wrap mt-3">
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
        <section className="surface-card p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Câu hỏi thường gặp khi chọn nhà cung cấp dây đai thép
            </h2>
            <div className="mt-4 space-y-4">
              {FAQ.map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-semibold text-foreground">{item.q}</h3>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <SeoRelatedLinks excludeHref={PAGE_PATH} />
        </article>
      </MarketingPageLayout>
    </>
  );
}
