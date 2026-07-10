type Props = {
  percent: number;
  className?: string;
};

export function ProductDiscountBadge({ percent, className = "" }: Props) {
  return (
    <span
      className={`product-discount-badge-wrap pointer-events-none absolute right-1.5 top-1.5 z-[2] sm:right-2 sm:top-2 ${className}`}
    >
      <span
        className="product-discount-badge"
        aria-label={`Giảm ${percent} phần trăm`}
      >
        <span className="product-discount-badge__shine" aria-hidden="true" />
        <span className="relative z-[1] flex flex-col items-center leading-none">
          <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-white/90 sm:text-[9px]">
            Giảm
          </span>
          <span className="mt-0.5 text-[11px] font-bold tabular-nums text-white sm:text-xs">
            {percent}%
          </span>
        </span>
      </span>
    </span>
  );
}
