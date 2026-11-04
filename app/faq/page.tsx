"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  question: string;
  answer: string;
  category: "Legal & Visa" | "Eligibility & Docs" | "Fees & Scholarships" | "Campus Life" | "Placements & Global";
}

const faqs: FAQItem[] = [
  {
    category: "Legal & Visa",
    question: "How do international students obtain an Indian Student e-Visa?",
    answer:
      "International students from 50+ countries (including across Africa, the Middle East, Southeast Asia, and SAARC) obtain an official e-Student Visa online. Once your partner university issues your official admission letter, the paperless e-Visa is typically approved within 5 to 7 business days.",
  },
  {
    category: "Eligibility & Docs",
    question: "Do international students need to take competitive entrance exams like JEE or NEET?",
    answer:
      "No. International students are admitted directly on senior secondary academic merit (Grade 12 / High School transcripts such as Cambridge A-Levels, IB, CBSE, WAEC, or NEB). You do not need to sit for JEE Main or CUET for engineering, business, IT, sciences, or humanities programs.",
  },
  {
    category: "Eligibility & Docs",
    question: "Are international high school boards (A-Levels, IB, WAEC, NEB, CBSE) accepted directly?",
    answer:
      "Yes! All partner universities in India accept recognized global Grade 12 / High School transcripts directly for international seats. Your GPA or letter grades are mapped to standard percentage equivalence criteria, and provisional admission offers are issued within 24 to 48 hours.",
  },
  {
    category: "Eligibility & Docs",
    question: "Will my Indian degree be recognized globally and in my home country?",
    answer:
      "Yes. Indian degrees from UGC-recognized and NAAC A+/A++ accredited universities carry worldwide validity. Engineering degrees fall under the Washington Accord (NBA), recognized across the USA (ABET), UK, EU, Australia, and the Middle East. Medical and healthcare degrees are listed with WHO/WDOMS and recognized by national councils globally (including NEC, NNC, and NPC in South Asia).",
  },
  {
    category: "Fees & Scholarships",
    question: "Can international students get merit scholarships or tuition fee waivers?",
    answer:
      "Yes. Partner universities provide 20% to 50% tuition waivers for international applicants with 75%+ or 3.2+ GPA. Exceptional students with 85%+ or high honors can qualify for up to 70% to 100% academic tuition scholarships, guaranteed directly on their official admission letter.",
  },
  {
    category: "Fees & Scholarships",
    question: "How do I pay university tuition fees from abroad?",
    answer:
      "Tuition fees are paid directly to the university's official bank account via international SWIFT wire transfer (in USD, EUR, GBP, AED, or INR) or through the university's international payment portal. For students from Nepal and Bhutan, commercial banks also release INR directly at the official peg upon presenting the admission letter.",
  },
  {
    category: "Placements & Global",
    question: "What kind of job placements and corporate recruiters do universities offer?",
    answer:
      "Top Indian universities host 500+ Fortune 500 and global tech recruiters each year, including Microsoft, Amazon, Google, Intel, TCS, and Deloitte. Over 85% of eligible international graduates secure paid internships, global career placements, or admission to top Masters programs in the US, UK, and Europe.",
  },
  {
    category: "Campus Life",
    question: "What are campus safety, international hostel accommodation, and dining options like?",
    answer:
      "Partner campuses feature 24/7 CCTV surveillance, biometric entry, on-campus multi-specialty clinics, and dedicated International Student Hostels (AC/Non-AC rooms with high-speed Wi-Fi). International dining halls serve continental, African, Arabic, South Asian, vegetarian, and certified halal meals.",
  },
  {
    category: "Campus Life",
    question: "Can international students open an Indian bank account and use digital payments (UPI)?",
    answer:
      "Yes. Universities have full-service bank branches (such as SBI, HDFC, or ICICI) right on campus. With your passport, visa/FRRO registration (or national ID for treaty citizens), and bona-fide student certificate, you can open a student bank account and activate Google Pay / PhonePe (UPI) for seamless daily payments.",
  },
  {
    category: "Legal & Visa",
    question: "Do citizens of Nepal and Bhutan require a student visa for India?",
    answer:
      "No. Under bilateral friendship treaties with India, citizens of Nepal and Bhutan enjoy visa-free entry and full study rights in India. You only need a valid Passport or National Citizenship ID to travel and enroll, along with a Ministry of Education NOC (in Nepal) for foreign exchange bank transfers.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["All", "Legal & Visa", "Eligibility & Docs", "Fees & Scholarships", "Campus Life", "Placements & Global"];

  const filteredFaqs = faqs.filter((f) => {
    const matchesCategory = activeCategory === "All" || f.category === activeCategory;
    const matchesSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge variant="default" className="text-xs font-semibold">
            Knowledge Base
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Clear, authoritative answers to the most common queries from international students and parents worldwide regarding studying in India.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search questions (e.g. Student e-Visa, scholarships, A-Levels, SWIFT payment)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 pl-11 pr-4 rounded-2xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion FAQ list */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <Card className="p-8 text-center text-slate-500 text-sm">
              No matching questions found. Contact our advisors directly for immediate help.
            </Card>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="font-bold text-slate-900 text-base font-heading">
                        {faq.question}
                      </span>
                    </div>
                    {/* 3D Tactile + and - Morphing Button */}
                    <div
                      className={`shrink-0 w-9 h-9 rounded-2xl flex items-center justify-center border transition-all duration-300 select-none ${
                        isOpen
                          ? "bg-gradient-to-b from-emerald-500 via-[#00845A] to-[#006e4a] border-emerald-400/80 shadow-[0_3px_0_0_#004d34,0_6px_16px_rgba(0,132,90,0.35),inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(0,0,0,0.25)] translate-y-0.5"
                          : "bg-gradient-to-b from-white via-slate-50 to-slate-100 border-slate-300/90 shadow-[0_3px_0_0_#cbd5e1,0_4px_8px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,1)] group-hover:border-emerald-400 group-hover:shadow-[0_3px_0_0_#6ee7b7,0_6px_14px_rgba(16,185,129,0.2)] group-hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="relative w-4 h-4 flex items-center justify-center pointer-events-none">
                        <span
                          className={`absolute h-[2.5px] w-3.5 rounded-full transition-all duration-300 ${
                            isOpen
                              ? "bg-white shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
                              : "bg-slate-700 shadow-[0_1px_0_rgba(255,255,255,0.9)]"
                          }`}
                        />
                        <span
                          className={`absolute w-[2.5px] h-3.5 rounded-full transition-all duration-300 ease-out ${
                            isOpen
                              ? "bg-white rotate-90 scale-0 opacity-0 shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
                              : "bg-slate-700 rotate-0 scale-100 opacity-100 shadow-[0_1px_0_rgba(255,255,255,0.9)]"
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden min-h-0">
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pl-14">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Help Banner */}
        <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
          <h3 className="text-xl font-bold text-emerald-950 font-heading">
            Still have a specific question about your course or marksheet?
          </h3>
          <p className="text-xs text-emerald-800 max-w-lg mx-auto leading-relaxed">
            Our international admissions counselors in New Delhi, Bengaluru, and Kathmandu are ready to verify your transcript eligibility and walk you through every step.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button size="md" className="font-semibold gap-2">
                <span>Talk to a Counselor</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
