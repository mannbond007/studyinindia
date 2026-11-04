"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";

function FooterContent() {
  const pathname = usePathname();

  // If in dashboard, omit global footer
  const isDashboardRoute =
    pathname.startsWith("/student") ||
    pathname.startsWith("/agent") ||
    pathname.startsWith("/admin");

  if (isDashboardRoute) {
    return null;
  }

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ════════════════════════════════════════════════════════════════
            1. TOP FEATURE GRID — 3D OBSIDIAN-EMERALD GLASS SQUIRCLE ICONS
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-slate-800 text-sm">
          {/* 1. Direct & Authorized — 3D Faceted Emerald Shield */}
          <div className="group flex items-start gap-4">
            <div className="relative shrink-0">
              <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-emerald-400/35 blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative w-[72px] h-[72px] rounded-[18px] bg-gradient-to-br from-[#6ee7b7]/85 via-[#10b981]/30 to-slate-800/80 p-[1.25px] shadow-[0_16px_34px_-8px_rgba(0,0,0,0.7),0_0_24px_-4px_rgba(16,185,129,0.28)] transition-transform duration-300 group-hover:-translate-y-0.5">
                <div className="relative w-full h-full rounded-[16.75px] bg-gradient-to-br from-[#063b2c] via-[#031a15] to-[#020c0e] flex items-center justify-center overflow-hidden shadow-[inset_0_1px_2px_rgba(167,243,208,0.35),inset_0_-6px_12px_rgba(0,0,0,0.8)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(52,211,153,0.38)_0%,rgba(16,185,129,0.1)_42%,transparent_72%)] pointer-events-none" />
                  <div className="absolute inset-x-3 bottom-1 h-2.5 bg-emerald-400/20 blur-md rounded-full pointer-events-none" />

                  <svg
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 relative z-10 drop-shadow-[0_6px_10px_rgba(0,0,0,0.75)]"
                  >
                    <defs>
                      <linearGradient
                        id="ftShieldOuterBevel"
                        x1="11"
                        y1="7"
                        x2="45"
                        y2="49"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#D1FAE5" />
                        <stop offset="35%" stopColor="#34D399" />
                        <stop offset="75%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#064E3B" />
                      </linearGradient>
                      <linearGradient
                        id="ftShieldLeftFacet"
                        x1="14"
                        y1="11"
                        x2="28"
                        y2="45"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#6EE7B7" />
                        <stop offset="50%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#047857" />
                      </linearGradient>
                      <linearGradient
                        id="ftShieldRightFacet"
                        x1="28"
                        y1="11"
                        x2="42"
                        y2="45"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#34D399" />
                        <stop offset="45%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#022C22" />
                      </linearGradient>
                      <linearGradient
                        id="ftShieldCheck"
                        x1="20"
                        y1="22"
                        x2="36"
                        y2="35"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="70%" stopColor="#D1FAE5" />
                        <stop offset="100%" stopColor="#6EE7B7" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M28 6.5L45.5 13V26.8C45.5 38.2 38.1 46.5 28 50C17.9 46.5 10.5 38.2 10.5 26.8V13L28 6.5Z"
                      fill="url(#ftShieldOuterBevel)"
                    />
                    <path
                      d="M28 9.4L42.8 14.9V26.6C42.8 36.4 36.5 43.6 28 46.7C19.5 43.6 13.2 36.4 13.2 26.6V14.9L28 9.4Z"
                      fill="#011F18"
                    />
                    <path
                      d="M28 11.2L15 16.1V26.5C15 35.2 20.5 41.6 28 44.5V11.2Z"
                      fill="url(#ftShieldLeftFacet)"
                    />
                    <path
                      d="M28 11.2L41 16.1V26.5C41 35.2 35.5 41.6 28 44.5V11.2Z"
                      fill="url(#ftShieldRightFacet)"
                    />
                    <path
                      d="M28 11.2L15 16.1V18.2L28 13.3L41 18.2V16.1L28 11.2Z"
                      fill="#ECFDF5"
                      fillOpacity="0.5"
                    />
                    <line
                      x1="28"
                      y1="11.2"
                      x2="28"
                      y2="44.5"
                      stroke="#A7F3D0"
                      strokeOpacity="0.35"
                      strokeWidth="0.9"
                    />
                    <path
                      d="M21.2 29.2L26 34L35.5 23.8"
                      stroke="#011F18"
                      strokeOpacity="0.65"
                      strokeWidth="4.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.2 28L26 32.8L35.5 22.6"
                      stroke="url(#ftShieldCheck)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-0.5">
              <h4 className="font-bold text-white text-base mb-1 font-heading group-hover:text-emerald-400 transition-colors">
                Direct &amp; Authorized Admissions
              </h4>
              <p className="text-slate-400 leading-relaxed text-xs">
                Direct liaison with UGC, AICTE &amp; NAAC accredited Indian universities with zero inflated tuition or hidden agent surcharges.
              </p>
            </div>
          </div>

          {/* 2. Global Student & Visa Support — 3D Emerald Globe */}
          <div className="group flex items-start gap-4">
            <div className="relative shrink-0">
              <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-emerald-400/35 blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative w-[72px] h-[72px] rounded-[18px] bg-gradient-to-br from-[#6ee7b7]/85 via-[#10b981]/30 to-slate-800/80 p-[1.25px] shadow-[0_16px_34px_-8px_rgba(0,0,0,0.7),0_0_24px_-4px_rgba(16,185,129,0.28)] transition-transform duration-300 group-hover:-translate-y-0.5">
                <div className="relative w-full h-full rounded-[16.75px] bg-gradient-to-br from-[#063b2c] via-[#031a15] to-[#020c0e] flex items-center justify-center overflow-hidden shadow-[inset_0_1px_2px_rgba(167,243,208,0.35),inset_0_-6px_12px_rgba(0,0,0,0.8)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(52,211,153,0.38)_0%,rgba(16,185,129,0.1)_42%,transparent_72%)] pointer-events-none" />
                  <div className="absolute inset-x-3 bottom-1 h-2.5 bg-emerald-400/20 blur-md rounded-full pointer-events-none" />

                  <svg
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-13 h-13 relative z-10 drop-shadow-[0_6px_10px_rgba(0,0,0,0.75)]"
                  >
                    <defs>
                      <radialGradient
                        id="ftGlobeSphere"
                        cx="21"
                        cy="19"
                        r="24"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#A7F3D0" />
                        <stop offset="28%" stopColor="#34D399" />
                        <stop offset="62%" stopColor="#059669" />
                        <stop offset="88%" stopColor="#064E3B" />
                        <stop offset="100%" stopColor="#022C22" />
                      </radialGradient>
                      <linearGradient
                        id="ftContinentFill"
                        x1="16"
                        y1="15"
                        x2="38"
                        y2="39"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#D1FAE5" stopOpacity="0.85" />
                        <stop offset="55%" stopColor="#6EE7B7" stopOpacity="0.65" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
                      </linearGradient>
                      <linearGradient
                        id="ftOrbitRing"
                        x1="6"
                        y1="36"
                        x2="50"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#34D399" stopOpacity="0.25" />
                        <stop offset="45%" stopColor="#A7F3D0" stopOpacity="0.95" />
                        <stop offset="75%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
                      </linearGradient>
                      <radialGradient
                        id="ftOrbitFlare"
                        cx="34"
                        cy="31"
                        r="6"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="40%" stopColor="#6EE7B7" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    <path
                      d="M9.5 34.8C7.8 30.2 14.8 23.2 25.5 19.3C36.2 15.4 46.2 16 47.9 20.6"
                      stroke="#34D399"
                      strokeOpacity="0.35"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="28"
                      cy="28"
                      r="15.5"
                      fill="url(#ftGlobeSphere)"
                      stroke="#6EE7B7"
                      strokeOpacity="0.5"
                      strokeWidth="0.8"
                    />

                    <ellipse
                      cx="28"
                      cy="28"
                      rx="8.5"
                      ry="15.5"
                      stroke="#A7F3D0"
                      strokeOpacity="0.22"
                      strokeWidth="0.9"
                    />
                    <path
                      d="M13.5 23H42.5M13.5 33H42.5"
                      stroke="#A7F3D0"
                      strokeOpacity="0.2"
                      strokeWidth="0.9"
                    />

                    <path
                      d="M19 19.5C21.2 17.8 24.5 18.2 26.2 20.2C27.5 21.8 26.2 24.2 24.2 25.5C22.4 26.6 22.8 29.2 21.2 31.2C19.8 32.8 17.5 31.5 16.8 29C16 26.2 16.8 21.2 19 19.5Z"
                      fill="url(#ftContinentFill)"
                    />
                    <path
                      d="M31 17.5C34.2 17.2 37.8 19.5 39.2 22.8C40.2 25.2 38.8 28.5 36.5 30.5C34.5 32.2 33.8 35.5 31.5 36.2C29.8 36.8 28.8 34.2 29.5 31.5C30.2 28.8 28.5 25.8 29.5 22.5C30.2 20.2 29.5 17.8 31 17.5Z"
                      fill="url(#ftContinentFill)"
                    />

                    <path
                      d="M15.5 21C17.8 16.2 22.5 13.2 28 13.2"
                      stroke="#ECFDF5"
                      strokeOpacity="0.65"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M47.9 20.6C49.6 25.2 42.5 32.2 31.8 36.1C21.1 40 11.2 39.4 9.5 34.8"
                      stroke="url(#ftOrbitRing)"
                      strokeWidth="2.1"
                      strokeLinecap="round"
                    />
                    <path
                      d="M49.2 22.8C50.4 26.8 43.2 33.4 32.5 37.3C21.8 41.2 12.2 41 10.6 37"
                      stroke="#6EE7B7"
                      strokeOpacity="0.35"
                      strokeWidth="0.9"
                      strokeLinecap="round"
                    />

                    <circle cx="34" cy="31" r="6" fill="url(#ftOrbitFlare)" />
                    <circle cx="34" cy="31" r="1.8" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-0.5">
              <h4 className="font-bold text-white text-base mb-1 font-heading group-hover:text-emerald-400 transition-colors">
                Global Student &amp; Visa Support
              </h4>
              <p className="text-slate-400 leading-relaxed text-xs">
                Association of Indian Universities (AIU) grade conversion (A-Levels, IB, WAEC, CBSE, NEB), Student Visa (S-1) bonafide letters, and e-FRRO onboarding.
              </p>
            </div>
          </div>

          {/* 3. Scholarship Matching — 3D Emerald Mortarboard */}
          <div className="group flex items-start gap-4">
            <div className="relative shrink-0">
              <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-emerald-400/35 blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative w-[72px] h-[72px] rounded-[18px] bg-gradient-to-br from-[#6ee7b7]/85 via-[#10b981]/30 to-slate-800/80 p-[1.25px] shadow-[0_16px_34px_-8px_rgba(0,0,0,0.7),0_0_24px_-4px_rgba(16,185,129,0.28)] transition-transform duration-300 group-hover:-translate-y-0.5">
                <div className="relative w-full h-full rounded-[16.75px] bg-gradient-to-br from-[#063b2c] via-[#031a15] to-[#020c0e] flex items-center justify-center overflow-hidden shadow-[inset_0_1px_2px_rgba(167,243,208,0.35),inset_0_-6px_12px_rgba(0,0,0,0.8)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(52,211,153,0.38)_0%,rgba(16,185,129,0.1)_42%,transparent_72%)] pointer-events-none" />
                  <div className="absolute inset-x-3 bottom-1 h-2.5 bg-emerald-400/25 blur-md rounded-full pointer-events-none" />

                  <svg
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-13 h-13 relative z-10 drop-shadow-[0_6px_10px_rgba(0,0,0,0.75)]"
                  >
                    <defs>
                      <linearGradient
                        id="ftCapTopDiamond"
                        x1="12"
                        y1="14"
                        x2="44"
                        y2="30"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#6EE7B7" />
                        <stop offset="45%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                      <linearGradient
                        id="ftCapLeftEdge"
                        x1="7"
                        y1="22"
                        x2="28"
                        y2="34"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#A7F3D0" />
                        <stop offset="100%" stopColor="#34D399" />
                      </linearGradient>
                      <linearGradient
                        id="ftCapRightEdge"
                        x1="28"
                        y1="34"
                        x2="49"
                        y2="22"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#064E3B" />
                      </linearGradient>
                      <linearGradient
                        id="ftCapCylinder"
                        x1="16"
                        y1="34"
                        x2="40"
                        y2="34"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#064E3B" />
                        <stop offset="28%" stopColor="#34D399" />
                        <stop offset="55%" stopColor="#10B981" />
                        <stop offset="82%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#022C22" />
                      </linearGradient>
                      <linearGradient
                        id="ftEmeraldTassel"
                        x1="14"
                        y1="22"
                        x2="14"
                        y2="39"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#D1FAE5" />
                        <stop offset="55%" stopColor="#34D399" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M16.5 27.5V36.8C16.5 40.5 21.6 43.2 28 43.2C34.4 43.2 39.5 40.5 39.5 36.8V27.5L28 33L16.5 27.5Z"
                      fill="url(#ftCapCylinder)"
                    />
                    <path
                      d="M16.5 36.2C16.5 39.9 21.6 42.6 28 42.6C34.4 42.6 39.5 39.9 39.5 36.2"
                      stroke="#6EE7B7"
                      strokeOpacity="0.55"
                      strokeWidth="1.1"
                    />

                    <path
                      d="M7.5 22.2L28 31.8V34.4L7.5 24.8V22.2Z"
                      fill="url(#ftCapLeftEdge)"
                    />
                    <path
                      d="M48.5 22.2L28 31.8V34.4L48.5 24.8V22.2Z"
                      fill="url(#ftCapRightEdge)"
                    />

                    <path
                      d="M28 13L48.5 22.2L28 31.8L7.5 22.2L28 13Z"
                      fill="url(#ftCapTopDiamond)"
                      stroke="#A7F3D0"
                      strokeWidth="0.8"
                    />

                    <ellipse
                      cx="28"
                      cy="22.2"
                      rx="2.6"
                      ry="1.5"
                      fill="#6EE7B7"
                      stroke="#064E3B"
                      strokeWidth="0.6"
                    />

                    <path
                      d="M28 22.2L14.2 26.2V34.5"
                      stroke="url(#ftEmeraldTassel)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.4 37.8L14.2 33.2L16 37.8H12.4Z"
                      fill="url(#ftEmeraldTassel)"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-0.5">
              <h4 className="font-bold text-white text-base mb-1 font-heading group-hover:text-emerald-400 transition-colors">
                Merit Scholarship Matching
              </h4>
              <p className="text-slate-400 leading-relaxed text-xs">
                Transparent evaluation for COMPEX, international scholarship schemes, and institutional merit tuition subsidies up to 100%.
              </p>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            2. MAIN FOOTER LINKS & CONTACT HUBS (4 CLEAN COLUMNS)
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Global Desks */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo theme="dark" showSubtitle={false} size="md" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Official Liaison Gateway for Higher Education in India</span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Empowering ambitious international students worldwide to access premier undergraduate and postgraduate programs across India through verified eligibility, transparent fee structures, and direct university matriculation.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Global Liaison HQ:</strong> Connaught Place, New Delhi &amp; Koramangala, Bengaluru
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Regional Outreach Desks:</strong> Dubai (MENA) • Nairobi (East Africa) • Kathmandu (SAARC)
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="tel:+911206565065"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 120-6565065</span>
                </a>
                <a
                  href="mailto:admissions@studyindia.global"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>admissions@studyindia.global</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: Explore & Admissions */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase font-heading">
              Explore &amp; Apply
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/universities"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Top Universities &amp; Institutions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Popular Degree Courses</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/study-in-india"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Why Study in India?</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admission-process"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Admissions Roadmap</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Scholarships &amp; FAQs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>About StudyIndia Global</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Popular Degree Disciplines */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase font-heading">
              Top Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/courses?search=Computer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Computer Science &amp; AI</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?search=Medicine"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>MBBS, BDS &amp; Paramedical</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?search=Engineering"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Engineering &amp; Technology</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?search=Management"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>BBA, MBA &amp; Management</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?search=Pharmacy"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>B.Sc Nursing &amp; Pharmacy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?search=Data"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Data Science &amp; Analytics</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portals & Governance */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase font-heading">
              Portals &amp; Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/login"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Student Sign In</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>New Student Registration</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/agent/login"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Educational Agent Portal</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/login"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Staff Admin Access</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Admissions Helpdesk</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Student Service Agreement</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            3. REGULATORY ACCREDITATION & TRUST STRIP
           ════════════════════════════════════════════════════════════════ */}
        <div className="py-4 px-6 rounded-2xl bg-slate-800/60 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-300 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Accredited Academic &amp; Immigration Standards:</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11.5px]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>UGC Recognized Universities</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>AICTE Approved Programs</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>NAAC &apos;A&apos; Grade Institutions</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>AIU Equivalence Framework</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>MHA e-FRRO Compliant</span>
            </span>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            4. BOTTOM BAR: COPYRIGHT & LEGAL ANCHORS
           ════════════════════════════════════════════════════════════════ */}
        <div className="pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left">
            &copy; 2026 StudyIndia Global. All rights reserved. Registered International Admissions Liaison Platform.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <Link
              href="/privacy"
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <Link
              href="/terms"
              className="hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <Link
              href="/admission-process"
              className="hover:text-emerald-400 transition-colors"
            >
              Admissions Roadmap
            </Link>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <Link
              href="/contact"
              className="hover:text-emerald-400 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <Suspense fallback={null}>
      <FooterContent />
    </Suspense>
  );
}
