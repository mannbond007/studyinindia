"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  ShieldCheck,
  Clock,
  FileCheck2,
  Compass,
  Lock,
  FileText,
  Building2,
  Globe2,
  Scale,
  EyeOff,
  AlertTriangle,
  Mail,
  Phone,
  GraduationCap,
  CreditCard,
  ShieldAlert,
  Sparkles,
  ChevronRight,
  BookOpen,
  Briefcase,
  Users2,
  HelpCircle,
  FileBadge,
  Award,
  Landmark,
} from "lucide-react";

export type TermsIconVariant =
  | "scope"
  | "credentials"
  | "authority"
  | "financial"
  | "visa"
  | "scholarship"
  | "agents"
  | "intellectual"
  | "liability"
  | "governance"
  | "check"
  | "alert"
  | "mail"
  | "phone";

interface TermsIconProps {
  variant: TermsIconVariant;
  size?: "xs" | "sm" | "md" | "lg";
  tone?: "emerald" | "slate" | "amber";
}

const ICON_COMPONENT_MAP: Record<
  TermsIconVariant,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  scope: BookOpen,
  credentials: FileCheck2,
  authority: Landmark,
  financial: CreditCard,
  visa: Globe2,
  scholarship: Award,
  agents: Users2,
  intellectual: FileBadge,
  liability: AlertTriangle,
  governance: Scale,
  check: ShieldCheck,
  alert: AlertTriangle,
  mail: Mail,
  phone: Phone,
};

