import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Step-by-Step Admission Process for Nepali Students | StudyIndia.np",
  description:
    "Complete roadmap for Indian university admissions from Nepal: Document checklist, eligibility screening, application submission, offer letter, and MoEST NOC processing.",
};

const steps = [
  {
    number: "01",
    title: "Account Registration & Profile Setup",
    desc: "Create your student profile with basic contact details and your academic history from Class 10 (SEE) and Class 12 (NEB).",
    duration: "10 Minutes",
    details: [
      "Select your completed stream (Science, Management, Humanities)",
      "Record your overall GPA and major subject scores (PCM, PCB, etc.)",
      "Specify your intended program and preferred study locations",
    ],
  },
  {
    number: "02",
    title: "University & Course Matching",
    desc: "Explore verified Indian universities and check your eligibility instantly against UGC & council requirements.",
    duration: "1 - 2 Days",
    details: [
      "Filter by NIRF/NAAC ratings, annual fees, and international quota seats",
      "Review transparent cost breakdowns in both INR and NPR",
      "Compare hostel and dining arrangements suitable for international students",
    ],
  },
  {
    number: "03",
    title: "Document Upload & Digital Verification",
    desc: "Upload clean scanned copies of your academic marksheets and Nepali citizenship or passport to our private secure vault.",
    duration: "Instant",
    details: [
      "SEE Marksheet & Character Certificate",
      "NEB (+2) Transcript & Migration Certificate",
      "Valid Nepali Citizenship Card or Passport",
      "Recent passport-sized photo with white background",
    ],
  },
  {
    number: "04",
    title: "Counselor Review & Formal University Submission",
    desc: "Our verified admission counselors review your documents for equivalence before submitting directly to the university registrar.",
    duration: "24 - 48 Hours",
    details: [
      "Ensure all subject marks satisfy the required program threshold",
      "Submit through official international admission channels",
      "Track your status in real-time on your student dashboard",
    ],
  },
  {
    number: "05",
    title: "Provisional Offer Letter Issuance",
    desc: "Receive your official University Admission Letter with your unique student registration ID and fee schedule.",
    duration: "3 - 7 Business Days",
    details: [
      "Contains official university letterhead and international student reference",
      "Details first-semester tuition and hostel deposit details",
      "Used to obtain your No Objection Certificate (NOC) in Nepal",
    ],
  },
  {
    number: "06",
    title: "MoEST NOC Clearance & Bank Wire Transfer",
    desc: "Apply for your No Objection Certificate (NOC) through the online portal and wire fees via any Class A bank in Nepal.",
    duration: "2 - 4 Days",
    details: [
      "Submit offer letter at noc.moest.gov.np for MoEST verification",
      "Present approved NOC at your preferred Nepali bank",
      "Transfer semester fees directly to the verified university account in India",
    ],
  },
  {
    number: "07",
    title: "Hostel Confirmation & Campus Arrival",
    desc: "Receive your hostel allocation slip, pack your essentials, and travel visa-free to your campus with pre-departure support.",
    duration: "Prior to Semester Commencement",
    details: [
      "Campus pickup and reception by Nepali senior student union",
      "Assistance with local SIM card and Indian student savings bank account",
      "Orientation and commencement of academic classes",
    ],
  },
];

export default function AdmissionProcessPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="default" className="text-xs font-semibold">
            Zero Hidden Fees • Direct Process
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            The Complete Admission Roadmap
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Follow our verified transparent step-by-step pathway from your home in Nepal to the classrooms of top Indian institutions.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-6">
          {steps.map((st, idx) => (
            <Card
              key={idx}
              className="bg-white border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex items-center gap-4 md:flex-col md:items-start shrink-0">
                <span className="text-4xl sm:text-5xl font-black text-emerald-700/25 font-heading">
                  {st.number}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                  <Clock className="w-3 h-3 text-emerald-600" />
                  <span>{st.duration}</span>
                </span>
              </div>

              <div className="flex-1 space-y-3">
                <h2 className="text-xl font-bold text-slate-900 font-heading">
                  {st.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>

                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-800 mb-2">Key Actions & Milestones:</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {st.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Start Your Admission Journey Today
            </h3>
            <p className="text-emerald-100/90 text-sm leading-relaxed">
              Create your student profile and take the first step toward studying in India.
            </p>
          </div>
          <Link href="/register">
            <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-50 font-bold px-8 shadow-md">
              <span>Begin Free Application</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
