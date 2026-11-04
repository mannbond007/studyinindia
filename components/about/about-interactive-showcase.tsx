"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  MapPin,
  PhoneCall,
  Clock,
  Globe2,
  Scale,
  Check,
  X,
  ChevronRight,
  Landmark,
  FileCheck,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Ultra-Realistic 3D Custom SVGs for Core Ethics Pillars ─── */
function FeeTransparencyGem3D() {
  return (
    <div className="relative shrink-0 group/icon">
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-emerald-500/35 via-teal-400/20 to-amber-400/20 blur-lg opacity-75 group-hover/icon:opacity-100 transition-all duration-500 pointer-events-none" />
      <div className="relative w-15 h-15 rounded-2xl bg-gradient-to-b from-emerald-300 via-emerald-600 to-teal-950 p-[1.5px] shadow-[0_14px_28px_-6px_rgba(16,185,129,0.45),0_4px_10px_rgba(6,78,59,0.25)]">
        <div className="relative w-full h-full rounded-[14.5px] bg-gradient-to-b from-[#065f46] via-[#047857] to-[#022c22] flex items-center justify-center overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.45),inset_0_-4px_6px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none rounded-t-[14px]" />
          <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]">
            <defs>
              <linearGradient id="abShieldRim" x1="8" y1="5" x2="36" y2="39" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="35%" stopColor="#FDE047" />
                <stop offset="70%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
              <linearGradient id="abCrystalL" x1="11" y1="8" x2="22" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#A7F3D0" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <linearGradient id="abCrystalR" x1="22" y1="8" x2="33" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#064E3B" />
              </linearGradient>
            </defs>
            <path d="M22 4.5L36 9.8V21.2C36 30.4 30 37 22 40C14 37 8 30.4 8 21.2V9.8L22 4.5Z" fill="url(#abShieldRim)" />
            <path d="M22 6.8L33.8 11.2V21C33.8 28.9 28.7 34.7 22 37.3C15.3 34.7 10.2 28.9 10.2 21V11.2L22 6.8Z" fill="#022C22" />
            <path d="M22 8L11.4 12V20.8C11.4 28.1 16 33.4 22 35.8V8Z" fill="url(#abCrystalL)" />
            <path d="M22 8L32.6 12V20.8C32.6 28.1 28 33.4 22 35.8V8Z" fill="url(#abCrystalR)" />
            <path d="M22 8L11.4 12V14.2L22 10.2L32.6 14.2V12L22 8Z" fill="#FFFFFF" fillOpacity="0.45" />
            <circle cx="22" cy="21.5" r="6" fill="url(#abShieldRim)" stroke="#FFFFFF" strokeWidth="0.8" />
            <path d="M19.2 21.5L21.1 23.4L25.2 19.3" stroke="#022C22" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function UniversityColonnade3D() {
  return (
    <div className="relative shrink-0 group/icon">
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-teal-500/35 via-emerald-400/20 to-cyan-400/20 blur-lg opacity-75 group-hover/icon:opacity-100 transition-all duration-500 pointer-events-none" />
      <div className="relative w-15 h-15 rounded-2xl bg-gradient-to-b from-teal-300 via-teal-600 to-slate-900 p-[1.5px] shadow-[0_14px_28px_-6px_rgba(13,148,136,0.45),0_4px_10px_rgba(15,118,110,0.25)]">
        <div className="relative w-full h-full rounded-[14.5px] bg-gradient-to-b from-[#0f766e] via-[#115e59] to-[#042f2e] flex items-center justify-center overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.45),inset_0_-4px_6px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none rounded-t-[14px]" />
          <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]">
            <defs>
              <linearGradient id="abRoofGold" x1="22" y1="6" x2="22" y2="16" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="45%" stopColor="#FDE047" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="abPillarMarble" x1="10" y1="16" x2="34" y2="33" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="65%" stopColor="#CCFBF1" />
                <stop offset="100%" stopColor="#5EEAD4" />
              </linearGradient>
            </defs>
            <path d="M22 6L37 14H7L22 6Z" fill="url(#abRoofGold)" />
            <rect x="8" y="14" width="28" height="2.4" rx="1" fill="#B45309" />
            <rect x="10.5" y="17.5" width="3.6" height="14" rx="1" fill="url(#abPillarMarble)" />
            <rect x="17" y="17.5" width="3.6" height="14" rx="1" fill="url(#abPillarMarble)" />
            <rect x="23.4" y="17.5" width="3.6" height="14" rx="1" fill="url(#abPillarMarble)" />
            <rect x="29.9" y="17.5" width="3.6" height="14" rx="1" fill="url(#abPillarMarble)" />
            <rect x="8" y="32" width="28" height="2.4" rx="1" fill="#99F6E4" />
            <rect x="6" y="34.5" width="32" height="3" rx="1.2" fill="url(#abRoofGold)" />
            <circle cx="22" cy="10.8" r="1.6" fill="#042F2E" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function EquivalencyRosette3D() {
  return (
    <div className="relative shrink-0 group/icon">
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-400/35 via-emerald-400/20 to-teal-400/20 blur-lg opacity-75 group-hover/icon:opacity-100 transition-all duration-500 pointer-events-none" />
      <div className="relative w-15 h-15 rounded-2xl bg-gradient-to-b from-amber-300 via-emerald-600 to-slate-900 p-[1.5px] shadow-[0_14px_28px_-6px_rgba(245,158,11,0.35),0_4px_10px_rgba(6,78,59,0.25)]">
        <div className="relative w-full h-full rounded-[14.5px] bg-gradient-to-b from-[#065f46] via-[#047857] to-[#022c22] flex items-center justify-center overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.45),inset_0_-4px_6px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none rounded-t-[14px]" />
          <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]">
            <defs>
              <linearGradient id="abGoldMedal" x1="10" y1="6" x2="34" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="40%" stopColor="#FDE047" />
                <stop offset="80%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="abRibbon" x1="15" y1="26" x2="29" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#065F46" />
              </linearGradient>
            </defs>
            <path d="M16 25L13 38L18.5 35L21 38.5L19.5 25H16Z" fill="url(#abRibbon)" stroke="#A7F3D0" strokeWidth="0.6" />
            <path d="M28 25L31 38L25.5 35L23 38.5L24.5 25H28Z" fill="url(#abRibbon)" stroke="#A7F3D0" strokeWidth="0.6" />
            <circle cx="22" cy="17.5" r="11" fill="url(#abGoldMedal)" />
            <circle cx="22" cy="17.5" r="8.5" fill="#022C22" />
            <circle cx="22" cy="17.5" r="7.5" fill="url(#abGoldMedal)" />
            <path d="M22 12.8L23.5 15.8L26.8 16.3L24.4 18.6L25 21.9L22 20.3L19 21.9L19.6 18.6L17.2 16.3L20.5 15.8L22 12.8Z" fill="#022C22" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Comparison Matrix Rows ─── */
const comparisonRows = [
  {
    feature: "Tuition & Hostel Fee Schedule",
    traditional: "Inflated packages with hidden agent markups ($500–$2,000 extra per year)",
    studyIndia: "100% Official University Gazette Fee — Zero dollar/rupee markup",
  },
  {
    feature: "Fee Payment Destination",
    traditional: "Cash or personal transfers routed through third-party agency accounts",
    studyIndia: "Direct SWIFT / Flywire / Bank Wire to the Official University Registrar Account",
  },
  {
    feature: "Global & Regional Accreditation",
    traditional: "Often promote unaccredited colleges that fail global licensing exams",
    studyIndia: "Strict 4-tier pre-audit (UGC, AICTE, WHO/WDOMS, ABET, WES & National Councils)",
  },
  {
    feature: "Admission Offer & Visa Letter",
    traditional: "Conditional agent letters with delayed university confirmation",
    studyIndia: "Direct Registrar Provisional Admission Letter + Official Consular Visa Tracking ID",
  },
  {
    feature: "Application & Processing Fee",
    traditional: "$300 to $1,000+ unauthorized consultancy markup",
    studyIndia: "$100 USD for International Students • NPR 1,000 for Nepali Students",
  },
];

/* ─── Global Liaison Hubs Data ─── */
const officeHubs = [
  {
    id: "delhi",
    badge: "Central India Headquarters • Global IRO Liaison",
    city: "New Delhi Global Hub",
    location: "Connaught Place (Inner Circle), Central New Delhi – 110001, India",
    hours: "Mon – Sat: 9:30 AM – 6:30 PM (IST / UTC+5:30)",
    phone: "+91-11-41500000 (24/7 International Student Helpline)",
    flag: "🇮🇳",
    role: "Global Admissions, Embassy Liaison & North India Reception",
    services: [
      "Direct registrar coordination across Delhi-NCR, Punjab, Uttarakhand & North Indian universities",
      "IGI International Airport (DEL) student reception desk & campus shuttle transfers",
      "Paperless e-FRRO registration, Indian bank account (SBI/HDFC), and SIM activation",
      "Embassy attestation, MEA Apostille & High Commission diplomatic support",
    ],
  },
  {
    id: "bengaluru",
    badge: "South & West India Hub • Tech, Medical & Research",
    city: "Bengaluru Innovation Hub",
    location: "5th Block, Koramangala, Bengaluru, Karnataka – 560095, India",
    hours: "Mon – Sat: 9:30 AM – 6:30 PM (IST / UTC+5:30)",
    phone: "+91-80-46600000 (South & West India Desk)",
    flag: "🇮🇳",
    role: "Engineering, IT, Biotechnology & Medical Campus Liaison",
    services: [
      "On-ground support for students in Bengaluru, Vellore (VIT), Manipal (MAHE), Chennai (SRM) & Pune",
      "Global tech internship & Fortune 500 placement readiness workshops for international students",
      "Clinical rotation, WHO/WDOMS & USMLE/PLAB documentation support for medical & nursing students",
      "International hostel inspection, halal/continental/veg dining audits & 24/7 welfare support",
    ],
  },
  {
    id: "regional",
    badge: "International Regional Desks • SAARC, Africa & GCC",
    city: "Kathmandu, Dubai & Nairobi Desks",
    location: "Putalisadak (Kathmandu) • Knowledge Park (Dubai) • Westlands (Nairobi)",
    hours: "Local Business Hours + 24/7 Virtual Video Counseling",
    phone: "Global Toll-Free & WhatsApp International Concierge",
    flag: "🌍",
    role: "Pre-Departure Counseling, Transcript Audit & Parent Briefings",
    services: [
      "High school transcript equivalence audit (A-Levels, IB, WAEC, NECO, KCSE, NEB, HSC, Tawjihi)",
      "Fast-track Indian Student e-Visa (S-1), merit scholarship, and bilateral NOC filing guidance",
      "One-on-one parent briefings on SWIFT/Flywire tuition transfers and multi-currency budgeting",
      "Pre-departure orientation connecting incoming students with current international student ambassadors",
    ],
  },
];

export function AboutInteractiveShowcase() {
  const [selectedHub, setSelectedHub] = useState<string>("delhi");
  const activeHub = officeHubs.find((h) => h.id === selectedHub) || officeHubs[0];

  return (
    <div className="space-y-20">
      {/* ════════════════════════════════════════════════════════════════
          HERO — Global Purpose & Ethical Charter Header
         ════════════════════════════════════════════════════════════════ */}
      <section className="relative rounded-[32px] bg-gradient-to-br from-[#071318] via-[#0b1f24] to-[#052e24] text-white p-7 sm:p-12 lg:p-14 border border-emerald-500/20 shadow-[0_30px_80px_-20px_rgba(6,78,59,0.45)] overflow-hidden">
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
          {/* Left 7 Cols: Global Mission Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-300 font-heading">
                Our Purpose & Global Ethical Charter • 50+ Countries
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.08] font-heading text-white">
              Dedicated to{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                Transparent Higher Education
              </span>{" "}
              in India for the World
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              We connect ambitious international students across{" "}
              <span className="text-white font-semibold">
                Africa, the Middle East, Southeast Asia, Central Asia, and SAARC
              </span>{" "}
              with{" "}
              <span className="text-white font-semibold">
                300+ NAAC A++ & NIRF-ranked Indian universities and institutions
              </span>{" "}
              through verifiable eligibility audits, direct registrar applications, and{" "}
              <span className="text-emerald-300 font-semibold">zero hidden agency markups</span>.
            </p>

            {/* Trust Badges Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {[
                "Zero Consultancy Fees",
                "Direct University Gazette Tuition",
                "WHO • ABET • WES • UGC Verified",
                "Global Student Concierge Desks",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-semibold text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right 5 Cols: Audited Global Governance Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 p-6 sm:p-7 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Global Institutional Impact
                  </div>
                  <div className="text-sm font-extrabold text-white mt-0.5">
                    Official International Admissions Gateway
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  ISO Verified
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-[11px] text-slate-400 font-medium">Global Students Placed</div>
                  <div className="text-2xl font-black text-white font-heading mt-0.5">
                    5,000+
                  </div>
                  <div className="text-[10.5px] text-emerald-300 mt-0.5">From 50+ Countries</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-[11px] text-slate-400 font-medium">Partner Universities</div>
                  <div className="text-2xl font-black text-emerald-300 font-heading mt-0.5">
                    300+
                  </div>
                  <div className="text-[10.5px] text-slate-400 mt-0.5">NIRF Top-100 & NAAC A++</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-[11px] text-slate-400 font-medium">Agency Markup Fee</div>
                  <div className="text-2xl font-black text-amber-300 font-heading mt-0.5">
                    $0 / ₹0
                  </div>
                  <div className="text-[10.5px] text-slate-400 mt-0.5">100% Gazette Parity</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="text-[11px] text-slate-400 font-medium">Degree Mobility</div>
                  <div className="text-2xl font-black text-white font-heading mt-0.5">
                    Worldwide
                  </div>
                  <div className="text-[10.5px] text-emerald-300 mt-0.5">WHO • ABET • WES • AIU</div>
                </div>
              </div>

              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <Link href="/universities" className="flex-1">
                  <Button className="w-full h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm cursor-pointer gap-1.5">
                    <span>Explore 300+ Universities &amp; Institutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 1: 3 CORE ETHICAL PILLARS (With Ultra-Premium 3D Jewels)
         ════════════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>Part 01 • Our Three Non-Negotiable Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
              Built on Uncompromising Global Student Trust
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Every policy on our platform is engineered to protect international students and families from opaque middleman agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {/* Pillar 1: 100% Fee Transparency */}
          <div className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/50 p-7 sm:p-8 shadow-[0_8px_30px_rgb(15,23,42,0.04)] hover:shadow-[0_24px_50px_-12px_rgba(16,185,129,0.16)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-3">
                <FeeTransparencyGem3D />
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  Zero Hidden Markup
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-emerald-800 transition-colors">
                  100% Fee Transparency
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every tuition and hostel fee displayed on our platform is identical to the{" "}
                  <span className="font-semibold text-slate-800">
                    university&apos;s official international fee gazette
                  </span>
                  . We never add markups, secret consultancy charges, or commission deductions from student scholarships.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                {[
                  "Multi-currency fee transparency (USD $, INR ₹, EUR €, AED, NPR)",
                  "Tuition wired directly from your family bank to the university",
                  "100% merit scholarship pass-through directly to student invoice",
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>Official Gazette Verified</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 2: Direct University Liaisons */}
          <div className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-teal-500/50 p-7 sm:p-8 shadow-[0_8px_30px_rgb(15,23,42,0.04)] hover:shadow-[0_24px_50px_-12px_rgba(13,148,136,0.16)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-600" />
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-3">
                <UniversityColonnade3D />
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200/80">
                  Direct Registrar Desk
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-teal-800 transition-colors">
                  Direct University Liaisons
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We coordinate directly with the{" "}
                  <span className="font-semibold text-slate-800">
                    International Relations Offices (IRO) and Registrars
                  </span>{" "}
                  at UGC, AICTE, and NAAC A++ accredited universities, giving global applicants real-time digital tracking from application to visa support letter.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                {[
                  "Authorized international admission desk for 300+ campuses",
                  "Fast-track provisional admission offer letters in 7–10 working days",
                  "Direct international hostel & airport pickup reservation",
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
              <span>Zero Sub-Agent Chain</span>
              <Landmark className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 3: Worldwide Degree Recognition */}
          <div className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-amber-500/50 p-7 sm:p-8 shadow-[0_8px_30px_rgb(15,23,42,0.04)] hover:shadow-[0_24px_50px_-12px_rgba(245,158,11,0.16)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-600" />
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-3">
                <EquivalencyRosette3D />
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-900 border border-amber-200/80">
                  Globally Accredited
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-emerald-800 transition-colors">
                  Global Degree Recognition
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our compliance team verifies that every listed program holds statutory global and regional recognition so graduates can pursue{" "}
                  <span className="font-semibold text-slate-800">
                    international licensing, global employment, or Master&apos;s/PhD studies
                  </span>{" "}
                  anywhere in the world.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                {[
                  "Washington Accord & ABET accredited Engineering programs",
                  "WHO / WDOMS & WFME recognized Medical & Nursing colleges",
                  "WES (USA/Canada), UK ENIC, GCC & SAARC council parity",
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
              <span>WHO • ABET • WES • AIU</span>
              <Award className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2: WHY GLOBAL FAMILIES TRUST US (Comparison Matrix)
         ════════════════════════════════════════════════════════════════ */}
      <section className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-sm space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Part 02 • The Global Transparency Benchmark</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
              Traditional Overseas Agents vs. StudyIndia Global Gateway
            </h2>
            <p className="text-sm text-slate-600">
              See why over 5,000+ international students and parents across 50+ countries choose our direct university gateway over commission-driven middlemen.
            </p>
          </div>
          <Link href="/register">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl cursor-pointer gap-2">
              <span>Start Free Direct Application</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200/90">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900 text-white text-xs font-extrabold uppercase tracking-wider p-4">
            <div className="md:col-span-3">Admission Criterion</div>
            <div className="md:col-span-4 text-rose-300 hidden md:block">
              Traditional Unverified Agents
            </div>
            <div className="md:col-span-5 text-emerald-300 hidden md:block">
              StudyIndia Official Global Gateway
            </div>
          </div>

          <div className="divide-y divide-slate-200/80">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 sm:p-5 bg-white hover:bg-slate-50/70 transition-colors items-center"
              >
                <div className="md:col-span-3 font-extrabold text-sm text-slate-900 font-heading">
                  {row.feature}
                </div>
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs text-slate-500 bg-rose-50/50 md:bg-transparent p-3 md:p-0 rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{row.traditional}</span>
                </div>
                <div className="md:col-span-5 flex items-start gap-2.5 text-xs font-semibold text-slate-900 bg-emerald-50/60 p-3 rounded-xl border border-emerald-200/60">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{row.studyIndia}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 3: INTERACTIVE GLOBAL LIAISON & RECEPTION HUBS
         ════════════════════════════════════════════════════════════════ */}
      <section className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-sm space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Part 03 • On-Ground Campus & International Presence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
              Global Advisory Desks & India Reception Hubs
            </h2>
            <p className="text-sm text-slate-600">
              We support international students from their first virtual counseling session at home to airport arrival, hostel check-in, and e-FRRO onboarding across{" "}
              <span className="font-semibold text-slate-900">New Delhi, Bengaluru, and our Regional Desks</span>.
            </p>
          </div>

          {/* Interactive Hub Switcher */}
          <div className="inline-flex flex-wrap items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 gap-1 self-start lg:self-auto">
            {officeHubs.map((hub) => (
              <button
                key={hub.id}
                type="button"
                onClick={() => setSelectedHub(hub.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedHub === hub.id
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{hub.flag}</span>
                <span>{hub.city.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Hub Spotlight + All 3 Office Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white p-7 sm:p-9 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                  <span>{activeHub.flag}</span>
                  <span>{activeHub.badge}</span>
                </span>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  {activeHub.hours}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                  {activeHub.city}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-300 font-semibold mt-1">
                  {activeHub.role}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 space-y-2 text-xs">
                <div className="flex items-start gap-2.5 text-slate-200">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{activeHub.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{activeHub.phone}</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  International Student Services at this Hub:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeHub.services.map((srv, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-2 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Free virtual Zoom/WhatsApp & walk-in counseling available
              </span>
              <Link href="/contact">
                <Button
                  size="sm"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl cursor-pointer gap-1.5"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {officeHubs.map((hub) => {
              const isSelected = hub.id === selectedHub;
              return (
                <div
                  key={hub.id}
                  onClick={() => setSelectedHub(hub.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? "bg-emerald-50/70 border-emerald-500 shadow-sm ring-1 ring-emerald-500/30"
                      : "bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{hub.flag}</span>
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-base font-heading">
                          {hub.city}
                        </h4>
                        <span className="text-[11px] font-semibold text-emerald-700">
                          {hub.role}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 mt-1 transition-transform ${
                        isSelected ? "text-emerald-600 translate-x-0.5" : "text-slate-400"
                      }`}
                    />
                  </div>
                  <p className="text-xs text-slate-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{hub.location}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BOTTOM EXECUTIVE CTA BANNER — Ultra-Premium Editorial Glass
         ════════════════════════════════════════════════════════════════ */}
      <section className="relative rounded-[32px] bg-gradient-to-br from-[#06241b] via-[#083527] to-[#031b14] text-white p-8 sm:p-12 lg:p-14 border border-emerald-500/30 shadow-[0_24px_50px_-12px_rgba(4,47,36,0.6)] overflow-hidden">
        {/* Top Hairline Jewel Shimmer */}
        <div className="absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent pointer-events-none" />
        
        {/* Ambient Glows & Subtle Texture */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left Text Block */}
          <div className="space-y-4 max-w-2xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase tracking-wider font-heading">
                Transparent Admissions • $100 USD (Intl) / NPR 1,000 (Nepal)
              </span>
            </div>

            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white tracking-tight leading-tight">
              Speak with Our International{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
                Admissions Deans
              </span>{" "}
              Today
            </h3>

            {/* Description */}
            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
              Get personalized guidance tailored to your country&apos;s high school curriculum (A-Levels, IB, WAEC, CBSE, NEB, HSC), merit scholarship eligibility, and Student e-Visa process.
            </p>

            {/* Micro Trust Proofs */}
            <div className="pt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-emerald-300/85">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                1-on-1 Personalized Advisory
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Fast-Track Verification
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Zero Obligation
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-slate-950 hover:bg-emerald-50 font-extrabold text-sm h-13 px-8 rounded-2xl shadow-[0_12px_28px_-6px_rgba(255,255,255,0.25)] hover:shadow-[0_16px_36px_-6px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer gap-2 border border-white"
              >
                <span>Talk to an International Advisor</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </Button>
            </Link>

            <Link href="/universities" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white hover:text-white border-white/20 hover:border-emerald-400/40 font-bold text-sm h-13 px-7 rounded-2xl cursor-pointer backdrop-blur-md transition-all duration-200"
              >
                <span>Explore 300+ Campuses</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
