"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  MapPin,
  Building2,
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Globe,
  Clock,
  GraduationCap,
  Calculator,
  BookOpen,
  Star,
  CheckSquare,
  Square,
  ChevronRight,
  Users,
  Home,
  FileCheck2,
  Compass,
  Layers,
  BadgeCheck,
  Plane,
  HeartPulse,
  Wifi,
} from "lucide-react";
import { University } from "@/lib/data/universities";
import { Course } from "@/lib/data/courses";
import { Button } from "@/components/ui/button";

type CurrencyCode = "INR" | "USD" | "NPR";

interface UniversityDetailClientProps {
  university: University;
  universityCourses: Course[];
  similarUniversities: University[];
}

interface SignatureProgramme {
  id: string;
  stream: string;
  degree: string;
  title: string;
  duration: string;
  annualFeeINR: number;
  eligibility: string;
  scholarshipNote: string;
  careers: string[];
  courseLink?: string;
  isAuditedCourse?: boolean;
}

const SCHOLARSHIP_TIERS = [
  {
    id: "tier-50",
    label: "85%+ or 3.6+ GPA",
    sublabel: "Top Academic Merit Tier",
    discountPercent: 50,
  },
  {
    id: "tier-30",
    label: "75%–84% or 3.2+ GPA",
    sublabel: "First Division Merit Tier",
    discountPercent: 30,
  },
  {
    id: "tier-20",
    label: "65%–74% or 2.8+ GPA",
    sublabel: "Standard Merit Tier",
    discountPercent: 20,
  },
  {
    id: "tier-0",
    label: "50%–64% or 2.2+ GPA",
    sublabel: "Direct Qualifying Admission",
    discountPercent: 0,
  },
];

const DOCUMENT_CHECKLIST = [
  {
    id: "doc-10",
    title: "Grade 10 / Secondary School Certificate",
    subtitle: "Official marksheet and passing certificate",
  },
  {
    id: "doc-12",
    title: "Grade 12 / High School Transcript",
    subtitle: "NEB, CBSE, A-Levels, IB, WAEC, or equivalent",
  },
  {
    id: "doc-id",
    title: "Valid Passport or National ID",
    subtitle: "Passport for e-Visa; Citizenship ID valid for Nepal & Bhutan",
  },
  {
    id: "doc-photo",
    title: "Passport-Size Photographs",
    subtitle: "Digital copy with a plain white background",
  },
];

