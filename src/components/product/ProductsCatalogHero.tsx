import Link from "next/link";
import { ContactCtaLabel } from "@/components/contact/ContactCtaLabel";
import { PhoneIcon, ZaloIcon } from "@/components/contact/ContactIcons";
import { siteConfig } from "@/config/site";

const PHONE_TEL = `tel:${siteConfig.company.zaloPhone}`;
const ZALO_URL = `https://zalo.me/${siteConfig.company.zaloPhone}`;

const TRUST_CHIPS = ["Có sẵn kho", "Giao toàn quốc", "Báo giá trong ngày"] as const;

export function ProductsCatalogHero() {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.08] via-white to-primary/[0.04] px-4 py-5 shadow-[0_18px_40px_-28px_rgba(22,67,126,0.35)] sm:px-6 sm:py-6">
      <p className="eyebrow text-[10px] sm:text-[11px]">
        {siteConfig.name} · {siteConfig.domain}
      </p>
      <h1 className="mt-2 text-balance font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-2xl md:text-3xl">
        Sản phẩm đóng đai: dây đai thép, khóa đai & dụng cụ
      </h1>
      <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
        Báo giá theo số lượng, tư vấn quy cách 16/19/32mm miễn phí cho nhà máy,
        kho và logistics.
      </p>

      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Cam kết dịch vụ">
        {TRUST_CHIPS.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-primary/20 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-primary sm:text-xs"
          >
            {chip}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <a
          href={PHONE_TEL}
          className="btn-lift inline-flex flex-1 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_28px_-16px_rgba(22,67,126,0.9)] sm:flex-none sm:px-5"
        >
          <ContactCtaLabel icon={<PhoneIcon className="h-4 w-4" />}>
            <span className="sm:hidden">Gọi ngay</span>
            <span className="hidden sm:inline">Gọi ngay {siteConfig.company.phone}</span>
          </ContactCtaLabel>
        </a>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lift inline-flex flex-1 items-center justify-center rounded-xl border border-[#0068FF]/30 bg-white px-4 py-2.5 text-sm font-semibold text-[#0058d6] shadow-sm hover:border-[#0068FF]/45 sm:flex-none sm:px-5"
        >
          <ContactCtaLabel variant="zalo" icon={<ZaloIcon className="h-5 w-5" />}>
            Chat Zalo
          </ContactCtaLabel>
        </a>
        <Link
          href="/lien-he"
          className="btn-lift hidden items-center justify-center rounded-xl border border-border bg-white/90 px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted/60 md:inline-flex"
        >
          Gửi form báo giá
        </Link>
      </div>
    </header>
  );
}
