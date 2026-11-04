"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Sparkles, Award, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course } from "@/lib/data/courses";

type GradingSystem = "gpa4" | "percentage" | "alevels" | "ib" | "waec";

const ALEVEL_OPTIONS = [
  { label: "A*A*A* / A*A*A (90%+ Equiv.)", gpa: 3.9, pct: 92 },
  { label: "AAA / AAB (82–88% Equiv.)", gpa: 3.6, pct: 85 },
  { label: "ABB / BBB (72–78% Equiv.)", gpa: 3.2, pct: 75 },
  { label: "BBC / BCC (62–68% Equiv.)", gpa: 2.7, pct: 65 },
  { label: "CCC / CDD (52–58% Equiv.)", gpa: 2.3, pct: 55 },
  { label: "DDD / E Pass (45–50% Equiv.)", gpa: 1.9, pct: 48 },
];

const WAEC_OPTIONS = [
  { label: "A1 – B2 Distinction (80%+ Equiv.)", gpa: 3.6, pct: 84 },
  { label: "B3 Good Credit (70–78% Equiv.)", gpa: 3.2, pct: 74 },
  { label: "C4 – C5 Credit (60–68% Equiv.)", gpa: 2.6, pct: 64 },
  { label: "C6 Credit Pass (50–58% Equiv.)", gpa: 2.2, pct: 54 },
  { label: "D7 – E8 Pass (Below 50%)", gpa: 1.7, pct: 45 },
];

