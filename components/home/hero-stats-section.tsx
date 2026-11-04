"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Building2,
  Users,
  CheckCircle2,
  BookOpen,
  ShieldCheck,
  Globe2,
  Sparkles,
  TrendingUp,
  Award,
  Check,
  ArrowRight,
  ChevronRight,
  X,
  Clock,
  Banknote,
  Zap,
  GraduationCap,
  Scale,
  Landmark,
  Calculator,
  Compass,
  FileCheck,
  ChevronDown,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Smooth Count-Up Hook ─── */
function useSmoothCounter(target: number, duration: number = 2000, decimals: number = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOutProgress * target;

            setValue(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setValue(target);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.floor(value).toLocaleString("en-US");

  return { formatted, ref };
}

/* ─── Metric Details Interface ─── */
interface MetricDetail {
  id: string;
  numberValue: number;
  decimals?: number;
  suffix: string;
  prefix?: string;
  label: string;
  secondaryLabel: string;
  tag: string;
  tagColor: string;
  trend: string;
  description: string;
  keyPoints: string[];
  accreditationNote: string;
  ctaText: string;
  ctaHref: string;
}

const flagshipMetrics: MetricDetail[] = [
  {
    id: "universities",
    numberValue: 300,
    suffix: "+",
    label: "Accredited Universities & Institutions",
    secondaryLabel: "NIRF Top-100 & NAAC A++ Campuses",
    tag: "UGC & AICTE Verified",
    tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    trend: "Top 1% Tier-1 Institutions",
    description:
      "Direct partnership with India's most prestigious Central, State, and Autonomous Deemed Universities offering recognized world-class education with dedicated international hostels.",
    keyPoints: [
      "100% English-medium classroom pedagogy with globally benchmarked curriculum",
      "World-class campus infrastructure with modern research labs & smart classrooms",
      "Direct university admissions with official verified tuition and zero inflated fees",
      "Campuses located in top educational hubs: Delhi NCR, Bengaluru, Chennai, Pune, Vellore",
    ],
    accreditationNote: "UGC & AICTE Approved Campuses • Transparent University Fees",
    ctaText: "Explore 300+ Campuses",
    ctaHref: "/universities",
  },
  {
    id: "students",
    numberValue: 5000,
    suffix: "+",
    label: "International Students Placed",
    secondaryLabel: "Students from 50+ Global Nations",
    tag: "50+ Countries Represented",
    tagColor: "bg-teal-50 text-teal-800 border-teal-200/80",
    trend: "+28% Intake Growth (2026)",
    description:
      "A thriving, vibrant community of foreign students from South Asia, Africa, Middle East, and Southeast Asia studying across premier Indian university campuses.",
    keyPoints: [
      "Nepali students enjoy complete visa exemption under the 1950 Indo-Nepal Treaty",
      "Fast-track Student e-Visa support for all international students worldwide",
      "24/7 International Relations Office (IRO) and foreign student welfare buddy networks",
      "On-campus international dining halls catering to diverse multi-cultural cuisines",
    ],
    accreditationNote: "Bilateral Treaty Support • International Student Welfare",
    ctaText: "View Student Testimonials",
    ctaHref: "/about",
  },
  {
    id: "success",
    numberValue: 98.4,
    decimals: 1,
    suffix: "%",
    label: "Admission Success Rate",
    secondaryLabel: "Pre-Screened Academic Credentials & Equivalence",
    tag: "Equivalence Guaranteed",
    tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    trend: "Zero Application Rejection",
    description:
      "Every applicant's academic dossier is carefully reviewed by our admissions team for document verification, qualification equivalence, and compliance with applicable university and regulatory requirements.",
    keyPoints: [
      "Pre-verified against AICTE, NMC, PCI, BCI, and INC professional regulatory norms",
      "Official provisional admission letters issued directly on university letterhead",
      "Full documentation assistance for Ministry of Education (MoEST) No Objection Certificates",
      "Transparent refund regulations strictly aligned with UGC international guidelines",
    ],
    accreditationNote: "Council Guidelines Compliance • Direct Dean Clearance",
    ctaText: "Verify Your Eligibility",
    ctaHref: "/admission-process",
  },
  {
    id: "courses",
    numberValue: 500,
    suffix: "+",
    label: "Premier Degree Programs",
    secondaryLabel: "UG, PG & Research Specializations",
    tag: "Globally Recognized",
    tagColor: "bg-amber-50 text-amber-900 border-amber-200/80",
    trend: "24,000+ Total Disciplines",
    description:
      "Diverse career paths across Engineering, Artificial Intelligence, Health Sciences, Pharmacy, Management, and Law, designed for international licensure and top employability.",
    keyPoints: [
      "B.Tech CSE, Robotics, Cybersecurity, AI & Data Science with hands-on lab internships",
      "B.Pharm, Pharm.D, BSc Nursing & Allied Health Sciences with affiliated clinical training hospitals",
      "BBA, MBA, BCA, MCA, Law (BA LLB), and Applied Liberal Arts with global case studies",
      "Transparent fee schedules displayed in dual currencies (INR ₹ / USD $ / NPR रू)",
    ],
    accreditationNote: "Internationally Recognized Degrees • Global Career Pathways",
    ctaText: "Search All 500+ Programs",
    ctaHref: "/courses",
  },
];

/* ─── Precision Vector Flags (Cross-Platform Crisp Rendering) ─── */
function VectorFlag({ code }: { code: string }) {
  switch (code) {
    case "NP": // Nepal
      return (
        <svg viewBox="0 0 20 24" className="w-4.5 h-5 shrink-0 drop-shadow-2xs" fill="none">
          <path d="M2 1L18 10L7 10L17 22L2 22Z" fill="#DC143C" stroke="#003893" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M4 8A2 2 0 0 0 8 7A2 2 0 0 1 4 8Z" fill="#FFFFFF" />
          <circle cx="6.5" cy="17" r="1.8" fill="#FFFFFF" />
        </svg>
      );
    case "BD": // Bangladesh
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <rect width="24" height="16" fill="#006A4E" />
          <circle cx="10.5" cy="8" r="4.5" fill="#F42A41" />
        </svg>
      );
    case "BT": // Bhutan
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <polygon points="0,0 24,0 0,16" fill="#FFD520" />
          <polygon points="24,0 24,16 0,16" fill="#FF4E12" />
          <circle cx="12" cy="8" r="2.2" fill="#FFFFFF" opacity="0.85" />
        </svg>
      );
    case "LK": // Sri Lanka
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <rect width="24" height="16" fill="#FFBE29" />
          <rect x="1.5" y="1.5" width="3.5" height="13" fill="#005A36" />
          <rect x="5.5" y="1.5" width="3.5" height="13" fill="#EB7400" />
          <rect x="9.5" y="1.5" width="13" height="13" fill="#8D153A" />
        </svg>
      );
    case "AE": // UAE
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <rect x="6" y="0" width="18" height="5.33" fill="#00732F" />
          <rect x="6" y="5.33" width="18" height="5.34" fill="#FFFFFF" />
          <rect x="6" y="10.67" width="18" height="5.33" fill="#000000" />
          <rect x="0" y="0" width="6" height="16" fill="#FF0000" />
        </svg>
      );
    case "KE": // Kenya
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <rect y="0" width="24" height="4.5" fill="#000000" />
          <rect y="4.5" width="24" height="1" fill="#FFFFFF" />
          <rect y="5.5" width="24" height="5" fill="#BB0000" />
          <rect y="10.5" width="24" height="1" fill="#FFFFFF" />
          <rect y="11.5" width="24" height="4.5" fill="#006600" />
          <ellipse cx="12" cy="8" rx="2.2" ry="3.5" fill="#BB0000" stroke="#FFFFFF" strokeWidth="0.7" />
        </svg>
      );
    case "NG": // Nigeria
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <rect width="8" height="16" fill="#008751" />
          <rect x="8" width="8" height="16" fill="#FFFFFF" />
          <rect x="16" width="8" height="16" fill="#008751" />
        </svg>
      );
    case "TZ": // Tanzania
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <polygon points="0,0 24,0 0,16" fill="#1EB53A" />
          <polygon points="24,0 24,16 0,16" fill="#00A3DD" />
          <polygon points="0,16 20,0 24,0 4,16" fill="#FCD116" />
          <polygon points="0,16 22,0 24,0 2,16" fill="#000000" />
        </svg>
      );
    case "MU": // Mauritius
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <rect y="0" width="24" height="4" fill="#EA2839" />
          <rect y="4" width="24" height="4" fill="#1A206D" />
          <rect y="8" width="24" height="4" fill="#FFD500" />
          <rect y="12" width="24" height="4" fill="#00A04D" />
        </svg>
      );
    case "MW": // Malawi
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <rect y="0" width="24" height="5.33" fill="#000000" />
          <rect y="5.33" width="24" height="5.34" fill="#CE1126" />
          <rect y="10.67" width="24" height="5.33" fill="#339E35" />
          <circle cx="12" cy="3" r="1.8" fill="#CE1126" />
        </svg>
      );
    case "ZW": // Zimbabwe
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <rect y="0" width="24" height="2.28" fill="#319200" />
          <rect y="2.28" width="24" height="2.28" fill="#FFD200" />
          <rect y="4.56" width="24" height="2.28" fill="#DE2010" />
          <rect y="6.84" width="24" height="2.28" fill="#000000" />
          <rect y="9.12" width="24" height="2.28" fill="#DE2010" />
          <rect y="11.4" width="24" height="2.28" fill="#FFD200" />
          <rect y="13.68" width="24" height="2.32" fill="#319200" />
          <polygon points="0,0 7,8 0,16" fill="#FFFFFF" />
        </svg>
      );
    case "GH": // Ghana
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <rect y="0" width="24" height="5.33" fill="#CF0921" />
          <rect y="5.33" width="24" height="5.34" fill="#FCD20E" />
          <rect y="10.67" width="24" height="5.33" fill="#006B3D" />
          <polygon points="12,6 12.6,8 11,6.8 13,6.8 11.4,8" fill="#000000" />
        </svg>
      );
    case "UZ": // Uzbekistan
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <rect y="0" width="24" height="5" fill="#0099B5" />
          <rect y="5" width="24" height="0.6" fill="#CE1126" />
          <rect y="5.6" width="24" height="4.8" fill="#FFFFFF" />
          <rect y="10.4" width="24" height="0.6" fill="#CE1126" />
          <rect y="11" width="24" height="5" fill="#1EB53A" />
        </svg>
      );
    case "RW": // Rwanda
      return (
        <svg viewBox="0 0 24 16" className="w-5.5 h-3.5 shrink-0 rounded-[3px] overflow-hidden shadow-2xs border border-slate-200/60">
          <rect y="0" width="24" height="8" fill="#00A1DE" />
          <rect y="8" width="24" height="4" fill="#FAD201" />
          <rect y="12" width="24" height="4" fill="#20603D" />
        </svg>
      );
    default:
      return (
        <div className="w-5.5 h-3.5 rounded-[3px] bg-slate-200 flex items-center justify-center text-[8px] font-black text-slate-700">
          {code}
        </div>
      );
  }
}

