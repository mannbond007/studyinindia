"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Check,
  ChevronDown,
  User,
  Globe,
  FileCheck2,
  Award,
  GraduationCap,
  Plane,
  Building2,
  Headphones,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Real-time Global Desk Status (IST UTC +5:30) ───────────────── */
function getGlobalDeskStatus(): { isOpen: boolean; label: string } {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istDate = new Date(utc + 5.5 * 3600000);

  const day = istDate.getDay(); // 0 = Sun ... 6 = Sat
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  const openTime = 9 * 60 + 0; // 9:00 AM
  const closeTime = 19 * 60 + 0; // 7:00 PM

  const isWorkDay = day >= 1 && day <= 6;
  const isOpen = isWorkDay && timeInMinutes >= openTime && timeInMinutes < closeTime;

  if (isOpen) return { isOpen: true, label: "Open Now • Closes 7:00 PM IST" };
  if (day === 0) return { isOpen: false, label: "Closed Today (Sun) • Opens Mon" };
  if (timeInMinutes < openTime) return { isOpen: false, label: "Opens 9:00 AM IST" };
  return { isOpen: false, label: "Closed • Reopens 9:00 AM IST" };
}

const PROGRAM_PILLS = [
  { value: "B.Tech Computer Science", label: "B.Tech CSE" },
  { value: "B.Tech AI & Core Branches", label: "B.Tech AI & Core" },
  { value: "B.Sc Nursing", label: "B.Sc Nursing" },
  { value: "MBBS / BDS", label: "MBBS / BDS" },
  { value: "B.Pharm / Pharm.D", label: "B.Pharm" },
  { value: "BBA", label: "BBA" },
  { value: "MBA / PGDM", label: "MBA / PGDM" },
  { value: "BCA / MCA", label: "BCA / IT" },
  { value: "B.Sc Agriculture", label: "B.Sc Agriculture" },
  { value: "Paramedical / BPT", label: "Paramedical / BPT" },
  { value: "Law (BA / BBA LLB)", label: "Law (LLB)" },
  { value: "Other Programs", label: "Other Programs" },
];

const REGIONS = [
  "Nepal (Kathmandu / Pokhara / Biratnagar / Chitwan / Butwal)",
  "South Asia (Bangladesh / Sri Lanka / Bhutan / Maldives)",
  "Middle East & Gulf (UAE / Saudi Arabia / Oman / Qatar)",
  "Africa (Kenya / Nigeria / Tanzania / Ghana / Zambia / Zimbabwe)",
  "Southeast & Central Asia (Vietnam / Malaysia / Uzbekistan)",
  "Americas, Europe & NRI Global Applicants",
];

