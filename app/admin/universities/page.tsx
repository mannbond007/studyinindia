"use client";

import React, { useState } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { universitiesData } from "@/lib/data/universities";
import { coursesData } from "@/lib/data/courses";
import { formatCurrencyINR } from "@/lib/utils";

export default function AdminUniversitiesPage() {
  const [activeTab, setActiveTab] = useState<"universities" | "courses">("universities");

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            University & Course Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Configure partner campuses, accredited course catalogs, tuition fee structures, and eligibility criteria.
          </p>
        </div>

        <div className="grid grid-cols-2 p-1 bg-slate-800 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab("universities")}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === "universities"
                ? "bg-emerald-600 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Institutions ({universitiesData.length})
          </button>
          <button
            onClick={() => setActiveTab("courses")}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === "courses"
                ? "bg-emerald-600 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Courses ({coursesData.length})
          </button>
        </div>
      </div>

      {activeTab === "universities" ? (
        <Card className="p-6 bg-slate-800 border-slate-700 rounded-2xl shadow-sm space-y-4 text-white">
          <CardTitle className="text-base font-heading text-white">
            Partner Campuses in India
          </CardTitle>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-200">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                  <th className="pb-3">Institution Name</th>
                  <th className="pb-3">Location</th>
                  <th className="pb-3">Accreditation</th>
                  <th className="pb-3">Annual Hostel Fee</th>
                  <th className="pb-3">Nepali Students</th>
                  <th className="pb-3">Featured</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60">
                {universitiesData.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-700/30 transition-colors">
                    <td className="py-3.5 font-bold text-white">
                      {u.name}
                    </td>
                    <td className="py-3.5 text-slate-300">
                      {u.city}, {u.state}
                    </td>
                    <td className="py-3.5">
                      <span className="font-bold text-emerald-400">
                        NAAC {u.naacGrade}
                      </span>
                      {u.nirfRank && (
                        <span className="text-[10px] text-slate-400 ml-1.5">
                          (NIRF #{u.nirfRank})
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 font-bold text-slate-200">
                      {formatCurrencyINR(u.hostelFeePerYearINR)}
                    </td>
                    <td className="py-3.5 text-emerald-400 font-semibold">
                      {u.nepaliStudentCount}+ on campus
                    </td>
                    <td className="py-3.5">
                      {u.isFeatured ? (
                        <Badge variant="accent" className="text-[10px]">Featured</Badge>
                      ) : (
                        <Badge variant="secondary" className="text-[10px]">Standard</Badge>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        <Card className="p-6 bg-slate-800 border-slate-700 rounded-2xl shadow-sm space-y-4 text-white">
          <CardTitle className="text-base font-heading text-white">
            Approved Academic Degree Courses
          </CardTitle>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-200">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                  <th className="pb-3">Course Program</th>
                  <th className="pb-3">University</th>
                  <th className="pb-3">Duration</th>
                  <th className="pb-3">Annual Tuition</th>
                  <th className="pb-3">Nepali Eligibility Rule</th>
                  <th className="pb-3">Intl. Seats</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60">
                {coursesData.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-700/30 transition-colors">
                    <td className="py-3.5">
                      <div className="font-bold text-white">{c.name}</div>
                      <div className="text-[10px] text-slate-400">{c.degree} • {c.stream}</div>
                    </td>
                    <td className="py-3.5 text-slate-300">
                      {c.universityName}
                    </td>
                    <td className="py-3.5 font-semibold text-slate-200">
                      {c.durationYears} Years
                    </td>
                    <td className="py-3.5 font-bold text-emerald-400">
                      {formatCurrencyINR(c.annualFeeINR)}
                    </td>
                    <td className="py-3.5 text-[11px] text-slate-300">
                      {c.eligibility.minimumEducation} ({c.eligibility.minimumGpaOrPercentage})
                    </td>
                    <td className="py-3.5 text-slate-200 font-bold">
                      {c.seatsForInternational} seats
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
