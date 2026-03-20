"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";

const STRAPPING_SALE_PRICE_PER_KG = 25000;

export function StickyAddToCartBar() {
  const [visible, setVisible] = useState(false);
  const addToCart = useCartStore((s) => s.addToCart);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const handleAdd = () => {
    addToCart(
      {
        id: "steel-strapping",
        name: "Dây đai thép công nghiệp chịu lực cao",
        price: STRAPPING_SALE_PRICE_PER_KG,
        image: "/images/day-dai-2.JPG",
        variant: "Thêm nhanh 1kg (chọn lại kg trong phần tùy chọn)",
      },
      1,
    );
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 shadow-[0_-4px_12px_rgba(15,23,42,0.18)] backdrop-blur">
      <div className="container mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-md border border-border bg-muted">
            <Image
              src="/images/day-dai-2.JPG"
              alt="Dây đai thép công nghiệp"
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="hidden flex-col text-xs sm:flex">
            <p className="line-clamp-1 font-medium text-foreground">
              Dây đai thép công nghiệp chịu lực cao
            </p>
            <p className="mt-0.5 font-semibold text-secondary">
              {STRAPPING_SALE_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="ml-auto inline-flex flex-1 items-center justify-center rounded-md bg-secondary px-4 py-2.5 text-xs font-semibold text-secondary-foreground shadow-md shadow-secondary/40 transition hover:opacity-90 sm:text-sm"
        >
          Thêm nhanh 1kg
        </button>
      </div>
    </div>
  );
}

