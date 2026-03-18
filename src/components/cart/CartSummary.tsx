import { selectCartSubtotal, useCartStore } from "@/store/cartStore";

export function CartSummary() {
  const subtotal = useCartStore(selectCartSubtotal);

  return (
    <div className="space-y-2 rounded-2xl border border-border bg-muted/40 p-4 text-xs">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">Tạm tính</span>
        <span className="text-sm font-semibold text-foreground">
          {subtotal.toLocaleString("vi-VN")}đ
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">Vận chuyển</span>
        <span className="text-[11px] text-muted-foreground">
          Sẽ được báo khi xác nhận đơn
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-border/60 pt-2">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground">
          Tổng cộng
        </span>
        <span className="text-base font-bold text-secondary">
          {subtotal.toLocaleString("vi-VN")}đ
        </span>
      </div>
    </div>
  );
}

