import type { Metadata } from "next";
import Link from "next/link";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { siteConfig } from "@/config/site";
import { postalAddressJsonLd } from "@/lib/local-business-schema";
import { PhoneIcon, ZaloIcon } from "@/components/contact/ContactIcons";
import { CTA_BELL, CTA_BELL_ZALO } from "@/lib/cta-attention";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

const ZALO_URL = `https://zalo.me/${siteConfig.company.zaloPhone}`;

export const metadata: Metadata = {
  title: "Liên hệ báo giá dây đai thép | hotline trong ngày",
  description:
    "Liên hệ Dây Đai Thép Việt Nam qua hotline, Zalo hoặc form báo giá. Hỗ trợ tư vấn quy cách dây đai thép, khóa đai và dụng cụ đóng đai.",
  keywords: [
    "liên hệ dây đai thép",
    "báo giá dây đai thép",
    "hotline dây đai thép",
    "zalo dây đai thép",
  ],
  alternates: {
    canonical: `${siteConfig.url}/lien-he`,
  },
  openGraph: {
    title: "Liên hệ Dây Đai Thép Việt Nam",
    description:
      "Gọi hotline hoặc nhắn Zalo để nhận báo giá dây đai thép và tư vấn kỹ thuật.",
    url: `${siteConfig.url}/lien-he`,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Liên hệ Dây Đai Thép Việt Nam",
      },
    ],
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Liên hệ ${siteConfig.name}`,
    url: `${siteConfig.url}/lien-he`,
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.company.legalName,
      telephone: siteConfig.company.phone,
      address: postalAddressJsonLd,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.company.phone,
          contactType: "sales",
          areaServed: "VN",
          availableLanguage: ["vi"],
        },
      ],
    },
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
        name: "Liên hệ",
        item: `${siteConfig.url}/lien-he`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <MarketingPageLayout>
        <article className="space-y-8 sm:space-y-10">
          <BreadcrumbNav
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Liên hệ" },
            ]}
          />

          <header className="max-w-3xl">
            <h1 className="text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Liên hệ tư vấn và báo giá
            </h1>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Gửi yêu cầu qua form hoặc gọi trực tiếp. Chúng tôi phản hồi báo giá
              dây đai thép, khóa đai và dụng cụ trong ngày làm việc.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <section className="surface-card space-y-4 p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Thông tin liên hệ
              </h2>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-foreground">Hotline</dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${siteConfig.company.zaloPhone}`}
                      className="inline-flex items-center gap-1.5 font-semibold text-primary"
                    >
                      <span className={CTA_BELL}>
                        <PhoneIcon className="h-4 w-4" />
                      </span>
                      {siteConfig.company.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Zalo</dt>
                  <dd className="mt-1">
                    <a
                      href={ZALO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-primary"
                    >
                      <span className={CTA_BELL_ZALO}>
                        <ZaloIcon className="h-4 w-4" />
                      </span>
                      Nhắn Zalo báo giá
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Địa chỉ</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Kho hàng: {siteConfig.company.address}
                    <a
                      href={siteConfig.company.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 font-medium text-primary hover:underline"
                    >
                      Chỉ đường
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Khu vực phục vụ</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {siteConfig.company.serviceArea}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Giờ tiếp nhận</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Thứ 2 - Thứ 7, 8:00 - 18:00 (hỗ trợ khẩn qua hotline/Zalo)
                  </dd>
                </div>
              </dl>
              <p className="text-xs leading-6 text-muted-foreground">
                Xem thêm{" "}
                <Link href="/gioi-thieu" className="font-medium text-primary">
                  giới thiệu công ty
                </Link>{" "}
                hoặc{" "}
                <Link href="/bao-gia-day-dai-thep" className="font-medium text-primary">
                  bảng giá tham khảo
                </Link>
                .
              </p>
            </section>

            <QuickQuoteForm
              sourcePage="/lien-he"
              title="Gửi yêu cầu báo giá"
              className="h-fit"
            />
          </div>

          <section className="surface-card overflow-hidden">
            <h2 className="px-6 pt-6 text-lg font-semibold text-foreground">
              Kho dây đai thép tại {siteConfig.company.address}
            </h2>
            <p className="px-6 pt-2 text-sm text-muted-foreground">
              {siteConfig.company.serviceArea}.
            </p>
            <iframe
              title={`Bản đồ kho ${siteConfig.company.legalName} tại ${siteConfig.company.address}`}
              src={`https://www.google.com/maps?q=${siteConfig.company.geo.latitude},${siteConfig.company.geo.longitude}&z=16&output=embed`}
              className="mt-4 h-72 w-full border-0 sm:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </article>
      </MarketingPageLayout>
    </>
  );
}
