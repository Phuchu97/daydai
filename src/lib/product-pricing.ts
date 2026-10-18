import type { CatalogProduct } from "@/data/products";

export function getProductDiscountPercent(
  product: CatalogProduct,
): number | null {
  if (
    product.basePrice &&
    product.salePrice &&
    product.basePrice > product.salePrice
  ) {
    return Math.round(
      ((product.basePrice - product.salePrice) / product.basePrice) * 100,
    );
  }

  return null;
}
