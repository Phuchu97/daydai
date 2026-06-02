import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dây đai thép 16mm 19mm 32mm | cách chọn nhanh",
  description:
    "So sánh dây đai thép 16mm, 19mm, 32mm theo tải trọng, độ dày và ứng dụng thực tế tại kho, nhà máy, logistics. Tư vấn chọn quy cách để giảm rủi ro bung đai.",
  keywords: [
    "dây đai thép 16mm",
    "dây đai thép 19mm",
    "dây đai thép 32mm",
    "cách chọn dây đai thép",
    "day dai thep 19mm",
  ],
  alternates: {
    canonical: `${siteConfig.url}/day-dai-thep-16mm-19mm-32mm`,
  },
  openGraph: {
    title: "Dây đai thép 16mm 19mm 32mm | cách chọn nhanh",
    description:
      "Bảng so sánh nhanh theo tải trọng và checklist chọn dây đai thép đúng nhu cầu vận hành.",
    url: `${siteConfig.url}/day-dai-thep-16mm-19mm-32mm`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "So sánh dây đai thép 16mm 19mm 32mm",
      },
    ],
  },
};

const compareRows = [
  [
    "16mm",
    "0.5 - 0.8mm",
    "400 - 900kg/đai",
    "Pallet vừa, kiện ổn định hình khối",
  ],
  [
    "19mm",
    "0.6 - 0.9mm",
    "800 - 1.400kg/đai",
    "Pallet thép, vật tư xây dựng, hàng rung lắc cao",
  ],
  [
    "32mm",
    "0.8 - 1.2mm",
    "1.300kg+/đai",
    "Cuộn thép, cấu kiện siêu nặng, tuyến xa",
  ],
];

export default function SteelStrappingSizePage() {
  const guideFaq = [
    {
      q: "Nên dùng dây đai thép 16mm hay 19mm?",
      a: "Nếu tải trọng trung bình đến nặng hoặc tuyến vận chuyển dài, 19mm thường an toàn hơn. Với kiện vừa và quy trình đóng đai ổn định, 16mm có thể tối ưu chi phí.",
    },
    {
      q: "Khi nào cần chuyển lên dây 32mm?",
      a: "Khi hàng rất nặng, nhiều va đập hoặc yêu cầu hệ số an toàn cao, dây 32mm giúp tăng biên chịu lực và ổn định mối đai.",
    },
    {
      q: "Có thể chọn dây chỉ theo trọng lượng kiện hàng không?",
      a: "Không nên. Cần xét thêm số điểm đai, hình dạng kiện, kiểu pallet, tần suất bốc xếp và quãng đường vận chuyển.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guideFaq.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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
        name: "Dây đai thép 16mm 19mm 32mm",
        item: `${siteConfig.url}/day-dai-thep-16mm-19mm-32mm`,
      },
    ],
  };
  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Cấu hình dây đai thép theo quy cách",
    itemListElement: compareRows.map((row) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: `Dây đai thép ${row[0]}`,
        description: `${row[1]} | ${row[2]} | ${row[3]}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />
      <Header />
      <main className="bg-background py-10">
        <article className="container mx-auto max-w-5xl px-4">
          <nav className="text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>{" "}
            / <span className="text-foreground">Dây đai thép 16mm 19mm 32mm</span>
          </nav>

          <h1 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Dây đai thép 16mm, 19mm, 32mm: nên chọn loại nào?
          </h1>
          <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Chọn sai bản dây có thể làm tăng chi phí hoặc giảm an toàn khi vận
            chuyển. Bảng dưới đây giúp bạn đối chiếu nhanh theo tải trọng và
            điều kiện khai thác thực tế.
          </p>

          <QuickQuoteForm
            sourcePage="/day-dai-thep-16mm-19mm-32mm"
            className="mt-8"
            title="Nhận tư vấn chọn bản dây phù hợp"
          />

          <section className="surface-card mt-6 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              So sánh nhanh theo quy cách phổ biến
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Bản dây</th>
                    <th className="px-3 py-2">Độ dày thường dùng</th>
                    <th className="px-3 py-2">Tải trọng tham khảo</th>
                    <th className="px-3 py-2">Ứng dụng phù hợp</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.join("-")} className="border-t border-border/60">
                      <td className="px-3 py-2 font-medium text-foreground">{row[0]}</td>
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
                Checklist chọn bản dây trước khi đặt hàng
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                <li>• Xác định tải trọng thực và số điểm đai trên mỗi kiện.</li>
                <li>• Kiểm tra điều kiện vận chuyển: nội địa, xuất khẩu, rung lắc.</li>
                <li>• Đánh giá loại khóa đai và dụng cụ đang sử dụng tại kho.</li>
                <li>• Test mẫu trong ca thực tế trước khi nhập số lượng lớn.</li>
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Liên kết tư vấn liên quan
              </h2>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <Link href="/bao-gia-day-dai-thep" className="text-primary">
                  Bảng giá dây đai thép và khóa đai
                </Link>
                <Link href="/khoa-dai-thep" className="text-primary">
                  Chọn khóa đai thép tương thích
                </Link>
                <Link href="/bo-dung-cu-dong-dai-thep" className="text-primary">
                  Chọn bộ dụng cụ siết bấm phù hợp
                </Link>
                <Link href="/tu-van" className="text-primary">
                  Xem thêm bài tư vấn kỹ thuật
                </Link>
              </div>
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="btn-lift mt-4 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Gọi tư vấn chọn quy cách
              </a>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
