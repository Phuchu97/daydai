"use client";

import { siteConfig } from "@/config/site";
import { ChatIcon, PhoneIcon } from "@/components/contact/ContactIcons";
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
      {/* Mobile: compact icon buttons (no wide panel) */}
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
            "contact-cta-shine inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground",
            "shadow-[0_14px_28px_-12px_rgba(22,67,126,0.9)] transition active:scale-[0.97]"
          )}
          aria-label={`Gọi ngay ${siteConfig.company.phone}`}
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0068FF] text-white",
            "shadow-[0_12px_24px_-12px_rgba(0,104,255,0.75)] transition active:scale-[0.97]"
          )}
          aria-label="Chat Zalo nhắn báo giá"
        >
          <ChatIcon className="h-5 w-5" />
        </a>
      </div>

      {/* Desktop: full support panel */}
      <div
        className="fixed bottom-6 right-6 z-30 hidden md:block"
        aria-label="Liên hệ nhanh"
      >
        <div className="sticky-contact-panel w-[15.5rem] overflow-hidden rounded-2xl border border-border/80 bg-white/95 p-1.5 shadow-[0_22px_50px_-24px_rgba(22,67,126,0.55)] backdrop-blur-md">
          <p className="px-2.5 pb-1.5 pt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Hỗ trợ nhanh
          </p>

          <a
            href={PHONE_TEL}
            className={cn(
              "contact-cta-shine group flex w-full items-center gap-3 rounded-xl bg-primary px-3 py-2.5 text-primary-foreground",
              "shadow-[0_14px_28px_-16px_rgba(22,67,126,0.95)] transition hover:brightness-105 active:scale-[0.98]"
            )}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20">
              <PhoneIcon className="h-[18px] w-[18px]" />
            </span>
            <span className="min-w-0 flex-1 leading-tight">
              <span className="block text-xs font-semibold uppercase tracking-wide text-primary-foreground/90">
                Gọi ngay
              </span>
              <span className="block truncate font-display text-sm font-bold tabular-nums">
                {siteConfig.company.phone}
              </span>
            </span>
          </a>

          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-1.5 flex w-full items-center gap-3 rounded-xl border border-[#0068FF]/25 bg-gradient-to-r from-[#0068FF]/[0.07] to-white px-3 py-2.5",
              "text-[#0058d6] shadow-sm transition hover:border-[#0068FF]/40 hover:from-[#0068FF]/[0.12] active:scale-[0.98]"
            )}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0068FF] text-white shadow-[0_10px_20px_-12px_rgba(0,104,255,0.8)]">
              <ChatIcon className="h-[18px] w-[18px]" />
            </span>
            <span className="min-w-0 flex-1 leading-tight">
              <span className="block text-xs font-semibold uppercase tracking-wide text-[#0068FF]/80">
                Chat Zalo
              </span>
              <span className="block text-sm font-semibold text-foreground">
                Nhắn báo giá ngay
              </span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
