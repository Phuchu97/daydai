import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Section } from "../Section";

const { company } = siteConfig;

const stats = [
  {
    value: `${new Date().getFullYear() - company.foundingYear}+`,
    label: `năm kinh nghiệm (từ ${company.foundingYear})`,
    detail: `${company.materialSource}, cung cấp cho khách hàng công nghiệp.`,
  },
  {
    value: "300+",
    label: "khách hàng doanh nghiệp",
    detail:
      "Từ nhà máy thép, gỗ, kính đến kho logistics và xưởng vật liệu xây dựng.",
  },
  {
    value: "24/7",
    label: "hỗ trợ kỹ thuật",
    detail:
      "Hỗ trợ xử lý sự cố đóng gói, tư vấn lựa chọn dây đai và dụng cụ phù hợp tải trọng.",
  },
] as const;

export function TrustSection() {
  return (
    <Section id="trust" className="bg-muted/30">
      <div className="section-intro">
        <p className="eyebrow">Niềm tin từ vận hành thực tế</p>
        <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl md:text-4xl">
          Được tin dùng bởi hàng chục nhà máy và xưởng sản xuất trên toàn quốc
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Cung cấp giải pháp đóng gói dây đai thép cho nhiều ngành: thép, cơ
          khí, vật liệu xây dựng, logistics và chế biến gỗ.
        </p>
      </div>

      <div className="surface-card mt-10 overflow-hidden">
        <div className="grid divide-y divide-border/70 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-5 py-6 transition-colors duration-200 hover:bg-muted/35 sm:px-6 sm:py-7"
            >
              <p className="text-3xl font-semibold text-primary [font-variant-numeric:tabular-nums]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {stat.label}
              </p>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold text-foreground">Khách hàng tiêu biểu</h3>
        <ul className="mt-3 flex flex-wrap gap-2.5">
          {company.notableClients.map((client) => (
            <li
              key={client}
              className="rounded-lg border border-border/60 bg-background px-3 py-1.5 text-sm font-medium text-foreground/90"
            >
              {client}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src="/images/nha-may-dong-dai.webp"
            alt="Dây đai thép chất lượng cao tại nhà máy"
            fill
            className="object-cover transition duration-300 hover:scale-[1.02]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src="/images/nha-may-dong-dai-2.jpg"
            alt="Dây đai thép mạ kẽm màu xanh"
            fill
            className="object-cover transition duration-300 hover:scale-[1.02]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src="/images/nha-may-dong-dai-3.webp"
            alt="Cuộn dây đai thép tại kho cung ứng"
            fill
            className="object-cover transition duration-300 hover:scale-[1.02]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="surface-card p-6 md:p-7">
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Năng lực cung ứng cho doanh nghiệp
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm leading-7 text-muted-foreground">
            <li>
              Tư vấn quy cách theo tải trọng, tuyến vận chuyển và môi trường
              kho.
            </li>
            <li>
              Hỗ trợ đồng bộ dây đai, khóa đai và bộ dụng cụ siết bấm.
            </li>
            <li>Ưu tiên phản hồi báo giá nhanh cho đơn hàng theo lô.</li>
            <li>Hỗ trợ giao khu vực Hà Nội, miền Bắc và toàn quốc.</li>
          </ul>
        </div>

        <div className="surface-card flex flex-col justify-between p-6 md:p-7">
          <div>
            <p className="text-sm font-medium text-primary">
              Tình huống triển khai thực tế
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Một kho vật tư kim loại chuyển từ cấu hình đai chưa đồng bộ sang bản
              dây và khóa tương thích theo từng nhóm kiện. Sau hai tuần vận
              hành, tỷ lệ lỗi tuột mối giảm rõ và thời gian thao tác tại điểm
              đóng kiện ổn định hơn.
            </p>
          </div>
          <p className="mt-4 text-xs leading-6 text-muted-foreground">
            Ghi chú: kết quả có thể khác nhau theo quy trình từng kho và tải
            trọng thực tế.
          </p>
        </div>
      </div>
    </Section>
  );
}
