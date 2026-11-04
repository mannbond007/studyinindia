import React from "react";
import { AboutInteractiveShowcase } from "@/components/about/about-interactive-showcase";

export const metadata = {
  title: "About Us | Official Global Gateway for Studying in India",
  description:
    "Learn about our mission to bring ethical, transparent, and direct Indian university admissions to international students across 50+ countries with zero middlemen markups.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutInteractiveShowcase />
      </div>
    </div>
  );
}
