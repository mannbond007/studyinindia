"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Banknote,
  Plane,
  Building,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Scale,
  Landmark,
  Award,
  Globe2,
  Calculator,
  Clock,
  Check,
  ChevronRight,
  ExternalLink,
  BookOpen,
  HeartPulse,
  Cpu,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ─── Ultra-Realistic 3D Custom SVGs for Global Handbook Pillars ─── */
function GlobalVisaShield3D() {
  return (
    <div className="relative shrink-0 group/icon">
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-emerald-500/30 via-teal-400/20 to-amber-400/20 blur-lg opacity-75 group-hover/icon:opacity-100 transition-all duration-500 pointer-events-none" />
      <div className="relative w-15 h-15 rounded-2xl bg-gradient-to-b from-emerald-300 via-emerald-600 to-teal-950 p-[1.5px] shadow-[0_14px_28px_-6px_rgba(16,185,129,0.45),0_4px_10px_rgba(6,78,59,0.25)]">
        <div className="relative w-full h-full rounded-[14.5px] bg-gradient-to-b from-[#065f46] via-[#047857] to-[#022c22] flex items-center justify-center overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.45),inset_0_-4px_6px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none rounded-t-[14px]" />
          <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]">
            <defs>
              <linearGradient id="trGoldRim" x1="8" y1="5" x2="36" y2="39" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="35%" stopColor="#FDE047" />
                <stop offset="70%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
              <linearGradient id="trEmeraldLeft" x1="11" y1="8" x2="22" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#A7F3D0" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <linearGradient id="trEmeraldRight" x1="22" y1="8" x2="33" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#064E3B" />
              </linearGradient>
            </defs>
            <path d="M22 4.5L36 9.8V21.2C36 30.4 30 37 22 40C14 37 8 30.4 8 21.2V9.8L22 4.5Z" fill="url(#trGoldRim)" />
            <path d="M22 6.8L33.8 11.2V21C33.8 28.9 28.7 34.7 22 37.3C15.3 34.7 10.2 28.9 10.2 21V11.2L22 6.8Z" fill="#022C22" />
            <path d="M22 8L11.4 12V20.8C11.4 28.1 16 33.4 22 35.8V8Z" fill="url(#trEmeraldLeft)" />
            <path d="M22 8L32.6 12V20.8C32.6 28.1 28 33.4 22 35.8V8Z" fill="url(#trEmeraldRight)" />
            <path d="M22 8L11.4 12V14.2L22 10.2L32.6 14.2V12L22 8Z" fill="#FFFFFF" fillOpacity="0.45" />
            <circle cx="22" cy="21.5" r="6" fill="url(#trGoldRim)" stroke="#FFFFFF" strokeWidth="0.8" />
            <path d="M19.2 21.5L21.1 23.4L25.2 19.3" stroke="#022C22" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SiiFrroDocument3D() {
  return (
    <div className="relative shrink-0 group/icon">
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-teal-500/30 via-emerald-400/20 to-cyan-400/20 blur-lg opacity-75 group-hover/icon:opacity-100 transition-all duration-500 pointer-events-none" />
      <div className="relative w-15 h-15 rounded-2xl bg-gradient-to-b from-teal-300 via-teal-600 to-slate-900 p-[1.5px] shadow-[0_14px_28px_-6px_rgba(13,148,136,0.45),0_4px_10px_rgba(15,118,110,0.25)]">
        <div className="relative w-full h-full rounded-[14.5px] bg-gradient-to-b from-[#0f766e] via-[#115e59] to-[#042f2e] flex items-center justify-center overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.45),inset_0_-4px_6px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none rounded-t-[14px]" />
          <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]">
            <defs>
              <linearGradient id="nocPaper" x1="10" y1="6" x2="34" y2="38" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#F0FDFA" />
                <stop offset="100%" stopColor="#CCFBF1" />
              </linearGradient>
              <linearGradient id="nocWaxSeal" x1="25" y1="25" x2="37" y2="37" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="45%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
            </defs>
            <rect x="9" y="8" width="22" height="29" rx="3.5" transform="rotate(-5 9 8)" fill="#99F6E4" fillOpacity="0.45" />
            <path d="M12 9.5C12 7.567 13.567 6 15.5 6H26.5L33 12.5V33.5C33 35.433 31.433 37 29.5 37H15.5C13.567 37 12 35.433 12 33.5V9.5Z" fill="url(#nocPaper)" />
            <path d="M26.5 6V11C26.5 11.8284 27.1716 12.5 28 12.5H33L26.5 6Z" fill="#5EEAD4" />
            <rect x="15.5" y="11" width="9" height="2.2" rx="1.1" fill="#0F766E" />
            <rect x="15.5" y="16" width="14" height="1.6" rx="0.8" fill="#64748B" />
            <rect x="15.5" y="20" width="12" height="1.6" rx="0.8" fill="#94A3B8" />
            <rect x="15.5" y="24" width="10" height="1.6" rx="0.8" fill="#94A3B8" />
            <circle cx="29.5" cy="31.5" r="6" fill="url(#nocWaxSeal)" stroke="#FFFFFF" strokeWidth="1" />
            <path d="M27.3 31.5L28.9 33.1L32 29.8" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Global Recognition & Accreditation Data ─── */
const globalRecognitions = [
  {
    id: "engineering",
    acronym: "ABET & Washington Accord",
    name: "Engineering & Computer Science",
    stream: "B.Tech / B.E. / M.Tech / AI & Data Science",
    indianRequirement: "AICTE Approved • NBA & ABET Accredited",
    examStatus: "Global Mobility across USA, UK, EU, Middle East & South Asia",
    verificationTime: "Direct Credit & Degree Recognition",
    icon: Cpu,
    description:
      "India is a full signatory to the Washington Accord (via NBA) and hosts top ABET-accredited technical universities (like VIT, SRM, Manipal). Degrees are recognized globally for graduate school (MS/PhD) and engineering licensure worldwide.",
    checklist: [
      "University listed under UGC Act Section 2(f) & 12(B) and AICTE",
      "Washington Accord / NBA accreditation for international engineering parity",
      "WES (World Education Services) & UK ENIC (formerly NARIC) verified transcripts",
      "Eligible for regional council exams (FE/PE in USA, ECSA in Africa, NEC in Nepal, IEB in Bangladesh)",
    ],
  },
  {
    id: "medical",
    acronym: "WHO • INC • Global Health",
    name: "Nursing & Allied Health Sciences",
    stream: "B.Sc Nursing / BPT / Public Health / Allied Health Sciences",
    indianRequirement: "INC (India) & State Health University Approved Teaching Hospitals",
    examStatus: "NCLEX-RN (USA/Canada) • NMC (UK) • DHA/HAAD (UAE/GCC) • Regional Health Councils",
    verificationTime: "International Clinical Equivalence & Hospital Training",
    icon: HeartPulse,
    description:
      "Indian healthcare and nursing institutions are accredited by the Indian Nursing Council (INC) and state medical councils, providing comprehensive clinical rotations at 500 to 2,000+ bed affiliated multi-specialty teaching hospitals.",
    checklist: [
      "Approved by Indian Nursing Council (INC) and recognized state health sciences universities",
      "Qualifies graduates to sit for NCLEX-RN (USA/Canada), NMC UK (CBT/OSCE), and DHA/MOH (GCC)",
      "Extensive clinical patient exposure at 500 to 2,000+ bed multi-specialty teaching hospitals",
      "100% English-medium clinical pedagogy, advanced simulation labs, and certified internships",
    ],
  },
  {
    id: "pharmacy",
    acronym: "PCI & Global Pharma",
    name: "Pharmaceutical & Life Sciences",
    stream: "B.Pharm / Pharm.D / M.Pharm / Biotechnology",
    indianRequirement: "Pharmacy Council of India (PCI) Approved",
    examStatus: "FPGEE (USA) • KAPS (Australia) • PEBC (Canada) • National Councils",
    verificationTime: "Global " + '"Pharmacy of the World"' + " Standard",
    icon: Award,
    description:
      "Known as the 'Pharmacy of the World' supplying over 50% of global vaccines and generics, India's PCI-approved B.Pharm and Pharm.D programs offer unmatched FDA/WHO-GMP aligned laboratory training.",
    checklist: [
      "Approved by Pharmacy Council of India (PCI) & UGC",
      "6-Year Pharm.D and 4-Year B.Pharm recognized for international clinical licensing",
      "Hands-on industrial internships with global biopharma leaders in Hyderabad, Bengaluru & Pune",
      "Direct apostille & embassy attestation support for Middle East, Africa & Western licensing",
    ],
  },
  {
    id: "business",
    acronym: "AIU • AACSB • WES",
    name: "Management, IT, Law & Liberal Arts",
    stream: "BBA / MBA / BCA / MCA / B.Com / BA LLB",
    indianRequirement: "UGC Recognized • NAAC A++ • AIU Member",
    examStatus: "WES (USA/Canada) • UK ENIC • EU Bologna & SAARC Equivalence",
    verificationTime: "Instant Global Credential Evaluation",
    icon: Landmark,
    description:
      "Degrees from UGC-recognized and Association of Indian Universities (AIU) member institutions enjoy bilateral academic equivalence across Commonwealth nations, North America, Europe, Africa, the Gulf (GCC), and South Asia.",
    checklist: [
      "Full recognition by WES (USA & Canada) as equivalent to a 3 or 4-year Bachelor's degree",
      "Dual-degree and semester abroad partnerships with Universities in USA, UK, Singapore & Australia",
      "Ministry of External Affairs (MEA) Apostille certification for 120+ Hague Convention countries",
      "Recognized by Civil Service Commissions and Central Banks across Africa, Asia & SAARC",
    ],
  },
];

export function StudyInIndiaInteractiveHandbook() {
  // Region Pathway Switcher: Global (e-Visa) vs Visa-Free Bilateral (Nepal/Bhutan) vs NRI/Gulf
  const [regionMode, setRegionMode] = useState<"global" | "visafree" | "nri">("global");

  // Multi-Currency Converter State (Base: USD, EUR, GBP, KES/NGN/AED/NPR)
  const [inrAmount, setInrAmount] = useState<number>(200000);
  const [activePreset, setActivePreset] = useState<string>("btech");
  const [selectedCouncil, setSelectedCouncil] = useState<string>("engineering");
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  // Approximate reference conversion rates from INR
  const usdAmount = Math.round(inrAmount / 84);
  const eurAmount = Math.round(inrAmount / 91);
  const aedAmount = Math.round(inrAmount / 22.8);
  const nprAmount = Math.round(inrAmount * 1.6);

  const presets = [
    { id: "living", label: "Monthly Living & Food", inr: 15000 },
    { id: "hostel", label: "Annual AC International Hostel", inr: 120000 },
    { id: "btech", label: "Avg. B.Tech / Engineering / Yr", inr: 200000 },
    { id: "bba", label: "Avg. BBA / BCA / IT / Yr", inr: 140000 },
  ];

  const readinessChecklist = [
    {
      title: "Valid International Passport (or National ID for Visa-Free Nations)",
      sub: "Passport with minimum 6 months validity for Student e-Visa; Citizenship/Passport for Nepal & Bhutan",
      tag: "Identity & Visa",
    },
    {
      title: "High School / Grade 12 Transcripts (A-Levels, IB, WAEC, NECO, CBSE, NEB, HSC)",
      sub: "Official academic transcripts and diploma/certificate for AIU equivalence verification",
      tag: "Academics",
    },
    {
      title: "Official University Offer Letter & Student Registration ID",
      sub: "Issued on university letterhead with unique tracking number for Indian Embassy visa verification",
      tag: "Offer Letter",
    },
    {
      title: "Student e-Visa Clearance / Home Ministry NOC (Where Applicable)",
      sub: "Fast-track Indian Student Visa (S-1) via indianvisaonline.gov.in (Visa-free for Nepal/Bhutan)",
      tag: "Immigration",
    },
    {
      title: "Yellow Fever / Health Vaccination Card & Medical Fitness Certificate",
      sub: "Mandatory Yellow Fever vaccination certificate for students arriving from African & endemic nations",
      tag: "Health Protocol",
    },
    {
      title: "International Forex Card / USD Cash & Tuition Swift Wire Receipt",
      sub: "Carry an international Visa/Mastercard travel card or USD/INR for initial arrival expenses",
      tag: "Financials",
    },
  ];

  const completedCount = Object.values(checkedDocs).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / readinessChecklist.length) * 100);

  const currentCouncil =
    globalRecognitions.find((c) => c.id === selectedCouncil) || globalRecognitions[0];

  return (
    <div className="space-y-20">
      {/* ════════════════════════════════════════════════════════════════
          HERO — Global International Student Handbook Header
         ════════════════════════════════════════════════════════════════ */}
      <section className="relative rounded-[32px] bg-gradient-to-br from-[#071318] via-[#0b1f24] to-[#052e24] text-white p-7 sm:p-12 lg:p-14 border border-emerald-500/20 shadow-[0_30px_80px_-20px_rgba(6,78,59,0.45)] overflow-hidden">
        {/* Ambient Mesh Glows & Grid Pattern */}
        <div className="absolute -top-32 -right-24 w-[480px] h-[480px] bg-emerald-500/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-x-12 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Quick Jump Pills */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-300 font-heading">
                Connecting Global Students to Indian Universities and Institutions
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.08] font-heading text-white">
              Your Complete Global Guide to{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                Studying in India
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-[17px] leading-relaxed max-w-2xl font-normal">
              Everything international students and parents need to know about studying in India, from{" "}
              <span className="text-white font-medium">university and institution selection</span>,{" "}
              <span className="text-emerald-300 font-medium">admission eligibility</span>,{" "}
              <span className="text-white font-medium">student visa requirements</span>, and onboarding procedures to{" "}
              <span className="text-white font-medium">tuition fees</span>, international fee remittances in{" "}
              <span className="text-white font-medium">USD, EUR, and INR</span>, and{" "}
              <span className="text-emerald-300 font-medium">global degree recognition</span> with credential evaluation.
            </p>

            {/* Quick Section Jump Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {[
                { label: "Visa & Immigration Pathways", href: "#visa-immigration" },
                { label: "6-Step Global Onboarding", href: "#admissions-workflow" },
                { label: "USD / EUR / INR Calculator", href: "#financial-logistics" },
                { label: "Global Degree Recognition", href: "#global-accreditation" },
              ].map((pill, idx) => (
                <a
                  key={idx}
                  href={pill.href}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-emerald-400/40 text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200"
                >
                  <span>{pill.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Global Admissions Telemetry Bento Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 p-6 sm:p-7 shadow-2xl space-y-5">
              {/* Header inside glass card */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-lg shadow-md">
                    🌍
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Global Education Hub
                    </div>
                    <div className="text-sm font-extrabold text-white">
                      50+ Countries • 300+ Campuses
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Global Quality
                </span>
              </div>

              {/* 4 Key Telemetry Stats */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-[11px] text-slate-400 font-medium">Instruction Medium</div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-300 font-heading mt-0.5">
                    100% English
                  </div>
                  <div className="text-[10.5px] text-slate-400 mt-0.5">No IELTS Required*</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-[11px] text-slate-400 font-medium">Avg. Annual Tuition</div>
                  <div className="text-xl sm:text-2xl font-black text-white font-heading mt-0.5">
                    $1,800–$4,500
                  </div>
                  <div className="text-[10.5px] text-emerald-300 mt-0.5">Up to 50% Merit Waivers</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-[11px] text-slate-400 font-medium">Student e-Visa</div>
                  <div className="text-xl sm:text-2xl font-black text-white font-heading mt-0.5">
                    3–7 Days
                  </div>
                  <div className="text-[10.5px] text-slate-400 mt-0.5">Fast-Track Processing</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-[11px] text-slate-400 font-medium">Global Recognition</div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300 font-heading mt-0.5">
                    WHO • ABET
                  </div>
                  <div className="text-[10.5px] text-slate-400 mt-0.5">WES • WFME • AIU</div>
                </div>
              </div>

              {/* Bottom CTA Strip */}
              <div className="pt-1 flex items-center justify-between gap-3">
                <Link href="/register" className="w-full">
                  <Button className="w-full h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/50 cursor-pointer gap-2">
                    <span>Start Free International Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 1: VISA, IMMIGRATION & e-FRRO FRAMEWORK (With Region Switcher)
         ════════════════════════════════════════════════════════════════ */}
      <section id="visa-immigration" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>Part 01 • International Immigration & Legal Framework</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
              Student Visa &amp; e-FRRO Protocol
            </h2>
          </div>

          {/* Interactive Region Pathway Switcher */}
          <div className="inline-flex flex-wrap items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 gap-1 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setRegionMode("global")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                regionMode === "global"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🌍 Global Nationals (e-Visa)
            </button>
            <button
              type="button"
              onClick={() => setRegionMode("nri")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                regionMode === "nri"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🇦🇪 NRI / OCI / Gulf (DASA/CIWG)
            </button>
            <button
              type="button"
              onClick={() => setRegionMode("visafree")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                regionMode === "visafree"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🇳🇵🇧🇹 Nepal & Bhutan (Visa-Free)
            </button>
          </div>
        </div>

        {/* Dynamic Context Banner Based on Selected Region */}
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
              {regionMode === "global" ? "🌍" : regionMode === "nri" ? "🪪" : "🤝"}
            </div>
            <div className="text-xs sm:text-sm text-slate-800">
              {regionMode === "global" && (
                <>
                  <span className="font-extrabold text-emerald-950">
                    Global International Students (Africa, ASEAN, CIS, Middle East, SAARC):
                  </span>{" "}
                  Apply online for the Indian <span className="font-semibold">Student Visa (S-1)</span> using your official University Admission Letter and Student Registration ID.
                </>
              )}
              {regionMode === "nri" && (
                <>
                  <span className="font-extrabold text-emerald-950">
                    NRI, PIO & OCI Cardholders (UAE, Saudi Arabia, Qatar, Oman, Kuwait, USA, UK):
                  </span>{" "}
                  OCI cardholders enjoy lifelong visa-free study rights in India and qualify for <span className="font-semibold">CIWG / DASA tuition quotas</span> on par with domestic fees.
                </>
              )}
              {regionMode === "visafree" && (
                <>
                  <span className="font-extrabold text-emerald-950">
                    Bilateral Visa-Free Nations (Nepal & Bhutan):
                  </span>{" "}
                  Under bilateral friendship treaties, citizens of Nepal and Bhutan travel and study in India <span className="font-semibold">100% Visa-Free</span> using their National Citizenship ID or Passport (Nepali students obtain MoEST NOC for bank wire transfers).
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* PILLAR 1: Indian Student Visa & Bilateral Entry */}
          <div className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/50 p-7 sm:p-9 shadow-[0_8px_30px_rgb(15,23,42,0.04)] hover:shadow-[0_24px_50px_-12px_rgba(16,185,129,0.16)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />

            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <GlobalVisaShield3D />
                <div className="flex flex-col items-end gap-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    S-1 Student Visa &amp; Bonafide
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Multi-Entry • Full Course Duration
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading tracking-tight group-hover:text-emerald-800 transition-colors">
                  Indian Student Visa (S-1) &amp; Diplomatic Entry
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  International students admitted to full-time UGC/AICTE recognized programs receive a{" "}
                  <span className="font-semibold text-slate-800">
                    Multi-Entry Student Visa valid for the duration of the degree
                  </span>
                  . Every applicant receives an official{" "}
                  <span className="font-semibold text-slate-800">Student Application ID</span>{" "}
                  and Registrar Bonafide Letter for fast-track embassy clearance.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 border border-slate-200/90 p-5 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                    Core Visa &amp; Border Dossier Checklist
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                    4 Mandatory Items
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    {
                      title: "Passport / National ID",
                      desc: "Passport with 6+ months validity (or Nagorikta/ID for Nepal/Bhutan)",
                    },
                    {
                      title: "Registrar Admission Letter",
                      desc: "Official university offer letter with admissions tracking reference",
                    },
                    {
                      title: "Academic Transcripts",
                      desc: "High School / Grade 12 / A-Level / WAEC / NEB certificates",
                    },
                    {
                      title: "Financial & Health Proof",
                      desc: "Bank statement / fee receipt + Yellow Fever card (if applicable)",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-slate-200/70 shadow-2xs flex items-start gap-2.5"
                    >
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-600 stroke-[2.5]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 leading-snug">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Direct Embassy & High Commission verification support
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                50+ Countries Eligible
              </span>
            </div>
          </div>

          {/* PILLAR 2: Paperless e-FRRO & Ministry Compliance */}
          <div className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-teal-500/50 p-7 sm:p-9 shadow-[0_8px_30px_rgb(15,23,42,0.04)] hover:shadow-[0_24px_50px_-12px_rgba(13,148,136,0.16)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-600" />

            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <SiiFrroDocument3D />
                <div className="flex flex-col items-end gap-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200/80">
                    <Landmark className="w-3 h-3 text-teal-600" />
                    e-FRRO & Home Ministry NOC
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    100% Digital Onboarding
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading tracking-tight group-hover:text-teal-800 transition-colors">
                  Post-Arrival e-FRRO & Home Country NOC
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  International students arriving on a Student Visa complete a simple, paperless{" "}
                  <span className="font-semibold text-slate-800">
                    Foreigners Regional Registration Office (e-FRRO)
                  </span>{" "}
                  registration within 14 days of landing, assisted directly by the university&apos;s International Relations Office (IRO).
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-slate-50 via-white to-teal-50/40 border border-slate-200/90 p-5 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                    Key Regulatory & Compliance Milestones
                  </span>
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-100/80 px-2 py-0.5 rounded-md">
                    Campus IRO Assisted
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    {
                      badge: "01 • e-FRRO Portal",
                      title: "Paperless Online Residence Permit (Within 14 Days)",
                      desc: "Your university issues Form-C (Hostel Residence Proof) and Bonafide Certificate so you receive your e-FRRO permit via email without visiting a police station.",
                    },
                    {
                      badge: "02 • AIU Equivalence",
                      title: "Association of Indian Universities (AIU) High School Parity",
                      desc: "Foreign high school boards (IB, Cambridge A-Levels, WAEC, American High School, NEB) are seamlessly mapped to Indian 10+2 standards.",
                    },
                    {
                      badge: "03 • Bilateral NOC",
                      title: "Home Ministry NOC Support (Nepal MoEST / Medical Councils)",
                      desc: "For countries requiring a home-country No Objection Certificate for forex transfer or medical licensing, our desk pre-audits all university documents.",
                    },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-slate-200/70 shadow-2xs flex items-start gap-3"
                    >
                      <span className="px-2 py-0.5 rounded-md bg-teal-50 border border-teal-200/80 text-[10px] font-extrabold text-teal-800 shrink-0 mt-0.5">
                        {step.badge}
                      </span>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{step.title}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 font-bold text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Dedicated International Student Cell on every partner campus
              </span>
              <a
                href="https://indianfrro.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-teal-700 transition-colors"
              >
                <span>indianfrro.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2: 4-STEP GLOBAL ADMISSION & VISA WORKFLOW
         ════════════════════════════════════════════════════════════════ */}
      <section
        id="admission-workflow"
        className="relative rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.06)] space-y-9 scroll-mt-24 overflow-hidden"
      >
        {/* Subtle top accent rule */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-slate-900" />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-7 border-b border-slate-200/80">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-extrabold uppercase tracking-widest text-emerald-800">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Fast-Track International Admissions Timeline</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 font-heading tracking-tight leading-tight">
              From Online Application to Campus Arrival in{" "}
              <span className="text-emerald-700">4 Structured Steps</span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every international application is processed through our direct University Registrar single-window workflow with transparent turnaround times.
            </p>
          </div>

          {/* Executive Application Fee Badge */}
          <div className="flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-sm shrink-0 self-start lg:self-auto">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="pr-1">
              <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                Application Fee
              </div>
              <div className="text-xs sm:text-[13px] font-bold text-white leading-snug">
                $100 USD (Intl) / NPR 1,000 (Nepal)
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Connected Cards Grid */}
        <div className="relative">
          {/* Desktop horizontal connector line behind cards */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-14 left-12 right-12 h-0.5 bg-gradient-to-r from-emerald-200 via-teal-300 to-emerald-600 z-0"
          />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "STEP 01",
                time: "Day 1 • 15 Mins",
                icon: FileText,
                title: "Profile & Transcript Audit",
                desc: "Upload your Grade 12 / High School transcripts and Passport or National ID. Our admissions deans map your AIU equivalence and lock in merit waivers up to 50%.",
                deliverableLabel: "Milestone Output",
                deliverable: "AIU Equivalence & Waiver Audit",
              },
              {
                step: "STEP 02",
                time: "7–10 Working Days",
                icon: Award,
                title: "Official Registrar Offer Letter",
                desc: "Receive your verified Provisional Admission Offer Letter issued directly by the university registrar alongside your official Student Registration ID.",
                deliverableLabel: "Milestone Output",
                deliverable: "Verified Offer Letter & Student ID",
              },
              {
                step: "STEP 03",
                time: "3–7 Business Days",
                icon: Landmark,
                title: "Student e-Visa & Direct Fee Wire",
                desc: "Remit your first-semester tuition directly to the official university bank account via SWIFT / Flywire and obtain your Indian S-1 Student e-Visa (or bilateral NOC).",
                deliverableLabel: "Milestone Output",
                deliverable: "S-1 Student Visa & Fee Receipt",
              },
              {
                step: "STEP 04",
                time: "Campus Arrival",
                icon: Plane,
                title: "Airport Reception & e-FRRO",
                desc: "Our International Student Cell greets you at the airport in India and completes your hostel check-in, local SIM & bank account, and paperless 14-day e-FRRO.",
                deliverableLabel: "Milestone Output",
                deliverable: "Hostel Check-In & e-FRRO Permit",
              },
            ].map((item, idx) => {
              const StepIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/70 p-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(16,185,129,0.16)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
                >
                  {/* Subtle top highlight on each step card */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500 transition-colors" />

                  <div className="space-y-5">
                    {/* Top Row: Icon Pod + Step Pill & Turnaround Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:shadow-emerald-600/25 transition-all duration-300">
                          <StepIcon className="w-5 h-5" />
                        </div>
                        <span className="absolute -bottom-1.5 -right-1.5 px-1.5 py-0.5 rounded-md bg-emerald-600 text-white text-[9px] font-black tracking-wider border-2 border-white">
                          0{idx + 1}
                        </span>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                          {item.step}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                          <Clock className="w-3 h-3 text-emerald-600" />
                          {item.time}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h4 className="text-[17px] font-extrabold text-slate-900 font-heading leading-snug group-hover:text-emerald-800 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[13px] text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Verified Deliverable Box at Bottom */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="p-3 rounded-xl bg-slate-50/90 group-hover:bg-emerald-50/60 border border-slate-200/70 group-hover:border-emerald-200 transition-colors flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div className="truncate">
                          <div className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 leading-none">
                            {item.deliverableLabel}
                          </div>
                          <div className="text-[11.5px] font-extrabold text-slate-800 group-hover:text-emerald-950 truncate mt-1">
                            {item.deliverable}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Executive Action Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span>
              <strong className="font-bold text-slate-900">Average Offer Letter Turnaround:</strong>{" "}
              7 to 10 working days after uploading Grade 12 / High School transcripts.
            </span>
          </div>
          <Link href="/student/apply" className="shrink-0">
            <Button
              size="sm"
              className="bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl px-4 h-9 gap-1.5 cursor-pointer transition-colors"
            >
              <span>Start Step 01 Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 3: MULTI-CURRENCY TUITION ESTIMATOR (USD / EUR / AED / NPR / INR)
         ════════════════════════════════════════════════════════════════ */}
      <section
        id="financial-logistics"
        className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-sm space-y-10 scroll-mt-24"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
              <Calculator className="w-3.5 h-3.5" />
              <span>Part 02 • Global Tuition & Remittance Logistics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
              Multi-Currency Tuition Estimator & Banking Guide
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              India offers world-class <strong className="font-bold text-slate-900">STEM (Science, Technology, Engineering, and Mathematics)</strong> and medical degrees at{" "}
              <span className="font-bold text-slate-900">1/5th the cost of Western universities</span>. Estimate your expenses across major international currencies and explore secure payment rails.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900 text-white text-xs shrink-0 self-start lg:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-300">Direct University Accounts:</span>
            <span className="font-black text-emerald-400 text-sm">Swift • Flywire • NEFT</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 5 Cols: Interactive Multi-Currency Converter Widget */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Global Currency Estimator
                </span>
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 text-[10px]">
                  USD • EUR • AED • NPR
                </Badge>
              </div>

              {/* Preset Quick Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {presets.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setActivePreset(p.id);
                      setInrAmount(p.inr);
                    }}
                    className={`px-3 py-2 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                      activePreset === p.id
                        ? "bg-emerald-500/20 border-emerald-400 text-white shadow-sm"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <div className="text-[10.5px] text-slate-400">{p.label}</div>
                    <div className="font-bold text-white mt-0.5">
                      ₹{p.inr.toLocaleString("en-IN")} (~${Math.round(p.inr / 84).toLocaleString("en-US")})
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Slider */}
              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label htmlFor="inr-global-slider" className="text-slate-300 font-medium">
                    Adjust Indian Rupees (INR ₹):
                  </label>
                  <span className="font-bold text-emerald-300">
                    ₹{inrAmount.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  id="inr-global-slider"
                  type="range"
                  min={10000}
                  max={600000}
                  step={5000}
                  value={inrAmount}
                  onChange={(e) => {
                    setActivePreset("custom");
                    setInrAmount(Number(e.target.value));
                  }}
                  className="w-full accent-emerald-400 cursor-pointer h-2 rounded-lg bg-slate-700"
                />
              </div>

              {/* Multi-Currency Output Matrix */}
              <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-400">US Dollars (USD $)</span>
                  <span className="text-2xl font-black text-emerald-400 font-heading">
                    $ {usdAmount.toLocaleString("en-US")} USD
                  </span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="p-2 rounded-xl bg-white/[0.04]">
                    <div className="text-[10px] text-slate-400">Euro (EUR)</div>
                    <div className="text-xs font-extrabold text-white mt-0.5">
                      € {eurAmount.toLocaleString("en-US")}
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.04]">
                    <div className="text-[10px] text-slate-400">UAE (AED)</div>
                    <div className="text-xs font-extrabold text-white mt-0.5">
                      AED {aedAmount.toLocaleString("en-US")}
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.04]">
                    <div className="text-[10px] text-slate-400">Nepal (NPR)</div>
                    <div className="text-xs font-extrabold text-white mt-0.5">
                      रू {nprAmount.toLocaleString("en-US")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-between pt-2 border-t border-white/10">
              <span>Pay directly to official university bank accounts</span>
              <Link href="/courses" className="text-emerald-400 hover:underline font-bold">
                Compare Course Fees →
              </Link>
            </div>
          </div>

          {/* Right 7 Cols: 3 Global Banking & Remittance Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {[
              {
                icon: Banknote,
                badge: "Method 01 • International Tuition Remittance",
                title: "Direct SWIFT Wire, Flywire & Bilateral Bank Transfers",
                desc: "International students transfer semester tuition directly to the university's official USD/INR bank account using SWIFT wire transfers, Flywire international payment portals, or bilateral commercial banks (with zero third-party handling).",
                highlights: [
                  "Official instant university fee receipt for Visa processing",
                  "Supports USD, EUR, GBP, AED, and INR wire settlements",
                ],
              },
              {
                icon: CreditCard,
                badge: "Method 02 • On-Campus Digital Banking",
                title: "Indian Student Bank Account & Instant UPI QR Payments",
                desc: "Within your first week on campus, the International Student Cell assists you in opening a local bank account (SBI, HDFC, or ICICI) using your Passport, Visa/e-FRRO, and Bonafide Certificate to unlock India's world-famous UPI mobile payments.",
                highlights: [
                  "Pay everywhere on campus via Google Pay / PhonePe QR",
                  "Zero-balance international student debit card",
                ],
              },
              {
                icon: Plane,
                badge: "Method 03 • Arrival Travel Cards & Forex",
                title: "Multi-Currency Forex Cards & International Visa/Mastercard",
                desc: "For your initial flight arrival and first 2 weeks in India, carry a preloadable USD/INR Forex Travel Card or international Visa/Mastercard Debit Card alongside $300–$500 in cash (or ₹25,000 INR for regional travelers).",
                highlights: [
                  "24/7 currency exchange & ATMs inside every university campus",
                  "All major international Visa/Mastercard cards accepted",
                ],
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className="group rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-emerald-400/60 p-5 sm:p-6 transition-all duration-300 hover:shadow-md flex flex-col sm:flex-row items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      {item.highlights.map((h, j) => (
                        <span
                          key={j}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4: INTERACTIVE GLOBAL ACCREDITATION & LICENSING MATRIX
         ════════════════════════════════════════════════════════════════ */}
      <section
        id="global-accreditation"
        className="relative rounded-[32px] bg-gradient-to-br from-[#06281e] via-[#093528] to-[#041d17] text-white p-7 sm:p-12 border border-emerald-500/25 shadow-2xl overflow-hidden scroll-mt-24"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>Part 03 • Worldwide Degree Recognition</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
                Global Accreditation &amp; Degree Recognition
              </h2>
              <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                Every university on StudyIndia is pre-audited for statutory Indian and global accreditation, ensuring your degree is recognized across{" "}
                <span className="text-white font-semibold">North America, UK/Europe, the Middle East, Africa, and Asia</span>.
              </p>
            </div>

            {/* Interactive Accreditation Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {globalRecognitions.map((council) => {
                const Icon = council.icon;
                const isActive = selectedCouncil === council.id;
                return (
                  <button
                    key={council.id}
                    type="button"
                    onClick={() => setSelectedCouncil(council.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                      isActive
                        ? "bg-white text-emerald-950 border-white shadow-lg scale-[1.02]"
                        : "bg-white/10 text-emerald-100 border-white/15 hover:bg-white/20"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{council.acronym}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 7 Cols: Detailed Spotlight */}
            <div className="lg:col-span-7 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-300/30 text-emerald-200 text-xs font-extrabold">
                    {currentCouncil.stream}
                  </span>
                  <span className="text-xs font-semibold text-amber-300">
                    {currentCouncil.verificationTime}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                  {currentCouncil.name} ({currentCouncil.acronym})
                </h3>

                <p className="text-sm text-emerald-100/90 leading-relaxed">
                  {currentCouncil.description}
                </p>

                <div className="pt-2 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    International Recognition & Licensing Highlights:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentCouncil.checklist.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-black/25 border border-white/10 flex items-start gap-2.5 text-xs text-emerald-50"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-emerald-200">
                  <span className="font-bold text-white">Statutory Mandate:</span>{" "}
                  {currentCouncil.indianRequirement}
                </div>
                <Link href="/universities">
                  <Button
                    size="sm"
                    className="bg-white text-emerald-950 hover:bg-emerald-50 font-bold rounded-xl cursor-pointer gap-1.5"
                  >
                    <span>Explore Accredited Universities &amp; Institutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right 5 Cols: Summary Matrix */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
              {globalRecognitions.map((c) => {
                const isSelected = c.id === selectedCouncil;
                return (
                  <div
                    key={c.id}
                    onClick={() => setSelectedCouncil(c.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? "bg-white/15 border-emerald-300/60 shadow-md"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-white text-sm font-heading">
                          {c.name}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/25 text-emerald-200">
                          {c.acronym}
                        </span>
                      </div>
                      <p className="text-xs text-emerald-100/75">{c.stream}</p>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? "text-emerald-300 translate-x-1" : "text-white/40"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 5: INTERACTIVE INTERNATIONAL PRE-DEPARTURE CHECKLIST
         ════════════════════════════════════════════════════════════════ */}
      <section className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Part 04 • Interactive Pre-Departure Audit</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight">
              International Student Admission & Travel Readiness Checklist
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Tick the documents you already have ready to check your instant application readiness score.
            </p>
          </div>

          <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-emerald-50 border border-emerald-200/80 shrink-0">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                Readiness Score
              </div>
              <div className="text-2xl font-black text-emerald-700 font-heading">
                {completedCount} / {readinessChecklist.length} Ready ({progressPercent}%)
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {readinessChecklist.map((item, idx) => {
            const isChecked = !!checkedDocs[idx];
            return (
              <button
                key={idx}
                type="button"
                onClick={() =>
                  setCheckedDocs((prev) => ({ ...prev, [idx]: !prev[idx] }))
                }
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3.5 ${
                  isChecked
                    ? "bg-emerald-50/60 border-emerald-400/80 shadow-2xs"
                    : "bg-slate-50/60 border-slate-200/80 hover:bg-slate-100/70"
                }`}
              >
                <div
                  className={`mt-0.5 w-5 h-5 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isChecked
                      ? "bg-emerald-600 text-white"
                      : "bg-white border border-slate-300 text-transparent"
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs sm:text-sm font-bold leading-snug ${
                        isChecked ? "text-slate-900" : "text-slate-700"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 shrink-0">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[11.5px] text-slate-500 leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
