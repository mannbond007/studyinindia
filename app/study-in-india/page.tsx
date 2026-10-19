import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Banknote,
  Plane,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Study in India Guide for Nepali Students | StudyIndia.np",
  description:
    "Complete comprehensive guide on visa-free regulations, MoEST NOC requirements, currency exchange (INR/NPR), equivalence recognition, and campus life in India for students from Nepal.",
};

export default function StudyInIndiaPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <Badge variant="default" className="text-xs font-semibold">
              Official Nepali Student Handbook
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Comprehensive Guide to Studying in India
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Everything Nepali students and parents need to know regarding bilateral legal status, currency exchange, NOC applications, Tribhuvan University equivalence, and academic culture in India.
            </p>
          </div>
        </div>

        {/* 1. Legal & Visa Exemption */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <Card className="rounded-3xl border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                Visa-Free Status: 1950 Indo-Nepal Treaty
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Under the historic 1950 Treaty of Peace and Friendship between Nepal and India, citizens of Nepal enjoy reciprocal rights of residence, education, and employment in India without requiring a student visa or police registration.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                <div className="font-semibold text-slate-800">Required Identity Proof for Border & Campus:</div>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Original Nepali Citizenship Certificate (Nagorikta) OR</li>
                  <li>Valid Nepali Passport</li>
                  <li>Official University Admission Letter</li>
                  <li>SEE and NEB Grade 11/12 Academic Transcripts</li>
                </ul>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-100 text-xs text-emerald-800 font-medium">
              ✓ No Embassy visa appointment required.
            </div>
          </Card>

          <Card className="rounded-3xl border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                MoEST No Objection Certificate (NOC)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                While India does not demand a visa, the Government of Nepal requires students to obtain an official No Objection Certificate (NOC) from the Ministry of Education, Science and Technology (MoEST) in Kesharmahal / Sanothimi.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                <div className="font-semibold text-slate-800">Purpose of the NOC:</div>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Enables Nepali commercial banks to exchange NPR into INR for tuition & hostel wire transfers.</li>
                  <li>Serves as official record of study abroad for future government licensing.</li>
                  <li>Online application via noc.moest.gov.np using your Admission Offer Letter.</li>
                </ul>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-100 text-xs text-emerald-800 font-medium">
              ✓ Our counselors verify all offer letters to ensure smooth NOC clearance.
            </div>
          </Card>
        </section>

        {/* 2. Currency, Living & Banking */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Financial Logistics & Currency Exchange
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Understanding the fixed exchange peg (1 INR = 1.60 NPR) and practical methods for managing student funds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base font-heading">
                <Banknote className="w-5 h-5 text-emerald-700" />
                <span>Bank Wire Transfers</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                With your university fee invoice and NOC, your family can transfer semester tuition directly from any Class A commercial bank in Nepal (e.g. Nabil, Global IME, NIC Asia) to the university account.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base font-heading">
                <Plane className="w-5 h-5 text-emerald-700" />
                <span>Indian Bank Accounts</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Upon campus arrival, universities assist students with opening a local savings account (SBI, HDFC, ICICI) using your Nepali passport/citizenship and bona-fide student certificate for UPI payments (Google Pay / PhonePe).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base font-heading">
                <Building className="w-5 h-5 text-emerald-700" />
                <span>Travel Cards & Cash</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nepal Rastra Bank allows exchange of cash INR (up to ₹25,000 in notes of ₹100 or below) and Dollar/INR prepaid travel cards for initial pocket expenses during your first trip.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Equivalence in Nepal */}
        <section className="bg-emerald-900 text-emerald-50 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <Badge variant="accent" className="bg-emerald-700 text-white text-xs">
              Licensing & Equivalency
            </Badge>
            <h2 className="text-3xl font-extrabold text-white font-heading">
              Degree Recognition & Professional Councils in Nepal
            </h2>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              When you graduate from an accredited Indian university, your degree can be easily validated for practice and employment in Nepal:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-xl bg-emerald-800/60 border border-emerald-700/60 space-y-1">
                <div className="font-bold text-emerald-200 text-sm">Nepal Engineering Council (NEC)</div>
                <p className="text-emerald-100">
                  Engineering graduates from AICTE/UGC approved Indian colleges are eligible to take the NEC licensing examination.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-800/60 border border-emerald-700/60 space-y-1">
                <div className="font-bold text-emerald-200 text-sm">Nepal Nursing Council (NNC)</div>
                <p className="text-emerald-100">
                  INC-approved B.Sc Nursing degrees qualify for NNC licensing after registration and practical verification.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-800/60 border border-emerald-700/60 space-y-1">
                <div className="font-bold text-emerald-200 text-sm">Nepal Pharmacy Council (NPC)</div>
                <p className="text-emerald-100">
                  PCI-recognized B.Pharm graduates are eligible for Pharmacist licensing exams in Nepal.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-800/60 border border-emerald-700/60 space-y-1">
                <div className="font-bold text-emerald-200 text-sm">Tribhuvan University (CDC)</div>
                <p className="text-emerald-100">
                  General degrees (BBA, BCA, B.Sc) receive direct equivalence verification through the TU Curriculum Development Centre.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/universities">
                <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-50 font-bold">
                  Browse Accredited Universities
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
