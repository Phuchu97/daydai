import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  LOAD_GUIDE_ROWS,
  PAIRING_ROWS,
  SPEC_ROWS,
  SURFACE_GUIDES,
} from "@/data/steel-strapping-guide";
import { SteelStrappingPriceTiers } from "@/components/seo/SteelStrappingPriceTiers";
import { STRAP_PRICE_RANGE_LABEL } from "@/data/steel-strapping-guide";

const sizeSpecs = SPEC_ROWS;

export function DayDaiSatGuideBody() {
  return (
    <>
      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
          <div className="max-w-[68ch]">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Dây đai sắt và dây đai thép có khác nhau không?
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <p>
                Trong kho vận Việt Nam, dây đai sắt là cách gọi thông dụng của dây
                đai thép đóng hàng. Cùng một cuộn băng thép xả khổ 16mm, 19mm hoặc
                32mm, bên mua hàng hay nói “đai sắt”, bên kỹ thuật ghi “đai thép”.
                Khi đặt hàng, hai cụm này trỏ cùng quy cách, cùng khóa đai và cùng
                bộ kìm siết / kìm bấm bọ.
              </p>
              <p>
                Điều cần tách rõ: dây đai sắt đóng pallet không phải đai thép cột,
                đai phi 6 hay thép 40x4 dùng trong xây dựng. Sản phẩm trang này là
                băng thép dẹt, cuốn lạnh, phủ dầu / mạ kẽm / sơn tĩnh điện, siết
                quanh kiện hàng rồi khóa bằng bọ sắt.
              </p>
              <p>
                Chọn đúng nghĩa là chọn bản rộng, độ dày, loại bề mặt và khóa khớp
                bản dây. Sai một mắt xích (dây 19mm kẹp bọ 16mm, hoặc kìm 32mm dùng
                dây 16mm) dễ tuột mối khi xe nâng bốc hoặc khi container rung trên
                tuyến dài.
              </p>
            </div>
          </div>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/day-dai-thep-tai-kho-khach-hang.jpg"
              alt="Cuộn dây đai sắt tại kho khách hàng, sẵn sàng đóng pallet"
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
            Chọn dây đai sắt 16mm, 19mm hay 32mm
          </h2>
          <p className="mt-2 max-w-[65ch] text-sm leading-7 text-muted-foreground">
            19mm là quy cách kho Việt Nam hỏi nhiều nhất. 16mm tối ưu chi phí
            pallet vừa. 32mm dành cuộn thép và kiện siêu nặng. Số liệu dưới đây
            là tải tham khảo theo đai, chưa gồm hệ số an toàn khi phanh gấp.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {sizeSpecs.map((row) => (
              <Link
                key={row.widthMm}
                href={row.href}
                className="group flex flex-col rounded-[1.35rem] border border-border/80 bg-background p-5 transition hover:border-primary/35"
              >
                <p className="font-display text-3xl font-semibold tabular-nums tracking-tight text-foreground">
                  {row.widthMm}
                  <span className="ml-0.5 text-lg font-medium text-muted-foreground">
                    mm
                  </span>
                </p>
                <p className="mt-3 text-sm font-medium text-foreground">
                  {row.loadHint}
                </p>
                <dl className="mt-4 space-y-1.5 text-xs leading-6 text-muted-foreground">
                  <div className="flex justify-between gap-3">
                    <dt>Độ dày</dt>
                    <dd className="tabular-nums text-foreground">{row.thicknessMm} mm</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Chịu lực</dt>
                    <dd className="tabular-nums text-foreground">{row.breakLoadN} N</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Chiều dài</dt>
                    <dd className="tabular-nums text-foreground">{row.metersPerKg} m/kg</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {row.bestFor}
                </p>
                <span className="mt-auto pt-4 text-sm font-semibold text-primary group-hover:underline">
                  Xem dây đai sắt {row.widthMm}mm
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container">
          <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Dây đai sắt dầu, mạ kẽm hay sơn tĩnh điện
          </h2>
          <p className="mt-2 max-w-[65ch] text-sm leading-7 text-muted-foreground">
            Cùng bản 19mm, loại bề mặt quyết định chống gỉ và đơn giá. Kho khô
            nội địa thường lấy dầu. Xuất khẩu, kho ẩm hoặc lưu ngoài trời nên lấy
            mạ kẽm hoặc sơn tĩnh điện.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]">
            <Link
              href={`/${SURFACE_GUIDES[1].slug}`}
              className="group relative min-h-[280px] overflow-hidden rounded-[1.5rem] bg-muted sm:min-h-[340px]"
            >
              <Image
                src={SURFACE_GUIDES[1].heroImage.src}
                alt="Dây đai sắt mạ kẽm chống gỉ, khổ 16 đến 32mm"
                fill
                className="object-cover transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {SURFACE_GUIDES[1].name.replace("thép", "sắt")}
                </h3>
                <p className="mt-1 max-w-[48ch] text-sm leading-6 text-white/85">
                  Lớp kẽm bảo vệ khi pallet đi container, kho gần biển hoặc để
                  ngoài trời. Đây là lựa chọn kho hỏi nhiều nhất sau 19mm dầu.
                </p>
              </div>
            </Link>
            <div className="grid gap-4">
              {SURFACE_GUIDES.filter((_, index) => index !== 1).map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/${guide.slug}`}
                  className="group grid grid-cols-[112px,minmax(0,1fr)] overflow-hidden rounded-[1.35rem] border border-border/80 bg-muted/20 sm:grid-cols-[140px,minmax(0,1fr)]"
                >
                  <div className="relative min-h-[120px]">
                    <Image
                      src={guide.heroImage.src}
                      alt={guide.heroImage.alt.replace("thép", "sắt")}
                      fill
                      className="object-cover"
                      sizes="140px"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                      {guide.name.replace("thép", "sắt")}
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-muted-foreground">
                      {guide.bestFor[0]}. {guide.bestFor[1]}.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container grid items-center gap-8 md:grid-cols-2">
          <figure className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-background">
            <Image
              src="/images/bo-thep-kin.jpg"
              alt="Bọ sắt khóa đai kín dùng với dây đai sắt 16mm 19mm 32mm"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Bọ sắt phải khớp bản dây
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Mối nối giữ lực nhờ bọ kín hoặc chữ U đúng khổ, bấm đều bằng kìm
              bấm bọ. Lệch size làm đầu dây trượt dù cuộn dây tốt. Dụng cụ siết
              cũng phải đúng 16-19mm hoặc 32mm.
            </p>
            <ul className="mt-5 space-y-3">
              {PAIRING_ROWS.filter((row) => [16, 19, 32].includes(row.strapWidthMm)).map(
                (row) => (
                  <li key={row.strapWidthMm} className="text-sm leading-6">
                    <span className="font-semibold text-foreground">
                      Dây {row.strapWidthMm}mm
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      dùng {row.sealWidthLabel.toLowerCase()}. {row.note}.
                    </span>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
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

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container">
          <div className="max-w-[68ch]">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Giá dây đai sắt tính theo kg
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
          </div>
          <div className="mt-8 flex flex-col gap-3 rounded-[1.5rem] border border-border bg-muted/25 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <p className="text-sm leading-6 text-muted-foreground">
              Cần bảng theo từng khổ 16-32mm và từng loại bề mặt, xem trang báo
              giá rồi gửi số lượng để chốt trong ngày.
            </p>
            <Link
              href="/bao-gia-day-dai-thep"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Xem bảng giá
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-12 md:py-16">
        <div className="site-container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Lỗi hay gặp khi mua dây đai sắt
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                Nhiều kho gọi dây đai sắt nhưng gửi yêu cầu thiếu độ dày. Bản
                19mm dày 0.5mm và 0.8mm khác nhau rõ về lực kéo. Nếu chỉ ghi
                “19mm” nhà cung cấp có thể giao loại mỏng, kiện nặng sẽ phải
                siết lại giữa đường.
              </p>
              <p>
                Lỗi thứ hai là mua dây một nơi, bọ một nơi, kìm một nơi mà không
                đo khổ. Bọ 16mm không ôm hết dây 19mm. Kìm 32mm kẹp dây 16mm dễ
                làm mép dây nhăn, mối bấm không kín.
              </p>
              <p>
                Lỗi thứ ba là dùng dây dầu để pallet ngoài trời vài tuần rồi
                trách dây gỉ. Dây dầu phù hợp kho khô. Muốn chống ẩm,
                phải ghi rõ mạ kẽm hoặc sơn tĩnh điện trên đơn.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Cách chốt quy cách trước khi đặt lô
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-muted-foreground">
              <li>
                Chụp kiện hàng: khối lượng ước tính, số điểm đai hiện tại, pallet
                gỗ hay sắt, hàng đi nội địa hay container.
              </li>
              <li>
                Chọn bản 16 / 19 / 32mm theo bảng tải ở trên, rồi chọn độ dày.
                Không chắc thì bắt đầu từ 19mm x 0.6-0.8mm, đây là cấu hình kho
                miền Bắc dùng nhiều.
              </li>
              <li>
                Ghi loại bề mặt (dầu, mạ kẽm, sơn), số kg hoặc số cuộn, địa điểm
                nhận. Chúng tôi báo giá trong ngày làm việc, kèm bọ và kìm nếu
                kho chưa có bộ khớp.
              </li>
              <li>
                Nên test 1-2 cuộn trên ca thật trước khi chuẩn hóa SOP cho cả
                tháng. Sai quy cách trên 50 cuộn tốn hơn test nhỏ rất nhiều.
              </li>
            </ol>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Gửi ảnh qua Zalo {siteConfig.company.phone} nếu muốn bên kỹ thuật
              đề xuất trước, không cần tự đoán độ dày.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
        <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)]">
          <figure className="relative min-h-[240px] overflow-hidden rounded-[1.5rem] bg-background lg:min-h-full">
            <Image
              src="/images/lo-day-dai-thep-giao-cho-khach-hang.jpg"
              alt="Lô dây đai sắt giao cho nhà máy và kho logistics"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </figure>
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Khi nào kho nên dùng dây đai sắt
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Dây đai sắt phù hợp kiện nặng, cạnh sắc, nhiệt cao hoặc cần giữ lực
              siết lâu. Dây PET nhẹ hơn, an toàn khi cắt, thường đủ cho carton và
              hàng vừa. {siteConfig.name} giao Hà Nội, các KCN miền Bắc và hỗ trợ
              chành xe toàn quốc. Gọi {siteConfig.company.phone} nếu cần chốt
              quy cách theo ảnh pallet.
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-foreground">
                  Thép cuộn, tôn, ống
                </dt>
                <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                  32mm mạ kẽm, bọ kín, thêm góc bảo vệ nếu mép cắt sắc.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-foreground">
                  Gạch, đá, VLXD
                </dt>
                <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                  19mm hoặc 32mm, dầu nếu kho khô, mạ kẽm nếu để bãi ngoài.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-foreground">
                  Pallet gỗ xuất khẩu
                </dt>
                <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                  19mm mạ kẽm hoặc sơn tĩnh điện, 3-4 vòng, neo pallet trong
                  container.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-foreground">
                  Kho nội địa miền Bắc
                </dt>
                <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                  16-19mm theo tải, ưu tiên giao nhanh Hà Nội hơn là oversized
                  32mm.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
