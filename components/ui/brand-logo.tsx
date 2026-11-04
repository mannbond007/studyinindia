"use client";

import React from "react";
import Link from "next/link";

interface BrandIconProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

/**
 * StudyIndia Signature "S-Gateway" Brandmark
 *
 * Watertight multi-layer vector architecture (64×64 grid, center x = 32):
 * 1. Squircle Base: Radial emerald depth (#10B981 → #022C22) with subtle rim bevel
 * 2. Left Gateway Pillar (x: 19 → 27.5): Top edge (y = 28) is 100% tucked behind the
 *    opaque S-ribbon so no horizontal seam or overlap is ever exposed
 * 3. Upper Gateway Arch (x: 19 → 45): Pointed Indo-Saracenic dome with recessed inner arch;
 *    left & right lower walls terminate cleanly behind the S-ribbon spine
 * 4. 3D S-Ribbon & Right Pillar (x: 36.5 → 45): Single tangent-continuous ivory-white
 *    ribbon with a precision-matched jade under-fold bevel
 * 5. Guiding Star: Symmetrical 4-pointed diamond star in the upper-right quadrant
 */
export function BrandIcon({ className = "w-11 h-11", size }: BrandIconProps) {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const finalClass = size ? sizeClasses[size] : className;

  return (
    <div
      className={`relative shrink-0 ${finalClass} transition-transform duration-200 group-hover:scale-[1.03]`}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        className="w-full h-full block drop-shadow-[0_2px_6px_rgba(4,120,87,0.18)]"
        aria-hidden="true"
      >
        <defs>
          {/* 1. Emerald Squircle Background */}
          <radialGradient
            id="siBgRadial"
            cx="18"
            cy="10"
            r="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="42%" stopColor="#059669" />
            <stop offset="82%" stopColor="#047857" />
            <stop offset="100%" stopColor="#022C22" />
          </radialGradient>

          {/* Outer Bevel Rim */}
          <linearGradient
            id="siRimBevel"
            x1="4"
            y1="4"
            x2="60"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#34D399" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#065F46" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#022C22" stopOpacity="0.9" />
          </linearGradient>

          {/* 2. Architectural Gateway Arch (Upper Jade Dome) */}
          <linearGradient
            id="siGatewayUpper"
            x1="32"
            y1="14"
            x2="32"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="48%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>

          {/* 3. Lower-Left Gateway Pillar (Warm Ivory to Soft Jade) */}
          <linearGradient
            id="siLeftPillar"
            x1="23.25"
            y1="32"
            x2="23.25"
            y2="53"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#D1FAE5" />
            <stop offset="28%" stopColor="#FFFDF8" />
            <stop offset="72%" stopColor="#E6FBF2" />
            <stop offset="100%" stopColor="#6EE7B7" />
          </linearGradient>

          {/* 4. 3D Under-Fold Bevel of the S-Ribbon */}
          <linearGradient
            id="siRibbonUnder"
            x1="15.5"
            y1="23"
            x2="36.5"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="55%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>

          {/* 5. Sculpted Ivory-White "S" Ribbon & Right Pillar */}
          <linearGradient
            id="siRibbonMain"
            x1="20"
            y1="11"
            x2="42"
            y2="53"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="62%" stopColor="#FFFDF7" />
            <stop offset="88%" stopColor="#E6FBF2" />
            <stop offset="100%" stopColor="#6EE7B7" />
          </linearGradient>

          {/* Crisp Separation Shadow Under the S-Ribbon */}
          <filter
            id="siRibbonShadow"
            x="-12%"
            y="-12%"
            width="128%"
            height="128%"
            filterUnits="userSpaceOnUse"
          >
            <feDropShadow
              dx="0"
              dy="1.5"
              stdDeviation="1.2"
              floodColor="#012219"
              floodOpacity="0.4"
            />
          </filter>
        </defs>

        {/* ── 1. Rounded Emerald Squircle Base ── */}
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="15"
          fill="url(#siBgRadial)"
          stroke="url(#siRimBevel)"
          strokeWidth="1.25"
        />

        {/* Subtle Top-Left Ambient Highlight */}
        <path
          d="M17 3.25H47C54.5939 3.25 60.75 9.40608 60.75 17V19.5C45 12.5 23 13.5 3.25 25.5V17C3.25 9.40608 9.40608 3.25 17 3.25Z"
          fill="#FFFFFF"
          fillOpacity="0.06"
        />

        {/* ── 2. Lower-Left Gateway Pillar (x: 19 → 27.5, tucked behind S-ribbon at y = 28) ── */}
        <path
          d="M19 28H27.5V51.25C27.5 52.2165 26.7165 53 25.75 53H20.75C19.7835 53 19 52.2165 19 51.25V28Z"
          fill="url(#siLeftPillar)"
        />

        {/* ── 3. Centered Indian Architectural Gateway Arch (x: 19 → 45) ── */}
        {/* Recessed Dark Inner Arch Cutout */}
        <path
          d="M27.5 39V27C27.5 24.2386 29.5147 22 32 22C34.4853 22 36.5 24.2386 36.5 27V43H27.5V39Z"
          fill="#022C22"
          fillOpacity="0.85"
        />

        {/* Pointed Indo-Saracenic Gateway Arch (Walls terminate cleanly inside S-ribbon) */}
        <path
          d="M19 29V25.5C19 22.2 28.2 19.8 32 15C35.8 19.8 45 22.2 45 25.5V42H36.5V27C36.5 24.2386 34.4853 22 32 22C29.5147 22 27.5 24.2386 27.5 27V29H19Z"
          fill="url(#siGatewayUpper)"
        />

        {/* ── 4. Sculpted 3D "S" Ribbon & Lower-Right Pillar ── */}
        <g filter="url(#siRibbonShadow)">
          {/* 3D Emerald-Jade Under-Fold (Tucked cleanly behind the white S-spine) */}
          <path
            d="M15.5 22.8C15.5 29.6 19.6 34.2 28 38C33.6 40.5 36.5 43.2 36.5 47.5V41C36.5 37.8 33 35.2 26.2 32.2C19.6 29.2 15.8 26.2 15.5 22.8Z"
            fill="url(#siRibbonUnder)"
          />

          {/* Main Ivory-White Flowing "S" Ribbon & Right Pillar (x: 36.5 → 45) */}
          <path
            d="M36.2 11.2L35 14.8C27.8 16.8 22.2 18.8 21.8 21.8C21.4 24.6 24.8 26.8 31.8 29.8C40.2 33.4 45 37.2 45 44.5V51.25C45 52.2165 44.2165 53 43.25 53H38.25C37.2835 53 36.5 52.2165 36.5 51.25V45.2C36.5 40.6 33.2 38 25.5 34.6C18.2 31.4 15.2 27.6 15.5 22.8C15.8 17.8 20.5 14.8 28.5 12.8L36.2 11.2Z"
            fill="url(#siRibbonMain)"
          />
        </g>

        {/* ── 5. Symmetrical 4-Pointed Guiding Star (Top Right) ── */}
        <path
          d="M46.5 10.5Q46.5 16 52 16Q46.5 16 46.5 21.5Q46.5 16 41 16Q46.5 16 46.5 10.5Z"
          fill="#FFFDF7"
        />
      </svg>
    </div>
  );
}

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
  showSubtitle?: boolean;
}

