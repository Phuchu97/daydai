"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useCartStore } from "@/store/cartStore";
import { catalogProducts } from "@/data/products";
import { cn } from "@/lib/utils";

import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";
import { ContactCtaLabel } from "@/components/contact/ContactCtaLabel";
import { PhoneIcon } from "@/components/contact/ContactIcons";
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
      <p className="text-[11px] font-semibold text-primary sm:text-sm">{priceLabel}</p>
    );
  }
  if (productId === "steel-strapping") {
    return (
      <p className="text-[11px] font-semibold text-secondary sm:text-sm">
        {STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg
      </p>
    );
  }
  const price = salePrice ?? basePrice ?? 0;
  return (
    <p className="text-[11px] font-semibold text-secondary sm:text-sm">
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
    <section className="border-t border-border bg-background py-12 md:py-16">
      <div className="site-container">
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">
          Khách hàng thường mua kèm
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Bấm thẻ hoặc &quot;Xem chi tiết&quot; để xem quy cách đầy đủ.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3 lg:gap-4 lg:items-stretch">
          {items.map((item) => {
            const isContactOnly = Boolean(item.priceLabel);
            const isStrapping = item.id === "steel-strapping";

            return (
              <article
                key={item.id}
                className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-border/80 bg-background shadow-sm transition hover:border-primary/20 hover:shadow-md sm:rounded-2xl"
              >
                <Link
                  href={item.slug}
                  className="group block shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={item.images[0]?.src ?? siteConfig.ogImage}
                      alt={item.images[0]?.alt ?? item.name}
                      fill
                      className="object-cover p-1 transition duration-300 group-hover:scale-[1.02] sm:p-0"
                      sizes="(min-width: 1024px) 280px, 50vw"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="flex min-h-0 flex-1 flex-col p-2.5 sm:p-4">
                  <Link href={item.slug} className="hover:text-primary">
                    <h3 className="line-clamp-2 text-[13px] font-semibold leading-snug text-foreground sm:text-sm">
                      {item.name}
                    </h3>
                  </Link>

                  <p className="mt-1 line-clamp-1 text-[11px] leading-relaxed text-muted-foreground sm:line-clamp-2 sm:text-xs">
                    {item.upsellDescription ?? item.shortDescription}
                  </p>

                  <div className="mt-1.5 flex items-end sm:mt-2">
                    <UpsellPrice
                      productId={item.id}
                      priceLabel={item.priceLabel}
                      salePrice={item.salePrice}
                      basePrice={item.basePrice}
                    />
                  </div>

                  <div className="mt-auto flex flex-col gap-1.5 pt-2.5 sm:gap-2 sm:pt-4">
                    {isContactOnly ? (
                      <a
                        href={PHONE_TEL}
                        className="btn-lift inline-flex min-h-9 items-center justify-center rounded-lg bg-primary px-2 py-1.5 text-[10px] font-semibold text-primary-foreground transition hover:opacity-90 sm:min-h-10 sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs"
                      >
                        <ContactCtaLabel icon={<PhoneIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}>
                          Liên hệ báo giá
                        </ContactCtaLabel>
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex min-h-9 items-center justify-center rounded-lg bg-primary px-2 py-1.5 text-[10px] font-semibold text-primary-foreground transition hover:opacity-90 sm:min-h-10 sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs"
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
                        "inline-flex min-h-9 items-center justify-center rounded-lg border border-border bg-muted/30 px-2 py-1.5",
                        "text-[10px] font-semibold text-foreground transition hover:bg-muted/60 sm:min-h-10 sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs",
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
