"use client";

import { useCallback } from "react";
import { useToastStore } from "@/store/toastStore";
import { ToastItem } from "./ToastItem";

export function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts);
  const removeToast = useToastStore((s) => s.removeToast);

  const onRemove = useCallback(
    (id: string) => removeToast(id),
    [removeToast],
  );
  console.log('toasts',toasts);
  
  return (
    <div
      className="pointer-events-none fixed top-4 right-4 z-[60] flex w-[360px] max-w-[calc(100vw-32px)] flex-col gap-3 sm:top-4 sm:right-4 max-sm:left-1/2 max-sm:right-auto max-sm:-translate-x-1/2"
      aria-live="polite"
    >
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onRemove={onRemove} />
      ))}
    </div>
  );
}

