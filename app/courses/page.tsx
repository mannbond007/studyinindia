"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { coursesData } from "@/lib/data/courses";
import { CourseCard } from "@/components/courses/course-card";

function streamMatches(courseStream: string, filterStream: string) {
  if (!filterStream || filterStream === "all") return true;
  if (courseStream.toLowerCase() === filterStream.toLowerCase()) return true;
  if (
    filterStream === "Medical & Healthcare" &&
    (courseStream.includes("Medical") ||
      courseStream.includes("Nursing") ||
      courseStream.includes("Pharmacy"))
  )
    return true;
  if (filterStream === "Management" && courseStream.includes("Management"))
    return true;
  if (
    filterStream === "Computer Applications" &&
    (courseStream.includes("Computer") || courseStream.includes("IT"))
  )
    return true;
  if (filterStream === "Science" && courseStream.includes("Science"))
    return true;
  if (
    filterStream === "Engineering & Technology" &&
    courseStream.includes("Engineering")
  )
    return true;
  return courseStream.toLowerCase().includes(filterStream.toLowerCase());
}

function getCourseLevel(degree: string): "UG" | "PG" {
  if (degree === "MBA" || degree === "MCA") return "PG";
  return "UG";
}

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams?.get("q") || "";
  const initialStream = searchParams?.get("stream") || "all";

  const [search, setSearch] = useState(initialQ);
  const [selectedStream, setSelectedStream] = useState(initialStream);
  const [selectedDegree, setSelectedDegree] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState<"all" | "UG" | "PG">("all");
  const [currency, setCurrency] = useState<"USD" | "INR" | "NPR">("USD");

  useEffect(() => {
    const q = searchParams?.get("q");
    const stream = searchParams?.get("stream");
    if (q !== null && q !== undefined) setSearch(q);
    if (stream !== null && stream !== undefined) setSelectedStream(stream);
  }, [searchParams]);

  const streams = Array.from(new Set(coursesData.map((c) => c.stream)));
  const degrees = Array.from(new Set(coursesData.map((c) => c.degree)));

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(search.toLowerCase()) ||
      course.universityName.toLowerCase().includes(search.toLowerCase());
    const matchesStream = streamMatches(course.stream, selectedStream);
    const matchesDegree =
      selectedDegree === "all" || course.degree === selectedDegree;
    const matchesLevel =
      selectedLevel === "all" || getCourseLevel(course.degree) === selectedLevel;

    return matchesSearch && matchesStream && matchesDegree && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header + Currency & Programme Level Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <Badge variant="default" className="text-xs font-semibold">
              Undergraduate (UG) &amp; Postgraduate (PG) Catalog
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Degree Courses for International Students
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Find engineering, medical, management, and computing degrees with verified eligibility criteria mapped to international boards (A-Levels, IB, CBSE, WAEC, NEB).
            </p>
          </div>

          {/* Currency Display Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-slate-500">
              Fee Currency:
            </span>
            <div className="inline-flex items-center p-1 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              {(["USD", "INR", "NPR"] as const).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setCurrency(curr)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    currency === curr
                      ? "bg-emerald-700 text-white shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {curr === "USD" ? "$ USD" : curr === "INR" ? "₹ INR" : "NPR (SAARC)"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Programme Level Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "All Programme Levels" },
            { id: "UG", label: "Undergraduate (UG — Bachelor's)" },
            { id: "PG", label: "Postgraduate (PG — Master's)" },
          ].map((lvl) => {
            const active = selectedLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setSelectedLevel(lvl.id as "all" | "UG" | "PG")}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  active
                    ? "bg-emerald-700 text-white border-emerald-700 shadow-xs"
                    : "bg-white text-slate-700 border-slate-200/90 hover:border-emerald-300 hover:text-emerald-800"
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{lvl.label}</span>
              </button>
            );
          })}
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by degree title or university (e.g. AI, MBBS, MBA, VIT)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-300 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="w-full h-11 px-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="all">All Academic Streams</option>
              {streams.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
              className="w-full h-11 px-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="all">All Degrees (B.Tech, MBBS, MBA...)</option>
              {degrees.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Count and Reset */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredCourses.length} accredited programs</span>
          {(search ||
            selectedStream !== "all" ||
            selectedDegree !== "all" ||
            selectedLevel !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedStream("all");
                setSelectedDegree("all");
                setSelectedLevel("all");
              }}
              className="text-emerald-700 hover:underline font-medium cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} currency={currency} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 py-12 flex justify-center items-center">
          <div className="w-8 h-8 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <CoursesContent />
    </Suspense>
  );
}
