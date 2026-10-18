/**
 * Giá dây đai thép theo tổng số kg mỗi đơn — áp dụng chung mọi bản rộng và bề mặt.
 * Sắp xếp từ mốc lớn nhất xuống; mốc tính “từ” (>=) minKg.
 */
export const STEEL_STRAPPING_PRICE_TIERS = [
  { minKg: 10_000, pricePerKg: 22_000, label: "Từ 10 tấn" },
  { minKg: 5_000, pricePerKg: 22_500, label: "Từ 5 tấn" },
  { minKg: 2_000, pricePerKg: 23_000, label: "Từ 2 tấn" },
  { minKg: 1_000, pricePerKg: 23_500, label: "Từ 1 tấn" },
  { minKg: 0, pricePerKg: 24_000, label: "Dưới 1 tấn" },
] as const;

/** Giá lẻ (dưới 1 tấn) — giá mặc định giỏ hàng, schema, danh mục. */
export const STEEL_STRAPPING_PRICE_PER_KG = 24_000;

/** Giá thấp nhất cho đơn dự án / số lượng rất lớn — chỉ báo giá qua liên hệ. */
export const STEEL_STRAPPING_PROJECT_PRICE_PER_KG = 19_000;

export function getSteelStrappingPricePerKg(totalKg: number): number {
  const tier = STEEL_STRAPPING_PRICE_TIERS.find((item) => totalKg >= item.minKg);
  return tier?.pricePerKg ?? STEEL_STRAPPING_PRICE_PER_KG;
}

const formatVnd = (value: number) => value.toLocaleString("vi-VN");

/** "dưới 1 tấn 24.000đ/kg, từ 1 tấn 23.500đ/kg, …" — dùng trong câu văn, FAQ. */
export const STEEL_STRAPPING_TIER_SUMMARY = [...STEEL_STRAPPING_PRICE_TIERS]
  .reverse()
  .map((tier) => `${tier.label.toLowerCase()} ${formatVnd(tier.pricePerKg)}đ/kg`)
  .join(", ");

/** "19.000 - 24.000đ/kg" — dùng cho mô tả, title, FAQ. */
export const STEEL_STRAPPING_PRICE_RANGE_LABEL = `${formatVnd(STEEL_STRAPPING_PROJECT_PRICE_PER_KG)} - ${formatVnd(STEEL_STRAPPING_PRICE_PER_KG)}đ/kg`;

/** Giá tham khảo khóa đai thép (VNĐ/cái, mức thấp bảng giá) — dùng schema khi “liên hệ báo giá”. */
export const STEEL_SEAL_REFERENCE_PRICE_UNIT = 1_800;

/** Giá bán bộ dụng cụ đóng đai (VNĐ/bộ) — schema & trang sản phẩm. */
export const STEEL_STRAPPING_TOOLS_SALE_PRICE = 1_250_000;

/** Ngày cập nhật bảng giá tham khảo (ISO) — hiển thị trang /bao-gia-day-dai-thep. */
export const PRICE_PAGE_LAST_UPDATED = "2026-10-18";
