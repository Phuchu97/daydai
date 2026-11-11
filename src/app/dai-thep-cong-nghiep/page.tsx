import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCtaButton } from "@/components/contact/PhoneCtaButton";
import { TrustFacts } from "@/components/marketing/TrustFacts";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { SeoPageGallery } from "@/components/seo/SeoPageGallery";
import { SeoRelatedLinks } from "@/components/seo/SeoRelatedLinks";
import { SteelStrappingPriceTiers } from "@/components/seo/SteelStrappingPriceTiers";
import {
  STEEL_STRAPPING_PRICE_PER_KG,
  STEEL_STRAPPING_TIER_SUMMARY,
} from "@/config/pricing";
import { siteConfig } from "@/config/site";
import {
  PAIRING_ROWS,
  SPEC_ROWS,
  STRAP_PRICE_RANGE_LABEL,
} from "@/data/steel-strapping-guide";
import { buildOfferCatalogItem } from "@/lib/merchant-offer-schema";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export const metadata: Metadata = {
  title: "Đai thép công nghiệp cho pallet, hàng nặng",
  description:
    "Giải pháp đai thép công nghiệp cho nhà máy, xưởng sản xuất, logistics: chọn bản dây, khóa đai và bộ dụng cụ đúng kỹ thuật để đảm bảo an toàn vận chuyển.",
  keywords: [
    "đai thép công nghiệp",
    "đai thép",
    "đai thép là gì",
    "đai thép đóng kiện",
    "đai thép đóng hàng",
    "dây thép đóng pallet",
    "dây đai thép chịu lực",
  ],
  alternates: {
    canonical: `${siteConfig.url}/dai-thep-cong-nghiep`,
  },
  openGraph: {
    title: "Đai thép công nghiệp cho pallet, hàng nặng",
    description:
      "Tư vấn chọn đai thép công nghiệp theo tải trọng và điều kiện vận chuyển, đồng bộ dây đai - khóa đai - dụng cụ.",
    url: `${siteConfig.url}/dai-thep-cong-nghiep`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Đai thép công nghiệp cho pallet",
      },
    ],
  },
};

const PAGE_PATH = "/dai-thep-cong-nghiep";

const USE_CASES = [
  { label: "Pallet gỗ, pallet thép, thùng carton nặng", href: "/day-dai-thep-dong-pallet" },
  { label: "Bó thép hộp, thép ống, thép hình", href: "/day-dai-thep-dong-hang" },
  { label: "Cuộn thép, cuộn tôn, cấu kiện siêu nặng", href: "/day-dai-thep-32mm" },
  { label: "Gạch, đá, vật liệu xây dựng", href: "/day-dai-thep-19mm" },
  { label: "Kiện máy móc, thùng gỗ xuất container", href: "/day-dai-thep-25mm" },
] as const;

const FAQ = [
  {
    q: "Đai thép là gì?",
    a: "Đai thép (dây đai thép, dây đai sắt) là băng thép cán nguội bản dẹt rộng 16–32mm, dày khoảng 0.5–1.2mm, dùng để siết và cố định kiện hàng, pallet, cuộn thép khi lưu kho và vận chuyển. Dây được khóa bằng bọ sắt và siết bằng kìm hoặc máy đóng đai.",
  },
  {
    q: "Đai thép đóng hàng có giống thép đai xây dựng không?",
    a: "Không. Thép đai (cốt đai) trong xây dựng là thép tròn phi 6–8 uốn quanh cốt thép dầm, cột. Đai thép đóng hàng là băng thép dẹt dùng để buộc kiện hàng.",
  },
  {
    q: "Đai thép chịu lực bao nhiêu?",
    a: `Tham khảo theo bản rộng: ${SPEC_ROWS.map((row) => `${row.widthMm}mm khoảng ${row.breakLoadN}N`).join(", ")}. Lực thực tế phụ thuộc độ dày và mối khóa.`,
  },
  {
    q: "Giá đai thép bao nhiêu?",
    a: `${STRAP_PRICE_RANGE_LABEL} tùy số lượng: ${STEEL_STRAPPING_TIER_SUMMARY}. Áp dụng chung cho đai dầu, mạ kẽm và sơn tĩnh điện.`,
  },
  {
    q: "Nên chọn đai thép đen (dầu), mạ kẽm hay sơn tĩnh điện?",
    a: "Cùng giá, nên chọn theo môi trường: kho khô nội địa dùng đai dầu (đai thép đen); kho ẩm, bãi ngoài trời hoặc xuất khẩu ưu tiên mạ kẽm hoặc sơn tĩnh điện để chống gỉ.",
  },
];

