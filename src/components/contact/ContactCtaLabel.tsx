import { CTA_BELL, CTA_BELL_ZALO } from "@/lib/cta-attention";
import { cn } from "@/lib/utils";

type ContactCtaLabelProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "zalo";
};

/** Icon (sóng + rung chuông) + label for contact / báo giá / Zalo buttons */
export function ContactCtaLabel({
  icon,
  children,
  className,
  variant = "default",
}: ContactCtaLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-2",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex shrink-0 overflow-visible",
          variant === "zalo" ? CTA_BELL_ZALO : CTA_BELL,
        )}
      >
        {icon}
      </span>
      <span>{children}</span>
    </span>
  );
}
