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
  MessageSquare,
  Globe2,
  Server,
  Cookie,
  UserCheck,
  Scale,
  EyeOff,
  AlertTriangle,
  Mail,
  Phone,
  Copyright,
  GraduationCap,
  CreditCard,
  Fingerprint,
  ShieldAlert,
  ShieldOff,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export type Privacy3DIconVariant =
  | "copyright"
  | "collection"
  | "processing"
  | "whatsapp"
  | "globe"
  | "server"
  | "cookie"
  | "lock"
  | "usercheck"
  | "scale"
  | "eyeoff"
  | "check"
  | "cross"
  | "alert"
  | "mail"
  | "phone";

interface PrivacyIcon3DProps {
  variant: Privacy3DIconVariant;
  size?: "xs" | "sm" | "md" | "lg";
  tone?: "emerald" | "slate" | "rose" | "amber" | "teal";
}

const ICON_COMPONENT_MAP: Record<
  Privacy3DIconVariant,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  copyright: Copyright,
  collection: FileText,
  processing: Building2,
  whatsapp: MessageSquare,
  globe: Globe2,
  server: Server,
  cookie: Cookie,
  lock: Lock,
  usercheck: UserCheck,
  scale: Scale,
  eyeoff: EyeOff,
  check: ShieldCheck,
  cross: ShieldOff,
  alert: AlertTriangle,
  mail: Mail,
  phone: Phone,
};