export default function IndustrialSteelStrapPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
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
        name: "Đai thép công nghiệp",
        item: `${siteConfig.url}/dai-thep-cong-nghiep`,
      },
    ],
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Giải pháp đai thép công nghiệp cho hàng nặng",
    provider: {
      "@type": "Organization",
      name: siteConfig.company.legalName,
      telephone: siteConfig.company.phone,
    },
    areaServed: ["VN"],
  };
  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Giải pháp đai thép công nghiệp",
    itemListElement: [
      "Đai thép cho pallet thép và gỗ",
      "Đai thép cho cuộn thép và kết cấu nặng",
      "Đai thép cho tuyến vận chuyển rung lắc cao",
    ].map((name) =>
      buildOfferCatalogItem(name, STEEL_STRAPPING_PRICE_PER_KG, {
        url: `${siteConfig.url}/day-dai-thep`,
        unitText: "kg",
      }),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
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
              { label: "Đai thép công nghiệp" },
            ]}
          />

          <header>
            <h1 className="text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Đai thép công nghiệp: dây đai thép chịu lực cho pallet và hàng nặng
            </h1>
            <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
              Đai thép (dây đai thép, dây đai sắt) là băng thép cán nguội bản dẹt
              16–32mm dùng để siết chặt kiện hàng nặng, pallet và cuộn thép. So
              với dây đai nhựa, đai thép gần như không giãn sau khi siết, chịu
              được cạnh sắc và lực cẩu. Cần dùng đồng bộ dây, bọ sắt và dụng cụ
              đúng bản rộng để mối đai giữ lực.
            </p>
          </header>

          <SeoPageGallery
            variant="editorial"
            hero={{
              src: "/images/nha-may-dong-dai-3.webp",
              alt: "Đai thép công nghiệp tại nhà máy đóng gói",
              caption: "Đai thép công nghiệp cho pallet và hàng siêu nặng",
            }}
            gallery={[
              {
                src: "/images/day-dai-thep-32mm.jpg",
                alt: "Dây đai thép công nghiệp bản rộng chịu lực cao",
              },
              {
                src: "/images/nha-may-dong-dai-2.jpg",
                alt: "Dây chuyền đóng đai thép công nghiệp",
              },
            ]}
          />

          <QuickQuoteForm
            sourcePage={PAGE_PATH}
            className="mt-8"
            title="Nhận tư vấn đai thép công nghiệp"
          />

          <section className="surface-card p-6">
            <h2 className="text-lg font-semibold text-foreground">
              So sánh nhu cầu theo ngành
            </h2>
            <div className="responsive-table-wrap mt-3">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Ngành</th>
                    <th className="px-3 py-2">Đặc thù vận hành</th>
                    <th className="px-3 py-2">Ưu tiên kỹ thuật</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2">Thép, cơ khí</td>
                    <td className="px-3 py-2">Tải cao, kiện sắc cạnh</td>
                    <td className="px-3 py-2">Bản dây lớn + khóa kín</td>
                  </tr>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2">Logistics</td>
                    <td className="px-3 py-2">Rung lắc và bốc xếp liên tục</td>
                    <td className="px-3 py-2">Ổn định mối khóa và số điểm đai</td>
                  </tr>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2">Vật liệu xây dựng</td>
                    <td className="px-3 py-2">Kiện cồng kềnh, ngoài trời</td>
                    <td className="px-3 py-2">Bề mặt dây phù hợp môi trường</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Thông số đai thép công nghiệp theo bản rộng
            </h2>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Bản rộng</th>
                    <th className="px-3 py-2">Độ dày (mm)</th>
                    <th className="px-3 py-2">Chịu lực (N)</th>
                    <th className="px-3 py-2">m/kg</th>
                    <th className="px-3 py-2">Phù hợp</th>
                  </tr>
                </thead>
                <tbody>
                  {SPEC_ROWS.map((row) => (
                    <tr key={row.widthMm} className="border-t border-border/60">
                      <td className="px-3 py-2 font-medium text-foreground">
                        <Link href={row.href} className="text-primary hover:underline">
                          Đai thép {row.widthMm}mm
                        </Link>
                      </td>
                      <td className="px-3 py-2">{row.thicknessMm}</td>
                      <td className="px-3 py-2">{row.breakLoadN}</td>
                      <td className="px-3 py-2">{row.metersPerKg}</td>
                      <td className="px-3 py-2">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Đai thép dùng để làm gì?
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
              {USE_CASES.map((item) => (
                <li key={item.href}>
                  •{" "}
                  <Link href={item.href} className="text-primary hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Đai thép đi kèm bọ sắt và dụng cụ nào?
            </h2>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Đai thép</th>
                    <th className="px-3 py-2">Bọ sắt khớp</th>
                    <th className="px-3 py-2">Lưu ý</th>
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
            <p className="mt-3 text-sm text-muted-foreground">
              Xem{" "}
              <Link href="/bo-sat" className="text-primary hover:underline">
                bọ sắt đóng đai
              </Link>{" "}
              và{" "}
              <Link href="/bo-dung-cu-dong-dai-thep" className="text-primary hover:underline">
                bộ dụng cụ đóng đai thép
              </Link>
              .
            </p>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Giá đai thép theo số lượng
            </h2>
            <SteelStrappingPriceTiers />
            <PhoneCtaButton className="mt-4 px-4 py-2">
              Gọi báo giá đai thép
            </PhoneCtaButton>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Câu hỏi thường gặp về đai thép
            </h2>
            <div className="mt-4 space-y-4">
              {FAQ.map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-semibold text-foreground">{item.q}</h3>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Cụm trang chuyên sâu liên quan
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/san-pham" className="font-medium text-primary">
                  Danh mục dây đai thép và dụng cụ
                </Link>
              </li>
              <li>
                <Link href="/bo-dung-cu-dong-dai-thep" className="font-medium text-primary">
                  Chọn bộ dụng cụ đóng đai thép
                </Link>
              </li>
              <li>
                <Link href="/tu-van" className="font-medium text-primary">
                  Bài tư vấn kỹ thuật cho kho và nhà máy
                </Link>
              </li>
            </ul>
          </section>

          <TrustFacts embedded />

          <SeoRelatedLinks excludeHref={PAGE_PATH} />
        </article>
      </MarketingPageLayout>
    </>
  );
}
