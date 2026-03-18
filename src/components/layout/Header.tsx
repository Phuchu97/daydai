"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { CartIcon } from "@/components/cart/CartIcon";
import { CartDrawer } from "@/components/cart/CartDrawer";

export function Header() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  // Lắng nghe sự kiện mở giỏ hàng từ các nút "Mua ngay"
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => setCartOpen(true);
    window.addEventListener("open-cart", handler as EventListener);
    return () => window.removeEventListener("open-cart", handler as EventListener);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight"
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <CartIcon onClick={() => setCartOpen(true)} />
            <Link
              href="#contact"
              className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Liên hệ
            </Link>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md md:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Menu</span>
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

        {open && (
          <div className="border-t border-border/40 bg-background md:hidden">
            <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
