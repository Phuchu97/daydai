"use client";

import { useToastStore, type ToastType } from "@/store/toastStore";

type ShowToastInput = {
  title: string;
  description?: string;
  extra?: string;
  durationMs?: number;
  actions?: Array<{ label: string; href?: string }>;
};

function show(type: ToastType, input: ShowToastInput) {
  useToastStore.getState().addToast({
    type,
    title: input.title,
    description: input.description,
    extra: input.extra,
    durationMs: input.durationMs,
    actions: input.actions,
  });
}

export function useToast() {
  return {
    showSuccess: (input: ShowToastInput) => show("success", input),
    showError: (input: ShowToastInput) => show("error", input),
    showInfo: (input: ShowToastInput) => show("info", input),
    showWarning: (input: ShowToastInput) => show("warning", input),
  };
}

