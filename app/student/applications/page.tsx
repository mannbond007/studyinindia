"use client";

import React from "react";
import Link from "next/link";
import { Building, PlusCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StudentApplicationsListPage() {
  const applications = [
    {
      id: "app-101",
      ref: "SI-2026-89412",
      university: "Sharda University",
      course: "B.Tech in Computer Science & Engineering (AI & ML)",
      status: "UNDER_REVIEW",
      statusLabel: "Under Review by Counselor",
      statusVariant: "default" as const,
      submittedDate: "Oct 08, 2026",
      actionNeeded: false,
    },
    {
      id: "app-102",
      ref: "SI-2026-89730",
      university: "Vellore Institute of Technology (VIT)",
      course: "B.Tech in Computer Science and Engineering",
      status: "ACTION_REQUIRED",
      statusLabel: "Correction Requested",
      statusVariant: "warning" as const,
      submittedDate: "Oct 10, 2026",
      actionNeeded: true,
    },
    {
      id: "app-103",
      ref: "SI-2026-90114",
      university: "Chandigarh University",
      course: "Bachelor of Computer Applications (BCA)",
      status: "DRAFT",
      statusLabel: "Draft Incomplete",
      statusVariant: "secondary" as const,
      submittedDate: "Draft",
      actionNeeded: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            My Applications
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Track submitted applications, verification status, and university admission decisions.
          </p>
        </div>
        <Link href="/student/apply">
          <Button size="sm" className="font-semibold text-xs gap-1.5 shadow-sm">
            <PlusCircle className="w-4 h-4" />
            <span>Apply to New Course</span>
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {applications.map((app) => (
          <Card
            key={app.id}
            className="p-6 bg-white border-slate-200/90 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-emerald-300 transition-colors"
          >
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                  {app.ref}
                </span>
                <Badge variant={app.statusVariant} className="text-xs">
                  {app.statusLabel}
                </Badge>
                <span className="text-[11px] text-slate-400">
                  Submitted: {app.submittedDate}
                </span>
              </div>

              <h3 className="font-bold text-base text-slate-900 font-heading">
                {app.course}
              </h3>

              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-emerald-600" />
                <span>{app.university}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link href={`/student/applications/${app.id}`}>
                <Button variant="outline" size="sm" className="text-xs font-semibold gap-1">
                  <span>View Details & Actions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
