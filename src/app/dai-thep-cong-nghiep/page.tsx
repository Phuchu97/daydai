import type { Metadata } from "next";
import Link from "next/link";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { siteConfig } from "@/config/site";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export const metadata: Metadata = {
  title: "Đai thép công nghiệp | giải pháp cho pallet hàng nặng",
  description:
    "Giải pháp đai thép công nghiệp cho nhà máy, xưởng sản xuất, logistics: chọn bản dây, khóa đai và bộ dụng cụ đúng kỹ thuật để đảm bảo an toàn vận chuyển.",
  keywords: [
    "đai thép công nghiệp",
    "đai thép đóng hàng",
    "dây thép đóng pallet",
    "dây đai thép chịu lực",
  ],
  alternates: {
    canonical: `${siteConfig.url}/dai-thep-cong-nghiep`,
  },
  openGraph: {
    title: "Đai thép công nghiệp | giải pháp cho pallet hàng nặng",
    description:
      "Tư vấn chọn đai thép công nghiệp theo tải trọng và điều kiện vận chuyển, đồng bộ dây đai - khóa đai - dụng cụ.",
    url: `${siteConfig.url}/dai-thep-cong-nghiep`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Đai thép công nghiệp cho pallet",
      },
    ],
  },
};

export default function IndustrialSteelStrapPage() {
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
        name: "Đai thép công nghiệp",
        item: `${siteConfig.url}/dai-thep-cong-nghiep`,
      },
    ],
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Giải pháp đai thép công nghiệp cho hàng nặng",
    provider: {
      "@type": "Organization",
      name: siteConfig.company.legalName,
      telephone: siteConfig.company.phone,
    },
    areaServed: ["VN"],
  };
  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Giải pháp đai thép công nghiệp",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Đai thép cho pallet thép và gỗ" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Đai thép cho cuộn thép và kết cấu nặng" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Đai thép cho tuyến vận chuyển rung lắc cao" },
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
      <MarketingPageLayout>
        <article className="container mx-auto max-w-5xl px-4">
          <nav className="text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>{" "}
            / <span className="text-foreground">Đai thép công nghiệp</span>
          </nav>

          <h1 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Đai thép công nghiệp cho pallet và hàng siêu nặng
          </h1>
          <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Đai thép công nghiệp phù hợp cho kiện hàng có rung lắc cao, tải
            trọng lớn hoặc tuyến vận chuyển dài. Cần triển khai đồng bộ dây,
            khóa và dụng cụ để giữ ổn định mối đai.
          </p>

          <QuickQuoteForm
            sourcePage="/dai-thep-cong-nghiep"
            className="mt-8"
            title="Nhận tư vấn đai thép công nghiệp"
          />

          <section className="surface-card mt-6 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              So sánh nhu cầu theo ngành
            </h2>
            <div className="mt-3 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Ngành</th>
                    <th className="px-3 py-2">Đặc thù vận hành</th>
                    <th className="px-3 py-2">Ưu tiên kỹ thuật</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2">Thép, cơ khí</td>
                    <td className="px-3 py-2">Tải cao, kiện sắc cạnh</td>
                    <td className="px-3 py-2">Bản dây lớn + khóa kín</td>
                  </tr>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2">Logistics</td>
                    <td className="px-3 py-2">Rung lắc và bốc xếp liên tục</td>
                    <td className="px-3 py-2">Ổn định mối khóa và số điểm đai</td>
                  </tr>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2">Vật liệu xây dựng</td>
                    <td className="px-3 py-2">Kiện cồng kềnh, ngoài trời</td>
                    <td className="px-3 py-2">Bề mặt dây phù hợp môi trường</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="surface-card mt-6 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Cụm trang chuyên sâu liên quan
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/san-pham" className="font-medium text-primary">
                  Danh mục dây đai thép và dụng cụ
                </Link>
              </li>
              <li>
                <Link href="/bo-dung-cu-dong-dai-thep" className="font-medium text-primary">
                  Chọn bộ dụng cụ đóng đai thép
                </Link>
              </li>
              <li>
                <Link href="/tu-van" className="font-medium text-primary">
                  Bài tư vấn kỹ thuật cho kho và nhà máy
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </MarketingPageLayout>
    </>
  );
}
