import { getSteelStrappingPricePerKg } from "@/config/pricing";

export const STEEL_STRAPPING_PRODUCT_ID = "steel-strapping";

type PricedItem = {
  id: string;
  price: number;
  quantity: number;
  /** Số kg mỗi đơn vị (chỉ dây đai thép). */
  weightKg?: number;
};

function isTieredStrapping(item: PricedItem): item is PricedItem & { weightKg: number } {
  return (
    item.id === STEEL_STRAPPING_PRODUCT_ID &&
    typeof item.weightKg === "number" &&
    Number.isFinite(item.weightKg) &&
    item.weightKg > 0
  );
}

/** Tổng số kg dây đai thép trong giỏ — căn cứ áp mốc giá theo số lượng. */
export function getSteelStrappingKg(items: PricedItem[]): number {
  return items.reduce(
    (sum, item) => (isTieredStrapping(item) ? sum + item.weightKg * item.quantity : sum),
    0,
  );
}

/** Đơn giá một dòng giỏ hàng; dây đai thép tính lại theo tổng kg cả giỏ. */
export function getCartItemUnitPrice(item: PricedItem, items: PricedItem[]): number {
  if (!isTieredStrapping(item)) return item.price;
  return item.weightKg * getSteelStrappingPricePerKg(getSteelStrappingKg(items));
}

export function withTieredPrices<T extends PricedItem>(items: T[]): T[] {
  return items.map((item) => ({ ...item, price: getCartItemUnitPrice(item, items) }));
}
