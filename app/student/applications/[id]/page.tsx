"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertTriangle,
  Building,
  Upload,
  ArrowLeft,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StudentApplicationDetailPage() {

  const [replacementUploaded, setReplacementUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Application details
  const appData = {
    ref: "SI-2026-89730",
    universityName: "Vellore Institute of Technology (VIT)",
    courseName: "B.Tech in Computer Science and Engineering",
    duration: "4 Years",
    annualFee: "₹2,98,000 INR",
    currentStatus: replacementUploaded ? "UNDER_REVIEW" : "ACTION_REQUIRED",
    statusNote: replacementUploaded
      ? "Replacement document uploaded. Counselor review in progress."
      : "The uploaded copy of Class 12 transcript was slightly blurred on the Grade column. Please upload a clear scan.",
    submittedAt: "Oct 10, 2026",
    counselorName: "Pooja Shrestha (Kathmandu Desk)",
    counselorEmail: "counseling@studyindia.edu.np",
  };

  const statusPipeline = [
    { key: "SUBMITTED", label: "Submitted", done: true },
    { key: "UNDER_REVIEW", label: "Under Review", done: true },
    {
      key: "VERIFIED",
      label: replacementUploaded ? "Verification Pending" : "Action Required",
      active: true,
    },
    { key: "FORWARDED_TO_UNIVERSITY", label: "University Submission", done: false },
    { key: "OFFER_RECEIVED", label: "Offer Decision", done: false },
  ];

  const documents = [
    {
      id: "doc-1",
      name: "Class 10 (SEE) Marksheet",
      fileName: "SEE_Marksheet_BibekThapa.pdf",
      status: "VERIFIED" as const,
      note: "Marksheet verified against SEE grading criteria.",
    },
    {
      id: "doc-2",
      name: "Class 12 (NEB) Transcript",
      fileName: replacementUploaded
        ? "NEB_Grade12_Clear_HighRes.pdf"
        : "NEB_Transcript_BibekThapa.pdf",
      status: replacementUploaded
        ? ("PENDING" as const)
        : ("CORRECTION_REQUESTED" as const),
      note: replacementUploaded
        ? "New clear scan submitted. Awaiting verification."
        : "Blurred Grade column. Please upload high-resolution scan.",
    },
    {
      id: "doc-3",
      name: "Nepali Citizenship Card",
      fileName: "Nepali_Citizenship_Card.pdf",
      status: "VERIFIED" as const,
      note: "Citizenship identification verified.",
    },
    {
      id: "doc-4",
      name: "Passport-Size Photo",
      fileName: "Passport_Photo_WhiteBg.jpg",
      status: "VERIFIED" as const,
      note: "Photo format verified.",
    },
  ];

  const handleUploadReplacement = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setReplacementUploaded(true);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Top Header */}
      <div className="space-y-3">
        <Link
          href="/student/dashboard"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-emerald-700 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Dashboard</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800">
                {appData.ref}
              </span>
              <Badge
                variant={replacementUploaded ? "default" : "warning"}
                className="text-xs font-semibold"
              >
                {replacementUploaded ? "Under Review" : "Correction Requested"}
              </Badge>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-heading mt-1">
              {appData.courseName}
            </h1>
            <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
              <Building className="w-3.5 h-3.5 text-emerald-600" />
              <span>{appData.universityName}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Status Pipeline Progress Bar */}
      <Card className="p-6 bg-white border-slate-200/90 rounded-2xl shadow-sm space-y-4">
        <CardTitle className="text-sm font-bold text-slate-800 font-heading">
          Application Lifecycle Tracking
        </CardTitle>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
          {statusPipeline.map((st, i) => (
            <div
              key={st.key}
              className={`p-3 rounded-xl border text-center text-xs ${
                st.done
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800 font-medium"
                  : st.active
                  ? "bg-amber-50 border-amber-300 text-amber-900 font-bold ring-2 ring-amber-400/30"
                  : "bg-slate-50 border-slate-200 text-slate-400"
              }`}
            >
              <div className="text-[10px] font-mono uppercase text-slate-400">
                Step 0{i + 1}
              </div>
              <div className="truncate mt-0.5">{st.label}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Action / Correction Banner */}
      {!replacementUploaded ? (
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-300 space-y-4 text-xs text-amber-950">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-bold text-sm">
                Document Correction Needed for Class 12 Marksheet
              </h3>
              <p className="text-xs leading-relaxed text-amber-900">
                {appData.statusNote}
              </p>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <Button
              size="sm"
              onClick={handleUploadReplacement}
              isLoading={isUploading}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold gap-1.5"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload Clear Replacement PDF</span>
            </Button>
            <span className="text-[11px] text-amber-800">
              Max file size 5MB (PDF/JPG)
            </span>
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-center gap-3 text-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
          <div>
            <div className="font-bold">Replacement Upload Received</div>
            <p className="text-[11px] text-emerald-800">
              Our counselors are re-verifying your document. You will receive an update once approved.
            </p>
          </div>
        </div>
      )}

      {/* Documents Status Breakdown Table */}
      <Card className="p-6 bg-white border-slate-200/90 rounded-2xl shadow-sm space-y-4">
        <CardTitle className="text-base font-heading">
          Uploaded Application Documents ({documents.length})
        </CardTitle>

        <div className="divide-y divide-slate-100 text-xs">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="py-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">{doc.name}</span>
                  {doc.status === "VERIFIED" && (
                    <Badge variant="success" className="text-[10px]">Verified</Badge>
                  )}
                  {doc.status === "CORRECTION_REQUESTED" && (
                    <Badge variant="warning" className="text-[10px]">Correction Requested</Badge>
                  )}
                  {doc.status === "PENDING" && (
                    <Badge variant="secondary" className="text-[10px]">Verification Pending</Badge>
                  )}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  {doc.fileName}
                </div>
                <p className="text-[11px] text-slate-500">{doc.note}</p>
              </div>

              {doc.status === "CORRECTION_REQUESTED" && !replacementUploaded && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleUploadReplacement}
                  className="text-xs shrink-0"
                >
                  Replace Document
                </Button>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Counselor Support Contact */}
      <Card className="p-6 bg-slate-50 border-slate-200/80 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
        <div className="space-y-1">
          <div className="font-bold text-slate-900 font-heading">
            Assigned Counselor Desk: {appData.counselorName}
          </div>
          <p className="text-slate-500">
            Have questions about your application or need hostel assistance?
          </p>
        </div>
        <Link href="/contact">
          <Button variant="outline" size="sm" className="font-semibold text-xs gap-1.5 bg-white">
            <Mail className="w-3.5 h-3.5 text-emerald-700" />
            <span>Contact Counselor</span>
          </Button>
        </Link>
      </Card>
    </div>
  );
}
