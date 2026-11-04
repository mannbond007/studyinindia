"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Scale,
  X,
  Award,
  Sparkles,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { universitiesData } from "@/lib/data/universities";
import { formatCurrencyINR, formatCurrencyUSD } from "@/lib/utils";

type QuickFilter = "all" | "nirf-top-20" | "naac-a-plus-plus" | "high-scholarship";

export default function UniversitiesPage() {
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [quickFilter, setQuickFilter] = useState<QuickFilter>("all");
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const states = Array.from(new Set(universitiesData.map((u) => u.state)));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const stateParam = params.get("state");
    if (stateParam) {
      const exactMatch = states.find(
        (s) => s.toLowerCase() === stateParam.toLowerCase()
      );
      const partialMatch = states.find(
        (s) =>
          s.toLowerCase().includes(stateParam.toLowerCase()) ||
          stateParam.toLowerCase().includes(s.toLowerCase())
      );
      if (exactMatch) {
        setSelectedState(exactMatch);
      } else if (partialMatch) {
        setSelectedState(partialMatch);
      } else {
        setSearch(stateParam);
      }
    }
  }, []);

  const toggleCompare = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const comparedUniversities = universitiesData.filter((u) =>
    compareIds.includes(u.id)
  );

  const filteredUniversities = universitiesData.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.city.toLowerCase().includes(search.toLowerCase());
    const matchesState = selectedState === "all" || u.state === selectedState;
    const matchesGrade = selectedGrade === "all" || u.naacGrade === selectedGrade;

    const matchesQuickFilter =
      quickFilter === "all" ||
      (quickFilter === "nirf-top-20" && u.nirfRank && u.nirfRank <= 20) ||
      (quickFilter === "naac-a-plus-plus" && u.naacGrade === "A++") ||
      (quickFilter === "high-scholarship" &&
        u.highlights.some(
          (h) => h.includes("50%") || h.includes("100%") || h.toLowerCase().includes("scholarship")
        ));

    return matchesSearch && matchesState && matchesGrade && matchesQuickFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <Badge variant="default" className="text-xs font-semibold">
              Quality-Audited Partner Campuses
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Accredited Indian Universities &amp; Institutions
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Browse partner institutions verified under Ministry of Education (NIRF &amp; NAAC) benchmarks for global curriculum equivalence, campus safety, and direct international admissions across 50+ countries.
            </p>
          </div>

          {/* Quality Benchmark Pill Summary */}
          <div className="bg-white border border-slate-200/90 rounded-2xl px-4 py-3 shadow-sm flex items-center gap-3 shrink-0">
            <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-slate-900 block">
                100% UGC, NAAC & NIRF Verified
              </span>
              <span className="text-slate-500">
                Select up to 3 campuses to compare side-by-side
              </span>
            </div>
          </div>
        </div>

        {/* Quick Benchmark Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "All Accredited Campuses" },
            { id: "nirf-top-20", label: "NIRF Top 20 Ranked" },
            { id: "naac-a-plus-plus", label: "NAAC A++ Tier Only" },
            { id: "high-scholarship", label: "50%–100% Merit Scholarships" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setQuickFilter(tab.id as QuickFilter)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                quickFilter === tab.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200/90 hover:border-emerald-300 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by university name or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-300 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
            />
          </div>

          <div className="md:col-span-4">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full h-11 px-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="all">All States & Regions</option>
              {states.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full h-11 px-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="all">All NAAC Accreditations</option>
              <option value="A++">NAAC A++</option>
              <option value="A+">NAAC A+</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing <strong className="text-slate-800">{filteredUniversities.length}</strong> accredited institutions
          </span>
          {(search ||
            selectedState !== "all" ||
            selectedGrade !== "all" ||
            quickFilter !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedState("all");
                setSelectedGrade("all");
                setQuickFilter("all");
              }}
              className="text-emerald-700 hover:underline font-semibold"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Grid of Universities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.map((uni) => {
            const isCompared = compareIds.includes(uni.id);
            return (
              <Card
                key={uni.id}
                className={`overflow-hidden border bg-white card-hover-shadow flex flex-col justify-between transition-all ${
                  isCompared
                    ? "border-emerald-600 ring-2 ring-emerald-500/20"
                    : "border-slate-200/80"
                }`}
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge variant="accent" className="font-bold">
                        NAAC {uni.naacGrade}
                      </Badge>
                      {uni.nirfRank && (
                        <Badge
                          variant="secondary"
                          className="bg-white/95 text-slate-900 font-semibold shadow-sm"
                        >
                          NIRF #{uni.nirfRank}
                        </Badge>
                      )}
                    </div>

                    {/* Compare toggle button */}
                    <button
                      type="button"
                      onClick={() => toggleCompare(uni.id)}
                      className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all shadow-sm ${
                        isCompared
                          ? "bg-emerald-600 text-white"
                          : "bg-white/95 text-slate-800 hover:bg-emerald-50"
                      }`}
                    >
                      <Scale className="w-3 h-3" />
                      <span>{isCompared ? "Selected" : "Compare"}</span>
                    </button>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      <span>
                        {uni.city}, {uni.state}
                      </span>
                    </div>
                    <CardTitle className="text-xl hover:text-emerald-700 transition-colors">
                      <Link href={`/universities/${uni.slug}`}>{uni.name}</Link>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4 text-xs text-slate-600">
                    <p className="line-clamp-2 leading-relaxed text-slate-600">
                      {uni.description}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {uni.highlights.slice(0, 2).map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-1.5 text-[11px] text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 text-[11px]">
                      <div>
                        <span className="text-slate-400 block">Intl. Community:</span>
                        <span className="font-semibold text-slate-800">
                          {uni.nepaliStudentCount}+ international students
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Hostel (Annual):</span>
                        <span className="font-semibold text-slate-800">
                          {formatCurrencyUSD(uni.hostelFeePerYearINR)}{" "}
                          <span className="text-slate-400 font-normal">
                            ({formatCurrencyINR(uni.hostelFeePerYearINR)})
                          </span>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100">
                  <div className="flex items-center justify-between pt-3">
                    <span className="text-xs text-slate-500">
                      Est. {uni.establishedYear} • {uni.campusSize}
                    </span>
                    <Link href={`/universities/${uni.slug}`}>
                      <Button size="sm" className="font-semibold gap-1 text-xs">
                        <span>View Campus</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Floating Side-by-Side Comparison Bar */}
      {compareIds.length > 0 && (
        <div className="fixed bottom-5 inset-x-4 z-40 max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <Scale className="w-4 h-4" />
              <span>Compare ({compareIds.length}/3):</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {comparedUniversities.map((u) => (
                <span
                  key={u.id}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-xs font-medium text-slate-100 border border-slate-700"
                >
                  <span className="truncate max-w-[150px]">{u.name}</span>
                  <button
                    type="button"
                    onClick={() => toggleCompare(u.id)}
                    className="text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setCompareIds([])}
              className="text-xs text-slate-400 hover:text-white px-2.5 py-1.5"
            >
              Clear
            </button>
            <Button
              size="sm"
              onClick={() => setShowCompareModal(true)}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Compare Side-by-Side</span>
            </Button>
          </div>
        </div>
      )}

      {/* Side-by-Side Comparison Modal */}
      {showCompareModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-5xl w-full overflow-hidden my-8">
            <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="text-base font-bold font-heading">
                    Partner University Comparison Matrix
                  </h3>
                  <p className="text-xs text-slate-400">
                    Official NIRF ranking, NAAC accreditation, hostel fees, and international metrics
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowCompareModal(false)}
                className="h-8 w-8 rounded-lg bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-3 pr-4 text-slate-400 font-semibold w-44">
                      Parameter
                    </th>
                    {comparedUniversities.map((u) => (
                      <th key={u.id} className="py-3 px-4 font-bold text-slate-900 text-sm">
                        {u.name}
                        <span className="block text-[11px] font-normal text-slate-500 mt-0.5">
                          {u.city}, {u.state}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-slate-600">
                      NIRF National Rank
                    </td>
                    {comparedUniversities.map((u) => (
                      <td key={u.id} className="py-3.5 px-4 font-bold text-slate-900">
                        #{u.nirfRank || "N/A"} in India
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-slate-600">
                      NAAC Accreditation
                    </td>
                    {comparedUniversities.map((u) => (
                      <td key={u.id} className="py-3.5 px-4">
                        <Badge variant="accent" className="font-bold">
                          Grade {u.naacGrade}
                        </Badge>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-slate-600">
                      Annual Hostel & Mess Fee
                    </td>
                    {comparedUniversities.map((u) => (
                      <td key={u.id} className="py-3.5 px-4 font-semibold text-emerald-700">
                        {formatCurrencyUSD(u.hostelFeePerYearINR)} / yr{" "}
                        <span className="block text-[11px] text-slate-400 font-normal">
                          ({formatCurrencyINR(u.hostelFeePerYearINR)} / yr)
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-slate-600">
                      Campus Size & Est. Year
                    </td>
                    {comparedUniversities.map((u) => (
                      <td key={u.id} className="py-3.5 px-4 text-slate-700">
                        {u.campusSize} • Est. {u.establishedYear}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-slate-600">
                      International Students
                    </td>
                    {comparedUniversities.map((u) => (
                      <td key={u.id} className="py-3.5 px-4 font-semibold text-slate-800">
                        {u.nepaliStudentCount}+ active students
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-slate-600">
                      Key Institutional Highlights
                    </td>
                    {comparedUniversities.map((u) => (
                      <td key={u.id} className="py-3.5 px-4 space-y-1.5">
                        {u.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-slate-600">
                      Direct Application
                    </td>
                    {comparedUniversities.map((u) => (
                      <td key={u.id} className="py-4 px-4">
                        <Link href={`/universities/${u.slug}`}>
                          <Button size="sm" className="w-full font-semibold text-xs">
                            Explore & Apply
                          </Button>
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