export function UniversityDetailClient({
  university,
  universityCourses,
  similarUniversities,
}: UniversityDetailClientProps) {
  const [currency, setCurrency] = useState<CurrencyCode>("INR");
  const [selectedStream, setSelectedStream] = useState<string>("All");
  const [calcProgrammeIdx, setCalcProgrammeIdx] = useState<number>(0);
  const [selectedScholarshipId, setSelectedScholarshipId] =
    useState<string>("tier-30");
  const [hostelType, setHostelType] = useState<"ac" | "standard">("ac");
  const [checkedDocs, setCheckedDocs] = useState<string[]>([
    "doc-10",
    "doc-12",
  ]);

  const formatMoney = (amountINR: number) => {
    if (currency === "INR") {
      return `₹${Math.round(amountINR).toLocaleString("en-IN")}`;
    }
    if (currency === "USD") {
      const usd = Math.round(amountINR / 83);
      return `$${usd.toLocaleString("en-US")}`;
    }
    const npr = Math.round(amountINR * 1.6);
    return `NPR ${npr.toLocaleString("en-IN")}`;
  };

  const naacBadgeLabel = university.naacGrade.includes("UGC")
    ? university.naacGrade
    : `NAAC ${university.naacGrade} Accredited`;

  // Unified programme catalog so every university has complete, accurate programme options
  const allProgrammes: SignatureProgramme[] = useMemo(() => {
    const baseTuitionFactor =
      university.naacGrade === "A++"
        ? 1.15
        : university.naacGrade === "A+"
          ? 1.0
          : 0.88;

    const fromCoursesData: SignatureProgramme[] = universityCourses.map((c) => ({
      id: c.id,
      stream: c.stream,
      degree: c.degree,
      title: c.name,
      duration: `${c.durationYears} Years`,
      annualFeeINR: c.annualFeeINR,
      eligibility: `${c.eligibility.minimumEducation} (${c.eligibility.minimumGpaOrPercentage})`,
      scholarshipNote: "Up to 50% Merit Scholarship",
      careers: c.careerProspects.slice(0, 3),
      courseLink: `/courses/${c.id}`,
      isAuditedCourse: true,
    }));

    const defaultTemplates: SignatureProgramme[] = [
      {
        id: `${university.id}-btech-cse`,
        stream: "Engineering & Technology",
        degree: "B.Tech",
        title: "B.Tech in Computer Science & Engineering (AI, ML & Cloud Tech)",
        duration: "4 Years",
        annualFeeINR: Math.round((185000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "10+2 with Physics & Mathematics (Min. 50%–55% Aggregate)",
        scholarshipNote: "Up to 50% Merit Scholarship",
        careers: ["Software Engineer", "AI/ML Architect", "Cloud Engineer"],
      },
      {
        id: `${university.id}-bba-global`,
        stream: "Business & Management",
        degree: "BBA",
        title: "Bachelor of Business Administration (International Business & Finance)",
        duration: "3–4 Years",
        annualFeeINR: Math.round((135000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "10+2 in Any Stream from a Recognised Board (Min. 50%)",
        scholarshipNote: "Up to 40% Merit Scholarship",
        careers: ["Business Analyst", "Corporate Finance", "Marketing Lead"],
      },
      {
        id: `${university.id}-mba-exec`,
        stream: "Business & Management",
        degree: "MBA",
        title: "Master of Business Administration (Dual Specialization)",
        duration: "2 Years",
        annualFeeINR: Math.round((210000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "Bachelor's Degree in Any Discipline (Min. 50% Aggregate)",
        scholarshipNote: "Up to 35% Merit Scholarship",
        careers: ["Management Consultant", "Product Manager", "Finance Director"],
      },
      {
        id: `${university.id}-bca-it`,
        stream: "Computer Applications",
        degree: "BCA",
        title: "Bachelor of Computer Applications (Full-Stack & Data Science)",
        duration: "3–4 Years",
        annualFeeINR: Math.round((125000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "10+2 in Any Stream (Min. 50% Aggregate)",
        scholarshipNote: "Up to 40% Merit Scholarship",
        careers: ["Full-Stack Developer", "Data Analyst", "Systems Engineer"],
      },
      {
        id: `${university.id}-mca`,
        stream: "Computer Applications",
        degree: "MCA",
        title: "Master of Computer Applications (Enterprise Software & AI)",
        duration: "2 Years",
        annualFeeINR: Math.round((155000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "BCA / B.Sc CS / Bachelor's Degree with Mathematics",
        scholarshipNote: "Up to 30% Merit Scholarship",
        careers: ["Solutions Architect", "Backend Engineer", "Cloud Specialist"],
      },
      {
        id: `${university.id}-bpharm`,
        stream: "Pharmacy & Health Sciences",
        degree: "B.Pharm",
        title: "Bachelor of Pharmacy (PCI & UGC Approved Clinical Track)",
        duration: "4 Years",
        annualFeeINR: Math.round((165000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "10+2 with Physics, Chemistry & Biology/Mathematics (Min. 55%)",
        scholarshipNote: "Up to 30% Merit Scholarship",
        careers: ["Clinical Pharmacist", "Regulatory Affairs", "R&D Scientist"],
      },
      {
        id: `${university.id}-nursing`,
        stream: "Pharmacy & Health Sciences",
        degree: "Nursing",
        title: "B.Sc Nursing & Allied Health Sciences",
        duration: "2–4 Years",
        annualFeeINR: Math.round((160000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "10+2 with Physics, Chemistry, Biology & English (Min. 50%)",
        scholarshipNote: "Clinical Hospital Training Included",
        careers: ["Registered Nurse", "Healthcare Coordinator", "Clinical Care"],
      },
    ];

    const existingDegrees = new Set(fromCoursesData.map((c) => c.degree));
    return [
      ...fromCoursesData,
      ...defaultTemplates.filter(
        (t) => !existingDegrees.has(t.degree as Course["degree"])
      ),
    ];
  }, [university.id, university.naacGrade, universityCourses]);

  const streamCategories = useMemo(() => {
    const unique = Array.from(new Set(allProgrammes.map((p) => p.stream)));
    return ["All", ...unique];
  }, [allProgrammes]);

  const filteredProgrammes = useMemo(() => {
    if (selectedStream === "All") return allProgrammes;
    return allProgrammes.filter((p) => p.stream === selectedStream);
  }, [allProgrammes, selectedStream]);

  // Scholarship Calculator computations
  const activeProgramme =
    allProgrammes[calcProgrammeIdx] || allProgrammes[0];
  const activeScholarship =
    SCHOLARSHIP_TIERS.find((t) => t.id === selectedScholarshipId) ||
    SCHOLARSHIP_TIERS[1];

  const grossTuitionINR = activeProgramme
    ? activeProgramme.annualFeeINR
    : 160000;
  const scholarshipSavingsINR = Math.round(
    (grossTuitionINR * activeScholarship.discountPercent) / 100
  );
  const netTuitionINR = grossTuitionINR - scholarshipSavingsINR;
  const activeHostelINR =
    hostelType === "ac"
      ? university.hostelFeePerYearINR
      : Math.round(university.hostelFeePerYearINR * 0.78);
  const totalAnnualEstimatedINR = netTuitionINR + activeHostelINR;

  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const docProgress = Math.round(
    (checkedDocs.length / DOCUMENT_CHECKLIST.length) * 100
  );

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 pb-24 font-sans">
      {/* ══════════════════════════════════════════════════════════════════
          1. ULTRA-PREMIUM ARCHITECTURAL HERO SECTION
         ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/75 via-white to-[#f8fafc] border-b border-slate-200/80 pt-6 pb-14 lg:pb-18">
        {/* Multi-layer ambient aurora lighting & architectural dot grid */}
        <div className="absolute -top-40 right-[-80px] w-[540px] h-[540px] rounded-full bg-gradient-to-br from-emerald-200/45 via-teal-100/35 to-transparent blur-[110px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-[440px] h-[440px] rounded-full bg-gradient-to-tr from-teal-100/40 via-emerald-100/25 to-transparent blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(16, 185, 129, 0.16) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Navigation Bar: Breadcrumb + Live Currency Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/75">
            <nav className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-2xs text-xs font-medium text-slate-500">
              <Link
                href="/"
                className="hover:text-emerald-700 transition-colors flex items-center gap-1.5 text-slate-600"
              >
                <Home className="w-3.5 h-3.5 text-emerald-600" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <Link
                href="/universities"
                className="hover:text-emerald-700 transition-colors text-slate-600"
              >
                Universities &amp; Institutions
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
                {university.name}
              </span>
            </nav>

            {/* Ultra-Clean Glass Currency Switcher */}
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-full p-1 shadow-[0_2px_10px_-3px_rgba(15,23,42,0.06)]">
              <span className="text-[11px] font-semibold text-slate-500 pl-3 hidden sm:inline">
                Select Currency:
              </span>
              {(["INR", "USD", "NPR"] as CurrencyCode[]).map((code) => {
                const active = currency === code;
                const label =
                  code === "INR" ? "₹ INR" : code === "USD" ? "$ USD" : "NPR";
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setCurrency(code)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      active
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs"
                        : "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── MAIN HERO SHOWCASE CARD ── */}
          <div className="mt-8 relative rounded-[32px] bg-white/85 backdrop-blur-2xl border border-white/90 ring-1 ring-slate-900/[0.06] shadow-[0_25px_70px_-15px_rgba(15,23,42,0.08)] p-6 sm:p-8 lg:p-10 overflow-hidden">
            {/* Subtle top-left corner radial sheen */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* LEFT 7 COLUMNS: Editorial Identity, Credentials & Value Props */}
              <div className="lg:col-span-7 space-y-6">
                {/* Precision Glassmorphic Credential Pills */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50/80 border border-emerald-200/90 text-emerald-800 text-xs font-bold shadow-2xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                    </span>
                    {naacBadgeLabel}
                  </span>

                  {university.nirfRank && (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-amber-200/90 text-amber-900 text-xs font-bold shadow-2xs">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      NIRF National Rank #{university.nirfRank}
                    </span>
                  )}

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-slate-700 text-xs font-semibold shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    UGC Recognized • AIU Member
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-bold shadow-2xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {university.rating.toFixed(1)}
                  </span>
                </div>

                {/* University Title + Location & Heritage Pill Strip */}
                <div className="space-y-3.5">
                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight font-heading leading-[1.12]">
                    {university.name}
                  </h1>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50/80 border border-emerald-200/70 font-semibold text-emerald-800">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      {university.city}, {university.state}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/80 border border-slate-200/70 font-medium text-slate-700">
                      <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      Est. {university.establishedYear} • {university.campusSize} Campus
                    </span>
                  </div>
                </div>

                {/* Refined Editorial Description */}
                <p className="text-sm sm:text-[15.5px] text-slate-600 leading-relaxed font-normal max-w-2xl">
                  {university.description}
                </p>

                {/* 3 Elevated Glassmorphic Feature Pods */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="group flex items-center gap-3 bg-gradient-to-b from-white to-slate-50/60 hover:from-emerald-50/40 hover:to-white border border-slate-200/90 hover:border-emerald-300 rounded-2xl p-3.5 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.05)] transition-all duration-200">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <BadgeCheck className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-slate-900 block leading-tight">
                        Direct Offer Letter
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                        In 7–10 Working Days
                      </span>
                    </div>
                  </div>

                  <div className="group flex items-center gap-3 bg-gradient-to-b from-white to-slate-50/60 hover:from-emerald-50/40 hover:to-white border border-slate-200/90 hover:border-emerald-300 rounded-2xl p-3.5 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.05)] transition-all duration-200">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-slate-900 block leading-tight">
                        Up to 50% Waiver
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                        Merit Scholarships
                      </span>
                    </div>
                  </div>

                  <div className="group flex items-center gap-3 bg-gradient-to-b from-white to-slate-50/60 hover:from-emerald-50/40 hover:to-white border border-slate-200/90 hover:border-emerald-300 rounded-2xl p-3.5 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.05)] transition-all duration-200">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-slate-900 block leading-tight">
                        Student e-Visa &amp; FRRO
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                        Step-by-Step Support
                      </span>
                    </div>
                  </div>
                </div>

                {/* Executive Action CTA Row */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link href={`/register?universityId=${university.id}`}>
                    <Button
                      size="lg"
                      className="h-12 px-7 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold text-sm shadow-[0_10px_25px_-6px_rgba(5,150,105,0.45)] hover:shadow-[0_14px_30px_-6px_rgba(5,150,105,0.55)] transition-all duration-200 hover:-translate-y-0.5 gap-2 cursor-pointer"
                    >
                      <span>Apply for 2027–28 Intake</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  <a
                    href="#scholarship-calculator"
                    className="inline-flex items-center gap-2 h-12 px-5 rounded-xl bg-white hover:bg-emerald-50/60 border border-slate-200/90 hover:border-emerald-300 text-slate-700 hover:text-emerald-800 font-semibold text-sm shadow-2xs transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Calculator className="w-4 h-4 text-emerald-600" />
                    <span>Calculate My Fee &amp; Scholarship</span>
                  </a>
                </div>
              </div>

              {/* RIGHT 5 COLUMNS: Architectural Framed Campus Showcase + Integrated Footer Dock */}
              <div className="lg:col-span-5 relative">
                {/* Ambient back-glow behind the image frame */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent rounded-[32px] blur-2xl -z-10 pointer-events-none" />

                <div className="rounded-[26px] bg-white border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)] p-3 space-y-3">
                  {/* Campus Photo Viewport (Uncluttered so the photo shines!) */}
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-100 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/15 pointer-events-none" />

                    {/* Top-Left Glass Status Pill */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/80 text-slate-800 text-xs font-semibold shadow-md">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                        </span>
                        <span>2027–28 Global Admissions Open</span>
                      </span>
                    </div>
                  </div>

                  {/* Clean Integrated Bottom Dock (Below image so nothing blocks the campus photo!) */}
                  <div className="grid grid-cols-2 gap-2.5 pt-0.5">
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50/90 border border-slate-200/80 px-3.5 py-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11px] font-medium text-slate-500 block leading-tight">
                          Global Community
                        </span>
                        <span className="text-sm sm:text-base font-bold text-slate-900 font-heading block truncate mt-0.5">
                          {university.nepaliStudentCount.toLocaleString()}+ Students
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-3 shadow-xs">
                      <div>
                        <span className="text-[11px] font-medium text-emerald-100 block leading-tight">
                          Starting Tuition
                        </span>
                        <span className="text-sm sm:text-base font-bold font-heading block mt-0.5">
                          {formatMoney(
                            allProgrammes[0]?.annualFeeINR || 140000
                          )}
                          <span className="text-xs font-normal text-emerald-100">
                            /yr
                          </span>
                        </span>
                      </div>
                      <Sparkles className="w-4 h-4 text-emerald-200 shrink-0 hidden sm:block" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── INTEGRATED 5-PILLAR EXECUTIVE METRICS & QUICK-JUMP DOCK ── */}
            <div className="mt-8 pt-7 border-t border-slate-200/80">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4">
                <div className="rounded-2xl bg-slate-50/80 border border-slate-200/70 p-4">
                  <span className="text-xs font-medium text-slate-500 block">
                    Established Year
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-0.5 block">
                    {university.establishedYear}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    {Math.max(1, 2026 - university.establishedYear)}+ Years Legacy
                  </span>
                </div>

                <div className="rounded-2xl bg-slate-50/80 border border-slate-200/70 p-4">
                  <span className="text-xs font-medium text-slate-500 block">
                    Campus Area
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-0.5 block">
                    {university.campusSize}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Residential Campus
                  </span>
                </div>

                <div className="rounded-2xl bg-emerald-50/60 border border-emerald-200/80 p-4">
                  <span className="text-xs font-medium text-emerald-800 block">
                    Accreditation
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-emerald-700 font-heading mt-0.5 block">
                    {university.naacGrade.includes("UGC")
                      ? "UGC Approved"
                      : `NAAC ${university.naacGrade}`}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-medium">
                    Globally Valid Degrees
                  </span>
                </div>

                <div className="rounded-2xl bg-slate-50/80 border border-slate-200/70 p-4">
                  <span className="text-xs font-medium text-slate-500 block">
                    Global Cohort
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-0.5 block">
                    {university.nepaliStudentCount.toLocaleString()}+
                  </span>
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    Active Intl. Students
                  </span>
                </div>

                <div className="col-span-2 md:col-span-1 rounded-2xl bg-slate-50/80 border border-slate-200/70 p-4">
                  <span className="text-xs font-medium text-slate-500 block">
                    Hostel &amp; Dining
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-0.5 block">
                    {formatMoney(university.hostelFeePerYearINR)}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Per Year (With Meals)
                  </span>
                </div>
              </div>

              {/* Section Quick-Jump Bar */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    {
                      href: "#programmes",
                      label: "Academic Programmes",
                      icon: BookOpen,
                    },
                    {
                      href: "#scholarship-calculator",
                      label: "Fee & Scholarship Calculator",
                      icon: Calculator,
                    },
                    {
                      href: "#why-choose",
                      label: "Campus Highlights",
                      icon: Sparkles,
                    },
                    {
                      href: "#infrastructure",
                      label: "Hostel & Facilities",
                      icon: Building2,
                    },
                    {
                      href: "#recognition",
                      label: "Official Recognition",
                      icon: ShieldCheck,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50/70 text-slate-600 hover:text-emerald-800 border border-slate-200/80 hover:border-emerald-300 text-xs font-semibold transition-all duration-200"
                      >
                        <Icon className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </div>

                <span className="text-xs text-slate-500 hidden lg:inline">
                  Displaying fees in{" "}
                  <strong className="text-emerald-700 font-semibold">
                    {currency}
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. MAIN CONTENT + CLEAN ADMISSIONS CONCIERGE SIDEBAR
         ══════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 8 COLUMNS */}
          <div className="lg:col-span-8 space-y-8">
            {/* ── SECTION A: ACADEMIC PROGRAMMES & FEE EXPLORER ── */}
            <section
              id="programmes"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full mb-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    Academic Programmes
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Degrees &amp; Annual Tuition Fees
                  </h2>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Select a stream below to view programme duration, eligibility, and annual fees in{" "}
                    <strong className="text-slate-800">{currency}</strong>.
                  </p>
                </div>

                {/* Currency Switcher */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
                  {(["INR", "USD", "NPR"] as CurrencyCode[]).map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setCurrency(code)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        currency === code
                          ? "bg-white text-emerald-700 shadow-2xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {code === "INR" ? "₹ INR" : code === "USD" ? "$ USD" : "NPR"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stream Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {streamCategories.map((stream) => {
                  const active = selectedStream === stream;
                  return (
                    <button
                      key={stream}
                      type="button"
                      onClick={() => setSelectedStream(stream)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                        active
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                          : "bg-slate-50 text-slate-600 border-slate-200/80 hover:border-emerald-300 hover:text-slate-900"
                      }`}
                    >
                      {stream}
                    </button>
                  );
                })}
              </div>

              {/* Programme Cards List */}
              <div className="grid grid-cols-1 gap-4">
                {filteredProgrammes.map((prog) => (
                  <div
                    key={prog.id}
                    className="group rounded-2xl border border-slate-200/90 hover:border-emerald-300 bg-white hover:bg-emerald-50/20 p-5 sm:p-6 transition-all duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                      <div className="space-y-2 max-w-xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold">
                            {prog.degree}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {prog.duration}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-200/70 text-xs font-medium">
                            {prog.scholarshipNote}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-heading">
                          {prog.courseLink ? (
                            <Link href={prog.courseLink}>{prog.title}</Link>
                          ) : (
                            prog.title
                          )}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <span className="font-semibold text-slate-700">
                            Eligibility:
                          </span>{" "}
                          {prog.eligibility}
                        </p>

                        {/* Career Pills */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <span className="text-xs text-slate-500 mr-1">
                            Career Paths:
                          </span>
                          {prog.careers.map((career, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                            >
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Tuition & Apply CTA */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-100 shrink-0">
                        <div className="sm:text-right">
                          <span className="text-xs text-slate-500 block">
                            Annual Tuition Fee
                          </span>
                          <div className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                            {formatMoney(prog.annualFeeINR)}
                            <span className="text-xs font-normal text-slate-500">
                              {" "}
                              / year
                            </span>
                          </div>
                          <span className="text-xs font-medium text-emerald-700 block mt-0.5">
                            With 30% Scholarship:{" "}
                            {formatMoney(Math.round(prog.annualFeeINR * 0.7))}/yr
                          </span>
                        </div>

                        <Link
                          href={
                            prog.courseLink
                              ? `/register?courseId=${prog.id}&universityId=${university.id}`
                              : `/register?universityId=${university.id}`
                          }
                        >
                          <Button
                            size="sm"
                            className="h-9 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs gap-1.5 transition-colors cursor-pointer"
                          >
                            <span>Apply Now</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION B: CLEAN, LIGHT SCHOLARSHIP & COST ESTIMATOR ── */}
            <section
              id="scholarship-calculator"
              className="scroll-mt-24 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30 p-6 sm:p-8 shadow-xs space-y-6"
            >
              <div className="border-b border-slate-200/70 pb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full mb-2">
                  <Calculator className="w-3.5 h-3.5" />
                  Interactive Fee &amp; Scholarship Calculator
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  Estimate Your Annual Fee &amp; Scholarship
                </h2>
                <p className="text-sm text-slate-600 mt-0.5">
                  Choose your preferred programme and high school score to see your estimated annual tuition and hostel fee.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left Controls (7 cols) */}
                <div className="md:col-span-7 space-y-5">
                  {/* Step 1: Select Programme */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      1. Select Academic Programme
                    </label>
                    <select
                      value={calcProgrammeIdx}
                      onChange={(e) =>
                        setCalcProgrammeIdx(Number(e.target.value))
                      }
                      className="w-full h-11 px-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-600"
                    >
                      {allProgrammes.map((p, idx) => (
                        <option key={p.id} value={idx}>
                          {p.degree} — {p.title} ({formatMoney(p.annualFeeINR)}/yr)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Step 2: Select Academic Score Bracket */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      2. Your High School GPA or Percentage
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SCHOLARSHIP_TIERS.map((tier) => {
                        const active = selectedScholarshipId === tier.id;
                        return (
                          <button
                            key={tier.id}
                            type="button"
                            onClick={() => setSelectedScholarshipId(tier.id)}
                            className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                              active
                                ? "bg-emerald-50/90 border-emerald-600 text-slate-900 shadow-2xs"
                                : "bg-white border-slate-200/90 text-slate-700 hover:border-emerald-300"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-bold text-slate-900">
                                {tier.label}
                              </span>
                              <span
                                className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                                  tier.discountPercent > 0
                                    ? "bg-emerald-600 text-white"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                              >
                                {tier.discountPercent > 0
                                  ? `${tier.discountPercent}% Off`
                                  : "Base Fee"}
                              </span>
                            </div>
                            <span className="text-xs text-slate-500 block mt-0.5">
                              {tier.sublabel}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Hostel Preference */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      3. Campus Hostel &amp; Dining Plan
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setHostelType("ac")}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          hostelType === "ac"
                            ? "bg-emerald-50/90 border-emerald-600 text-slate-900 shadow-2xs"
                            : "bg-white border-slate-200/90 text-slate-700 hover:border-emerald-300"
                        }`}
                      >
                        <span className="text-xs font-bold text-slate-900 block">
                          AC International Hostel
                        </span>
                        <span className="text-xs text-emerald-700 font-medium">
                          {formatMoney(university.hostelFeePerYearINR)} / year (With Meals)
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setHostelType("standard")}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          hostelType === "standard"
                            ? "bg-emerald-50/90 border-emerald-600 text-slate-900 shadow-2xs"
                            : "bg-white border-slate-200/90 text-slate-700 hover:border-emerald-300"
                        }`}
                      >
                        <span className="text-xs font-bold text-slate-900 block">
                          Standard Non-AC Hostel
                        </span>
                        <span className="text-xs text-emerald-700 font-medium">
                          {formatMoney(
                            Math.round(university.hostelFeePerYearINR * 0.78)
                          )}{" "}
                          / year (With Meals)
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Output Breakdown Card (5 cols) */}
                <div className="md:col-span-5 bg-white text-slate-800 rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-xs font-medium text-emerald-700 block">
                        Estimated Breakdown
                      </span>
                      <h3 className="text-base font-bold text-slate-900 font-heading">
                        {activeProgramme?.degree} Annual Cost
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-xs">
                      {activeScholarship.discountPercent}% Waiver
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Standard Annual Tuition:</span>
                      <span className="font-semibold text-slate-900">
                        {formatMoney(grossTuitionINR)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-emerald-700 font-semibold bg-emerald-50/80 px-3 py-2 rounded-xl border border-emerald-200/60 text-xs">
                      <span>
                        Merit Scholarship ({activeScholarship.discountPercent}%):
                      </span>
                      <span>- {formatMoney(scholarshipSavingsINR)}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-800 font-semibold pt-1">
                      <span>Net Annual Tuition:</span>
                      <span>{formatMoney(netTuitionINR)}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600 border-b border-slate-100 pb-3">
                      <span>Hostel &amp; Dining Plan:</span>
                      <span className="font-semibold text-slate-900">
                        {formatMoney(activeHostelINR)}
                      </span>
                    </div>

                    <div className="pt-1 flex items-baseline justify-between">
                      <div>
                        <span className="text-sm font-bold text-slate-900 block">
                          Total Annual Cost
                        </span>
                        <span className="text-xs text-slate-500">
                          Tuition + Hostel + Meals
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-emerald-700 font-heading">
                          {formatMoney(totalAnnualEstimatedINR)}
                        </span>
                        <span className="text-xs text-slate-500 block">
                          per year
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/register?universityId=${university.id}`}
                    className="block pt-2"
                  >
                    <Button className="w-full h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm gap-1.5 shadow-xs cursor-pointer">
                      <span>Apply with This Scholarship</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION C: WHY GLOBAL STUDENTS CHOOSE THIS CAMPUS ── */}
            <section
              id="why-choose"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Highlights
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  Why International Students Choose {university.name}
                </h2>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  {university.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {university.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-300 transition-all"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-800 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION D: CAMPUS INFRASTRUCTURE & STUDENT SUPPORT ── */}
            <section
              id="infrastructure"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full mb-2">
                  <Building2 className="w-3.5 h-3.5" />
                  Campus Facilities
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  Campus Infrastructure &amp; Student Life
                </h2>
                <p className="text-sm text-slate-600 mt-0.5">
                  Modern academic laboratories, comfortable on-campus hostels, and dedicated support for international students.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {university.facilities.map((facility, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-300 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                      {i % 4 === 0 ? (
                        <Wifi className="w-4 h-4" />
                      ) : i % 4 === 1 ? (
                        <Layers className="w-4 h-4" />
                      ) : i % 4 === 2 ? (
                        <HeartPulse className="w-4 h-4" />
                      ) : (
                        <Building2 className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-800 block">
                        {facility}
                      </span>
                      <span className="text-xs text-slate-500">
                        On-Campus Facility
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* International Student Support Strip */}
              <div className="rounded-xl bg-emerald-50/60 border border-emerald-200/80 p-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold text-slate-900 block">
                      International Student Desk
                    </span>
                    <span className="text-xs text-slate-600 leading-relaxed">
                      Dedicated FRRO registration, visa assistance, and student welfare support.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Plane className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold text-slate-900 block">
                      Airport Pickup Support
                    </span>
                    <span className="text-xs text-slate-600 leading-relaxed">
                      Coordinated arrival assistance from the nearest international airport.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold text-slate-900 block">
                      24×7 Campus Security
                    </span>
                    <span className="text-xs text-slate-600 leading-relaxed">
                      Secure residential hostels, CCTV coverage, and on-campus medical care.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION E: OFFICIAL RECOGNITION & ACCREDITATION ── */}
            <section
              id="recognition"
              className="scroll-mt-24 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Official Recognition &amp; Accreditation
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  Recognised &amp; Quality-Assessed Institution
                </h2>
                <p className="text-sm text-slate-600 mt-0.5">
                  University Recognition, Institutional Accreditation &amp; Regulatory Approvals as Applicable.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    UGC Recognised University
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Degrees awarded by {university.name} are recognised by the University Grants Commission (UGC), as applicable under the UGC Act, 1956.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    International Academic Recognition
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    AICTE Approved Programmes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Applicable Technical &amp; Professional Programmes follow All India Council for Technical Education (AICTE) approval norms.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Industry-Relevant Curriculum
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {university.naacGrade.includes("UGC")
                      ? "Quality-Assessed Campus"
                      : `NAAC ${university.naacGrade} Accredited`}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Assessed under national accreditation frameworks recognising institutional quality and academic excellence.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Quality Academic Environment
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT 4 COLUMNS: CLEAN, LIGHT STICKY ADMISSIONS SIDEBAR */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            {/* Card 1: International Admissions Desk */}
            <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden">
              <div className="bg-emerald-50/70 border-b border-emerald-100 p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-white border border-emerald-200/80 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Official Admissions Desk
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    2027–28 Intake
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading pt-1">
                  International Admissions Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct guidance for eligibility verification, provisional offer letters, scholarship applications, and Student e-Visa support.
                </p>
              </div>

              <div className="p-6 space-y-5">
                {/* 4-Step Fast-Track Roadmap */}
                <div className="space-y-2.5">
                  <span className="text-xs font-semibold text-slate-700 block">
                    Simple 4-Step Admission Process
                  </span>
                  {[
                    {
                      step: "1",
                      title: "Submit Online Application",
                      time: "5 Mins",
                    },
                    {
                      step: "2",
                      title: "Document & Scholarship Review",
                      time: "24–48 Hrs",
                    },
                    {
                      step: "3",
                      title: "Receive Offer Letter",
                      time: "7–10 Days",
                    },
                    {
                      step: "4",
                      title: "Visa & Campus Onboarding",
                      time: "Full Support",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/60"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-semibold text-[11px] flex items-center justify-center shrink-0">
                          {item.step}
                        </span>
                        <span className="font-medium text-slate-800">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-xs text-emerald-700 font-medium">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Direct Contact Details */}
                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs sm:text-sm">
                  <span className="text-xs font-semibold text-slate-700 block">
                    Direct Contact Information
                  </span>
                  <div className="flex items-center gap-2.5 text-slate-600">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="truncate">{university.contactEmail}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-600">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>{university.contactPhone}</span>
                  </div>
                </div>

                {/* Primary & Secondary CTAs */}
                <div className="space-y-2.5 pt-2">
                  <Link
                    href={`/register?universityId=${university.id}`}
                    className="block"
                  >
                    <Button className="w-full h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm gap-2 shadow-xs cursor-pointer">
                      <span>Start Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="block">
                    <Button
                      variant="outline"
                      className="w-full h-10 rounded-xl border-slate-300 hover:border-emerald-300 text-slate-700 font-semibold text-xs sm:text-sm cursor-pointer"
                    >
                      Speak with a Counselor
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Interactive Document Checklist */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-emerald-700 block">
                    Application Checklist
                  </span>
                  <h4 className="font-bold text-slate-900 text-base font-heading">
                    Documents Needed
                  </h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-xs">
                  {docProgress}% Ready
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-emerald-600 transition-all duration-300"
                  style={{ width: `${docProgress}%` }}
                />
              </div>

              <p className="text-xs text-slate-500">
                Check off the documents you have ready for your application:
              </p>

              <div className="space-y-2">
                {DOCUMENT_CHECKLIST.map((doc) => {
                  const checked = checkedDocs.includes(doc.id);
                  return (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => toggleDoc(doc.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                        checked
                          ? "bg-emerald-50/50 border-emerald-300 text-slate-900"
                          : "bg-slate-50/60 border-slate-200/80 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {checked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="text-xs sm:text-sm font-semibold block text-slate-800">
                          {doc.title}
                        </span>
                        <span className="text-xs text-slate-500">
                          {doc.subtitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {docProgress === 100 && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between">
                  <span>Your documents are ready to apply!</span>
                  <Link
                    href={`/register?universityId=${university.id}`}
                    className="underline font-bold text-emerald-700"
                  >
                    Apply Now →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            3. SIMILAR ACCREDITED UNIVERSITIES SECTION
           ══════════════════════════════════════════════════════════════════ */}
        {similarUniversities.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200/80 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full mb-2">
                  <Compass className="w-3.5 h-3.5" />
                  Similar Universities
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  Explore Other Accredited Universities
                </h2>
              </div>
              <Link
                href="/universities"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                <span>View All Universities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarUniversities.map((sim) => (
                <Link
                  key={sim.id}
                  href={`/universities/${sim.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-300 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={sim.image}
                        alt={sim.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md bg-white/95 text-emerald-800 font-semibold text-xs shadow-2xs">
                          {sim.naacGrade.includes("UGC")
                            ? sim.naacGrade
                            : `NAAC ${sim.naacGrade}`}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-xs text-slate-100 font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                          {sim.city}, {sim.state}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-heading">
                        {sim.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {sim.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">
                      <Users className="w-3.5 h-3.5 inline mr-1 text-emerald-600" />
                      {sim.nepaliStudentCount}+ Global Students
                    </span>
                    <span className="font-semibold text-emerald-700 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                      View Campus <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
