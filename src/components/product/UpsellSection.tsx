"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useCartStore } from "@/store/cartStore";
import { catalogProducts } from "@/data/products";
import { cn } from "@/lib/utils";

import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";
const PHONE_TEL = `tel:${siteConfig.company.zaloPhone}`;

type Props = {
  /** Ẩn sản phẩm đang xem (tránh trùng trong mục mua kèm). */
  excludeProductId?: string;
};

function UpsellPrice({ productId, priceLabel, salePrice, basePrice }: {
  productId: string;
  priceLabel?: string;
  salePrice?: number;
  basePrice?: number;
}) {
  if (priceLabel) {
    return (
      <p className="text-sm font-semibold text-primary">{priceLabel}</p>
    );
  }
  if (productId === "steel-strapping") {
    return (
      <p className="text-sm font-semibold text-secondary">
        {STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg
      </p>
    );
  }
  const price = salePrice ?? basePrice ?? 0;
  return (
    <p className="text-sm font-semibold text-secondary">
      {price.toLocaleString("vi-VN")}đ
    </p>
  );
}

export function UpsellSection({ excludeProductId }: Props) {
  const addToCart = useCartStore((s) => s.addToCart);
  const items = catalogProducts.filter(
    (p) => p.showInUpsell && p.id !== excludeProductId,
  );

  if (items.length === 0) return null;

  return (
    <section className="border-t border-border bg-background py-10">
      <div className="container mx-auto w-full max-w-5xl px-4">
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">
          Khách hàng thường mua kèm
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Bấm thẻ hoặc &quot;Xem chi tiết&quot; để xem quy cách đầy đủ.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {items.map((item) => {
            const isContactOnly = Boolean(item.priceLabel);
            const isStrapping = item.id === "steel-strapping";

            return (
              <article
                key={item.id}
                className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition hover:border-primary/20 hover:shadow-md"
              >
                <Link
                  href={item.slug}
                  className="group block shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={item.images[0]?.src ?? siteConfig.ogImage}
                      alt={item.images[0]?.alt ?? item.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(min-width: 1024px) 280px, 50vw"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="flex min-h-0 flex-1 flex-col p-4">
                  <Link href={item.slug} className="hover:text-primary">
                    <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-snug text-foreground">
                      {item.name}
                    </h3>
                  </Link>

                  <p className="mt-1 line-clamp-2 min-h-[2.25rem] text-xs leading-relaxed text-muted-foreground">
                    {item.upsellDescription ?? item.shortDescription}
                  </p>

                  <div className="mt-2 flex min-h-[1.375rem] items-end">
                    <UpsellPrice
                      productId={item.id}
                      priceLabel={item.priceLabel}
                      salePrice={item.salePrice}
                      basePrice={item.basePrice}
                    />
                  </div>

                  <div className="mt-auto flex flex-col gap-2 pt-4">
                    {isContactOnly ? (
                      <a
                        href={PHONE_TEL}
                        className="inline-flex min-h-10 items-center justify-center rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
                      >
                        Liên hệ báo giá
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex min-h-10 items-center justify-center rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
                        onClick={() =>
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: isStrapping
                              ? STEEL_STRAPPING_PRICE_PER_KG
                              : (item.salePrice ?? item.basePrice ?? 0),
                            image: item.images[0]?.src,
                            variant: isStrapping
                              ? "Thêm nhanh 1kg (chọn lại kg trong trang chi tiết)"
                              : undefined,
                          })
                        }
                      >
                        {isStrapping ? "Thêm nhanh 1kg" : "Thêm vào giỏ"}
                      </button>
                    )}

                    <Link
                      href={item.slug}
                      className={cn(
                        "inline-flex min-h-10 items-center justify-center rounded-xl border border-border bg-muted/30 px-3 py-2",
                        "text-xs font-semibold text-foreground transition hover:bg-muted/60"
                      )}
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
