import Image from "next/image";
import { CartItem as CartItemType, useCartStore } from "@/store/cartStore";
import { QuantitySelector } from "./QuantitySelector";

type Props = {
  item: CartItemType;
};

export function CartItem({ item }: Props) {
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeFromCart = useCartStore((s) => s.removeFromCart);

  const handleQtyChange = (value: number) => {
    if (value <= 0) {
      removeFromCart(item.id, item.variant);
    } else {
      updateQuantity(item.id, value, item.variant);
    }
  };

  return (
    <div className="flex gap-3 rounded-xl border border-border bg-background p-3">
      <div className="relative h-16 w-16 flex-none overflow-hidden rounded-md bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <div className="flex flex-1 flex-col text-xs">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="line-clamp-2 text-[13px] font-semibold text-foreground">
              {item.name}
            </p>
            {item.variant && (
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                {item.variant}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => removeFromCart(item.id, item.variant)}
            className="text-[11px] text-muted-foreground hover:text-red-500"
          >
            Xóa
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <QuantitySelector value={item.quantity} onChange={handleQtyChange} />
          <p className="text-sm font-semibold text-foreground">
            {(item.price * item.quantity).toLocaleString("vi-VN")}đ
          </p>
        </div>
      </div>
    </div>
  );
}

