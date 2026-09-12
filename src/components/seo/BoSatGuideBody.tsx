import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PAIRING_ROWS, SEAL_PRICE_ROWS } from "@/data/steel-strapping-guide";

const sealTypes = [
  {
    title: "Bọ kín (bọ kẹp đai kín)",
    body: "Ôm tròn hai lớp dây, bấm bằng kìm sealer. Phù hợp kiện nặng, tuyến xa, container — ít tuột mối hơn khi rung lắc.",
  },
  {
    title: "Bọ chữ U (bọ kẹp đai U)",
    body: "Mở một phía, thao tác nhanh trên một số quy trình siết tay. Dùng khi cần tháo/đóng lại; hàng rất nặng nên ưu tiên bọ kín.",
  },
  {
    title: "Bọ kẹp đai đúng khổ",
    body: "Khổ bọ lớn hơn bản dây ~0.2mm (dây 19 → bọ 19.2). Sai size là nguyên nhân phổ biến pallet tuột giữa đường.",
  },
];

export function BoSatGuideBody() {
  return (
    <>
      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
          <div className="max-w-[68ch]">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Bọ sắt và bọ kẹp đai là gì?
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <p>
                Bọ sắt (bọ kẹp đai, khóa đai thép) là phụ kiện giữ hai đầu dây đai
                sau khi siết. Trong kho vận Việt Nam, các cách gọi{" "}
                <strong className="font-semibold text-foreground">
                  bọ sắt, bọ kẹp đai, bọ kín, bọ chữ U, khóa đai
                </strong>{" "}
                đều trỏ cùng nhóm sản phẩm — khác hình dạng và khổ theo bản dây.
              </p>
              <p>
                Mối nối phải chịu lực kéo tương đương dây. Sai khổ bọ hoặc bấm
                lệch với kìm sealer khiến pallet tuột dù cuộn dây còn mới. Luôn
                đặt bọ cùng quy cách dây 16/19/25/32mm.
              </p>
            </div>
          </div>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/bo-thep-kin-19-mat-truoc.jpg"
              alt="Bọ sắt kín 19mm — bọ kẹp đai thép"
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
            Các loại bọ sắt / bọ kẹp đai phổ biến
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {sealTypes.map((item) => (
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
            Chọn bọ kẹp đai theo bản dây
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground max-w-[68ch]">
            {PAIRING_ROWS.map((row) => (
              <li key={row.strapWidthMm}>
                <span className="font-semibold text-foreground">
                  Dây {row.strapWidthMm}mm
                </span>
                <span>
                  {" "}
                  → {row.sealWidthLabel}. {row.note}.
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Giá bọ sắt tham khảo
          </h2>
          <div className="mt-6 overflow-x-auto rounded-[1.35rem] border border-border/80">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Khổ</th>
                  <th className="px-4 py-3 font-semibold">Loại</th>
                  <th className="px-4 py-3 font-semibold">Giá / cái</th>
                  <th className="px-4 py-3 font-semibold">Giá / kg</th>
                </tr>
              </thead>
              <tbody>
                {SEAL_PRICE_ROWS.map((row) => (
                  <tr key={row.widthMm} className="border-t border-border/70">
                    <td className="px-4 py-3 font-medium text-foreground">
                      {row.widthMm}mm
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.typeLabel}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.pricePerPiece}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.pricePerKg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link
            href="/bao-gia-day-dai-thep"
            className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            Xem bảng giá dây + khóa đai đầy đủ
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Mua bọ sắt, bọ kẹp đai kèm dây & kìm
          </h2>
          <p className="mt-2 max-w-[65ch] text-sm leading-7 text-muted-foreground">
            {siteConfig.name} giao bọ kín / chữ U nhiều khổ, đồng bộ với dây đai
            thép và kìm bấm. Gọi {siteConfig.company.phone} hoặc Zalo cùng số —
            gửi ảnh dây + kìm hiện tại để khớp size trước khi giao.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            <Link href="/khoa-dai-thep" className="text-primary hover:underline">
              Trang khóa đai thép
            </Link>
            <Link href="/day-dai-thep" className="text-primary hover:underline">
              Dây đai thép
            </Link>
            <Link href="/bo-dung-cu-dong-dai-thep" className="text-primary hover:underline">
              Bộ dụng cụ / kìm bấm
            </Link>
            <Link href="/bao-gia-day-dai-thep" className="text-primary hover:underline">
              Bảng giá
            </Link>
            <Link href="/day-dai-thep-ha-noi" className="text-primary hover:underline">
              Giao Hà Nội
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
