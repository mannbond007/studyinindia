"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";

interface AgentRecord {
  id: string;
  agencyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  city: string;
  referralCode: string;
  approvalStatus: "APPROVED" | "PENDING" | "REJECTED";
  commissionRate: string;
  referredStudentsCount: number;
}

export default function AdminAgentsPage() {
  const [agents, setAgents] = useState<AgentRecord[]>([
    {
      id: "ag-1",
      agencyName: "Himalayan Educational Pathways",
      contactPerson: "Ramesh Poudel",
      email: "info@himalayanedu.com.np",
      phone: "+977 9801234567",
      city: "Kathmandu",
      referralCode: "AGENT-KTM-01",
      approvalStatus: "APPROVED",
      commissionRate: "5.00%",
      referredStudentsCount: 4,
    },
    {
      id: "ag-2",
      agencyName: "Annapurna Global Admissions",
      contactPerson: "Sita Gurung",
      email: "admissions@annapurnaglobal.np",
      phone: "+977 9856098765",
      city: "Pokhara",
      referralCode: "AGENT-PKR-02",
      approvalStatus: "PENDING",
      commissionRate: "5.00%",
      referredStudentsCount: 0,
    },
    {
      id: "ag-3",
      agencyName: "Morang Higher Ed Consultants",
      contactPerson: "Deepak Yadav",
      email: "contact@morangconsultancy.com",
      phone: "+977 9812345999",
      city: "Biratnagar",
      referralCode: "AGENT-BRT-03",
      approvalStatus: "PENDING",
      commissionRate: "5.00%",
      referredStudentsCount: 0,
    },
  ]);

  const [message, setMessage] = useState<string | null>(null);

  const handleUpdateStatus = (
    agentId: string,
    newStatus: "APPROVED" | "REJECTED"
  ) => {
    setAgents((prev) =>
      prev.map((a) => (a.id === agentId ? { ...a, approvalStatus: newStatus } : a))
    );
    setMessage(`Agent status updated to ${newStatus}.`);
    setTimeout(() => setMessage(null), 2500);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Partner Agent Management & Approvals
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Review consultancy applications, approve referral codes, and configure commission rates for educational agents in Nepal.
        </p>
      </div>

      {message && (
        <div className="p-4 rounded-xl bg-emerald-950 border border-emerald-700 text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{message}</span>
        </div>
      )}

      <Card className="p-6 bg-slate-800 border-slate-700 rounded-2xl shadow-sm space-y-4 text-white">
        <CardTitle className="text-lg font-heading text-white">
          Registered Partner Consultancies ({agents.length})
        </CardTitle>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-200">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <th className="pb-3">Consultancy</th>
                <th className="pb-3">Contact Person & Location</th>
                <th className="pb-3">Referral Code</th>
                <th className="pb-3">Rate</th>
                <th className="pb-3">Referred Count</th>
                <th className="pb-3">Approval Status</th>
                <th className="pb-3 text-right">Approval Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/60">
              {agents.map((a) => (
                <tr key={a.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="py-3.5">
                    <div className="font-bold text-white">{a.agencyName}</div>
                    <div className="text-[10px] text-slate-400">{a.email}</div>
                  </td>
                  <td className="py-3.5">
                    <div className="font-medium text-slate-200">{a.contactPerson}</div>
                    <div className="text-[10px] text-slate-400">{a.city}, Nepal • {a.phone}</div>
                  </td>
                  <td className="py-3.5 font-mono text-[11px] text-emerald-400 font-bold">
                    {a.referralCode}
                  </td>
                  <td className="py-3.5 font-bold text-slate-300">
                    {a.commissionRate}
                  </td>
                  <td className="py-3.5 text-slate-300">
                    {a.referredStudentsCount} students
                  </td>
                  <td className="py-3.5">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        a.approvalStatus === "APPROVED"
                          ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                          : a.approvalStatus === "PENDING"
                          ? "bg-amber-950 text-amber-300 border border-amber-800"
                          : "bg-red-950 text-red-400 border border-red-800"
                      }`}
                    >
                      {a.approvalStatus}
                    </span>
                  </td>
                  <td className="py-3.5 text-right space-x-2">
                    {a.approvalStatus !== "APPROVED" && (
                      <Button
                        size="sm"
                        onClick={() => handleUpdateStatus(a.id, "APPROVED")}
                        className="bg-emerald-600 hover:bg-emerald-700 text-[11px] h-8 font-semibold"
                      >
                        Approve Agent
                      </Button>
                    )}
                    {a.approvalStatus !== "REJECTED" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleUpdateStatus(a.id, "REJECTED")}
                        className="border-slate-700 text-slate-300 hover:bg-slate-800 text-[11px] h-8"
                      >
                        Reject
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
