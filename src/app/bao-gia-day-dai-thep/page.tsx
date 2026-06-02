import type { Metadata } from "next";
import Link from "next/link";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { siteConfig } from "@/config/site";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export const metadata: Metadata = {
  title: "Báo giá dây đai thép hôm nay | phản hồi trong ngày",
  description:
    "Bảng giá tham khảo dây đai thép mạ kẽm, dây đai thép dầu, khóa đai thép 16mm, 19mm, 25mm, 32mm. Hỗ trợ phản hồi báo giá trong ngày cho doanh nghiệp.",
  keywords: [
    "báo giá dây đai thép",
    "giá dây đai thép",
    "báo giá khóa đai thép",
    "day dai thep gia re",
    "dây đai thép 19mm",
  ],
  alternates: {
    canonical: `${siteConfig.url}/bao-gia-day-dai-thep`,
  },
  openGraph: {
    title: "Báo giá dây đai thép hôm nay | phản hồi trong ngày",
    description:
      "Tham khảo giá theo từng quy cách đai thép và nhận báo giá theo số lượng trong ngày.",
    url: `${siteConfig.url}/bao-gia-day-dai-thep`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Báo giá dây đai thép",
      },
    ],
  },
};

const strapPriceRows = [
  ["Dây đai thép dầu", "16mm", "19.000 - 20.500đ/kg"],
  ["Dây đai thép dầu", "19mm", "19.500 - 21.500đ/kg"],
  ["Dây đai thép mạ kẽm", "16mm", "22.000 - 24.000đ/kg"],
  ["Dây đai thép mạ kẽm", "19mm", "22.500 - 24.500đ/kg"],
  ["Dây đai thép mạ kẽm", "32mm", "22.000 - 24.000đ/kg"],
  ["Dây đai thép sơn tĩnh điện", "16-19mm", "23.500 - 25.500đ/kg"],
];

const sealPriceRows = [
  ["Khóa đai thép 16mm", "Bọ kín / chữ U", "1.800 - 2.400đ/cái"],
  ["Khóa đai thép 19mm", "Bọ kín / chữ U", "2.000 - 2.700đ/cái"],
  ["Khóa đai thép 25mm", "Bọ kín", "2.600 - 3.300đ/cái"],
  ["Khóa đai thép 32mm", "Bọ kín", "3.200 - 4.100đ/cái"],
];

export default function PricePage() {
  const faq = [
    {
      q: "Giá dây đai thép thay đổi theo yếu tố nào?",
      a: "Giá thay đổi theo mác thép, kiểu bề mặt xử lý (dầu/mạ kẽm/sơn), độ dày, khối lượng đặt hàng và địa điểm giao.",
    },
    {
      q: "Mua số lượng lớn có chiết khấu không?",
      a: "Có. Đơn hàng theo tháng hoặc theo pallet sẽ có đơn giá tốt hơn và được ưu tiên lịch giao.",
    },
    {
      q: "Bao lâu nhận được báo giá chính thức?",
      a: "Thông thường trong ngày làm việc, sau khi có đủ thông tin quy cách, số lượng và địa điểm giao hàng.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Bảng giá tham khảo dây đai thép và khóa đai thép",
    itemListElement: [
      ...strapPriceRows.map((row) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: `${row[0]} ${row[1]}`,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "VND",
          description: row[2],
        },
      })),
      ...sealPriceRows.map((row) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: row[0],
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "VND",
          description: row[2],
        },
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <MarketingPageLayout>
        <article className="container mx-auto max-w-5xl px-4">
          <nav className="text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Trang chủ
            </Link>{" "}
            / <span className="text-foreground">Báo giá dây đai thép</span>
          </nav>

          <h1 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Báo giá dây đai thép và khóa đai thép mới nhất
          </h1>
          <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Trang này tổng hợp giá tham khảo cho các quy cách phổ biến và giúp
            doanh nghiệp chuẩn bị ngân sách đóng gói trước khi chốt đơn.
          </p>

          <QuickQuoteForm sourcePage="/bao-gia-day-dai-thep" className="mt-8" />

          <section className="surface-card mt-6 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Bảng giá tham khảo dây đai thép
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Đơn giá có thể thay đổi theo thời điểm thép đầu vào và số lượng
              đặt hàng.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Chủng loại</th>
                    <th className="px-3 py-2">Quy cách phổ biến</th>
                    <th className="px-3 py-2">Đơn giá tham khảo</th>
                  </tr>
                </thead>
                <tbody>
                  {strapPriceRows.map((row) => (
                    <tr key={row.join("-")} className="border-t border-border/60">
                      <td className="px-3 py-2">{row[0]}</td>
                      <td className="px-3 py-2">{row[1]}</td>
                      <td className="px-3 py-2 font-medium text-foreground">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="surface-card mt-6 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Bảng giá tham khảo khóa đai thép
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Sản phẩm</th>
                    <th className="px-3 py-2">Loại</th>
                    <th className="px-3 py-2">Đơn giá tham khảo</th>
                  </tr>
                </thead>
                <tbody>
                  {sealPriceRows.map((row) => (
                    <tr key={row.join("-")} className="border-t border-border/60">
                      <td className="px-3 py-2">{row[0]}</td>
                      <td className="px-3 py-2">{row[1]}</td>
                      <td className="px-3 py-2 font-medium text-foreground">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                4 thông tin cần gửi để báo giá nhanh
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                <li>• Loại đai: dầu, mạ kẽm hoặc sơn tĩnh điện</li>
                <li>• Bản rộng và độ dày cần dùng</li>
                <li>• Số lượng dự kiến theo tháng</li>
                <li>• Địa điểm giao: Hà Nội, miền Bắc hoặc toàn quốc</li>
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Cần chọn đúng quy cách?
              </h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Xem thêm hướng dẫn chọn theo tải trọng tại{" "}
                <Link href="/tu-van" className="font-semibold text-primary">
                  chuyên mục tư vấn
                </Link>{" "}
                hoặc xem danh mục{" "}
                <Link href="/san-pham" className="font-semibold text-primary">
                  sản phẩm dây đai thép
                </Link>
                .
              </p>
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="btn-lift mt-4 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Gọi báo giá {siteConfig.company.phone}
              </a>
            </div>
          </section>
        </article>
      </MarketingPageLayout>
    </>
  );
}
