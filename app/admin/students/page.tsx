"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdminStudentsPage() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: "std-1",
      name: "Bibek Thapa",
      email: "bibek.thapa@gmail.com",
      phone: "+977 9801234567",
      city: "Kathmandu",
      citizenshipNo: "27-01-78-01942",
      seeGpa: "3.65",
      nebGpa: "3.45",
      applicationsCount: 2,
      registeredAt: "Oct 08, 2026",
    },
    {
      id: "std-2",
      name: "Suman Karki",
      email: "suman.karki@gmail.com",
      phone: "+977 9841234567",
      city: "Kathmandu",
      citizenshipNo: "27-01-77-04812",
      seeGpa: "3.55",
      nebGpa: "3.30",
      applicationsCount: 1,
      registeredAt: "Oct 05, 2026",
    },
    {
      id: "std-3",
      name: "Pooja Gurung",
      email: "pooja.gurung@gmail.com",
      phone: "+977 9856012345",
      city: "Pokhara",
      citizenshipNo: "41-01-79-09144",
      seeGpa: "3.70",
      nebGpa: "3.45",
      applicationsCount: 1,
      registeredAt: "Oct 02, 2026",
    },
  ];

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Registered Nepali Students Registry
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Database of registered student profiles, Class 10/12 academic records, and applications count.
        </p>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          placeholder="Search by student name, email, or city in Nepal..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <Card className="p-6 bg-slate-800 border-slate-700 rounded-2xl shadow-sm space-y-4 text-white">
        <CardTitle className="text-base font-heading text-white">
          Active Student Profiles ({filtered.length})
        </CardTitle>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-200">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <th className="pb-3">Student Name</th>
                <th className="pb-3">Contact & Email</th>
                <th className="pb-3">City & Citizenship</th>
                <th className="pb-3">SEE GPA</th>
                <th className="pb-3">NEB (+2) GPA</th>
                <th className="pb-3">Applications</th>
                <th className="pb-3">Registered On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/60">
              {filtered.map((s) => (
                <tr key={s.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="py-3.5 font-bold text-white">
                    {s.name}
                  </td>
                  <td className="py-3.5">
                    <div>{s.email}</div>
                    <div className="text-[10px] text-slate-400">{s.phone}</div>
                  </td>
                  <td className="py-3.5">
                    <div>{s.city}, Nepal</div>
                    <div className="font-mono text-[10px] text-slate-400">{s.citizenshipNo}</div>
                  </td>
                  <td className="py-3.5 font-bold text-emerald-400">
                    {s.seeGpa}
                  </td>
                  <td className="py-3.5 font-bold text-emerald-400">
                    {s.nebGpa}
                  </td>
                  <td className="py-3.5">
                    <Badge variant="default" className="text-[10px]">
                      {s.applicationsCount} Applied
                    </Badge>
                  </td>
                  <td className="py-3.5 text-slate-400 text-[11px]">
                    {s.registeredAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
