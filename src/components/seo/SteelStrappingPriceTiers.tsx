import {
  STEEL_STRAPPING_PRICE_TIERS,
  STEEL_STRAPPING_PROJECT_PRICE_PER_KG,
} from "@/config/pricing";

type Props = {
  className?: string;
};

/** Bảng giá dây đai thép theo tổng số kg mỗi đơn — áp dụng mọi bản rộng và bề mặt. */
export function SteelStrappingPriceTiers({ className }: Props) {
  const tiers = [...STEEL_STRAPPING_PRICE_TIERS].reverse();

  return (
    <div className={className ?? "responsive-table-wrap mt-4"}>
      <table className="min-w-full text-left text-sm">
        <thead className="bg-muted/60 text-foreground">
          <tr>
            <th className="px-3 py-2">Số lượng mỗi đơn</th>
            <th className="px-3 py-2">Đơn giá dây đai thép</th>
          </tr>
        </thead>
        <tbody>
          {tiers.map((tier) => (
            <tr key={tier.minKg} className="border-t border-border/60">
              <td className="px-3 py-2 font-medium text-foreground">{tier.label}</td>
              <td className="px-3 py-2 font-semibold text-primary tabular-nums">
                {tier.pricePerKg.toLocaleString("vi-VN")}đ/kg
              </td>
            </tr>
          ))}
          <tr className="border-t border-border/60">
            <td className="px-3 py-2 font-medium text-foreground">
              Đơn dự án, số lượng rất lớn
            </td>
            <td className="px-3 py-2 font-semibold text-primary tabular-nums">
              Từ {STEEL_STRAPPING_PROJECT_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg
              <span className="ml-1 font-normal text-muted-foreground">(liên hệ)</span>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="mt-2 text-xs text-muted-foreground">
        Áp dụng chung cho dây dầu, mạ kẽm, sơn tĩnh điện và mọi bản 16–32mm. Mốc
        tính theo tổng số kg dây đai thép trong một đơn.
      </p>
    </div>
  );
}
