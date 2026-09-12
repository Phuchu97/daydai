import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCtaButton } from "@/components/contact/PhoneCtaButton";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { SeoPageGallery } from "@/components/seo/SeoPageGallery";
import { SeoRelatedLinks } from "@/components/seo/SeoRelatedLinks";
import { siteConfig } from "@/config/site";
import { articles, getArticleBySlug } from "@/data/articles";
import {
  BUYING_CHECKLIST,
  CONSULTING_TOPICS,
  INDUSTRY_CASES,
  LOAD_GUIDE_ROWS,
  SURFACE_GUIDES,
} from "@/data/steel-strapping-guide";

export const metadata: Metadata = {
  title: "Tư vấn dây đai thép | cách chọn, quy trình & checklist kho",
  description:
    "Hub tư vấn dây đai thép: cách chọn theo tải trọng, dầu/mạ kẽm/sơn, quy trình đóng đai 5 bước, an toàn kho, khóa đai và dụng cụ — checklist cho nhà máy & logistics.",
  keywords: [
    "tư vấn dây đai thép",
    "hướng dẫn dây đai thép",
    "cách chọn dây đai thép",
    "quy trình đóng dây đai thép",
    "cách đóng đai thép",
    "dụng cụ đóng đai thép",
    "đóng gói pallet hàng nặng",
  ],
  alternates: {
    canonical: `${siteConfig.url}/tu-van`,
  },
  openGraph: {
    title: "Tư vấn dây đai thép | cách chọn, quy trình & checklist kho",
    description:
      "Không chỉ danh sách bài viết: có bảng chọn nhanh theo tải, loại bề mặt, ngành và link tới từng hướng dẫn chi tiết.",
    url: `${siteConfig.url}/tu-van`,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/nha-may-dong-dai-3.webp`,
        width: 1200,
        height: 630,
        alt: "Tư vấn dây đai thép công nghiệp",
      },
    ],
  },
};

export default function ConsultingIndexPage() {
  const faq = [
    {
      q: "Nên bắt đầu tư vấn từ đâu nếu mới dùng dây đai thép?",
      a: "Xác định tải kiện và môi trường (khô/ẩm/xuất khẩu), chọn bản dây 16/19/32mm, rồi khớp khóa đai và dụng cụ. Dùng bảng chọn nhanh bên dưới rồi đọc bài chi tiết theo nhóm.",
    },
    {
      q: "Dây dầu, mạ kẽm hay sơn tĩnh điện khác nhau thế nào?",
      a: "Dầu tối ưu giá cho kho khô; mạ kẽm chống ẩm tốt hơn, phổ biến xuất khẩu; sơn tĩnh điện chống ăn mòn và thẩm mỹ cao hơn, giá cao hơn.",
    },
    {
      q: "PET có thay được dây đai thép không?",
      a: "Với hàng vừa, PET có thể đủ. Hàng nặng, cạnh sắc hoặc cần giữ lực lâu trên tuyến dài thường nên dùng thép. Xem bài so sánh PET vs thép trong mục chọn quy cách.",
    },
    {
      q: "Cần tư vấn trực tiếp thì làm sao?",
      a: `Gọi ${siteConfig.company.phone} hoặc gửi form báo giá — phản hồi trong ngày làm việc kèm gợi ý quy cách.`,
    },
  ];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bài tư vấn dây đai thép",
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/tu-van/${article.slug}`,
      name: article.title,
    })),
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cách chọn dây đai thép phù hợp cho kiện hàng",
    description:
      "Quy trình 5 bước chọn dây đai thép theo tải trọng, môi trường và dụng cụ.",
    step: [
      {
        "@type": "HowToStep",
        name: "Xác định tải kiện và số điểm đai",
        text: "Ghi khối lượng kiện, hình dạng pallet và số vòng đai dự kiến.",
      },
      {
        "@type": "HowToStep",
        name: "Chọn bản rộng 16 / 19 / 32mm",
        text: "Đối chiếu bảng tải trọng tham khảo để chọn khổ dây phù hợp.",
      },
      {
        "@type": "HowToStep",
        name: "Chọn loại bề mặt",
        text: "Kho khô dùng dầu; ẩm/xuất khẩu ưu tiên mạ kẽm hoặc sơn tĩnh điện.",
      },
      {
        "@type": "HowToStep",
        name: "Khớp khóa đai và dụng cụ",
        text: "Bọ sắt và kìm siết/bấm phải đúng khổ dây để mối nối giữ lực.",
      },
      {
        "@type": "HowToStep",
        name: "Test mẫu rồi chuẩn hóa SOP",
        text: "Chạy thử 1–2 ca, chốt quy cách và hướng dẫn cho công nhân kho.",
      },
    ],
  };

  const categorizedSlugs = new Set<string>(
    CONSULTING_TOPICS.flatMap((t) => [...t.slugs]),
  );
  const uncategorized = articles.filter((a) => !categorizedSlugs.has(a.slug));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <MarketingPageLayout>
        <div className="space-y-6 sm:space-y-8">
          <BreadcrumbNav
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Tư vấn" },
            ]}
          />

          <header>
            <h1 className="text-balance font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Tư vấn dây đai thép: cách chọn, quy trình đóng đai và checklist kho
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              Hub hướng dẫn cho nhà máy, kho và logistics — không chỉ danh sách
              bài viết. Bên dưới có bảng chọn nhanh theo tải trọng / loại bề mặt
              / ngành, rồi link tới từng bài kỹ thuật chi tiết ({articles.length}{" "}
              bài).
            </p>
          </header>

          <SeoPageGallery
            variant="editorial"
            hero={{
              src: "/images/nha-may-dong-dai-3.webp",
              alt: "Nhà máy đóng đai thép - tư vấn quy trình và quy cách",
              caption: "Tư vấn theo thực tế vận hành tại kho và nhà máy",
            }}
            gallery={[
              {
                src: "/images/human-dungcu.jpeg",
                alt: "Công nhân sử dụng dụng cụ đóng đai thép",
              },
              {
                src: "/images/kho-dung-cu.jpeg",
                alt: "Kho dụng cụ và vật tư đóng đai thép",
              },
            ]}
          />

          <nav
            aria-label="Mục lục tư vấn"
            className="flex flex-wrap gap-2 text-xs sm:text-sm"
          >
            <a
              href="#chon-nhanh"
              className="rounded-full border border-border/80 bg-muted/40 px-3 py-1.5 font-medium hover:border-primary/40 hover:text-primary"
            >
              Chọn nhanh
            </a>
            {CONSULTING_TOPICS.map((topic) => (
              <a
                key={topic.id}
                href={`#${topic.id}`}
                className="rounded-full border border-border/80 bg-muted/40 px-3 py-1.5 font-medium hover:border-primary/40 hover:text-primary"
              >
                {topic.title}
              </a>
            ))}
            <a
              href="#faq-tu-van"
              className="rounded-full border border-border/80 bg-muted/40 px-3 py-1.5 font-medium hover:border-primary/40 hover:text-primary"
            >
              FAQ
            </a>
          </nav>

          <section
            id="chon-nhanh"
            className="surface-card scroll-mt-24 border-primary/20 bg-primary/[0.03] p-6"
          >
            <h2 className="text-xl font-semibold text-foreground">
              Chọn dây đai thép nhanh trong 5 bước
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
              {BUYING_CHECKLIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link
                href="/day-dai-thep"
                className="font-semibold text-primary hover:underline"
              >
                Trang tổng quan dây đai thép
              </Link>
              <Link
                href="/bao-gia-day-dai-thep"
                className="font-semibold text-primary hover:underline"
              >
                Xem bảng giá mới nhất
              </Link>
              <Link
                href="/day-dai-thep-16mm-19mm-32mm"
                className="font-semibold text-primary hover:underline"
              >
                So sánh 16 · 19 · 32mm
              </Link>
            </div>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Bảng chọn theo tải trọng kiện
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Đây là điểm đối thủ hướng dẫn thường nói chung chung — bảng dưới
              cho số tham khảo để quyết định nhanh tại kho.
            </p>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Tải kiện</th>
                    <th className="px-3 py-2">Khuyến nghị</th>
                    <th className="px-3 py-2">Ghi chú vận hành</th>
                  </tr>
                </thead>
                <tbody>
                  {LOAD_GUIDE_ROWS.map((row) => (
                    <tr key={row.load} className="border-t border-border/60">
                      <td className="px-3 py-2 font-medium text-foreground">
                        {row.load}
                      </td>
                      <td className="px-3 py-2">{row.recommend}</td>
                      <td className="px-3 py-2">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Chọn loại bề mặt
              </h2>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                {SURFACE_GUIDES.map((guide) => (
                  <li key={guide.slug}>
                    <Link
                      href={`/${guide.slug}`}
                      className="font-semibold text-primary hover:underline"
                    >
                      {guide.name}
                    </Link>
                    {" — "}
                    {guide.bestFor[0]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Gợi ý theo ngành
              </h2>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                {INDUSTRY_CASES.map((row) => (
                  <li key={row.industry}>
                    <span className="font-semibold text-foreground">
                      {row.industry}:
                    </span>{" "}
                    {row.recommend}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <QuickQuoteForm
            sourcePage="/tu-van"
            title="Cần tư vấn quy cách theo tải thực tế?"
          />

          {CONSULTING_TOPICS.map((topic) => {
            const topicArticles = topic.slugs
              .map((slug) => getArticleBySlug(slug))
              .filter((article): article is NonNullable<typeof article> =>
                Boolean(article),
              );

            return (
              <section
                key={topic.id}
                id={topic.id}
                className="scroll-mt-24 space-y-4"
              >
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {topic.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {topic.description}
                  </p>
                </div>
                <div className="grid gap-4">
                  {topicArticles.map((article) => (
                    <article
                      key={article.slug}
                      className="rounded-2xl border border-border bg-muted/20 p-5 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-foreground">
                        <Link
                          href={`/tu-van/${article.slug}`}
                          className="hover:text-primary"
                        >
                          {article.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {article.excerpt}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span>
                          Cập nhật:{" "}
                          {new Date(article.updatedAt).toLocaleDateString("vi-VN")}
                        </span>
                        <Link
                          href={`/tu-van/${article.slug}`}
                          className="font-semibold text-primary hover:underline"
                        >
                          Đọc hướng dẫn →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          {uncategorized.length > 0 ? (
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Bài viết khác
              </h2>
              <div className="grid gap-4">
                {uncategorized.map((article) => (
                  <article
                    key={article.slug}
                    className="rounded-2xl border border-border bg-muted/20 p-5 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-foreground">
                      <Link
                        href={`/tu-van/${article.slug}`}
                        className="hover:text-primary"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="surface-card p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Trang sản phẩm & báo giá nên mở kèm
            </h2>
            <div className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-5">
              <Link href="/bao-gia-day-dai-thep" className="text-primary hover:underline">
                Báo giá dây đai & khóa đai
              </Link>
              <Link href="/khoa-dai-thep" className="text-primary hover:underline">
                Khóa đai thép
              </Link>
              <Link
                href="/bo-dung-cu-dong-dai-thep"
                className="text-primary hover:underline"
              >
                Bộ dụng cụ đóng đai
              </Link>
              <Link href="/day-dai-thep-dong-pallet" className="text-primary hover:underline">
                Đóng pallet bằng dây đai thép
              </Link>
              <Link href="/day-dai-thep-ha-noi" className="text-primary hover:underline">
                Dây đai thép Hà Nội
              </Link>
              <Link href="/day-dai-thep-mien-bac" className="text-primary hover:underline">
                Dây đai thép miền Bắc
              </Link>
            </div>
            <PhoneCtaButton className="mt-4 px-4 py-2">
              Gọi tư vấn {siteConfig.company.phone}
            </PhoneCtaButton>
          </section>

          <section id="faq-tu-van" className="surface-card scroll-mt-24 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Câu hỏi thường gặp khi tư vấn dây đai thép
            </h2>
            <div className="mt-4 space-y-4">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-semibold text-foreground">{item.q}</h3>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <SeoRelatedLinks excludeHref="/tu-van" />
        </div>
      </MarketingPageLayout>
    </>
  );
}