/* ─── Global Country Admissions Pathways ─── */
interface CountryPathway {
  code: string;
  name: string;
  tag: string;
  highlight?: boolean;
}

const globalStudentPathways: CountryPathway[] = [
  { code: "NP", name: "Nepal", tag: "Visa-Free Treaty", highlight: true },
  { code: "BT", name: "Bhutan", tag: "Visa-Free Enrollment", highlight: true },
  { code: "BD", name: "Bangladesh", tag: "Fast-Track e-Visa" },
  { code: "LK", name: "Sri Lanka", tag: "SAARC Quota" },
  { code: "AE", name: "UAE & GCC", tag: "DASA / CIWG Scheme" },
  { code: "KE", name: "Kenya", tag: "Tech & Health Sciences" },
  { code: "NG", name: "Nigeria", tag: "STEM Degree Mobility" },
  { code: "TZ", name: "Tanzania", tag: "Direct Institutional Entry" },
  { code: "MU", name: "Mauritius", tag: "Bilateral Cultural Grant" },
  { code: "MW", name: "Malawi", tag: "Merit Scholarship Scheme" },
  { code: "ZW", name: "Zimbabwe", tag: "Engineering & IT" },
  { code: "GH", name: "Ghana", tag: "Pharmacy & Management" },
  { code: "UZ", name: "Uzbekistan", tag: "Bilateral Exchange" },
  { code: "RW", name: "Rwanda", tag: "Higher Education Grant" },
];

