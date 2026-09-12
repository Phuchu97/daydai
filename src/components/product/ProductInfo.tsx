"use client";

import { useMemo, useState } from "react";
import { ContactPhoneCta } from "@/components/contact/ContactPhoneCta";
import { ProductPurchaseActions } from "@/components/product/ProductPurchaseActions";
import { PromotionCountdown } from "@/components/product/PromotionCountdown";
import { ProductQuantityStepper } from "@/components/product/ProductQuantityStepper";
import { ProductSocialProof } from "@/components/product/ProductSocialProof";
import { ProductWeightStepper } from "@/components/product/ProductWeightStepper";
import { useCartStore } from "@/store/cartStore";
import type { CatalogProduct } from "@/data/products";
import { getReviewsForProduct } from "@/data/reviews";

const widths = ["16mm", "19mm", "25mm", "32mm"];
const thicknesses = ["0.6mm", "0.8mm", "1.0mm"];
import {
  STEEL_STRAPPING_DISCOUNT_PERCENT,
  STEEL_STRAPPING_PRICE_PER_KG,
} from "@/config/pricing";
import { getProductDiscountPercent } from "@/lib/product-pricing";

type Props = {
  product: CatalogProduct;
  /** H1 riêng cho trang hybrid (vd. dây đai sắt). Mặc định dùng tên catalog. */
  heading?: string;
  /** Mô tả ngay dưới social proof. Mặc định dùng shortDescription của product. */
  lead?: string;
  /** Tên đưa vào giỏ hàng. Mặc định dùng product.name. */
  cartName?: string;
};

export function ProductInfo({ product, heading, lead, cartName }: Props) {
  const [width, setWidth] = useState("19mm");
  const [thickness, setThickness] = useState("0.8mm");
  const [weightKg, setWeightKg] = useState(25);
  const [qty, setQty] = useState(1);
  const addToCart = useCartStore((s) => s.addToCart);
  const productReviews = useMemo(
    () => getReviewsForProduct(product.id),
    [product.id],
  );
  const reviewStats = useMemo(() => {
    if (productReviews.length === 0) return null;
    const sum = productReviews.reduce((total, review) => total + review.rating, 0);
    return {
      average: sum / productReviews.length,
      count: productReviews.length,
    };
  }, [productReviews]);
  const isStrapping = product.id === "steel-strapping";
  const discountPercent = getProductDiscountPercent(product);

  const showPromotionCountdown =
    isStrapping || (product.basePrice != null && product.salePrice != null);

  const handleQtyChange = (next: number) => {
    setQty(Math.max(1, next));
  };

  const handleAddToCart = () => {
    const variant = isStrapping
      ? `Bản ${width} • Dày ${thickness} • ${weightKg}kg`
      : undefined;
    const price = isStrapping
      ? weightKg * STEEL_STRAPPING_PRICE_PER_KG
      : (product.salePrice ?? product.basePrice ?? 0);
    addToCart(
      {
        id: product.id,
        name: cartName ?? product.name,
        price,
        image: product.images[0]?.src ?? "/images/day-dai-2.jpg",
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
    <section aria-labelledby="product-title" className="min-w-0 space-y-5">
      <div className="space-y-2">
        <h1
          id="product-title"
          className="text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {heading ?? product.name}
        </h1>
        <ProductSocialProof
          reviewStats={reviewStats}
          soldCount={product.soldCount}
        />
        {(lead ?? (isStrapping ? product.shortDescription : null)) ? (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {lead ?? product.shortDescription}
          </p>
        ) : null}
      </div>

      {product.priceLabel ? (
        <ContactPhoneCta variant="price" />
      ) : (
      <div className="space-y-2 rounded-2xl border border-border bg-muted/40 p-4">
        <div className="flex max-w-full flex-wrap items-end gap-x-2 gap-y-1">
          {isStrapping ? (
            <>
              <p className="text-2xl font-bold text-secondary">
                {(weightKg * STEEL_STRAPPING_PRICE_PER_KG).toLocaleString("vi-VN")}
                đ
              </p>
              <p className="text-sm text-muted-foreground line-through">
                {Math.round(
                  (weightKg * STEEL_STRAPPING_PRICE_PER_KG) /
                    (1 - STEEL_STRAPPING_DISCOUNT_PERCENT / 100),
                ).toLocaleString("vi-VN")}
                đ
              </p>
              <span className="rounded-full bg-red-500/10 px-2 py-1 text-xs font-semibold uppercase text-red-500">
                -{STEEL_STRAPPING_DISCOUNT_PERCENT}%
              </span>
            </>
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
        {showPromotionCountdown ? (
          <PromotionCountdown storageKey={`promo-countdown-${product.id}`} />
        ) : null}
      </div>
      )}

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
            <ProductWeightStepper
              label="Khối lượng cần mua"
              value={weightKg}
              onChange={setWeightKg}
              min={1}
              step={5}
            />
          </>
        )}

        {!isStrapping && (
          <ProductQuantityStepper
            label="Số lượng bộ"
            value={qty}
            onChange={handleQtyChange}
            min={1}
            max={99}
            unit="bộ"
          />
        )}
      </div>

      <div className="max-md:pb-2">
        <ProductPurchaseActions
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
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

