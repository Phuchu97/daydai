"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_DURATION_MS = 2 * 60 * 60 * 1000;
const STORAGE_KEY = "daydai-promo-countdown-end";

type Props = {
  storageKey?: string;
  durationMs?: number;
  className?: string;
};

function getEndTime(storageKey: string, durationMs: number) {
  if (typeof window === "undefined") return Date.now() + durationMs;

  const stored = window.sessionStorage.getItem(storageKey);
  const parsed = stored ? Number(stored) : NaN;

  if (Number.isFinite(parsed) && parsed > Date.now()) {
    return parsed;
  }

  const endTime = Date.now() + durationMs;
  window.sessionStorage.setItem(storageKey, String(endTime));
  return endTime;
}

function formatRemaining(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export function PromotionCountdown({
  storageKey = STORAGE_KEY,
  durationMs = DEFAULT_DURATION_MS,
  className,
}: Props) {
  const [remainingMs, setRemainingMs] = useState(durationMs);

  useEffect(() => {
    const endTime = getEndTime(storageKey, durationMs);

    const tick = () => {
      const next = endTime - Date.now();
      setRemainingMs(next > 0 ? next : 0);
    };

    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [durationMs, storageKey]);

  const { hours, minutes, seconds } = formatRemaining(remainingMs);
  const isExpired = remainingMs <= 0;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-red-500/15 bg-red-500/[0.04] px-3 py-2",
        className,
      )}
      role="timer"
      aria-live="polite"
      aria-label={
        isExpired
          ? "Ưu đãi đã hết hạn"
          : `Ưu đãi kết thúc sau ${hours} giờ ${minutes} phút ${seconds} giây`
      }
    >
      <p className="text-[11px] font-semibold text-red-600">
        {isExpired ? "Ưu đãi đang được gia hạn" : "Ưu đãi kết thúc sau"}
      </p>
      <div className="inline-flex items-center gap-1 tabular-nums">
        <TimeBlock value={hours} label="giờ" />
        <span className="text-sm font-bold text-red-600" aria-hidden>
          :
        </span>
        <TimeBlock value={minutes} label="phút" />
        <span className="text-sm font-bold text-red-600" aria-hidden>
          :
        </span>
        <TimeBlock value={seconds} label="giây" />
      </div>
    </div>
  );
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <span className="inline-flex flex-col items-center">
      <span className="min-w-[1.75rem] rounded-md bg-background px-1.5 py-0.5 text-center text-sm font-bold leading-none text-red-600 shadow-sm ring-1 ring-red-500/10">
        {value}
      </span>
      <span className="mt-0.5 text-[9px] font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
    </span>
  );
}
