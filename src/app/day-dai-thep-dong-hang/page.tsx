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
import { SPEC_ROWS } from "@/data/steel-strapping-guide";
import { buildOfferCatalogItem } from "@/lib/merchant-offer-schema";

const PAGE_PATH = "/day-dai-thep-dong-hang";
const PAGE_TITLE = "Dây đai thép đóng hàng, buộc hàng & đóng kiện | chọn đúng quy cách";
const PAGE_DESCRIPTION =
  "Dây đai thép đóng hàng, buộc hàng, đóng kiện cho pallet, cuộn thép, bó thép hộp, kiện máy móc và hàng xuất container. Bảng chọn bản 16–32mm theo loại hàng, giao toàn quốc.";

const CARGO_ROWS = [
  {
    cargo: "Pallet gỗ, thùng carton nặng",
    width: "16mm – 19mm",
    surface: "Dây dầu (kho khô) / mạ kẽm",
    note: "2–3 vòng theo chiều dài pallet; chèn góc bìa nếu carton mềm.",
    href: "/day-dai-thep-dong-pallet",
  },
  {
    cargo: "Bó thép hộp, thép ống, thép hình",
    width: "19mm – 32mm",
    surface: "Dây dầu / sơn tĩnh điện",
    note: "Đai theo khoảng cách đều dọc bó; bọ kín để chống tuột khi cẩu.",
    href: "/day-dai-thep-19mm",
  },
  {
    cargo: "Cuộn thép, cuộn tôn",
    width: "32mm",
    surface: "Sơn tĩnh điện / mạ kẽm",
    note: "Đai xuyên tâm và đai vòng ngoài; dùng dụng cụ siết 32mm.",
    href: "/day-dai-thep-32mm",
  },
  {
    cargo: "Gạch, đá, vật liệu xây dựng",
    width: "19mm",
    surface: "Dây dầu / mạ kẽm",
    note: "Kiện nặng, cạnh sắc: siết đủ lực, kiểm tra lại sau lần nâng hạ đầu.",
    href: "/day-dai-thep-19mm",
  },
  {
    cargo: "Kiện máy móc, thiết bị đóng thùng gỗ",
    width: "19mm – 25mm",
    surface: "Mạ kẽm / sơn tĩnh điện",
    note: "Cố định thùng gỗ vào pallet đế; tránh siết đè lên điểm yếu của thùng.",
    href: "/day-dai-thep-16mm-19mm-32mm",
  },
  {
    cargo: "Hàng xuất container, đường biển",
    width: "19mm – 32mm",
    surface: "Mạ kẽm / sơn tĩnh điện",
    note: "Ưu tiên bề mặt chống ẩm; kết hợp neo chèn nếu container không kín hàng.",
    href: "/day-dai-thep-ma-kem",
  },
] as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "dây đai thép đóng hàng",
    "dây đai thép buộc hàng",
    "dây đai thép đóng kiện",
    "dây đai thép kiện hàng",
    "dây đai thép đóng gói",
    "đai thép đóng hàng",
    "đai thép đóng kiện",
    "dây đai sắt đóng hàng",
    "day dai thep dong hang",
  ],
  alternates: {
    canonical: `${siteConfig.url}${PAGE_PATH}`,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${siteConfig.url}${PAGE_PATH}`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/images/lo-day-dai-thep-giao-cho-khach-hang.jpg`,
        width: 1200,
        height: 630,
        alt: "Dây đai thép đóng hàng, đóng kiện",
      },
    ],
  },
};

