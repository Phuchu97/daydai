import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCtaButton } from "@/components/contact/PhoneCtaButton";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { siteConfig } from "@/config/site";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export const metadata: Metadata = {
  title: "Khóa đai thép (bọ sắt) 16-19-25-32mm | tư vấn nhanh",
  description:
    "Khóa đai thép, bọ sắt kín/chữ U dùng cho dây đai thép công nghiệp. Hướng dẫn chọn khóa theo bản dây và loại dụng cụ siết bấm.",
  keywords: [
    "khóa đai thép",
    "bọ sắt đóng đai",
    "bọ đai thép 19mm",
    "khoa dai thep",
  ],
  alternates: {
    canonical: `${siteConfig.url}/khoa-dai-thep`,
  },
  openGraph: {
    title: "Khóa đai thép (bọ sắt) 16-19-25-32mm | tư vấn nhanh",
    description:
      "Bảng quy cách khóa đai thép và cách chọn theo tải trọng, dụng cụ đóng đai.",
    url: `${siteConfig.url}/khoa-dai-thep`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Khóa đai thép công nghiệp",
      },
    ],
  },
};

const compatibilityRows = [
  ["16mm", "16.2mm", "Bọ kín / chữ U", "Hàng nhẹ đến trung bình"],
  ["19mm", "19.2mm", "Bọ kín / chữ U", "Pallet kim loại, kiện hàng nặng"],
  ["25mm", "25.6mm", "Bọ kín", "Kiện cồng kềnh tải cao"],
  ["32mm", "32mm", "Bọ kín", "Cuộn thép, cấu kiện tải rất lớn"],
];

export default function SteelSealsPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Quy cách khóa đai thép phổ biến",
    itemListElement: compatibilityRows.map((row, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Khóa đai thép cho dây ${row[0]}`,
      description: `${row[2]} - ${row[3]}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <MarketingPageLayout>
        <article className="space-y-6 sm:space-y-8">
          <nav className="text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>{" "}
            / <span className="text-foreground">Khóa đai thép</span>
          </nav>

          <h1 className="mt-4 text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Khóa đai thép (bọ sắt) cho dây đai công nghiệp
          </h1>
          <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Khóa đai thép giữ mối nối dây đai ổn định khi vận chuyển, đặc biệt
            với hàng nặng và rung lắc cao. Chọn sai khóa có thể gây tuột mối
            đai dù dây vẫn đạt chuẩn.
          </p>

          <QuickQuoteForm sourcePage="/khoa-dai-thep" className="mt-8" />

          <section className="surface-card mt-6 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Bảng quy cách khóa đai thép phổ biến
            </h2>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Bản dây</th>
                    <th className="px-3 py-2">Kích thước khóa</th>
                    <th className="px-3 py-2">Dạng khóa</th>
                    <th className="px-3 py-2">Ứng dụng</th>
                  </tr>
                </thead>
                <tbody>
                  {compatibilityRows.map((row) => (
                    <tr key={row.join("-")} className="border-t border-border/60">
                      <td className="px-3 py-2">{row[0]}</td>
                      <td className="px-3 py-2">{row[1]}</td>
                      <td className="px-3 py-2">{row[2]}</td>
                      <td className="px-3 py-2">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Cách chọn khóa đai đúng cho doanh nghiệp
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                <li>• Chọn khóa lớn hơn bản dây khoảng 0.2mm để bấm ôm tốt.</li>
                <li>• Dùng bọ kín cho kiện nặng hoặc tuyến vận chuyển dài.</li>
                <li>
                  • Luôn test lực kéo thực tế trước khi triển khai số lượng lớn.
                </li>
                <li>
                  • Đảm bảo kìm bấm tương thích đúng bản khóa để tránh xì mối.
                </li>
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Liên kết hữu ích
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/san-pham/khoa-dai-thep-seals" className="text-primary">
                    Xem trang sản phẩm khóa đai thép
                  </Link>
                </li>
                <li>
                  <Link href="/bo-dung-cu-dong-dai-thep" className="text-primary">
                    Hướng dẫn chọn bộ dụng cụ đóng đai thép
                  </Link>
                </li>
                <li>
                  <Link href="/bao-gia-day-dai-thep" className="text-primary">
                    Xem bảng giá tham khảo mới nhất
                  </Link>
                </li>
              </ul>
              <PhoneCtaButton className="mt-4 px-4 py-2">
                Gọi tư vấn khóa đai
              </PhoneCtaButton>
            </div>
          </section>
        </article>
      </MarketingPageLayout>
    </>
  );
}
