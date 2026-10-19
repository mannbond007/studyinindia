"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X, ArrowRight, ShieldCheck, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/study-in-india", label: "Study in India" },
  { href: "/universities", label: "Universities" },
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
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-700 text-white font-medium text-[10px]">
              NEPAL → INDIA
            </span>
            <span>Visa-free Higher Education Pathways under 1950 Indo-Nepal Friendship Treaty</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/faq" className="hover:text-white transition-colors">
              Admissions FAQ
            </Link>
            <span className="text-emerald-500">|</span>
            <Link href="/agent/login" className="hover:text-white flex items-center gap-1 transition-colors">
              <UserCheck className="w-3 h-3 text-emerald-400" />
              <span>Partner Agent Portal</span>
            </Link>
            <span className="text-emerald-500">|</span>
            <Link href="/admin/login" className="hover:text-white flex items-center gap-1 transition-colors">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-sm group-hover:bg-emerald-800 transition-colors">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight font-heading">
                  StudyIndia
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  .np
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                Official Admission Gateway for Nepali Students
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50 font-semibold"
                      : "text-slate-600 hover:text-emerald-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline" size="sm" className="font-semibold text-slate-700">
                Student Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="font-semibold gap-1.5">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full justify-center">
                Student Login
              </Button>
            </Link>
            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full justify-center gap-2">
                <span>Start Free Application</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
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