/* ─── Stream ROI Calculator Data ─── */
interface StreamCost {
  name: string;
  duration: string;
  annualFeeINR: number;
  annualFeeUSD: number;
  annualFeeNPR: number;
  avgPackageLPA: number;
  scholarshipWaiver: string;
  popularCareers: string[];
}

const streamData: Record<string, StreamCost> = {
  engineering: {
    name: "Engineering & AI (B.Tech)",
    duration: "4 Years",
    annualFeeINR: 195000,
    annualFeeUSD: 2350,
    annualFeeNPR: 312000,
    avgPackageLPA: 8.5,
    scholarshipWaiver: "Up to 50% Tuition Waiver",
    popularCareers: ["AI Engineer", "Full Stack Developer", "Cloud Architect", "Robotics Specialist"],
  },
  medical: {
    name: "Pharmacy & Health Sciences (B.Pharm / Nursing)",
    duration: "3 - 4 Years",
    annualFeeINR: 220000,
    annualFeeUSD: 2650,
    annualFeeNPR: 352000,
    avgPackageLPA: 7.5,
    scholarshipWaiver: "Institutional Merit Grants",
    popularCareers: ["Clinical Pharmacist", "Nursing Officer", "Biomedical Specialist", "Healthcare Executive"],
  },
  management: {
    name: "Business & Management (BBA / MBA)",
    duration: "2 - 3 Years",
    annualFeeINR: 175000,
    annualFeeUSD: 2100,
    annualFeeNPR: 280000,
    avgPackageLPA: 7.8,
    scholarshipWaiver: "Early-Bird 40% Waiver",
    popularCareers: ["Financial Analyst", "Product Manager", "Consultant", "Marketing Strategist"],
  },
  computing: {
    name: "Computer Applications (BCA / MCA)",
    duration: "3 Years",
    annualFeeINR: 145000,
    annualFeeUSD: 1750,
    annualFeeNPR: 232000,
    avgPackageLPA: 6.8,
    scholarshipWaiver: "Up to 45% Waiver",
    popularCareers: ["Software Developer", "Data Analyst", "Cybersecurity Analyst", "DevOps Engineer"],
  },
};

