import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductSocialProof } from "@/components/product/ProductSocialProof";
import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import type { Article } from "@/data/articles";
import type { CatalogProduct } from "@/data/products";
import { getReviewsForProduct } from "@/data/reviews";
import { formatSeoDate, getArticleImagePath } from "@/lib/seo";

type ArticleGuidePageProps = {
  article: Article;
  relatedProducts: CatalogProduct[];
  commercialLinks: { href: string; label: string }[];
};

function slugifyHeading(heading: string, index: number) {
  return `section-${index}-${heading
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

export function ArticleGuidePage({
  article,
  relatedProducts,
  commercialLinks,
}: ArticleGuidePageProps) {
  const heroSrc = getArticleImagePath(article);

  return (
    <SiteShell showTopBar stackContactsAboveCartBar={false}>
      <article className="border-b border-border/60 bg-background pb-12 pt-5 sm:pb-16 sm:pt-6">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Trang chủ
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/tu-van" className="hover:text-foreground">
                  Tư vấn
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-foreground">{article.title}</li>
            </ol>
          </nav>

          <header className="mt-5 max-w-[48rem]">
            <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              {article.title}
            </h1>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {article.description}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Xuất bản:{" "}
              <time dateTime={article.publishedAt}>
                {formatSeoDate(article.publishedAt)}
              </time>
              {" · "}
              Cập nhật:{" "}
              <time dateTime={article.updatedAt}>
                {formatSeoDate(article.updatedAt)}
              </time>
            </p>
          </header>

          <figure className="relative mt-8 aspect-[21/9] overflow-hidden rounded-[1.5rem] bg-muted sm:aspect-[2.4/1]">
            <Image
              src={heroSrc}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
            />
          </figure>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,16rem),minmax(0,1fr)] lg:gap-12">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <nav
                aria-label="Mục lục"
                className="rounded-2xl border border-border/80 bg-muted/20 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Mục lục
                </p>
                <ol className="mt-3 space-y-2 text-sm">
                  {article.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#${slugifyHeading(section.heading, index)}`}
                        className="text-muted-foreground transition hover:text-primary"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                  {article.faqs?.length ? (
                    <li>
                      <a
                        href="#faq"
                        className="text-muted-foreground transition hover:text-primary"
                      >
                        Câu hỏi thường gặp
                      </a>
                    </li>
                  ) : null}
                </ol>
              </nav>
            </aside>

            <div className="min-w-0 space-y-10">
              {article.sections.map((section, index) => (
                <section
                  key={section.heading}
                  id={slugifyHeading(section.heading, index)}
                  className="scroll-mt-24"
                >
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                  {section.table ? (
                    <div className="responsive-table-wrap mt-5">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-muted/60 text-foreground">
                          <tr>
                            {section.table.headers.map((header) => (
                              <th key={header} className="px-3 py-2">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr
                              key={row.join("-")}
                              className="border-t border-border/60"
                            >
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={`${cellIndex}-${cell}`}
                                  className={
                                    cellIndex === 0
                                      ? "px-3 py-2 font-medium text-foreground"
                                      : "px-3 py-2"
                                  }
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </section>
              ))}

              {article.faqs?.length ? (
                <section id="faq" className="scroll-mt-24">
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    Câu hỏi thường gặp
                  </h2>
                  <div className="mt-5 space-y-5">
                    {article.faqs.map((item) => (
                      <div
                        key={item.question}
                        className="rounded-2xl border border-border/70 bg-muted/15 p-4"
                      >
                        <h3 className="text-sm font-semibold text-foreground">
                          {item.question}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </div>
      </article>

      {relatedProducts.length > 0 ? (
        <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
          <div className="site-container">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
              Sản phẩm liên quan
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => {
                const reviews = getReviewsForProduct(product.id);
                const reviewStats =
                  reviews.length > 0
                    ? {
                        average:
                          reviews.reduce((sum, r) => sum + r.rating, 0) /
                          reviews.length,
                        count: reviews.length,
                      }
                    : null;
                const priceLabel = product.pricePerKg
                  ? `${STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg`
                  : product.salePrice
                    ? `${product.salePrice.toLocaleString("vi-VN")}đ`
                    : product.priceLabel ?? "Liên hệ";

                return (
                  <Link
                    key={product.id}
                    href={product.slug}
                    className="group flex flex-col overflow-hidden rounded-[1.35rem] border border-border/80 bg-background transition hover:border-primary/35"
                  >
                    <div className="relative aspect-[4/3] bg-muted">
                      <Image
                        src={product.images[0]?.src ?? "/images/day-dai-2.jpg"}
                        alt={product.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                        {product.name}
                      </h3>
                      <div className="mt-2">
                        <ProductSocialProof
                          reviewStats={reviewStats}
                          soldCount={product.soldCount}
                        />
                      </div>
                      <p className="mt-2 line-clamp-2 text-xs leading-6 text-muted-foreground">
                        {product.shortDescription}
                      </p>
                      <p className="mt-auto pt-3 text-sm font-bold text-secondary">
                        {priceLabel}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container max-w-[48rem]">
          <h2 className="text-lg font-semibold text-foreground">
            Trang mua hàng liên quan
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {commercialLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Cần chốt quy cách nhanh? Gọi{" "}
            <strong className="text-foreground">{siteConfig.company.phone}</strong>{" "}
            — {siteConfig.name} tư vấn miễn phí.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
