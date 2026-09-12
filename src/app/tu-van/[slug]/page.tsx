import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleGuidePage } from "@/components/seo/ArticleGuidePage";
import { siteConfig } from "@/config/site";
import { articles, getArticleBySlug } from "@/data/articles";
import { catalogProducts } from "@/data/products";
import { getArticleOgImageUrl } from "@/lib/seo";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const canonical = `${siteConfig.url}/tu-van/${article.slug}`;
  const ogImageUrl = getArticleOgImageUrl(article);
  return {
    title: article.title,
    description: article.description,
    keywords: [...article.keywords, "tư vấn dây đai thép", "đóng gói công nghiệp"],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "vi_VN",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [ogImageUrl],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const canonical = `${siteConfig.url}/tu-van/${article.slug}`;
  const relatedProducts = catalogProducts.filter((product) =>
    article.relatedProductIds.includes(product.id),
  );
  const keywordText = `${article.title} ${article.keywords.join(" ")}`.toLowerCase();
  const commercialLinks = [
    { href: "/day-dai-thep", label: "Mua dây đai thép" },
    { href: "/bao-gia-day-dai-thep", label: "Bảng giá dây đai thép" },
    { href: "/day-dai-thep-16mm-19mm-32mm", label: "So sánh 16mm · 19mm · 32mm" },
    { href: "/khoa-dai-thep", label: "Khóa đai thép / bọ sắt" },
    { href: "/bo-dung-cu-dong-dai-thep", label: "Bộ dụng cụ đóng đai thép" },
    { href: "/tu-van", label: "Hub tư vấn" },
  ];
  if (keywordText.includes("hà nội") || keywordText.includes("miền bắc")) {
    commercialLinks.push(
      { href: "/day-dai-thep-ha-noi", label: "Dây đai thép Hà Nội" },
      { href: "/day-dai-thep-mien-bac", label: "Dây đai thép miền Bắc" },
    );
  }
  if (keywordText.includes("dây đai sắt")) {
    commercialLinks.push({ href: "/day-dai-sat", label: "Trang dây đai sắt" });
  }

  const ogImageUrl = getArticleOgImageUrl(article);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [ogImageUrl],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.logoIcon}`,
      },
    },
    mainEntityOfPage: canonical,
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
        name: "Tư vấn",
        item: `${siteConfig.url}/tu-van`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonical,
      },
    ],
  };
  const faqJsonLd = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <ArticleGuidePage
        article={article}
        relatedProducts={relatedProducts}
        commercialLinks={commercialLinks}
      />
    </>
  );
}
