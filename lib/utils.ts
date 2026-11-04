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
  const formatted = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount);
  return `₹${formatted}`;
}

/**
 * Format a number as US Dollars (approximate conversion from INR).
 * Fixed at 1 USD ≈ 83.5 INR for consistent server/client rendering.
 */
export function formatCurrencyUSD(amountInINR: number): string {
  const usd = Math.round(amountInINR / 83.5);
  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(usd);
  return `$${formatted}`;
}

/**
 * Format a number as Nepali Rupees (approximate conversion from INR).
 * Fixed at 1 INR ≈ 1.60 NPR. Uses simple numeric formatting
 * to prevent locale-based hydration mismatches.
 */
export function formatCurrencyNPR(amountInINR: number): string {
  const npr = Math.round(amountInINR * 1.6);
  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(npr);
  return `NPR ${formatted}`;
}
