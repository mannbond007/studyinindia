"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Check,
  ChevronDown,
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
  { value: "B.Tech Other Branches", label: "B.Tech AI & Core" },
  { value: "B.Sc Nursing", label: "B.Sc Nursing" },
  { value: "MBBS / BDS", label: "MBBS / BDS" },
  { value: "B.Pharm", label: "B.Pharm" },
  { value: "BBA", label: "BBA" },
  { value: "MBA / PGDM", label: "MBA / PGDM" },
  { value: "BCA", label: "BCA / IT" },
  { value: "B.Sc Agriculture", label: "B.Sc Agriculture" },
  { value: "Paramedical / BPT", label: "Paramedical / BPT" },
  { value: "Law (BA / BBA LLB)", label: "Law (LLB)" },
  { value: "Other", label: "Other Programs" },
];

const CITIES = [
  "South Asia (Nepal / Bangladesh / Sri Lanka / Bhutan)",
  "Middle East & Gulf (UAE / Saudi Arabia / Oman / Qatar)",
  "Africa (Kenya / Nigeria / Tanzania / Ghana / Zambia)",
  "Southeast & Central Asia (Vietnam / Malaysia / Uzbekistan)",
  "Americas, Europe & Oceania (NRI / Global)",
  "Other International Region",
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cityInNepal: "South Asia (Nepal / Bangladesh / Sri Lanka / Bhutan)",
    courseInterest: "B.Tech Computer Science",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [deskStatus, setDeskStatus] = useState({ isOpen: true, label: "Global Admissions Desk" });

  useEffect(() => {
    setDeskStatus(getGlobalDeskStatus());
  }, []);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Valid email required";
    }
    if (!formData.phone.trim()) errs.phone = "Required";
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

  const inputBaseClasses =
    "w-full h-11 px-3.5 rounded-lg border text-sm text-slate-900 bg-white placeholder:text-slate-400 transition-all duration-150 focus:outline-none focus:ring-3";

  const getInputStateClasses = (hasError?: string) =>
    hasError
      ? "border-red-300 focus:border-red-500 focus:ring-red-500/15"
      : "border-slate-200/90 hover:border-slate-300 focus:border-emerald-600 focus:ring-emerald-600/12";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-12 sm:py-16 lg:py-20 selection:bg-emerald-100 selection:text-emerald-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* ── Refined Page Header ── */}
        <header className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/90 border border-emerald-200/70 text-emerald-800 text-[11px] font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Global Admissions Helpdesk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight font-heading leading-[1.15]">
            Connect With Our <span className="text-emerald-700">Advisors</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Transparent guidance for international admissions, Indian Student e-Visa support, transcript equivalence, and scholarships.
          </p>
        </header>

        {/* ── Two-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ── LEFT COLUMN: Inquiry Form (7 Cols) ── */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.03),0_8px_24px_-4px_rgba(15,23,42,0.04)] p-6 sm:p-8">
              {formSubmitted ? (
                /* ── Submitted Confirmation State ── */
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold font-heading text-slate-900">
                      Inquiry Dispatched!
                    </h3>
                    <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. An advisor from our Global Admissions Desk will connect with you at{" "}
                      <span className="font-semibold text-slate-800">{formData.phone}</span> within 24 hours.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold h-10 px-5 rounded-lg border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                /* ── Interactive Consultation Form ── */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* 1. Compact Program Selector Block */}
                  <div className="rounded-xl bg-slate-50/70 border border-slate-200/80 p-4 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <label className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Select Program of Interest</span>
                      </label>
                      <span className="text-[10.5px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                        UG &amp; PG Admissions
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
                            className={`px-2.5 py-1.5 rounded-lg text-xs transition-all duration-150 cursor-pointer inline-flex items-center gap-1.5 select-none ${
                              isSelected
                                ? "bg-emerald-700 text-white font-semibold shadow-2xs border border-emerald-700"
                                : "bg-white text-slate-600 font-medium border border-slate-200/90 hover:border-emerald-300 hover:text-emerald-800 hover:bg-emerald-50/30"
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[2.5] shrink-0" />}
                            <span>{p.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Compact Selection Status Bar */}
                    <div className="pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>
                          Selected:{" "}
                          <strong className="text-slate-900 font-semibold">
                            {formData.courseInterest}
                          </strong>
                        </span>
                      </span>
                      <span className="text-emerald-700 font-medium hidden sm:inline">
                        Free Eligibility &amp; Seat Check
                      </span>
                    </div>
                  </div>

                  {/* 2. Personal & Contact Inputs */}
                  <div className="space-y-4">
                    {/* Row 1: Full Name & Phone / WhatsApp */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-baseline">
                          <label
                            htmlFor="fullName"
                            className="text-xs font-semibold text-slate-700"
                          >
                            Full Name
                          </label>
                          {errors.fullName && (
                            <span className="text-[11px] font-medium text-red-600">
                              {errors.fullName}
                            </span>
                          )}
                        </div>
                        <input
                          id="fullName"
                          type="text"
                          autoComplete="name"
                          placeholder="e.g. Elena Rostova / Aarav Sharma"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: "" });
                          }}
                          className={`${inputBaseClasses} ${getInputStateClasses(errors.fullName)}`}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between items-baseline">
                          <label
                            htmlFor="phone"
                            className="text-xs font-semibold text-slate-700"
                          >
                            Phone / WhatsApp
                          </label>
                          {errors.phone && (
                            <span className="text-[11px] font-medium text-red-600">
                              {errors.phone}
                            </span>
                          )}
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+1 / +971 / +254 / +977 ..."
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: "" });
                          }}
                          className={`${inputBaseClasses} ${getInputStateClasses(errors.phone)}`}
                        />
                      </div>
                    </div>

                    {/* Row 2: Email Address & Country / Region */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-baseline">
                          <label
                            htmlFor="email"
                            className="text-xs font-semibold text-slate-700"
                          >
                            Email Address
                          </label>
                          {errors.email && (
                            <span className="text-[11px] font-medium text-red-600">
                              {errors.email}
                            </span>
                          )}
                        </div>
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
                          className={`${inputBaseClasses} ${getInputStateClasses(errors.email)}`}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="city"
                          className="text-xs font-semibold text-slate-700 block"
                        >
                          Country / Region
                        </label>
                        <div className="relative">
                          <select
                            id="city"
                            value={formData.cityInNepal}
                            onChange={(e) =>
                              setFormData({ ...formData, cityInNepal: e.target.value })
                            }
                            className={`${inputBaseClasses} ${getInputStateClasses()} appearance-none pr-9 cursor-pointer`}
                          >
                            {CITIES.map((c) => (
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
                        className="text-xs font-semibold text-slate-700 block"
                      >
                        Specific Questions or GPA{" "}
                        <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="e.g. Grade 12 GPA / Percentage, questions about Student e-Visa, scholarships, or hostels..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full p-3.5 rounded-lg border border-slate-200/90 hover:border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-150 focus:outline-none focus:border-emerald-600 focus:ring-3 focus:ring-emerald-600/12 resize-none"
                      />
                    </div>
                  </div>

                  {/* 3. Submit CTA & Reassurance Footer */}
                  <div className="pt-1 space-y-3">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-sm rounded-lg shadow-xs hover:shadow-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Connect With an Advisor</span>
                          <ArrowRight className="w-4 h-4 stroke-[2] transition-transform duration-150 group-hover:translate-x-0.5" />
                        </>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-1.5 text-[11.5px] text-slate-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Transparent Guidance • $100 USD (Intl) / NPR 1,000 (Nepal) • 24h Response</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Advisory Desks & Contact Information (5 Cols) ── */}
          <div className="lg:col-span-5 space-y-5">
            {/* 1. Primary Global & Regional Advisory Desk Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.03),0_8px_24px_-4px_rgba(15,23,42,0.04)] p-6 space-y-5">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                    Global &amp; Regional Advisory Desk
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 font-heading tracking-tight">
                    New Delhi &amp; Kathmandu Hubs
                  </h2>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold shrink-0 ${
                    deskStatus.isOpen
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200/70"
                      : "bg-slate-100 text-slate-600 border border-slate-200/60"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      deskStatus.isOpen ? "bg-emerald-600" : "bg-slate-400"
                    }`}
                  />
                  <span>{deskStatus.isOpen ? "Open Now" : "Closed"}</span>
                </span>
              </div>

              {/* Structured Contact Details List */}
              <div className="space-y-3.5 text-[13px] text-slate-600">
                <a
                  href="https://maps.google.com/?q=Statesman+House+Connaught+Place+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group hover:text-emerald-700 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-emerald-200 group-hover:bg-emerald-50/50 transition-colors">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                  <span className="flex-1 leading-relaxed text-slate-700 group-hover:text-emerald-800">
                    Global HQ: Statesman House, Connaught Place, New Delhi • SAARC Hub: Putalisadak, Kathmandu
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 shrink-0 mt-1 transition-colors" />
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <a
                      href="tel:+911123340000"
                      className="font-medium text-slate-800 hover:text-emerald-700 transition-colors"
                    >
                      +91-11-23340000
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href="https://wa.me/919811000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
                    >
                      +91-9811000000 (WhatsApp)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                  <a
                    href="mailto:admissions@studyindia.global"
                    className="font-medium text-slate-800 hover:text-emerald-700 transition-colors"
                  >
                    admissions@studyindia.global
                  </a>
                </div>

                <div className="flex items-center gap-3 text-slate-500">
                  <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                  <span className="text-xs">Monday – Saturday: 9:00 AM – 7:00 PM (IST / GMT+5:30)</span>
                </div>
              </div>

              {/* Prominent, Balanced WhatsApp Direct CTA */}
              <div className="pt-1">
                <a
                  href="https://wa.me/919811000000?text=Hello%20StudyIndia%20Global%20Counselor%2C%20I%20would%20like%20international%20admission%20guidance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-semibold shadow-2xs transition-all duration-150 group"
                >
                  <MessageCircle className="w-4 h-4 stroke-[2] shrink-0" />
                  <span>Chat on WhatsApp Directly</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-80 transition-transform duration-150 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* 2. Regional & Campus Liaison Centers Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.03),0_8px_24px_-4px_rgba(15,23,42,0.04)] p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Regional &amp; Campus Hubs
                </h3>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded-md border border-emerald-200/60">
                  Worldwide Support
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-900 text-xs">
                      Bengaluru &amp; Delhi NCR
                    </span>
                  </div>
                  <p className="text-slate-500 text-[11.5px] pl-3">
                    On-Campus Arrival &amp; FRRO
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-900 text-xs">
                      Kathmandu, Dubai &amp; Nairobi
                    </span>
                  </div>
                  <p className="text-slate-500 text-[11.5px] pl-3">
                    Regional Counseling Desks
                  </p>
                </div>
              </div>

              <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-t border-slate-100">
                <a
                  href="tel:+97714420000"
                  className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-emerald-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>SAARC Desk: +977-1-4420000</span>
                </a>
                <a
                  href="mailto:support@studyindia.global"
                  className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-emerald-700 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-700" />
                  <span>support@studyindia.global</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
