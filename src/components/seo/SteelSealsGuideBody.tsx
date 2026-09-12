import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PAIRING_ROWS, SEAL_PRICE_ROWS } from "@/data/steel-strapping-guide";

const compatibilityRows = [
  ["16mm", "16.2mm", "Bọ kín / chữ U", "Hàng nhẹ đến trung bình"],
  ["19mm", "19.2mm", "Bọ kín / chữ U", "Pallet kim loại, kiện hàng nặng"],
  ["25mm", "25.6mm", "Bọ kín", "Kiện cồng kềnh tải cao"],
  ["32mm", "32mm", "Bọ kín", "Cuộn thép, cấu kiện tải rất lớn"],
];

export function SteelSealsGuideBody() {
  return (
    <>
      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
          <div className="max-w-[68ch]">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Khóa đai thép (bọ sắt) hoạt động thế nào?
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <p>
                Khóa đai thép — hay gọi bọ sắt, bọ kín, bọ chữ U — giữ hai đầu dây
                đai sau khi siết. Mối nối phải chịu lực kéo tương đương dây; sai
                khổ bọ là nguyên nhân phổ biến khiến pallet tuột giữa đường dù cuộn
                dây còn mới.
              </p>
              <p>
                Bọ kín ôm quanh dây và bấm bằng kìm sealer. Bọ chữ U phù hợp một số
                quy trình siết tay hoặc khi cần tháo nhanh. Cả hai đều phải lớn hơn
                bản dây khoảng 0.2mm (vd. dây 19mm → bọ 19.2mm).
              </p>
            </div>
          </div>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/bo-thep-kin-19-mat-truoc.jpg"
              alt="Bọ thép kín 19mm mặt trước dùng khóa đai thép"
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
            Bảng quy cách khóa đai thép phổ biến
          </h2>
          <div className="responsive-table-wrap mt-6">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-muted/60 text-foreground">
                <tr>
                  <th className="px-3 py-2">Bản dây</th>
                  <th className="px-3 py-2">Kích thước khóa</th>
                  <th className="px-3 py-2">Dạng khóa</th>
                  <th className="px-3 py-2">Ứng dụng</th>
                </tr>
              </thead>
              <tbody>
                {compatibilityRows.map((row) => (
                  <tr key={row.join("-")} className="border-t border-border/60">
                    <td className="px-3 py-2 font-medium text-foreground">
                      <Link
                        href={`/day-dai-thep-${row[0].replace("mm", "")}mm`}
                        className="text-primary hover:underline"
                      >
                        {row[0]}
                      </Link>
                    </td>
                    <td className="px-3 py-2">{row[1]}</td>
                    <td className="px-3 py-2">{row[2]}</td>
                    <td className="px-3 py-2">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Giá khóa đai thép tham khảo
          </h2>
          <div className="responsive-table-wrap mt-6">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-muted/60 text-foreground">
                <tr>
                  <th className="px-3 py-2">Khổ</th>
                  <th className="px-3 py-2">Loại</th>
                  <th className="px-3 py-2">Giá / cái</th>
                  <th className="px-3 py-2">Giá / kg</th>
                </tr>
              </thead>
              <tbody>
                {SEAL_PRICE_ROWS.map((row) => (
                  <tr key={row.widthMm} className="border-t border-border/60">
                    <td className="px-3 py-2 font-medium text-foreground">
                      {row.widthMm}mm
                    </td>
                    <td className="px-3 py-2">{row.typeLabel}</td>
                    <td className="px-3 py-2">{row.pricePerPiece}</td>
                    <td className="px-3 py-2">{row.pricePerKg}</td>
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

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Cách chọn khóa đai đúng
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
              <li>• Chọn khóa lớn hơn bản dây khoảng 0.2mm để bấm ôm tốt.</li>
              <li>• Dùng bọ kín cho kiện nặng hoặc tuyến vận chuyển dài.</li>
              <li>• Luôn test lực kéo thực tế trước khi triển khai số lượng lớn.</li>
              <li>• Đảm bảo kìm bấm tương thích đúng bản khóa để tránh xì mối.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Pairing theo bản dây
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
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container max-w-[68ch]">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Mua khóa đai thép tại Hà Nội
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {siteConfig.name} cung cấp bọ sắt nhiều khổ, giao kèm dây đai thép và
            bộ dụng cụ nếu kho chưa có bộ khớp. Gọi {siteConfig.company.phone} để
            chốt loại bọ kín hay chữ U theo quy trình siết hiện tại. Xem thêm trang{" "}
            <Link href="/bo-sat" className="font-medium text-primary hover:underline">
              bọ sắt, bọ kẹp đai
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
