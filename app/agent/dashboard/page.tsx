"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Coins,
  CheckCircle2,
  Copy,
  UserPlus,
  ShieldCheck,
  TrendingUp,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrencyINR, formatCurrencyNPR } from "@/lib/utils";

export default function AgentDashboardPage() {
  const [copied, setCopied] = useState(false);

  // Agent State
  const agent = {
    agencyName: "Himalayan Educational Pathways",
    contactPerson: "Ramesh Poudel",
    city: "Kathmandu",
    referralCode: "AGENT-KTM-01",
    approvalStatus: "APPROVED" as const,
    commissionRate: "5.00%",
  };

  const referralUrl = `https://studyindia.edu.np/register?ref=${agent.referralCode}`;

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Associated students (only this agent's referred students)
  const referredStudents = [
    {
      id: "std-1",
      name: "Suman Karki",
      city: "Kathmandu",
      course: "B.Tech Computer Science (AI & ML)",
      university: "Sharda University",
      appRef: "SI-2026-91024",
      status: "FORWARDED_TO_UNIVERSITY" as const,
      statusLabel: "Forwarded to University",
      statusVariant: "default" as const,
      eligibleCommissionINR: 11000,
      paymentStatus: "APPROVED" as const,
    },
    {
      id: "std-2",
      name: "Pooja Gurung",
      city: "Pokhara",
      course: "B.Sc in Nursing",
      university: "Sharda University",
      appRef: "SI-2026-91450",
      status: "OFFER_RECEIVED" as const,
      statusLabel: "Offer Received",
      statusVariant: "success" as const,
      eligibleCommissionINR: 9250,
      paymentStatus: "PAID" as const,
    },
    {
      id: "std-3",
      name: "Aman Shrestha",
      city: "Biratnagar",
      course: "B.Tech in Computer Science",
      university: "VIT Vellore",
      appRef: "SI-2026-92100",
      status: "UNDER_REVIEW" as const,
      statusLabel: "Counselor Review",
      statusVariant: "secondary" as const,
      eligibleCommissionINR: 14900,
      paymentStatus: "PENDING" as const,
    },
    {
      id: "std-4",
      name: "Anjali Thapa",
      city: "Butwal",
      course: "Bachelor of Pharmacy (B.Pharm)",
      university: "MAHE Manipal",
      appRef: "SI-2026-92415",
      status: "ENROLLED" as const,
      statusLabel: "Enrolled & Visa-Free Arrival",
      statusVariant: "success" as const,
      eligibleCommissionINR: 15500,
      paymentStatus: "PAID" as const,
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              {agent.agencyName}
            </h1>
            <Badge variant="success" className="text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              <span>Approved Partner</span>
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Authorized Representative: {agent.contactPerson} • {agent.city}, Nepal • Commission Rate: {agent.commissionRate}
          </p>
        </div>

        <Link href="/agent/refer">
          <Button size="sm" className="font-semibold text-xs gap-1.5 shadow-sm">
            <UserPlus className="w-4 h-4" />
            <span>Refer New Student</span>
          </Button>
        </Link>
      </div>

      {/* 2. Referral Code & Link Box */}
      <Card className="p-6 bg-emerald-900 text-white rounded-2xl shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
              Your Exclusive Referral Attribution
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black font-mono tracking-wider text-white">
                {agent.referralCode}
              </span>
            </div>
            <p className="text-xs text-emerald-100/90 leading-relaxed max-w-xl">
              Share this link or code with prospective students. Any student registration using your code automatically binds them to your consultancy dashboard for commission tracking.
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            <Button
              onClick={copyReferralLink}
              size="md"
              className="w-full sm:w-auto bg-white text-emerald-950 hover:bg-emerald-50 font-bold gap-2 text-xs"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Registration Link</span>
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-800 text-[11px] font-mono text-emerald-200 truncate">
          {referralUrl}
        </div>
      </Card>

      {/* 3. Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="p-5 border-slate-200/90 rounded-2xl bg-white space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Referred Students</span>
            <Users className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-heading">
            {referredStudents.length}
          </div>
          <p className="text-[11px] text-slate-400">Total pipeline across Nepal</p>
        </Card>

        <Card className="p-5 border-slate-200/90 rounded-2xl bg-white space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Offers & Enrolled</span>
            <FileCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-heading">
            3
          </div>
          <p className="text-[11px] text-emerald-700 font-medium">Qualified for commission</p>
        </Card>

        <Card className="p-5 border-slate-200/90 rounded-2xl bg-white space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Total Accrued (INR)</span>
            <Coins className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-heading">
            {formatCurrencyINR(50650)}
          </div>
          <p className="text-[11px] text-emerald-700">~{formatCurrencyNPR(50650)}</p>
        </Card>

        <Card className="p-5 border-slate-200/90 rounded-2xl bg-white space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Commission Paid</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-heading">
            {formatCurrencyINR(24750)}
          </div>
          <p className="text-[11px] text-slate-400">Wire transfer cleared</p>
        </Card>
      </div>

      {/* 4. Associated Student Pipeline Table */}
      <Card className="p-6 bg-white border-slate-200/90 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-heading">My Referred Students</CardTitle>
            <p className="text-xs text-slate-500">
              Only applications associated with code <strong>{agent.referralCode}</strong> are accessible.
            </p>
          </div>
          <Link href="/agent/students" className="text-xs text-emerald-700 font-semibold hover:underline">
            View full roster
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <th className="pb-3">Student Name</th>
                <th className="pb-3">Application Ref</th>
                <th className="pb-3">Course & University</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Eligible Commission</th>
                <th className="pb-3">Payment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {referredStudents.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 font-bold text-slate-800">
                    <div>{s.name}</div>
                    <div className="text-[10px] text-slate-400 font-normal">{s.city}, Nepal</div>
                  </td>
                  <td className="py-3.5 font-mono text-[11px] text-slate-600">
                    {s.appRef}
                  </td>
                  <td className="py-3.5">
                    <div className="font-medium text-slate-800">{s.course}</div>
                    <div className="text-[10px] text-slate-400">{s.university}</div>
                  </td>
                  <td className="py-3.5">
                    <Badge variant={s.statusVariant} className="text-[10px]">
                      {s.statusLabel}
                    </Badge>
                  </td>
                  <td className="py-3.5 font-bold text-slate-900">
                    {formatCurrencyINR(s.eligibleCommissionINR)}
                  </td>
                  <td className="py-3.5">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        s.paymentStatus === "PAID"
                          ? "bg-emerald-100 text-emerald-800"
                          : s.paymentStatus === "APPROVED"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {s.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* 5. Privacy & Rules Notice */}
      <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
        <div className="space-y-0.5 leading-relaxed text-[11px]">
          <strong>Security Isolation Policy:</strong> Agents cannot inspect other agents&apos; private student rosters, document archives, or commission transactions. Commission eligibility activates when the university records formal enrollment and semester fee remittance.
        </div>
      </div>
    </div>
  );
}
