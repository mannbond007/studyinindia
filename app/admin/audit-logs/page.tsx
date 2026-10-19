"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";

export default function AdminAuditLogsPage() {
  const [search, setSearch] = useState("");

  const logs = [
    {
      id: "log-101",
      action: "DOCUMENT_CORRECTION_REQUESTED",
      actor: "admissions@studyindia.edu.np",
      entity: "Application",
      entityId: "SI-2026-89730",
      details: "Flagged blurry Class 12 transcript for replacement.",
      ipAddress: "27.34.20.14 (Kathmandu, Nepal)",
      timestamp: "Oct 11, 2026 12:45:10",
    },
    {
      id: "log-102",
      action: "APPLICATION_FORWARDED",
      actor: "admissions@studyindia.edu.np",
      entity: "Application",
      entityId: "SI-2026-91024",
      details: "Submitted verified dossier to Sharda University Registrar.",
      ipAddress: "27.34.20.14 (Kathmandu, Nepal)",
      timestamp: "Oct 11, 2026 09:30:22",
    },
    {
      id: "log-103",
      action: "COMMISSION_DISBURSED",
      actor: "finance@studyindia.edu.np",
      entity: "Commission",
      entityId: "COMM-88412",
      details: "Disbursed commission ₹15,500 INR via Nabil Bank Wire (NABIL-TXN-90214).",
      ipAddress: "103.10.29.5 (Lalitpur, Nepal)",
      timestamp: "Oct 10, 2026 16:15:00",
    },
    {
      id: "log-104",
      action: "AGENT_APPROVAL_GRANTED",
      actor: "superadmin@studyindia.edu.np",
      entity: "AgentProfile",
      entityId: "AGENT-KTM-01",
      details: "Approved agency Himalayan Educational Pathways with 5.00% standard commission.",
      ipAddress: "103.10.29.5 (Lalitpur, Nepal)",
      timestamp: "Oct 08, 2026 11:00:15",
    },
    {
      id: "log-105",
      action: "DOCUMENT_VERIFIED",
      actor: "admissions@studyindia.edu.np",
      entity: "Document",
      entityId: "DOC-SEE-89412",
      details: "SEE marksheet validated against NEB/SEE grading criteria.",
      ipAddress: "27.34.20.14 (Kathmandu, Nepal)",
      timestamp: "Oct 08, 2026 10:20:44",
    },
  ];

  const filtered = logs.filter(
    (l) =>
      l.action.toLowerCase().includes(search.toLowerCase()) ||
      l.actor.toLowerCase().includes(search.toLowerCase()) ||
      l.entityId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Administrative Audit Trail
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Immutable historical log of all staff approvals, document verification choices, and commission transactions.
        </p>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          placeholder="Filter by action name, actor email, or entity ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <Card className="p-6 bg-slate-800 border-slate-700 rounded-2xl shadow-sm space-y-4 text-white">
        <CardTitle className="text-base font-heading text-white">
          System Action Log Records ({filtered.length})
        </CardTitle>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-200">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <th className="pb-3">Timestamp</th>
                <th className="pb-3">Action Event</th>
                <th className="pb-3">Staff Operator</th>
                <th className="pb-3">Target Entity</th>
                <th className="pb-3">Audit Details & IP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/60 font-mono text-[11px]">
              {filtered.map((log) => (
                <tr key={log.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="py-3.5 text-slate-400 whitespace-nowrap">
                    {log.timestamp}
                  </td>
                  <td className="py-3.5">
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-emerald-400 border border-slate-700 text-[10px] font-bold">
                      {log.action}
                    </span>
                  </td>
                  <td className="py-3.5 text-slate-300 font-sans">
                    {log.actor}
                  </td>
                  <td className="py-3.5 font-bold text-white">
                    {log.entity}: {log.entityId}
                  </td>
                  <td className="py-3.5 text-slate-400 font-sans">
                    <div>{log.details}</div>
                    <div className="text-[10px] font-mono text-slate-500">{log.ipAddress}</div>
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
