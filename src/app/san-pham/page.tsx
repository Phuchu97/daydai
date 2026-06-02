import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { catalogProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Dây đai thép, khóa đai thép và bộ dụng cụ đóng đai",
  description:
    "Danh mục dây đai thép công nghiệp, khóa đai thép và bộ dụng cụ đóng đai cho nhà máy, kho bãi, logistics tại Việt Nam.",
  keywords: [
    "dây đai thép",
    "dây đai sắt",
    "khóa đai thép",
    "bộ dụng cụ đóng đai thép",
    "day dai thep",
  ],
  alternates: {
    canonical: `${siteConfig.url}/san-pham`,
  },
  openGraph: {
    title: "Dây đai thép, khóa đai thép và bộ dụng cụ đóng đai",
    description:
      "Chọn đúng dây đai thép và dụng cụ đóng đai theo tải trọng, quy cách và nhu cầu vận hành thực tế.",
    url: `${siteConfig.url}/san-pham`,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Danh mục sản phẩm dây đai thép",
      },
    ],
  },
};

export default function ProductIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: catalogProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}${product.slug}`,
      name: product.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Header />
      <main className="bg-background py-10">
        <section className="container mx-auto max-w-6xl px-4">
          <nav className="text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>{" "}
            / <span className="text-foreground">Sản phẩm</span>
          </nav>

          <h1 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Dây đai thép, khóa đai thép và dụng cụ đóng đai công nghiệp
          </h1>
          <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Danh mục sản phẩm dành cho nhà máy, kho bãi và logistics: dây đai
            thép chịu lực cao, khóa đai thép và bộ dụng cụ siết bấm đai theo
            từng tải trọng.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {catalogProducts.map((product) => (
              <article
                key={product.id}
                className="surface-card overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={product.images[0]?.src ?? siteConfig.ogImage}
                    alt={product.images[0]?.alt ?? product.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-base font-semibold text-foreground">
                    <Link href={product.slug} className="hover:text-primary">
                      {product.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {product.shortDescription}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={product.slug}
                      className="btn-lift inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                    >
                      Xem chi tiết sản phẩm
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-10 surface-card p-6">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Cần tư vấn chọn dây đai thép theo tải trọng?
            </h2>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Xem thêm hướng dẫn tại chuyên mục{" "}
              <Link href="/tu-van" className="font-semibold text-primary">
                tư vấn đóng gói công nghiệp
              </Link>{" "}
              hoặc liên hệ hotline{" "}
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="font-semibold text-primary"
              >
                {siteConfig.company.phone}
              </a>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/bao-gia-day-dai-thep" className="text-primary">
                Xem bảng giá dây đai thép
              </Link>
              <Link
                href="/day-dai-thep-16mm-19mm-32mm"
                className="text-primary"
              >
                So sánh 16mm, 19mm, 32mm
              </Link>
              <Link href="/khoa-dai-thep" className="text-primary">
                Tìm hiểu khóa đai thép
              </Link>
              <Link href="/bo-dung-cu-dong-dai-thep" className="text-primary">
                Chọn bộ dụng cụ đóng đai
              </Link>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
