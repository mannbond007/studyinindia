"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck, UserCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";

const navLinks = [
  { href: "/study-in-india", label: "Study in India" },
  { href: "/universities", label: "Universities and Institutions" },
  { href: "/courses", label: "Courses" },
  { href: "/admission-process", label: "Admission Process" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

function NavbarContent() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If in dashboard, return null or specialized sub-nav
  const isDashboardRoute =
    pathname.startsWith("/student") ||
    pathname.startsWith("/agent") ||
    pathname.startsWith("/admin");

  if (isDashboardRoute) {
    return null; // Dashboards have their own specialized sidebar navigation
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      {/* Top Advisory Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-slate-200 text-xs py-2 px-4 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10.5px] font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Global Admissions 2027–28
            </span>
            <span className="text-slate-300 font-medium text-xs hidden md:inline">
              Official International Admissions Gateway, Direct University Offers &amp; Fast-Track Student e-Visa Guidance
            </span>
            <span className="text-slate-300 font-medium text-xs md:hidden">
              Official International Admissions 2027–28
            </span>
          </div>
          <div className="flex items-center gap-3.5 text-xs font-medium">
            <Link href="/faq" className="text-slate-300 hover:text-white transition-colors">
              Admissions FAQ
            </Link>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <Link href="/agent/login" className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors">
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Partner Portal</span>
            </Link>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
              Help &amp; Support
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 xl:gap-4 h-20">
          {/* Brand Logo */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-[12.5px] xl:text-[13.5px] whitespace-nowrap border transition-all duration-200 ${
                    isActive
                      ? "text-emerald-900 bg-gradient-to-r from-emerald-100/90 via-teal-50/90 to-emerald-50 font-bold border-emerald-300/80 shadow-[0_2px_10px_-2px_rgba(16,185,129,0.16)]"
                      : "text-slate-600 font-medium border-transparent hover:text-emerald-900 hover:bg-gradient-to-r hover:from-emerald-50 hover:via-teal-50/80 hover:to-emerald-50/60 hover:border-emerald-200/80 hover:shadow-[0_2px_10px_-2px_rgba(16,185,129,0.12)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Modern Ultra-Premium CTAs */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Student Sign In Pill */}
            <Link
              href="/login"
              className="group relative inline-flex items-center gap-1.5 xl:gap-2 h-9 xl:h-10 px-3 xl:px-4 rounded-xl text-xs xl:text-[13.5px] font-semibold text-slate-700 bg-white hover:bg-gradient-to-r hover:from-emerald-50/90 hover:via-teal-50/60 hover:to-emerald-50/40 border border-slate-200 hover:border-emerald-300/80 shadow-2xs hover:shadow-[0_2px_10px_-2px_rgba(16,185,129,0.14)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="w-4.5 h-4.5 xl:w-5 xl:h-5 rounded-lg bg-slate-100 group-hover:bg-emerald-100/80 border border-slate-200/60 group-hover:border-emerald-200 flex items-center justify-center text-slate-500 group-hover:text-emerald-700 transition-colors duration-200">
                <User className="w-3 h-3" />
              </span>
              <span className="group-hover:text-emerald-950 transition-colors duration-200">
                <span className="hidden xl:inline">Student </span>Sign In
              </span>
            </Link>

            {/* Apply Now - Signature Emerald CTA */}
            <Link
              href="/register"
              className="relative group inline-flex items-center gap-1.5 xl:gap-2 h-9 xl:h-10 px-3.5 xl:px-4.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-700 hover:via-emerald-600 hover:to-teal-700 text-white font-bold text-xs xl:text-[13.5px] tracking-tight shadow-sm hover:shadow-[0_4px_14px_-2px_rgba(5,150,105,0.4)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <span>Apply Now</span>
              <span className="w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-white stroke-[2.5]" />
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-base transition-all duration-200 ${
                    isActive
                      ? "text-emerald-950 bg-gradient-to-r from-emerald-100/90 to-emerald-50 font-bold border border-emerald-300/80"
                      : "text-slate-700 font-medium hover:text-emerald-950 hover:bg-gradient-to-r hover:from-emerald-50/90 hover:to-teal-50/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative flex items-center justify-center gap-2 h-11 px-4 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200/90 shadow-sm hover:border-emerald-300 hover:text-emerald-950 transition-all duration-200"
            >
              <span className="w-5 h-5 rounded-lg bg-slate-100 group-hover:bg-emerald-100 flex items-center justify-center text-slate-500 group-hover:text-emerald-700 transition-colors">
                <User className="w-3.5 h-3.5" />
              </span>
              <span>Student Sign In</span>
            </Link>

            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="relative group overflow-hidden flex items-center justify-center gap-2 h-11 px-4.5 rounded-xl bg-gradient-to-b from-[#00e599] via-[#00c984] to-[#00a86b] text-slate-950 font-black text-sm tracking-tight shadow-[0_4px_16px_-1px_rgba(0,214,143,0.45),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-200"
            >
              <span className="relative z-10">Start Free Application</span>
              <span className="relative z-10 w-5 h-5 rounded-full bg-slate-950/10 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
              </span>
            </Link>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link href="/agent/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  Agent Login
                </Button>
              </Link>
              <Link href="/admin/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  Admin Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Navbar() {
  return (
    <Suspense fallback={null}>
      <NavbarContent />
    </Suspense>
  );
}
