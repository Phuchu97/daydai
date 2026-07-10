"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { ContactPhoneCta } from "@/components/contact/ContactPhoneCta";
import { Logo } from "@/components/brand/Logo";
import { CartIcon } from "@/components/cart/CartIcon";
import { CartDrawer } from "@/components/cart/CartDrawer";
import {
  NAV_DESKTOP_BREAKPOINT_PX,
  NavDrawer,
} from "@/components/layout/NavDrawer";

export function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => setCartOpen(true);
    window.addEventListener("open-cart", handler as EventListener);
    return () => window.removeEventListener("open-cart", handler as EventListener);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= NAV_DESKTOP_BREAKPOINT_PX) setNavOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };
    if (navOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navOpen]);

  return (
    <>
      <header className="relative w-full border-b border-border/50 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
        <div className="site-container flex h-14 items-center justify-between gap-2 sm:h-16">
          <Logo compact className="max-w-[9.5rem] min-[380px]:max-w-[11rem] sm:max-w-xs" />

          <nav
            className="hidden xl:flex xl:items-center xl:gap-6"
            aria-label="Điều hướng chính"
          >
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

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <CartIcon onClick={() => setCartOpen(true)} />
            <ContactPhoneCta variant="header" className="hidden xl:inline-flex" />

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-white/80 text-foreground shadow-sm xl:hidden"
              aria-label={navOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={navOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setNavOpen((value) => !value)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                {navOpen ? (
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
      </header>

      <NavDrawer open={navOpen} onClose={() => setNavOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