/**
 * StudyIndia Institutional Lockup
 * Combines the signature S-Gateway BrandIcon, bold StudyIndia wordmark,
 * integrated GLOBAL architectural label, and balanced subtitle with zero overlap.
 */
export function BrandLogo({
  className = "",
  size = "md",
  theme = "light",
  showSubtitle = true,
}: BrandLogoProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href="/"
      aria-label="StudyIndia Global — Official Gateway for International Admissions"
      className={`inline-flex items-center gap-3 shrink-0 group select-none focus-visible:outline-none ${className}`}
    >
      <BrandIcon size={size} />

      <div className="flex flex-col justify-center">
        {/* Top Row: Wordmark + Divider + Outlined Stadium GLOBAL Pill */}
        <div className="flex items-center gap-3">
          <span
            className={`text-[21px] sm:text-[22px] font-extrabold tracking-[-0.025em] font-heading leading-none ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Study
            <span className={isDark ? "text-[#10b981]" : "text-[#059669]"}>
              India
            </span>
          </span>

          {/* Crisp Vertical Divider */}
          <span
            aria-hidden="true"
            className={`h-5 w-[1.5px] rounded-full shrink-0 ${
              isDark ? "bg-slate-600/90" : "bg-slate-300"
            }`}
          />

          {/* Outlined Stadium GLOBAL Pill with Balanced Optical Spacing */}
          <span
            className={`inline-flex items-center justify-center rounded-full border px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] leading-none ${
              isDark
                ? "border-emerald-500/50 bg-emerald-950/40 text-emerald-400"
                : "border-emerald-600/40 bg-emerald-50 text-emerald-800"
            }`}
          >
            GLOBAL
          </span>
        </div>

        {/* Bottom Row: Restrained Institutional Tagline */}
        {showSubtitle && (
          <span
            className={`text-[11px] font-medium leading-[1.2] mt-1 tracking-[-0.005em] whitespace-nowrap transition-colors hidden sm:block lg:hidden xl:block ${
              isDark
                ? "text-slate-400 group-hover:text-slate-300"
                : "text-slate-500 group-hover:text-slate-700"
            }`}
          >
            Official International Admissions
          </span>
        )}
      </div>
    </Link>
  );
}