const CORE_ADVISORY_PILLARS = [
  {
    title: "Student Visa & E-Visa Assistance",
    icon: Plane,
  },
  {
    title: "Transcript Evaluation & Equivalence Guidance",
    icon: FileCheck2,
  },
  {
    title: "Scholarship Assistance",
    icon: Award,
  },
  {
    title: "Admission & Documentation Support",
    icon: ShieldCheck,
  },
  {
    title: "University Selection & Application Guidance",
    icon: Building2,
  },
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cityInNepal: REGIONS[0],
    courseInterest: "B.Tech Computer Science",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [deskStatus, setDeskStatus] = useState({ isOpen: true, label: "Open Now" });

  useEffect(() => {
    setDeskStatus(getGlobalDeskStatus());
  }, []);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Valid email address required";
    }
    if (!formData.phone.trim()) errs.phone = "Phone or WhatsApp number required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 500);
  };

  const getInputStateClasses = (hasError?: string) =>
    hasError
      ? "border-red-300 focus:border-red-500 focus:ring-red-500/15"
      : "border-slate-200/90 hover:border-slate-300 focus:border-[#009B70] focus:ring-[#009B70]/12";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] pb-16 sm:pb-24 selection:bg-emerald-100 selection:text-emerald-900">
      {/* ── Architectural Top Hero Banner ── */}
      <div className="relative bg-white border-b border-[#E2E8F0] pt-10 pb-10 sm:pt-14 sm:pb-12 overflow-hidden">
        {/* Subtle Ambient Emerald Highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-36 left-1/2 -translate-x-1/2 w-[780px] h-[260px] rounded-full bg-emerald-500/[0.06] blur-3xl"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-emerald-200/90 text-[#007A59] text-[11px] font-bold tracking-[0.08em] uppercase shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009B70] animate-pulse" />
              <span>GLOBAL ADMISSIONS HELP DESK</span>
            </div>

            {/* Main Heading & Subheading */}
            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111827] tracking-tight font-heading leading-[1.14]">
                Connect With Our <span className="text-[#009B70]">Admission Team</span>
              </h1>
              <p className="text-[#475569] text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
                Get transparent, reliable and personalized guidance for international admissions in India.
              </p>
            </div>
          </div>

          {/* 5 Core Advisory Services — Structured Premium Bento Ribbon */}
          <div className="mt-7 sm:mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
              {CORE_ADVISORY_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-[#F8FAFC] hover:bg-[#ECFDF5]/60 border border-[#E2E8F0] hover:border-emerald-200 transition-colors duration-150"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center shrink-0 text-[#009B70]">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-xs font-semibold text-[#111827] leading-snug">
                      {pillar.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Signature Tagline Strip */}
            <div className="mt-4 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wide shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>We Make Your Journey to Indian Education Easier.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Two-Column Content Area ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* ── LEFT COLUMN: 1-on-1 Consultation Form Card (7 Cols) ── */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-[20px] border border-[#E2E8F0] shadow-[0_1px_3px_rgba(15,23,42,0.03),0_10px_30px_-5px_rgba(15,23,42,0.04)] overflow-hidden flex-1 flex flex-col justify-between">
              {/* Top Card Header Bar */}
              <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-slate-100 bg-gradient-to-b from-slate-50/70 to-white flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#007A59]">
                    <GraduationCap className="w-3.5 h-3.5 text-[#009B70]" />
                    <span>1-on-1 Admission &amp; Scholarship Desk</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#111827] font-heading tracking-tight">
                    Request Personalized Admission Guidance
                  </h2>
                  <p className="text-xs sm:text-[13px] text-[#475569]">
                    Receive verified university fee structures, eligibility assessment, and scholarship details.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-emerald-200/80 text-[#007A59] text-[11px] font-bold shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009B70]" />
                  <span>100% Free Counseling</span>
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                {formSubmitted ? (
                  /* ── Submitted Confirmation State ── */
                  <div className="my-auto py-12 text-center space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] text-[#009B70] border border-emerald-200 flex items-center justify-center mx-auto shadow-2xs">
                      <CheckCircle2 className="w-7 h-7 stroke-[2]" />
                    </div>
                    <div className="space-y-2">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#007A59] bg-[#ECFDF5] px-3 py-1 rounded-full border border-emerald-200/70">
                        Inquiry Registered
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-[#111827]">
                        Our Admission Advisor Will Contact You Shortly
                      </h3>
                      <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-semibold text-[#111827]">{formData.fullName}</span>. Our International Admissions Desk has received your request for{" "}
                        <span className="font-semibold text-[#007A59]">{formData.courseInterest}</span> and will reach out on{" "}
                        <span className="font-semibold text-[#111827]">{formData.phone}</span> within 4 working hours.
                      </p>
                    </div>
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setFormSubmitted(false)}
                        className="text-xs font-semibold h-10 px-5 rounded-xl border-[#E2E8F0] text-slate-700 hover:bg-slate-50 cursor-pointer"
                      >
                        Submit Another Inquiry
                      </Button>
                      <a
                        href="https://wa.me/919811000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-[#009B70] hover:bg-[#007A59] text-white text-xs font-semibold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat Instantly on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  /* ── Interactive Consultation Form ── */
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Step 1: Compact Program Selector Block */}
                    <div className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 sm:p-5 space-y-3.5">
                      <div className="flex items-center justify-between gap-2">
                        <label className="flex items-center gap-2 text-[11px] font-bold text-[#111827] uppercase tracking-wider">
                          <span className="w-5 h-5 rounded-md bg-[#009B70] text-white text-[10px] font-bold flex items-center justify-center">
                            01
                          </span>
                          <span>Select Program of Interest</span>
                        </label>
                        <span className="text-[11px] font-semibold text-[#007A59] bg-[#ECFDF5] px-2.5 py-0.5 rounded-md border border-emerald-200/80">
                          UG &amp; PG Intake Open
                        </span>
                      </div>

                      <div
                        role="radiogroup"
                        aria-label="Select Program of Interest"
                        className="flex flex-wrap gap-1.5"
                      >
                        {PROGRAM_PILLS.map((p) => {
                          const isSelected = formData.courseInterest === p.value;
                          return (
                            <button
                              key={p.value}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              onClick={() => setFormData({ ...formData, courseInterest: p.value })}
                              className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-150 cursor-pointer inline-flex items-center gap-1.5 select-none ${
                                isSelected
                                  ? "bg-[#009B70] text-white font-semibold shadow-2xs border border-[#009B70]"
                                  : "bg-white text-[#475569] font-medium border border-[#E2E8F0] hover:border-emerald-300 hover:text-[#007A59] hover:bg-[#ECFDF5]/40"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 stroke-[2.5] shrink-0" />}
                              <span>{p.label}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Selection Status Footer */}
                      <div className="pt-2.5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-[11.5px] text-[#475569]">
                        <span className="inline-flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#009B70] shrink-0" />
                          <span>
                            Selected Program:{" "}
                            <strong className="text-[#111827] font-semibold">
                              {formData.courseInterest}
                            </strong>
                          </span>
                        </span>
                        <span className="text-[#007A59] font-semibold">
                          Includes Scholarship &amp; Eligibility Check
                        </span>
                      </div>
                    </div>

                    {/* Step 2: Student Details Inputs */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-[#111827] uppercase tracking-wider">
                        <span className="w-5 h-5 rounded-md bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                          02
                        </span>
                        <span>Student Contact Information</span>
                      </div>

                      {/* Row 1: Full Name & Phone / WhatsApp */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-baseline">
                            <label
                              htmlFor="fullName"
                              className="text-xs font-semibold text-[#111827]"
                            >
                              Student Full Name <span className="text-emerald-600">*</span>
                            </label>
                            {errors.fullName && (
                              <span className="text-[11px] font-medium text-red-600">
                                {errors.fullName}
                              </span>
                            )}
                          </div>
                          <div className="relative">
                            <User className="w-4 h-4 text-slate-400 pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                              id="fullName"
                              type="text"
                              autoComplete="name"
                              placeholder="e.g. Aarav Sharma"
                              value={formData.fullName}
                              onChange={(e) => {
                                setFormData({ ...formData, fullName: e.target.value });
                                if (errors.fullName) setErrors({ ...errors, fullName: "" });
                              }}
                              className={`w-full h-11 pl-10 pr-3.5 rounded-xl border text-sm text-[#111827] bg-white placeholder:text-slate-400 transition-all duration-150 focus:outline-none focus:ring-3 ${getInputStateClasses(
                                errors.fullName
                              )}`}
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex justify-between items-baseline">
                            <label
                              htmlFor="phone"
                              className="text-xs font-semibold text-[#111827]"
                            >
                              Phone / WhatsApp Number <span className="text-emerald-600">*</span>
                            </label>
                            {errors.phone && (
                              <span className="text-[11px] font-medium text-red-600">
                                {errors.phone}
                              </span>
                            )}
                          </div>
                          <div className="relative">
                            <Phone className="w-4 h-4 text-slate-400 pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                              id="phone"
                              type="tel"
                              autoComplete="tel"
                              placeholder="e.g. +977 98... / +91 ..."
                              value={formData.phone}
                              onChange={(e) => {
                                setFormData({ ...formData, phone: e.target.value });
                                if (errors.phone) setErrors({ ...errors, phone: "" });
                              }}
                              className={`w-full h-11 pl-10 pr-3.5 rounded-xl border text-sm text-[#111827] bg-white placeholder:text-slate-400 transition-all duration-150 focus:outline-none focus:ring-3 ${getInputStateClasses(
                                errors.phone
                              )}`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Email Address & Country / Region */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-baseline">
                            <label
                              htmlFor="email"
                              className="text-xs font-semibold text-[#111827]"
                            >
                              Email Address <span className="text-emerald-600">*</span>
                            </label>
                            {errors.email && (
                              <span className="text-[11px] font-medium text-red-600">
                                {errors.email}
                              </span>
                            )}
                          </div>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-slate-400 pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                              id="email"
                              type="email"
                              autoComplete="email"
                              placeholder="student@example.com"
                              value={formData.email}
                              onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                if (errors.email) setErrors({ ...errors, email: "" });
                              }}
                              className={`w-full h-11 pl-10 pr-3.5 rounded-xl border text-sm text-[#111827] bg-white placeholder:text-slate-400 transition-all duration-150 focus:outline-none focus:ring-3 ${getInputStateClasses(
                                errors.email
                              )}`}
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="city"
                            className="text-xs font-semibold text-[#111827] block"
                          >
                            Country / Region
                          </label>
                          <div className="relative">
                            <Globe className="w-4 h-4 text-slate-400 pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <select
                              id="city"
                              value={formData.cityInNepal}
                              onChange={(e) =>
                                setFormData({ ...formData, cityInNepal: e.target.value })
                              }
                              className={`w-full h-11 pl-10 pr-9 rounded-xl border text-sm text-[#111827] bg-white transition-all duration-150 focus:outline-none focus:ring-3 appearance-none cursor-pointer truncate ${getInputStateClasses()}`}
                            >
                              {REGIONS.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      </div>

                      {/* Row 3: Optional Message */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="message"
                          className="text-xs font-semibold text-[#111827] block"
                        >
                          Academic Marks / Specific Questions{" "}
                          <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          placeholder="Share your Grade 12 GPA / Percentage, preferred universities, or questions regarding scholarships, Student Visa, MoEST NOC, or hostels..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full p-3.5 rounded-xl border border-slate-200/90 hover:border-slate-300 bg-white text-sm text-[#111827] placeholder:text-slate-400 transition-all duration-150 focus:outline-none focus:border-[#009B70] focus:ring-3 focus:ring-[#009B70]/12 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-1">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-[#009B70] hover:bg-[#007A59] active:bg-emerald-900 text-white font-semibold text-sm rounded-xl shadow-xs hover:shadow-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer group"
                      >
                        {isSubmitting ? (
                          <span>Connecting With Admission Desk...</span>
                        ) : (
                          <>
                            <span>Connect With Our Admission Team</span>
                            <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-150 group-hover:translate-x-0.5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              {/* Card Bottom Assurance Bar */}
              <div className="px-6 py-4 sm:px-8 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs text-[#475569]">
                <div className="inline-flex items-center gap-2 font-semibold text-[#111827]">
                  <ShieldCheck className="w-4 h-4 text-[#009B70] shrink-0" />
                  <span>Direct University Admission Support • Zero Hidden Charges</span>
                </div>
                <span className="text-[11.5px] font-medium text-[#007A59]">
                  Avg. Advisor Response: &lt; 4 Hours
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Executive Help Desk & Support Pillars (5 Cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* 1. Official Direct Student Help Desk Card */}
            <div className="bg-white rounded-[20px] border border-[#E2E8F0] shadow-[0_1px_3px_rgba(15,23,42,0.03),0_10px_30px_-5px_rgba(15,23,42,0.04)] p-6 sm:p-7 space-y-5">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#007A59]">
                    <Headphones className="w-3.5 h-3.5 text-[#009B70]" />
                    <span>Official Admissions Support</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#111827] font-heading tracking-tight">
                    Direct Student Help Desk
                  </h2>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold shrink-0 ${
                    deskStatus.isOpen
                      ? "bg-[#ECFDF5] text-[#007A59] border border-emerald-200/80"
                      : "bg-slate-100 text-slate-600 border border-slate-200/70"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      deskStatus.isOpen ? "bg-[#009B70] animate-pulse" : "bg-slate-400"
                    }`}
                  />
                  <span>{deskStatus.isOpen ? "Open Now" : "Closed"}</span>
                </span>
              </div>

              {/* Interactive Contact Channel Tiles */}
              <div className="space-y-2.5">
                {/* Channel 1: WhatsApp & Voice Helpline */}
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-emerald-200 transition-colors flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] border border-emerald-200/80 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#009B70]" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block">
                      Admissions Helpline &amp; WhatsApp
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px]">
                      <a
                        href="tel:+911123340000"
                        className="font-bold text-[#111827] hover:text-[#009B70] transition-colors"
                      >
                        +91-11-23340000
                      </a>
                      <span className="text-slate-300">•</span>
                      <a
                        href="https://wa.me/919811000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#007A59] hover:text-[#009B70] font-bold inline-flex items-center gap-1 transition-colors"
                      >
                        <span>+91-9811000000 (WhatsApp)</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Channel 2: Document Verification Email */}
                <a
                  href="mailto:admissions@studyindia.global"
                  className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-emerald-200 transition-colors flex items-start gap-3.5 group block"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] border border-emerald-200/80 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#009B70]" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block">
                      Document &amp; Transcript Verification Desk
                    </span>
                    <span className="text-[13px] font-bold text-[#111827] group-hover:text-[#009B70] transition-colors block truncate">
                      admissions@studyindia.global
                    </span>
                    <span className="text-[11.5px] text-[#475569] block">
                      Send Grade 10/12 transcripts for free eligibility &amp; scholarship check
                    </span>
                  </div>
                </a>

                {/* Channel 3: Operating Hours */}
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-slate-600" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block">
                      Counseling &amp; Verification Hours
                    </span>
                    <span className="text-[13px] font-bold text-[#111827] block">
                      Monday – Saturday: 9:00 AM – 7:00 PM (IST)
                    </span>
                    <span className="text-[11.5px] text-[#475569] block">
                      Dedicated support for Nepal, SAARC, Gulf &amp; African applicants
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <a
                href="https://wa.me/919811000000?text=Hello%20StudyIndia%20Admission%20Team%2C%20I%20would%20like%20guidance%20regarding%20university%20admission%2C%20fees%2C%20and%20scholarships."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-[#009B70] hover:bg-[#007A59] text-white text-xs sm:text-sm font-semibold shadow-2xs transition-all duration-150 group"
              >
                <MessageCircle className="w-4 h-4 stroke-[2.2] shrink-0" />
                <span>Chat with Admission Team on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* 2. End-to-End Student Advisory Roadmap Card */}
            <div className="bg-white rounded-[20px] border border-[#E2E8F0] shadow-[0_1px_3px_rgba(15,23,42,0.03),0_10px_30px_-5px_rgba(15,23,42,0.04)] p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div className="flex items-start justify-between gap-3 pb-3.5 border-b border-slate-100">
                <div className="space-y-0.5">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#007A59] block">
                    End-to-End Admission Support
                  </span>
                  <h3 className="font-bold text-[#111827] text-base font-heading tracking-tight">
                    How Our Admission Team Assists You
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-[#007A59] bg-[#ECFDF5] px-2.5 py-1 rounded-full border border-emerald-200/80 shrink-0">
                  Verified Process
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-auto">
                {[
                  {
                    icon: FileCheck2,
                    title: "Transcript Equivalence",
                    desc: "NEB, A-Level & High School verification per AIU & UGC norms.",
                  },
                  {
                    icon: Award,
                    title: "Scholarship Assessment",
                    desc: "Official tuition breakdown & up to 50% merit scholarship calculation.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Offer Letter & NOC",
                    desc: "Fast-track university admission letters & MoEST NOC documentation.",
                  },
                  {
                    icon: Plane,
                    title: "Visa, FRRO & Hostel",
                    desc: "Student e-Visa guidance, airport pickup & on-campus hostel booking.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-[#ECFDF5] border border-emerald-200/80 flex items-center justify-center shrink-0 text-[#009B70]">
                          <Icon className="w-3.5 h-3.5 stroke-[2.2]" />
                        </div>
                        <span className="font-bold text-[#111827] text-xs leading-tight">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[#475569] text-[11.5px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 flex items-center justify-between gap-2 text-[11.5px] text-[#475569] border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#007A59]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#009B70]" />
                  <span>Official University Fee Structures</span>
                </span>
                <span className="font-medium text-slate-600">No Hidden Charges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
