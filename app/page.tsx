"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Building2,
  MapPin,
  GraduationCap,
  Globe,
  Users,
  BookOpen,
  ChevronRight,
  Star,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { universitiesData } from "@/lib/data/universities";
import { coursesData } from "@/lib/data/courses";
import { formatCurrencyINR, formatCurrencyNPR } from "@/lib/utils";

/* ─── Animated Counter ─────────────────────────────────────── */
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

export default function HomePage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStream, setSelectedStream] = useState<string>("all");
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    setHeroReady(true);
  }, []);

  const featuredUniversities = universitiesData
    .filter((u) => u.isFeatured)
    .slice(0, 3);
  const popularCourses = coursesData.filter((c) => c.isPopular);

  const matchDiscipline = (courseStream: string, streamFilter: string) => {
    if (streamFilter === "all") return true;
    if (streamFilter === "Medical & Healthcare") {
      return (
        courseStream === "Medical & Allied Health" ||
        courseStream === "Nursing & Pharmacy"
      );
    }
    if (streamFilter === "Management")
      return courseStream === "Management & Business";
    if (streamFilter === "Computer Applications")
      return courseStream === "Computer Applications & IT";
    if (streamFilter === "Science")
      return courseStream === "Basic & Applied Sciences";
    return courseStream.toLowerCase().includes(streamFilter.toLowerCase());
  };

  const filteredCourses = popularCourses.filter((course) => {
    const matchesSearch =
      searchTerm.trim() === "" ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.universityName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch && matchDiscipline(course.stream, selectedStream);
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm.trim()) params.set("q", searchTerm.trim());
    if (selectedStream && selectedStream !== "all")
      params.set("stream", selectedStream);
    const qs = params.toString();
    router.push(qs ? `/courses?${qs}` : "/courses");
  };

  const c1 = useCountUp(150, 2000);
  const c2 = useCountUp(5000, 2500);
  const c3 = useCountUp(98, 2000);
  const c4 = useCountUp(500, 2200);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ════════════════════════════════════════════════════════════
          HERO — Clean split, text left, image right
         ════════════════════════════════════════════════════════════ */}


      <section className="relative bg-[#fafbfc] overflow-hidden">
        {/* Subtle decorative blobs */}
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-150px] left-[-80px] w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── LEFT: Text content ── */}


            <div
              className={`space-y-6 transition-all duration-700 ease-out ${
                heroReady
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >

              {/* Eyebrow */}

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-[11px] font-bold uppercase tracking-widest">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                Admissions Open 2026–27 
              </span>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.1] font-heading">
                Your Path to{" "}
                <span className="text-emerald-600">
                  India&apos;s Best Universities
                </span>
              </h1>

              {/* One-liner */}
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
                Explore 150+ accredited universities, compare fees in INR & NPR,
                and get free admission guidance — no visa required for Nepali
                students.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="/universities">
                  <Button
                    size="lg"
                    className="font-semibold text-sm gap-2 bg-emerald-600 hover:bg-emerald-700 text-white h-12 px-6 rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Explore Universities
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-semibold text-sm gap-2 border-slate-300 text-slate-700 h-12 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Browse Courses
                  </Button>
                </Link>
              </div>

              {/* Compact trust row */}

              <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400 pt-2">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  UGC Recognized
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-500" />
                  No Visa Required
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                  Free Guidance
                </span>
              </div>
            </div>

            {/* ── RIGHT: Hero image ── */}
            <div
              className={`relative transition-all duration-700 ease-out delay-200 ${
                heroReady
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative w-full max-h-[420px] aspect-[4/5] max-w-sm lg:max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl shadow-slate-300/40 ring-1 ring-slate-200/60">
                <Image
                  src="/images/hero-student.jpg"
                  alt="A confident university student on a modern Indian campus, holding a laptop and coffee, with students in the background"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 35vw"
                  className="object-cover object-top"
                  quality={85}
                />
              </div>

              {/* Single floating badge */}
              <div
                className={`group absolute -bottom-5 -left-5 sm:bottom-6 sm:-left-6
                transition-all duration-700 delay-500
                ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                {/* Ambient glow behind badge */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-emerald-500/0 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Glassmorphic Card Shell */}
                <div className="relative flex items-center gap-3.5 bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border border-white/90 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.18),0_1px_3px_0_rgba(15,23,42,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.9)] ring-1 ring-slate-900/[0.04] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.22)]">
                  {/* HDR 3D Luminous Icon */}
                  <div className="relative shrink-0">
                    {/* Multi-layer HDR Bloom & Lens Glow */}
                    <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-emerald-400 via-teal-300 to-emerald-500 blur-md opacity-85 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />

                    {/* HDR Glass Jewel Pod with 3D Bevel & Inset Specular Sheen */}
                    <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-b from-emerald-300 via-emerald-500 to-teal-900 p-[1.5px] shadow-[0_12px_28px_-4px_rgba(16,185,129,0.6),0_4px_12px_rgba(6,78,59,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:rotate-1">
                      <div className="relative w-full h-full rounded-[14px] bg-gradient-to-b from-[#10b981] via-[#059669] to-[#064e3b] flex items-center justify-center overflow-hidden shadow-[inset_0_2px_3px_rgba(255,255,255,0.75),inset_0_-3px_5px_rgba(0,0,0,0.45)]">
                        {/* Upper Curved Specular Glass Highlight */}
                        <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/60 via-white/20 to-transparent pointer-events-none rounded-t-[14px]" />

                        {/* HDR Radial Light Core */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.4)_0%,transparent_60%)] pointer-events-none" />

                        {/* 3D HDR Graduation Cap */}
                        <svg
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-7 h-7 sm:w-7.5 sm:h-7.5 relative z-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.35)]"
                        >
                          <defs>
                            <linearGradient id="hdrCapFacet" x1="14" y1="4" x2="14" y2="15" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="#ffffff" />
                              <stop offset="50%" stopColor="#f0fdf4" />
                              <stop offset="100%" stopColor="#86efac" />
                            </linearGradient>
                            <linearGradient id="hdrCapRim" x1="14" y1="13" x2="14" y2="23" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                              <stop offset="100%" stopColor="#4ade80" />
                            </linearGradient>
                            <linearGradient id="hdrGoldTassel" x1="20" y1="11" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="#fef08a" />
                              <stop offset="60%" stopColor="#f59e0b" />
                              <stop offset="100%" stopColor="#b45309" />
                            </linearGradient>
                            <filter id="hdrSpecularGlow" x="-20%" y="-20%" width="140%" height="140%">
                              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.25" />
                              <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#86efac" floodOpacity="0.75" />
                            </filter>
                          </defs>

                          {/* Cap Base Arch */}
                          <path
                            d="M6.5 13.5V18C6.5 20.8 9.8 22.5 14 22.5C18.2 22.5 21.5 20.8 21.5 18V13.5"
                            stroke="url(#hdrCapRim)"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            filter="url(#hdrSpecularGlow)"
                          />

                          {/* 3D Top Diamond Plaque */}
                          <path
                            d="M14 4.5L24.5 9.8L14 15.2L3.5 9.8L14 4.5Z"
                            fill="url(#hdrCapFacet)"
                            stroke="#ffffff"
                            strokeWidth="1.2"
                            filter="url(#hdrSpecularGlow)"
                          />

                          {/* Center Gold Pin */}
                          <circle cx="14" cy="9.8" r="1.4" fill="#fef08a" stroke="#d97706" strokeWidth="0.6" />

                          {/* Hanging Gold Tassel */}
                          <path
                            d="M21 11.5V17M21 17C20.3 17.6 20 18.4 20 19.2M21 17C21.7 17.6 22 18.4 22 19.2"
                            stroke="url(#hdrGoldTassel)"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <circle cx="21" cy="17" r="0.9" fill="#fef08a" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Typography & Social Proof */}
                  <div className="flex flex-col pr-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl font-black text-slate-900 font-heading tracking-tight leading-none">
                        5,000+
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/70 shadow-xs">
                        <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                        Verified
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-[11.5px] font-semibold text-slate-500 tracking-tight">
                        Students Placed
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-[11px] font-bold text-emerald-600">
                        Top Unis
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          STATS ROW
        ════════════════════════════════════════════════════════════ */}


      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {[
              {
                ref: c1.ref,
                count: c1.count,
                suffix: "+",
                label: "Universities",
                icon: Building2,
              },
              {
                ref: c2.ref,
                count: c2.count,
                suffix: "+",
                label: "Students Placed",
                icon: Users,
              },
              {
                ref: c3.ref,
                count: c3.count,
                suffix: "%",
                label: "Success Rate",
                icon: CheckCircle2,
              },
              {
                ref: c4.ref,
                count: c4.count,
                suffix: "+",
                label: "Courses",
                icon: BookOpen,
              },


            ].map((s, i) => (
              <div key={i} ref={s.ref} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
                  {s.count.toLocaleString()}
                  {s.suffix}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          QUICK COURSE SEARCH
        ════════════════════════════════════════════════════════════ */}

      <section className="py-14 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-slate-900 font-heading">
              Find Your Course
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Search by name, university, or discipline
            </p>
          </div>
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-3 bg-white rounded-2xl p-3 border border-slate-200 shadow-sm"
          >
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-300 absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                id="hero-course-search"
                type="text"
                placeholder="e.g. B.Tech CSE, MBBS, VIT..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-slate-50 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white transition-all"
              />
            </div>
            <select
              id="hero-discipline-select"
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="h-11 px-3.5 rounded-xl bg-slate-50 text-sm text-slate-700 border-none focus:outline-none focus:ring-2 focus:ring-emerald-500/40 cursor-pointer"
            >
              <option value="all">All Disciplines</option>
              <option value="Engineering & Technology">Engineering</option>
              <option value="Medical & Healthcare">Medical</option>
              <option value="Management">Management</option>
              <option value="Computer Applications">
                Computer Applications
              </option>
              <option value="Law">Law</option>
              <option value="Science">Science</option>
            </select>
            <Button
              type="submit"
              className="h-11 px-6 font-semibold text-sm bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl cursor-pointer"
            >
              Search
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </form>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          FEATURED UNIVERSITIES — 3 cards max
        ════════════════════════════════════════════════════════════ */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Featured Universities
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Top-accredited campuses welcoming Nepali students
              </p>
            </div>
            <Link href="/universities">
              <Button
                variant="ghost"
                className="font-semibold text-sm gap-1.5 text-emerald-600 hover:text-emerald-700 cursor-pointer"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredUniversities.map((uni) => (
              <Link
                key={uni.id}
                href={`/universities/${uni.slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">

                    {/* eslint-disable-next-line @next/next/no-img-element */}

                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge variant="accent" className="font-bold text-[11px]">
                        NAAC {uni.naacGrade}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5">
                      <MapPin className="w-3 h-3" />
                      {uni.city}, {uni.state}
                    </div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {uni.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {uni.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-xs">
                      <span className="text-emerald-600 font-medium">
                        {uni.nepaliStudentCount}+ Nepali students
                      </span>
                      <span className="text-slate-400">
                        {formatCurrencyINR(uni.hostelFeePerYearINR)}/yr hostel
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          POPULAR COURSES — 6 cards, clean grid
         ════════════════════════════════════════════════════════════ */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Popular Courses
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Compare fees in INR & NPR, check eligibility, apply directly
              </p>
            </div>
            <Link href="/courses">
              <Button
                variant="ghost"
                className="font-semibold text-sm gap-1.5 text-emerald-600 hover:text-emerald-700 cursor-pointer"
              >
                Browse All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCourses.slice(0, 6).map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="default" className="text-[11px]">
                      {course.degree}
                    </Badge>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {course.durationYears}Y
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 leading-snug">
                    <Link
                      href={`/courses/${course.id}`}
                      className="hover:text-emerald-700 transition-colors"
                    >
                      {course.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <Building2 className="w-3 h-3" /> {course.universityName}
                  </p>
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                    <span className="text-slate-500">
                      {formatCurrencyINR(course.annualFeeINR)}/yr
                    </span>
                    <span className="text-emerald-600 font-medium">
                      ≈ {formatCurrencyNPR(course.annualFeeINR)}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={`/courses/${course.id}`}
                    className="text-[11px] text-slate-400 hover:text-emerald-600 font-medium transition-colors"
                  >
                    Details →
                  </Link>
                  <Link href={`/register?courseId=${course.id}`}>
                    <Button
                      size="sm"
                      className="text-xs font-semibold h-8 px-3 rounded-lg cursor-pointer"
                    >
                      Apply
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          HOW IT WORKS — Minimal 5-step
         ════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              How It Works
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Five simple steps from registration to campus arrival
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              {
                n: "01",
                title: "Register",
                desc: "Create your account with SEE & NEB scores",
              },
              {
                n: "02",
                title: "Discover",
                desc: "Compare universities, courses & fees",
              },
              {
                n: "03",
                title: "Upload",
                desc: "Submit marksheets & identity documents",
              },
              {
                n: "04",
                title: "Verify",
                desc: "Our team reviews & submits to the university",
              },
              {
                n: "05",
                title: "Enroll",
                desc: "Get your offer letter & head to campus",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative text-center p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-sm hover:border-slate-200 transition-all duration-300 group"
              >
                <div className="text-2xl font-black text-emerald-600/20 font-heading mb-2 group-hover:text-emerald-600/40 transition-colors">
                  {step.n}
                </div>
                <h3 className="font-bold text-sm text-slate-900 font-heading mb-1">
                  {step.title}
                </h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/admission-process">
              <Button
                variant="outline"
                className="font-semibold text-sm rounded-xl gap-2 cursor-pointer"
              >
                View Full Admission Guide <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          WHY INDIA — Compact advantages + CTA card
         ════════════════════════════════════════════════════════════ */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Advantages */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-2">
                Why Study in India?
              </h2>
              <p className="text-slate-400 text-sm mb-8">
                The top choice for Nepali students — here&apos;s why.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "No Visa Required",
                    desc: "Travel and study freely under the 1950 Indo-Nepal Treaty.",
                  },
                  {
                    title: "Degrees Recognized in Nepal",
                    desc: "NEC, NMC, and TU all accept UGC-recognized Indian degrees.",
                  },
                  {
                    title: "Affordable World-Class Education",
                    desc: "Fraction of western fees with manageable INR living costs.",
                  },
                  {
                    title: "Top Placement Records",
                    desc: "Campus recruitment by Microsoft, Google, Amazon, TCS & more.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-full bg-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-56 h-56 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-bold font-heading mb-3 relative z-10">
                Ready to Apply?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
                Join students from Kathmandu, Pokhara, Butwal & Biratnagar
                already enrolled in top Indian colleges. Our guidance is 100%
                free.
              </p>
              <div className="space-y-2.5 mb-8 relative z-10">
                <div className="flex items-center justify-between text-xs p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400">Session</span>
                  <span className="font-bold text-emerald-400">
                    Fall 2026 / 2027
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400">Guidance Fee</span>
                  <span className="font-bold text-emerald-400">100% Free</span>
                </div>
              </div>
              <Link href="/register" className="relative z-10 block">
                <Button
                  size="lg"
                  className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl cursor-pointer"
                >
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* ════════════════════════════════════════════════════════════
          TESTIMONIALS — 3 compact cards
         ════════════════════════════════════════════════════════════ */}


      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Student Stories
            </h2>
            <p className="text-xs text-slate-400 mt-1 italic">
              Sample experiences for demonstration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Aayush Sharma",
                from: "Kathmandu",
                program: "B.Tech CSE — VIT Vellore",
                quote:
                  "The admission process was effortless. Campus life in Vellore is vibrant with an active Nepali students union.",
              },
              {
                name: "Prativa Adhikari",
                from: "Pokhara",
                program: "B.Sc Nursing — Sharda University",
                quote:
                  "The hospital exposure is tremendous. Advisors explained everything for Nepal Nursing Council licensing.",
              },
              {
                name: "Rohan Shrestha",
                from: "Birgunj",
                program: "BBA FinTech — Chandigarh University",
                quote:
                  "No hefty consultancy fees! The fee transparency in INR and NPR helped my family plan everything.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <div className="flex items-center gap-0.5 text-emerald-500 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-3">
                  <div className="font-bold text-sm text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-emerald-600">
                    {t.program}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {t.from}, Nepal
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FAQ — Clean accordion-style, 4 items only
         ════════════════════════════════════════════════════════════ */}

      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Frequently Asked
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Do Nepali students need a visa?",
                a: "No. Under the 1950 Treaty, Nepali citizens can study in India with just a valid Citizenship or Passport.",
              },
              {
                q: "How are NEB marks evaluated?",
                a: "Most universities accept NEB transcripts directly. GPA is converted to percentage (e.g. 3.2 GPA ≈ 80%).",
              },
              {
                q: "What is the NOC?",
                a: "A No Objection Certificate from Nepal's MoEST, needed to wire fees via Nepali banks. You need your Offer Letter first.",
              },
              {
                q: "Are Indian degrees recognized in Nepal?",
                a: "Yes. Engineering (NEC), Medical (NMC), and other degrees from UGC-approved institutions are fully recognized.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <h4 className="font-bold text-sm text-slate-900 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  {faq.q}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-2 pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/faq">
              <Button
                variant="ghost"
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 cursor-pointer"
              >
                View All FAQs <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════
          BOTTOM CTA
         ════════════════════════════════════════════════════════════ */}

      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-3">
            Start Your Journey Today
          </h2>
          <p className="text-slate-400 text-sm mb-7 max-w-lg mx-auto">
            Create your free account, explore universities, and submit your
            application. No consultancy fees, ever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/register">
              <Button
                size="lg"
                className="font-bold text-sm gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 h-12 px-7 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                Start Free Application
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="font-semibold text-sm border-slate-600 text-slate-300 hover:bg-slate-800 h-12 px-7 rounded-xl cursor-pointer"
              >
                Talk to an Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
