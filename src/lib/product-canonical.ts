import type { CatalogProduct } from "@/data/products";

/** Sản phẩm có landing page riêng làm trang chính cho từ khoá → canonical về đó. */
const CANONICAL_OVERRIDES: Partial<Record<CatalogProduct["id"], string>> = {
  "steel-strapping": "/day-dai-thep",
};

export function getProductCanonicalPath(product: CatalogProduct): string {
  return CANONICAL_OVERRIDES[product.id] ?? product.slug;
}

export function hasCanonicalOverride(product: CatalogProduct): boolean {
  return product.id in CANONICAL_OVERRIDES;
}
