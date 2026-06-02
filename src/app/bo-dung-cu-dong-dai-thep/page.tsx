import type { Metadata } from "next";
import Link from "next/link";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { siteConfig } from "@/config/site";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export const metadata: Metadata = {
  title: "Bộ dụng cụ đóng đai thép | siết đai và kìm bấm bọ",
  description:
    "Tư vấn chọn bộ dụng cụ đóng đai thép theo bản dây 16mm, 19mm, 32mm. Hướng dẫn quy trình siết - bấm - khóa đúng kỹ thuật cho kho và nhà máy.",
  keywords: [
    "bộ dụng cụ đóng đai thép",
    "kìm siết đai thép",
    "kìm bấm bọ sắt",
    "dụng cụ đóng đai thép 16mm 19mm",
  ],
  alternates: {
    canonical: `${siteConfig.url}/bo-dung-cu-dong-dai-thep`,
  },
  openGraph: {
    title: "Bộ dụng cụ đóng đai thép | siết đai và kìm bấm bọ",
    description:
      "Thông số, quy trình sử dụng và checklist chọn bộ dụng cụ đóng đai thép phù hợp tải trọng.",
    url: `${siteConfig.url}/bo-dung-cu-dong-dai-thep`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Bộ dụng cụ đóng đai thép",
      },
    ],
  },
};

const toolRows = [
  ["Bộ 16-19mm", "0.4 - 0.8mm", "Kho vừa, pallet hàng tiêu chuẩn", "3.5 - 4.2kg"],
  ["Bộ 19-25mm", "0.6 - 1.0mm", "Hàng nặng trung bình", "4.2 - 5.5kg"],
  ["Bộ 32mm", "0.8 - 1.2mm", "Cuộn thép, kiện tải cao", "5.5 - 7.0kg"],
];

export default function SteelToolGuidePage() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Quy trình sử dụng bộ dụng cụ đóng đai thép",
    step: [
      {
        "@type": "HowToStep",
        name: "Luồn dây và đặt bọ",
        text: "Luồn dây đúng vị trí quanh kiện hàng và đặt bọ thép đúng bản dây.",
      },
      {
        "@type": "HowToStep",
        name: "Siết căng dây",
        text: "Dùng kìm siết siết tới lực phù hợp với tải trọng kiện hàng.",
      },
      {
        "@type": "HowToStep",
        name: "Bấm khóa và kiểm tra",
        text: "Dùng sealer bấm bọ, sau đó kiểm tra độ ổn định của mối đai.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <MarketingPageLayout>
        <article className="container mx-auto max-w-5xl px-4">
          <nav className="text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>{" "}
            / <span className="text-foreground">Bộ dụng cụ đóng đai thép</span>
          </nav>

          <h1 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Bộ dụng cụ đóng đai thép: cách chọn đúng cho từng tải trọng
          </h1>
          <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Bộ dụng cụ đóng đai thép gồm dụng cụ siết đai và kìm bấm bọ. Chọn
            đúng bộ theo bản dây giúp mối đai ổn định hơn, giảm lỗi tuột bọ và
            tiết kiệm thời gian thao tác tại kho.
          </p>

          <QuickQuoteForm
            sourcePage="/bo-dung-cu-dong-dai-thep"
            className="mt-8"
            title="Nhận tư vấn chọn bộ dụng cụ"
          />

          <section className="surface-card mt-6 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Thông số tham khảo theo nhóm bộ dụng cụ
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Nhóm bộ</th>
                    <th className="px-3 py-2">Độ dày dây hỗ trợ</th>
                    <th className="px-3 py-2">Ứng dụng chính</th>
                    <th className="px-3 py-2">Trọng lượng bộ</th>
                  </tr>
                </thead>
                <tbody>
                  {toolRows.map((row) => (
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
                Quy trình chuẩn 3 bước
              </h2>
              <ol className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                <li>1. Luồn dây đúng vị trí và đặt bọ thép phù hợp bản dây.</li>
                <li>2. Siết căng dây bằng kìm siết tới lực yêu cầu.</li>
                <li>3. Bấm bọ bằng sealer và kiểm tra lại mối khóa.</li>
              </ol>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Checklist khi mua bộ dụng cụ
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                <li>• Xác nhận bản dây dùng thực tế tại kho.</li>
                <li>• Kiểm tra nguồn gốc và chính sách bảo hành.</li>
                <li>• Chọn bộ có phụ tùng thay thế sẵn.</li>
                <li>• Test vận hành ngay trên kiện hàng mẫu.</li>
              </ul>
            </div>
          </section>

          <section className="surface-card mt-6 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Liên kết sản phẩm liên quan
            </h2>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <Link href="/san-pham/bo-dung-cu-dong-dai-thep" className="text-primary">
                Trang sản phẩm bộ dụng cụ
              </Link>
              <Link href="/khoa-dai-thep" className="text-primary">
                Hướng dẫn chọn khóa đai thép
              </Link>
              <Link href="/bao-gia-day-dai-thep" className="text-primary">
                Xem bảng giá tham khảo
              </Link>
            </div>
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="btn-lift mt-4 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Gọi nhận tư vấn kỹ thuật
            </a>
          </section>
        </article>
      </MarketingPageLayout>
    </>
  );
}
