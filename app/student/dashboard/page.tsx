"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Compass,
  PlusCircle,
  Building,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StudentDashboardPage() {
  // Realistic student state
  const student = {
    name: "Bibek Thapa",
    city: "Kathmandu",
    seeGpa: "3.65",
    nebStream: "Science (Physical Group)",
    nebGpa: "3.42",
    profileCompletionPercent: 85,
  };

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
      statusLabel: "Action Required: Clearer +2 Marksheet",
      statusVariant: "warning" as const,
      submittedDate: "Oct 10, 2026",
      actionNeeded: true,
      actionMessage: "The uploaded copy of Class 12 transcript was slightly blurred on the Grade column. Please upload a clear scan.",
    },
    {
      id: "app-103",
      ref: "SI-2026-90114",
      university: "Chandigarh University",
      course: "Bachelor of Computer Applications (BCA)",
      status: "DRAFT",
      statusLabel: "Draft Incomplete",
      statusVariant: "secondary" as const,
      submittedDate: "Incomplete",
      actionNeeded: false,
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. Welcome Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Namaste, {student.name}!
            </h1>
            <Badge variant="default" className="text-xs font-semibold">
              Class 12 Passed
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Kathmandu, Nepal • NEB Stream: {student.nebStream} (GPA {student.nebGpa})
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="/courses">
            <Button variant="outline" size="sm" className="font-semibold text-xs gap-1.5">
              <Compass className="w-4 h-4 text-emerald-700" />
              <span>Explore Programs</span>
            </Button>
          </Link>
          <Link href="/student/apply">
            <Button size="sm" className="font-semibold text-xs gap-1.5 shadow-sm">
              <PlusCircle className="w-4 h-4" />
              <span>Start New Application</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* 2. Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="p-5 border-slate-200/90 rounded-2xl bg-white space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Total Applications</span>
            <FileText className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-heading">
            {applications.length}
          </div>
          <p className="text-[11px] text-slate-400">2 Submitted, 1 Draft</p>
        </Card>

        <Card className="p-5 border-amber-200 bg-amber-50/50 rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-xs text-amber-800">
            <span className="font-semibold">Action Required</span>
            <AlertTriangle className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-extrabold text-amber-950 font-heading">
            1
          </div>
          <p className="text-[11px] text-amber-800">Document correction requested</p>
        </Card>

        <Card className="p-5 border-slate-200/90 rounded-2xl bg-white space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Profile Completion</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-heading">
            {student.profileCompletionPercent}%
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-600 h-full w-[85%]" />
          </div>
        </Card>

        <Card className="p-5 border-slate-200/90 rounded-2xl bg-white space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Admissions Intakes</span>
            <Calendar className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-heading">
            Fall 2026
          </div>
          <p className="text-[11px] text-emerald-700 font-medium">SAARC & Intl. seats active</p>
        </Card>
      </div>

      {/* 3. Action Required Alert Box */}
      {applications.some((a) => a.actionNeeded) && (
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-bold text-sm">
                Action Required on Application {applications.find((a) => a.actionNeeded)?.ref}
              </h3>
              <p className="text-xs text-amber-900 leading-relaxed max-w-2xl">
                {applications.find((a) => a.actionNeeded)?.actionMessage}
              </p>
            </div>
          </div>
          <Link href={`/student/applications/${applications.find((a) => a.actionNeeded)?.id}`}>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white shrink-0 font-semibold text-xs">
              Upload Correction
            </Button>
          </Link>
        </div>
      )}

      {/* 4. Recent Applications Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            Your Application Tracker
          </h2>
          <Link href="/student/applications" className="text-xs font-semibold text-emerald-700 hover:underline">
            View all history
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
                    <span>Manage Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 5. Recommended Next Steps & Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-white border-slate-200/90 rounded-2xl space-y-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
            1
          </div>
          <CardTitle className="text-base font-heading">Complete Document Vault</CardTitle>
          <p className="text-xs text-slate-500 leading-relaxed">
            Ensure your original SEE Character Certificate and Nepali Citizenship card scans are uploaded to expedite offer letters.
          </p>
          <Link href="/student/profile" className="inline-block pt-1">
            <span className="text-xs text-emerald-700 font-semibold hover:underline">
              Review documents →
            </span>
          </Link>
        </Card>

        <Card className="p-6 bg-white border-slate-200/90 rounded-2xl space-y-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
            2
          </div>
          <CardTitle className="text-base font-heading">MoEST NOC Roadmap</CardTitle>
          <p className="text-xs text-slate-500 leading-relaxed">
            Read our step-by-step checklist on preparing for the Ministry of Education No Objection Certificate in Sanothimi.
          </p>
          <Link href="/study-in-india" className="inline-block pt-1">
            <span className="text-xs text-emerald-700 font-semibold hover:underline">
              Read NOC guide →
            </span>
          </Link>
        </Card>

        <Card className="p-6 bg-white border-slate-200/90 rounded-2xl space-y-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
            3
          </div>
          <CardTitle className="text-base font-heading">Need Admissions Advice?</CardTitle>
          <p className="text-xs text-slate-500 leading-relaxed">
            Connect directly with our Kathmandu advisory desk for course syllabus reviews, fee installment plans, and hostel booking.
          </p>
          <Link href="/contact" className="inline-block pt-1">
            <span className="text-xs text-emerald-700 font-semibold hover:underline">
              Contact advisor →
            </span>
          </Link>
        </Card>
      </div>
    </div>
  );
}
