import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct } from "@/data/products";
import { siteConfig } from "@/config/site";
import { STEEL_STRAPPING_PRICE_RANGE_LABEL } from "@/config/pricing";
import { getProductDiscountPercent } from "@/lib/product-pricing";
import { cn } from "@/lib/utils";
import { ProductDiscountBadge } from "@/components/product/ProductDiscountBadge";

const CATALOG_TAGS: Partial<Record<CatalogProduct["id"], string>> = {
  "steel-strapping": "16–32mm",
  "steel-strapping-tools": "Dây thép",
  "plastic-strapping-tools": "Dây nhựa",
  "steel-seals": "Bọ kín / U",
};

function formatPriceCompact(product: CatalogProduct) {
  if (product.priceLabel) {
    return (
      <span className="text-xs font-semibold text-primary sm:text-sm">
        {product.priceLabel}
      </span>
    );
  }
  if (product.pricePerKg) {
    return (
      <p className="tabular-nums leading-tight">
        <span className="text-sm font-bold text-primary sm:text-base">
          {STEEL_STRAPPING_PRICE_RANGE_LABEL}
        </span>
      </p>
    );
  }
  if (product.salePrice) {
    return (
      <p className="tabular-nums leading-tight">
        {product.basePrice ? (
          <span className="text-[10px] text-muted-foreground line-through sm:text-xs">
            {product.basePrice.toLocaleString("vi-VN")}đ{" "}
          </span>
        ) : null}
        <span className="text-sm font-bold text-primary sm:text-base">
          {product.salePrice.toLocaleString("vi-VN")}đ
        </span>
      </p>
    );
  }
  return (
    <span className="text-xs font-semibold text-primary sm:text-sm">
      Liên hệ báo giá
    </span>
  );
}

type Props = {
  product: CatalogProduct;
};

export function ProductCatalogCard({ product }: Props) {
  const image = product.images[0];
  const tag = CATALOG_TAGS[product.id];
  const discountPercent = getProductDiscountPercent(product);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-white shadow-[0_12px_28px_-22px_rgba(22,67,126,0.4)] transition duration-200 hover:border-primary/25 hover:shadow-[0_18px_36px_-20px_rgba(22,67,126,0.45)]">
      <Link
        href={product.slug}
        className="group relative block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
      >
        <div className="relative aspect-square overflow-hidden bg-white">
          {tag ? (
            <span className="absolute left-2 top-2 z-[1] rounded-md border border-border/60 bg-white/95 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-foreground/80 shadow-sm sm:text-[10px]">
              {tag}
            </span>
          ) : null}
          {discountPercent !== null ? (
            <ProductDiscountBadge percent={discountPercent} />
          ) : null}
          <Image
            src={image?.src ?? siteConfig.ogImage}
            alt={image?.alt ?? product.name}
            fill
            className="object-contain p-2 transition duration-300 group-hover:scale-[1.03] sm:p-3"
            sizes="(min-width: 1280px) 25vw, 50vw"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-2.5 sm:p-3">
        <Link
          href={product.slug}
          className="group/title focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
        >
          <h2 className="line-clamp-2 text-[13px] font-semibold leading-snug text-foreground sm:text-sm">
            {product.name}
          </h2>
        </Link>
        <p className="mt-1 line-clamp-1 text-[11px] leading-relaxed text-muted-foreground xl:line-clamp-2 xl:text-xs">
          {product.shortDescription}
        </p>
        <div className="mt-1.5 min-h-[1.25rem]">{formatPriceCompact(product)}</div>

        <Link
          href={product.slug}
          className={cn(
            "btn-lift mt-auto inline-flex w-full items-center justify-center rounded-lg bg-primary px-2 py-2 text-[11px] font-semibold text-primary-foreground",
            "shadow-[0_10px_20px_-14px_rgba(22,67,126,0.85)] transition hover:brightness-105 active:scale-[0.98] sm:text-xs",
          )}
        >
          Xem & báo giá
        </Link>
      </div>
    </article>
  );
}
