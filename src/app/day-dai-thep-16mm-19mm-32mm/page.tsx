import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCtaButton } from "@/components/contact/PhoneCtaButton";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { SeoPageGallery } from "@/components/seo/SeoPageGallery";
import { SeoRelatedLinks } from "@/components/seo/SeoRelatedLinks";
import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import {
  INDUSTRY_CASES,
  LOAD_GUIDE_ROWS,
  SPEC_ROWS,
} from "@/data/steel-strapping-guide";
import { buildOfferCatalogItem } from "@/lib/merchant-offer-schema";

const PAGE_PATH = "/day-dai-thep-16mm-19mm-32mm";

export const metadata: Metadata = {
  title: "Dây đai thép 16mm 19mm 32mm | bảng so sánh & cách chọn",
  description:
    "So sánh dây đai thép 16mm, 19mm, 32mm: độ dày, chịu lực (N), m/kg, tải tham khảo và checklist chọn theo tải trọng thực tế tại kho.",
  keywords: [
    "dây đai thép 16mm",
    "dây đai thép 19mm",
    "dây đai thép 32mm",
    "cách chọn dây đai thép",
    "day dai thep 19mm",
  ],
  alternates: {
    canonical: `${siteConfig.url}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Dây đai thép 16mm 19mm 32mm | bảng so sánh & cách chọn",
    description:
      "Bảng spec đầy đủ + hướng dẫn chọn theo tải trọng và điều kiện vận chuyển.",
    url: `${siteConfig.url}${PAGE_PATH}`,
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
    {
      q: "m/kg nghĩa là gì?",
      a: "Số mét dây ước tính trên mỗi kg. Bản dây càng rộng/dày thì m/kg càng thấp — hữu ích khi dự trù số cuộn theo chu vi kiện.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guideFaq.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
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
        item: `${siteConfig.url}${PAGE_PATH}`,
      },
    ],
  };
  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Cấu hình dây đai thép theo quy cách",
    itemListElement: SPEC_ROWS.filter((row) =>
      [16, 19, 32].includes(row.widthMm),
    ).map((row) =>
      buildOfferCatalogItem(`Dây đai thép ${row.widthMm}mm`, STEEL_STRAPPING_PRICE_PER_KG, {
        url: `${siteConfig.url}${row.href}`,
        unitText: "kg",
      }),
    ),
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
      <MarketingPageLayout>
        <article className="space-y-6 sm:space-y-8">
          <BreadcrumbNav
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Dây đai thép", href: "/day-dai-thep" },
              { label: "16mm · 19mm · 32mm" },
            ]}
          />

          <header>
            <h1 className="text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Dây đai thép 16mm, 19mm, 32mm: nên chọn loại nào?
            </h1>
            <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
              Chọn sai bản dây có thể làm tăng chi phí hoặc giảm an toàn khi vận
              chuyển. Bảng dưới đối chiếu độ dày, chịu lực, m/kg và tải tham
              khảo — kèm checklist theo điều kiện kho thực tế.
            </p>
          </header>

          <SeoPageGallery
            variant="editorial"
            hero={{
              src: "/images/day-dai-thep-32-chat-luong.jpg",
              alt: "So sánh quy cách dây đai thép 16mm 19mm 32mm",
              caption: "Đối chiếu bản dây theo tải trọng trước khi đặt hàng",
            }}
            gallery={[
              {
                src: "/images/day-dai-thep-chat-luong-cao.jpg",
                alt: "Dây đai thép 16mm cho pallet vừa",
              },
              {
                src: "/images/day-dai-thep-32mm.jpg",
                alt: "Dây đai thép 32mm chịu lực cao",
              },
            ]}
          />

          <QuickQuoteForm
            sourcePage={PAGE_PATH}
            title="Nhận tư vấn chọn bản dây phù hợp"
          />

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Bảng so sánh thông số kỹ thuật
            </h2>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Bản dây</th>
                    <th className="px-3 py-2">Độ dày</th>
                    <th className="px-3 py-2">Chịu lực (N)</th>
                    <th className="px-3 py-2">m/kg</th>
                    <th className="px-3 py-2">Tải tham khảo</th>
                    <th className="px-3 py-2">Ứng dụng</th>
                  </tr>
                </thead>
                <tbody>
                  {SPEC_ROWS.map((row) => (
                    <tr key={row.widthMm} className="border-t border-border/60">
                      <td className="px-3 py-2 font-medium text-foreground">
                        <Link href={row.href} className="text-primary hover:underline">
                          {row.widthMm}mm
                        </Link>
                      </td>
                      <td className="px-3 py-2">{row.thicknessMm}mm</td>
                      <td className="px-3 py-2">{row.breakLoadN}</td>
                      <td className="px-3 py-2">{row.metersPerKg}</td>
                      <td className="px-3 py-2">{row.loadHint}</td>
                      <td className="px-3 py-2">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Chọn theo tải trọng kiện
            </h2>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Tải kiện</th>
                    <th className="px-3 py-2">Khuyến nghị</th>
                    <th className="px-3 py-2">Ghi chú</th>
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

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Gợi ý theo ngành
            </h2>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Ngành</th>
                    <th className="px-3 py-2">Nhu cầu</th>
                    <th className="px-3 py-2">Gợi ý</th>
                  </tr>
                </thead>
                <tbody>
                  {INDUSTRY_CASES.map((row) => (
                    <tr key={row.industry} className="border-t border-border/60">
                      <td className="px-3 py-2 font-medium text-foreground">
                        {row.industry}
                      </td>
                      <td className="px-3 py-2">{row.need}</td>
                      <td className="px-3 py-2">{row.recommend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Checklist trước khi đặt hàng
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                <li>• Xác định tải trọng thực và số điểm đai trên mỗi kiện.</li>
                <li>• Kiểm tra điều kiện vận chuyển: nội địa, xuất khẩu, rung lắc.</li>
                <li>• Đánh giá loại khóa đai và dụng cụ đang dùng tại kho.</li>
                <li>• Test mẫu trong ca thực tế trước khi nhập số lượng lớn.</li>
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Trang chi tiết từng quy cách
              </h2>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <Link href="/day-dai-thep-16mm" className="text-primary hover:underline">
                  Dây đai thép 16mm
                </Link>
                <Link href="/day-dai-thep-19mm" className="text-primary hover:underline">
                  Dây đai thép 19mm
                </Link>
                <Link href="/day-dai-thep-32mm" className="text-primary hover:underline">
                  Dây đai thép 32mm
                </Link>
                <Link href="/bao-gia-day-dai-thep" className="text-primary hover:underline">
                  Bảng giá dây đai & khóa đai
                </Link>
              </div>
              <PhoneCtaButton className="mt-4 px-4 py-2">
                Gọi tư vấn chọn quy cách
              </PhoneCtaButton>
            </div>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-lg font-semibold text-foreground">FAQ</h2>
            <div className="mt-4 space-y-4">
              {guideFaq.map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-semibold text-foreground">{item.q}</h3>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <SeoRelatedLinks excludeHref={PAGE_PATH} />
        </article>
      </MarketingPageLayout>
    </>
  );
}
