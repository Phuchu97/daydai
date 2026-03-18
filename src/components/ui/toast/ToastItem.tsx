"use client";

import Link from "next/link";
import { memo, useEffect, useState } from "react";
import type { Toast } from "@/store/toastStore";

type Props = {
  toast: Toast;
  onRemove: (id: string) => void;
};

const typeStyles: Record<
  Toast["type"],
  { wrap: string; iconBg: string; icon: string }
> = {
  success: {
    wrap: "border-emerald-200 bg-emerald-50 text-emerald-950",
    iconBg: "bg-emerald-600",
    icon: "✓",
  },
  error: {
    wrap: "border-red-200 bg-red-50 text-red-950",
    iconBg: "bg-red-600",
    icon: "!",
  },
  warning: {
    wrap: "border-amber-200 bg-amber-50 text-amber-950",
    iconBg: "bg-amber-600",
    icon: "!",
  },
  info: {
    wrap: "border-sky-200 bg-sky-50 text-sky-950",
    iconBg: "bg-sky-600",
    icon: "i",
  },
};

function ToastItemBase({ toast, onRemove }: Props) {
  const [enter, setEnter] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const style = typeStyles[toast.type];
  const duration = toast.durationMs ?? 4000;
  console.log('duration',duration);
  
  // useEffect(() => {
  //   const raf = window.requestAnimationFrame(() => setEnter(true));
  //   const timer = window.setTimeout(() => {
  //     setLeaving(true);
  //     window.setTimeout(() => onRemove(toast.id), 220);
  //   }, duration);
  //   return () => {
  //     window.cancelAnimationFrame(raf);
  //     window.clearTimeout(timer);
  //   };
  // }, [duration, onRemove, toast.id]);

  return (
    <div
      className={`pointer-events-auto w-full rounded-lg border shadow-lg shadow-black/10 ${style.wrap} transition-all duration-200 ${
        enter ? "opacity-100" : "opacity-0"
      } ${
        leaving
          ? "translate-x-4 opacity-0"
          : "translate-x-0 opacity-100"
      }`}
      role="status"
    >
      <div className="flex gap-3 p-3">
        <div
          className={`mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full ${style.iconBg} text-white`}
          aria-hidden
        >
          <span className="text-sm font-bold">{style.icon}</span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">{toast.title}</p>
          {toast.description && (
            <p className="mt-0.5 text-xs opacity-90">{toast.description}</p>
          )}
          {toast.extra && (
            <p className="mt-1 text-xs opacity-90">{toast.extra}</p>
          )}

          {toast.actions && toast.actions.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {toast.actions.map((a) =>
                a.href ? (
                  <Link
                    key={a.label}
                    href={a.href}
                    className="rounded-md bg-white/60 px-2 py-1 text-[11px] font-semibold text-foreground hover:bg-white/80"
                  >
                    {a.label}
                  </Link>
                ) : (
                  <button
                    key={a.label}
                    type="button"
                    onClick={() => onRemove(toast.id)}
                    className="rounded-md bg-white/60 px-2 py-1 text-[11px] font-semibold text-foreground hover:bg-white/80"
                  >
                    {a.label}
                  </button>
                ),
              )}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => onRemove(toast.id)}
          className="ml-2 text-xs opacity-70 hover:opacity-100"
          aria-label="Đóng thông báo"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export const ToastItem = memo(ToastItemBase);

