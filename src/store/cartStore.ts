"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  variant?: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  lastAddedAt: number | null;
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: string, variant?: string) => void;
  updateQuantity: (id: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      lastAddedAt: null,
      addToCart: (item, quantity = 1) => {
        set((state) => {
          const key = `${item.id}__${item.variant ?? ""}`;
          const existingIndex = state.items.findIndex(
            (i) => `${i.id}__${i.variant ?? ""}` === key,
          );

          if (existingIndex !== -1) {
            const updated = [...state.items];
            updated[existingIndex] = {
              ...updated[existingIndex],
              quantity: updated[existingIndex].quantity + quantity,
            };
            return { items: updated, lastAddedAt: Date.now() };
          }

          return {
            items: [
              ...state.items,
              {
                ...item,
                quantity,
              },
            ],
            lastAddedAt: Date.now(),
          };
        });
      },
      removeFromCart: (id, variant) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.id === id &&
                (variant === undefined || item.variant === variant)
              ),
          ),
        }));
      },
      updateQuantity: (id, quantity, variant) => {
        if (quantity <= 0) {
          get().removeFromCart(id, variant);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && (variant === undefined || item.variant === variant)
              ? { ...item, quantity }
              : item,
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({ items: state.items }),
      onRehydrateStorage: () => (state) => {
        if (state && !state.lastAddedAt) {
          state.lastAddedAt = null;
        }
      },
    },
  ),
);

export const selectCartCount = (state: CartState) =>
  state.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartSubtotal = (state: CartState) =>
  state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

