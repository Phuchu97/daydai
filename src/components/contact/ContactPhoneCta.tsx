import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { PhoneIcon } from "./ContactIcons";

const PHONE_TEL = `tel:${siteConfig.company.zaloPhone}`;

type ContactPhoneCtaProps = {
  variant?: "price" | "header";
  className?: string;
};

export function ContactPhoneCta({
  variant = "price",
  className,
}: ContactPhoneCtaProps) {
  if (variant === "header") {
    return (
      <Link
        href={PHONE_TEL}
        className={cn(
          "btn-lift contact-cta-shine hidden items-center gap-2.5 rounded-xl bg-primary px-3.5 py-2 text-primary-foreground shadow-[0_16px_30px_-18px_rgba(22,67,126,0.85)] sm:inline-flex lg:px-4",
          className
        )}
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
          <PhoneIcon className="h-4 w-4" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-primary-foreground/90">
            Liên hệ ngay
          </span>
          <span className="text-sm font-bold tracking-tight tabular-nums">
            {siteConfig.company.phone}
          </span>
        </span>
      </Link>
    );
  }

  return (
    <a
      href={PHONE_TEL}
      className={cn(
        "contact-price-cta group relative block overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/[0.12] via-white to-primary/[0.04] p-4 shadow-[0_20px_44px_-28px_rgba(22,67,126,0.55)] transition hover:border-primary/50 hover:shadow-[0_24px_48px_-24px_rgba(22,67,126,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        className
      )}
    >
      <span
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/15"
        aria-hidden
      />
      <div className="relative flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_12px_24px_-14px_rgba(22,67,126,0.9)]">
          <PhoneIcon className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80">
            Báo giá theo số lượng
          </p>
          <p className="mt-0.5 text-base font-semibold text-foreground">
            Liên hệ ngay
          </p>
          <p className="mt-1 font-display text-2xl font-bold tracking-tight text-primary tabular-nums sm:text-[1.65rem]">
            {siteConfig.company.phone}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Gọi hoặc nhắn Zalo để nhận báo giá nhanh trong ngày.
          </p>
        </div>
      </div>
    </a>
  );
}
