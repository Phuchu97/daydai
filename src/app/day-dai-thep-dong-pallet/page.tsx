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
import { LOAD_GUIDE_ROWS, SPEC_ROWS } from "@/data/steel-strapping-guide";
import { buildOfferCatalogItem } from "@/lib/merchant-offer-schema";

const PAGE_PATH = "/day-dai-thep-dong-pallet";

export const metadata: Metadata = {
  title: "Dây đai thép đóng pallet | chọn 16mm 19mm 32mm đúng tải",
  description:
    "Hướng dẫn dùng dây đai thép đóng pallet: chọn bản dây theo tải, số vòng đai, khóa bọ kín và checklist trước khi xuất kho / lên container.",
  keywords: [
    "dây đai thép đóng pallet",
    "đóng đai pallet thép",
    "đai thép pallet",
    "cách đóng đai pallet",
    "day dai thep dong pallet",
  ],
  alternates: {
    canonical: `${siteConfig.url}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Dây đai thép đóng pallet | chọn 16mm 19mm 32mm đúng tải",
    description:
      "Quy trình chọn quy cách và bố trí vòng đai cho pallet hàng nặng, xuất khẩu.",
    url: `${siteConfig.url}${PAGE_PATH}`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Dây đai thép đóng pallet",
      },
    ],
  },
};

export default function PalletStrappingPage() {
  const faq = [
    {
      q: "Pallet bao nhiêu kg thì dùng dây 16mm?",
      a: "Thường dưới khoảng 500–800kg và hình khối ổn định. Nếu tuyến xa hoặc nhiều lần nâng hạ, cân nhắc 19mm.",
    },
    {
      q: "Nên đai mấy vòng trên một pallet?",
      a: "Tối thiểu 2–3 vòng theo hướng chịu lực chính; hàng nặng hoặc cao thường cần thêm vòng ngang/dọc. Test mẫu trước khi chuẩn hóa.",
    },
    {
      q: "Đóng pallet xuất khẩu nên dùng loại dây nào?",
      a: "Ưu tiên mạ kẽm hoặc sơn tĩnh điện để chống ẩm trên tuyến dài; bản 19mm hoặc 32mm tùy tải.",
    },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${siteConfig.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dây đai thép",
        item: `${siteConfig.url}/day-dai-thep`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Đóng pallet",
        item: `${siteConfig.url}${PAGE_PATH}`,
      },
    ],
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
  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Dây đai thép đóng pallet",
    itemListElement: SPEC_ROWS.filter((row) => [16, 19, 32].includes(row.widthMm)).map(
      (row) =>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              { label: "Đóng pallet" },
            ]}
          />

          <header>
            <h1 className="text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Dây đai thép đóng pallet: chọn quy cách và bố trí vòng đai đúng
            </h1>
            <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
              Đóng pallet bằng dây đai thép giúp kiện hàng giữ ổn định khi nâng
              hạ forklift và vận chuyển đường dài. Trang này hướng dẫn chọn bản
              dây theo tải, số vòng đai và checklist trước khi xuất kho. Nếu
              cần đóng bó thép, cuộn tôn hay kiện máy móc, xem{" "}
              <Link href="/day-dai-thep-dong-hang" className="text-primary hover:underline">
                dây đai thép đóng hàng theo từng loại kiện
              </Link>
              .
            </p>
          </header>

          <SeoPageGallery
            variant="editorial"
            hero={{
              src: "/images/xuat-hang-1.jpg",
              alt: "Pallet dây đai thép đóng kiện sẵn sàng xuất kho",
              caption: "Đóng pallet chắc trước khi lên xe / container",
            }}
            gallery={[
              {
                src: "/images/xuat-hang-2.jpg",
                alt: "Cuộn dây đai thép cố định trong thùng xe",
              },
              {
                src: "/images/day-dai-thep-tai-kho-khach-hang.jpg",
                alt: "Dây đai thép tại kho sẵn sàng đóng pallet",
              },
            ]}
          />

          <QuickQuoteForm
            sourcePage={PAGE_PATH}
            title="Nhận tư vấn đóng đai pallet theo tải trọng"
          />

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Chọn bản dây theo tải pallet
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
              Quy trình đóng đai pallet gọn tại kho
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
              <li>Xếp hàng cân, không vượt mép pallet; chèn góc nếu cạnh sắc.</li>
              <li>Chọn bản dây + bọ khớp quy cách (16 / 19 / 32mm).</li>
              <li>Siết đai theo hướng chịu lực chính; kiểm tra độ võng giữa span.</li>
              <li>Bấm bọ chắc, để đuôi dây đủ dài; kiểm tra lại sau lần nâng hạ thử.</li>
              <li>Với container: bổ sung neo pallet nếu lô hàng không lấp kín.</li>
            </ol>
            <p className="mt-3 text-sm text-muted-foreground">
              Xem thêm bài{" "}
              <Link
                href="/tu-van/cach-bo-tri-vong-dai-thep-cho-pallet-va-container"
                className="text-primary hover:underline"
              >
                bố trí vòng đai cho pallet và container
              </Link>
              .
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Nên dùng loại bề mặt nào?
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                <li>
                  • Kho nội địa khô:{" "}
                  <Link href="/day-dai-thep-dau" className="text-primary hover:underline">
                    dây dầu
                  </Link>{" "}
                  để tối ưu giá
                </li>
                <li>
                  • Xuất khẩu / ẩm:{" "}
                  <Link href="/day-dai-thep-ma-kem" className="text-primary hover:underline">
                    mạ kẽm
                  </Link>{" "}
                  hoặc{" "}
                  <Link
                    href="/day-dai-thep-son-tinh-dien"
                    className="text-primary hover:underline"
                  >
                    sơn tĩnh điện
                  </Link>
                </li>
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Trang quy cách liên quan
              </h2>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <Link href="/day-dai-thep-16mm" className="text-primary hover:underline">
                  Dây 16mm
                </Link>
                <Link href="/day-dai-thep-19mm" className="text-primary hover:underline">
                  Dây 19mm
                </Link>
                <Link href="/day-dai-thep-32mm" className="text-primary hover:underline">
                  Dây 32mm
                </Link>
                <Link href="/khoa-dai-thep" className="text-primary hover:underline">
                  Khóa đai thép
                </Link>
              </div>
              <PhoneCtaButton className="mt-4 px-4 py-2">
                Gọi tư vấn đóng pallet
              </PhoneCtaButton>
            </div>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-lg font-semibold text-foreground">FAQ</h2>
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

          <SeoRelatedLinks excludeHref={PAGE_PATH} />
        </article>
      </MarketingPageLayout>
    </>
  );
}
