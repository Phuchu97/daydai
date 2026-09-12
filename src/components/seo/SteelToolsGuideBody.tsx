import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const toolRows = [
  ["Bộ 16-19mm", "0.4 - 0.8mm", "Kho vừa, pallet hàng tiêu chuẩn", "3.5 - 4.2kg"],
  ["Bộ 19-25mm", "0.6 - 1.0mm", "Hàng nặng trung bình", "4.2 - 5.5kg"],
  ["Bộ 32mm", "0.8 - 1.2mm", "Cuộn thép, kiện tải cao", "5.5 - 7.0kg"],
];

export function SteelToolsGuideBody() {
  return (
    <>
      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
          <div className="max-w-[68ch]">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Bộ dụng cụ đóng đai thép gồm những gì?
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <p>
                Bộ dụng cụ đóng đai thép thường gồm kìm siết (tensioner) và kìm
                bấm bọ (sealer). Kìm siết căng dây quanh kiện; kìm bấm khóa đai
                giữ lực siết. Hai dụng cụ phải cùng khổ với bản dây và bọ — bộ
                16-19mm không dùng được dây 32mm.
              </p>
              <p>
                Một số kho mua riêng kìm siết và kìm bấm; một số lấy bộ combo để
                đồng bộ phụ tùng. Quan trọng là test trên kiện mẫu trước khi chuẩn
                hóa SOP cho cả ca.
              </p>
            </div>
          </div>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/kim-siet-dai.jpg"
              alt="Kìm siết dây đai thép trong bộ dụng cụ đóng đai"
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
            Thông số tham khảo theo nhóm bộ
          </h2>
          <div className="responsive-table-wrap mt-6">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-muted/60 text-foreground">
                <tr>
                  <th className="px-3 py-2">Nhóm bộ</th>
                  <th className="px-3 py-2">Độ dày dây hỗ trợ</th>
                  <th className="px-3 py-2">Ứng dụng chính</th>
                  <th className="px-3 py-2">Trọng lượng bộ</th>
                </tr>
              </thead>
              <tbody>
                {toolRows.map((row) => (
                  <tr key={row.join("-")} className="border-t border-border/60">
                    <td className="px-3 py-2 font-medium text-foreground">{row[0]}</td>
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
        <div className="site-container grid items-center gap-8 md:grid-cols-2">
          <figure className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-muted">
            <Image
              src="/images/kim-bam-bo.webp"
              alt="Kìm bấm bọ sắt khóa đai thép"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Quy trình chuẩn 3 bước
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-muted-foreground">
              <li>Luồn dây đúng vị trí quanh kiện và đặt bọ thép đúng bản dây.</li>
              <li>Dùng kìm siết siết tới lực phù hợp với tải trọng kiện hàng.</li>
              <li>Dùng sealer bấm bọ, sau đó kiểm tra độ ổn định của mối đai.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Checklist khi mua bộ dụng cụ
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
              <li>• Xác nhận bản dây dùng thực tế tại kho (16 / 19 / 32mm).</li>
              <li>• Kiểm tra nguồn gốc và chính sách bảo hành.</li>
              <li>• Chọn bộ có phụ tùng thay thế sẵn (lò xo, đầu bấm).</li>
              <li>• Test vận hành ngay trên kiện hàng mẫu trước khi mua số lượng.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Liên kết sản phẩm liên quan
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
              <li>
                <Link href="/day-dai-thep" className="text-primary hover:underline">
                  Dây đai thép theo quy cách
                </Link>
              </li>
              <li>
                <Link href="/khoa-dai-thep" className="text-primary hover:underline">
                  Khóa đai thép / bọ sắt
                </Link>
              </li>
              <li>
                <Link href="/bao-gia-day-dai-thep" className="text-primary hover:underline">
                  Bảng giá tham khảo mới nhất
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container max-w-[68ch]">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Tư vấn bộ dụng cụ tại Hà Nội
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {siteConfig.name} hỗ trợ chọn bộ theo bản dây đang dùng, giao kèm dây
            và bọ nếu kho cần đồng bộ một lần. Gọi {siteConfig.company.phone} hoặc
            thêm giỏ hàng phía trên. Xem thêm trang{" "}
            <Link href="/siet-day-thep" className="font-medium text-primary hover:underline">
              siết dây thép
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
