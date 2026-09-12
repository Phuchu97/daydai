import Image from "next/image";
import Link from "next/link";
import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";
import { siteConfig } from "@/config/site";

export type LocalRegion = "hanoi" | "mien-bac";

const regionConfig = {
  hanoi: {
    title: "Khu vực giao nhanh tại Hà Nội",
    areas: [
      "Nội thành Hà Nội và vùng ven",
      "KCN Bắc Thăng Long, Quang Minh, Thạch Thất",
      "Bắc Ninh, Hưng Yên, Hải Dương (theo lịch xe)",
    ],
    delivery: "24–48 giờ khi hàng sẵn kho và đơn trước 15h",
    image: {
      src: "/images/day-dai-thep-tai-kho-khach-hang.jpg",
      alt: "Dây đai thép giao cho kho tại Hà Nội",
    },
  },
  "mien-bac": {
    title: "Khu vực giao nhanh tại miền Bắc",
    areas: [
      "Hà Nội và vùng KCN phụ cận",
      "KCN Bắc Ninh, Vĩnh Phúc, Hưng Yên, Hải Dương, Hải Phòng",
      "Chành xe các tỉnh miền Bắc khi cần (theo lịch nhập kho)",
    ],
    delivery: "Hà Nội 24–48h khi hàng sẵn; tỉnh lân cận 2–4 ngày qua chành",
    image: {
      src: "/images/lo-day-dai-thep-giao-cho-khach-hang.jpg",
      alt: "Lô dây đai thép giao cho nhà máy miền Bắc",
    },
  },
} as const;

export function LocalRegionGuideBody({ region }: { region: LocalRegion }) {
  const config = regionConfig[region];

  return (
    <>
      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
          <div className="max-w-[68ch]">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {config.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
              {config.areas.map((area) => (
                <li key={area}>• {area}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Thời gian giao tham khảo:{" "}
              <strong className="font-semibold text-foreground">
                {config.delivery}
              </strong>
              . Gửi quy cách + số kg qua Zalo {siteConfig.company.phone} để
              nhận báo giá trong ngày làm việc.
            </p>
          </div>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={config.image.src}
              alt={config.image.alt}
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
            Thông tin liên hệ (NAP)
          </h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border/80 bg-background p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Tên doanh nghiệp
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">
                {siteConfig.company.legalName}
              </dd>
            </div>
            <div className="rounded-2xl border border-border/80 bg-background p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Hotline / Zalo
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">
                <a href={`tel:${siteConfig.company.phone.replace(/\./g, "")}`}>
                  {siteConfig.company.phone}
                </a>
              </dd>
            </div>
            <div className="rounded-2xl border border-border/80 bg-background p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Khu vực phục vụ
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">
                {siteConfig.company.serviceArea}
              </dd>
            </div>
          </dl>
          <Link
            href="/lien-he"
            className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            Xem trang liên hệ đầy đủ
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Dịch vụ kèm theo khi mua tại khu vực
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Tư vấn quy cách",
                body: "Chọn 16/19/32mm, dầu / mạ kẽm / sơn theo tải và môi trường kho.",
              },
              {
                title: "Đồng bộ bọ + kìm",
                body: "Gợi ý khóa đai và bộ dụng cụ khớp bản dây, tránh tuột mối.",
              },
              {
                title: "Báo giá lô",
                body: `Giá tham khảo từ ${STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg — chốt theo số kg/tháng.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.35rem] border border-border/80 bg-muted/20 p-5"
              >
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Trang sản phẩm liên quan
          </h2>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            <Link href="/day-dai-thep" className="text-primary hover:underline">
              Dây đai thép
            </Link>
            <Link href="/day-dai-sat" className="text-primary hover:underline">
              Dây đai sắt
            </Link>
            <Link href="/day-dai-sat-gia-re" className="text-primary hover:underline">
              Dây đai sắt giá rẻ
            </Link>
            <Link href="/bao-gia-day-dai-thep" className="text-primary hover:underline">
              Bảng giá
            </Link>
            <Link href="/khoa-dai-thep" className="text-primary hover:underline">
              Khóa đai thép
            </Link>
            <Link href="/bo-sat" className="text-primary hover:underline">
              Bọ sắt, bọ kẹp đai
            </Link>
            <Link
              href="/bo-dung-cu-dong-dai-thep"
              className="text-primary hover:underline"
            >
              Bộ dụng cụ
            </Link>
            <Link href="/siet-day-thep" className="text-primary hover:underline">
              Siết dây thép
            </Link>
            {region === "hanoi" ? (
              <Link
                href="/day-dai-thep-mien-bac"
                className="text-primary hover:underline"
              >
                Xem trang miền Bắc
              </Link>
            ) : (
              <Link
                href="/day-dai-thep-ha-noi"
                className="text-primary hover:underline"
              >
                Xem trang Hà Nội
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
