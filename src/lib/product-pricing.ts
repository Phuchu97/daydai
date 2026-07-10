import type { CatalogProduct } from "@/data/products";
import { STEEL_STRAPPING_DISCOUNT_PERCENT } from "@/config/pricing";

export function getProductDiscountPercent(
  product: CatalogProduct,
): number | null {
  if (product.pricePerKg) {
    return STEEL_STRAPPING_DISCOUNT_PERCENT;
  }

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
