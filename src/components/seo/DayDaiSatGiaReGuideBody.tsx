import Image from "next/image";
import Link from "next/link";
import { STEEL_STRAPPING_TIER_SUMMARY } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { SteelStrappingPriceTiers } from "@/components/seo/SteelStrappingPriceTiers";
import { STRAP_PRICE_FROM_LABEL } from "@/data/steel-strapping-guide";

const priceTips = [
  {
    title: "Chọn đúng bản, tránh oversized",
    body: "Pallet vừa dùng 16mm thay vì 19/32mm khi tải cho phép — tiết kiệm kg dây mỗi kiện mà vẫn đủ lực.",
  },
  {
    title: "Gom đơn cho đủ mốc tấn",
    body: `Giá giảm theo tổng số kg mỗi đơn: ${STEEL_STRAPPING_TIER_SUMMARY}. Gộp nhu cầu nhiều kho hoặc nhiều tháng vào một đơn để lên mốc giá tốt hơn.`,
  },
  {
    title: "Đặt theo lô kg/tháng",
    body: "Báo số kg tiêu thụ tháng giúp chốt lịch giao ổn định, giảm chia nhỏ đơn và phí vận chuyển.",
  },
];

export function DayDaiSatGiaReGuideBody() {
  return (
    <>
      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
          <div className="max-w-[68ch]">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Dây đai sắt giá rẻ nghĩa là gì?
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <p>
                “Giá rẻ” ở đây không phải dây mỏng kém lực. Là tối ưu{" "}
                <strong className="font-semibold text-foreground">
                  chi phí / kg kiện
                </strong>
                : chọn đúng bản 16–32mm, bề mặt phù hợp kho, đặt đủ số kg để
                lên mốc giá theo số lượng và giảm cước giao.
              </p>
              <p>
                Giá từ{" "}
                <strong className="font-semibold text-foreground">
                  {STRAP_PRICE_FROM_LABEL}
                </strong>{" "}
                cho đơn dự án; đơn thường {STEEL_STRAPPING_TIER_SUMMARY} — cùng
                một giá cho dầu, mạ kẽm và sơn. Cuộn phổ biến 30–50kg.
              </p>
              <p>
                Dây đai sắt giá rẻ vẫn cần khớp bọ sắt và kìm đúng khổ — lệch size
                dễ tuột mối, phải siết lại, tốn thêm dây và nhân công.
              </p>
            </div>
          </div>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/day-dai-thep-dau.jpg"
              alt="Cuộn dây đai sắt giá rẻ phủ dầu tại kho"
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
            Cách mua dây đai sắt tiết kiệm nhất
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {priceTips.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.35rem] border border-border/80 bg-background p-5"
              >
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Bảng giá dây đai sắt theo số lượng
          </h2>
          <p className="mt-2 max-w-[65ch] text-sm leading-7 text-muted-foreground">
            Đơn càng lớn giá càng tốt. Bề mặt (dầu / mạ kẽm / sơn) không làm đổi
            giá — chọn theo môi trường kho.
          </p>
          <SteelStrappingPriceTiers className="responsive-table-wrap mt-6" />
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Báo giá nhanh để chốt giá lô
          </h2>
          <p className="mt-2 max-w-[65ch] text-sm leading-7 text-muted-foreground">
            Gửi Zalo {siteConfig.company.phone}: bản (16/19/32), độ dày, bề mặt,
            số kg/tháng và điểm giao. Nhận báo giá trong ngày làm việc.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            <Link href="/bao-gia-day-dai-thep" className="text-primary hover:underline">
              Xem bảng giá tham khảo
            </Link>
            <Link href="/day-dai-sat" className="text-primary hover:underline">
              Trang dây đai sắt tổng quan
            </Link>
            <Link href="/day-dai-thep" className="text-primary hover:underline">
              Dây đai thép
            </Link>
            <Link href="/day-dai-thep-ha-noi" className="text-primary hover:underline">
              Giao Hà Nội
            </Link>
            <Link href="/day-dai-thep-mien-bac" className="text-primary hover:underline">
              Giao miền Bắc
            </Link>
            <Link href="/khoa-dai-thep" className="text-primary hover:underline">
              Khóa đai thép
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
