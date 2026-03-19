import Image from "next/image";
import Link from "next/link";
import { Section } from "../Section";

const PHONE = "0339689386";
const ZALO_URL = `https://zalo.me/${PHONE}`;

export function SteelHero() {
  return (
    <Section
      id="hero"
      className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pb-20 pt-10 md:pt-16"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-center">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700/80">
            Giải pháp đóng gói an toàn cho nhà máy & logistics
          </p>
          <h1 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Dây đai thép công nghiệp – Siết chặt hàng hóa, vận chuyển an toàn
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-200 sm:text-base">
            Chuyên cung cấp dây đai thép và bộ dụng cụ đóng đai cho nhà máy,
            kho bãi, logistics và xây dựng. Hàng luôn có sẵn, giao nhanh toàn
            quốc, hỗ trợ kỹ thuật tận nơi.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-5 w-5 flex-none rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/40 flex items-center justify-center text-xs">
                ✓
              </span>
              <span>Chịu lực cao, chống trượt khi siết hàng nặng</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-5 w-5 flex-none rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/40 flex items-center justify-center text-xs">
                ✓
              </span>
              <span>Phù hợp pallet thép, gỗ, coil, ống, máy móc</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-5 w-5 flex-none rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/40 flex items-center justify-center text-xs">
                ✓
              </span>
              <span>Hỗ trợ tư vấn setup quy trình đóng gói tối ưu</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex rounded-md bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/40 transition hover:opacity-90"
            >
              Nhận báo giá ngay
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
            >
              Gọi ngay {PHONE}
            </a>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md border border-sky-400/60 bg-sky-500/10 px-4 py-3 text-sm font-semibold text-sky-200 hover:bg-sky-500/20"
            >
              Chat Zalo
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-300">
            Đáp ứng tốt cho: chủ nhà máy, quản lý kho, đơn vị logistics, công
            ty xây dựng và đóng gói công nghiệp.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-sky-500/10 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/80 shadow-2xl">
            <div className="grid grid-cols-2 gap-px bg-slate-800/80">
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

