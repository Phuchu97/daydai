"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/brand/Logo";
import { ContactCtaLabel } from "@/components/contact/ContactCtaLabel";
import { PhoneIcon } from "@/components/contact/ContactIcons";
import { CTA_SHINE } from "@/lib/cta-attention";
import { cn } from "@/lib/utils";

/** Desktop inline nav from Tailwind `xl` (1280px). */
export const NAV_DESKTOP_BREAKPOINT_PX = 1280;

type NavDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function NavDrawer({ open, onClose }: NavDrawerProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      setActive(false);
      const timeout = window.setTimeout(() => setVisible(false), 300);
      return () => window.clearTimeout(timeout);
    }

    setVisible(true);
    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setActive(true));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!mounted || !visible) return null;

  return createPortal(
    <div className="xl:hidden" role="presentation">
      <button
        type="button"
        className={cn(
          "fixed inset-0 z-[100] bg-foreground/20 backdrop-blur-[1px] transition-opacity duration-300 motion-reduce:transition-none",
          active ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-label="Đóng menu"
        onClick={onClose}
      />
      <aside
        id="mobile-nav-panel"
        className={cn(
          "nav-drawer-panel fixed inset-y-0 right-0 z-[101] flex flex-col border-l border-border/80 bg-background shadow-[-16px_0_48px_-20px_rgba(25,61,112,0.35)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          active ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu điều hướng"
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-border/60 px-4 sm:h-16">
          <Logo compact className="max-w-[9.5rem] sm:max-w-xs" />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-muted/60 text-foreground"
            aria-label="Đóng menu"
            onClick={onClose}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <a
            href={`tel:${siteConfig.company.zaloPhone}`}
            className={cn(
              "btn-lift relative z-[2] mb-3 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground",
              CTA_SHINE,
            )}
            onClick={onClose}
          >
            <ContactCtaLabel icon={<PhoneIcon className="h-4 w-4" />}>
              Liên hệ ngay {siteConfig.company.phone}
            </ContactCtaLabel>
          </a>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted/80"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>,
    document.body,
  );
}
