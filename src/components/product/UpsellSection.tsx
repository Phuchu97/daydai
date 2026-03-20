 "use client";

import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { catalogProducts } from "@/data/products";

const STRAPPING_SALE_PRICE_PER_KG = 25000;

export function UpsellSection() {
  const addToCart = useCartStore((s) => s.addToCart);
  const items = catalogProducts.filter((p) => p.showInUpsell);

  return (
    <section className="border-t border-border bg-background py-10">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">
          Khách hàng thường mua kèm
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-muted/40 shadow-sm"
            >
              <div className="relative aspect-video">
                <Image
                  src={item.images[0]?.src}
                  alt={item.images[0]?.alt ?? item.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 240px, 100vw"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.upsellDescription ?? item.shortDescription}
                </p>
                <p className="mt-2 text-sm font-semibold text-secondary">
                  {item.id === "steel-strapping"
                    ? `${STRAPPING_SALE_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg`
                    : item.priceLabel ??
                      (item.salePrice ?? item.basePrice ?? 0
                        ? `${(item.salePrice ?? item.basePrice ?? 0).toLocaleString(
                            "vi-VN",
                          )}đ`
                        : "Liên hệ")}
                </p>
                <button
                  type="button"
                  className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price:
                        item.id === "steel-strapping"
                          ? STRAPPING_SALE_PRICE_PER_KG
                          : (item.salePrice ?? item.basePrice ?? 0),
                      image: item.images[0]?.src,
                      variant:
                        item.id === "steel-strapping"
                          ? "Thêm nhanh 1kg (chọn lại kg trong trang chi tiết)"
                          : undefined,
                    })
                  }
                >
                  {item.id === "steel-strapping"
                    ? "Thêm nhanh 1kg"
                    : "Thêm vào giỏ"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

