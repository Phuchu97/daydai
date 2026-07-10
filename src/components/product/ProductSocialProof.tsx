"use client";

import { cn } from "@/lib/utils";

type ReviewStats = {
  average: number;
  count: number;
};

type Props = {
  reviewStats: ReviewStats | null;
  soldCount?: number;
};

function ProductRatingStars({
  rating,
  size = "sm",
}: {
  rating: number;
  size?: "sm" | "md";
}) {
  const full = Math.min(5, Math.max(0, Math.floor(rating)));
  const hasHalf = rating - full >= 0.25 && full < 5;

  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex items-center gap-px leading-none text-amber-400",
        size === "md" ? "text-base" : "text-sm",
      )}
    >
      {Array.from({ length: 5 }, (_, i) => {
        if (i < full) return <span key={i}>★</span>;
        if (i === full && hasHalf) return <span key={i} className="opacity-70">★</span>;
        return (
          <span key={i} className="text-amber-400/30">
            ★
          </span>
        );
      })}
    </span>
  );
}

function SoldTrendIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4 shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 17 9 11l4 4 8-10" />
      <path d="M14 5h7v7" />
    </svg>
  );
}

function scrollToReviews(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  const target = document.getElementById("product-reviews");
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", "#product-reviews");
}

export function ProductSocialProof({ reviewStats, soldCount }: Props) {
  const hasReviews = reviewStats != null && reviewStats.count > 0;
  const hasSold = soldCount != null && soldCount > 0;

  if (!hasReviews && !hasSold) return null;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border/80",
        "bg-gradient-to-br from-background via-muted/25 to-primary/[0.04]",
        "shadow-[inset_0_1px_0_rgb(255_255_255/0.7)]",
      )}
    >
      {hasReviews ? (
        <a
          href="#product-reviews"
          onClick={scrollToReviews}
          className={cn(
            "group flex items-center gap-3 px-3.5 py-3 transition-colors",
            "hover:bg-primary/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-inset",
            hasSold && "border-b border-border/60",
          )}
        >
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
              "bg-amber-400/12 text-lg font-bold tabular-nums tracking-tight text-foreground",
              "ring-1 ring-amber-400/20",
            )}
          >
            {reviewStats.average.toFixed(1)}
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <ProductRatingStars rating={reviewStats.average} size="md" />
              <span className="rounded-md bg-muted/80 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-foreground">
                {reviewStats.count} đánh giá
              </span>
            </span>
            <span className="mt-0.5 block text-[11px] font-medium text-primary/90 group-hover:text-primary">
              Xem đánh giá từ khách hàng
            </span>
          </span>
          <span
            aria-hidden
            className="shrink-0 text-muted-foreground/70 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
          >
            →
          </span>
        </a>
      ) : null}

      {hasSold ? (
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 px-3.5 py-2.5">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1",
              "bg-primary/[0.08] text-primary ring-1 ring-primary/15",
            )}
          >
            <SoldTrendIcon className="text-primary" />
            <span className="text-[11px] font-semibold tracking-wide text-primary/90">
              Đã bán
            </span>
          </span>
          <p className="text-sm text-muted-foreground">
            <span className="text-base font-bold tabular-nums tracking-tight text-foreground">
              {soldCount.toLocaleString("vi-VN")}+
            </span>{" "}
            đơn hàng thành công
          </p>
          {soldCount >= 500 ? (
            <span className="ml-auto rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-500/15">
              Bán chạy
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
