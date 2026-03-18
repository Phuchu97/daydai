"use client";

import { useEffect, useState } from "react";
import { selectCartCount, useCartStore } from "@/store/cartStore";

type Props = {
  onClick: () => void;
};

export function CartIcon({ onClick }: Props) {
  const count = useCartStore(selectCartCount);
  const lastAddedAt = useCartStore((s) => s.lastAddedAt);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    if (!lastAddedAt) return;
    setBump(true);
    const timer = setTimeout(() => setBump(false), 400);
    return () => clearTimeout(timer);
  }, [lastAddedAt]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted ${
        bump ? "scale-105 shadow-md shadow-primary/40" : ""
      }`}
      aria-label="Giỏ hàng"
    >
      <span className="mr-1">🛒</span>
      {count > 0 && (
        <span className="ml-1 inline-flex min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold text-primary-foreground">
          {count}
        </span>
      )}
    </button>
  );
}

