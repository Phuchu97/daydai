"use client";

import { create } from "zustand";

export type ToastType = "success" | "error" | "warning" | "info";

export type ToastAction = {
  label: string;
  href?: string;
};

export type Toast = {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  extra?: string;
  durationMs?: number;
  actions?: ToastAction[];
  createdAt: number;
};

type ToastState = {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id" | "createdAt">) => string;
  removeToast: (id: string) => void;
  clearToasts: () => void;
};

function makeId(): string {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export const useToastStore = create<ToastState>((set, get) => ({
  toasts: [],
  addToast: (toast) => {
    const id = makeId();
    const next: Toast = {
      id,
      createdAt: Date.now(),
      ...toast,
      durationMs: toast.durationMs ?? 4000,
    };
    console.log('next',next);
    set((state) => ({
      toasts: [...state.toasts, next].slice(-5),
    }));

    // Auto-remove fallback (in case component unmounts)
    window.setTimeout(() => {
      const exists = get().toasts.some((t) => t.id === id);
      if (exists) get().removeToast(id);
    }, next.durationMs);

    return id;
  },
  removeToast: (id) =>
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
  clearToasts: () => set({ toasts: [] }),
}));

