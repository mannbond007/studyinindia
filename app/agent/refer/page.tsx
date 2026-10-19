"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UserPlus, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { coursesData } from "@/lib/data/courses";

export default function AgentReferStudentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referredSuccess, setReferredSuccess] = useState(false);

  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    city: "Kathmandu",
    seeGpa: "",
    nebGpa: "",
    selectedCourseId: coursesData[0]?.id || "",
    consentConfirmed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentConfirmed) {
      alert("Please obtain and confirm student or parental consent before referring.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setReferredSuccess(true);
    }, 800);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
          Refer a Nepali Student
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Directly register an applicant under your agency&apos;s referral attribution with confirmed student consent.
        </p>
      </div>

      <Card className="p-8 bg-white border-slate-200/90 rounded-2xl shadow-sm">
        {referredSuccess ? (
          <div className="text-center space-y-4 py-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 font-heading">
              Student Successfully Registered!
            </h2>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              <strong>{formData.studentName}</strong> has been bound to your agency profile. An invitation with login credentials has been dispatched to {formData.email}.
            </p>
            <div className="pt-2 flex gap-3 justify-center">
              <Link href="/agent/dashboard">
                <Button size="sm" className="font-semibold text-xs">
                  Back to Dashboard
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setReferredSuccess(false);
                  setFormData({
                    studentName: "",
                    email: "",
                    phone: "",
                    city: "Kathmandu",
                    seeGpa: "",
                    nebGpa: "",
                    selectedCourseId: coursesData[0]?.id || "",
                    consentConfirmed: false,
                  });
                }}
                className="text-xs"
              >
                Refer Another Student
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Student Full Name (As per Citizenship)"
              id="studentName"
              required
              placeholder="e.g. Suman Tamang"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Student Email"
                id="email"
                type="email"
                required
                placeholder="suman@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Input
                label="Student Phone / WhatsApp"
                id="phone"
                required
                placeholder="+977 98XXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Class 10 (SEE) GPA"
                id="seeGpa"
                placeholder="e.g. 3.40"
                value={formData.seeGpa}
                onChange={(e) => setFormData({ ...formData, seeGpa: e.target.value })}
              />
              <Input
                label="Class 12 (NEB) GPA"
                id="nebGpa"
                placeholder="e.g. 3.20"
                value={formData.nebGpa}
                onChange={(e) => setFormData({ ...formData, nebGpa: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Target Degree Program
              </label>
              <select
                className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-sm"
                value={formData.selectedCourseId}
                onChange={(e) => setFormData({ ...formData, selectedCourseId: e.target.value })}
              >
                {coursesData.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.degree}: {c.name} — {c.universityName}
                  </option>
                ))}
              </select>
            </div>

            {/* Consent confirmation */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 pt-3">
              <input
                type="checkbox"
                id="consentCheck"
                checked={formData.consentConfirmed}
                onChange={(e) => setFormData({ ...formData, consentConfirmed: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                required
              />
              <label htmlFor="consentCheck" className="text-xs text-slate-700 leading-relaxed cursor-pointer">
                <strong>Explicit Consent Confirmed:</strong> I certify that this student (or their legal guardian) has provided explicit written consent for our consultancy to assist with their admission and submit documents to Indian universities.
              </label>
            </div>

            <Button
              type="submit"
              size="lg"
              isLoading={isSubmitting}
              className="w-full font-bold shadow-sm gap-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>Submit Student Referral</span>
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}
