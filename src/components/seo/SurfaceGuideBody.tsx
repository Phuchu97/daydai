import Image from "next/image";
import Link from "next/link";
import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { SteelStrappingPriceTiers } from "@/components/seo/SteelStrappingPriceTiers";
import {
  PAIRING_ROWS,
  SURFACE_GUIDES,
  pricesForSurface,
  type SurfaceGuide,
} from "@/data/steel-strapping-guide";

export function SurfaceGuideBody({ guide }: { guide: SurfaceGuide }) {
  const priceRows = pricesForSurface(guide.surface);
  const otherSurfaces = SURFACE_GUIDES.filter((item) => item.slug !== guide.slug);

  return (
    <>
      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
          <div className="max-w-[68ch]">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {guide.name} là gì?
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{guide.intro}</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Quy cách phổ biến: {guide.widths.join("mm, ")}mm · Độ dày{" "}
              {guide.thicknessMm}mm · Cuộn {guide.coilWeightKg}. Đi kèm{" "}
              <Link href="/khoa-dai-thep" className="text-primary hover:underline">
                khóa đai (bọ sắt)
              </Link>{" "}
              và{" "}
              <Link
                href="/bo-dung-cu-dong-dai-thep"
                className="text-primary hover:underline"
              >
                bộ kìm siết / bấm bọ
              </Link>{" "}
              đúng khổ.
            </p>
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
              Ưu điểm {guide.name.toLowerCase()}
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
              {guide.pros.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Lưu ý khi dùng
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
              {guide.cons.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Khi nào nên chọn {guide.name.toLowerCase()}?
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
            {guide.bestFor.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Giá {guide.name.toLowerCase()} theo số lượng
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
                  <th className="px-3 py-2">Khổ rộng</th>
                  <th className="px-3 py-2">Độ dày</th>
                  <th className="px-3 py-2">Phù hợp</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row) => (
                  <tr key={row.widthMm} className="border-t border-border/60">
                    <td className="px-3 py-2 font-medium text-foreground">
                      <Link
                        href={`/day-dai-thep-${row.widthMm}mm`}
                        className="text-primary hover:underline"
                      >
                        {row.widthMm}mm
                      </Link>
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
            Xem bảng giá đầy đủ tất cả loại
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Khóa đai phải khớp bản dây
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
            {PAIRING_ROWS.map((row) => (
              <li key={row.strapWidthMm}>
                <span className="font-semibold text-foreground">
                  Dây {row.strapWidthMm}mm
                </span>
                <span> → {row.sealWidthLabel}. {row.note}.</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            So sánh với loại bề mặt khác
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {otherSurfaces.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="group grid grid-cols-[120px,minmax(0,1fr)] overflow-hidden rounded-[1.35rem] border border-border/80 bg-background transition hover:border-primary/35 sm:grid-cols-[140px,minmax(0,1fr)]"
              >
                <div className="relative min-h-[120px]">
                  <Image
                    src={item.heroImage.src}
                    alt={item.heroImage.alt}
                    fill
                    className="object-cover"
                    sizes="140px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-muted-foreground">
                    {item.bestFor[0]}. {item.pros[0]}.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container max-w-[68ch]">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Mua {guide.name.toLowerCase()} tại Hà Nội
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {siteConfig.name} tư vấn quy cách, giao nhanh Hà Nội và KCN miền Bắc.
            Gọi {siteConfig.company.phone} hoặc thêm giỏ hàng phía trên, ghi rõ
            khổ và số kg cần lấy.
          </p>
        </div>
      </section>
    </>
  );
}
