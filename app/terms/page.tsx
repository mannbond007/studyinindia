import React from "react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Terms and Conditions | StudyIndia.np",
  description: "Terms and conditions of use for StudyIndia.np admission platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-4">
          <Badge variant="default" className="text-xs">Terms of Service</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-400">Last updated: October 2026</p>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-6 pt-4 border-t border-slate-100 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 font-heading">1. Platform Scope</h2>
              <p>
                StudyIndia.np provides advisory, course discovery, eligibility verification, and application forwarding services for Nepali students seeking admission to higher education institutions in India.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 font-heading">2. Accuracy of Submitted Credentials</h2>
              <p>
                Students and representing partner agents must guarantee that all submitted educational transcripts (SEE, NEB +2), character certificates, and citizenship records are genuine and unaltered. Providing fraudulent documents leads to immediate cancellation of admission and report to the relevant authorities.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 font-heading">3. University Admission Authority</h2>
              <p>
                While StudyIndia assists students with eligibility verification and official forwarding, the final authority to grant admission, offer letter, or scholarship rests solely with the registrar and admissions senate of the respective university. We do not make false guarantees of admission where eligibility criteria are not met.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 font-heading">4. Partner Agent Code of Conduct</h2>
              <p>
                Partner agents operating under this platform must adhere to ethical counseling standards. Agents are strictly prohibited from charging students unauthorized cash fees above published university costs or representing false partnership claims.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
