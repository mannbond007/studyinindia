import React from "react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Privacy Policy | StudyIndia.np",
  description: "Privacy policy and student document security practices of StudyIndia.np.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-4">
          <Badge variant="default" className="text-xs">Legal & Security</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">Last updated: October 2026</p>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-6 pt-4 border-t border-slate-100 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 font-heading">1. Introduction</h2>
              <p>
                StudyIndia.np (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;platform&rdquo;) respects the privacy and confidentiality of Nepali students, parents, and authorized partners. This document outlines how we collect, process, and protect your personal identification, academic transcripts, and citizenship documents.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 font-heading">2. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Personal identity: Full name, date of birth, nationality, gender, and contact details.</li>
                <li>Academic records: Class 10 (SEE) and Class 12 (NEB) marks, school names, and GPA transcripts.</li>
                <li>Verification documents: Nepali Citizenship card, passport copies, and migration certificates.</li>
                <li>Referral information: Registered partner agent codes when applicable.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 font-heading">3. Storage & Document Security</h2>
              <p>
                Student documents are stored in encrypted, private cloud buckets (Supabase Storage). Access is granted only via authenticated, short-lived signed URLs. Under no circumstances are student marksheets or identification cards published publicly or indexed by search engines.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 font-heading">4. Data Sharing with Universities</h2>
              <p>
                Your academic data is submitted exclusively to the admissions registrar of the Indian university you explicitly choose to apply to. We never sell, monetize, or distribute student lead lists to third-party telemarketers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 font-heading">5. Student Rights</h2>
              <p>
                You retain the right to review, update, or request the deletion of your personal profile and uploaded drafts at any time by contacting support@studyindia.edu.np.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