export default function SteelStrappingCargoPage() {
  const faq = [
    {
      q: "Dây đai thép đóng hàng nên dùng loại nào?",
      a: "Hàng vừa và pallet ổn định dùng bản 16mm; pallet thép, vật liệu xây dựng, bó thép hộp dùng 19mm; kiện nặng xuất khẩu dùng 25mm; cuộn thép và cấu kiện siêu nặng dùng 32mm. Kho khô chọn dây dầu để tối ưu giá, hàng đi xa hoặc môi trường ẩm chọn mạ kẽm hay sơn tĩnh điện.",
    },
    {
      q: "Buộc hàng bằng dây đai thép có cần dụng cụ chuyên dụng không?",
      a: "Có. Cần kìm siết để căng dây và kìm bấm để bấm bọ (khóa đai) đúng bản dây. Dụng cụ phải khớp bản rộng 16/19/32mm thì mối bấm mới giữ được lực.",
    },
    {
      q: "Dây đai sắt và dây đai thép đóng hàng có khác nhau không?",
      a: "Không. “Dây đai sắt” là cách gọi phổ biến của cùng sản phẩm dây đai thép cán nguội dùng để đóng kiện, buộc hàng.",
    },
    {
      q: "Đóng kiện hàng xuất khẩu nên dùng dây đai thép hay dây đai nhựa?",
      a: "Hàng nặng, cạnh sắc, kim loại hoặc cần chịu lực cẩu nên dùng dây đai thép. Hàng nhẹ, carton, hàng dễ trầy bề mặt có thể dùng dây đai nhựa PET/PP để tiết kiệm chi phí.",
    },
    {
      q: "Một kiện hàng cần bao nhiêu mét dây đai thép?",
      a: "Lấy chu vi vòng đai nhân số vòng, cộng khoảng 15–20cm mỗi vòng cho đoạn chồng mí và bấm bọ. Ví dụ pallet 1,2 × 1m cao 1m, đai 3 vòng dọc ≈ 3 × (2 × (1,2 + 1) + 0,2) ≈ 13,8m.",
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
        name: "Đóng hàng, đóng kiện",
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
    name: "Dây đai thép đóng hàng",
    itemListElement: SPEC_ROWS.map((row) =>
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
              { label: "Đóng hàng, đóng kiện" },
            ]}
          />

          <header>
            <h1 className="text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Dây đai thép đóng hàng, buộc hàng và đóng kiện
            </h1>
            <p className="mt-3 max-w-[70ch] text-sm leading-7 text-muted-foreground sm:text-base">
              Dây đai thép (còn gọi là dây đai sắt) giữ kiện hàng nặng không xô
              lệch khi nâng hạ bằng xe nâng, cẩu và vận chuyển đường dài. Bảng
              dưới giúp chọn bản dây và loại bề mặt theo từng loại hàng: pallet,
              bó thép hộp, cuộn tôn, vật liệu xây dựng, kiện máy móc và hàng xuất
              container.
            </p>
          </header>

          <SeoPageGallery
            variant="editorial"
            hero={{
              src: "/images/lo-day-dai-thep-giao-cho-khach-hang.jpg",
              alt: "Lô dây đai thép đóng hàng giao cho khách",
              caption: "Dây đai thép giao tận kho, sẵn sàng đóng kiện",
            }}
            gallery={[
              {
                src: "/images/xuat-hang-3.jpg",
                alt: "Kiện hàng buộc dây đai thép chuẩn bị xuất kho",
              },
              {
                src: "/images/day-dai-thep-tai-kho-khach-hang.jpg",
                alt: "Cuộn dây đai thép tại kho khách hàng dùng đóng kiện",
              },
            ]}
          />

          <QuickQuoteForm
            sourcePage={PAGE_PATH}
            title="Gửi loại hàng cần đóng, nhận tư vấn quy cách và báo giá"
          />

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Chọn dây đai thép theo loại hàng cần đóng
            </h2>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Loại hàng</th>
                    <th className="px-3 py-2">Bản dây</th>
                    <th className="px-3 py-2">Bề mặt</th>
                    <th className="px-3 py-2">Lưu ý khi đóng</th>
                  </tr>
                </thead>
                <tbody>
                  {CARGO_ROWS.map((row) => (
                    <tr key={row.cargo} className="border-t border-border/60">
                      <td className="px-3 py-2 font-medium text-foreground">
                        <Link href={row.href} className="text-primary hover:underline">
                          {row.cargo}
                        </Link>
                      </td>
                      <td className="px-3 py-2">{row.width}</td>
                      <td className="px-3 py-2">{row.surface}</td>
                      <td className="px-3 py-2">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Thông số dây đai thép đóng kiện theo bản rộng
            </h2>
            <div className="responsive-table-wrap mt-4">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-muted/60 text-foreground">
                  <tr>
                    <th className="px-3 py-2">Bản dây</th>
                    <th className="px-3 py-2">Độ dày (mm)</th>
                    <th className="px-3 py-2">Chịu lực (N)</th>
                    <th className="px-3 py-2">m/kg</th>
                    <th className="px-3 py-2">Tải tham khảo</th>
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
                      <td className="px-3 py-2">{row.thicknessMm}</td>
                      <td className="px-3 py-2">{row.breakLoadN}</td>
                      <td className="px-3 py-2">{row.metersPerKg}</td>
                      <td className="px-3 py-2">{row.loadHint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Giá bán theo kg, xem chi tiết tại{" "}
              <Link href="/bao-gia-day-dai-thep" className="text-primary hover:underline">
                bảng giá dây đai thép
              </Link>
              .
            </p>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Quy trình buộc hàng bằng dây đai thép
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
              <li>Xếp hàng gọn, cân tâm; chèn góc bảo vệ ở cạnh sắc hoặc carton mềm.</li>
              <li>Luồn dây quanh kiện, chồng mí hai đầu dây và lồng bọ (khóa đai) đúng bản.</li>
              <li>Dùng kìm siết căng dây đến khi dây ôm sát, không còn võng giữa nhịp.</li>
              <li>Bấm bọ bằng kìm bấm cùng bản dây, cắt phần dây thừa gọn.</li>
              <li>Kiểm tra lại các vòng đai sau lần nâng hạ thử trước khi xuất kho.</li>
            </ol>
            <p className="mt-3 text-sm text-muted-foreground">
              Xem chi tiết{" "}
              <Link
                href="/tu-van/quy-trinh-dong-day-dai-thep-5-buoc-chuan-ky-thuat"
                className="text-primary hover:underline"
              >
                quy trình đóng dây đai thép 5 bước
              </Link>{" "}
              và{" "}
              <Link
                href="/tu-van/loi-thuong-gap-khi-dong-dai-thep-va-cach-khac-phuc"
                className="text-primary hover:underline"
              >
                lỗi thường gặp khi đóng đai
              </Link>
              .
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Dây đai thép hay dây đai nhựa?
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Dây đai thép cho kiện nặng, kim loại, cạnh sắc và hàng cần cẩu;
                dây đai nhựa PET/PP cho hàng nhẹ và carton. Đọc{" "}
                <Link
                  href="/tu-van/so-sanh-day-dai-thep-va-day-dai-nhua"
                  className="text-primary hover:underline"
                >
                  so sánh dây đai thép và dây đai nhựa
                </Link>
                .
              </p>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Đủ bộ vật tư đóng hàng
              </h2>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <Link href="/day-dai-thep" className="text-primary hover:underline">
                  Dây đai thép các loại
                </Link>
                <Link href="/khoa-dai-thep" className="text-primary hover:underline">
                  Khóa đai thép (bọ sắt)
                </Link>
                <Link href="/bo-dung-cu-dong-dai-thep" className="text-primary hover:underline">
                  Bộ dụng cụ đóng đai thép
                </Link>
              </div>
              <PhoneCtaButton className="mt-4 px-4 py-2">
                Gọi tư vấn đóng hàng
              </PhoneCtaButton>
            </div>
          </section>

          <section className="surface-card p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Câu hỏi thường gặp về dây đai thép đóng hàng
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

          <SeoRelatedLinks excludeHref={PAGE_PATH} />
        </article>
      </MarketingPageLayout>
    </>
  );
}
