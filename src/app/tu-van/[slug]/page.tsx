import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { articles, getArticleBySlug } from "@/data/articles";
import { catalogProducts } from "@/data/products";

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
  const seoTitle = `${article.title} | Kinh nghiệm thực tế cho doanh nghiệp`;
  const seoDescription = `${article.description} Cập nhật kinh nghiệm triển khai tại kho và nhà máy.`;
  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [...article.keywords, "tư vấn dây đai thép", "đóng gói công nghiệp"],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      title: seoTitle,
      description: seoDescription,
      url: canonical,
      siteName: siteConfig.name,
      locale: "vi_VN",
      images: [
        {
          url: `${siteConfig.url}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
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
    { href: "/bao-gia-day-dai-thep", label: "Xem báo giá dây đai thép mới nhất" },
    {
      href: "/day-dai-thep-16mm-19mm-32mm",
      label: "So sánh dây đai thép 16mm, 19mm, 32mm",
    },
    { href: "/khoa-dai-thep", label: "Chọn khóa đai thép tương thích" },
    {
      href: "/bo-dung-cu-dong-dai-thep",
      label: "Tư vấn bộ dụng cụ đóng đai thép",
    },
  ];
  if (keywordText.includes("hà nội") || keywordText.includes("miền bắc")) {
    commercialLinks.push(
      { href: "/day-dai-thep-ha-noi", label: "Dây đai thép khu vực Hà Nội" },
      { href: "/day-dai-thep-mien-bac", label: "Giải pháp dây đai thép miền Bắc" },
    );
  }
  if (keywordText.includes("dây đai sắt")) {
    commercialLinks.push({ href: "/day-dai-sat", label: "Trang dây đai sắt" });
  }
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
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
      <Header />
      <main className="bg-background py-10">
        <article className="container mx-auto max-w-3xl px-4">
          <nav className="mb-6 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>{" "}
            /{" "}
            <Link href="/tu-van" className="hover:text-foreground">
              Tư vấn
            </Link>{" "}
            / <span className="text-foreground">{article.title}</span>
          </nav>

          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
            {article.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {article.description}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Cập nhật: {new Date(article.updatedAt).toLocaleDateString("vi-VN")}
          </p>

          <div className="mt-8 space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-foreground">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-10 rounded-2xl border border-border bg-muted/30 p-5">
              <h2 className="text-lg font-semibold text-foreground">
                Sản phẩm liên quan
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {relatedProducts.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={product.slug}
                      className="font-medium text-primary hover:underline"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-6 rounded-2xl border border-border bg-muted/25 p-5">
            <h2 className="text-lg font-semibold text-foreground">
              Tài nguyên mua hàng liên quan
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {commercialLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-medium text-primary hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

