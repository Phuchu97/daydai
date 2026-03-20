"use client";

import { useMemo, useState } from "react";
import type { CatalogProduct } from "@/data/products";
import { getReviewsForProduct } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span aria-label={`${rating} sao`} className="text-sm text-yellow-400">
      {"★".repeat(full)}
      {"☆".repeat(Math.max(0, 5 - full))}
    </span>
  );
}

export function ReviewsSection({ product }: { product: CatalogProduct }) {
  const [filter, setFilter] = useState<"all" | 5 | 4 | 3>("all");

  const allReviews = useMemo(
    () => getReviewsForProduct(product.id),
    [product.id],
  );

  const filtered = useMemo(() => {
    if (filter === "all") return allReviews;
    return allReviews.filter((r) => r.rating === filter);
  }, [allReviews, filter]);

  const avg = useMemo(() => {
    if (allReviews.length === 0) return 0;
    const sum = allReviews.reduce((s, r) => s + r.rating, 0);
    return sum / allReviews.length;
  }, [allReviews]);

  return (
    <section className="border-t border-border bg-background py-10">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">
              Đánh giá từ khách hàng
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">
                {avg.toFixed(1)}
              </span>
              <Stars rating={avg} />
              <span className="text-xs text-muted-foreground">
                ({allReviews.length} đánh giá)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterButton
              label="Tất cả"
              active={filter === "all"}
              onClick={() => setFilter("all")}
            />
            <FilterButton
              label="5 sao"
              active={filter === 5}
              onClick={() => setFilter(5)}
            />
            <FilterButton
              label="4 sao"
              active={filter === 4}
              onClick={() => setFilter(4)}
            />
            <FilterButton
              label="3 sao"
              active={filter === 3}
              onClick={() => setFilter(3)}
            />
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-muted/20">
          {filtered.slice(0, 30).map((rv, idx, arr) => (
            <article
              key={rv.id}
              className={`flex flex-col gap-2 p-4 ${
                idx === arr.length - 1
                  ? ""
                  : "border-b border-border/70"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Stars rating={rv.rating} />
                    {rv.title}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {rv.content}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-medium text-muted-foreground">
                    {rv.author}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {new Date(rv.date).toLocaleDateString("vi-VN")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length > 30 && (
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Hiển thị 30 đánh giá gần nhất. Vui lòng liên hệ để nhận thêm
            thông tin/ảnh thực tế.
          </p>
        )}
      </div>
    </section>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
        active
          ? "border-primary bg-primary/10 text-primary"
          : "border-border bg-background text-muted-foreground hover:bg-muted"
      }`}
    >
      {label}
    </button>
  );
}