export function HeroStatsSection() {
  const [activeTab, setActiveTab] = useState<"flagship" | "calculator" | "accreditation">("flagship");
  const [selectedMetric, setSelectedMetric] = useState<MetricDetail | null>(null);

  // Calculator State
  const [selectedStream, setSelectedStream] = useState<string>("engineering");
  const [selectedCurrency, setSelectedCurrency] = useState<"INR" | "USD" | "NPR">("INR");

  // Counter hooks for the 4 flagship metrics
  const c1 = useSmoothCounter(300, 2000, 0);
  const c2 = useSmoothCounter(5000, 2200, 0);
  const c3 = useSmoothCounter(98.4, 2000, 1);
  const c4 = useSmoothCounter(500, 1800, 0);

  const currentStreamInfo = streamData[selectedStream];

  // Helper to format currency
  const formatCost = (inr: number, usd: number, npr: number) => {
    if (selectedCurrency === "USD") return `$${usd.toLocaleString("en-US")} / Year`;
    if (selectedCurrency === "NPR") return `रू ${npr.toLocaleString("en-US")} / Year`;
    return `₹${inr.toLocaleString("en-IN")} / Year`;
  };

  return (
    <section className="relative bg-gradient-to-b from-[#fafbfc] via-white to-[#fafbfc] border-y border-slate-200/90 py-16 sm:py-24 overflow-hidden">
      {/* ── Background Subtle Mesh Auras ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-tr from-emerald-100/35 via-teal-50/20 to-emerald-200/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* ── Top Executive Header & Perspective Controller ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/80">
          <div className="space-y-2 max-w-2xl">
            {/* Live Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/90 shadow-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
              </span>
              <span className="text-[11px] font-black tracking-widest uppercase text-emerald-800 font-heading">
                Audited Institutional Impact
              </span>
              <span className="text-emerald-300">•</span>
              <span className="text-[11px] font-bold text-emerald-700">
                2026–2027 Admissions Active
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
              India’s Most Trusted{" "}
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
                International Admissions
              </span>{" "}
              Gateway
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Your trusted partner for international admissions, facilitating access to India&apos;s recognized universities and higher education institutions.
            </p>
          </div>

          {/* Interactive Mode Switcher Tabs */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-2xs self-start lg:self-end">
            <button
              type="button"
              onClick={() => setActiveTab("flagship")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "flagship"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/70"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Flagship Metrics</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("calculator")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "calculator"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/70"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tuition & ROI Estimator</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("accreditation")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "accreditation"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/70"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Accreditation Vault</span>
            </button>
          </div>
        </div>

        {/* ── TAB 1: FLAGSHIP METRICS (The 4 Grand Pillars) ── */}
        {activeTab === "flagship" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* 4 Grand Bento Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* ── CARD 1: 300+ UNIVERSITIES ── */}
              <div
                ref={c1.ref}
                onClick={() => setSelectedMetric(flagshipMetrics[0])}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-500/50
                  shadow-[0_4px_24px_-4px_rgba(15,23,42,0.04)]
                  hover:shadow-[0_24px_50px_-12px_rgba(0,132,90,0.18)]
                  hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Specular Hairline Highlight */}
                <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top Bar: 3D Emblem & Tag */}
                  <div className="flex items-center justify-between gap-3">
                    {/* 3D Institutional Colonnade Jewel */}
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-emerald-400/25 to-teal-300/15 blur-md opacity-70 group-hover:opacity-100 transition-all duration-300" />
                      <div className="relative w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200/90 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="m1ColGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#00845a" />
                              <stop offset="1" stopColor="#047857" />
                            </linearGradient>
                            <linearGradient id="m1GoldPed" x1="16" y1="4" x2="16" y2="12" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#f59e0b" />
                              <stop offset="1" stopColor="#d97706" />
                            </linearGradient>
                          </defs>
                          {/* Stepped Pediment Roof */}
                          <path d="M16 4.5L28 10.5H4L16 4.5Z" fill="url(#m1GoldPed)" />
                          <path d="M5 10.5H27V12.5H5V10.5Z" fill="#b45309" />
                          {/* 4 Classical Pillars */}
                          <rect x="7" y="13.5" width="3" height="11" rx="0.8" fill="url(#m1ColGrad)" />
                          <rect x="12" y="13.5" width="3" height="11" rx="0.8" fill="url(#m1ColGrad)" />
                          <rect x="17" y="13.5" width="3" height="11" rx="0.8" fill="url(#m1ColGrad)" />
                          <rect x="22" y="13.5" width="3" height="11" rx="0.8" fill="url(#m1ColGrad)" />
                          {/* Base Plinth */}
                          <path d="M4 25H28V27.5H4V25Z" fill="#065f46" />
                          {/* Center Gold Crest */}
                          <circle cx="16" cy="8.2" r="1.3" fill="#ffffff" />
                        </svg>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-bold border tracking-tight shadow-2xs bg-emerald-50 text-emerald-800 border-emerald-200/80">
                      UGC & AICTE
                    </span>
                  </div>

                  {/* Counter Number */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 font-heading tracking-tight leading-none">
                      {c1.formatted}+
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-800 font-heading tracking-tight mt-2 leading-snug group-hover:text-emerald-700 transition-colors">
                    Accredited Universities &amp; Institutions
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1.5">
                    NIRF Top-100 & NAAC A++ institutions welcoming international students.
                  </p>
                </div>

                {/* Bottom Micro Proof Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-emerald-600 group-hover:text-emerald-700 inline-flex items-center gap-1 transition-colors">
                    <span>Inspect Campus Network</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-[10.5px] font-semibold text-slate-400">
                    Tier-1 Campuses
                  </span>
                </div>
              </div>

              {/* ── CARD 2: 5,000+ STUDENTS PLACED ── */}
              <div
                ref={c2.ref}
                onClick={() => setSelectedMetric(flagshipMetrics[1])}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-teal-500/50
                  shadow-[0_4px_24px_-4px_rgba(15,23,42,0.04)]
                  hover:shadow-[0_24px_50px_-12px_rgba(13,148,136,0.18)]
                  hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-3">
                    {/* 3D Global Student Vanguard Jewel */}
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-teal-400/25 to-cyan-300/15 blur-md opacity-70 group-hover:opacity-100 transition-all duration-300" />
                      <div className="relative w-13 h-13 rounded-2xl bg-teal-50 border border-teal-200/90 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="m2GlobeGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#0d9488" />
                              <stop offset="1" stopColor="#0f766e" />
                            </linearGradient>
                            <linearGradient id="m2CapGrad" x1="16" y1="4" x2="16" y2="14" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#0f172a" />
                              <stop offset="1" stopColor="#334155" />
                            </linearGradient>
                          </defs>
                          {/* Crystalline Globe */}
                          <circle cx="16" cy="18" r="10" fill="url(#m2GlobeGrad)" />
                          <circle cx="16" cy="18" r="9.3" stroke="#5eead4" strokeWidth="0.8" opacity="0.6" />
                          <ellipse cx="16" cy="18" rx="5" ry="9.3" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
                          <line x1="6.7" y1="18" x2="25.3" y2="18" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
                          {/* Graduation Cap */}
                          <path d="M16 5.5L25 10L16 14.5L7 10L16 5.5Z" fill="url(#m2CapGrad)" stroke="#ffffff" strokeWidth="0.8" />
                          {/* Gold Tassel */}
                          <circle cx="16" cy="10" r="1.2" fill="#f59e0b" />
                          <path d="M22 10.5V14.5" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-bold border tracking-tight shadow-2xs bg-teal-50 text-teal-800 border-teal-200/80">
                      50+ Countries
                    </span>
                  </div>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 font-heading tracking-tight leading-none">
                      {c2.formatted}+
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-800 font-heading tracking-tight mt-2 leading-snug group-hover:text-teal-700 transition-colors">
                    Global Students Placed
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1.5">
                    Active international students enrolled across premier Indian faculties.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-teal-600 group-hover:text-teal-700 inline-flex items-center gap-1 transition-colors">
                    <span>Explore Community</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-[10.5px] font-semibold text-slate-400">
                    +28% Intake Growth
                  </span>
                </div>
              </div>

              {/* ── CARD 3: 98.4% SUCCESS RATE ── */}
              <div
                ref={c3.ref}
                onClick={() => setSelectedMetric(flagshipMetrics[2])}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-500/50
                  shadow-[0_4px_24px_-4px_rgba(15,23,42,0.04)]
                  hover:shadow-[0_24px_50px_-12px_rgba(0,132,90,0.18)]
                  hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-3">
                    {/* 3D Radial Precision Gauge Jewel */}
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-emerald-400/25 to-green-300/15 blur-md opacity-70 group-hover:opacity-100 transition-all duration-300" />
                      <div className="relative w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200/90 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                        <svg className="w-9 h-9" viewBox="0 0 36 36">
                          <defs>
                            <linearGradient id="m3ArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#10b981" />
                              <stop offset="100%" stopColor="#047857" />
                            </linearGradient>
                          </defs>
                          {/* Background Track */}
                          <path
                            className="text-emerald-100 stroke-current"
                            strokeWidth="3.2"
                            fill="none"
                            d="M18 3.5 a 14.5 14.5 0 0 1 0 29 a 14.5 14.5 0 0 1 0 -29"
                          />
                          {/* 98.4% Glowing Arc */}
                          <path
                            stroke="url(#m3ArcGrad)"
                            strokeWidth="3.2"
                            strokeDasharray="91, 100"
                            strokeLinecap="round"
                            fill="none"
                            d="M18 3.5 a 14.5 14.5 0 0 1 0 29 a 14.5 14.5 0 0 1 0 -29"
                          />
                          {/* Inner Check Medallion */}
                          <circle cx="18" cy="18" r="8" fill="#00845a" />
                          <path
                            d="M14.5 18L17 20.5L21.5 15.5"
                            stroke="#ffffff"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-bold border tracking-tight shadow-2xs bg-emerald-50 text-emerald-800 border-emerald-200/80">
                      Zero Rejection
                    </span>
                  </div>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 font-heading tracking-tight leading-none">
                      {c3.formatted}%
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-800 font-heading tracking-tight mt-2 leading-snug group-hover:text-emerald-700 transition-colors">
                    Admission Success Rate
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1.5">
                    Pre-screened academic credentials &amp; qualification equivalence with direct university offer letters.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-emerald-600 group-hover:text-emerald-700 inline-flex items-center gap-1 transition-colors">
                    <span>Audit Verification</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-[10.5px] font-semibold text-slate-400">
                    Direct Offers
                  </span>
                </div>
              </div>

              {/* ── CARD 4: 500+ COURSES (24,000+ Disciplines) ── */}
              <div
                ref={c4.ref}
                onClick={() => setSelectedMetric(flagshipMetrics[3])}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-amber-500/50
                  shadow-[0_4px_24px_-4px_rgba(15,23,42,0.04)]
                  hover:shadow-[0_24px_50px_-12px_rgba(217,119,6,0.18)]
                  hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-3">
                    {/* 3D Multi-Discipline Degree Codex Jewel */}
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-400/25 to-yellow-300/15 blur-md opacity-70 group-hover:opacity-100 transition-all duration-300" />
                      <div className="relative w-13 h-13 rounded-2xl bg-amber-50 border border-amber-200/90 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="m4BookGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#f59e0b" />
                              <stop offset="1" stopColor="#d97706" />
                            </linearGradient>
                          </defs>
                          {/* Open Codex Book Spine */}
                          <path
                            d="M16 8C13 6 7 6 4 7.5V24C7 22.5 13 22.5 16 24.5C19 22.5 25 22.5 28 24V7.5C25 6 19 6 16 8Z"
                            fill="url(#m4BookGrad)"
                          />
                          <path
                            d="M16 8V24.5"
                            stroke="#ffffff"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                          />
                          {/* Inner Faculty Pages */}
                          <path d="M6 11H13M6 14.5H12M6 18H10" stroke="#fef3c7" strokeWidth="1" strokeLinecap="round" />
                          <path d="M19 11H26M20 14.5H26M22 18H26" stroke="#fef3c7" strokeWidth="1" strokeLinecap="round" />
                          {/* Star Zenith */}
                          <circle cx="16" cy="4.5" r="1.5" fill="#f59e0b" />
                        </svg>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-bold border tracking-tight shadow-2xs bg-amber-50 text-amber-900 border-amber-200/80">
                      Globally Recognized
                    </span>
                  </div>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 font-heading tracking-tight leading-none">
                      {c4.formatted}+
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-800 font-heading tracking-tight mt-2 leading-snug group-hover:text-amber-800 transition-colors">
                    Recognized Programs
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1.5">
                    Undergraduate, Postgraduate & Doctoral curricula across 1,200+ faculties.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-amber-700 group-hover:text-amber-800 inline-flex items-center gap-1 transition-colors">
                    <span>Browse 500+ Curriculums</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-[10.5px] font-semibold text-slate-400">
                    All Streams
                  </span>
                </div>
              </div>
            </div>

            {/* ── International Student Nationality Showcase (Pro Luxury UI/UX) ── */}
            <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.04)] p-5 sm:p-6 lg:p-7">
              {/* Atmospheric Background Aura */}
              <div className="absolute top-0 right-1/4 w-80 h-32 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-64 h-32 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header Row */}
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-start sm:items-center gap-3.5">
                  {/* 3D Luminous Globe Pod */}
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-emerald-400/30 to-teal-300/20 blur-md opacity-80" />
                    <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-b from-emerald-50 to-teal-50 border border-emerald-200/90 flex items-center justify-center text-emerald-700 shadow-xs">
                      <Globe2 className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading tracking-tight">
                        International Student Admissions Across 50+ Countries
                      </h4>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10.5px] font-bold text-emerald-800 shadow-2xs">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        Active Global Intake 2026–27
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-500 font-medium mt-1 leading-relaxed">
                      Enjoy bilateral treaty privileges for Nepal and Bhutan alongside fast-track electronic student visas and transparent tuition rates worldwide.
                    </p>
                  </div>
                </div>

                {/* Metric Micro-Pill & Action */}
                <div className="flex items-center gap-2.5 self-start md:self-auto shrink-0">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-emerald-600" />
                    <span>10,000+ Enrolled</span>
                  </div>
                  <Link
                    href="/admission-process"
                    className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs hover:shadow-sm"
                  >
                    <span>Visa Guidelines</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Dual Continuous Infinite Marquee Rows with Precision Vector Flags */}
              <div className="relative pt-5 overflow-hidden">
                {/* Left and Right Gradient Mask Vignettes */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

                {/* Track 1: Gliding Left */}
                <div className="flex overflow-hidden pb-3">
                  <div className="animate-marquee gap-3 py-1">
                    {[...globalStudentPathways, ...globalStudentPathways].map((c, i) => (
                      <div
                        key={i}
                        className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border transition-all duration-200 cursor-default shrink-0 select-none ${
                          c.highlight
                            ? "bg-gradient-to-r from-emerald-50/90 via-white to-emerald-50/50 border-emerald-300/90 shadow-[0_2px_8px_-2px_rgba(16,185,129,0.18)] hover:border-emerald-400 hover:shadow-sm"
                            : "bg-white hover:bg-slate-50/90 border-slate-200/90 hover:border-emerald-200 shadow-2xs hover:shadow-xs"
                        }`}
                      >
                        <VectorFlag code={c.code} />
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-950 transition-colors">
                              {c.name}
                            </span>
                            {c.highlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            )}
                          </div>
                          <span
                            className={`text-[10px] font-semibold leading-tight mt-0.5 ${
                              c.highlight ? "text-emerald-700 font-bold" : "text-slate-500"
                            }`}
                          >
                            {c.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Track 2: Gliding Reverse (Right) */}
                <div className="flex overflow-hidden pt-1">
                  <div className="animate-marquee-reverse gap-3 py-1">
                    {[...globalStudentPathways.slice().reverse(), ...globalStudentPathways.slice().reverse()].map((c, i) => (
                      <div
                        key={i}
                        className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border transition-all duration-200 cursor-default shrink-0 select-none ${
                          c.highlight
                            ? "bg-gradient-to-r from-emerald-50/90 via-white to-emerald-50/50 border-emerald-300/90 shadow-[0_2px_8px_-2px_rgba(16,185,129,0.18)] hover:border-emerald-400 hover:shadow-sm"
                            : "bg-white hover:bg-slate-50/90 border-slate-200/90 hover:border-emerald-200 shadow-2xs hover:shadow-xs"
                        }`}
                      >
                        <VectorFlag code={c.code} />
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-950 transition-colors">
                              {c.name}
                            </span>
                            {c.highlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            )}
                          </div>
                          <span
                            className={`text-[10px] font-semibold leading-tight mt-0.5 ${
                              c.highlight ? "text-emerald-700 font-bold" : "text-slate-500"
                            }`}
                          >
                            {c.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: TUITION & ROI ESTIMATOR ── */}
        {activeTab === "calculator" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 animate-in fade-in duration-300">
            {/* Header + Currency Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                  Interactive Degree Tuition & Placement Benchmark
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Compare authentic university tuition schedules with verified average campus placement offers.
                </p>
              </div>

              {/* Currency Selector */}
              <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200/80 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setSelectedCurrency("INR")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCurrency === "INR"
                      ? "bg-white text-emerald-800 shadow-2xs border border-slate-200/60"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  ₹ INR
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCurrency("USD")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCurrency === "USD"
                      ? "bg-white text-emerald-800 shadow-2xs border border-slate-200/60"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  $ USD
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCurrency("NPR")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCurrency === "NPR"
                      ? "bg-white text-emerald-800 shadow-2xs border border-slate-200/60"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  रू NPR (1:1.60 Peg)
                </button>
              </div>
            </div>

            {/* Stream Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.entries(streamData).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedStream(key)}
                  className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedStream === key
                      ? "bg-emerald-50/80 border-emerald-500 shadow-xs ring-1 ring-emerald-400/40"
                      : "bg-slate-50/60 border-slate-200/80 hover:bg-slate-100/70 text-slate-700"
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">{item.name}</div>
                  <div className="text-[11px] text-slate-500 mt-1">{item.duration} Degree</div>
                </button>
              ))}
            </div>

            {/* Calculated Results Bento */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/60 to-teal-50/40 border border-emerald-200/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Estimated Average Tuition
                </span>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  {formatCost(
                    currentStreamInfo.annualFeeINR,
                    currentStreamInfo.annualFeeUSD,
                    currentStreamInfo.annualFeeNPR
                  )}
                </div>
                <div className="text-xs font-semibold text-emerald-700 inline-flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{currentStreamInfo.scholarshipWaiver}</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Top Campus Placement Track
                </span>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  {currentStreamInfo.avgPackageLPA} LPA
                  <span className="text-sm font-semibold text-slate-500 ml-1.5 font-sans">
                    (~${(currentStreamInfo.avgPackageLPA * 1200).toLocaleString("en-US")}/yr)
                  </span>
                </div>
                <div className="text-xs text-slate-500 pt-1">
                  Average campus recruitment across Google, Microsoft, Amazon & TCS
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  High-Demand Global Careers
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentStreamInfo.popularCareers.map((c, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-[10.5px] font-semibold text-slate-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="text-[11px] text-slate-400 pt-1">
                  Eligible for global professional licensure (TU, NEC, NMC, USMLE)
                </div>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-emerald-600" />
                Tuition figures are indicative registrar base fees. Exact fees depend on academic scholarship discount.
              </span>
              <Link href="/courses">
                <Button className="h-10 px-5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer shadow-xs gap-2">
                  <span>Browse Detailed Fee Structures</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* ── TAB 3: ACCREDITATION VAULT ── */}
        {activeTab === "accreditation" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700">
                <Landmark className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-heading">
                UGC Recognized
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Degrees conferred by universities statutory under Section 2(f) and 12(B) of the University Grants Commission Act, 1956.
              </p>
              <div className="text-[11px] font-bold text-emerald-700">
                ✓ Worldwide Equivalence
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-heading">
                AICTE Approved
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                All Engineering, Technology, Architecture, and Management programs adhere to All India Council for Technical Education norms.
              </p>
              <div className="text-[11px] font-bold text-teal-700">
                ✓ Washington Accord Aligned
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-heading">
                NAAC A++ Graded
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Highest national grade awarded by the National Assessment and Accreditation Council for faculty quality and research infrastructure.
              </p>
              <div className="text-[11px] font-bold text-amber-800">
                ✓ Top 5% in India
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-700">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-heading">
                Student e-Visa &amp; Bilateral Treaties
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Fast-track 5-day paperless Student e-Visa globally, plus reciprocal visa-free study rights for citizens of Nepal and Bhutan.
              </p>
              <div className="text-[11px] font-bold text-purple-700">
                ✓ Zero Embassy Formalities
              </div>
            </div>
          </div>
        )}

        {/* ── Bottom Institutional Trust Strip ── */}
        <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs text-slate-500 border-t border-slate-200/70">
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Audited Statutory Accreditations:</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-semibold text-[11.5px] text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
              AICTE Approved
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
              UGC Recognized
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
              NAAC A++ Graded
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
              Association of Indian Universities (AIU)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
              Application Fee: $100 USD (Intl) / NPR 1,000 (Nepal)
            </span>
          </div>
        </div>
      </div>

      {/* ── INTERACTIVE METRIC DEEP-DIVE MODAL ── */}
      {selectedMetric && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/90 flex items-center justify-center shrink-0 text-emerald-700">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-slate-900 font-heading">
                      {selectedMetric.numberValue}
                      {selectedMetric.suffix}
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${selectedMetric.tagColor}`}>
                      {selectedMetric.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-800 font-heading">
                    {selectedMetric.label}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMetric(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-5 space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-xs text-emerald-950 space-y-1">
                <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>{selectedMetric.secondaryLabel}</span>
                </div>
                <p className="text-emerald-800/90 leading-relaxed">
                  {selectedMetric.description}
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Audited Operational Details
                </h5>
                <ul className="space-y-2 text-xs text-slate-600">
                  {selectedMetric.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="mt-0.5 p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11.5px] text-slate-600 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{selectedMetric.accreditationNote}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedMetric(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Dismiss
              </button>
              <Link href={selectedMetric.ctaHref} onClick={() => setSelectedMetric(null)}>
                <Button className="font-semibold text-xs sm:text-sm gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-10 px-5 cursor-pointer shadow-sm">
                  <span>{selectedMetric.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
