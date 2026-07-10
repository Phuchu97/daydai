import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { articles } from "@/data/articles";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Tư vấn & hướng dẫn dây đai thép | checklist cho doanh nghiệp",
  description:
    "Tổng hợp bài hướng dẫn sử dụng dây đai thép, quy trình siết đai, chọn khóa đai và dụng cụ đóng đai — checklist triển khai cho nhà máy, kho và logistics.",
  keywords: [
    "hướng dẫn dây đai thép",
    "tư vấn dây đai thép",
    "quy trình đóng dây đai thép",
    "cách chọn dây đai thép",
    "dụng cụ đóng đai thép",
    "đóng gói pallet hàng nặng",
  ],
  alternates: {
    canonical: `${siteConfig.url}/tu-van`,
  },
  openGraph: {
    title: "Tư vấn dây đai thép thực tế | checklist cho doanh nghiệp",
    description:
      "Chia sẻ kinh nghiệm chọn dây đai thép, khóa đai thép và vận hành đóng đai an toàn cho doanh nghiệp B2B.",
    url: `${siteConfig.url}/tu-van`,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Tư vấn dây đai thép công nghiệp",
      },
    ],
  },
};

export default function ConsultingIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bài tư vấn dây đai thép",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/tu-van/${article.slug}`,
      name: article.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <MarketingPageLayout>
        <section className="space-y-6 sm:space-y-8">
          <BreadcrumbNav
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Tư vấn" },
            ]}
          />
          <h1 className="text-balance font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Hướng dẫn & tư vấn đóng đai công nghiệp
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Tổng hợp quy trình siết dây đai thép, an toàn vận hành, chọn quy
            cách và tối ưu đóng gói pallet — viết theo kinh nghiệm triển khai
            tại kho và nhà máy.
          </p>

          <div className="mt-8 grid gap-4">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="rounded-2xl border border-border bg-muted/20 p-5 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-foreground">
                  <Link
                    href={`/tu-van/${article.slug}`}
                    className="hover:text-primary"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {article.excerpt}
                </p>
                <div className="mt-3 text-xs text-muted-foreground">
                  Cập nhật:{" "}
                  {new Date(article.updatedAt).toLocaleDateString("vi-VN")}
                </div>
              </article>
            ))}
          </div>
        </section>
      </MarketingPageLayout>
    </>
  );
}

