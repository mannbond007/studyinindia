"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function StudentNotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: "notif-1",
      title: "Document Correction Requested",
      message:
        "The uploaded copy of your Class 12 transcript for application SI-2026-89730 was blurred. Please upload a clear replacement scan.",
      type: "DOCUMENT_ACTION" as const,
      timestamp: "Today at 10:30 AM",
      actionUrl: "/student/applications/app-102",
      read: false,
    },
    {
      id: "notif-2",
      title: "Application Received & Queued",
      message:
        "Your application SI-2026-89412 for B.Tech in CSE (AI & ML) at Sharda University has been queued for verification.",
      type: "APPLICATION_UPDATE" as const,
      timestamp: "Yesterday at 4:15 PM",
      actionUrl: "/student/applications/app-101",
      read: true,
    },
    {
      id: "notif-3",
      title: "SEE Marksheet Verified",
      message:
        "Your Class 10 (SEE) marksheet has been approved by the credentials evaluation desk.",
      type: "DOCUMENT_ACTION" as const,
      timestamp: "Oct 08, 2026",
      actionUrl: "/student/profile",
      read: true,
    },
  ]);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Notifications & Updates
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Real-time notifications regarding document reviews, status transitions, and offer letters.
          </p>
        </div>

        <Button variant="outline" size="sm" onClick={markAllRead} className="text-xs">
          Mark all as read
        </Button>
      </div>

      {/* Notifications list */}
      <div className="space-y-3">
        {notifications.map((n) => (
          <Card
            key={n.id}
            className={`p-5 rounded-2xl border transition-all ${
              !n.read
                ? "bg-emerald-50/40 border-emerald-200"
                : "bg-white border-slate-200/90"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
                  n.type === "DOCUMENT_ACTION" && !n.read
                    ? "bg-amber-100 text-amber-800"
                    : "bg-emerald-100 text-emerald-800"
                }`}
              >
                {n.type === "DOCUMENT_ACTION" ? (
                  <AlertTriangle className="w-5 h-5" />
                ) : (
                  <FileText className="w-5 h-5" />
                )}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-slate-900 font-heading">
                      {n.title}
                    </h3>
                    {!n.read && (
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    )}
                  </div>
                  <span className="text-[11px] text-slate-400">{n.timestamp}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {n.message}
                </p>

                {n.actionUrl && (
                  <div className="pt-2">
                    <Link
                      href={n.actionUrl}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:underline"
                    >
                      <span>Take Action</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
