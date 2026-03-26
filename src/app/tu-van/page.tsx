import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { articles } from "@/data/articles";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Tư vấn đóng gói công nghiệp",
  description:
    "Kiến thức thực tế về dây đai thép, dụng cụ đóng đai và tối ưu quy trình đóng gói cho nhà máy, kho bãi, logistics.",
  alternates: {
    canonical: `${siteConfig.url}/tu-van`,
  },
};

export default function ConsultingIndexPage() {
  return (
    <>
      <Header />
      <main className="bg-background py-10">
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
      </main>
      <Footer />
    </>
  );
}

