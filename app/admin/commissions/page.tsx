"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { formatCurrencyINR, formatCurrencyNPR } from "@/lib/utils";

interface CommissionRecord {
  id: string;
  agencyName: string;
  referralCode: string;
  studentName: string;
  appRef: string;
  amountINR: number;
  status: "PENDING" | "APPROVED" | "PAID";
  paymentRef?: string;
}

export default function AdminCommissionsPage() {
  const [commissions, setCommissions] = useState<CommissionRecord[]>([
    {
      id: "comm-1",
      agencyName: "Himalayan Educational Pathways",
      referralCode: "AGENT-KTM-01",
      studentName: "Pooja Gurung",
      appRef: "SI-2026-91450",
      amountINR: 9250,
      status: "PAID",
      paymentRef: "HBL-NEPAL-TXN-88412",
    },
    {
      id: "comm-2",
      agencyName: "Himalayan Educational Pathways",
      referralCode: "AGENT-KTM-01",
      studentName: "Anjali Thapa",
      appRef: "SI-2026-92415",
      amountINR: 15500,
      status: "PAID",
      paymentRef: "NABIL-TXN-90214",
    },
    {
      id: "comm-3",
      agencyName: "Himalayan Educational Pathways",
      referralCode: "AGENT-KTM-01",
      studentName: "Suman Karki",
      appRef: "SI-2026-91024",
      amountINR: 11000,
      status: "APPROVED",
      paymentRef: "Batch scheduled for Monday",
    },
    {
      id: "comm-4",
      agencyName: "Himalayan Educational Pathways",
      referralCode: "AGENT-KTM-01",
      studentName: "Aman Shrestha",
      appRef: "SI-2026-92100",
      amountINR: 14900,
      status: "PENDING",
    },
  ]);

  const [message, setMessage] = useState<string | null>(null);

  const handleApprove = (commId: string) => {
    setCommissions((prev) =>
      prev.map((c) => (c.id === commId ? { ...c, status: "APPROVED" } : c))
    );
    setMessage("Commission record approved for disbursement.");
    setTimeout(() => setMessage(null), 2500);
  };

  const handleDisburse = (commId: string) => {
    const txn = prompt("Enter Bank Transfer Reference (e.g. NABIL-WIRE-XXXX):", "NABIL-WIRE-99214");
    if (!txn) return;

    setCommissions((prev) =>
      prev.map((c) => (c.id === commId ? { ...c, status: "PAID", paymentRef: txn } : c))
    );
    setMessage(`Payout recorded with transaction ref ${txn}.`);
    setTimeout(() => setMessage(null), 2500);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Commission Approvals & Disbursals
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Review qualified university enrollments, approve partner referral fees, and record bank wire transaction codes.
        </p>
      </div>

      {message && (
        <div className="p-4 rounded-xl bg-emerald-950 border border-emerald-700 text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{message}</span>
        </div>
      )}

      <Card className="p-6 bg-slate-800 border-slate-700 rounded-2xl shadow-sm space-y-4 text-white">
        <CardTitle className="text-base font-heading text-white">
          Agent Commission Queue
        </CardTitle>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-200">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <th className="pb-3">Agency & Code</th>
                <th className="pb-3">Student & App Ref</th>
                <th className="pb-3">Eligible Amount</th>
                <th className="pb-3">Payment Status</th>
                <th className="pb-3">Transaction Code</th>
                <th className="pb-3 text-right">Administrative Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/60">
              {commissions.map((c) => (
                <tr key={c.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="py-3.5">
                    <div className="font-bold text-white">{c.agencyName}</div>
                    <div className="font-mono text-[10px] text-emerald-400">{c.referralCode}</div>
                  </td>
                  <td className="py-3.5">
                    <div className="font-medium text-slate-200">{c.studentName}</div>
                    <div className="font-mono text-[10px] text-slate-400">{c.appRef}</div>
                  </td>
                  <td className="py-3.5">
                    <div className="font-bold text-white">{formatCurrencyINR(c.amountINR)}</div>
                    <div className="text-[10px] text-emerald-400">~{formatCurrencyNPR(c.amountINR)}</div>
                  </td>
                  <td className="py-3.5">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        c.status === "PAID"
                          ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                          : c.status === "APPROVED"
                          ? "bg-blue-950 text-blue-300 border border-blue-800"
                          : "bg-slate-700 text-slate-300"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3.5 font-mono text-[11px] text-slate-400">
                    {c.paymentRef || "—"}
                  </td>
                  <td className="py-3.5 text-right space-x-2">
                    {c.status === "PENDING" && (
                      <Button
                        size="sm"
                        onClick={() => handleApprove(c.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-[11px] h-8 font-semibold"
                      >
                        Approve Payout
                      </Button>
                    )}
                    {c.status === "APPROVED" && (
                      <Button
                        size="sm"
                        onClick={() => handleDisburse(c.id)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-[11px] h-8 font-semibold"
                      >
                        Record Bank Payout
                      </Button>
                    )}
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
