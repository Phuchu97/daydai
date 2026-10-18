import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  INDUSTRY_CASES,
  LOAD_GUIDE_ROWS,
  PAIRING_ROWS,
  SPEC_ROWS,
  SURFACE_GUIDES,
} from "@/data/steel-strapping-guide";
import { SteelStrappingPriceTiers } from "@/components/seo/SteelStrappingPriceTiers";
import { STRAP_PRICE_RANGE_LABEL } from "@/data/steel-strapping-guide";

const mainSizes = SPEC_ROWS;

export function DayDaiThepGuideBody() {
  return (
    <>
      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
          <div className="max-w-[68ch]">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Dây đai thép là gì?
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <p>
                Dây đai thép (còn gọi dây đai sắt) là băng thép dẹt xả khổ 16mm,
                19mm, 25mm hoặc 32mm, phủ dầu / mạ kẽm / sơn tĩnh điện. Dùng siết
                quanh kiện hàng trên pallet, container hoặc xe tải, khóa bằng bọ
                sắt và kìm bấm bọ.
              </p>
              <p>
                Khác với đai thép cột xây dựng hay thép phi, dây đai thép đóng
                hàng có độ dày mỏng, cuốn thành cuộn 30-50kg và tính giá theo kg.
                Ít co giãn sau khi siết nên phù hợp hàng nặng, cạnh sắc và tuyến
                rung lắc.
              </p>
            </div>
          </div>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/day-dai-thep-chat-luong-cao.jpg"
              alt="Cuộn dây đai thép chất lượng cao tại kho"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </figure>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Ba loại bề mặt phổ biến
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {SURFACE_GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/${guide.slug}`}
                className="group flex flex-col overflow-hidden rounded-[1.35rem] border border-border/80 bg-background transition hover:border-primary/35"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={guide.heroImage.src}
                    alt={guide.heroImage.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary">
                    {guide.name}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-6 text-muted-foreground">
                    {guide.bestFor[0]}. {guide.pros[0]}.
                  </p>
                  <span className="mt-3 text-sm font-semibold text-primary">
                    Xem chi tiết
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Bảng quy cách 16mm · 19mm · 32mm
          </h2>
          <p className="mt-2 max-w-[65ch] text-sm leading-7 text-muted-foreground">
            Số liệu tham khảo để chọn nhanh. Tải thực tế còn phụ thuộc độ dày, số
            điểm đai và lực siết.
          </p>
          <div className="responsive-table-wrap mt-6">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-muted/60 text-foreground">
                <tr>
                  <th className="px-3 py-2">Bản dây</th>
                  <th className="px-3 py-2">Độ dày</th>
                  <th className="px-3 py-2">Chịu lực (N)</th>
                  <th className="px-3 py-2">m/kg</th>
                  <th className="px-3 py-2">Tải tham khảo</th>
                </tr>
              </thead>
              <tbody>
                {mainSizes.map((row) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Chọn quy cách theo tải kiện
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {LOAD_GUIDE_ROWS.map((row) => (
              <div
                key={row.load}
                className="rounded-2xl border border-border/70 bg-background/80 px-4 py-3"
              >
                <p className="text-sm font-semibold text-foreground">{row.load}</p>
                <p className="mt-1 text-sm text-primary">{row.recommend}</p>
                <p className="mt-1 text-xs leading-6 text-muted-foreground">
                  {row.notes}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/tu-van/cach-chon-day-dai-thep-theo-tai-trong"
            className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            Đọc hướng dẫn chọn theo tải trọng chi tiết
          </Link>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="/day-dai-thep-dong-hang" className="text-primary hover:underline">
              Dây đai thép đóng hàng theo loại kiện
            </Link>
            <Link href="/day-dai-thep-dong-pallet" className="text-primary hover:underline">
              Dây đai thép đóng pallet
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Ứng dụng theo ngành
          </h2>
          <div className="responsive-table-wrap mt-6">
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
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container grid items-center gap-8 md:grid-cols-2">
          <figure className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-background">
            <Image
              src="/images/bo-thep-kin.jpg"
              alt="Khóa đai thép bọ kín khớp bản dây"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
          <div>
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
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <Link href="/khoa-dai-thep" className="text-primary hover:underline">
                Chọn khóa đai
              </Link>
              <Link
                href="/bo-dung-cu-dong-dai-thep"
                className="text-primary hover:underline"
              >
                Bộ dụng cụ siết / bấm
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container max-w-[68ch]">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Giá dây đai thép và cách chốt lô
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Giá 
            <strong className="font-semibold text-foreground">
              {STRAP_PRICE_RANGE_LABEL}
            </strong> 
            tùy số lượng, cùng giá cho dầu / mạ kẽm / sơn tĩnh điện và mọi bản
            rộng. {siteConfig.name} giao Hà Nội, KCN miền Bắc và toàn quốc.
          </p>
          <SteelStrappingPriceTiers />
          <Link
            href="/bao-gia-day-dai-thep"
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Xem bảng giá đầy đủ
          </Link>
        </div>
      </section>
    </>
  );
}
