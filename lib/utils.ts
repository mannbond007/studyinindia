import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as Indian Rupees.
 * Uses "en-IN" locale with explicit currency symbol to ensure
 * consistent output between server (Node.js) and client environments.
 */
export function formatCurrencyINR(amount: number): string {
  // Use consistent formatting that won't differ between server and browser
  const formatted = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount);
  return `₹${formatted}`;
}

/**
 * Format a number as Nepali Rupees (approximate conversion from INR).
 * Fixed at 1 INR ≈ 1.60 NPR. Uses simple numeric formatting
 * to prevent locale-based hydration mismatches.
 */
export function formatCurrencyNPR(amountInINR: number): string {
  const npr = Math.round(amountInINR * 1.6);
  // Format with en-US to ensure server/client consistency
  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(npr);
  return `NPR ${formatted}`;
}
