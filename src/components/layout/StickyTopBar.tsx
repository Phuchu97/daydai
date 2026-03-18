export function StickyTopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-secondary via-orange-500 to-secondary text-secondary-foreground shadow-md">
      <div className="container mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-[11px] sm:text-sm overflow-hidden">
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="marquee font-semibold uppercase tracking-wide">
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
