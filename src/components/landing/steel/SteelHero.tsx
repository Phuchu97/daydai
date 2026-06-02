import Image from "next/image";
import Link from "next/link";
import { Section } from "../Section";

const PHONE = "0339689386";
const ZALO_URL = `https://zalo.me/${PHONE}`;

export function SteelHero() {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden pb-24 pt-10 md:pt-16"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-[22rem] bg-[radial-gradient(circle_at_top,hsl(214_72%_86%_/_0.56),transparent_66%)]" />
      <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.25fr),minmax(0,1fr)] md:items-center">
        <div>
          <p className="eyebrow mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5">
            Giải pháp đóng gói an toàn cho nhà máy & logistics
          </p>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
            Dây đai thép công nghiệp – Siết chặt hàng hóa, vận chuyển an toàn
          </h1>
          <p className="mt-5 max-w-[65ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Chuyên cung cấp dây đai thép và bộ dụng cụ đóng đai cho nhà máy,
            kho bãi, logistics và xây dựng. Hàng luôn có sẵn, giao nhanh toàn
            quốc, hỗ trợ kỹ thuật tận nơi.
          </p>
          <ul className="mt-7 grid gap-3 text-sm text-foreground/90 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30 text-xs">
                ✓
              </span>
              <span>Chịu lực cao, chống trượt khi siết hàng nặng</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30 text-xs">
                ✓
              </span>
              <span>Phù hợp pallet thép, gỗ, coil, ống, máy móc</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30 text-xs">
                ✓
              </span>
              <span>Hỗ trợ tư vấn setup quy trình đóng gói tối ưu</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="btn-lift inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_32px_-18px_rgba(25,61,112,0.85)]"
            >
              Nhận báo giá ngay
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="btn-lift inline-flex rounded-xl border border-border bg-white/80 px-4 py-3 text-sm font-semibold text-foreground backdrop-blur"
            >
              Gọi ngay {PHONE}
            </a>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift inline-flex rounded-xl border border-primary/25 bg-primary/8 px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/15"
            >
              Chat Zalo
            </a>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Đáp ứng tốt cho: chủ nhà máy, quản lý kho, đơn vị logistics, công
            ty xây dựng và đóng gói công nghiệp.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-primary/15 blur-2xl" />
          <div className="surface-card overflow-hidden rounded-3xl">
            <div className="grid grid-cols-2 gap-px bg-border/60">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/day-dai-1.JPG"
                  alt="Cuộn dây đai thép trong kho"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/day-dai-2.JPG"
                  alt="Dây đai thép đóng gói pallet"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/day-dai-3.JPG"
                  alt="Kho dây đai thép"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/day-dai-4.JPG"
                  alt="Dây đai thép trên xe tải"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

