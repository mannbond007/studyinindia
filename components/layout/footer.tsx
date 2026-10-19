"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, MapPin, Shield, CheckCircle2 } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-slate-800 text-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base mb-1 font-heading">
                Direct & Authorized
              </h4>
              <p className="text-slate-400 leading-relaxed text-xs">
                Direct liaison with UGC, AICTE & NAAC accredited Indian universities. Zero inflated fees.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base mb-1 font-heading">
                Nepali Student Support
              </h4>
              <p className="text-slate-400 leading-relaxed text-xs">
                Class 10 & 12 NEB/SEE marksheet equivalence, Indian Embassy NOC guidance, and INR hostel planning.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base mb-1 font-heading">
                Scholarship Matching
              </h4>
              <p className="text-slate-400 leading-relaxed text-xs">
                Clear evaluation for COMPEX, Study In India (SII) scheme, and merit waivers up to 100% on tuition.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-white font-heading">
                StudyIndia<span className="text-emerald-400">.np</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering ambitious Nepali students to achieve top-tier undergraduate and postgraduate education across India with transparent admissions, verified eligibility, and zero middlemen exploitation.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Kathmandu Desk: Putalisadak (Opposite Star Mall), Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>India Liaison: Connaught Place, New Delhi & Koramangala, Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase font-heading">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/universities" className="hover:text-emerald-400 transition-colors">
                  Top Universities
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-emerald-400 transition-colors">
                  Popular Degree Courses
                </Link>
              </li>
              <li>
                <Link href="/study-in-india" className="hover:text-emerald-400 transition-colors">
                  Why Study in India?
                </Link>
              </li>
              <li>
                <Link href="/admission-process" className="hover:text-emerald-400 transition-colors">
                  Admission Roadmap
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition-colors">
                  Scholarships & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Popular Programs */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase font-heading">
              Top Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>B.Tech / Computer Science</li>
              <li>MBBS / BDS / Paramedical</li>
              <li>B.Sc Nursing & Pharmacy</li>
              <li>BBA / MBA / Management</li>
              <li>BCA / MCA / AI & Data</li>
              <li>Hospitality & Agriculture</li>
            </ul>
          </div>

          {/* Column 3: Portals & Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase font-heading">
              Portals & Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/login" className="hover:text-emerald-400 transition-colors">
                  Student Sign In
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-emerald-400 transition-colors">
                  Student Registration
                </Link>
              </li>
              <li>
                <Link href="/agent/login" className="hover:text-emerald-400 transition-colors">
                  Educational Agent Portal
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="hover:text-emerald-400 transition-colors">
                  Staff Admin Access
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Support & Helpdesk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-4 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 StudyIndia.np. All rights reserved. Built for Nepali Students.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              NOC & Equivalence Guide
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
