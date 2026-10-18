import Image from "next/image";
import Link from "next/link";
import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { SteelStrappingPriceTiers } from "@/components/seo/SteelStrappingPriceTiers";
import {
  PAIRING_ROWS,
  SIZE_GUIDES,
  STRAP_PRICE_ROWS,
  type SizeGuide,
} from "@/data/steel-strapping-guide";

export function SizeGuideBody({ guide }: { guide: SizeGuide }) {
  const priceRows = STRAP_PRICE_ROWS.filter((row) => row.widthMm === guide.widthMm);
  const pairing = PAIRING_ROWS.find((row) => row.strapWidthMm === guide.widthMm);
  const otherSizes = SIZE_GUIDES.filter((item) => item.slug !== guide.slug);

  return (
    <>
      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
          <div className="max-w-[68ch]">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Thông số dây đai thép {guide.widthMm}mm
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {guide.intro} Độ dày thường {guide.thicknessMm}mm, chịu lực khoảng{" "}
              {guide.breakLoadN}N, tương đương {guide.metersPerKg} m/kg. Tải tham
              khảo {guide.loadHint} — chưa gồm hệ số an toàn khi phanh gấp hay
              nhiều lần nâng hạ.
            </p>
            <div className="responsive-table-wrap mt-6">
              <table className="min-w-full text-left text-sm">
                <tbody>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2 font-medium text-foreground">Bản rộng</td>
                    <td className="px-3 py-2">{guide.widthMm}mm</td>
                  </tr>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2 font-medium text-foreground">Độ dày</td>
                    <td className="px-3 py-2">{guide.thicknessMm}mm</td>
                  </tr>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2 font-medium text-foreground">Chịu lực</td>
                    <td className="px-3 py-2">{guide.breakLoadN} N</td>
                  </tr>
                  <tr className="border-t border-border/60">
                    <td className="px-3 py-2 font-medium text-foreground">Chiều dài / kg</td>
                    <td className="px-3 py-2">{guide.metersPerKg} m/kg</td>
                  </tr>
                  {pairing ? (
                    <tr className="border-t border-border/60">
                      <td className="px-3 py-2 font-medium text-foreground">Bọ khớp</td>
                      <td className="px-3 py-2">{pairing.sealWidthLabel}</td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={guide.heroImage.src}
              alt={guide.heroImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </figure>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Ứng dụng dây {guide.widthMm}mm
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
              {guide.useCases.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Nên chọn {guide.widthMm}mm khi
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
              {guide.whenToChoose.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {guide.whenToUpgrade}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Giá dây đai thép {guide.widthMm}mm theo số lượng
          </h2>
          <p className="mt-2 max-w-[65ch] text-sm leading-7 text-muted-foreground">
            Dưới 1 tấn{" "}
            <strong className="font-semibold text-foreground">
              {STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg
            </strong>
            , giảm dần theo tổng số kg mỗi đơn. Cùng giá cho mọi bản rộng và bề
            mặt.
          </p>
          <SteelStrappingPriceTiers className="responsive-table-wrap mt-6" />
          <h3 className="mt-8 text-base font-semibold text-foreground">
            Quy cách tham khảo
          </h3>
          <div className="responsive-table-wrap mt-6">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-muted/60 text-foreground">
                <tr>
                  <th className="px-3 py-2">Loại bề mặt</th>
                  <th className="px-3 py-2">Độ dày</th>
                  <th className="px-3 py-2">Phù hợp</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row) => (
                  <tr key={row.surface} className="border-t border-border/60">
                    <td className="px-3 py-2 font-medium text-foreground">
                      {row.surfaceLabel}
                    </td>
                    <td className="px-3 py-2">{row.thicknessMm}mm</td>
                    <td className="px-3 py-2">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link
            href="/bao-gia-day-dai-thep"
            className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            Xem bảng giá đầy đủ tất cả khổ
          </Link>
        </div>
      </section>

      {pairing ? (
        <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
          <div className="site-container grid items-center gap-8 md:grid-cols-2">
            <figure className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-background">
              <Image
                src="/images/bo-thep-kin.jpg"
                alt={`Khóa đai thép khớp dây ${guide.widthMm}mm`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
            <div>
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Khóa đai khớp bản {guide.widthMm}mm
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Dây {guide.widthMm}mm dùng {pairing.sealWidthLabel.toLowerCase()}.{" "}
                {pairing.note}. Kìm siết và kìm bấm bọ phải cùng khổ — lệch size
                dễ tuột mối dù dây đạt chuẩn.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                <Link href="/khoa-dai-thep" className="text-primary hover:underline">
                  Chọn khóa đai / bọ sắt
                </Link>
                <Link
                  href="/bo-dung-cu-dong-dai-thep"
                  className="text-primary hover:underline"
                >
                  Bộ kìm siết và kìm bấm
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            So sánh với khổ khác
          </h2>
          <p className="mt-2 max-w-[65ch] text-sm leading-7 text-muted-foreground">
            Không chắc {guide.widthMm}mm có đủ lực? Xem nhanh hai quy cách còn lại
            hoặc trang so sánh đầy đủ 16 · 19 · 32mm.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {otherSizes.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="rounded-[1.35rem] border border-border/80 bg-muted/20 p-5 transition hover:border-primary/35"
              >
                <p className="font-display text-2xl font-semibold tabular-nums text-foreground">
                  {item.widthMm}
                  <span className="ml-0.5 text-base font-medium text-muted-foreground">
                    mm
                  </span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{item.loadHint}</p>
                <span className="mt-3 inline-flex text-sm font-semibold text-primary">
                  Xem {item.name.toLowerCase()}
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/day-dai-thep-16mm-19mm-32mm"
            className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            So sánh chi tiết cả 3 quy cách
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container max-w-[68ch]">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Giao dây đai thép {guide.widthMm}mm tại Hà Nội
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {siteConfig.name} ưu tiên giao Hà Nội và các KCN miền Bắc trong 24-48
            giờ khi hàng sẵn kho, đồng thời gửi chành xe toàn quốc. Gửi ảnh pallet
            qua Zalo {siteConfig.company.phone} để chốt độ dày và loại bề mặt
            trước khi đặt lô {guide.widthMm}mm.
          </p>
        </div>
      </section>
    </>
  );
}
