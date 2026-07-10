import Image from "next/image";
import { Section } from "../Section";

export function RealUsageSection() {
  return (
    <Section id="real-usage">
      <div className="section-intro">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Ứng dụng thực tế tại kho và nhà máy
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Dây đai thép và bộ dụng cụ đóng đai đang được sử dụng mỗi ngày để cố
          định pallet, cuộn thép, ống thép và máy móc trong quá trình bốc xếp
          và vận chuyển.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src="/images/day-dai-thep-32-chat-luong.jpg"
            alt="Dây đai thép tại kho công nghiệp"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src="/images/day-dai-4.jpg"
            alt="Dây đai thép tại kho khách hàng"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src="/images/lo-day-dai-thep-giao-cho-khach-hang.jpg"
            alt="Lô dây đai thép chuẩn bị giao cho khách hàng"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}

