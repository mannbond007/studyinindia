"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, HelpCircle, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  question: string;
  answer: string;
  category: "Legal & Visa" | "Eligibility & Docs" | "Fees & Banking" | "Campus Life";
}

const faqs: FAQItem[] = [
  {
    category: "Legal & Visa",
    question: "Do Nepali citizens need an Indian student visa?",
    answer:
      "No. Under the 1950 Treaty of Peace and Friendship between Nepal and India, Nepali citizens have full freedom of movement and study rights in India without requiring a visa. You only need your valid Nepali Citizenship certificate or Passport.",
  },
  {
    category: "Legal & Visa",
    question: "What is the MoEST No Objection Certificate (NOC)?",
    answer:
      "The No Objection Certificate is issued by the Ministry of Education, Science and Technology in Nepal (Kesharmahal / Sanothimi). It allows Nepali commercial banks to release foreign currency (INR) for your tuition fees and ensures your degree is officially registered with the Nepal Government.",
  },
  {
    category: "Eligibility & Docs",
    question: "Are NEB (+2) Class 12 marksheets accepted directly?",
    answer:
      "Yes! All partner universities in India accept NEB Class 12 transcripts directly for international seats. Your GPA is mapped to standard percentage criteria. You do not need to take state-level entrance exams like JEE Mains or KCET unless applying for specific domestic government quotas.",
  },
  {
    category: "Eligibility & Docs",
    question: "Will my Indian degree be recognized in Nepal for government jobs and licensing?",
    answer:
      "Yes. Degrees from UGC and AICTE approved universities are recognized by Tribhuvan University CDC. Engineering graduates can register with the Nepal Engineering Council (NEC), Nursing graduates with Nepal Nursing Council (NNC), and Pharmacy graduates with Nepal Pharmacy Council (NPC).",
  },
  {
    category: "Eligibility & Docs",
    question: "What documents are required to initiate an admission application?",
    answer:
      "You will need: (1) Class 10 (SEE) Marksheet & Character Certificate, (2) Class 12 (NEB) Transcript & Migration Certificate, (3) Scanned copy of Nepali Citizenship card or Passport, and (4) Recent passport-sized color photograph.",
  },
  {
    category: "Fees & Banking",
    question: "How do I pay university fees from Nepal?",
    answer:
      "Once you receive your university offer letter and obtain your MoEST NOC, any Class A commercial bank in Nepal (e.g., Nabil Bank, Global IME Bank, NIC Asia) can process a SWIFT or demand draft in Indian Rupees (INR) directly to the university official bank account.",
  },
  {
    category: "Fees & Banking",
    question: "What is the current currency exchange rate between NPR and INR?",
    answer:
      "The Nepalese Rupee is pegged to the Indian Rupee at a fixed exchange rate: 100 Indian Rupees (INR) equals 160 Nepalese Rupees (NPR).",
  },
  {
    category: "Campus Life",
    question: "Are vegetarian and Nepali food options available in college hostels?",
    answer:
      "Yes. Most campuses with significant Nepali populations provide north Indian and continental food, with vegetarian and non-vegetarian mess facilities. Many campuses even host special Dashain and Tihar gatherings organized by the Nepali student associations.",
  },
  {
    category: "Campus Life",
    question: "Can I open an Indian bank account after arriving at campus?",
    answer:
      "Yes. Universities have bank branches (such as SBI, Indian Bank, or HDFC) right on campus. With your bona-fide student certificate and Nepali passport/citizenship, you can open a student savings account and activate Google Pay / PhonePe (UPI) for daily transactions.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["All", "Legal & Visa", "Eligibility & Docs", "Fees & Banking", "Campus Life"];

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
            Clear, authoritative answers to the most common queries from Nepali students and parents regarding studying in India.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search questions (e.g. NOC, visa, NEB marksheet, banking)..."
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
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pl-14">
                      {faq.answer}
                    </div>
                  )}
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
            Our counselor team in Putalisadak, Kathmandu is ready to verify your eligibility and walk you through every step.
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
