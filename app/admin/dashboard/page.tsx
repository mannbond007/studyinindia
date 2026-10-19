"use client";

import React from "react";
import Link from "next/link";
import {
  FileCheck2,
  Users,
  Building,
  Coins,
  AlertTriangle,
  ShieldCheck,
  History,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrencyINR, formatCurrencyNPR } from "@/lib/utils";

export default function AdminDashboardPage() {
  const pendingApplications = [
    {
      id: "app-102",
      ref: "SI-2026-89730",
      studentName: "Bibek Thapa",
      university: "Vellore Institute of Technology (VIT)",
      course: "B.Tech Computer Science",
      status: "ACTION_REQUIRED",
      statusLabel: "Correction Requested (Blurred Marksheet)",
      agentName: "Direct Student",
      submittedDate: "Oct 10, 2026",
    },
    {
      id: "app-101",
      ref: "SI-2026-89412",
      studentName: "Bibek Thapa",
      university: "Sharda University",
      course: "B.Tech CSE (AI & ML)",
      status: "UNDER_REVIEW",
      statusLabel: "Verification Ready",
      agentName: "Direct Student",
      submittedDate: "Oct 08, 2026",
    },
    {
      id: "app-104",
      ref: "SI-2026-91024",
      studentName: "Suman Karki",
      university: "Sharda University",
      course: "B.Tech CSE (AI & ML)",
      status: "FORWARDED_TO_UNIVERSITY",
      statusLabel: "Forwarded to University",
      agentName: "Himalayan Edu Pathways (AGENT-KTM-01)",
      submittedDate: "Oct 05, 2026",
    },
  ];

  const recentAuditLogs = [
    {
      id: "log-1",
      action: "CORRECTION_REQUESTED",
      actor: "admissions@studyindia.edu.np",
      target: "Application SI-2026-89730",
      details: "Flagged blurry Class 12 transcript for replacement.",
      time: "2 hours ago",
    },
    {
      id: "log-2",
      action: "APPLICATION_FORWARDED",
      actor: "admissions@studyindia.edu.np",
      target: "Application SI-2026-91024",
      details: "Submitted verified dossier to Sharda University Registrar.",
      time: "5 hours ago",
    },
    {
      id: "log-3",
      action: "COMMISSION_PAID",
      actor: "finance@studyindia.edu.np",
      target: "Agent Himalayan Edu (₹15,500)",
      details: "Disbursed commission via Bank Wire (NABIL-TXN-90214).",
      time: "Yesterday",
    },
    {
      id: "log-4",
      action: "AGENT_APPROVED",
      actor: "superadmin@studyindia.edu.np",
      target: "Agency Himalayan Educational Pathways",
      details: "Approved agency license and assigned code AGENT-KTM-01.",
      time: "3 days ago",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Admissions Control Console
            </h1>
            <Badge variant="warning" className="text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              <span>Admin Privileges Active</span>
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Internal Operations • Document Verification • Agent Referrals • University Submissions
          </p>
        </div>

        <div className="flex gap-3">
          <Link href="/admin/applications">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs gap-1.5">
              <FileCheck2 className="w-4 h-4" />
              <span>Review Applications</span>
            </Button>
          </Link>
          <Link href="/admin/agents">
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-200 hover:bg-slate-700 text-xs gap-1.5">
              <Building className="w-4 h-4" />
              <span>Agent Approvals</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="p-5 bg-slate-800 border-slate-700 rounded-2xl space-y-2 text-white">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Total Registered Students</span>
            <Users className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold font-heading text-white">48</div>
          <p className="text-[11px] text-slate-400">Across 7 provinces of Nepal</p>
        </Card>

        <Card className="p-5 bg-slate-800 border-slate-700 rounded-2xl space-y-2 text-white">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Pending Verifications</span>
            <AlertTriangle className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-extrabold font-heading text-amber-400">6</div>
          <p className="text-[11px] text-slate-400">Requires counselor action</p>
        </Card>

        <Card className="p-5 bg-slate-800 border-slate-700 rounded-2xl space-y-2 text-white">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Forwarded to Universities</span>
            <GraduationCap className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-3xl font-extrabold font-heading text-white">18</div>
          <p className="text-[11px] text-slate-400">Formal applications dispatched</p>
        </Card>

        <Card className="p-5 bg-slate-800 border-slate-700 rounded-2xl space-y-2 text-white">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Commission Payable (INR)</span>
            <Coins className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold font-heading text-emerald-400">
            {formatCurrencyINR(35900)}
          </div>
          <p className="text-[11px] text-slate-400">~{formatCurrencyNPR(35900)}</p>
        </Card>
      </div>

      {/* Applications Review Queue */}
      <Card className="p-6 bg-slate-800 border-slate-700 rounded-2xl shadow-sm space-y-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-heading text-white">
              Application Verification Backlog
            </CardTitle>
            <p className="text-xs text-slate-400">
              Verify SEE & NEB marksheets, request corrections, or forward directly to universities.
            </p>
          </div>
          <Link href="/admin/applications" className="text-xs text-emerald-400 hover:underline font-semibold">
            Manage all applications →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-200">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <th className="pb-3">Applicant & Ref</th>
                <th className="pb-3">Course & University</th>
                <th className="pb-3">Referred By</th>
                <th className="pb-3">Current Status</th>
                <th className="pb-3 text-right">Administrative Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/60">
              {pendingApplications.map((app) => (
                <tr key={app.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="py-3.5">
                    <div className="font-bold text-white">{app.studentName}</div>
                    <div className="font-mono text-[10px] text-slate-400">{app.ref}</div>
                  </td>
                  <td className="py-3.5">
                    <div className="font-medium text-slate-200">{app.course}</div>
                    <div className="text-[10px] text-slate-400">{app.university}</div>
                  </td>
                  <td className="py-3.5 text-slate-300 text-[11px]">
                    {app.agentName}
                  </td>
                  <td className="py-3.5">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        app.status === "ACTION_REQUIRED"
                          ? "bg-amber-950 text-amber-300 border border-amber-800"
                          : app.status === "FORWARDED_TO_UNIVERSITY"
                          ? "bg-blue-950 text-blue-300 border border-blue-800"
                          : "bg-slate-700 text-slate-200"
                      }`}
                    >
                      {app.statusLabel}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <Link href="/admin/applications">
                      <Button size="sm" variant="secondary" className="text-xs font-semibold">
                        Inspect Dossier
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Audit Log Stream */}
      <Card className="p-6 bg-slate-800 border-slate-700 rounded-2xl shadow-sm space-y-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-emerald-400" />
            <div>
              <CardTitle className="text-base font-heading text-white">
                Live Administrative Audit Trail
              </CardTitle>
              <p className="text-xs text-slate-400">
                Immutable logs of staff operations, status changes, and commission records.
              </p>
            </div>
          </div>
          <Link href="/admin/audit-logs" className="text-xs text-emerald-400 hover:underline font-semibold">
            View full log archive →
          </Link>
        </div>

        <div className="space-y-3 divide-y divide-slate-700/60 pt-2">
          {recentAuditLogs.map((log) => (
            <div key={log.id} className="pt-3 first:pt-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900 text-emerald-400 border border-slate-700">
                    {log.action}
                  </span>
                  <span className="font-bold text-slate-200">{log.target}</span>
                </div>
                <p className="text-[11px] text-slate-400">{log.details}</p>
                <div className="text-[10px] text-slate-500">By {log.actor}</div>
              </div>
              <span className="text-[11px] text-slate-500 shrink-0">{log.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
