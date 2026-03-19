"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/data/products";

type Props = {
  images: ProductImage[];
};

export function ProductGallery({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          sizes="(min-width: 1024px) 480px, 100vw"
          priority
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {images.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-square overflow-hidden rounded-lg border ${
              index === activeIndex
                ? "border-primary ring-2 ring-primary/40"
                : "border-border"
            }`}
            aria-label={`Xem hình ${index + 1}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="96px"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

