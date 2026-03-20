 "use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { useToast } from "@/hooks/useToast";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CartDrawer({ open, onClose }: Props) {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const { showSuccess } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!open) {
      setError(null);
      setSuccess(false);
    }
  }, [open]);

  const handlePlaceOrder = async () => {
    setError(null);
    setSuccess(false);
    if (!name || !phone) {
      setError("Vui lòng nhập họ tên và số điện thoại.");
      return;
    }
    if (items.length === 0) {
      setError("Giỏ hàng đang trống.");
      return;
    }

    try {
      setSubmitting(true);
      const orderItems = [...items];
      const toPhone = "0339689386";
      const total = orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      const lines = orderItems
        .map((item) => {
          const variant = item.variant ? ` | ${item.variant}` : "";
          return `- ${item.name}${variant} x${item.quantity}`;
        })
        .join("\n");
      const zaloText = [
        "ĐƠN ĐẶT HÀNG MỚI",
        `Tên: ${name}`,
        `SĐT: ${phone}`,
        `Ghi chú: ${note || "Không có"}`,
        "Sản phẩm:",
        lines,
        `Tạm tính: ${total.toLocaleString("vi-VN")}đ`,
      ].join("\n");

      const res = await fetch("/api/cart-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, note, items: orderItems }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Gửi đơn hàng thất bại.");
      }
      setSuccess(true);
      showSuccess({
        title: "Đặt hàng thành công",
        description: "Cảm ơn bạn! Đơn hàng của bạn đã được ghi nhận.",
        extra: "Chúng tôi sẽ liên hệ xác nhận trong ít phút (giờ hành chính)."
      });
      clearCart();
      setName("");
      setPhone("");
      setNote("");

      // Hiển thị thông báo chuyên nghiệp trước khi đóng giỏ
      setTimeout(() => {
        onClose();
      }, 1600);

      // Mở Zalo chat kèm nội dung đã điền (deep link).
      // Lưu ý: Zalo deep link giúp tạo sẵn tin nhắn; người nhận vẫn có thể phải bấm gửi tùy theo thiết bị/trình duyệt.
      if (typeof window !== "undefined") {
        const url = `https://zalo.me/${toPhone}?text=${encodeURIComponent(
          zaloText,
        )}`;
        setTimeout(() => {
          window.open(url, "_blank", "noopener,noreferrer");
        }, 2200);
      }
    } catch (e) {
      console.error(e);
      setError(
        "Không gửi được đơn hàng. Vui lòng thử lại hoặc liên hệ trực tiếp.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-border bg-background shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Giỏ hàng"
      >
        <header className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="text-sm font-semibold text-foreground">Giỏ hàng</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Đóng
          </button>
        </header>

        <div className="flex-1 space-y-3 overflow-auto px-4 py-3">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-xs text-muted-foreground">
              <p>Giỏ hàng của bạn đang trống.</p>
              <a
                href="#products"
                onClick={onClose}
                className="mt-3 inline-flex rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
              >
                Tiếp tục mua sắm
              </a>
            </div>
          ) : (
            items.map((item) => <CartItem key={`${item.id}-${item.variant ?? ""}`} item={item} />)
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-border bg-background px-4 pb-4 pt-3 space-y-3">
            <CartSummary />
            <div className="space-y-2 text-xs">
              <p className="text-[11px] font-semibold text-foreground">
                Thông tin đặt hàng
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Họ tên *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-md border border-border bg-background px-3 py-2 text-xs outline-none ring-primary/20 focus:ring-2"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-md border border-border bg-background px-3 py-2 text-xs outline-none ring-primary/20 focus:ring-2"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Ghi chú thêm (tùy chọn)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-xs outline-none ring-primary/20 focus:ring-2"
              />
              {success && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-[11px] text-emerald-900">
                  <p className="font-semibold">Đặt hàng thành công.</p>
                  <p className="mt-1 text-emerald-800/90">
                    Chúng tôi sẽ liên hệ xác nhận sớm nhất. Bạn có thể đóng giỏ
                    hàng hoặc tiếp tục mua sắm.
                  </p>
                </div>
              )}
              {error && (
                <p className="text-[11px] text-red-600">
                  {error}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={submitting || success}
              className="inline-flex w-full items-center justify-center rounded-md bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground shadow-md shadow-secondary/40 transition hover:opacity-90 disabled:opacity-60"
            >
              {success
                ? "Đã nhận đơn — đang chuyển về trang..."
                : submitting
                  ? "Đang gửi đơn hàng..."
                  : "Đặt hàng / Gửi yêu cầu"}
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}

