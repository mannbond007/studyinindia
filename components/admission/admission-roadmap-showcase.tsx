"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  ShieldCheck,
  UserPlus,
  Compass,
  FileUp,
  UserCheck,
  Award,
  Landmark,
  Plane,
  ChevronRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RoadmapStep {
  number: string;
  phase:
    | "Phase 1 • Discovery & Profile"
    | "Phase 2 • Verification & Offer"
    | "Phase 3 • Visa, NOC & Campus Arrival";
  phaseShort: string;
  title: string;
  desc: string;
  duration: string;
  icon: React.ElementType;
  deliverable: string;
  actionLabel: string;
  actionHref: string;
  details: string[];
}

const steps: RoadmapStep[] = [
  {
    number: "01",
    phase: "Phase 1 • Discovery & Profile",
    phaseShort: "Discovery",
    title: "Account Registration & Profile Setup",
    desc: "Create your student profile with basic contact details and your academic history from Grade 10 (SEE / High School) and Grade 12 (NEB / A-Levels / IB / WAEC / +2).",
    duration: "10 Minutes",
    icon: UserPlus,
    deliverable: "Verified Student Profile & Application Tracking ID",
    actionLabel: "Create Student Profile",
    actionHref: "/register",
    details: [
      "Select your completed academic stream (Science, Management, Humanities)",
      "Record your overall GPA / percentage and major subject scores (PCM, PCB, etc.)",
      "Specify your intended degree program and preferred Indian campus cities",
      "Generate your unique student application tracking ID",
    ],
  },
  {
    number: "02",
    phase: "Phase 1 • Discovery & Profile",
    phaseShort: "Matching",
    title: "University & Course Matching",
    desc: "Explore verified Indian universities and check your eligibility instantly against UGC, AICTE, and statutory council requirements.",
    duration: "1 – 2 Days",
    icon: Compass,
    deliverable: "Shortlist of 3–5 Eligible Accredited Universities",
    actionLabel: "Explore Universities & Courses",
    actionHref: "/universities",
    details: [
      "Filter by NIRF Top-100 & NAAC A++ ratings, annual tuition, and scholarship seats",
      "Review transparent 100% official gazette fee breakdowns in USD, INR, and NPR",
      "Verify degree accreditation (WHO/WDOMS, ABET, WES, NEC, NMC, TU-CDC)",
      "Compare AC/Non-AC international hostels and multi-cuisine dining facilities",
    ],
  },
  {
    number: "03",
    phase: "Phase 2 • Verification & Offer",
    phaseShort: "Documents",
    title: "Document Upload & Digital Verification",
    desc: "Upload clear scanned copies of your academic transcripts and passport or national citizenship ID to our encrypted student vault.",
    duration: "Instant",
    icon: FileUp,
    deliverable: "Pre-Audited Academic & Identity Dossier",
    actionLabel: "View Document Checklist",
    actionHref: "/study-in-india",
    details: [
      "Grade 10 (SEE / O-Level / Secondary) Marksheet & Character Certificate",
      "Grade 12 (NEB / A-Level / IB / WAEC / +2) Transcript & Migration Certificate",
      "Valid International Passport (or National Citizenship Card for Nepal & Bhutan)",
      "Recent passport-sized photograph with plain white background",
    ],
  },
  {
    number: "04",
    phase: "Phase 2 • Verification & Offer",
    phaseShort: "Submission",
    title: "Counselor Review & Formal University Submission",
    desc: "Our admissions deans audit your dossier for AIU & statutory council equivalence before submitting directly to the university registrar.",
    duration: "24 – 48 Hours",
    icon: UserCheck,
    deliverable: "Official Registrar Application & Scholarship Audit",
    actionLabel: "Speak to an Admissions Dean",
    actionHref: "/contact",
    details: [
      "Confirm all subject combinations meet the statutory program eligibility threshold",
      "Apply merit scholarship waivers (up to 50% tuition waiver) & international quota concessions",
      "Submit directly through the university's International Relations Office (IRO)",
      "Track live registrar review status on your personal student dashboard",
    ],
  },
  {
    number: "05",
    phase: "Phase 2 • Verification & Offer",
    phaseShort: "Offer Letter",
    title: "Provisional Offer Letter Issuance",
    desc: "Receive your official University Admission Offer Letter bearing your unique registration reference, confirmed scholarship, and fee schedule.",
    duration: "3 – 7 Business Days",
    icon: Award,
    deliverable: "Official University Registrar Admission Letter",
    actionLabel: "Scholarships & Offer FAQs",
    actionHref: "/faq",
    details: [
      "Issued on official university letterhead signed by the International Registrar",
      "Itemizes exact semester tuition, confirmed merit waiver, and hostel fees",
      "Includes official university bank SWIFT / NEFT details for direct fee payment",
      "Required document for Indian Student e-Visa (S-1) or MoEST NOC processing",
    ],
  },
  {
    number: "06",
    phase: "Phase 3 • Visa, NOC & Campus Arrival",
    phaseShort: "Visa / NOC & Fee",
    title: "Student e-Visa / MoEST NOC & Direct Bank Wire",
    desc: "Obtain your fast-track Indian Student e-Visa (or MoEST NOC for Nepal) and transfer your first-semester tuition directly to the university bank account.",
    duration: "2 – 5 Days",
    icon: Landmark,
    deliverable: "Approved Student Visa / NOC & Official Fee Receipt",
    actionLabel: "Visa, NOC & Banking Guide",
    actionHref: "/study-in-india",
    details: [
      "Global students apply online for the Indian Student Visa (S-1) using their university admission letter",
      "Nepali students travel visa-free (1950 Treaty) and apply for NOC at noc.moest.gov.np",
      "Transfer semester tuition via SWIFT, Flywire, or Class-A bank wire directly to the university",
      "Receive instant official university fee receipt & confirmed seat allocation letter",
    ],
  },
  {
    number: "07",
    phase: "Phase 3 • Visa, NOC & Campus Arrival",
    phaseShort: "Campus Arrival",
    title: "Hostel Check-In, e-FRRO & Campus Onboarding",
    desc: "Receive your hostel allocation slip, fly or travel to India, and get welcomed by our airport reception team for seamless campus onboarding.",
    duration: "Prior to Semester Start",
    icon: Plane,
    deliverable: "Hostel Check-In, Indian Bank Account & e-FRRO Permit",
    actionLabel: "Connect With Arrival Desk",
    actionHref: "/contact",
    details: [
      "Coordinate airport / railway station pickup with the International Student Cell",
      "Complete paperless online e-FRRO registration within 14 days (for visa holders)",
      "Open a zero-balance Indian student bank account (SBI / HDFC) with UPI QR payments",
      "Attend international fresher orientation and begin your degree classes",
    ],
  },
];