/* ─── Ultra-Premium Architectural Glass Squircle Icon ─── */
export function TermsIcon({ variant, size = "md", tone = "emerald" }: TermsIconProps) {
  const IconComponent = ICON_COMPONENT_MAP[variant] || ShieldCheck;

  const sizeStyles = {
    xs: { box: "w-7 h-7 rounded-lg", icon: "w-3.5 h-3.5" },
    sm: { box: "w-9 h-9 rounded-xl", icon: "w-4 h-4" },
    md: { box: "w-11 h-11 rounded-2xl", icon: "w-5 h-5" },
    lg: { box: "w-12 h-12 rounded-2xl", icon: "w-5 h-5" },
  }[size];

  const surfaceStyles =
    tone === "amber"
      ? "bg-gradient-to-br from-amber-500/15 via-amber-500/10 to-amber-600/5 border border-amber-400/50 text-amber-800 shadow-xs"
      : tone === "slate"
      ? "bg-gradient-to-br from-slate-900 via-slate-800 to-[#0f172a] border border-slate-700 text-slate-300 shadow-xs"
      : "bg-gradient-to-br from-[#063b2c] via-[#04241c] to-[#07131a] border border-emerald-400/35 text-emerald-300 shadow-[0_10px_24px_-6px_rgba(5,150,105,0.35),inset_0_1px_1px_rgba(167,243,208,0.28)]";

  return (
    <div
      className={`relative shrink-0 inline-flex items-center justify-center ${sizeStyles.box} ${surfaceStyles} overflow-hidden transition-transform duration-200`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          tone === "amber"
            ? "bg-[radial-gradient(circle_at_20%_15%,rgba(251,191,36,0.2)_0%,transparent_65%)]"
            : tone === "slate"
            ? "bg-[radial-gradient(circle_at_20%_15%,rgba(148,163,184,0.2)_0%,transparent_65%)]"
            : "bg-[radial-gradient(circle_at_20%_15%,rgba(52,211,153,0.3)_0%,transparent_65%)]"
        }`}
      />
      <IconComponent className={`${sizeStyles.icon} relative z-10`} strokeWidth={2} />
    </div>
  );
}

interface TermSection {
  id: string;
  number: string;
  title: string;
  category: "admissions" | "academics" | "financial" | "ethics" | "legal";
  categoryLabel: string;
  summary: string;
  keywords: string;
  iconVariant: TermsIconVariant;
}

const TERMS_SECTIONS: TermSection[] = [
  {
    id: "platform-scope",
    number: "01",
    title: "Platform Scope & International Advisory Services",
    category: "admissions",
    categoryLabel: "Admissions Scope",
    summary:
      "StudyIndia Global operates as a verified digital liaison and advisory portal for global candidates.",
    keywords:
      "platform scope advisory services liaison course discovery ai equivalence waec a-levels cbse",
    iconVariant: "scope",
  },
  {
    id: "credential-authenticity",
    number: "02",
    title: "Accuracy of Submitted Credentials & Zero-Fraud Mandate",
    category: "academics",
    categoryLabel: "Credential Standards",
    summary:
      "Strict legal requirement that all secondary/high-school transcripts and identity documents are authentic.",
    keywords:
      "accuracy submitted credentials transcripts fraud cancellation reporting ai passport high school",
    iconVariant: "credentials",
  },
  {
    id: "university-authority",
    number: "03",
    title: "University Admission Authority & Senate Discretion",
    category: "admissions",
    categoryLabel: "Admission Discretion",
    summary:
      "Final admission authority, offer letter issuance, and academic intake decisions rest with the university.",
    keywords:
      "university admission authority registrar senate offer letter merit evaluation selection",
    iconVariant: "authority",
  },
  {
    id: "tuition-transparency",
    number: "04",
    title: "Tuition Transparency & Direct Institutional Payments",
    category: "financial",
    categoryLabel: "Financial Terms",
    summary:
      "Tuition fees must be remitted directly to accredited university bank accounts with zero intermediary markups.",
    keywords:
      "tuition transparency payments zero fee inflated fees bank account wire remittance invoices",
    iconVariant: "financial",
  },
  {
    id: "visa-compliance",
    number: "05",
    title: "Student Registration ID, S-1 Visa & e-FRRO Compliance",
    category: "academics",
    categoryLabel: "Immigration & Visa",
    summary:
      "Mandatory protocols for securing Bonafide certificates, official student registration numbers, and consular e-FRRO onboarding.",
    keywords:
      "student registration id student visa s-1 e-frro bonafide embassy consulate foreign registration bureau of immigration",
    iconVariant: "visa",
  },
  {
    id: "scholarships-waivers",
    number: "06",
    title: "Merit Scholarships & Tuition Waiver Governance",
    category: "financial",
    categoryLabel: "Scholarship Terms",
    summary:
      "Eligibility evaluation for international merit awards, COMPEX schemes, and institutional tuition waivers up to 100%.",
    keywords:
      "scholarships waivers merit cgpa gpa renewal compex international scholarship fee discount",
    iconVariant: "scholarship",
  },
  {
    id: "agent-ethics",
    number: "07",
    title: "Authorized Partner Agent Code of Conduct",
    category: "ethics",
    categoryLabel: "Partner Ethics",
    summary:
      "Binding behavioral charter forbidding hidden counseling surcharges, falsification, and coercive recruitment.",
    keywords:
      "partner agent code of conduct ethical counseling compliance unauthorized fees student protection",
    iconVariant: "agents",
  },
  {
    id: "digital-ip",
    number: "08",
    title: "Digital Platform Integrity & Intellectual Property",
    category: "legal",
    categoryLabel: "IP & Portal Integrity",
    summary:
      "Protection of proprietary software architecture, university catalogs, and trademark assets.",
    keywords:
      "intellectual property copyright scraping bot extraction trademarks proprietary portal software",
    iconVariant: "intellectual",
  },
  {
    id: "liability-disclaimer",
    number: "09",
    title: "Limitation of Liability & External Factors",
    category: "legal",
    categoryLabel: "Liability Disclaimer",
    summary:
      "Boundaries regarding third-party embassy decisions, flight scheduling, and hostel accommodation allocations.",
    keywords:
      "limitation of liability disclaimers visa refusal flight accommodation force majeure travel",
    iconVariant: "liability",
  },
  {
    id: "governance-arbitration",
    number: "10",
    title: "Governing Law, Dispute Resolution & Arbitration",
    category: "legal",
    categoryLabel: "Legal & Jurisdiction",
    summary:
      "Statutory jurisdiction in New Delhi/NCR, amicable mediation avenues, and formal dispute settlement.",
    keywords:
      "governing law dispute resolution arbitration jurisdiction courts india new delhi mediation",
    iconVariant: "governance",
  },
];

const PLATFORM_COMMITMENTS = [
  {
    icon: Building2,
    title: "Direct Institutional Liaison",
    badge: "UGC / AICTE / NAAC",
    description:
      "Official coordination with accredited Indian universities ensuring zero intermediary distortion or unauthorized fees.",
  },
  {
    icon: Award,
    title: "Merit Scholarship Assessment",
    badge: "Up to 100% Tuition Waiver",
    description:
      "Transparent evaluation of high school grades for COMPEX, international scholarship schemes, and institutional fee subsidies.",
  },
  {
    icon: GraduationCap,
    title: "AIU Equivalence Verification",
    badge: "50+ Global Boards",
    description:
      "Pre-evaluation of A-Levels, IB, WAEC, CBSE, NEB, and equivalent national boards against Association of Indian Universities norms.",
  },
  {
    icon: Globe2,
    title: "S-1 Visa & Bonafide Guidance",
    badge: "e-FRRO Support",
    description:
      "Official facilitation of university bonafide letters and consular guidance for smooth Indian Student Visa onboarding.",
  },
];

const APPLICANT_RESPONSIBILITIES = [
  {
    icon: FileCheck2,
    title: "Absolute Document Authenticity",
    badge: "Zero-Fraud Mandate",
    description:
      "Guaranteeing that all grade sheets, secondary school certificates, and passport details submitted are 100% genuine.",
  },
  {
    icon: CreditCard,
    title: "Direct University Payments",
    badge: "Zero Cash to Agents",
    description:
      "Ensuring that tuition fees and institutional deposits are transferred solely to official university bank accounts.",
  },
  {
    icon: Landmark,
    title: "Institutional Rules Adherence",
    badge: "Campus Code of Conduct",
    description:
      "Abiding by the host university's academic attendance thresholds, examination standards, and hostel guidelines.",
  },
  {
    icon: ShieldAlert,
    title: "Statutory Immigration Compliance",
    badge: "Foreigners Regional Registration",
    description:
      "Mandatory registration with the Foreigners Regional Registration Office (e-FRRO) within 14 days of arrival in India.",
  },
];

export function TermsConditionsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeSectionId, setActiveSectionId] = useState<string>("platform-scope");

  const filteredSections = TERMS_SECTIONS.filter((sec) => {
    const matchesCategory =
      activeCategory === "all" || sec.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      sec.title.toLowerCase().includes(q) ||
      sec.summary.toLowerCase().includes(q) ||
      sec.keywords.toLowerCase().includes(q) ||
      sec.number.includes(q);
    return matchesCategory && matchesSearch;
  });

  const visibleIds = new Set(filteredSections.map((s) => s.id));
  const isFiltered = activeCategory !== "all" || searchQuery.trim() !== "";

  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ════════════════════════════════════════════════════════════════
            1. EXECUTIVE HERO BANNER
           ════════════════════════════════════════════════════════════════ */}
        <div className="relative rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-[0_14px_40px_-12px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-slate-900" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-200/80">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-[11px] font-extrabold uppercase tracking-widest text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Global Admissions &amp; Legal Service Charter</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200/60">
                  Effective &amp; Updated: October 2026
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 font-heading tracking-tight leading-[1.12]">
                Terms of Service &amp;{" "}
                <span className="text-emerald-700">Student Service Agreement</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Welcome to <strong className="font-bold text-slate-900">StudyIndia Global</strong>. These terms govern your engagement with our international education discovery, credential verification, Student e-Visa advisory, and authorized university liaison platform. Please review these contractual provisions carefully.
              </p>
            </div>

            {/* Executive Trust Seal Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#042f24] via-[#06382c] to-[#0a1628] text-white p-6 border border-emerald-500/25 shadow-[0_18px_38px_-12px_rgba(4,47,36,0.45)] shrink-0 lg:w-[360px] space-y-3.5 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-emerald-400/15 blur-2xl pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-emerald-300 block">
                    Institutional Governance
                  </span>
                  <div className="text-base font-extrabold text-white leading-snug mt-1 font-heading">
                    Zero Inflated Tuition Guarantee
                  </div>
                </div>
                <TermsIcon variant="authority" size="md" />
              </div>
              <p className="relative z-10 text-xs text-emerald-50/85 leading-relaxed">
                All course fees, hostel rates, and merit waivers correspond directly with statutory rates approved by partner university senates.
              </p>
              <div className="relative z-10 pt-1 flex items-center gap-2 text-[11px] font-bold text-emerald-300">
                <Landmark className="w-3.5 h-3.5 shrink-0" />
                <span>UGC, AICTE &amp; AIU Regulatory Alignment</span>
              </div>
            </div>
          </div>

          {/* 4 Pillar Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-7">
            {[
              {
                variant: "financial" as TermsIconVariant,
                badge: "Direct Remittance",
                title: "100% Direct University Tuition",
                desc: "Tuition is payable directly to accredited university bank accounts with zero hidden surcharge.",
              },
              {
                variant: "credentials" as TermsIconVariant,
                badge: "Anti-Fraud Integrity",
                title: "Authentic Credential Mandate",
                desc: "Rigorous pre-screening for high-school transcripts preventing fraudulent visa rejection.",
              },
              {
                variant: "authority" as TermsIconVariant,
                badge: "Senate Discretion",
                title: "Autonomous Admission Discretion",
                desc: "Official offer letters and final scholarship decisions remain solely with university registrars.",
              },
              {
                variant: "visa" as TermsIconVariant,
                badge: "Consular Protocol",
                title: "Bilateral Visa & FRRO Support",
                desc: "Structured university bonafide coordination for Student Visa (S-1) & Indian e-FRRO compliance.",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/85 hover:border-emerald-300 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.12)] transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/90 px-2.5 py-1 rounded-lg">
                    {pillar.badge}
                  </span>
                  <TermsIcon variant={pillar.variant} size="sm" />
                </div>
                <div className="space-y-1.5">
                  <div className="text-[15px] font-extrabold text-slate-900 font-heading group-hover:text-emerald-800 transition-colors">
                    {pillar.title}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            2. ARCHITECTURAL SERVICE MATRIX:
               PLATFORM COMMITMENTS VS. APPLICANT RESPONSIBILITIES
           ════════════════════════════════════════════════════════════════ */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 px-1">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bilateral Contractual Framework</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight">
                Platform Commitments vs.{" "}
                <span className="text-emerald-700">Applicant Responsibilities</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              A transparent breakdown of StudyIndia Global’s verified service guarantees alongside the obligations expected from prospective students.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* LEFT PANEL: Platform Commitments */}
            <div className="relative rounded-3xl bg-white border border-emerald-200/90 shadow-[0_14px_38px_-14px_rgba(16,185,129,0.1)] overflow-hidden flex flex-col justify-between">
              <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-700" />

              <div className="p-6 sm:p-8 space-y-6 flex-1">
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#063b2c] via-[#04241c] to-[#07131a] border border-emerald-400/35 flex items-center justify-center shrink-0 shadow-[0_10px_24px_-6px_rgba(5,150,105,0.35)]">
                      <ShieldCheck className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Platform Guarantees
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading tracking-tight">
                        What StudyIndia Global Delivers
                      </h3>
                      <p className="text-xs text-slate-500">
                        Authorized digital advisory, credential matching, and visa liaison
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {PLATFORM_COMMITMENTS.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="group relative p-4 rounded-2xl bg-slate-50/70 hover:bg-emerald-50/35 border border-slate-200/80 hover:border-emerald-300/90 transition-all duration-200 flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-emerald-950 border border-emerald-200/90 group-hover:border-emerald-700 flex items-center justify-center shrink-0 shadow-2xs transition-colors duration-200 mt-0.5">
                          <ItemIcon className="w-4 h-4 text-emerald-700 group-hover:text-emerald-300 transition-colors duration-200" />
                        </div>
                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-xs sm:text-[13.5px] font-extrabold text-slate-900 font-heading">
                              {item.title}
                            </h4>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[10px] font-bold text-emerald-800">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="px-6 sm:px-8 py-3.5 bg-emerald-50/60 border-t border-emerald-100 flex items-center justify-between gap-3 text-[11.5px] font-semibold text-emerald-900">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Transparent Fee Protection • Zero Arbitrary Processing Charges</span>
                </div>
                <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-emerald-700 shrink-0">
                  Direct Affiliations
                </span>
              </div>
            </div>

            {/* RIGHT PANEL: Applicant Responsibilities */}
            <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_14px_38px_-14px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col justify-between">
              <div className="h-1.5 w-full bg-gradient-to-r from-slate-800 via-slate-700 to-emerald-700" />

              <div className="p-6 sm:p-8 space-y-6 flex-1">
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-[#071a14] border border-slate-700 flex items-center justify-center shrink-0 shadow-[0_10px_24px_-6px_rgba(15,23,42,0.35)]">
                      <GraduationCap className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-extrabold uppercase tracking-wider text-slate-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          Student Code of Conduct
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading tracking-tight">
                        What Students &amp; Agents Guarantee
                      </h3>
                      <p className="text-xs text-slate-500">
                        Accuracy, compliance with Indian immigration laws, and ethical cooperation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {APPLICANT_RESPONSIBILITIES.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="group relative p-4 rounded-2xl bg-slate-50/70 hover:bg-slate-100/70 border border-slate-200/80 hover:border-slate-300 transition-all duration-200 flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-slate-900 border border-slate-200/90 group-hover:border-slate-800 flex items-center justify-center shrink-0 shadow-2xs transition-colors duration-200 mt-0.5">
                          <ItemIcon className="w-4 h-4 text-slate-700 group-hover:text-emerald-300 transition-colors duration-200" />
                        </div>
                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-xs sm:text-[13.5px] font-extrabold text-slate-900 font-heading">
                              {item.title}
                            </h4>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="px-6 sm:px-8 py-3.5 bg-slate-100/80 border-t border-slate-200/80 flex items-center justify-between gap-3 text-[11.5px] font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                  <span>Strict AIU Verification &amp; Embassy Blacklist Prevention</span>
                </div>
                <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-900 shrink-0">
                  Legal Compliance
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            3. MAIN INTERACTIVE LAYOUT: STICKY SIDEBAR + DETAILED CLAUSES
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 4 COLS: Sticky Navigation & Clause Filter */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Agreement Navigator
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-800">
                  {filteredSections.length} of {TERMS_SECTIONS.length} Clauses
                </span>
              </div>

              {/* Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter terms (e.g. Visa, Tuition, Fraud)..."
                  className="w-full h-10 pl-9 pr-8 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-700 text-xs font-bold px-1 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: "all", label: "All (10)" },
                  { id: "admissions", label: "Admissions" },
                  { id: "academics", label: "Academics" },
                  { id: "financial", label: "Financial" },
                  { id: "ethics", label: "Partner Ethics" },
                  { id: "legal", label: "Legal" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      activeCategory === cat.id
                        ? "bg-emerald-950 text-emerald-300 border border-emerald-500/40 shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 border border-transparent"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Section Anchor Links */}
              {filteredSections.length > 0 ? (
                <nav className="space-y-1.5 max-h-[440px] overflow-y-auto pr-1">
                  {filteredSections.map((sec) => {
                    const isActive = activeSectionId === sec.id;
                    const NavIcon =
                      ICON_COMPONENT_MAP[sec.iconVariant] || ShieldCheck;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={() => setActiveSectionId(sec.id)}
                        className={`group flex items-center gap-3 p-2.5 rounded-xl border transition-all ${
                          isActive
                            ? "bg-emerald-50/90 border-emerald-200/90 shadow-2xs"
                            : "bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-200/70"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isActive
                              ? "bg-emerald-950 text-emerald-300"
                              : "bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700"
                          }`}
                        >
                          <NavIcon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div
                            className={`text-xs font-bold truncate transition-colors ${
                              isActive
                                ? "text-emerald-950"
                                : "text-slate-800 group-hover:text-emerald-900"
                            }`}
                          >
                            {sec.number}. {sec.title}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate">
                            {sec.summary}
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            isActive
                              ? "text-emerald-700 translate-x-0.5"
                              : "text-slate-300 group-hover:text-slate-500"
                          }`}
                        />
                      </a>
                    );
                  })}
                </nav>
              ) : (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-2.5">
                  <p className="text-xs font-semibold text-slate-600">
                    No clauses match &ldquo;{searchQuery}&rdquo;
                  </p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Filters</span>
                  </button>
                </div>
              )}
            </div>

            {/* Quick Compliance Desk Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#042f24] via-[#06382c] to-[#0a1628] text-white p-6 border border-emerald-500/25 shadow-lg space-y-4 overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-emerald-400/15 blur-2xl pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10.5px] font-bold uppercase tracking-wider">
                  Admissions Ombudsperson
                </span>
                <TermsIcon variant="governance" size="sm" />
              </div>
              <h3 className="relative z-10 text-base font-extrabold font-heading text-white">
                Institutional Discrepancies or Agent Grievances?
              </h3>
              <p className="relative z-10 text-xs text-emerald-50/80 leading-relaxed">
                Our Legal &amp; Student Welfare Desk investigates unauthorized fees, unethical agent conduct, or admission timeline issues within 24 to 48 business hours.
              </p>
              <div className="relative z-10 space-y-2.5 pt-1 text-xs">
                <a
                  href="mailto:legal@studyindia.global"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-300 font-semibold transition-colors"
                >
                  <TermsIcon variant="mail" size="xs" />
                  <span>legal@studyindia.global</span>
                </a>
                <a
                  href="tel:+911206565065"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold transition-colors"
                >
                  <TermsIcon variant="phone" size="xs" />
                  <span>+91 120-6565065 (Global Legal Desk)</span>
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT 8 COLS: Detailed Legal & Governance Clauses */}
          <div className="lg:col-span-8 space-y-6">
            {/* Active Filter Status Bar */}
            {isFiltered && (
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-xs">
                <div className="font-semibold text-emerald-950">
                  Showing{" "}
                  <strong className="font-extrabold">
                    {filteredSections.length}
                  </strong>{" "}
                  of {TERMS_SECTIONS.length} agreement clauses
                  {activeCategory !== "all" && (
                    <span className="ml-1.5 px-2 py-0.5 rounded-md bg-emerald-200/70 text-emerald-950 font-bold uppercase text-[10.5px]">
                      {activeCategory}
                    </span>
                  )}
                  {searchQuery.trim() !== "" && (
                    <span className="ml-1.5 text-emerald-800">
                      matching &ldquo;{searchQuery}&rdquo;
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900 text-white font-bold hover:bg-emerald-800 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Show All 10 Clauses</span>
                </button>
              </div>
            )}

            {filteredSections.length === 0 && (
              <div className="rounded-3xl bg-white border border-slate-200/90 p-10 text-center space-y-4">
                <div className="flex justify-center">
                  <TermsIcon variant="governance" size="lg" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                  No Matching Terms Found
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                  We couldn&apos;t find any agreement clause matching your search or category filter. Reset the filter to view all 10 legal clauses.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-extrabold hover:bg-emerald-500 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Show All 10 Clauses</span>
                </button>
              </div>
            )}

            {/* CLAUSE 01: Platform Scope */}
            {visibleIds.has("platform-scope") && (
              <section
                id="platform-scope"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 01
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Admissions Scope
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Platform Scope &amp; International Advisory Services
                    </h2>
                  </div>
                  <TermsIcon variant="scope" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  StudyIndia Global operates as a centralized international admissions guidance and student service portal designed to bridge international applicants across 50+ countries with accredited Indian universities recognized by the <strong className="font-semibold text-slate-900">University Grants Commission (UGC)</strong>, <strong className="font-semibold text-slate-900">All India Council for Technical Education (AICTE)</strong>, and accredited by the <strong className="font-semibold text-slate-900">National Assessment and Accreditation Council (NAAC)</strong>.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our services encompass program discovery, course curriculum comparison, credential equivalence pre-screening under Association of Indian Universities (AIU) guidelines, application portfolio compilation, direct registrar submission, and consular facilitation for the Indian Student Visa (S-1) process.
                </p>
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-xs sm:text-[13px] text-emerald-950 font-medium leading-relaxed">
                  <strong className="font-extrabold">Advisory Boundary:</strong> StudyIndia Global acts strictly as an authorized liaison, counselor, and technical verification conduit. Access to our digital portal and counseling does not constitute an unconditioned guarantee of university admission or sovereign consular visa approval.
                </div>
              </section>
            )}

            {/* CLAUSE 02: Accuracy of Submitted Credentials */}
            {visibleIds.has("credential-authenticity") && (
              <section
                id="credential-authenticity"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 02
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Credential Standards
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Accuracy of Submitted Credentials &amp; Zero-Fraud Mandate
                    </h2>
                  </div>
                  <TermsIcon variant="credentials" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  All prospective students and representing authorized educational counselors warrant that every document, transcript, certificate, national identity proof, and international passport submitted through the StudyIndia Global platform is authentic, valid, and unmodified.
                </p>

                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    Transcripts evaluated include Grade 10 &amp; Grade 12 certificates issued by secondary examination boards, including but not limited to <strong className="font-semibold text-slate-800">General Certificate of Education (A-Levels), International Baccalaureate (IB), West African Examinations Council (WAEC), Central Board of Secondary Education (CBSE), National Examination Board (NEB)</strong>, and respective Ministry of Education certificates worldwide.
                  </p>
                  <p>
                    Submission of fabricated documents, fraudulent marksheets, or impersonated identity records results in immediate termination of the application, cancellation of university offer letters, forfeiture of any administrative claims, and mandatory reporting to the respective university registrar, the Ministry of External Affairs, and relevant immigration authorities.
                  </p>
                </div>
              </section>
            )}

            {/* CLAUSE 03: University Admission Authority */}
            {visibleIds.has("university-authority") && (
              <section
                id="university-authority"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 03
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Admission Discretion
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      University Admission Authority &amp; Senate Discretion
                    </h2>
                  </div>
                  <TermsIcon variant="authority" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  While StudyIndia Global assists international students in evaluating program eligibility and compiling admissions files, the sovereign authority to issue an official university offer letter, grant formal matriculation, or establish admission eligibility thresholds resides exclusively with the Admissions Senate, Registrar, and Academic Council of the chosen Indian university.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="text-xs font-extrabold text-slate-900">
                      Independent Academic Scrutiny
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Partner universities reserve the right to conduct independent interview screenings, entrance assessments, or language proficiency interviews prior to issuing a final unconditioned offer.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="text-xs font-extrabold text-slate-900">
                      Zero Guaranteed Admission Promises
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      StudyIndia Global explicitly prohibits partner counselors and representatives from promising guaranteed admissions where university prerequisites or AIU equivalence standards are unmet.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* CLAUSE 04: Tuition Transparency & Direct Institutional Payments */}
            {visibleIds.has("tuition-transparency") && (
              <section
                id="tuition-transparency"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 04
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Financial Terms
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Tuition Transparency &amp; Direct Institutional Payments
                    </h2>
                  </div>
                  <TermsIcon variant="financial" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  StudyIndia Global champions complete fiscal transparency. All tuition fees, registration fees, examination fees, and hostel accommodation charges published on our portal reflect the exact official rates established by partner universities for international students.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                    Direct Bank Remittance Protocol
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    All tuition and institutional payments must be transferred directly from the student or their family into the accredited bank account of the respective Indian university via SWIFT wire transfer, authorized international payment gateways, or verified demand drafts issued in favor of the university.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/90 flex items-start gap-3.5">
                  <TermsIcon variant="alert" size="sm" tone="amber" />
                  <div className="space-y-1">
                    <div className="text-xs font-extrabold text-amber-950 uppercase tracking-wider">
                      Zero Cash Handover Policy
                    </div>
                    <p className="text-xs text-amber-900/90 leading-relaxed">
                      StudyIndia Global and its authorized partner counselors are strictly prohibited from receiving or soliciting cash tuition fees from students. StudyIndia Global disclaims any liability for unauthorized cash handovers to external intermediaries.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* CLAUSE 05: Visa & e-FRRO Compliance */}
            {visibleIds.has("visa-compliance") && (
              <section
                id="visa-compliance"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 05
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Immigration &amp; Visa
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Student Registration ID, S-1 Visa &amp; e-FRRO Compliance
                    </h2>
                  </div>
                  <TermsIcon variant="visa" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  International candidates seeking higher education in India must strictly adhere to the immigration regulations stipulated by the Ministry of Home Affairs (MHA) and the Bureau of Immigration (BoI), Government of India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="text-xs font-extrabold text-slate-900">
                      1. Official Bonafide &amp; Student Registration ID
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Upon confirmation of admission, partner universities issue a formal Bonafide Letter containing the student&apos;s unique Student Registration ID required to file the Student Visa (S-1) application at Indian diplomatic missions.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="text-xs font-extrabold text-slate-900">
                      2. Mandatory e-FRRO Registration
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every foreign student holding an S-1 visa must register on the Indian Foreigners Regional Registration Office (e-FRRO) portal within 14 days of landing in India, facilitated by the university’s International Student Cell.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic">
                  Note: While StudyIndia Global provides comprehensive documentation guidance, the sovereign authority to issue, grant, or decline a visa remains exclusively with the consular division of the relevant Indian Embassy or High Commission.
                </p>
              </section>
            )}

            {/* CLAUSE 06: Merit Scholarships & Tuition Waivers */}
            {visibleIds.has("scholarships-waivers") && (
              <section
                id="scholarships-waivers"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 06
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Scholarship Terms
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Merit Scholarships &amp; Tuition Waiver Governance
                    </h2>
                  </div>
                  <TermsIcon variant="scholarship" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Scholarships presented on the platform, including international merit scholarship fee concessions, COMPEX scholarships, and institutional merit waivers (ranging from 20% to 100% on tuition), are awarded based on verified secondary academic performance and specific institutional scholarship matrices.
                </p>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Scholarship Retention &amp; Academic Continuation
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    Continued award of tuition fee waivers across progressive academic semesters is conditional upon maintaining the university&apos;s prescribed minimum Cumulative Grade Point Average (CGPA), meeting attendance thresholds (typically 75%+), and complying with campus behavioral standards.
                  </p>
                </div>
              </section>
            )}

            {/* CLAUSE 07: Partner Agent Code of Conduct */}
            {visibleIds.has("agent-ethics") && (
              <section
                id="agent-ethics"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 07
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Partner Ethics
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Authorized Partner Agent Code of Conduct
                    </h2>
                  </div>
                  <TermsIcon variant="agents" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Global recruitment partners, educational consultants, and regional liaison desks utilizing the StudyIndia Global platform must sign and adhere to our strict Code of Ethical Student Representation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="text-xs font-extrabold text-slate-900">
                      1. Fee Inflation Prohibition
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Agents are strictly forbidden from inflating university tuition schedules or demanding secret administrative processing fees from students.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="text-xs font-extrabold text-slate-900">
                      2. Accurate Representation
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Partners must provide objective, transparent details regarding campus location, program accreditation, hostel facilities, and refund terms.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* CLAUSE 08: Digital Platform Integrity & IP */}
            {visibleIds.has("digital-ip") && (
              <section
                id="digital-ip"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 08
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        IP &amp; Portal Integrity
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Digital Platform Integrity &amp; Intellectual Property
                    </h2>
                  </div>
                  <TermsIcon variant="intellectual" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  All intellectual property, proprietary software code, database architectures, university directory compilations, interactive eligibility estimators, visual designs, and brand marks displayed across StudyIndia Global are protected under applicable copyright and trademark legislation.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Users are strictly prohibited from utilizing automated web scrapers, bots, or data extraction scripts to harvest student directories, university program databases, or proprietary content without express written authorization.
                </p>
              </section>
            )}

            {/* CLAUSE 09: Limitation of Liability */}
            {visibleIds.has("liability-disclaimer") && (
              <section
                id="liability-disclaimer"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 09
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Liability Disclaimer
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Limitation of Liability &amp; External Factors
                    </h2>
                  </div>
                  <TermsIcon variant="liability" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  StudyIndia Global strives for continuous platform availability and accurate program representation. However, StudyIndia Global shall not be liable for losses, cancellations, or damages arising from external circumstances beyond our direct operational control.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed space-y-2">
                  <p>
                    <strong className="font-bold text-slate-900">External Delays:</strong> Factors outside our control include sovereign visa processing delays by foreign embassies, flight cancellations, geopolitical restrictions, or institutional adjustments to academic calendars made unilaterally by host universities.
                  </p>
                  <p>
                    <strong className="font-bold text-slate-900">Campus Accommodations:</strong> Room category allocations (single, twin sharing, or AC/non-AC rooms) are subject to real-time physical availability administered directly by university hostel wardens.
                  </p>
                </div>
              </section>
            )}

            {/* CLAUSE 10: Governing Law & Dispute Resolution */}
            {visibleIds.has("governance-arbitration") && (
              <section
                id="governance-arbitration"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 10
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Legal &amp; Jurisdiction
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Governing Law, Dispute Resolution &amp; Arbitration
                    </h2>
                  </div>
                  <TermsIcon variant="governance" size="lg" />
                </div>

                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    These Terms of Service and any contractual relationship formed hereunder shall be governed by and construed in accordance with the substantive laws of India.
                  </p>
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1.5">
                    <div className="text-xs font-extrabold text-emerald-950">
                      Amicable Resolution &amp; Jurisdiction
                    </div>
                    <p className="text-xs text-emerald-950/90 leading-relaxed">
                      In the event of any question or dispute arising out of this agreement, the parties shall first attempt to resolve the matter amicably through mediation administered by the StudyIndia Global Grievance Officer. Should mediation prove unsuccessful, any legal proceeding shall be subject to the exclusive jurisdiction of the competent courts situated in New Delhi / National Capital Region (NCR), India.
                    </p>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            4. FULL-WIDTH EXECUTIVE LEGAL DESK & GRIEVANCE BANNER
           ════════════════════════════════════════════════════════════════ */}
        <section className="relative rounded-3xl bg-gradient-to-r from-[#03261d] via-[#06382c] to-[#0a1628] text-white p-8 sm:p-10 lg:px-14 lg:py-11 shadow-[0_24px_50px_-12px_rgba(3,38,29,0.35)] border border-emerald-500/20 overflow-hidden">
          <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 -bottom-28 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-400/15 border border-emerald-300/25 text-emerald-200 text-xs font-bold tracking-wide">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Student Rights &amp; Institutional Governance Desk</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-100/80 text-[11px] font-semibold">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>24–48h Grievance Redressal</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-white leading-snug">
                Questions Regarding University Agreements, Fee Policies, or Agent Ethics?
              </h3>

              <p className="text-sm sm:text-[15px] text-emerald-50/80 leading-relaxed">
                Connect directly with the StudyIndia Global Legal &amp; Student Advisory Division for verified clarification, dispute resolution, or official registrar escalation.
              </p>

              {/* Direct Contact Channels */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1 text-xs sm:text-sm">
                <a
                  href="tel:+911206565065"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 font-bold text-white transition-colors"
                >
                  <TermsIcon variant="phone" size="xs" />
                  <span>Helpline: +91 120-6565065</span>
                </a>
                <a
                  href="mailto:legal@studyindia.global"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 font-bold text-emerald-200 transition-colors"
                >
                  <TermsIcon variant="mail" size="xs" />
                  <span>legal@studyindia.global</span>
                </a>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200/90 px-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  <span>Dedicated Student Legal Support</span>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-[#00d68f] hover:bg-[#00c080] text-slate-950 font-extrabold text-sm shadow-[0_10px_25px_-5px_rgba(0,214,143,0.45)] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                <span>Contact Legal Desk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/universities"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-xl bg-slate-900/55 hover:bg-slate-900/80 text-white border border-white/20 hover:border-white/35 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                <Compass className="w-4 h-4 text-emerald-300" />
                <span>Explore Universities</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

