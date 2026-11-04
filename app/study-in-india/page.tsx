import type { Metadata } from "next";
import React from "react";
import { WhyStudyIndiaQA } from "@/components/home/why-study-india-qa";
import { StudyInIndiaInteractiveHandbook } from "@/components/study-in-india/study-in-india-handbook";

export const metadata: Metadata = {
  title: "Your Complete Global Guide to Studying in India | StudyIndia Global",
  description:
    "Everything international students and parents need to know about studying in India: accredited universities and institutions selection, admission eligibility, student visa (S-1) requirements, tuition fees in USD/EUR/INR, and global degree recognition.",
  keywords: [
    "study in India for international students",
    "Indian universities and institutions admission eligibility",
    "Indian student visa S-1 requirements",
    "India university tuition fees in USD",
    "degree recognition and credential evaluation India",
    "higher education in India guide",
    "Nepal students study in India",
  ],
  openGraph: {
    title: "Your Complete Global Guide to Studying in India | StudyIndia Global",
    description:
      "Everything international students and parents need to know about studying in India: accredited universities and institutions selection, admission eligibility, student visa requirements, tuition fees, and global degree recognition.",
    type: "website",
  },
};

export default function StudyInIndiaPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <StudyInIndiaInteractiveHandbook />

        {/* Real Student Perspective Q&A */}
        <WhyStudyIndiaQA />
      </div>
    </div>
  );
}
