import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/landing/Section";
import {
  shippingHighlights,
  shippingShowcaseImages,
} from "@/data/shipping-showcase";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  /** Trang chủ: bọc Section; giới thiệu: nhúng trong article */
  variant?: "section" | "embedded";
  className?: string;
};

function ShowcaseContent({ showCta = true }: { showCta?: boolean }) {
  const [hero, secondary, tertiary] = shippingShowcaseImages;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-10">
      <div className="max-w-xl lg:sticky lg:top-24">
        <p className="eyebrow">Năng lực xuất kho</p>
        <h2
          id="bulk-shipping-heading"
          className="mt-3 text-balance font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl md:text-[2rem] md:leading-tight"
        >
          Xuất hàng số lượng lớn — đúng quy cách, đúng lịch giao
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          Khách hàng nhà máy và logistics thường đặt theo lô: hàng chục cuộn
          dây đai thép, kèm khóa đai và bộ dụng cụ siết. Chúng tôi đóng kiện,
          pallet hóa và bàn giao xe tải hoặc chành theo ca vận hành — không
          để kho của bạn phải chờ lâu.
        </p>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Mỗi lô xuất đều kiểm tra nhãn quy cách, số cuộn và tình trạng đóng
          gói trước khi lên xe. Bạn nhận hàng đúng bản dây, đúng số lượng để
          triển khai ngay trên chuyền.
        </p>

        <dl className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {shippingHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border/70 bg-white/70 px-3.5 py-3 shadow-[0_10px_24px_-18px_rgba(22,67,126,0.45)]"
            >
              <dt className="font-display text-lg font-semibold tabular-nums text-primary">
                {item.value}
              </dt>
              <dd className="mt-1 text-xs leading-5 text-muted-foreground">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>

        {showCta ? (
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/lien-he"
              className="btn-lift inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_-16px_rgba(22,67,126,0.85)]"
            >
              Trao đổi lô hàng lớn
            </Link>
            <Link
              href="/gioi-thieu"
              className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
            >
              Xem thêm về chúng tôi
            </Link>
          </div>
        ) : (
          <p className="mt-6">
            <Link
              href="/lien-he"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Liên hệ báo giá lô hàng lớn →
            </Link>
          </p>
        )}
      </div>

      <div className="grid grid-cols-6 gap-3 sm:gap-4">
        <figure className="group relative col-span-6 overflow-hidden rounded-2xl border border-border/70 bg-muted/30 shadow-[0_20px_44px_-26px_rgba(22,67,126,0.5)] sm:col-span-4 sm:row-span-2">
          <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[22rem] lg:min-h-[26rem]">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,62,0.55)] via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-3 text-xs font-medium text-white/95 sm:text-sm">
              {hero.caption}
            </figcaption>
          </div>
        </figure>

        <figure className="group relative col-span-6 overflow-hidden rounded-xl border border-border/70 bg-muted/30 shadow-[0_14px_32px_-22px_rgba(22,67,126,0.45)] sm:col-span-2">
          <div className="relative aspect-[4/3] sm:aspect-[3/4] sm:min-h-[10.5rem]">
            <Image
              src={secondary.src}
              alt={secondary.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 640px) 18vw, 100vw"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 py-2.5 text-[10px] font-medium leading-snug text-white sm:text-[11px]">
              {secondary.caption}
            </figcaption>
          </div>
        </figure>

        <figure className="group relative col-span-6 overflow-hidden rounded-xl border border-border/70 bg-muted/30 shadow-[0_14px_32px_-22px_rgba(22,67,126,0.45)] sm:col-span-2 sm:col-start-5">
          <div className="relative aspect-[16/10] sm:aspect-[4/3]">
            <Image
              src={tertiary.src}
              alt={tertiary.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 640px) 18vw, 100vw"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 py-2.5 text-[10px] font-medium leading-snug text-white sm:text-[11px]">
              {tertiary.caption}
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
}

export function BulkShippingShowcase({
  id = "bulk-shipping",
  variant = "section",
  className,
}: Props) {
  if (variant === "embedded") {
    return (
      <section
        id={id}
        aria-labelledby="bulk-shipping-heading"
        className={cn("scroll-mt-20", className)}
      >
        <ShowcaseContent showCta={false} />
      </section>
    );
  }

  return (
    <Section id={id} className={cn("bg-muted/25", className)}>
      <ShowcaseContent />
    </Section>
  );
}
