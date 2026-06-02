export function StickyTopBar() {
  return (
    <div className="w-full border-b border-primary/20 bg-primary/95 text-primary-foreground shadow-[0_10px_24px_-18px_rgba(26,62,114,0.95)]">
      <div className="container mx-auto flex max-w-7xl items-center justify-between gap-3 overflow-hidden px-4 py-2 text-[11px] sm:text-sm lg:px-6">
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="marquee font-medium tracking-[0.03em]">
              <span>
                Giảm giá đặc biệt cho đơn hàng số lượng lớn · Ưu tiên khách đặt
                trước · Hỗ trợ báo giá nhanh trong ngày ·{" "}
              </span>
              <span>
                Giảm giá đặc biệt cho đơn hàng số lượng lớn · Ưu tiên khách đặt
                trước · Hỗ trợ báo giá nhanh trong ngày ·{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
