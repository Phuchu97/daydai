import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCtaButton } from "@/components/contact/PhoneCtaButton";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { SeoPageGallery } from "@/components/seo/SeoPageGallery";
import { SeoRelatedLinks } from "@/components/seo/SeoRelatedLinks";
import {
  PRICE_PAGE_LAST_UPDATED,
  STEEL_SEAL_REFERENCE_PRICE_UNIT,
  STEEL_STRAPPING_PRICE_PER_KG,
  STEEL_STRAPPING_TOOLS_SALE_PRICE,
} from "@/config/pricing";
import { siteConfig } from "@/config/site";
import {
  BUYING_CHECKLIST,
  COST_ESTIMATE_ROWS,
  LOAD_GUIDE_ROWS,
  PAIRING_ROWS,
  PRICE_FACTORS,
  SEAL_PRICE_RANGE_LABEL,
  SEAL_PRICE_ROWS,
  SPEC_ROWS,
  STRAP_PRICE_RANGE_LABEL,
  STRAP_PRICE_ROWS,
} from "@/data/steel-strapping-guide";
import { buildOfferCatalogItem } from "@/lib/merchant-offer-schema";
import { formatSeoDate } from "@/lib/seo";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export const metadata: Metadata = {
  title: "Báo giá dây đai thép & khóa đai | cập nhật tháng 7/2026",
  description: `Giá dây đai thép ${STRAP_PRICE_RANGE_LABEL} theo loại dầu/mạ kẽm/sơn 16–32mm. Bảng giá khóa đai ${SEAL_PRICE_RANGE_LABEL}, pairing dây–bọ, ước tính chi phí/pallet. Báo giá trong ngày.`,
  keywords: [
    "báo giá dây đai thép",
    "giá dây đai thép",
    "bảng giá dây đai thép",
    "báo giá khóa đai thép",
    "giá dây đai thép mạ kẽm",
    "giá dây đai thép dầu",
    "giá bọ sắt đóng đai",
    "day dai thep gia re",
  ],
  alternates: {
    canonical: `${siteConfig.url}/bao-gia-day-dai-thep`,
  },
  openGraph: {
    title: "Báo giá dây đai thép & khóa đai | cập nhật tháng 7/2026",
    description: `Giá tham khảo ${STRAP_PRICE_RANGE_LABEL}. Đầy đủ bảng theo loại bề mặt, khổ rộng, độ dày và khóa đai.`,
    url: `${siteConfig.url}/bao-gia-day-dai-thep`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/images/day-dai-thep-chat-luong-cao.jpg`,
        width: 1200,
        height: 630,
        alt: "Báo giá dây đai thép",
      },
    ],
  },
};

const TOC = [
  { href: "#bang-gia-day", label: "Bảng giá dây đai" },
  { href: "#bang-gia-khoa", label: "Bảng giá khóa đai" },
  { href: "#uoc-tinh", label: "Ước tính chi phí/pallet" },
  { href: "#yeu-to-gia", label: "Yếu tố ảnh hưởng giá" },
  { href: "#pairing", label: "Dây–bọ–dụng cụ" },
  { href: "#faq-gia", label: "FAQ" },
] as const;

export default function PricePage() {
  const faq = [
    {
      q: "Giá dây đai thép hiện nay bao nhiêu?",
      a: `Tham khảo khoảng ${STRAP_PRICE_RANGE_LABEL} tùy loại dầu/mạ kẽm/sơn và khổ 16–32mm. Giá website mạ kẽm đang ${STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg; lô lớn thường tốt hơn.`,
    },
    {
      q: "Giá khóa đai thép (bọ sắt) bao nhiêu?",
      a: `Tham khảo ${SEAL_PRICE_RANGE_LABEL} hoặc khoảng 28.000–32.000đ/kg tùy quy cách và hình thức báo giá.`,
    },
    {
      q: "Giá thay đổi theo yếu tố nào?",
      a: "Mác thép đầu vào, loại bề mặt, độ dày, khối lượng đặt hàng, địa điểm giao và chất lượng phôi (đồng đều kích thước).",
    },
    {
      q: "Mua số lượng lớn có chiết khấu không?",
      a: "Có. Đơn theo pallet hoặc theo tháng được ưu tiên đơn giá và lịch giao. Gửi nhu cầu tháng để nhận báo giá lô.",
    },
    {
      q: "Bao lâu nhận được báo giá chính thức?",
      a: "Thường trong ngày làm việc sau khi có đủ quy cách, số lượng và địa điểm giao.",
    },
    {
      q: "Giá trên bảng đã gồm khóa đai và dụng cụ chưa?",
      a: "Chưa. Dây tính theo kg, khóa theo cái/kg, bộ dụng cụ báo riêng. Nên gửi combo dây + bọ + dụng cụ để tối ưu.",
    },
    {
      q: "Có giao Hà Nội và miền Bắc không?",
      a: "Có. Ưu tiên Hà Nội và KCN miền Bắc; toàn quốc qua chành xe theo lịch phù hợp.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  const priceUpdatedLabel = formatSeoDate(PRICE_PAGE_LAST_UPDATED);
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Báo giá dây đai thép và khóa đai thép",
    url: `${siteConfig.url}/bao-gia-day-dai-thep`,
    dateModified: PRICE_PAGE_LAST_UPDATED,
    inLanguage: "vi-VN",
    description: metadata.description,
  };
  const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Bảng giá tham khảo dây đai thép và khóa đai thép",
    itemListElement: [
      ...STRAP_PRICE_ROWS.map((row) =>
        buildOfferCatalogItem(
          `${row.surfaceLabel} ${row.widthMm}mm`,
          STEEL_STRAPPING_PRICE_PER_KG,
          {
            url: `${siteConfig.url}/san-pham/day-dai-thep-chiu-luc-cao`,
            unitText: "kg",
            image: `${siteConfig.url}/images/day-dai-thep-dau.jpg`,
          },
        ),
      ),
      ...SEAL_PRICE_ROWS.map((row, index) => {
        const sealPrices = [1_800, 2_000, 2_600, 3_200];
        return buildOfferCatalogItem(
          `Khóa đai thép ${row.widthMm}mm`,
          sealPrices[index] ?? STEEL_SEAL_REFERENCE_PRICE_UNIT,
          {
            url: `${siteConfig.url}/san-pham/khoa-dai-thep-seals`,
            unitText: "cái",
            image: `${siteConfig.url}/images/bo-thep-kin-2.jpg`,
          },
        );
      }),
      buildOfferCatalogItem(
        "Bộ dụng cụ đóng đai thép",
        STEEL_STRAPPING_TOOLS_SALE_PRICE,
        {
          url: `${siteConfig.url}/san-pham/bo-dung-cu-dong-dai-thep`,
          unitText: "bộ",
          image: `${siteConfig.url}/images/dung-cu-dong-dai-3.jpg`,
        },
      ),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <MarketingPageLayout>
        <article className="space-y-6 sm:space-y-8">
          <BreadcrumbNav
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Báo giá dây đai thép" },
            ]}
          />

          <header>
            <h1 className="text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Báo giá dây đai thép và khóa đai thép mới nhất
            </h1>
            <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
              <strong className="font-semibold text-foreground">
                Giá dây đai thép
              </strong>{" "}
              tham khảo khoảng{" "}
              <strong className="font-semibold text-foreground">
                {STRAP_PRICE_RANGE_LABEL}
              </strong>{" "}
              tùy loại dầu / mạ kẽm / sơn tĩnh điện và khổ 16–32mm.{" "}
              <strong className="font-semibold text-foreground">
                Khóa đai thép
              </strong>{" "}
              khoảng {SEAL_PRICE_RANGE_LABEL}. Trang này giúp dự trù ngân sách
              đóng gói trước khi chốt đơn theo lô.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Cập nhật lần cuối:{" "}
              <time dateTime={PRICE_PAGE_LAST_UPDATED}>{priceUpdatedLabel}</time>
              {" · "}Tháng 7/2026 · Giá có thể thay đổi theo thép đầu vào
            </p>
          </header>

          <SeoPageGallery
            variant="editorial"
            hero={{
              src: "/images/day-dai-thep-chat-luong-cao.jpg",
              alt: "Cuộn dây đai thép sẵn kho để báo giá theo quy cách",
              caption: "Dây đai thép sẵn kho - báo giá theo loại bề mặt và khổ rộng",
            }}
            gallery={[
              {
                src: "/images/bo-thep-kin.jpg",
                alt: "Khóa đai thép bọ kín",
              },
              {
                src: "/images/xuat-hang-1.jpg",
                alt: "Xuất hàng cuộn dây đai thép theo lô",
              },
            ]}
          />

          <nav
            aria-label="Mục lục trang báo giá"
            className="flex flex-wrap gap-2 text-xs sm:text-sm"
          >
            {TOC.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-border/80 bg-muted/40 px-3 py-1.5 font-medium text-foreground hover:border-primary/40 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <section className="surface-card border-primary/20 bg-primary/[0.04] p-5 sm:p-6">
            <p className="text-sm font-semibold text-primary">
              Giá bán website (dây đai thép mạ kẽm)
            </p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">
              {STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg
            </p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Đồng bộ trang sản phẩm và giỏ hàng. Báo giá theo lô (pallet/tháng)
              thường tốt hơn — gửi form bên dưới để nhận đơn giá chính thức trong
              ngày.
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <Link
                href="/san-pham/day-dai-thep-chiu-luc-cao"
                className="font-semibold text-primary hover:underline"
              >
                Xem sản phẩm dây đai thép
              </Link>
              <Link
                href="/day-dai-thep"
                className="font-semibold text-primary hover:underline"
              >
                Hướng dẫn chọn loại dây
              </Link>
            </div>
          </section>

          <QuickQuoteForm sourcePage="/bao-gia-day-dai-thep" />

          <section id="bang-gia-day" className="surface-card scroll-mt-24 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Bảng giá dây đai thép theo loại, khổ rộng và độ dày
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Đầy đủ hơn các trang chỉ liệt kê giá/kg: có độ dày và gợi ý ứng
              dụng. Cập nhật {priceUpdatedLabel}. Chi tiết từng dòng:{" "}
              <Link href="/day-dai-thep-dau" className="text-primary hover:underline">
                đai dầu
              </Link>
              ,{" "}
              <Link href="/day-dai-thep-ma-kem" className="text-primary hover:underline">
                mạ kẽm
              </Link>
              ,{" "}
              <Link
                href="/day-dai-thep-son-tinh-dien"
                className="text-primary hover:underline"
              >
                sơn tĩnh điện
              </Link>
              .
            </p>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Chủng loại</th>
                    <th className="px-3 py-2">Khổ</th>
                    <th className="px-3 py-2">Độ dày</th>
                    <th className="px-3 py-2">Đơn giá tham khảo</th>
                    <th className="px-3 py-2">Phù hợp</th>
                  </tr>
                </thead>
                <tbody>
                  {STRAP_PRICE_ROWS.map((row) => (
                    <tr
                      key={`${row.surface}-${row.widthMm}`}
                      className="border-t border-border/60"
                    >
                      <td className="px-3 py-2">{row.surfaceLabel}</td>
                      <td className="px-3 py-2 font-medium text-foreground">
                        {row.widthMm}mm
                      </td>
                      <td className="px-3 py-2">{row.thicknessMm}mm</td>
                      <td className="px-3 py-2 font-medium text-foreground">
                        {row.priceLabel}
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">
                        {row.bestFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="bang-gia-khoa" className="surface-card scroll-mt-24 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Bảng giá khóa đai thép (bọ sắt)
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Báo theo cái hoặc theo kg tùy lô. Xem thêm{" "}
              <Link href="/khoa-dai-thep" className="text-primary hover:underline">
                trang khóa đai thép
              </Link>
              . Bộ dụng cụ đóng đai tham khảo từ{" "}
              <strong className="text-foreground">
                {STEEL_STRAPPING_TOOLS_SALE_PRICE.toLocaleString("vi-VN")}đ/bộ
              </strong>{" "}
              —{" "}
              <Link
                href="/bo-dung-cu-dong-dai-thep"
                className="text-primary hover:underline"
              >
                chi tiết dụng cụ
              </Link>
              .
            </p>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Sản phẩm</th>
                    <th className="px-3 py-2">Loại</th>
                    <th className="px-3 py-2">Giá / cái</th>
                    <th className="px-3 py-2">Giá / kg</th>
                  </tr>
                </thead>
                <tbody>
                  {SEAL_PRICE_ROWS.map((row) => (
                    <tr key={row.widthMm} className="border-t border-border/60">
                      <td className="px-3 py-2">Khóa đai thép {row.widthMm}mm</td>
                      <td className="px-3 py-2">{row.typeLabel}</td>
                      <td className="px-3 py-2 font-medium text-foreground">
                        {row.pricePerPiece}
                      </td>
                      <td className="px-3 py-2">{row.pricePerKg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="uoc-tinh" className="surface-card scroll-mt-24 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Ước tính chi phí dây đai theo pallet (tham khảo)
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Đối thủ thường chỉ đưa giá/kg. Bảng dưới giúp kho ước lượng tiêu
              hao thực tế trước khi đặt hàng — số kg thay đổi theo chu vi kiện và
              số vòng đai.
            </p>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Tình huống</th>
                    <th className="px-3 py-2">Dây ước tính</th>
                    <th className="px-3 py-2">Khóa đai</th>
                    <th className="px-3 py-2">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_ESTIMATE_ROWS.map((row) => (
                    <tr key={row.scenario} className="border-t border-border/60">
                      <td className="px-3 py-2 font-medium text-foreground">
                        {row.scenario}
                      </td>
                      <td className="px-3 py-2">{row.strapKg}</td>
                      <td className="px-3 py-2">{row.sealQty}</td>
                      <td className="px-3 py-2 text-muted-foreground">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Cần chọn đúng bản dây trước khi tính tiền? Xem{" "}
              <Link
                href="/day-dai-thep-16mm-19mm-32mm"
                className="text-primary hover:underline"
              >
                so sánh 16 / 19 / 32mm
              </Link>{" "}
              hoặc{" "}
              <Link
                href="/day-dai-thep-dong-pallet"
                className="text-primary hover:underline"
              >
                đóng pallet bằng dây đai thép
              </Link>
              .
            </p>
          </section>

          <section id="yeu-to-gia" className="surface-card scroll-mt-24 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              5 yếu tố làm giá dây đai thép thay đổi
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {PRICE_FACTORS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 bg-background/60 p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Chọn quy cách theo tải — rồi mới chốt giá
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Giá thấp nhưng sai quy cách sẽ đắt hơn vì bung hàng / đổi dây.
            </p>
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
            <div className="responsive-table-wrap mt-6">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Bản dây</th>
                    <th className="px-3 py-2">Chịu lực (N)</th>
                    <th className="px-3 py-2">m/kg</th>
                    <th className="px-3 py-2">Tải tham khảo</th>
                  </tr>
                </thead>
                <tbody>
                  {SPEC_ROWS.filter((row) => [16, 19, 32].includes(row.widthMm)).map(
                    (row) => (
                      <tr key={row.widthMm} className="border-t border-border/60">
                        <td className="px-3 py-2 font-medium text-foreground">
                          <Link href={row.href} className="text-primary hover:underline">
                            {row.widthMm}mm
                          </Link>
                        </td>
                        <td className="px-3 py-2">{row.breakLoadN}</td>
                        <td className="px-3 py-2">{row.metersPerKg}</td>
                        <td className="px-3 py-2">{row.loadHint}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section id="pairing" className="surface-card scroll-mt-24 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Dây đai nào đi với bọ sắt và dụng cụ nào?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Khớp đúng khổ giúp mối nối giữ lực khi rung và nâng hạ forklift —
              đây là điểm nhiều trang báo giá bỏ qua.
            </p>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Bản dây</th>
                    <th className="px-3 py-2">Khóa đai khuyến nghị</th>
                    <th className="px-3 py-2">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  {PAIRING_ROWS.map((row) => (
                    <tr key={row.strapWidthMm} className="border-t border-border/60">
                      <td className="px-3 py-2 font-medium text-foreground">
                        {row.strapWidthMm}mm
                      </td>
                      <td className="px-3 py-2">{row.sealWidthLabel}</td>
                      <td className="px-3 py-2">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Checklist mua hàng đúng — giá mới tối ưu
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                {BUYING_CHECKLIST.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Quy trình nhận báo giá trong ngày
              </h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
                <li>Gửi loại dây, khổ, độ dày, số lượng tháng, địa điểm giao.</li>
                <li>Nhận báo giá chính thức + lịch giao Hà Nội / miền Bắc.</li>
                <li>Chốt mẫu (nếu cần) rồi nhập theo lô ổn định.</li>
              </ol>
              <PhoneCtaButton className="mt-4 px-4 py-2">
                Gọi báo giá {siteConfig.company.phone}
              </PhoneCtaButton>
            </div>
          </section>

          <section id="faq-gia" className="surface-card scroll-mt-24 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Câu hỏi thường gặp về giá dây đai thép
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

          <SeoRelatedLinks
            excludeHref="/bao-gia-day-dai-thep"
            extraLinks={[
              { href: "/tu-van", label: "Tư vấn & hướng dẫn kỹ thuật" },
              {
                href: "/tu-van/cach-chon-day-dai-thep-theo-tai-trong",
                label: "Cách chọn dây theo tải trọng",
              },
            ]}
          />
        </article>
      </MarketingPageLayout>
    </>
  );
}
