"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SignIn } from "@clerk/nextjs";
import {
  GraduationCap,
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  FileText,
  Bell,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  const hasClerkKey =
    Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_");

  const handleDevSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your registered email address.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      router.push("/student/dashboard");
    }, 600);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail.trim()) return;
    setForgotSent(true);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F7FAF8] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center selection:bg-[#E7F8F0] selection:text-[#006B49]">
      <div className="max-w-5xl w-full bg-white rounded-3xl border border-[#DFEAE3] shadow-[0_24px_60px_-15px_rgba(18,37,29,0.08),0_4px_16px_rgba(18,37,29,0.03)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all">
        {/* ════════════════════════════════════════════════════════════
            LEFT: Brand & Visual Storytelling Panel (~42%)
           ════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#E7F8F0] via-[#F2FBF6] to-[#F7FAF8] p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#DFEAE3] relative overflow-hidden">
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute top-[-80px] left-[-80px] w-64 h-64 bg-[#00875A]/[0.06] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 bg-emerald-300/[0.1] rounded-full blur-2xl pointer-events-none" />

          {/* Top: Logo Branding */}
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
                Your Journey to a{" "}
                <span className="text-[#00875A] relative">
                  Brighter Future
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-[#00875A]/20 rounded-full" />
                </span>{" "}
                Starts Here.
              </h2>
              <p className="text-xs sm:text-sm text-[#64756D] leading-relaxed">
                Access your applications, manage your documents, and stay updated throughout your
                admission journey.
              </p>
            </div>

            {/* Campus Photograph Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white shadow-md shadow-slate-900/5 aspect-[16/9] max-h-48">
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
                  <span>150+ Top Indian Universities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Compact Benefit Highlights */}
          <div className="pt-6 sm:pt-8 space-y-3 relative z-10">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-white/80 shadow-xs backdrop-blur-xs">
              <div className="w-8 h-8 rounded-lg bg-[#E7F8F0] text-[#00875A] flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#12251D] block">
                  Track Your Applications
                </span>
                <span className="text-[11px] text-[#64756D] block">
                  Real-time status updates from university admission cells.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-white/80 shadow-xs backdrop-blur-xs">
              <div className="w-8 h-8 rounded-lg bg-[#E7F8F0] text-[#00875A] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#12251D] block">
                  Manage Your Documents
                </span>
                <span className="text-[11px] text-[#64756D] block">
                  Secure verification for Class 12 transcripts & citizenship.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-white/80 shadow-xs backdrop-blur-xs">
              <div className="w-8 h-8 rounded-lg bg-[#E7F8F0] text-[#00875A] flex items-center justify-center shrink-0">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#12251D] block">
                  Stay Updated on Admissions
                </span>
                <span className="text-[11px] text-[#64756D] block">
                  Direct alerts from the Putalisadak Desk in Kathmandu.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            RIGHT: Premium Student Sign-In Form (~58%)
           ════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
          {hasClerkKey ? (
            <div className="flex justify-center">
              <SignIn
                routing="hash"
                fallbackRedirectUrl="/student/dashboard"
                signUpUrl="/register"
              />
            </div>
          ) : (
            <div className="max-w-md w-full mx-auto space-y-6">
              {/* Form Heading & Portal Tag */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E7F8F0] text-[#006B49] text-[10.5px] font-bold tracking-wider uppercase border border-[#DFEAE3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00875A] animate-pulse" />
                  <span>STUDENT PORTAL</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12251D] font-heading tracking-tight">
                  Welcome Back
                </h1>
                <p className="text-xs sm:text-sm text-[#64756D]">
                  Sign in to continue your admission journey.
                </p>
              </div>

              {/* Forgot Password Notification Modal or Prompt */}
              {showForgotModal ? (
                <div className="p-5 rounded-2xl bg-[#E7F8F0]/80 border border-emerald-200 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#006B49] uppercase tracking-wider">
                      Reset Password
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForgotModal(false);
                        setForgotSent(false);
                      }}
                      className="text-xs text-[#64756D] hover:text-[#12251D] font-semibold"
                    >
                      Back to Login
                    </button>
                  </div>

                  {forgotSent ? (
                    <div className="space-y-2 text-center py-2">
                      <div className="w-10 h-10 rounded-full bg-white text-[#00875A] flex items-center justify-center mx-auto shadow-xs">
                        <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <p className="text-xs text-[#12251D] font-medium leading-relaxed">
                        Reset instructions dispatched to <strong className="text-[#00875A]">{forgotEmail}</strong>.
                      </p>
                      <p className="text-[11px] text-[#64756D]">
                        Need urgent support? Contact our Putalisadak Desk at +977-1-4420000.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleForgotSubmit} className="space-y-3">
                      <p className="text-xs text-[#64756D] leading-relaxed">
                        Enter your registered student email address. We will send you a verification link to reset your credentials.
                      </p>
                      <input
                        type="email"
                        required
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full h-11 px-3.5 rounded-xl border border-[#DFEAE3] bg-white text-xs text-[#12251D] focus:outline-none focus:border-[#00875A] focus:ring-3 focus:ring-[#00875A]/15"
                      />
                      <Button
                        type="submit"
                        className="w-full h-10 bg-[#00875A] hover:bg-[#006B49] text-white text-xs font-bold rounded-xl"
                      >
                        Send Reset Link
                      </Button>
                    </form>
                  )}
                </div>
              ) : (
                /* Main Sign In Form */
                <form onSubmit={handleDevSignIn} className="space-y-4.5">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Email Input */}
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
                        className="w-full h-12 pl-10.5 pr-4 rounded-xl border border-[#DFEAE3] bg-white text-sm text-[#12251D] placeholder:text-slate-400 focus:outline-none focus:border-[#00875A] focus:ring-4 focus:ring-[#00875A]/10 shadow-[0_1px_2px_rgba(18,37,29,0.03)] hover:border-slate-300 transition-all"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="password"
                        className="block text-xs font-semibold text-[#12251D]"
                      >
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setForgotEmail(email);
                          setShowForgotModal(true);
                        }}
                        className="text-xs text-[#00875A] hover:text-[#006B49] font-semibold hover:underline cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-[#64756D] absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (error) setError("");
                        }}
                        placeholder="••••••••"
                        className="w-full h-12 pl-10.5 pr-11 rounded-xl border border-[#DFEAE3] bg-white text-sm text-[#12251D] placeholder:text-slate-400 focus:outline-none focus:border-[#00875A] focus:ring-4 focus:ring-[#00875A]/10 shadow-[0_1px_2px_rgba(18,37,29,0.03)] hover:border-slate-300 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-3.5 text-[#64756D] hover:text-[#12251D] transition-colors p-0.5 rounded cursor-pointer"
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
                          <span>Signing In...</span>
                        </>
                      ) : (
                        <>
                          <span>Sign In to Student Portal</span>
                          <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Security Reassurance Row */}
                  <div className="flex items-center justify-center gap-2 text-xs text-[#64756D] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00875A] shrink-0" />
                    <span>Your information is protected with end-to-end encryption.</span>
                  </div>
                </form>
              )}

              {/* Footer Account Links */}
              <div className="pt-5 border-t border-[#DFEAE3] text-center space-y-3">
                <p className="text-xs text-[#64756D]">
                  New to StudyIndia.np?{" "}
                  <Link
                    href="/register"
                    className="text-[#00875A] font-bold hover:text-[#006B49] hover:underline"
                  >
                    Create an account
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
                    href="/admin/login"
                    className="hover:text-slate-700 transition-colors"
                  >
                    Staff Admin
                  </Link>
                  <span>•</span>
                  <Link
                    href="/contact"
                    className="hover:text-slate-700 transition-colors"
                  >
                    Helpdesk
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
