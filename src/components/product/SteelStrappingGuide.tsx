import Link from "next/link";
import {
  steelStrappingApplications,
  steelStrappingComparison,
  steelStrappingGeneralSpecs,
  steelStrappingProcess,
  steelStrappingSelectionGuide,
  steelStrappingSpecsByWidth,
  steelStrappingStructure,
  steelStrappingWhatIs,
} from "@/data/steel-strapping-content";
import { siteConfig } from "@/config/site";

function SectionHeading({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl"
    >
      {children}
    </h2>
  );
}

export function SteelStrappingGuide() {
  return (
    <div className="border-t border-border bg-background">
      {/* Dây đai thép là gì */}
      <section
        aria-labelledby="what-is-steel-strapping"
        className="py-10 sm:py-12"
      >
        <div className="container mx-auto w-full max-w-5xl px-4">
          <p className="eyebrow">Kiến thức sản phẩm</p>
          <SectionHeading id="what-is-steel-strapping">
            {steelStrappingWhatIs.title}
          </SectionHeading>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {steelStrappingWhatIs.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Cấu tạo */}
      <section
        aria-labelledby="steel-strapping-structure"
        className="border-t border-border/60 bg-muted/25 py-10 sm:py-12"
      >
        <div className="container mx-auto w-full max-w-5xl px-4">
          <SectionHeading id="steel-strapping-structure">
            {steelStrappingStructure.title}
          </SectionHeading>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            {steelStrappingStructure.items.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/80 bg-background p-4 shadow-sm"
              >
                <dt className="text-sm font-semibold text-foreground">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-sm text-muted-foreground">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Ứng dụng */}
      <section
        aria-labelledby="steel-strapping-applications"
        className="py-10 sm:py-12"
      >
        <div className="container mx-auto w-full max-w-5xl px-4">
          <SectionHeading id="steel-strapping-applications">
            {steelStrappingApplications.title}
          </SectionHeading>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {steelStrappingApplications.intro}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {steelStrappingApplications.groups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-border bg-muted/20 p-4"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Thông số theo bản rộng */}
      <section
        aria-labelledby="steel-strapping-specs-detail"
        className="border-t border-border/60 bg-muted/30 py-10 sm:py-12"
      >
        <div className="container mx-auto w-full max-w-5xl px-4">
          <SectionHeading id="steel-strapping-specs-detail">
            Thông số kỹ thuật theo bản rộng
          </SectionHeading>
          <p className="mt-2 text-sm text-muted-foreground">
            Bảng tham khảo lực kéo đứt và ứng dụng — số liệu có thể thay đổi theo
            lô hàng và tiêu chuẩn nhà sản xuất. Liên hệ để nhận catalogue chi tiết.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50 text-xs font-semibold uppercase tracking-wide text-foreground">
                  <th className="px-4 py-3">Bản rộng</th>
                  <th className="px-4 py-3">Độ dày</th>
                  <th className="px-4 py-3">Lực kéo đứt</th>
                  <th className="px-4 py-3">Khối lượng cuộn</th>
                  <th className="px-4 py-3">Ứng dụng gợi ý</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/70">
                {steelStrappingSpecsByWidth.map((row) => (
                  <tr key={row.width} className="text-muted-foreground">
                    <td className="px-4 py-3 font-medium text-foreground">
                      {row.width}
                    </td>
                    <td className="px-4 py-3">{row.thickness}</td>
                    <td className="px-4 py-3">{row.breakStrength}</td>
                    <td className="px-4 py-3">{row.coilWeight}</td>
                    <td className="px-4 py-3">{row.typicalUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 text-sm font-semibold text-foreground">
            Thông số tổng hợp
          </h3>
          <dl className="mt-3 divide-y divide-border/70 overflow-hidden rounded-2xl border border-border bg-background text-sm">
            {steelStrappingGeneralSpecs.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[200px,minmax(0,1fr)] sm:gap-3"
              >
                <dt className="font-medium text-foreground">{row.label}</dt>
                <dd className="text-muted-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Cách chọn + quy trình */}
      <section
        aria-labelledby="steel-strapping-guide"
        className="py-10 sm:py-12"
      >
        <div className="container mx-auto w-full max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <SectionHeading id="steel-strapping-guide">
                {steelStrappingSelectionGuide.title}
              </SectionHeading>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                {steelStrappingSelectionGuide.steps.map((step) => (
                  <li key={step.slice(0, 30)}>{step}</li>
                ))}
              </ol>
              <p className="mt-4 text-sm">
                <Link
                  href="/day-dai-thep-16mm-19mm-32mm"
                  className="font-medium text-primary hover:underline"
                >
                  Xem hướng dẫn so sánh 16mm / 19mm / 32mm →
                </Link>
              </p>
            </div>
            <div>
              <SectionHeading id="steel-strapping-process">
                {steelStrappingProcess.title}
              </SectionHeading>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                {steelStrappingProcess.steps.map((step) => (
                  <li key={step.slice(0, 30)}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* So sánh */}
      <section
        aria-labelledby="steel-strapping-compare"
        className="border-t border-border/60 bg-muted/25 py-10 sm:py-12"
      >
        <div className="container mx-auto w-full max-w-5xl px-4">
          <SectionHeading id="steel-strapping-compare">
            {steelStrappingComparison.title}
          </SectionHeading>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full min-w-[480px] text-sm">
              <tbody>
                {steelStrappingComparison.rows.map((row, i) => (
                  <tr
                    key={row[0]}
                    className={
                      i === 0
                        ? "border-b border-border bg-muted/50 font-semibold text-foreground"
                        : "border-b border-border/60 text-muted-foreground last:border-0"
                    }
                  >
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Cần báo giá hoặc mẫu dây thử? Gọi{" "}
            <a
              href={`tel:${siteConfig.company.zaloPhone}`}
              className="font-semibold text-primary"
            >
              {siteConfig.company.phone}
            </a>{" "}
            hoặc{" "}
            <Link href="/bao-gia-day-dai-thep" className="font-medium text-primary hover:underline">
              gửi yêu cầu báo giá
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
