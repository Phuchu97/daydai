import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { articles } from "@/data/articles";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export const metadata: Metadata = {
  title: "Tư vấn dây đai thép thực tế | checklist cho doanh nghiệp",
  description:
    "Tổng hợp bài tư vấn dây đai thép, khóa đai thép và dụng cụ đóng đai kèm checklist triển khai cho nhà máy, xưởng sản xuất, logistics.",
  keywords: [
    "tư vấn dây đai thép",
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
        <section className="container mx-auto max-w-5xl px-4">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
            Chuyên mục tư vấn đóng gói công nghiệp
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Tổng hợp kinh nghiệm chọn dây đai thép, dụng cụ đóng đai và tối ưu
            vận hành tại kho/nhà máy.
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

