"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, Building2, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { coursesData } from "@/lib/data/courses";
import { formatCurrencyINR, formatCurrencyNPR } from "@/lib/utils";

function streamMatches(courseStream: string, filterStream: string) {
  if (!filterStream || filterStream === "all") return true;
  if (courseStream.toLowerCase() === filterStream.toLowerCase()) return true;
  if (
    filterStream === "Medical & Healthcare" &&
    (courseStream.includes("Medical") || courseStream.includes("Nursing") || courseStream.includes("Pharmacy"))
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

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams?.get("q") || "";
  const initialStream = searchParams?.get("stream") || "all";

  const [search, setSearch] = useState(initialQ);
  const [selectedStream, setSelectedStream] = useState(initialStream);
  const [selectedDegree, setSelectedDegree] = useState("all");

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

    return matchesSearch && matchesStream && matchesDegree;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <Badge variant="default" className="text-xs font-semibold">
            Undergraduate & Postgraduate Programs
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Degree Courses for Nepali Students
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Find technical, medical, management, and IT degrees with verified eligibility criteria mapped to NEB and SEE grading systems.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by degree title or university..."
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
              <option value="all">All Degrees (B.Tech, BBA...)</option>
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
          <span>Showing {filteredCourses.length} programs</span>
          {(search || selectedStream !== "all" || selectedDegree !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedStream("all");
                setSelectedDegree("all");
              }}
              className="text-emerald-700 hover:underline font-medium"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="border border-slate-200/90 rounded-2xl p-6 bg-white flex flex-col justify-between card-hover-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="default" className="text-xs font-semibold">
                    {course.degree}
                  </Badge>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.durationYears} Years</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-slate-900 leading-snug hover:text-emerald-700 transition-colors">
                    <Link href={`/courses/${course.id}`}>{course.name}</Link>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{course.universityName}</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Annual Tuition:</span>
                    <span className="font-extrabold text-slate-900">
                      {formatCurrencyINR(course.annualFeeINR)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-500">
                    <span>Equiv. NPR:</span>
                    <span className="font-medium text-emerald-700">
                      ~{formatCurrencyNPR(course.annualFeeINR)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1 border-t border-slate-200/60">
                    <span>Intl. Quota:</span>
                    <span>{course.seatsForInternational} seats</span>
                  </div>
                </div>

                <div className="space-y-1 text-xs text-slate-600">
                  <span className="text-[11px] font-bold text-slate-700 block">
                    Nepali Eligibility:
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {course.eligibility.minimumEducation} ({course.eligibility.minimumGpaOrPercentage})
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/courses/${course.id}`}
                  className="text-xs text-slate-500 hover:text-emerald-700 font-medium"
                >
                  View Details
                </Link>
                <Link href={`/register?courseId=${course.id}`}>
                  <Button size="sm" className="text-xs font-semibold gap-1">
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 py-12 flex justify-center items-center"><div className="w-8 h-8 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" /></div>}>
      <CoursesContent />
    </Suspense>
  );
}
