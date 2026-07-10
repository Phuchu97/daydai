"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  step?: number;
};

const stepperShell =
  "inline-grid grid-cols-[2.75rem_minmax(5rem,1fr)_2.75rem] items-stretch overflow-hidden rounded-xl border border-border bg-background";

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

export function ProductWeightStepper({
  label,
  value,
  onChange,
  min = 1,
  step = 5,
}: Props) {
  const [activeSide, setActiveSide] = useState<"decrease" | "increase" | null>(
    null,
  );
  const [bump, setBump] = useState(false);
  const [focused, setFocused] = useState(false);

  const applyDelta = useCallback(
    (delta: number, side: "decrease" | "increase") => {
      const next = Math.max(min, value + delta);
      if (next === value) return;

      onChange(next);
      setActiveSide(side);
      setBump(true);

      window.setTimeout(() => setActiveSide(null), 180);
      window.setTimeout(() => setBump(false), 240);
    },
    [min, onChange, value],
  );

  return (
    <div className="flex w-full flex-col items-center gap-2 max-md:items-center sm:items-start">
      <p className="text-sm font-medium text-foreground">{label}</p>

      <div
        className={cn(
          stepperShell,
          focused && "border-primary/40 ring-1 ring-primary/15",
        )}
        role="group"
        aria-label={label}
      >
        <button
          type="button"
          onClick={() => applyDelta(-step, "decrease")}
          disabled={value <= min}
          className={stepButtonClass("decrease", activeSide, value <= min)}
          aria-label={`Giảm ${step} kg`}
        >
          −
        </button>

        <div
          className={cn(
            "flex min-h-[2.75rem] flex-col items-center justify-center border-x border-border px-3 py-1.5",
            bump && "qty-bump",
          )}
        >
          <input
            type="number"
            min={min}
            step={1}
            value={value}
            onChange={(e) => {
              const parsed = Number(e.target.value);
              onChange(
                Number.isNaN(parsed) ? min : Math.max(min, Math.round(parsed)),
              );
              setBump(true);
              window.setTimeout(() => setBump(false), 240);
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={cn(
              "w-full bg-transparent text-center text-xl font-semibold tabular-nums leading-none text-foreground outline-none",
              "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
            )}
            aria-label="Khối lượng kg"
          />
          <span className="mt-0.5 text-[10px] font-medium tracking-wide text-muted-foreground">
            kg
          </span>
        </div>

        <button
          type="button"
          onClick={() => applyDelta(step, "increase")}
          className={stepButtonClass("increase", activeSide, false)}
          aria-label={`Tăng ${step} kg`}
        >
          +
        </button>
      </div>

      <p className="text-center text-[11px] text-muted-foreground max-md:max-w-[16rem] sm:text-left">
        Mỗi lần bấm ±{step} kg · có thể nhập trực tiếp
      </p>
    </div>
  );
}
