"use client";

import { useState } from "react";
import { CTA_BELL, CTA_SHINE } from "@/lib/cta-attention";
import { cn } from "@/lib/utils";

type Props = {
  onAddToCart: () => void;
  onBuyNow: () => void;
};

function CartPlusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-[1.125rem] w-[1.125rem] shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="9" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <path d="M3 4h2l2.2 11.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L20 7H7" />
      <path d="M12 8v6M9.5 10.5H14.5" />
    </svg>
  );
}

function BoltCheckoutIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-[1.125rem] w-[1.125rem] shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-[1.125rem] w-[1.125rem] shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const trustPoints = ["COD", "Giao nhanh", "Hóa đơn VAT"] as const;

export function ProductPurchaseActions({
  onAddToCart,
  onBuyNow,
}: Props) {
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart();
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 2200);
  };

  return (
    <div
      className={cn(
        "purchase-action-zone space-y-3 rounded-2xl border border-primary/15 p-3.5 sm:p-4",
        "shadow-[inset_0_1px_0_rgb(255_255_255/0.65)]",
      )}
      role="group"
      aria-label="Thao tác mua hàng"
    >
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
        <button
          type="button"
          onClick={onBuyNow}
          className={cn(
            CTA_SHINE,
            "purchase-cta-primary btn-lift",
            "relative z-0 order-1 flex min-h-[3.25rem] w-full items-center justify-center gap-2.5 overflow-hidden",
            "rounded-xl px-4 py-3 sm:order-2 sm:min-h-[3.5rem]",
            "bg-gradient-to-b from-primary to-[hsl(214_68%_36%)] text-primary-foreground",
            "text-sm font-semibold leading-tight sm:text-[0.9375rem]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
            "motion-reduce:animate-none",
          )}
        >
          <span className={cn(CTA_BELL, "shrink-0 text-primary-foreground")}>
            <BoltCheckoutIcon />
          </span>
          <span className="relative z-[1] flex flex-col items-start gap-0.5 text-left">
            <span className="text-[0.9375rem] font-bold tracking-tight sm:text-base">
              Mua ngay
            </span>
            <span className="text-[10px] font-medium text-primary-foreground/80 sm:text-[11px]">
              Mở giỏ &amp; xem đơn ngay
            </span>
          </span>
        </button>

        <button
          type="button"
          onClick={handleAddToCart}
          aria-live="polite"
          className={cn(
            "btn-lift order-2 flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 sm:order-1",
            "text-sm font-semibold leading-none transition-colors duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2",
            justAdded
              ? "border border-emerald-500/40 bg-emerald-500/10 text-emerald-700"
              : "border-2 border-primary/25 bg-background text-foreground hover:border-primary/45 hover:bg-primary/[0.06]",
          )}
        >
          {justAdded ? (
            <>
              <CheckIcon className="text-emerald-600" />
              <span>Đã thêm vào giỏ</span>
            </>
          ) : (
            <>
              <CartPlusIcon className="text-primary" />
              <span>Thêm vào giỏ hàng</span>
            </>
          )}
        </button>
      </div>

      <ul
        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-start"
        aria-label="Cam kết khi mua"
      >
        {trustPoints.map((point) => (
          <li
            key={point}
            className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground"
          >
            <span
              className="h-1 w-1 shrink-0 rounded-full bg-primary/70"
              aria-hidden
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
