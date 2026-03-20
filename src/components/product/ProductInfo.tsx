 "use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import type { CatalogProduct } from "@/data/products";

const widths = ["16mm", "19mm", "25mm", "32mm"];
const thicknesses = ["0.6mm", "0.8mm", "1.0mm"];
const STRAPPING_SALE_PRICE_PER_KG = 25000;
const STRAPPING_DISCOUNT_PERCENT = 35;

type Props = {
  product: CatalogProduct;
};

export function ProductInfo({ product }: Props) {
  const [width, setWidth] = useState("19mm");
  const [thickness, setThickness] = useState("0.8mm");
  const [weightKg, setWeightKg] = useState(25);
  const [qty, setQty] = useState(1);
  const addToCart = useCartStore((s) => s.addToCart);
  const isStrapping = product.id === "steel-strapping";
  const discountPercent =
    product.basePrice && product.salePrice
      ? Math.round(
          ((product.basePrice - product.salePrice) / product.basePrice) * 100,
        )
      : null;

  const handleQtyChange = (delta: number) => {
    setQty((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    const variant = isStrapping
      ? `Bản ${width} • Dày ${thickness} • ${weightKg}kg`
      : undefined;
    const price = isStrapping
      ? weightKg * STRAPPING_SALE_PRICE_PER_KG
      : (product.salePrice ?? product.basePrice ?? 0);
    addToCart(
      {
        id: product.id,
        name: product.name,
        price,
        image: product.images[0]?.src ?? "/images/day-dai-2.JPG",
        variant,
      },
      qty,
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cart"));
    }
  };

  return (
    <section aria-labelledby="product-title" className="space-y-5">
      <div className="space-y-2">
        <h1
          id="product-title"
          className="text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {product.name}
        </h1>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="text-sm text-yellow-400">★★★★★</span>
          <span className="font-semibold text-foreground">4.8</span>
          <span>(256 đánh giá)</span>
        </p>
      </div>

      <div className="space-y-1 rounded-2xl border border-border bg-muted/40 p-4">
        <div className="flex items-end gap-2">
          {isStrapping ? (
            <>
              <p className="text-2xl font-bold text-secondary">
                {(weightKg * STRAPPING_SALE_PRICE_PER_KG).toLocaleString("vi-VN")}
                đ
              </p>
              <p className="text-sm text-muted-foreground line-through">
                {Math.round(
                  (weightKg * STRAPPING_SALE_PRICE_PER_KG) /
                    (1 - STRAPPING_DISCOUNT_PERCENT / 100),
                ).toLocaleString("vi-VN")}
                đ
              </p>
              <span className="rounded-full bg-red-500/10 px-2 py-1 text-xs font-semibold uppercase text-red-500">
                -{STRAPPING_DISCOUNT_PERCENT}%
              </span>
            </>
          ) : product.priceLabel ? (
            <p className="text-sm font-semibold text-secondary">
              {product.priceLabel}
            </p>
          ) : (
            <>
              <p className="text-2xl font-bold text-secondary">
                {(product.salePrice ?? product.basePrice ?? 0).toLocaleString(
                  "vi-VN",
                )}
                đ
              </p>
              {product.basePrice && product.salePrice && (
                <p className="text-sm text-muted-foreground line-through">
                  {product.basePrice.toLocaleString("vi-VN")}đ
                </p>
              )}
              {discountPercent !== null && (
                <span className="rounded-full bg-red-500/10 px-2 py-1 text-xs font-semibold uppercase text-red-500">
                  -{discountPercent}%
                </span>
              )}
            </>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {isStrapping && (
          <>
            <VariantGroup
              label="Bản rộng"
              options={widths}
              value={width}
              onChange={setWidth}
            />
            <VariantGroup
              label="Độ dày"
              options={thicknesses}
              value={thickness}
              onChange={setThickness}
            />
            <div className="space-y-1">
              <p className="text-xs font-medium text-foreground">
                Khối lượng cần mua (kg)
              </p>
              <input
                type="number"
                min={1}
                step={1}
                value={weightKg}
                onChange={(e) =>
                  setWeightKg(
                    Number.isNaN(Number(e.target.value))
                      ? 1
                      : Math.max(1, Math.round(Number(e.target.value))),
                  )
                }
                className="w-[128px] rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/20 focus:ring-2"
                placeholder="Nhập số kg, ví dụ 25"
              />
            </div>
          </>
        )}

        {!isStrapping && (
          <div className="flex items-center gap-4">
            <div>
              <p className="text-xs font-medium text-foreground">Số lượng bộ</p>
              <div className="mt-1 inline-flex items-center rounded-full border border-border bg-background">
                <button
                  type="button"
                  onClick={() => handleQtyChange(-1)}
                  className="h-8 w-8 text-sm font-semibold"
                  aria-label="Giảm số lượng"
                >
                  -
                </button>
                <span className="w-10 text-center text-sm font-semibold">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => handleQtyChange(1)}
                  className="h-8 w-8 text-sm font-semibold"
                  aria-label="Tăng số lượng"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 rounded-md bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground shadow-md shadow-secondary/40 transition hover:opacity-90"
          >
            Thêm vào giỏ hàng
          </button>
          <button
            type="button"
            onClick={handleBuyNow}
            className="flex-1 rounded-md border border-primary bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/40 transition hover:opacity-95"
          >
            Mua ngay
          </button>
        </div>
      </div>

      <div className="space-y-2 rounded-2xl border border-border bg-background p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          Giao hàng toàn quốc, tư vấn nhanh
        </p>
      </div>

      <div className="grid gap-3 text-xs sm:grid-cols-2">
        <InfoBadge
          title="Giao hàng toàn quốc"
          description="Giao tận kho, hỗ trợ sắp xếp giờ nhận hàng phù hợp ca sản xuất."
        />
        <InfoBadge
          title="Hỗ trợ kỹ thuật"
          description={
            isStrapping
              ? "Tư vấn quy cách, cách đóng đai, tối ưu chi phí & an toàn."
              : "Tư vấn cách sử dụng bộ dụng cụ đúng kỹ thuật, giảm lỗi thao tác."
          }
        />
        <InfoBadge
          title="Bảo hành & đổi trả"
          description="Đổi trả khi sai quy cách hoặc lỗi kỹ thuật do nhà sản xuất."
        />
        <InfoBadge
          title="Thanh toán an toàn"
          description="Hợp đồng, hóa đơn đầy đủ, hỗ trợ xuất VAT cho doanh nghiệp."
        />
      </div>
    </section>
  );
}

type VariantGroupProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

function VariantGroup({ label, options, value, onChange }: VariantGroupProps) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-medium text-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              value === opt
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-background text-muted-foreground hover:bg-muted"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

type InfoBadgeProps = {
  title: string;
  description: string;
};

function InfoBadge({ title, description }: InfoBadgeProps) {
  return (
    <div className="rounded-xl border border-border bg-muted/40 p-3">
      <p className="text-[11px] font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-[11px] text-muted-foreground">{description}</p>
    </div>
  );
}

