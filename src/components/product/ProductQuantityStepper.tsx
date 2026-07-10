"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
};

const stepperShell =
  "inline-grid grid-cols-[2.75rem_minmax(4.25rem,1fr)_2.75rem] items-stretch overflow-hidden rounded-xl border border-border bg-background";

function stepButtonClass(
  side: "decrease" | "increase",
  activeSide: "decrease" | "increase" | null,
  disabled: boolean,
) {
  return cn(
    "flex items-center justify-center text-xl font-medium leading-none",
    "transition-colors duration-150 touch-manipulation select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/25",
    disabled
      ? "cursor-not-allowed text-muted-foreground/30"
      : cn(
          "text-foreground",
          "hover:bg-muted/60 active:bg-primary/[0.08]",
          activeSide === side && "bg-primary/[0.1]",
        ),
  );
}

export function ProductQuantityStepper({
  label,
  value,
  onChange,
  min = 1,
  max = 99,
  unit,
}: Props) {
  const [activeSide, setActiveSide] = useState<"decrease" | "increase" | null>(
    null,
  );
  const [bump, setBump] = useState(false);

  const applyDelta = useCallback(
    (delta: number, side: "decrease" | "increase") => {
      const next = Math.min(max, Math.max(min, value + delta));
      if (next === value) return;

      onChange(next);
      setActiveSide(side);
      setBump(true);

      window.setTimeout(() => setActiveSide(null), 180);
      window.setTimeout(() => setBump(false), 240);
    },
    [max, min, onChange, value],
  );

  return (
    <div className="flex w-full flex-col items-center gap-2 max-md:items-center sm:items-start">
      <p className="text-sm font-medium text-foreground">{label}</p>

      <div className={stepperShell} role="group" aria-label={label}>
        <button
          type="button"
          onClick={() => applyDelta(-1, "decrease")}
          disabled={value <= min}
          className={stepButtonClass("decrease", activeSide, value <= min)}
          aria-label="Giảm số lượng"
        >
          −
        </button>

        <div
          className={cn(
            "flex min-h-[2.75rem] flex-col items-center justify-center border-x border-border px-3 py-1.5",
            bump && "qty-bump",
          )}
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="text-xl font-semibold tabular-nums leading-none text-foreground">
            {value}
          </span>
          {unit ? (
            <span className="mt-0.5 text-[10px] font-medium tracking-wide text-muted-foreground">
              {unit}
            </span>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => applyDelta(1, "increase")}
          disabled={value >= max}
          className={stepButtonClass("increase", activeSide, value >= max)}
          aria-label="Tăng số lượng"
        >
          +
        </button>
      </div>
    </div>
  );
}
