import type { Metadata } from "next";
import Link from "next/link";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { buildOfferCatalogItem } from "@/lib/merchant-offer-schema";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export const metadata: Metadata = {
  title: "Dây đai sắt (dây đai thép) | tư vấn nhanh theo tải trọng",
  description:
    "Dây đai sắt hay dây đai thép dùng để đóng pallet hàng nặng, cuộn thép, vật tư xây dựng. Tư vấn quy cách 16mm, 19mm, 32mm theo tải trọng thực tế.",
  keywords: [
    "dây đai sắt",
    "đai sắt đóng hàng",
    "dây đai thép",
    "day dai sat",
  ],
  alternates: {
    canonical: `${siteConfig.url}/day-dai-sat`,
  },
  openGraph: {
    title: "Dây đai sắt (dây đai thép) | tư vấn nhanh theo tải trọng",
    description:
      "Giải pháp dây đai sắt cho pallet hàng nặng, cuộn thép và vật tư xây dựng, kèm hỗ trợ chọn quy cách phù hợp.",
    url: `${siteConfig.url}/day-dai-sat`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Dây đai sắt công nghiệp",
      },
    ],
  },
};

export default function SteelBandPage() {
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
        name: "Dây đai sắt",
        item: `${siteConfig.url}/day-dai-sat`,
      },
    ],
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Tư vấn và cung cấp dây đai sắt cho hàng nặng",
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
    name: "Giải pháp dây đai sắt theo nhóm ngành",
    itemListElement: [
      "Dây đai sắt cho vật liệu xây dựng",
      "Dây đai sắt cho pallet kim loại",
      "Dây đai sắt cho logistics hàng nặng",
    ].map((name) =>
      buildOfferCatalogItem(name, STEEL_STRAPPING_PRICE_PER_KG, {
        url: `${siteConfig.url}/san-pham/day-dai-thep-chiu-luc-cao`,
        unitText: "kg",
      }),
    ),
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
      <MarketingPageLayout>
        <article className="space-y-6 sm:space-y-8">
          <nav className="text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>{" "}
            / <span className="text-foreground">Dây đai sắt</span>
          </nav>

          <h1 className="mt-4 text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Dây đai sắt cho hàng nặng trong kho và nhà máy
          </h1>
          <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Trong thực tế vận hành, dây đai sắt thường được gọi cùng nghĩa với
            dây đai thép. Việc chọn đúng bản dây, độ dày và loại khóa giúp
            giảm nguy cơ bung đai trong quá trình bốc xếp và vận chuyển.
          </p>

          <QuickQuoteForm
            sourcePage="/day-dai-sat"
            className="mt-8"
            title="Nhận tư vấn dây đai sắt theo tải trọng"
          />

          <section className="surface-card mt-6 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              So sánh nhanh theo nhóm ngành
            </h2>
            <div className="responsive-table-wrap mt-3">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Ngành</th>
                    <th className="px-3 py-2">Nhu cầu chính</th>
                    <th className="px-3 py-2">Gợi ý quy cách</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2">Xây dựng, vật liệu</td>
                    <td className="px-3 py-2">Kiện nặng, cạnh sắc</td>
                    <td className="px-3 py-2">19mm - 32mm, khóa kín</td>
                  </tr>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2">Kho vận nội địa</td>
                    <td className="px-3 py-2">Ổn định pallet khi bốc xếp</td>
                    <td className="px-3 py-2">16mm - 19mm theo tải trọng</td>
                  </tr>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2">Cơ khí, thép cuộn</td>
                    <td className="px-3 py-2">Biên an toàn cao</td>
                    <td className="px-3 py-2">32mm + kiểm tra lực siết</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="surface-card mt-6 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Tài liệu nên xem trước khi đặt hàng
            </h2>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <Link href="/day-dai-thep-16mm-19mm-32mm" className="text-primary">
                So sánh bản dây 16mm 19mm 32mm
              </Link>
              <Link href="/khoa-dai-thep" className="text-primary">
                Chọn khóa đai thép tương thích
              </Link>
              <Link href="/bao-gia-day-dai-thep" className="text-primary">
                Xem bảng giá tham khảo
              </Link>
            </div>
          </section>
        </article>
      </MarketingPageLayout>
    </>
  );
}
