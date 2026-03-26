import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { articles, getArticleBySlug } from "@/data/articles";

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
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
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

  return (
    <>
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
        </article>
      </main>
      <Footer />
    </>
  );
}

