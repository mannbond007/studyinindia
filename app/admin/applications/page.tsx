"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AdminApp {
  id: string;
  ref: string;
  studentName: string;
  email: string;
  phone: string;
  university: string;
  course: string;
  currentStatus: string;
  seeGpa: string;
  nebGpa: string;
  submittedAt: string;
  documents: {
    id: string;
    type: string;
    fileName: string;
    status: "VERIFIED" | "PENDING" | "CORRECTION_REQUESTED";
    note?: string;
  }[];
}

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<AdminApp[]>([
    {
      id: "app-102",
      ref: "SI-2026-89730",
      studentName: "Bibek Thapa",
      email: "bibek.thapa@gmail.com",
      phone: "+977 9801234567",
      university: "Vellore Institute of Technology (VIT)",
      course: "B.Tech Computer Science and Engineering",
      currentStatus: "ACTION_REQUIRED",
      seeGpa: "3.65",
      nebGpa: "3.45",
      submittedAt: "Oct 10, 2026",
      documents: [
        { id: "d1", type: "SEE Marksheet", fileName: "SEE_Marksheet_BibekThapa.pdf", status: "VERIFIED" },
        { id: "d2", type: "NEB Class 12 Transcript", fileName: "NEB_Transcript_BibekThapa.pdf", status: "CORRECTION_REQUESTED", note: "Blurred Grade column. Please upload clear scan." },
        { id: "d3", type: "Citizenship Card", fileName: "Nepali_Citizenship_Card.pdf", status: "VERIFIED" },
        { id: "d4", type: "Student Photo", fileName: "Passport_Photo_WhiteBg.jpg", status: "VERIFIED" },
      ],
    },
    {
      id: "app-101",
      ref: "SI-2026-89412",
      studentName: "Bibek Thapa",
      email: "bibek.thapa@gmail.com",
      phone: "+977 9801234567",
      university: "Sharda University",
      course: "B.Tech in Computer Science & Engineering (AI & ML)",
      currentStatus: "UNDER_REVIEW",
      seeGpa: "3.65",
      nebGpa: "3.45",
      submittedAt: "Oct 08, 2026",
      documents: [
        { id: "d1", type: "SEE Marksheet", fileName: "SEE_Marksheet_BibekThapa.pdf", status: "VERIFIED" },
        { id: "d2", type: "NEB Class 12 Transcript", fileName: "NEB_Transcript_BibekThapa.pdf", status: "PENDING" },
        { id: "d3", type: "Citizenship Card", fileName: "Nepali_Citizenship_Card.pdf", status: "VERIFIED" },
        { id: "d4", type: "Student Photo", fileName: "Passport_Photo_WhiteBg.jpg", status: "VERIFIED" },
      ],
    },
    {
      id: "app-104",
      ref: "SI-2026-91024",
      studentName: "Suman Karki",
      email: "suman.karki@gmail.com",
      phone: "+977 9841234567",
      university: "Sharda University",
      course: "B.Tech in Computer Science (AI & ML)",
      currentStatus: "FORWARDED_TO_UNIVERSITY",
      seeGpa: "3.55",
      nebGpa: "3.30",
      submittedAt: "Oct 05, 2026",
      documents: [
        { id: "d1", type: "SEE Marksheet", fileName: "SEE_SumanKarki.pdf", status: "VERIFIED" },
        { id: "d2", type: "NEB Class 12 Transcript", fileName: "NEB_SumanKarki.pdf", status: "VERIFIED" },
        { id: "d3", type: "Citizenship Card", fileName: "Citizenship_Suman.pdf", status: "VERIFIED" },
        { id: "d4", type: "Student Photo", fileName: "Photo_Suman.jpg", status: "VERIFIED" },
      ],
    },
  ]);

  const [selectedApp, setSelectedApp] = useState<AdminApp>(applications[0]);
  const [correctionNote, setCorrectionNote] = useState("");
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const handleVerifyDocument = (docId: string) => {
    setSelectedApp((prev) => ({
      ...prev,
      documents: prev.documents.map((d) =>
        d.id === docId ? { ...d, status: "VERIFIED", note: "Approved by Registrar" } : d
      ),
    }));
    setActionSuccess("Document verified successfully.");
    setTimeout(() => setActionSuccess(null), 2500);
  };

  const handleRequestCorrection = (docId: string) => {
    if (!correctionNote) {
      alert("Please enter a note explaining what correction is needed.");
      return;
    }

    setSelectedApp((prev) => ({
      ...prev,
      currentStatus: "ACTION_REQUIRED",
      documents: prev.documents.map((d) =>
        d.id === docId
          ? { ...d, status: "CORRECTION_REQUESTED", note: correctionNote }
          : d
      ),
    }));
    setCorrectionNote("");
    setActionSuccess("Correction request dispatched to student dashboard.");
    setTimeout(() => setActionSuccess(null), 2500);
  };

  const handleTransitionStatus = (newStatus: string) => {
    setSelectedApp((prev) => ({ ...prev, currentStatus: newStatus }));
    setApplications((prev) =>
      prev.map((a) => (a.id === selectedApp.id ? { ...a, currentStatus: newStatus } : a))
    );
    setActionSuccess(`Application status changed to ${newStatus}.`);
    setTimeout(() => setActionSuccess(null), 2500);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Application & Document Review Console
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Inspect student credentials, verify marksheet authenticity, and transmit approved files to university registrars.
        </p>
      </div>

      {actionSuccess && (
        <div className="p-4 rounded-xl bg-emerald-950 border border-emerald-700 text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{actionSuccess}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Applications Selector */}
        <div className="lg:col-span-5 space-y-3">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Applicant Queue ({applications.length})
          </h2>

          <div className="space-y-3">
            {applications.map((app) => (
              <div
                key={app.id}
                onClick={() => setSelectedApp(app)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  selectedApp.id === app.id
                    ? "bg-slate-800 border-emerald-500 ring-1 ring-emerald-500"
                    : "bg-slate-800/60 border-slate-700 hover:bg-slate-800"
                }`}
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-slate-400 font-bold">
                      {app.ref}
                    </span>
                    <h3 className="font-bold text-sm text-white font-heading">
                      {app.studentName}
                    </h3>
                    <p className="text-[11px] text-slate-300 line-clamp-1">{app.course}</p>
                    <p className="text-[10px] text-slate-400">{app.university}</p>
                  </div>
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                      app.currentStatus === "ACTION_REQUIRED"
                        ? "bg-amber-950 text-amber-300 border border-amber-800"
                        : app.currentStatus === "FORWARDED_TO_UNIVERSITY"
                        ? "bg-blue-950 text-blue-300 border border-blue-800"
                        : "bg-slate-900 text-slate-300"
                    }`}
                  >
                    {app.currentStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Detailed Inspector & Document Verification */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6 bg-slate-800 border-slate-700 rounded-2xl shadow-sm space-y-6 text-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-700 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-900 text-emerald-400">
                    {selectedApp.ref}
                  </span>
                  <span className="text-xs font-bold text-amber-400">
                    Status: {selectedApp.currentStatus}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-heading mt-1">
                  {selectedApp.studentName}
                </h3>
                <p className="text-xs text-slate-400">
                  {selectedApp.email} • {selectedApp.phone}
                </p>
              </div>

              {/* Status transition dropdown / actions */}
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  onClick={() => handleTransitionStatus("FORWARDED_TO_UNIVERSITY")}
                  className="bg-blue-600 hover:bg-blue-700 text-xs font-semibold"
                >
                  Forward to University
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleTransitionStatus("OFFER_RECEIVED")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-xs font-semibold"
                >
                  Issue Offer Letter
                </Button>
              </div>
            </div>

            {/* Academic Snapshot */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-xs">
              <div>
                <span className="text-slate-400 block">Class 10 (SEE):</span>
                <span className="font-bold text-white">GPA {selectedApp.seeGpa}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Class 12 (NEB):</span>
                <span className="font-bold text-white">GPA {selectedApp.nebGpa}</span>
              </div>
            </div>

            {/* Document Checklist & Actions */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-300 uppercase tracking-wider">
                Document Verification Checklist:
              </h4>

              <div className="space-y-3">
                {selectedApp.documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-2 text-xs"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{doc.type}</span>
                        <span
                          className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                            doc.status === "VERIFIED"
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                              : doc.status === "CORRECTION_REQUESTED"
                              ? "bg-amber-950 text-amber-300 border border-amber-800"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {doc.status}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {doc.fileName}
                      </span>
                    </div>

                    {doc.note && (
                      <p className="text-[11px] text-amber-300 italic">
                        Note: {doc.note}
                      </p>
                    )}

                    <div className="flex items-center gap-2 pt-1">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleVerifyDocument(doc.id)}
                        className="text-[11px] h-8 bg-emerald-950 text-emerald-300 hover:bg-emerald-900 border border-emerald-800"
                      >
                        ✓ Mark Verified
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          const note = prompt(
                            "Enter correction note for student (e.g. Blurry marksheet):",
                            "Please upload a clear PDF of your Class 12 transcript."
                          );
                          if (note) {
                            setCorrectionNote(note);
                            handleRequestCorrection(doc.id);
                          }
                        }}
                        className="text-[11px] h-8 border-slate-700 text-slate-300 hover:bg-slate-800"
                      >
                        Request Correction
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
