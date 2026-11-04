"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Clock,
  Heart,
  Cpu,
  BarChart3,
  FlaskConical,
  Globe,
  Info,
  Coins,
  ArrowRight,
  Building2,
} from "lucide-react";
import { Course } from "@/lib/data/courses";
import {
  formatCurrencyINR,
  formatCurrencyUSD,
  formatCurrencyNPR,
} from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  currency?: "USD" | "INR" | "NPR";
}

export function CourseCard({ course, currency = "USD" }: CourseCardProps) {
  const [saved, setSaved] = useState(false);

  const convertedFeeText =
    currency === "NPR"
      ? `≈ ${formatCurrencyNPR(course.annualFeeINR)}/year`
      : `≈ ${formatCurrencyUSD(course.annualFeeINR)} USD/year`;

  return (
    <div className="group rounded-[28px] bg-white border border-slate-200/85 shadow-[0_14px_36px_-10px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_48px_-12px_rgba(5,150,105,0.18)] hover:border-emerald-300/80 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* ── Top Course Image Banner ── */}
      <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Subtle dark/emerald vignette for crystal-clear badge contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/15 to-slate-950/25 pointer-events-none" />

        {/* Top-Left Floating Degree Pill */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e9f9f1]/95 backdrop-blur-md text-[#065f46] text-xs font-extrabold shadow-sm border border-emerald-200/80">
            <GraduationCap className="w-4 h-4 text-[#059669]" />
            <span>{course.degree}</span>
          </span>
        </div>

        {/* Top-Right Floating Duration Pill */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-700 text-xs font-bold shadow-sm border border-white">
            <Clock className="w-3.5 h-3.5 text-slate-600" />
            <span>{course.durationYears} Years</span>
          </span>
        </div>

        {/* Glowing Translucent HUD Badges over the Image (As in Sample Card) */}
        {course.hudBadges && course.hudBadges.length >= 2 && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="relative w-32 h-24 translate-x-4 translate-y-1">
              {/* Top-left HUD chip box */}
              <div className="absolute top-0 left-2 w-11 h-11 rounded-xl bg-emerald-950/55 backdrop-blur-md border border-emerald-400/70 shadow-[0_0_22px_rgba(16,185,129,0.45)] flex items-center justify-center text-emerald-300">
                <Cpu className="w-5 h-5" />
              </div>
              {/* Bottom-right HUD text box */}
              <div className="absolute bottom-1 right-2 w-11 h-11 rounded-xl bg-emerald-950/55 backdrop-blur-md border border-emerald-400/70 shadow-[0_0_22px_rgba(16,185,129,0.45)] flex items-center justify-center text-emerald-200 font-extrabold text-xs tracking-tight">
                {course.hudBadges[0]}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── White Card Body Overlapping Image Bottom ── */}
      <div className="-mt-4 relative z-10 rounded-t-[24px] bg-white px-6 pt-5 pb-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Two-Tone Title + Wishlist Heart Button */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <Link href={`/courses/${course.id}`} className="block group/title">
                <h3 className="text-[19px] sm:text-[20px] font-extrabold text-[#0f172a] group-hover/title:text-[#047857] transition-colors leading-[1.22] tracking-tight font-heading">
                  {course.shortTitle}
                  <span className="block text-[#059669] mt-0.5">
                    {course.highlightSubTitle}
                  </span>
                </h3>
              </Link>
              <p className="text-[11.5px] font-semibold text-slate-400 flex items-center gap-1.5 mt-1.5">
                <Building2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{course.universityName}</span>
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSaved((prev) => !prev)}
              aria-label="Save course to wishlist"
              className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                saved
                  ? "bg-rose-50 border-rose-200 text-rose-500"
                  : "bg-slate-50/90 hover:bg-slate-100 border-slate-200/80 text-slate-500 hover:text-rose-500"
              }`}
            >
              <Heart
                className={`w-4.5 h-4.5 ${saved ? "fill-rose-500 text-rose-500" : ""}`}
              />
            </button>
          </div>

          {/* 2-Line Course Description */}
          <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-2 mt-3">
            {course.overview}
          </p>

          {/* 4 Feature Tag Pills */}
          <div className="flex flex-wrap items-center gap-1.5 mt-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#eafaf2] border border-emerald-200/60 text-[#065f46] text-[11px] font-bold">
              <Cpu className="w-3.5 h-3.5 text-[#059669]" />
              <span>{course.primaryTag}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#eafaf2] border border-emerald-200/60 text-[#065f46] text-[11px] font-bold">
              <BarChart3 className="w-3.5 h-3.5 text-[#059669]" />
              <span>Industry Focused</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#eafaf2] border border-emerald-200/60 text-[#065f46] text-[11px] font-bold">
              <FlaskConical className="w-3.5 h-3.5 text-[#059669]" />
              <span>Modern Labs</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#eafaf2] border border-emerald-200/60 text-[#065f46] text-[11px] font-bold">
              <Globe className="w-3.5 h-3.5 text-[#059669]" />
              <span>Global Exposure</span>
            </span>
          </div>
        </div>

        {/* Bottom Pricing & CTA Block */}
        <div>
          {/* Annual Tuition Fee Row */}
          <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-wider text-slate-500">
                <span>ANNUAL TUITION FEE</span>
                <Info className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-[23px] sm:text-[25px] font-black text-[#0f172a] font-heading tracking-tight">
                  {formatCurrencyINR(course.annualFeeINR)}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-500">
                  /year
                </span>
              </div>
            </div>

            {/* Approx USD Conversion Box */}
            <div className="rounded-2xl bg-[#eafaf2] border border-emerald-200/70 px-3.5 py-2.5 flex items-center gap-2.5 shrink-0">
              <Coins className="w-5 h-5 text-[#059669] shrink-0" />
              <div>
                <div className="text-xs sm:text-[13px] font-extrabold text-[#065f46] leading-tight">
                  {convertedFeeText}
                </div>
                <div className="text-[10.5px] text-slate-500 font-medium mt-0.5">
                  (Approx. conversion)
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer: View Details + Apply Now */}
          <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <Link
              href={`/courses/${course.id}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#047857] transition-colors"
            >
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link href={`/register?courseId=${course.id}`}>
              <button
                type="button"
                className="px-6 py-2.5 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

