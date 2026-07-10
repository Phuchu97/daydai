"use client";

import { siteConfig } from "@/config/site";
import { ContactCtaLabel } from "@/components/contact/ContactCtaLabel";
import { PhoneIcon, ZaloIcon } from "@/components/contact/ContactIcons";
import { CTA_BELL, CTA_BELL_ZALO, CTA_SHINE } from "@/lib/cta-attention";
import { cn } from "@/lib/utils";

const PHONE_TEL = `tel:${siteConfig.company.zaloPhone}`;
const ZALO_URL = `https://zalo.me/${siteConfig.company.zaloPhone}`;

type StickyContactsProps = {
  /** Reserve space above a bottom sticky bar (e.g. homepage quick-add cart). */
  stackAboveCartBar?: boolean;
};

export function StickyContacts({
  stackAboveCartBar = true,
}: StickyContactsProps) {
  const mobileBottomClass = stackAboveCartBar
    ? "bottom-[calc(5.5rem+env(safe-area-inset-bottom))]"
    : "bottom-[calc(1rem+env(safe-area-inset-bottom))]";

  return (
    <>
      <div
        className={cn(
          "fixed right-3 z-30 flex flex-col gap-2 md:hidden",
          mobileBottomClass
        )}
        aria-label="Liên hệ nhanh"
      >
        <a
          href={PHONE_TEL}
          className={cn(
            "btn-lift inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground",
            "shadow-[0_14px_28px_-12px_rgba(22,67,126,0.9)] transition active:scale-[0.97]"
          )}
          aria-label={`Gọi ngay ${siteConfig.company.phone}`}
        >
          <span className={CTA_BELL}>
            <PhoneIcon className="h-5 w-5" />
          </span>
        </a>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "btn-lift inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0068FF] text-white",
            "shadow-[0_12px_24px_-12px_rgba(0,104,255,0.75)] transition active:scale-[0.97]"
          )}
          aria-label="Chat Zalo nhắn báo giá"
        >
          <span className={CTA_BELL_ZALO}>
            <ZaloIcon className="h-5 w-5" />
          </span>
        </a>
      </div>

      <div
        className="fixed bottom-6 right-6 z-30 hidden md:block"
        aria-label="Liên hệ nhanh"
      >
        <div className="sticky-contact-panel w-fit overflow-visible rounded-2xl border border-border/80 bg-white/95 p-2 shadow-[0_22px_50px_-24px_rgba(22,67,126,0.55)] backdrop-blur-md">
          <p className="mb-2 px-0.5 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Hỗ trợ nhanh
          </p>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={PHONE_TEL}
              title={`Gọi ngay ${siteConfig.company.phone}`}
              className={cn(
                "btn-lift group relative z-[2] flex aspect-square w-20 flex-col items-center justify-center gap-1.5 rounded-xl bg-primary p-2 text-primary-foreground",
                "shadow-[0_14px_28px_-16px_rgba(22,67,126,0.95)] transition hover:brightness-105 active:scale-[0.98]",
                CTA_SHINE
              )}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-visible rounded-lg bg-white/15 ring-1 ring-white/20">
                <span className={CTA_BELL}>
                  <PhoneIcon className="h-[17px] w-[17px]" />
                </span>
              </span>
              <span className="text-center leading-none">
                <span className="block text-[9px] font-semibold uppercase tracking-wide text-primary-foreground/90">
                  Gọi ngay
                </span>
                <span className="mt-0.5 block font-display text-[10px] font-bold tabular-nums">
                  {siteConfig.company.phone}
                </span>
              </span>
            </a>

            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat Zalo nhắn báo giá"
              className={cn(
                "btn-lift flex aspect-square w-20 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#0068FF]/25",
                "bg-gradient-to-b from-[#0068FF]/[0.08] to-white p-2 text-[#0058d6] shadow-sm transition",
                "hover:border-[#0068FF]/40 hover:from-[#0068FF]/[0.14] active:scale-[0.98]"
              )}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-visible rounded-lg bg-[#0068FF] text-white shadow-[0_10px_20px_-12px_rgba(0,104,255,0.8)]">
                <span className={CTA_BELL_ZALO}>
                  <ZaloIcon className="h-[17px] w-[17px]" />
                </span>
              </span>
              <span className="text-center leading-none">
                <span className="block text-[9px] font-semibold uppercase tracking-wide text-[#0068FF]/85">
                  Chat Zalo
                </span>
                <span className="mt-0.5 block text-[10px] font-semibold leading-tight text-foreground">
                  Báo giá
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
