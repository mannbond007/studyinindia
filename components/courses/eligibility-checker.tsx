"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Course } from "@/lib/data/courses";

export function EligibilityChecker({ course }: { course: Course }) {
  const [userGpa, setUserGpa] = useState<string>("");
  const [checked, setChecked] = useState(false);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const gpaNum = parseFloat(userGpa);
    if (isNaN(gpaNum)) return;

    // Check against course minimum requirement (typically 2.0 to 2.8)
    const requiredGpaMatch = course.eligibility.minimumGpaOrPercentage.match(/GPA\s*([\d.]+)/i);
    const minGpa = requiredGpaMatch ? parseFloat(requiredGpaMatch[1]) : 2.4;

    setIsEligible(gpaNum >= minGpa);
    setChecked(true);
  };

  return (
    <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
          ✓
        </div>
        <div>
          <h3 className="font-bold text-slate-900 text-base font-heading">
            Instant Nepali Eligibility Evaluator
          </h3>
          <p className="text-xs text-slate-500">
            Enter your Class 12 (NEB) GPA to check if you meet the minimum criterion
          </p>
        </div>
      </div>

      <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3">
        <input
          type="number"
          step="0.01"
          min="1.0"
          max="4.0"
          placeholder="Enter Class 12 GPA (e.g. 3.2)"
          value={userGpa}
          onChange={(e) => {
            setUserGpa(e.target.value);
            setChecked(false);
          }}
          className="flex-1 h-11 px-3.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
          required
        />
        <Button type="submit" size="md" className="font-semibold shrink-0">
          Evaluate My GPA
        </Button>
      </form>

      {checked && isEligible !== null && (
        <div
          className={`p-4 rounded-xl text-xs space-y-2 border transition-all ${
            isEligible
              ? "bg-emerald-50 border-emerald-200 text-emerald-900"
              : "bg-amber-50 border-amber-200 text-amber-900"
          }`}
        >
          <div className="flex items-center gap-2 font-bold text-sm">
            {isEligible ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>You meet the academic threshold for {course.degree}!</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Borderline GPA. Alternative streams or bridge options available.</span>
              </>
            )}
          </div>
          <p className="text-[11px] leading-relaxed">
            {isEligible
              ? `Your GPA of ${userGpa} satisfies the academic requirement (${course.eligibility.minimumGpaOrPercentage}). You can proceed directly to upload marksheets and secure your provisional seat.`
              : `The standard requirement is ${course.eligibility.minimumGpaOrPercentage}. You can still consult our admission officers to explore allied branches, foundation quotas, or complementary degrees.`}
          </p>
        </div>
      )}
    </div>
  );
}
