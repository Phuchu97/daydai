import Image from "next/image";
import { Section } from "../Section";

export function TrustSection() {
  return (
    <Section id="trust" className="bg-muted/30">
      <div className="mx-auto max-w-5xl text-center">
        <p className="eyebrow">Niềm tin từ vận hành thực tế</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Được tin dùng bởi hàng chục nhà máy và kho bãi trên toàn quốc
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Cung cấp giải pháp đóng gói dây đai thép cho nhiều ngành: thép,
          cơ khí, vật liệu xây dựng, logistics và chế biến gỗ.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="surface-card p-6">
          <p className="text-3xl font-semibold text-primary [font-variant-numeric:tabular-nums]">
            5+
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            năm kinh nghiệm
          </p>
          <p className="mt-2 text-xs leading-6 text-muted-foreground">
            Tư vấn, cung cấp và triển khai giải pháp đóng gói cho khách hàng
            công nghiệp.
          </p>
        </div>

        <div className="surface-card p-6">
          <p className="text-3xl font-semibold text-primary [font-variant-numeric:tabular-nums]">
            300+
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            khách hàng doanh nghiệp
          </p>
          <p className="mt-2 text-xs leading-6 text-muted-foreground">
            Từ nhà máy sản xuất thép, gỗ, kính đến kho logistics và bãi vật liệu
            xây dựng.
          </p>
        </div>

        <div className="surface-card p-6">
          <p className="text-3xl font-semibold text-primary [font-variant-numeric:tabular-nums]">
            24/7
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            hỗ trợ kỹ thuật
          </p>
          <p className="mt-2 text-xs leading-6 text-muted-foreground">
            Hỗ trợ xử lý sự cố đóng gói, tư vấn lựa chọn dây đai và dụng cụ phù
            hợp tải trọng.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="relative md:col-span-2 md:row-span-2 md:min-h-[21rem] overflow-hidden rounded-3xl border border-border/70 bg-muted shadow-[0_16px_34px_-24px_rgba(26,62,114,0.55)]">
          <Image
            src="/images/day-dai-1.JPG"
            alt="Kho cuộn dây đai thép"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 66vw, 100vw"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-muted shadow-[0_16px_34px_-24px_rgba(26,62,114,0.55)]">
          <Image
            src="/images/day-dai-2.JPG"
            alt="Nhà máy sản xuất và đóng gói bằng dây đai thép"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-muted shadow-[0_16px_34px_-24px_rgba(26,62,114,0.55)]">
          <Image
            src="/images/day-dai-3.JPG"
            alt="Dây đai thép trên xe tải giao hàng"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      </div>

      <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)]">
        <div className="surface-card p-6">
          <h3 className="font-display text-xl font-semibold text-foreground">
            Năng lực cung ứng cho doanh nghiệp
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
            <li>• Tư vấn quy cách theo tải trọng, tuyến vận chuyển và môi trường kho.</li>
            <li>• Hỗ trợ đồng bộ dây đai, khóa đai và bộ dụng cụ siết bấm.</li>
            <li>• Ưu tiên phản hồi báo giá nhanh cho đơn hàng theo lô.</li>
            <li>• Hỗ trợ giao khu vực Hà Nội, miền Bắc và toàn quốc.</li>
          </ul>
        </div>
        <div className="surface-card p-6">
          <h3 className="font-display text-xl font-semibold text-foreground">
            Tình huống triển khai thực tế
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Một kho vật tư kim loại chuyển từ cấu hình đai chưa đồng bộ sang bản
            dây và khóa tương thích theo từng nhóm kiện. Sau 2 tuần vận hành,
            tỷ lệ lỗi tuột mối giảm rõ rệt và thời gian thao tác tại điểm đóng
            kiện ổn định hơn.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Ghi chú: kết quả có thể khác nhau theo quy trình từng kho và tải
            trọng thực tế.
          </p>
        </div>
      </section>
    </Section>
  );
}

