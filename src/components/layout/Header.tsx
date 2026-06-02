"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { ContactPhoneCta } from "@/components/contact/ContactPhoneCta";
import { Logo } from "@/components/brand/Logo";
import { CartIcon } from "@/components/cart/CartIcon";
import { CartDrawer } from "@/components/cart/CartDrawer";

export function Header() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => setCartOpen(true);
    window.addEventListener("open-cart", handler as EventListener);
    return () => window.removeEventListener("open-cart", handler as EventListener);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
        <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-4 sm:h-16 lg:px-6">
          <Logo compact className="max-w-[10.5rem] min-[380px]:max-w-[12rem] sm:max-w-xs" />

          <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <CartIcon onClick={() => setCartOpen(true)} />
            <ContactPhoneCta variant="header" className="hidden lg:inline-flex" />

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-white/80 text-foreground shadow-sm md:hidden"
              aria-label={open ? "Đóng menu" : "Mở menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open ? (
          <>
            <button
              type="button"
              className="fixed inset-0 top-14 z-40 bg-black/30 md:hidden"
              aria-label="Đóng menu"
              onClick={() => setOpen(false)}
            />
            <div className="fixed inset-x-0 top-14 z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-border/50 bg-background/98 shadow-lg md:hidden">
              <nav className="container mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
                <a
                  href={`tel:${siteConfig.company.zaloPhone}`}
                  className="btn-lift mb-2 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
                  onClick={() => setOpen(false)}
                >
                  Liên hệ ngay {siteConfig.company.phone}
                </a>
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </>
        ) : null}
      </header>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
