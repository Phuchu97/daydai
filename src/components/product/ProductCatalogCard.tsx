import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct } from "@/data/products";
import { siteConfig } from "@/config/site";
import { STEEL_STRAPPING_DISCOUNT_PERCENT } from "@/config/pricing";
import { cn } from "@/lib/utils";

const PHONE_TEL = `tel:${siteConfig.company.zaloPhone}`;

type Props = {
  product: CatalogProduct;
};

function formatPrice(product: CatalogProduct) {
  if (product.priceLabel) {
    return (
      <span className="font-medium text-primary">{product.priceLabel}</span>
    );
  }
  if (product.pricePerKg) {
    const listPerKg = Math.round(
      product.pricePerKg / (1 - STEEL_STRAPPING_DISCOUNT_PERCENT / 100),
    );
    return (
      <p>
        <span className="text-muted-foreground line-through">
          {listPerKg.toLocaleString("vi-VN")}đ/kg{" "}
        </span>
        <span className="font-semibold text-secondary">
          {product.pricePerKg.toLocaleString("vi-VN")}đ/kg
        </span>
        <span className="mt-0.5 block text-[11px] text-muted-foreground">
          Báo giá theo khối lượng kg / cuộn
        </span>
      </p>
    );
  }
  if (product.salePrice) {
    return (
      <p>
        {product.basePrice ? (
          <span className="text-muted-foreground line-through">
            {product.basePrice.toLocaleString("vi-VN")}đ{" "}
          </span>
        ) : null}
        <span className="font-semibold text-secondary">
          {product.salePrice.toLocaleString("vi-VN")}đ
        </span>
      </p>
    );
  }
  return (
    <span className="font-medium text-primary">Liên hệ báo giá</span>
  );
}

export function ProductCatalogCard({ product }: Props) {
  const image = product.images[0];

  return (
    <article className="surface-card flex flex-col overflow-hidden transition duration-200 hover:border-primary/25 hover:shadow-[0_18px_40px_-24px_rgba(22,67,126,0.45)]">
      <Link
        href={product.slug}
        className="group flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={image?.src ?? siteConfig.ogImage}
            alt={image?.alt ?? product.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h2 className="text-base font-semibold text-foreground sm:text-lg">
            {product.name}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {product.shortDescription}
          </p>
          <div className="mt-2 text-sm">{formatPrice(product)}</div>
          <p
            className={cn(
              "mt-auto pt-3 text-sm font-semibold text-primary",
              "inline-flex items-center gap-1 group-hover:gap-2"
            )}
          >
            Xem chi tiết
            <span aria-hidden>→</span>
          </p>
        </div>
      </Link>
      <div className="border-t border-border/70 px-4 py-2.5 sm:px-5">
        <a
          href={PHONE_TEL}
          className="block text-center text-xs font-medium text-muted-foreground hover:text-primary sm:text-sm"
        >
          Gọi {siteConfig.company.phone}
        </a>
      </div>
    </article>
  );
}
