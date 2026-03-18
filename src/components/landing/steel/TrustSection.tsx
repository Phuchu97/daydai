import Image from "next/image";
import { Section } from "../Section";

export function TrustSection() {
  return (
    <Section id="trust" className="bg-muted/40">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Được tin dùng bởi hàng chục nhà máy và kho bãi trên toàn quốc
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Cung cấp giải pháp đóng gói dây đai thép cho nhiều ngành: thép,
          cơ khí, vật liệu xây dựng, logistics và chế biến gỗ.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
          <p className="text-3xl font-bold text-primary">5+</p>
          <p className="mt-1 text-sm font-medium text-foreground">
            năm kinh nghiệm
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Tư vấn, cung cấp và triển khai giải pháp đóng gói cho khách hàng
            công nghiệp.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
          <p className="text-3xl font-bold text-primary">300+</p>
          <p className="mt-1 text-sm font-medium text-foreground">
            khách hàng doanh nghiệp
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Từ nhà máy sản xuất thép, gỗ, kính đến kho logistics và bãi vật liệu
            xây dựng.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
          <p className="text-3xl font-bold text-primary">24/7</p>
          <p className="mt-1 text-sm font-medium text-foreground">
            hỗ trợ kỹ thuật
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Hỗ trợ xử lý sự cố đóng gói, tư vấn lựa chọn dây đai và dụng cụ phù
            hợp tải trọng.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src="/images/day-dai-1.JPG"
            alt="Kho cuộn dây đai thép"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src="/images/day-dai-2.JPG"
            alt="Nhà máy sản xuất và đóng gói bằng dây đai thép"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src="/images/day-dai-3.JPG"
            alt="Dây đai thép trên xe tải giao hàng"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}