export function EligibilityChecker({ course }: { course: Course }) {
  const [gradingSystem, setGradingSystem] = useState<GradingSystem>("gpa4");
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedPresetIdx, setSelectedPresetIdx] = useState<number>(1);
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState<{
    isEligible: boolean;
    equivGpa: number;
    equivPct: number;
    scholarshipTier: string;
  } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();

    let equivGpa = 0;
    let equivPct = 0;

    if (gradingSystem === "gpa4") {
      const val = parseFloat(inputValue);
      if (isNaN(val)) return;
      equivGpa = Math.min(4.0, Math.max(1.0, val));
      equivPct = Math.round(equivGpa * 23.5);
    } else if (gradingSystem === "percentage") {
      const val = parseFloat(inputValue);
      if (isNaN(val)) return;
      equivPct = Math.min(100, Math.max(30, val));
      equivGpa = Number(((equivPct / 100) * 4.0).toFixed(2));
    } else if (gradingSystem === "ib") {
      const val = parseFloat(inputValue);
      if (isNaN(val)) return;
      const points = Math.min(45, Math.max(18, val));
      equivPct = Math.round(((points - 18) / 27) * 45 + 50);
      equivGpa = Number(((equivPct / 100) * 4.0).toFixed(2));
    } else if (gradingSystem === "alevels") {
      const preset = ALEVEL_OPTIONS[selectedPresetIdx] || ALEVEL_OPTIONS[1];
      equivGpa = preset.gpa;
      equivPct = preset.pct;
    } else if (gradingSystem === "waec") {
      const preset = WAEC_OPTIONS[selectedPresetIdx] || WAEC_OPTIONS[1];
      equivGpa = preset.gpa;
      equivPct = preset.pct;
    }

    const requiredGpaMatch =
      course.eligibility.minimumGpaOrPercentage.match(/GPA\s*([\d.]+)/i);
    const minGpa = requiredGpaMatch ? parseFloat(requiredGpaMatch[1]) : 2.4;

    const isEligible = equivGpa >= minGpa;

    let scholarshipTier = "Standard International Quota";
    if (equivPct >= 85 || equivGpa >= 3.6) {
      scholarshipTier = "Up to 50% Global Presidential Merit Waiver";
    } else if (equivPct >= 75 || equivGpa >= 3.2) {
      scholarshipTier = "Up to 35% International Merit Waiver";
    } else if (equivPct >= 65 || equivGpa >= 2.8) {
      scholarshipTier = "20% Early-Acceptance Tuition Concession";
    }

    setResult({
      isEligible,
      equivGpa,
      equivPct,
      scholarshipTier,
    });
    setChecked(true);
  };

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-emerald-200/90 shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center shrink-0">
            <Globe2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base sm:text-lg font-heading">
              Global Grade Converter &amp; Eligibility Evaluator
            </h3>
            <p className="text-xs text-slate-500">
              Convert your home-country board score to AIU Indian equivalence &amp; check merit scholarship waivers
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[11px] font-bold self-start sm:self-auto">
          <Sparkles className="w-3 h-3 text-emerald-600" />
          <span>AIU Equivalence Mapped</span>
        </span>
      </div>

      {/* Board / Grading Scale Selector Pills */}
      <div className="space-y-2">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
          1. Select Your Grading System / Board
        </label>
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: "gpa4", label: "4.0 GPA (Global / US / NEB)" },
            { id: "percentage", label: "Percentage % (CBSE / National)" },
            { id: "alevels", label: "Cambridge A-Levels" },
            { id: "ib", label: "IB Diploma (24–45 Pts)" },
            { id: "waec", label: "WAEC / NECO (A1–C6)" },
          ].map((sys) => {
            const active = gradingSystem === sys.id;
            return (
              <button
                key={sys.id}
                type="button"
                onClick={() => {
                  setGradingSystem(sys.id as GradingSystem);
                  setInputValue("");
                  setChecked(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                  active
                    ? "bg-emerald-700 text-white border-emerald-700 shadow-2xs"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40"
                }`}
              >
                {sys.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Input / Preset Form */}
      <form onSubmit={handleCheck} className="space-y-3">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
          2. Enter Your Score or Grade Tier
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          {gradingSystem === "gpa4" && (
            <input
              type="number"
              step="0.01"
              min="1.0"
              max="4.0"
              placeholder="Enter GPA on 4.0 scale (e.g. 3.4)"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setChecked(false);
              }}
              className="flex-1 h-11 px-3.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          )}

          {gradingSystem === "percentage" && (
            <input
              type="number"
              step="0.5"
              min="35"
              max="100"
              placeholder="Enter Aggregate Percentage % (e.g. 78)"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setChecked(false);
              }}
              className="flex-1 h-11 px-3.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          )}

          {gradingSystem === "ib" && (
            <input
              type="number"
              step="1"
              min="18"
              max="45"
              placeholder="Enter IB Total Points (24 to 45, e.g. 34)"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setChecked(false);
              }}
              className="flex-1 h-11 px-3.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          )}

          {gradingSystem === "alevels" && (
            <select
              value={selectedPresetIdx}
              onChange={(e) => {
                setSelectedPresetIdx(Number(e.target.value));
                setChecked(false);
              }}
              className="flex-1 h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              {ALEVEL_OPTIONS.map((opt, idx) => (
                <option key={idx} value={idx}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}

          {gradingSystem === "waec" && (
            <select
              value={selectedPresetIdx}
              onChange={(e) => {
                setSelectedPresetIdx(Number(e.target.value));
                setChecked(false);
              }}
              className="flex-1 h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              {WAEC_OPTIONS.map((opt, idx) => (
                <option key={idx} value={idx}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}

          <Button type="submit" size="md" className="font-semibold shrink-0 h-11 px-6">
            Evaluate Eligibility &amp; Waiver
          </Button>
        </div>
      </form>

      {checked && result && (
        <div
          className={`p-5 rounded-xl text-xs space-y-3 border transition-all ${
            result.isEligible
              ? "bg-emerald-50/80 border-emerald-200 text-emerald-950"
              : "bg-amber-50 border-amber-200 text-amber-950"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-bold text-sm">
              {result.isEligible ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>You meet the academic requirement for {course.degree}!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Borderline score — Foundation or allied stream options available.</span>
                </>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200/90 font-bold text-slate-800 text-[11px]">
                AIU Equiv: {result.equivGpa} GPA (~{result.equivPct}%)
              </span>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-slate-700">
            {result.isEligible
              ? `Your converted score (${result.equivGpa} GPA / ~${result.equivPct}% Indian equivalent) satisfies the minimum threshold (${course.eligibility.minimumGpaOrPercentage}). You can apply directly for an international provisional offer letter.`
              : `The standard threshold is ${course.eligibility.minimumGpaOrPercentage}. Our admissions advisors can still evaluate your subject scores for foundation seats or alternative partner universities.`}
          </p>

          {result.isEligible && (
            <div className="pt-2 border-t border-emerald-200/70 flex items-center gap-2 text-emerald-900 font-semibold">
              <Award className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Estimated Scholarship Eligibility: {result.scholarshipTier}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
