import React from "react";
import { AdmissionRoadmapShowcase } from "@/components/admission/admission-roadmap-showcase";

export const metadata = {
  title: "Step-by-Step Admission Process | StudyIndia",
  description:
    "Complete roadmap for Indian university admissions: Document checklist, eligibility screening, application submission, offer letter, and NOC / visa processing.",
};

export default function AdmissionProcessPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFD] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdmissionRoadmapShowcase />
      </div>
    </div>
  );
}
