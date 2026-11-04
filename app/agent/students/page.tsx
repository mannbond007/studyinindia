"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AgentStudentsRosterPage() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: "std-1",
      name: "Faith Wanjiku",
      email: "faith.wanjiku@gmail.com",
      phone: "+254 712 345678",
      city: "Nairobi, Kenya",
      course: "B.Tech Computer Science (AI & ML)",
      university: "Sharda University",
      appRef: "SI-2026-91024",
      status: "FORWARDED_TO_UNIVERSITY" as const,
      statusLabel: "Forwarded to University",
      statusVariant: "default" as const,
      seeGpa: "3.75",
      nebGpa: "3.60",
    },
    {
      id: "std-2",
      name: "Tahmid Hasan",
      email: "tahmid.hasan@gmail.com",
      phone: "+880 1711 234567",
      city: "Dhaka, Bangladesh",
      course: "B.Sc in Nursing",
      university: "Sharda University",
      appRef: "SI-2026-91450",
      status: "OFFER_RECEIVED" as const,
      statusLabel: "Offer Received",
      statusVariant: "success" as const,
      seeGpa: "3.85",
      nebGpa: "3.70",
    },
    {
      id: "std-3",
      name: "Chinedu Okonkwo",
      email: "chinedu.okonkwo@gmail.com",
      phone: "+234 803 1234567",
      city: "Lagos, Nigeria",
      course: "B.Tech in Computer Science",
      university: "VIT Vellore",
      appRef: "SI-2026-92100",
      status: "UNDER_REVIEW" as const,
      statusLabel: "Counselor Review",
      statusVariant: "secondary" as const,
      seeGpa: "3.80",
      nebGpa: "3.65",
    },
    {
      id: "std-4",
      name: "Suman Karki",
      email: "suman.karki@gmail.com",
      phone: "+977 9801239876",
      city: "Kathmandu, Nepal",
      course: "Bachelor of Pharmacy (B.Pharm)",
      university: "MAHE Manipal",
      appRef: "SI-2026-92415",
      status: "ENROLLED" as const,
      statusLabel: "Enrolled",
      statusVariant: "success" as const,
      seeGpa: "3.60",
      nebGpa: "3.45",
    },
  ];

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.appRef.toLowerCase().includes(search.toLowerCase()) ||
      s.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Referred Students Directory
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Private roster of international applicants registered via code <strong>AGENT-GLB-01</strong>.
          </p>
        </div>
        <Link href="/agent/refer">
          <Button size="sm" className="font-semibold text-xs gap-1.5 shadow-sm">
            <UserPlus className="w-4 h-4" />
            <span>Refer Student</span>
          </Button>
        </Link>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          placeholder="Search by student name, application reference, or country/city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>

      {/* Students List */}
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((s) => (
          <Card
            key={s.id}
            className="p-5 bg-white border-slate-200/90 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-slate-900 font-heading">
                  {s.name}
                </h3>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {s.appRef}
                </span>
                <Badge variant={s.statusVariant} className="text-[10px]">
                  {s.statusLabel}
                </Badge>
              </div>

              <p className="text-xs text-slate-600">
                {s.course} • <span className="text-slate-400">{s.university}</span>
              </p>

              <div className="text-[11px] text-slate-500 pt-1 flex gap-4">
                <span>Country / City: {s.city}</span>
                <span>Contact: {s.phone}</span>
                <span>Grade 12 GPA: {s.nebGpa}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
