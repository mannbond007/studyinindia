"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { formatCurrencyINR, formatCurrencyNPR } from "@/lib/utils";

export default function AgentCommissionsPage() {
  const commissions = [
    {
      id: "comm-1",
      studentName: "Pooja Gurung",
      appRef: "SI-2026-91450",
      university: "Sharda University",
      course: "B.Sc Nursing",
      annualFeeINR: 185000,
      rate: "5.00%",
      amountINR: 9250,
      status: "PAID" as const,
      paymentRef: "HBL-NEPAL-TXN-88412",
      paidDate: "Oct 02, 2026",
    },
    {
      id: "comm-2",
      studentName: "Anjali Thapa",
      appRef: "SI-2026-92415",
      university: "MAHE Manipal",
      course: "B.Pharm",
      annualFeeINR: 310000,
      rate: "5.00%",
      amountINR: 15500,
      status: "PAID" as const,
      paymentRef: "NABIL-TXN-90214",
      paidDate: "Sep 28, 2026",
    },
    {
      id: "comm-3",
      studentName: "Suman Karki",
      appRef: "SI-2026-91024",
      university: "Sharda University",
      course: "B.Tech CSE (AI & ML)",
      annualFeeINR: 220000,
      rate: "5.00%",
      amountINR: 11000,
      status: "APPROVED" as const,
      paymentRef: "Scheduled for next payout batch",
      paidDate: "Pending disbursement",
    },
    {
      id: "comm-4",
      studentName: "Aman Shrestha",
      appRef: "SI-2026-92100",
      university: "VIT Vellore",
      course: "B.Tech CSE",
      annualFeeINR: 298000,
      rate: "5.00%",
      amountINR: 14900,
      status: "PENDING" as const,
      paymentRef: "Awaiting university enrollment confirmation",
      paidDate: "Unprocessed",
    },
  ];

  const totalEarnedINR = commissions.reduce((sum, c) => sum + c.amountINR, 0);
  const totalPaidINR = commissions
    .filter((c) => c.status === "PAID")
    .reduce((sum, c) => sum + c.amountINR, 0);
  const pendingINR = totalEarnedINR - totalPaidINR;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
          Commission Ledger & Payments
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Track verified partner revenue, qualified enrollment milestones, and official bank payouts.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Card className="p-6 bg-white border-slate-200/90 rounded-2xl space-y-1">
          <div className="text-xs text-slate-500">Total Eligible Accrual</div>
          <div className="text-2xl font-black text-slate-900 font-heading">
            {formatCurrencyINR(totalEarnedINR)}
          </div>
          <p className="text-[11px] text-emerald-700 font-medium">
            ~{formatCurrencyNPR(totalEarnedINR)}
          </p>
        </Card>

        <Card className="p-6 bg-emerald-50/50 border-emerald-200 rounded-2xl space-y-1">
          <div className="text-xs text-emerald-800 font-semibold">Total Disbursed</div>
          <div className="text-2xl font-black text-emerald-950 font-heading">
            {formatCurrencyINR(totalPaidINR)}
          </div>
          <p className="text-[11px] text-emerald-700 font-medium">
            ~{formatCurrencyNPR(totalPaidINR)}
          </p>
        </Card>

        <Card className="p-6 bg-amber-50/50 border-amber-200 rounded-2xl space-y-1">
          <div className="text-xs text-amber-800 font-semibold">Pending Processing</div>
          <div className="text-2xl font-black text-amber-950 font-heading">
            {formatCurrencyINR(pendingINR)}
          </div>
          <p className="text-[11px] text-amber-700 font-medium">
            ~{formatCurrencyNPR(pendingINR)}
          </p>
        </Card>
      </div>

      {/* Commission Rules Box */}
      <Card className="p-6 bg-slate-50 border-slate-200 rounded-2xl space-y-3 text-xs text-slate-700">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Institutional Commission Qualification Rules</span>
        </div>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed text-[11px] text-slate-600">
          <li>Commission applies only to verified applications submitted with your valid agency referral code.</li>
          <li>Qualifying milestone: Student must obtain an official offer letter and remit first-semester tuition directly to the university account.</li>
          <li>Payout frequency: Disbursed bi-weekly via standard bank wire transfer to the agency bank account registered in Nepal.</li>
        </ul>
      </Card>

      {/* Ledger Table */}
      <Card className="p-6 bg-white border-slate-200/90 rounded-2xl shadow-sm space-y-4">
        <CardTitle className="text-lg font-heading">Itemized Commission Transactions</CardTitle>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <th className="pb-3">Student & Ref</th>
                <th className="pb-3">Course & University</th>
                <th className="pb-3">Tuition Fee</th>
                <th className="pb-3">Rate</th>
                <th className="pb-3">Commission (INR / NPR)</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Payment Reference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {commissions.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5">
                    <div className="font-bold text-slate-800">{c.studentName}</div>
                    <div className="font-mono text-[10px] text-slate-400">{c.appRef}</div>
                  </td>
                  <td className="py-3.5">
                    <div className="font-medium text-slate-800">{c.course}</div>
                    <div className="text-[10px] text-slate-400">{c.university}</div>
                  </td>
                  <td className="py-3.5 text-slate-700">
                    {formatCurrencyINR(c.annualFeeINR)}
                  </td>
                  <td className="py-3.5 font-semibold text-slate-700">
                    {c.rate}
                  </td>
                  <td className="py-3.5">
                    <div className="font-bold text-slate-900">{formatCurrencyINR(c.amountINR)}</div>
                    <div className="text-[10px] text-emerald-700">~{formatCurrencyNPR(c.amountINR)}</div>
                  </td>
                  <td className="py-3.5">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        c.status === "PAID"
                          ? "bg-emerald-100 text-emerald-800"
                          : c.status === "APPROVED"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-[11px] text-slate-500 font-mono">
                    {c.paymentRef}
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
