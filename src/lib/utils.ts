import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names with tailwind-merge pattern (clsx fallback)
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