/* ─── Ultra-Premium Architectural Glass Squircle Icon System ─── */
export function PrivacyIcon3D({
  variant,
  size = "md",
  tone,
}: PrivacyIcon3DProps) {
  const IconComponent = ICON_COMPONENT_MAP[variant] || ShieldCheck;
  const resolvedTone =
    tone ||
    (variant === "cross"
      ? "rose"
      : variant === "alert"
      ? "amber"
      : "emerald");

  const sizeStyles = {
    xs: {
      box: "w-7 h-7 rounded-lg",
      icon: "w-3.5 h-3.5",
    },
    sm: {
      box: "w-9 h-9 rounded-xl",
      icon: "w-4 h-4",
    },
    md: {
      box: "w-11 h-11 rounded-2xl",
      icon: "w-5 h-5",
    },
    lg: {
      box: "w-12 h-12 rounded-2xl",
      icon: "w-5 h-5",
    },
  }[size];

  const surfaceStyles =
    resolvedTone === "rose"
      ? "bg-gradient-to-br from-[#2a0812] via-[#19050b] to-[#0f050a] border border-rose-500/35 text-rose-300 shadow-[0_8px_20px_-6px_rgba(225,29,72,0.35),inset_0_1px_1px_rgba(255,228,230,0.2)]"
      : resolvedTone === "amber"
      ? "bg-gradient-to-br from-amber-500/15 via-amber-500/10 to-amber-600/5 border border-amber-400/50 text-amber-800 shadow-xs"
      : "bg-gradient-to-br from-[#063b2c] via-[#04241c] to-[#07131a] border border-emerald-400/35 text-emerald-300 shadow-[0_10px_24px_-6px_rgba(5,150,105,0.35),inset_0_1px_1px_rgba(167,243,208,0.28)]";

  return (
    <div
      className={`relative shrink-0 inline-flex items-center justify-center ${sizeStyles.box} ${surfaceStyles} overflow-hidden transition-transform duration-200`}
    >
      {/* Subtle top-left architectural light sheen */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          resolvedTone === "rose"
            ? "bg-[radial-gradient(circle_at_20%_15%,rgba(251,113,133,0.28)_0%,transparent_65%)]"
            : resolvedTone === "amber"
            ? "bg-[radial-gradient(circle_at_20%_15%,rgba(251,191,36,0.2)_0%,transparent_65%)]"
            : "bg-[radial-gradient(circle_at_20%_15%,rgba(52,211,153,0.3)_0%,transparent_65%)]"
        }`}
      />
      <IconComponent
        className={`${sizeStyles.icon} relative z-10`}
        strokeWidth={2}
      />
    </div>
  );
}

interface PolicySection {
  id: string;
  number: string;
  title: string;
  category: "collection" | "usage" | "security" | "rights" | "legal";
  categoryLabel: string;
  summary: string;
  keywords: string;
  iconVariant: Privacy3DIconVariant;
}

const POLICY_SECTIONS: PolicySection[] = [
  {
    id: "copyright-ip",
    number: "01",
    title: "Copyright & Intellectual Property",
    category: "legal",
    categoryLabel: "Legal & IP",
    summary:
      "Ownership of StudyIndia Global brand assets, digital tools, and advisory integrations.",
    keywords:
      "copyright trademark intellectual property brand logo scraping reproduction",
    iconVariant: "copyright",
  },
  {
    id: "collection",
    number: "02",
    title: "Collection of Personal Information",
    category: "collection",
    categoryLabel: "Data Collection",
    summary:
      "Lawful, consent-driven collection directly from applicants or authorized representatives.",
    keywords:
      "collection consent transcripts passport parent guardian facebook whatsapp",
    iconVariant: "collection",
  },
  {
    id: "processing",
    number: "03",
    title: "Processing & Use of Personal Data",
    category: "usage",
    categoryLabel: "Data Processing",
    summary:
      "How registration, academic transcripts, and institution preferences facilitate admissions.",
    keywords:
      "processing eligibility aiu grade conversion scholarship application submission",
    iconVariant: "processing",
  },
  {
    id: "whatsapp-comms",
    number: "04",
    title: "WhatsApp & Official Notifications",
    category: "usage",
    categoryLabel: "Communications",
    summary:
      "Real-time admission updates, intake timelines, and visa alerts via WhatsApp Messenger.",
    keywords: "whatsapp notifications sms email alerts intake deadlines opt out",
    iconVariant: "whatsapp",
  },
  {
    id: "institute-disclosure",
    number: "05",
    title: "Disclosure to Partner Universities & Telemetry",
    category: "usage",
    categoryLabel: "University Sharing",
    summary:
      "Controlled registrar sharing and anonymized statistical analytics for platform optimization.",
    keywords:
      "disclosure partner universities registrar telemetry ip address analytics",
    iconVariant: "globe",
  },
  {
    id: "storage-retention",
    number: "06",
    title: "Global Data Storage & Retention Tenure",
    category: "security",
    categoryLabel: "Cloud & Retention",
    summary:
      "Encrypted cloud servers, cross-border safeguards, and retention across your academic lifecycle.",
    keywords: "cloud storage retention server india international alumni tenure",
    iconVariant: "server",
  },
  {
    id: "cookies-links",
    number: "07",
    title: "Cookies & Third-Party Linked Portals",
    category: "security",
    categoryLabel: "Cookies & Links",
    summary:
      "Browser cookie controls and boundaries for external university or government links.",
    keywords: "cookies browser session external links third party websites",
    iconVariant: "cookie",
  },
  {
    id: "security-digital-policy",
    number: "08",
    title: "Confidentiality, Security & Digital Privacy",
    category: "security",
    categoryLabel: "Cybersecurity",
    summary:
      "Technical safeguards and compliance with international data protection legislation.",
    keywords: "confidentiality security encryption tls dpdpa gdpr compliance",
    iconVariant: "lock",
  },
  {
    id: "student-rights",
    number: "09",
    title: "Your Data Protection Rights & Exceptions",
    category: "rights",
    categoryLabel: "Student Rights",
    summary:
      "Your right to access, rectify, restrict, withdraw consent, or erase personal records.",
    keywords:
      "rights erasure delete restrict withdraw consent object access request exceptions",
    iconVariant: "usercheck",
  },
  {
    id: "acceptance-disclaimer",
    number: "10",
    title: "Policy Revisions, Acceptance & Financial Disclaimer",
    category: "legal",
    categoryLabel: "Terms & Disclaimer",
    summary:
      "Terms of account registration, policy updates, and zero-storage of payment credentials.",
    keywords:
      "revisions amendments acceptance banking payment credit card disclaimer",
    iconVariant: "scale",
  },
];

const REQUESTED_DATA_ITEMS = [
  {
    icon: UserCheck,
    title: "Identity & Demographic Profile",
    badge: "Eligibility & Intake",
    description:
      "Full legal name, date of birth, nationality, country of residence, and verified student contact number.",
  },
  {
    icon: GraduationCap,
    title: "Academic Transcripts & Boards",
    badge: "AIU Equivalence",
    description:
      "Secondary & High School (Grade 10 & 12) mark sheets across A-Levels, IB, WAEC, CBSE, NEB, or equivalent boards.",
  },
  {
    icon: Building2,
    title: "Institution & Degree Preferences",
    badge: "University Matching",
    description:
      "Your shortlisted Indian partner universities, preferred academic discipline, and scholarship eligibility tier.",
  },
  {
    icon: FileCheck2,
    title: "Passport / National ID Document",
    badge: "Student Visa & Bonafide",
    description:
      "Required strictly for issuing official University Registrar Bonafide certificates and Student Visa invitation letters.",
  },
];

const EXCLUDED_DATA_ITEMS = [
  {
    icon: CreditCard,
    title: "Banking & Payment Credentials",
    badge: "Zero Storage",
    description:
      "We never request, process, or store bank account passwords, credit/debit card CVVs, or net-banking PINs.",
  },
  {
    icon: Fingerprint,
    title: "Unrelated Sensitive Personal Data",
    badge: "Never Requested",
    description:
      "Any personal or biometric record not directly required for admission counseling is never requested, optionally or mandatorily.",
  },
  {
    icon: EyeOff,
    title: "Individual Behavioral Surveillance",
    badge: "Zero Profiling",
    description:
      "Portal telemetry is strictly aggregated for statistical performance and is never linked to your personal identity.",
  },
  {
    icon: ShieldAlert,
    title: "Commercial Third-Party Lead Selling",
    badge: "Strict Prohibition",
    description:
      "Your phone number, email address, and academic records are never sold or leased to external marketing agencies.",
  },
];

export function PrivacyPolicyClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeSectionId, setActiveSectionId] = useState<string>("copyright-ip");

  const filteredSections = POLICY_SECTIONS.filter((sec) => {
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
                  <span>Global Data Governance &amp; Privacy Charter</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200/60">
                  Effective &amp; Updated: October 2026
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 font-heading tracking-tight leading-[1.12]">
                Privacy Policy &amp;{" "}
                <span className="text-emerald-700">Student Data Protection</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At <strong className="font-bold text-slate-900">StudyIndia Global</strong>, protecting the personal identity, academic transcripts, and passport documentation of international students across 50+ countries is foundational to our mission. This charter explains transparently how we collect, use, safeguard, and respect your data.
              </p>
            </div>

            {/* Executive Trust Seal Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#042f24] via-[#06382c] to-[#0a1628] text-white p-6 border border-emerald-500/25 shadow-[0_18px_38px_-12px_rgba(4,47,36,0.45)] shrink-0 lg:w-[360px] space-y-3.5 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-emerald-400/15 blur-2xl pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-emerald-300 block">
                    Security Architecture
                  </span>
                  <div className="text-base font-extrabold text-white leading-snug mt-1 font-heading">
                    Zero Third-Party Data Monetization
                  </div>
                </div>
                <PrivacyIcon3D variant="lock" size="md" tone="emerald" />
              </div>
              <p className="relative z-10 text-xs text-emerald-50/85 leading-relaxed">
                Your academic files are shared exclusively with the accredited Indian universities you select during application.
              </p>
              <div className="relative z-10 pt-1 flex items-center gap-2 text-[11px] font-bold text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>DPDPA &amp; GDPR Aligned Governance</span>
              </div>
            </div>
          </div>

          {/* 4 Pillar Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-7">
            {[
              {
                variant: "collection" as Privacy3DIconVariant,
                badge: "100% Consent-Driven",
                title: "Lawful & Direct Collection",
                desc: "Collected only from you or your authorized representative with explicit consent.",
              },
              {
                variant: "eyeoff" as Privacy3DIconVariant,
                badge: "Financial Privacy",
                title: "Zero Payment Data Stored",
                desc: "We never ask for or store credit card numbers, banking passwords, or payment PINs.",
              },
              {
                variant: "processing" as Privacy3DIconVariant,
                badge: "Registrar Safeguards",
                title: "Controlled University Access",
                desc: "Shared strictly with your chosen partner universities under binding security protocols.",
              },
              {
                variant: "usercheck" as Privacy3DIconVariant,
                badge: "Full Student Control",
                title: "Right to Access & Erase",
                desc: "Modify, restrict processing, or request deletion of your personal profile anytime.",
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
                  <PrivacyIcon3D variant={pillar.variant} size="sm" />
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
            2. ARCHITECTURAL DATA TRANSPARENCY MATRIX:
               WHAT WE REQUEST VS. WHAT WE NEVER COLLECT
           ════════════════════════════════════════════════════════════════ */}
        <section className="space-y-5">
          {/* Matrix Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 px-1">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Data Boundary &amp; Scope Specification</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight">
                What We Request vs.{" "}
                <span className="text-emerald-700">What We Never Collect</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              A side-by-side audit of the exact academic records required for university admission versus data strictly excluded from our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* LEFT PANEL: Information We Request (For Admissions Only) */}
            <div className="relative rounded-3xl bg-white border border-emerald-200/90 shadow-[0_14px_38px_-14px_rgba(16,185,129,0.1)] overflow-hidden flex flex-col justify-between">
              {/* Top Emerald Architectural Accent Beam */}
              <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-700" />

              <div className="p-6 sm:p-8 space-y-6 flex-1">
                {/* Panel Header */}
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#063b2c] via-[#04241c] to-[#07131a] border border-emerald-400/35 flex items-center justify-center shrink-0 shadow-[0_10px_24px_-6px_rgba(5,150,105,0.35)]">
                      <ShieldCheck className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Authorized Admission Scope
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading tracking-tight">
                        Information We Request{" "}
                        <span className="text-emerald-700 font-bold text-sm sm:text-base">
                          (For Admissions Only)
                        </span>
                      </h3>
                      <p className="text-xs text-slate-500">
                        Required strictly to evaluate eligibility and issue university offer letters
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4 Structured Bento Rows */}
                <div className="space-y-3">
                  {REQUESTED_DATA_ITEMS.map((item, idx) => {
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

              {/* Panel Footer Bar */}
              <div className="px-6 sm:px-8 py-3.5 bg-emerald-50/60 border-t border-emerald-100 flex items-center justify-between gap-3 text-[11.5px] font-semibold text-emerald-900">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Protected via TLS 1.3 &amp; Private Encrypted Buckets</span>
                </div>
                <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-emerald-700 shrink-0">
                  100% Consent-Bound
                </span>
              </div>
            </div>

            {/* RIGHT PANEL: Information We Never Collect or Store */}
            <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_14px_38px_-14px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col justify-between">
              {/* Top Obsidian-Slate Architectural Accent Beam */}
              <div className="h-1.5 w-full bg-gradient-to-r from-slate-800 via-slate-700 to-rose-700" />

              <div className="p-6 sm:p-8 space-y-6 flex-1">
                {/* Panel Header */}
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-[#1f0812] border border-slate-700 flex items-center justify-center shrink-0 shadow-[0_10px_24px_-6px_rgba(15,23,42,0.35)]">
                      <ShieldOff className="w-6 h-6 text-rose-300" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200/90 text-[10px] font-extrabold uppercase tracking-wider text-rose-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          Strict Exclusion Perimeter
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading tracking-tight">
                        Information We Never Collect or Store
                      </h3>
                      <p className="text-xs text-slate-500">
                        Hard boundaries protecting your financial and personal security
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4 Structured Bento Rows */}
                <div className="space-y-3">
                  {EXCLUDED_DATA_ITEMS.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="group relative p-4 rounded-2xl bg-slate-50/70 hover:bg-slate-100/70 border border-slate-200/80 hover:border-slate-300 transition-all duration-200 flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-slate-900 border border-slate-200/90 group-hover:border-slate-800 flex items-center justify-center shrink-0 shadow-2xs transition-colors duration-200 mt-0.5">
                          <ItemIcon className="w-4 h-4 text-slate-700 group-hover:text-rose-300 transition-colors duration-200" />
                        </div>
                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-xs sm:text-[13.5px] font-extrabold text-slate-900 font-heading">
                              {item.title}
                            </h4>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-rose-50/90 border border-rose-200/80 text-[10px] font-bold text-rose-800">
                              <ShieldOff className="w-3 h-3 text-rose-600" />
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

              {/* Panel Footer Bar */}
              <div className="px-6 sm:px-8 py-3.5 bg-slate-100/80 border-t border-slate-200/80 flex items-center justify-between gap-3 text-[11.5px] font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                  <span>Enforced by Zero-Retention Gateway &amp; Schema Filters</span>
                </div>
                <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-rose-700 shrink-0">
                  Zero Exceptions
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
                    Policy Navigator
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-800">
                  {filteredSections.length} of {POLICY_SECTIONS.length} Clauses
                </span>
              </div>

              {/* Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter clauses (e.g. WhatsApp, Cookies)..."
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
                  { id: "collection", label: "Collection" },
                  { id: "usage", label: "Processing" },
                  { id: "security", label: "Security" },
                  { id: "rights", label: "Your Rights" },
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

            {/* Quick Privacy Desk Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#042f24] via-[#06382c] to-[#0a1628] text-white p-6 border border-emerald-500/25 shadow-lg space-y-4 overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-emerald-400/15 blur-2xl pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10.5px] font-bold uppercase tracking-wider">
                  Data Protection Desk
                </span>
                <PrivacyIcon3D variant="usercheck" size="sm" />
              </div>
              <h3 className="relative z-10 text-base font-extrabold font-heading text-white">
                Need to Update or Erase Your Data?
              </h3>
              <p className="relative z-10 text-xs text-emerald-50/80 leading-relaxed">
                Our Privacy &amp; Compliance Officer responds to all student data access, correction, or deletion requests within 48 business hours.
              </p>
              <div className="relative z-10 space-y-2.5 pt-1 text-xs">
                <a
                  href="mailto:privacy@studyindia.global"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-300 font-semibold transition-colors"
                >
                  <PrivacyIcon3D variant="mail" size="xs" />
                  <span>privacy@studyindia.global</span>
                </a>
                <a
                  href="tel:+911206565065"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold transition-colors"
                >
                  <PrivacyIcon3D variant="phone" size="xs" />
                  <span>+91 120-6565065 (Global Helpline)</span>
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
                  of {POLICY_SECTIONS.length} policy clauses
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
                  <PrivacyIcon3D variant="lock" size="lg" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                  No Matching Policy Clauses Found
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                  We couldn&apos;t find any clause matching your current search or category filter. Reset the filter to view all 10 governance clauses.
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

            {/* CLAUSE 01: Copyright & Intellectual Property */}
            {visibleIds.has("copyright-ip") && (
              <section
                id="copyright-ip"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 01
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Legal &amp; Intellectual Property
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Copyright &amp; Intellectual Property Rights
                    </h2>
                  </div>
                  <PrivacyIcon3D variant="copyright" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  All digital tools, interactive eligibility calculators, automated WhatsApp and social media advisory assistants, software architecture, documentation, and visual branding published on this portal are proprietary copyright materials owned by <strong className="font-semibold text-slate-900">StudyIndia Global</strong> and its licensed institutional partners, unless explicitly stated otherwise.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Users, external agencies, or third parties may not reproduce, adapt, scrape, copy, distribute, or commercially incorporate any proprietary work, emblem, wordmark, or trademark appearing on this platform without prior written authorization from StudyIndia Global.
                </p>
              </section>
            )}

            {/* CLAUSE 02: Collection of Personal Information */}
            {visibleIds.has("collection") && (
              <section
                id="collection"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 02
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Data Collection
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Collection of Personal Information
                    </h2>
                  </div>
                  <PrivacyIcon3D variant="collection" size="lg" />
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-xs sm:text-[13px] text-emerald-950 font-medium leading-relaxed">
                  <strong className="font-extrabold">How is your personal information collected?</strong> Every piece of personal information is gathered strictly by lawful, transparent, and fair means with your prior consent.
                </div>

                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    All information we request is collected directly from you or your explicitly authorized representative (such as a parent, guardian, or verified regional counselor) in order to deliver international admission and visa guidance services. You may also voluntarily share your contact and academic details with our admissions desk through verified social communication channels including <strong className="font-semibold text-slate-800">WhatsApp and Facebook</strong>.
                  </p>
                  <p>
                    We <strong className="font-semibold text-slate-900">do not collect</strong> sensitive banking credentials or online payment passwords. Any personal detail that is unnecessary for evaluating your academic eligibility or processing your university application will never be requested, either optionally or mandatorily.
                  </p>
                  <p>
                    We always obtain your informed consent prior to collecting personal or academic documentation. To ensure smooth university admission and student identity verification, applicants are required to provide accurate and authentic records during registration.
                  </p>
                </div>
              </section>
            )}

            {/* CLAUSE 03: Processing Your Personal Information */}
            {visibleIds.has("processing") && (
              <section
                id="processing"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 03
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Data Processing
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Processing &amp; Use of Your Personal Information
                    </h2>
                  </div>
                  <PrivacyIcon3D variant="processing" size="lg" />
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed">
                  <strong className="font-extrabold text-slate-900">How do we use your personal information?</strong> Your data is processed solely for the educational and admission purposes for which it was collected, following your consent or applicable statutory requirements.
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Processed records include your student registration profile, demographic and nationality background, secondary/high school academic performance, and ranked choices of Indian partner institutions. This information is gathered from registered StudyIndia Global accounts to facilitate personalized academic counseling, AIU grade conversion, merit scholarship evaluation, and direct application submission to your chosen partner universities.
                </p>
              </section>
            )}

            {/* CLAUSE 04: WhatsApp Notifications */}
            {visibleIds.has("whatsapp-comms") && (
              <section
                id="whatsapp-comms"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 04
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Official Communications
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Official WhatsApp &amp; Real-Time Notifications
                    </h2>
                  </div>
                  <PrivacyIcon3D variant="whatsapp" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Students who register on the StudyIndia Global portal receive official, time-sensitive notifications regarding admission intake deadlines, scholarship updates, document verification alerts, and real-time application status milestones.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  This communication channel is activated when an applicant provides their mobile contact number during account registration, enabling automated and counselor-assisted updates via the <strong className="font-semibold text-slate-900">WhatsApp Messenger system</strong> and registered email address. You may opt out of non-essential alerts at any time.
                </p>
              </section>
            )}

            {/* CLAUSE 05: Disclosure to Institutes & Statistical Telemetry */}
            {visibleIds.has("institute-disclosure") && (
              <section
                id="institute-disclosure"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 05
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        University Sharing &amp; Analytics
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Disclosure to Partner Institutes &amp; Platform Analytics
                    </h2>
                  </div>
                  <PrivacyIcon3D variant="globe" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Your application dossier is stored securely and accessed strictly as necessary to fulfill admission services. Your academic records are shared with accredited partner universities during the formal admission and offer-letter workflow. All data transmitted to partner institutions is governed by strict usage limitations and technical safeguards against unauthorized access.
                </p>

                <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-5 space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                      Anonymized Statistical Telemetry Collected
                    </span>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-md">
                      Statistical Analysis Only • Zero Individual Profiling
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To deliver relevant program updates and improve informational outreach across search engines, social platforms, and academic newsletters, our analytics engine records aggregated, non-identifiable telemetry:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {[
                      "Website user interaction statistics",
                      "Course & university search terms",
                      "Network IP address & domain",
                      "Device & OS (macOS, Windows, iOS)",
                      "Approximate geographic region",
                      "Referral source & navigation flow",
                    ].map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5 text-xs font-semibold text-slate-800"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11.5px] text-slate-500 italic">
                    Note: The metrics listed above are compiled exclusively for aggregate statistical analysis; no personally identifiable browsing history is sold or retained.
                  </p>
                </div>
              </section>
            )}

            {/* CLAUSE 06: Data Storage & Retention */}
            {visibleIds.has("storage-retention") && (
              <section
                id="storage-retention"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 06
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Cloud Infrastructure
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Global Cloud Storage &amp; Data Retention
                    </h2>
                  </div>
                  <PrivacyIcon3D variant="server" size="lg" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                      Cloud Infrastructure &amp; Location
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      Your personal information and encrypted document scans are hosted on enterprise cloud servers managed by StudyIndia Global and its certified infrastructure providers, which may include secure data centers located in India as well as compliant international jurisdictions.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                      Retention Tenure
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      Your records remain active for the duration of your admission cycle and academic tenure through StudyIndia Global. If you opt to join our Global Alumni &amp; Student Community, your profile is retained for as long as you maintain consent, alongside records required for statutory or regulatory compliance.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* CLAUSE 07: Cookies & Linked Sites */}
            {visibleIds.has("cookies-links") && (
              <section
                id="cookies-links"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 07
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Cookies &amp; External Portals
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Cookies Policy &amp; External Third-Party Links
                    </h2>
                  </div>
                  <PrivacyIcon3D variant="cookie" size="lg" />
                </div>

                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="font-bold text-slate-900">Cookies &amp; Session Identifiers:</strong> StudyIndia Global may collect session-level technical information via your IP address, domain, or browser cookies when you interact with our portal in order to remember your currency preferences, shortlist selections, and degree filters. If you prefer not to allow cookie-based personalization, you can disable cookies at any time through your browser settings.
                  </p>
                  <p>
                    <strong className="font-bold text-slate-900">External Linked Websites:</strong> Our handbook and university directories contain links to external portals (such as individual university websites, government visa portals, or accreditation councils) that operate outside StudyIndia Global&apos;s administrative control. StudyIndia Global does not endorse and is not responsible for the independent privacy practices or content hosted on third-party websites.
                  </p>
                </div>
              </section>
            )}

            {/* CLAUSE 08: Confidentiality, Security & Digital Privacy Policy */}
            {visibleIds.has("security-digital-policy") && (
              <section
                id="security-digital-policy"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 08
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Cybersecurity Standards
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Confidentiality, Security &amp; Digital Privacy Standards
                    </h2>
                  </div>
                  <PrivacyIcon3D variant="lock" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Safeguarding the confidentiality and integrity of your personal records is our highest operational priority. We invest continuously in TLS encryption, private cloud storage buckets, signed temporary document URLs, and role-based access controls to protect your data regardless of where it is stored or transmitted.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong className="font-bold text-slate-900">Digital Privacy Compliance:</strong> We adhere strictly to the Digital Personal Data Protection Act (DPDPA), GDPR principles for global applicants, and all applicable data protection laws when collecting, verifying, or handling student records. Personal information is collected only when you register, communicate with our counselors, or interact with our digital platforms for the purpose of:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <li className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-3 text-xs sm:text-[13px] font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Delivering university admission, scholarship evaluation, and visa support services requested by you.
                    </span>
                  </li>
                  <li className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-3 text-xs sm:text-[13px] font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Enhancing your digital experience by continuously refining our portal tools, academic guides, and student support workflows.
                    </span>
                  </li>
                </ul>
              </section>
            )}

            {/* CLAUSE 09: Your Rights & Lawful Exceptions */}
            {visibleIds.has("student-rights") && (
              <section
                id="student-rights"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 09
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Enforceable Student Rights
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Your Data Protection Rights &amp; Statutory Exceptions
                    </h2>
                  </div>
                  <PrivacyIcon3D variant="usercheck" size="lg" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Under applicable data protection laws, you are entitled to request access to the personal information held by us and to specify any records you wish to restrict from disclosure. You hold the following six enforceable rights regarding your personal data:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    {
                      title: "1. Right to Erasure of Unneeded Data",
                      desc: "Upon your request, we will promptly purge any personal data captured in error or no longer required for your admission dossier.",
                    },
                    {
                      title: "2. Right to Restrict Processing",
                      desc: "You may pause or restrict data processing immediately whenever you seek to update, verify, or revise personal information shared with us.",
                    },
                    {
                      title: "3. Right to Withdraw Consent",
                      desc: "You retain the right to withdraw your consent for future data processing at any stage by notifying our Data Protection Desk.",
                    },
                    {
                      title: "4. Right to Object to Processing",
                      desc: "You may formally object to specific categories of data processing or promotional communications at any time.",
                    },
                    {
                      title: "5. Automated Profiling Transparency",
                      desc: "We do not rely solely on automated decision-making for admissions; whenever automated eligibility scoring is used, it is clearly indicated.",
                    },
                    {
                      title: "6. Anytime Subject Access Request",
                      desc: "You can request a complete copy and audit trail of all personal information and transcripts shared by you at any time.",
                    },
                  ].map((right, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-xs sm:text-[13px] font-extrabold text-slate-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{right.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pl-6">
                        {right.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 flex items-start gap-3.5">
                  <PrivacyIcon3D variant="alert" size="sm" tone="amber" />
                  <div className="space-y-1">
                    <div className="text-xs font-extrabold text-amber-950 uppercase tracking-wider">
                      Statutory Exceptions to Information Disclosure
                    </div>
                    <p className="text-xs text-amber-900/90 leading-relaxed">
                      Please note that we may withhold disclosure of specific internal records in strict legal circumstances where: (a) there is reasonable cause to suspect serious unlawful activity, document forgery, or fraud; or (b) disclosure would reveal confidential evaluative scoring or proprietary commercial processes of partner institutions.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* CLAUSE 10: Changes to Policy, Acceptance & Disclaimer */}
            {visibleIds.has("acceptance-disclaimer") && (
              <section
                id="acceptance-disclaimer"
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5 scroll-mt-24"
              >
                <div className="flex items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-black tracking-wider shrink-0">
                        CLAUSE 10
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                        Terms &amp; Financial Disclaimer
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      Policy Revisions, User Acceptance &amp; Disclaimer
                    </h2>
                  </div>
                  <PrivacyIcon3D variant="scale" size="lg" />
                </div>

                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                    <PrivacyIcon3D variant="globe" size="sm" />
                    <div className="space-y-1">
                      <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                        Amendments &amp; Updates to This Policy
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        StudyIndia Global reserves the right to revise, amend, or update this Privacy Policy at any time to reflect evolving legal standards or platform features. Any modification takes effect immediately upon publication on this page.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                    <PrivacyIcon3D variant="collection" size="sm" />
                    <div className="space-y-1">
                      <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                        Your Acceptance of These Terms
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        By registering a StudyIndia Global student or partner account, or by submitting an application inquiry through our portal, you signify your explicit acceptance of the collection, processing, and university disclosure practices described in this policy. If you do not agree with these terms, please do not register an account or submit application forms, as we cannot process or refer applications to partner universities without privacy consent.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-3.5">
                    <PrivacyIcon3D variant="eyeoff" size="sm" />
                    <div className="space-y-1">
                      <div className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider">
                        Financial &amp; Unrequested Data Disclaimer
                      </div>
                      <p className="text-xs sm:text-[13px] text-emerald-950/90 leading-relaxed">
                        StudyIndia Global does not store any information related to a user&apos;s online banking transactions, private payment credentials, or unrequested personal account details (which are never sought during registration, either optionally or mandatorily), nor do we accept liability for any unrequested sensitive data submitted inadvertently by a user.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            4. FULL-WIDTH EXECUTIVE GRIEVANCE REDRESSAL & PRIVACY DESK BANNER
           ════════════════════════════════════════════════════════════════ */}
        <section className="relative rounded-3xl bg-gradient-to-r from-[#03261d] via-[#06382c] to-[#0a1628] text-white p-8 sm:p-10 lg:px-14 lg:py-11 shadow-[0_24px_50px_-12px_rgba(3,38,29,0.35)] border border-emerald-500/20 overflow-hidden">
          <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 -bottom-28 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-400/15 border border-emerald-300/25 text-emerald-200 text-xs font-bold tracking-wide">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Dedicated Privacy &amp; Grievance Redressal Desk</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-100/80 text-[11px] font-semibold">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>48-Hour Resolution SLA</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-white leading-snug">
                Have a Privacy Question, Subject Access Request, or Compliance Inquiry?
              </h3>

              <p className="text-sm sm:text-[15px] text-emerald-50/80 leading-relaxed">
                Connect directly with the StudyIndia Global Data Protection &amp; Student Compliance Team for record updates, consent withdrawal, or dossier erasure requests.
              </p>

              {/* Direct Contact Channels */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1 text-xs sm:text-sm">
                <a
                  href="tel:+911206565065"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 font-bold text-white transition-colors"
                >
                  <PrivacyIcon3D variant="phone" size="xs" />
                  <span>Helpline: +91 120-6565065</span>
                </a>
                <a
                  href="mailto:support@studyindia.global"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 font-bold text-emerald-200 transition-colors"
                >
                  <PrivacyIcon3D variant="mail" size="xs" />
                  <span>support@studyindia.global</span>
                </a>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200/90 px-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero Cost • Confidential Handling</span>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-[#00d68f] hover:bg-[#00c080] text-slate-950 font-extrabold text-sm shadow-[0_10px_25px_-5px_rgba(0,214,143,0.45)] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                <span>Contact Privacy Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/admission-process"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-xl bg-slate-900/55 hover:bg-slate-900/80 text-white border border-white/20 hover:border-white/35 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                <Compass className="w-4 h-4 text-emerald-300" />
                <span>Admissions Guide</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
