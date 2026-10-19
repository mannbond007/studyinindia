"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { SignUp } from "@clerk/nextjs";
import {
  GraduationCap,
  ArrowRight,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  UserCheck,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCodeParam = searchParams.get("ref") || "";
  const courseIdParam = searchParams.get("courseId") || "";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referralCode, setReferralCode] = useState(refCodeParam);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const hasClerkKey =
    Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_");

  const handleDevRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim()) {
      setError("Please enter your full name as shown on official documents.");
      return;
    }
    if (!email.trim()) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your mobile or WhatsApp contact number.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      // Direct student to course application or onboarding profile completion
      const target = courseIdParam
        ? `/student/apply?courseId=${courseIdParam}`
        : `/student/onboarding`;
      router.push(target);
    }, 600);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F7FAF8] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center selection:bg-[#E7F8F0] selection:text-[#006B49]">
      <div className="max-w-5xl w-full bg-white rounded-3xl border border-[#DFEAE3] shadow-[0_24px_60px_-15px_rgba(18,37,29,0.08),0_4px_16px_rgba(18,37,29,0.03)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all">
        {/* ════════════════════════════════════════════════════════════
            LEFT: Brand & Value Storytelling Panel (~42%)
           ════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#E7F8F0] via-[#F2FBF6] to-[#F7FAF8] p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#DFEAE3] relative overflow-hidden">
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute top-[-80px] left-[-80px] w-64 h-64 bg-[#00875A]/[0.06] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 bg-emerald-300/[0.1] rounded-full blur-2xl pointer-events-none" />

          {/* Top: Brand Header & Narrative */}
          <div className="space-y-6 relative z-10">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="h-10 w-10 rounded-xl bg-[#00875A] flex items-center justify-center text-white shadow-md shadow-[#00875A]/20 group-hover:scale-105 transition-transform">
                <GraduationCap className="h-5 w-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-[#12251D] font-heading tracking-tight">
                  StudyIndia<span className="text-[#00875A]">.np</span>
                </span>
                <span className="block text-[10px] text-[#64756D] font-medium tracking-wide">
                  OFFICIAL ADMISSIONS PORTAL
                </span>
              </div>
            </Link>

            {/* Headline & Narrative */}
            <div className="space-y-2 pt-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12251D] font-heading leading-tight tracking-tight">
                Start Your Admissions with{" "}
                <span className="text-[#00875A] relative">
                  100% Free
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-[#00875A]/20 rounded-full" />
                </span>{" "}
                Guidance.
              </h2>
              <p className="text-xs sm:text-sm text-[#64756D] leading-relaxed">
                Create your verified student profile to unlock direct university applications,
                merit scholarship evaluations, and hassle-free processing.
              </p>
            </div>

            {/* Campus Photograph Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white shadow-md shadow-slate-900/5 aspect-[16/9] max-h-44">
              <Image
                src="/images/hero-students-campus.jpg"
                alt="Students walking on Indian university campus"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12251D]/80 via-transparent to-transparent flex items-end p-3.5">
                <div className="flex items-center gap-1.5 text-white text-[11px] font-semibold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                  <span>₹0 Service Charges for Nepalese Students</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Compact Value Highlights */}
          <div className="pt-6 sm:pt-8 space-y-3 relative z-10">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-white/80 shadow-xs backdrop-blur-xs">
              <div className="w-8 h-8 rounded-lg bg-[#E7F8F0] text-[#00875A] flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#12251D] block">
                  150+ Top Indian Universities
                </span>
                <span className="text-[11px] text-[#64756D] block">
                  UGC, AICTE & NAAC A+ accredited partner campuses.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-white/80 shadow-xs backdrop-blur-xs">
              <div className="w-8 h-8 rounded-lg bg-[#E7F8F0] text-[#00875A] flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#12251D] block">
                  Merit Scholarship Evaluation
                </span>
                <span className="text-[11px] text-[#64756D] block">
                  Qualify for up to 100% tuition waivers based on +2 scores.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-white/80 shadow-xs backdrop-blur-xs">
              <div className="w-8 h-8 rounded-lg bg-[#E7F8F0] text-[#00875A] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#12251D] block">
                  Kathmandu Helpdesk Support
                </span>
                <span className="text-[11px] text-[#64756D] block">
                  Physical office verification & visa guidance in Putalisadak.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            RIGHT: Premium Student Registration Form (~58%)
           ════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
          {hasClerkKey ? (
            <div className="flex justify-center">
              <SignUp
                routing="hash"
                fallbackRedirectUrl="/student/onboarding"
                signInUrl="/login"
              />
            </div>
          ) : (
            <div className="max-w-md w-full mx-auto space-y-6">
              {/* Heading & Tag */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E7F8F0] text-[#006B49] text-[10.5px] font-bold tracking-wider uppercase border border-[#DFEAE3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00875A] animate-pulse" />
                  <span>FREE STUDENT REGISTRATION</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12251D] font-heading tracking-tight">
                  Create Your Student Profile
                </h1>
                <p className="text-xs sm:text-sm text-[#64756D]">
                  Enter your details to register and access university applications.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleDevRegister} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold text-[#12251D]"
                  >
                    Full Name{" "}
                    <span className="text-[11px] font-normal text-[#64756D]">
                      (As on Citizenship / Class 12 Marks)
                    </span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#64756D] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="e.g. Suman Karki"
                      className="w-full h-11 pl-10.5 pr-4 rounded-xl border border-[#DFEAE3] bg-white text-sm text-[#12251D] placeholder:text-slate-400 focus:outline-none focus:border-[#00875A] focus:ring-4 focus:ring-[#00875A]/10 shadow-[0_1px_2px_rgba(18,37,29,0.03)] hover:border-slate-300 transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-[#12251D]"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#64756D] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="student@example.com"
                      className="w-full h-11 pl-10.5 pr-4 rounded-xl border border-[#DFEAE3] bg-white text-sm text-[#12251D] placeholder:text-slate-400 focus:outline-none focus:border-[#00875A] focus:ring-4 focus:ring-[#00875A]/10 shadow-[0_1px_2px_rgba(18,37,29,0.03)] hover:border-slate-300 transition-all"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-[#12251D]"
                  >
                    Phone / WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#64756D] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="+977 98XXXXXXXX"
                      className="w-full h-11 pl-10.5 pr-4 rounded-xl border border-[#DFEAE3] bg-white text-sm text-[#12251D] placeholder:text-slate-400 focus:outline-none focus:border-[#00875A] focus:ring-4 focus:ring-[#00875A]/10 shadow-[0_1px_2px_rgba(18,37,29,0.03)] hover:border-slate-300 transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold text-[#12251D]"
                  >
                    Create Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#64756D] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="Minimum 6 characters"
                      className="w-full h-11 pl-10.5 pr-11 rounded-xl border border-[#DFEAE3] bg-white text-sm text-[#12251D] placeholder:text-slate-400 focus:outline-none focus:border-[#00875A] focus:ring-4 focus:ring-[#00875A]/10 shadow-[0_1px_2px_rgba(18,37,29,0.03)] hover:border-slate-300 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3 text-[#64756D] hover:text-[#12251D] transition-colors p-0.5 rounded cursor-pointer"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Optional Referral Code */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="referralCode"
                    className="block text-xs font-semibold text-[#12251D]"
                  >
                    Agent Referral Code{" "}
                    <span className="text-[11px] font-normal text-[#64756D]">
                      (Optional)
                    </span>
                  </label>
                  <div className="relative">
                    <UserCheck className="w-4 h-4 text-[#64756D] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="referralCode"
                      type="text"
                      placeholder="e.g. AGENT-KTM-01"
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                      className="w-full h-11 pl-10.5 pr-4 rounded-xl border border-[#DFEAE3] bg-white text-sm uppercase text-[#12251D] placeholder:text-slate-400 placeholder:normal-case focus:outline-none focus:border-[#00875A] focus:ring-4 focus:ring-[#00875A]/10 shadow-[0_1px_2px_rgba(18,37,29,0.03)] hover:border-slate-300 transition-all"
                    />
                  </div>
                  <p className="text-[11px] text-[#64756D]">
                    Provided by an authorized StudyIndia partner representative in Nepal.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-[#00875A] hover:bg-[#006B49] text-white font-bold text-sm rounded-xl shadow-md shadow-[#00875A]/20 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Creating Profile...</span>
                      </>
                    ) : (
                      <>
                        <span>Continue to Profile & Education</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                      </>
                    )}
                  </Button>
                </div>

                {/* Trust and Reassurance */}
                <div className="flex items-center justify-center gap-2 text-xs text-[#64756D] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00875A] shrink-0" />
                  <span>100% Free Service • Direct University Affiliation</span>
                </div>
              </form>

              {/* Footer Account Links */}
              <div className="pt-5 border-t border-[#DFEAE3] text-center space-y-3">
                <p className="text-xs text-[#64756D]">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-[#00875A] font-bold hover:text-[#006B49] hover:underline"
                  >
                    Sign In to Your Dashboard
                  </Link>
                </p>

                {/* Secondary Portal Links */}
                <div className="flex items-center justify-center gap-3 text-xs text-slate-400 pt-1">
                  <Link
                    href="/agent/login"
                    className="hover:text-slate-700 transition-colors"
                  >
                    Partner Agent Portal
                  </Link>
                  <span>•</span>
                  <Link
                    href="/contact"
                    className="hover:text-slate-700 transition-colors"
                  >
                    Helpdesk & Support
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-64px)] bg-[#F7FAF8] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#00875A] border-t-transparent animate-spin" />
        </div>
      }
    >
      <RegisterContent />
    </Suspense>
  );
}