export function AdmissionRoadmapShowcase() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  const toggleCompleted = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedSteps((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / steps.length) * 100);

  return (
    <div className="space-y-12">
      {/* ════════════════════════════════════════════════════════════════
          HERO — Executive Roadmap Header & Live Journey Telemetry
         ════════════════════════════════════════════════════════════════ */}
      <section className="relative rounded-[28px] bg-white border border-slate-200/90 p-6 sm:p-10 lg:p-11 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.04),0_20px_50px_-16px_rgba(15,23,42,0.06)] overflow-hidden">
        {/* Subtle Top Emerald Accent Line */}
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700" />
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/[0.05] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left 8 Cols: Badge, Single-Line Desktop Heading & Subtitle */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="default" className="text-xs sm:text-[13px] font-bold px-3.5 py-1">
                Zero Hidden Fees • Direct Process
              </Badge>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-[13px] font-semibold border border-slate-200/80">
                <Clock className="w-3.5 h-3.5 text-emerald-700" />
                <span>End-to-End Turnaround: 7–14 Days</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl xl:text-[42px] font-black text-slate-950 tracking-tight font-heading leading-[1.12] xl:whitespace-nowrap">
              The Complete <span className="text-emerald-700">Admission Roadmap</span>
            </h1>

            <p className="text-slate-700 text-base sm:text-[17px] max-w-2xl leading-relaxed font-normal">
              Follow our verified, step-by-step admission pathway from your home country to the classrooms of India&apos;s top accredited universities — with direct registrar tracking and zero consultancy fees.
            </p>
          </div>

          {/* Right 4 Cols: Executive Summary Telemetry Box */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 space-y-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                    Direct Registrar Pathway
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-white">
                    2026–27 International Intake
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/35 text-emerald-300 text-[11px] font-bold">
                  7 Verified Steps
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.06] border border-white/15">
                  <div className="text-xs text-slate-300 font-medium">Offer Letter Speed</div>
                  <div className="text-base sm:text-lg font-black text-white font-heading mt-0.5">
                    3–7 Days
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.06] border border-white/15">
                  <div className="text-xs text-slate-300 font-medium">Application Fee</div>
                  <div className="text-base sm:text-lg font-black text-emerald-400 font-heading mt-0.5">
                    $100 USD / NPR 1,000
                  </div>
                </div>
              </div>

              <Link href="/register" className="block">
                <Button className="w-full h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm cursor-pointer gap-1.5">
                  <span>Start Step 01 Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Interactive Horizontal 7-Step Journey Navigator Bar ── */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Interactive Journey Navigator — Click any step to inspect
            </span>
            <div className="flex items-center gap-3">
              {completedCount > 0 && (
                <div className="hidden sm:flex items-center gap-2">
                  <div className="w-24 h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-emerald-600 transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-emerald-800">
                    {progressPercent}%
                  </span>
                </div>
              )}
              <span className="text-xs sm:text-[13px] font-bold text-emerald-800">
                {completedCount > 0
                  ? `${completedCount} of 7 Steps Completed`
                  : `Inspecting Step ${steps[activeStepIndex].number} of 07`}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {steps.map((st, i) => {
              const isActive = activeStepIndex === i;
              const isDone = !!completedSteps[i];
              return (
                <button
                  key={st.number}
                  type="button"
                  onClick={() => {
                    setActiveStepIndex(i);
                    const el = document.getElementById(`roadmap-step-${st.number}`);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-emerald-700 text-white border-emerald-700 shadow-xs"
                      : isDone
                      ? "bg-emerald-50 text-emerald-950 border-emerald-300"
                      : "bg-slate-50 text-slate-800 border-slate-200/90 hover:bg-white hover:border-emerald-400"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                      isActive
                        ? "bg-white text-emerald-800"
                        : isDone
                        ? "bg-emerald-600 text-white"
                        : "bg-white text-slate-800 border border-slate-300"
                    }`}
                  >
                    {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : st.number}
                  </span>
                  <div className="min-w-0">
                    <div
                      className={`text-xs font-bold truncate ${
                        isActive ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {st.phaseShort}
                    </div>
                    <div
                      className={`text-[11px] font-medium truncate ${
                        isActive ? "text-emerald-100" : "text-slate-600"
                      }`}
                    >
                      {st.duration}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TIMELINE ROADMAP — Perfectly Aligned Node & High-Contrast Card Grid
         ════════════════════════════════════════════════════════════════ */}
      <ol className="space-y-6">
        {steps.map((st, idx) => {
          const IconComponent = st.icon;
          const isLast = idx === steps.length - 1;
          const isActive = activeStepIndex === idx;
          const isDone = !!completedSteps[idx];
          const showPhaseBanner =
            idx === 0 || steps[idx - 1].phase !== st.phase;

          return (
            <li
              key={st.number}
              id={`roadmap-step-${st.number}`}
              className="scroll-mt-28"
            >
              {/* Phase Divider Pill */}
              {showPhaseBanner && (
                <div className="mb-4 flex items-center gap-3 pl-12 sm:pl-16">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300/80 text-xs font-extrabold uppercase tracking-wider text-emerald-900 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{st.phase}</span>
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
              )}

              {/* Timeline Row: Left Rail (Node + Connecting Line) + Right Card */}
              <div className="relative flex items-stretch gap-3 sm:gap-5">
                {/* Left Timeline Column */}
                <div className="relative flex flex-col items-center w-9 sm:w-11 shrink-0 pt-6">
                  {/* Numbered Emerald Timeline Node */}
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    aria-label={`Select Step ${st.number}: ${st.title}`}
                    className={`relative z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-2xl font-heading font-black text-xs sm:text-sm flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs ${
                      isDone
                        ? "bg-emerald-600 text-white border-2 border-emerald-600 ring-4 ring-emerald-100"
                        : isActive
                        ? "bg-slate-900 text-white border-2 border-emerald-500 ring-4 ring-emerald-500/15 scale-105"
                        : "bg-white text-slate-800 border-2 border-slate-300 hover:border-emerald-600 hover:text-emerald-800"
                    }`}
                  >
                    {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : st.number}
                  </button>

                  {/* Continuous Vertical Connecting Line to Next Step */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="w-[2px] flex-1 bg-slate-200 my-2 rounded-full overflow-hidden"
                    >
                      <div
                        className={`w-full transition-all duration-500 ${
                          isDone || idx < activeStepIndex
                            ? "h-full bg-emerald-600"
                            : "h-0 bg-emerald-600"
                        }`}
                      />
                    </div>
                  )}
                </div>

                {/* Right Step Card */}
                <div
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex-1 min-w-0 group rounded-2xl bg-white border transition-all duration-200 cursor-pointer overflow-hidden ${
                    isActive
                      ? "border-emerald-500/80 shadow-[0_12px_36px_-8px_rgba(5,150,105,0.12),0_2px_6px_rgba(15,23,42,0.04)] ring-1 ring-emerald-500/15"
                      : "border-slate-200/95 hover:border-emerald-400/70 shadow-[0_1px_3px_rgba(15,23,42,0.03)] hover:shadow-[0_10px_28px_-6px_rgba(15,23,42,0.06)]"
                  }`}
                >
                  <div className="p-5 sm:p-7 space-y-5">
                    {/* Card Top Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5 sm:gap-4">
                        {/* Step Icon Box */}
                        <div
                          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                            isActive
                              ? "bg-emerald-700 text-white shadow-xs"
                              : "bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white"
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>

                        {/* Step Title & Description */}
                        <div className="space-y-1.5 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-emerald-800">
                              Step {st.number}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-200">
                              <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                              <span>{st.duration}</span>
                            </span>
                          </div>

                          <h2 className="text-xl sm:text-[22px] font-extrabold text-slate-950 font-heading tracking-tight leading-snug group-hover:text-emerald-950">
                            {st.title}
                          </h2>
                          <p className="text-sm sm:text-[15.5px] text-slate-700 leading-relaxed max-w-3xl font-normal">
                            {st.desc}
                          </p>
                        </div>
                      </div>

                      {/* Mark Step Done Pill (Interactive Self-Tracker) */}
                      <button
                        type="button"
                        aria-pressed={isDone}
                        onClick={(e) => toggleCompleted(idx, e)}
                        className={`self-start inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-[13px] font-bold border transition-all cursor-pointer shrink-0 ${
                          isDone
                            ? "bg-emerald-50 text-emerald-900 border-emerald-400"
                            : "bg-slate-50 text-slate-700 border-slate-300 hover:border-emerald-500 hover:text-emerald-800"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 ${
                            isDone ? "text-emerald-600" : "text-slate-500"
                          }`}
                        />
                        <span>{isDone ? "Completed" : "Mark Complete"}</span>
                      </button>
                    </div>

                    {/* Key Actions & Milestones 2x2 Balanced Grid */}
                    <div className="rounded-xl bg-slate-50/85 border border-slate-200/90 p-4 sm:p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                          Key Actions &amp; Milestones
                        </span>
                        <span className="text-xs font-semibold text-slate-600 hidden sm:inline">
                          {st.details.length} Verification Checkpoints
                        </span>
                      </div>

                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {st.details.map((d, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 text-[13.5px] sm:text-sm text-slate-800 font-medium leading-relaxed shadow-[0_1px_2px_rgba(15,23,42,0.02)]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer: Deliverable Outcome & Direct Action Link */}
                    <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13px] sm:text-sm">
                      <div className="inline-flex flex-wrap items-center gap-2.5 text-slate-700">
                        <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold text-[11px] uppercase tracking-wider">
                          Step Deliverable
                        </span>
                        <span className="font-bold text-slate-900">
                          {st.deliverable}
                        </span>
                      </div>

                      <Link
                        href={st.actionHref}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 group/link self-start sm:self-auto"
                      >
                        <span>{st.actionLabel}</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {/* ════════════════════════════════════════════════════════════════
          BOTTOM EXECUTIVE CTA BANNER — Clean White & Emerald Architecture
         ════════════════════════════════════════════════════════════════ */}
      <section className="relative rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.04),0_20px_50px_-16px_rgba(15,23,42,0.06)] overflow-hidden">
        {/* Top Emerald Accent Hairline matching the Hero Card */}
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700" />
        <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-emerald-500/[0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Direct University Registrar Submissions</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-950 tracking-tight">
              Start Your <span className="text-emerald-700">Admission Journey</span> Today
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Create your student profile in 10 minutes and let our counselors verify your eligibility across 300+ accredited Indian universities.
            </p>

            {/* Quick Reassurance Checkpoints */}
            <div className="pt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-[13px] font-bold text-slate-700">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>$100 USD (Intl) / NPR 1,000 (Nepal) Fee</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Official Gazette Tuition</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>7–10 Working Day Offer Letters</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link href="/register">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm h-12 px-7 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer gap-2 group"
              >
                <span>Begin Free Application</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-emerald-600 hover:text-emerald-800 font-semibold text-sm h-12 px-6 rounded-xl transition-all cursor-pointer"
              >
                Speak to an Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
