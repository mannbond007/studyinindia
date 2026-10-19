"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  MessageCircle,
  Building2,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Real-time Nepal Desk Status (UTC +5:45) ───────────────── */
function getNepalDeskStatus(): { isOpen: boolean; label: string } {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const nptDate = new Date(utc + 5.75 * 3600000);

  const day = nptDate.getDay(); // 0 = Sun ... 5 = Fri, 6 = Sat
  const hours = nptDate.getHours();
  const minutes = nptDate.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  const openTime = 9 * 60 + 30; // 9:30 AM
  const closeTime = 17 * 60 + 30; // 5:30 PM

  const isWorkDay = day >= 0 && day <= 5;
  const isOpen = isWorkDay && timeInMinutes >= openTime && timeInMinutes < closeTime;

  if (isOpen) return { isOpen: true, label: "Open Now • Closes 5:30 PM" };
  if (day === 6) return { isOpen: false, label: "Closed Today (Sat) • Opens Sun" };
  if (timeInMinutes < openTime) return { isOpen: false, label: "Opens 9:30 AM NPT" };
  return { isOpen: false, label: "Closed • Reopens 9:30 AM" };
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
  "Kathmandu Valley",
  "Pokhara",
  "Chitwan / Narayangarh",
  "Butwal / Bhairahawa",
  "Biratnagar",
  "Dharan",
  "Nepalgunj",
  "Other City/District",
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cityInNepal: "Kathmandu Valley",
    courseInterest: "B.Tech Computer Science",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [deskStatus, setDeskStatus] = useState({ isOpen: false, label: "Putalisadak Desk" });

  useEffect(() => {
    setDeskStatus(getNepalDeskStatus());
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

  return (
    <div className="relative min-h-screen bg-[#F4F6F9] text-slate-900 py-12 sm:py-16 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Subtle modern ambient background glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* ── Minimalist Clean Header ── */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Admissions Helpdesk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            Connect With Our <span className="text-emerald-700">Advisors</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed md:whitespace-nowrap">
            Free, transparent guidance for admissions, eligibility checks, and campus visits.
          </p>
        </div>

        {/* ── Main Clean 2-Column Experience ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ── LEFT: Modern Interactive Inquiry Form (7 Cols) ── */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_24px_55px_-12px_rgba(15,23,42,0.15),0_6px_16px_-4px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.08)] p-6 sm:p-8 space-y-6">
              {formSubmitted ? (
                /* Success State */
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold font-heading text-slate-900">
                      Inquiry Dispatched!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. An advisor from our Putalisadak Desk will connect with you at{" "}
                      <span className="font-semibold text-slate-800">{formData.phone}</span> within 24 hours.
                    </p>
                  </div>
                  <div className="pt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs h-10 px-6 rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Highlighted Premium Program Selector Section */}
                  <div className="rounded-2xl bg-gradient-to-b from-[#F2FBF5] via-white to-[#F2FBF5]/90 p-4 sm:p-5 border border-emerald-400/50 shadow-[0_12px_32px_-6px_rgba(5,150,105,0.2),0_4px_12px_-2px_rgba(15,23,42,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] space-y-3.5">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                        <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] shadow-xs">
                          <Sparkles className="w-3 h-3 text-emerald-700" />
                        </span>
                        <span>Select Program of Interest</span>
                      </label>
                      <span className="text-[10.5px] font-semibold text-emerald-800 bg-white px-2.5 py-0.5 rounded-full border border-emerald-200/70 shadow-xs">
                        UG & PG Admissions
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {PROGRAM_PILLS.map((p) => {
                        const isSelected = formData.courseInterest === p.value;
                        return (
                          <button
                            key={p.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, courseInterest: p.value })}
                            className={`px-3.5 py-2 rounded-xl text-xs transition-all duration-200 cursor-pointer flex items-center gap-1.5 font-medium ${
                              isSelected
                                ? "bg-gradient-to-r from-emerald-700 to-emerald-800 text-white font-bold shadow-sm shadow-emerald-700/25 ring-2 ring-emerald-600/30 border-emerald-700 scale-[1.02]"
                                : "bg-white text-slate-700 border border-emerald-300/60 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-emerald-300 hover:text-emerald-800 hover:bg-emerald-50/40"
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                            <span>{p.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Live Selection Feedback Row */}
                    <div className="pt-2 border-t border-emerald-200/60 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>
                          Selected: <strong className="text-emerald-950 font-bold">{formData.courseInterest}</strong>
                        </span>
                      </span>
                      <span className="text-emerald-700 font-semibold hidden sm:inline">
                        Free Eligibility & Seat Check
                      </span>
                    </div>
                  </div>

                  {/* Name & Phone in 2 Cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <label htmlFor="fullName" className="text-xs font-semibold text-slate-700">
                          Full Name
                        </label>
                        {errors.fullName && <span className="text-[11px] text-red-500">{errors.fullName}</span>}
                      </div>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Bibek Thapa"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: "" });
                        }}
                        className={`w-full h-11 px-3.5 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all ${
                          errors.fullName
                            ? "border-red-300 focus:ring-red-100"
                            : "border-slate-200 focus:border-emerald-700 focus:ring-emerald-700/10 hover:border-slate-300"
                        }`}
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                          Phone / WhatsApp
                        </label>
                        {errors.phone && <span className="text-[11px] text-red-500">{errors.phone}</span>}
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+977 98XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        className={`w-full h-11 px-3.5 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all ${
                          errors.phone
                            ? "border-red-300 focus:ring-red-100"
                            : "border-slate-200 focus:border-emerald-700 focus:ring-emerald-700/10 hover:border-slate-300"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Email & City in 2 Cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                          Email Address
                        </label>
                        {errors.email && <span className="text-[11px] text-red-500">{errors.email}</span>}
                      </div>
                      <input
                        id="email"
                        type="email"
                        placeholder="bibek@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full h-11 px-3.5 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all ${
                          errors.email
                            ? "border-red-300 focus:ring-red-100"
                            : "border-slate-200 focus:border-emerald-700 focus:ring-emerald-700/10 hover:border-slate-300"
                        }`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="city" className="text-xs font-semibold text-slate-700 block">
                        City in Nepal
                      </label>
                      <select
                        id="city"
                        value={formData.cityInNepal}
                        onChange={(e) => setFormData({ ...formData, cityInNepal: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:border-slate-300 transition-all cursor-pointer"
                      >
                        {CITIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message (Compact) */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-700 block">
                      Specific Questions or GPA{" "}
                      <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={2}
                      placeholder="e.g. Class 12 GPA, questions about scholarships or hostels..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:border-slate-300 transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-700/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Connect With an Advisor</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                      </>
                    )}
                  </Button>

                  {/* Reassurance text */}
                  <p className="text-center text-[11px] text-slate-500">
                    100% Free Guidance • No Consultancy Fees • 24h Response
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT: Minimalist Advisor & Office Card (5 Cols) ── */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Kathmandu Desk Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_24px_55px_-12px_rgba(15,23,42,0.15),0_6px_16px_-4px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.08)] p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Nepal Advisory Desk
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    Putalisadak, Kathmandu
                  </h3>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${
                    deskStatus.isOpen
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200/80"
                      : "bg-slate-100 text-slate-600"
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

              {/* Direct Touchpoints */}
              <div className="space-y-3 text-xs text-slate-600">
                <a
                  href="https://maps.google.com/?q=Putalisadak+Commercial+Plaza+Kathmandu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group hover:text-emerald-700 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="flex-1 leading-snug">
                    Level 3, Putalisadak Commercial Plaza (Opposite Star Mall), Kathmandu
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 shrink-0 mt-0.5" />
                </a>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                  <div className="flex items-center gap-2">
                    <a href="tel:+97714420000" className="hover:text-emerald-700 font-medium text-slate-800">
                      +977-1-4420000
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href="https://wa.me/9779801000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 font-semibold"
                    >
                      +977-9801000000 (WhatsApp)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <a
                    href="mailto:kathmandu@studyindia.edu.np"
                    className="hover:text-emerald-700 font-medium text-slate-800"
                  >
                    kathmandu@studyindia.edu.np
                  </a>
                </div>

                <div className="flex items-center gap-3 text-slate-500">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Sunday – Friday: 9:30 AM – 5:30 PM (NPT)</span>
                </div>
              </div>

              {/* Direct WhatsApp Instant Chat */}
              <a
                href="https://wa.me/9779801000000?text=Hello%20StudyIndia%20Counselor%2C%20I%20would%20like%20admission%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700 stroke-[2.2]" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>

            {/* Compact Secondary: India Liaison Centers */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_16px_36px_-8px_rgba(15,23,42,0.12),0_4px_12px_-2px_rgba(15,23,42,0.06)] p-4 sm:p-5 space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">
                  India Liaison Centers
                </span>
                <span className="text-[10px] text-slate-400">On-Campus Support</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 text-[11.5px]">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800 block">New Delhi Hub</span>
                  <span className="text-slate-500 text-[11px]">Statesman House, CP</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800 block">Bengaluru Hub</span>
                  <span className="text-slate-500 text-[11px]">Koramangala 5th Block</span>
                </div>
              </div>
              <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500">
                <a href="tel:+911123340000" className="hover:text-emerald-700">
                  +91-11-23340000
                </a>
                <span>•</span>
                <a href="mailto:support@studyindia.edu.np" className="hover:text-emerald-700">
                  support@studyindia.edu.np
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
