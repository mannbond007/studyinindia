"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { universitiesData } from "@/lib/data/universities";
import { formatCurrencyINR } from "@/lib/utils";

export default function UniversitiesPage() {
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");

  const states = Array.from(new Set(universitiesData.map((u) => u.state)));

  const filteredUniversities = universitiesData.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.city.toLowerCase().includes(search.toLowerCase());
    const matchesState = selectedState === "all" || u.state === selectedState;
    const matchesGrade = selectedGrade === "all" || u.naacGrade === selectedGrade;

    return matchesSearch && matchesState && matchesGrade;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <Badge variant="default" className="text-xs font-semibold">
            Recognized Campuses
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Accredited Indian Universities
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Browse partner institutions verified for curriculum standard, international student safety, and straightforward admission procedures for Nepali students.
          </p>
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
          <span>Showing {filteredUniversities.length} institutions</span>
          {(search || selectedState !== "all" || selectedGrade !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedState("all");
                setSelectedGrade("all");
              }}
              className="text-emerald-700 hover:underline font-medium"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Grid of Universities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.map((uni) => (
            <Card
              key={uni.id}
              className="overflow-hidden border border-slate-200/80 bg-white card-hover-shadow flex flex-col justify-between"
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
                        className="bg-white/90 text-slate-900 font-semibold"
                      >
                        NIRF #{uni.nirfRank}
                      </Badge>
                    )}
                  </div>
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
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 text-[11px]">
                    <div>
                      <span className="text-slate-400 block">Nepali Community:</span>
                      <span className="font-semibold text-slate-800">
                        {uni.nepaliStudentCount}+ students
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Hostel (Annual):</span>
                      <span className="font-semibold text-slate-800">
                        {formatCurrencyINR(uni.hostelFeePerYearINR)}
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
          ))}
        </div>
      </div>
    </div>
  );
}
