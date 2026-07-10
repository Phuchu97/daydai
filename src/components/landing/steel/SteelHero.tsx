import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ContactCtaLabel } from "@/components/contact/ContactCtaLabel";
import { PhoneIcon, QuoteIcon, ZaloIcon } from "@/components/contact/ContactIcons";
import { Section } from "../Section";

const PHONE = siteConfig.company.phone;
const PHONE_TEL = `tel:${siteConfig.company.zaloPhone}`;
const ZALO_URL = `https://zalo.me/${siteConfig.company.zaloPhone}`;

export function SteelHero() {
  return (
    <Section
      id="hero"
      className="relative overflow-x-clip pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24 md:pt-16"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-[22rem] bg-[radial-gradient(circle_at_top,hsl(214_72%_86%_/_0.56),transparent_66%)]" />
      <div className="relative grid min-w-0 gap-8 md:grid-cols-[minmax(0,1.25fr),minmax(0,1fr)] md:items-center md:gap-10">
        <div className="min-w-0">
          <p className="eyebrow mb-3 inline-flex max-w-full flex-wrap rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] sm:mb-4 sm:px-3 sm:py-1.5 sm:text-[11px]">
            {siteConfig.name} · {siteConfig.domain}
          </p>
          <h1 className="text-balance font-display text-[1.65rem] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl sm:leading-[1.05] md:text-5xl lg:text-6xl">
            Dây đai thép công nghiệp – Siết chặt hàng hóa, vận chuyển an toàn
          </h1>
          <p className="mt-5 max-w-[65ch] text-sm leading-7 text-muted-foreground sm:text-base">
            {siteConfig.tagline}. Hàng luôn có sẵn, giao nhanh toàn quốc, hỗ trợ
            kỹ thuật tận nơi.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-foreground/90 md:grid-cols-2">
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

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <Link
              href="/lien-he"
              className="btn-lift inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_32px_-18px_rgba(25,61,112,0.85)] sm:w-auto"
            >
              <ContactCtaLabel icon={<QuoteIcon className="h-4 w-4" />}>
                Nhận báo giá ngay
              </ContactCtaLabel>
            </Link>
            <a
              href={PHONE_TEL}
              className="btn-lift inline-flex w-full items-center justify-center rounded-xl border border-border bg-white/80 px-4 py-3 text-sm font-semibold text-foreground backdrop-blur sm:w-auto"
            >
              <ContactCtaLabel icon={<PhoneIcon className="h-4 w-4" />}>
                <span className="sm:hidden">Gọi ngay</span>
                <span className="hidden sm:inline">Gọi ngay {PHONE}</span>
              </ContactCtaLabel>
            </a>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift inline-flex w-full items-center justify-center rounded-xl border border-primary/25 bg-primary/8 px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/15 sm:w-auto"
            >
              <ContactCtaLabel
                variant="zalo"
                icon={<ZaloIcon className="h-5 w-5" />}
              >
                Chat Zalo
              </ContactCtaLabel>
            </a>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Đáp ứng tốt cho: chủ nhà máy, quản lý kho, đơn vị logistics, công
            ty xây dựng và đóng gói công nghiệp.
          </p>
        </div>

        <div className="relative min-w-0">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-primary/15 blur-2xl" />
          <div className="surface-card overflow-hidden rounded-3xl">
            <div className="grid grid-cols-2 gap-px bg-border/60">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/day-dai-1.jpg"
                  alt="Cuộn dây đai thép trong kho"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/day-dai-2.jpg"
                  alt="Dây đai thép đóng gói pallet"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/day-dai-3.jpg"
                  alt="Kho dây đai thép"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/day-dai-4.jpg"
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
