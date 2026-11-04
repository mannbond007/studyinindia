"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  GraduationCap,
  ShieldCheck,
  Banknote,
  FileCheck2,
  Building2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Globe2,
  Users,
  Award,
  Search,
  MessageSquare,
  BookOpen,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface StudentQA {
  id: string;
  category: "recognition" | "costs" | "admission" | "scholarships" | "campus" | "visas";
  categoryLabel: string;
  question: string;
  studentDilemma: string;
  answer: string;
  keyPoints: string[];
  statBadge: string;
  quickTakeaway: string;
}

const studentQAs: StudentQA[] = [
  {
    id: "degree-recognition",
    category: "recognition",
    categoryLabel: "Degrees & Recognition",
    question: "Are Indian university degrees recognized internationally and back in my home country?",
    studentDilemma:
      "I don't want to invest 3–4 years and then discover my degree isn't recognized for higher studies abroad (US, UK, Canada, Australia) or by professional licensing councils back home.",
    answer:
      "Indian universities approved by the UGC (University Grants Commission) and accredited with NAAC 'A+' hold comprehensive global recognition. For engineering graduates, India is a permanent signatory of the Washington Accord (NBA), meaning Indian B.Tech degrees are treated as equivalent to degrees from the United States (ABET), United Kingdom, Australia, and Japan. Medical and health sciences institutions are listed in the World Directory of Medical Schools (WHO/WDOMS) and recognized for USMLE (USA) and PLAB (UK).",
    keyPoints: [
      "Washington Accord signatory — Global engineering mobility to US, UK, Australia, & Canada.",
      "Tribhuvan University (TU CDC) equivalence guaranteed for all UGC-recognized universities.",
      "Accredited for professional licensure: Nepal Engineering Council (NEC), Nepal Nursing Council (NNC), and Nepal Pharmacy Council (NPC).",
      "World Education Services (WES) verified for express Canadian and US immigration.",
    ],
    statBadge: "Washington Accord Accredited",
    quickTakeaway: "100% globally recognized for higher studies & professional licensing.",
  },
  {
    id: "total-costs-roi",
    category: "costs",
    categoryLabel: "Tuition & Living Costs",
    question: "What is the true cost of studying & living in India compared to the US, UK, or Australia?",
    studentDilemma:
      "My family cannot afford $35,000 to $60,000 per year for tuition and rent in Western universities. Is India truly high quality at a realistic budget?",
    answer:
      "India provides one of the world's highest Return on Investment (ROI) in higher education. While a 4-year undergraduate degree in Canada or Australia exceeds $150,000 USD, a premier Indian university degree costs between INR 1.5 Lakh to 4.5 Lakh ($1,800 – $5,400 USD) per year for tuition. On-campus luxury hostels with 3 daily meals, Wi-Fi, laundry, and round-the-clock security cost just INR 90,000 to 1.6 Lakh ($1,100 – $1,900 USD) annually. You graduate with zero crushing student loan debt.",
    keyPoints: [
      "Save over $120,000 USD compared to North American and European universities.",
      "Fixed 1:1.60 currency peg for Nepali families with zero foreign exchange volatility shocks.",
      "Comprehensive on-campus living: housing, meals, high-speed internet, and gym under $160/month.",
      "Exact same multinational tech and corporate placement opportunities at 1/10th the financial burden.",
    ],
    statBadge: "Save 80–90% on Global Tuition",
    quickTakeaway: "World-class education with zero crushing student debt.",
  },
  {
    id: "entrance-exams-admission",
    category: "admission",
    categoryLabel: "Direct Admission & Exams",
    question: "Do international and Nepali students have to take brutal entrance exams like JEE Main, NEET, or CUET?",
    studentDilemma:
      "Millions of Indian students prepare for years in coaching centers for JEE or NEET. Do I have to sit for these high-stress domestic exams to secure admission?",
    answer:
      "No! Under the Ministry of Education's Bilateral and international student quotas, international students and Nepali students are admitted directly based on their senior secondary school academic merit (Grade 12 / NEB / CBSE / Cambridge A-Levels / IB transcripts). You do NOT need a JEE Main, CUET, or state entrance rank for engineering, computer science, management, pharmacy, or humanities programs. Admission is transparent and provisional offer letters are issued within 7 to 10 working days.",
    keyPoints: [
      "Zero domestic entrance exam stress (No JEE Main or CUET required).",
      "Direct merit-based evaluation of NEB (+2), CBSE, A-Levels, or equivalent Grade 12 marksheets.",
      "Fast-track provisional admission letters issued directly on university letterhead in 7–10 working days.",
      "100% transparent fee structure — zero capitation fees, zero management donations.",
    ],
    statBadge: "Direct Merit Admission",
    quickTakeaway: "Apply with your Grade 12 marksheet — no high-stakes entrance exams.",
  },
  {
    id: "scholarships-financial-aid",
    category: "scholarships",
    categoryLabel: "Scholarships & Aid",
    question: "Are scholarships for international students genuine, or is it just marketing talk?",
    studentDilemma:
      "Every consultancy advertises '100% scholarships', but when you show up, the fee stays the same. Can I actually get a legitimate tuition fee reduction?",
    answer:
      "Scholarships through StudyIndia are real, audited, and applied directly to your university tuition invoice before you pay. Through our partner universities' international merit quotas and bilateral scholarship schemes, students with 75%+ or 3.2+ GPA automatically qualify for 20% to 50% tuition waivers. High achievers (85%+ or top extracurricular honors) can secure up to 70% to 100% academic waivers for their full course duration.",
    keyPoints: [
      "Official university and international merit scholarship quotas.",
      "Automatic 20% to 50% tuition reduction for GPA 3.2+ or 75%+ in Grade 12.",
      "Scholarships are printed directly on your official University Offer Letter before any payment.",
      "StudyIndia provides transparent scholarship pre-assessment and application processing.",
    ],
    statBadge: "Up to 50–100% Merit Waivers",
    quickTakeaway: "Verified waivers printed directly on your official offer letter.",
  },
  {
    id: "career-placements-internships",
    category: "recognition",
    categoryLabel: "Placements & Careers",
    question: "What kind of campus placements and corporate internships will I actually access?",
    studentDilemma:
      "I want to make sure I get tangible corporate exposure and don't end up with an unemployed degree.",
    answer:
      "India is the world's 5th largest economy and the premier tech and engineering innovation hub of Asia. Major tech corridors in Bangalore, Hyderabad, Pune, Chennai, and Delhi NCR host global R&D centers for Google, Microsoft, Amazon, Infosys, Intel, and Deloitte. Premier partner universities host 500+ visiting Fortune 500 recruiters each year. In 2024–2025, over 85% of eligible international graduates received paid campus offers, with salary packages ranging from INR 6 LPA to 45 LPA ($7,500 – $54,000 USD).",
    keyPoints: [
      "500+ visiting corporate giants: Microsoft, Amazon, TCS, Deloitte, Qualcomm, and Cognizant.",
      "Mandatory 6-month industry internships in leading tech parks and research corridors.",
      "Dedicated university International Placement Desks to assist with global corporate hiring.",
      "Alumni working across Silicon Valley, Europe, Singapore, the Middle East, and South Asia.",
    ],
    statBadge: "500+ Fortune 500 Recruiters",
    quickTakeaway: "Direct access to Asia's booming tech & corporate employment hub.",
  },
  {
    id: "campus-safety-food-life",
    category: "campus",
    categoryLabel: "Campus Life & Safety",
    question: "What is daily life, campus safety, food, and hostel accommodation really like?",
    studentDilemma:
      "My parents are deeply worried about my safety away from home, hostel cleanliness, and whether I will find food I can digest and enjoy.",
    answer:
      "Top Indian universities operate as self-contained, gated smart cities spanning 100 to 600+ lush green acres. They feature 24/7 CCTV surveillance, biometric hostel access, on-campus multi-specialty health centers, and dedicated international student welfare desks. Hostels provide air-conditioned or air-cooled rooms, high-speed Wi-Fi, study lounges, and laundromats. Dining halls serve hygienic multi-cuisine options: North Indian, South Indian, Nepali dal-bhat, continental, vegetarian, and certified halal meals.",
    keyPoints: [
      "Gated campus smart cities with 24/7 biometric security and zero-tolerance anti-ragging policies.",
      "Dedicated International Student Hostels with private/shared AC rooms and attached baths.",
      "Multi-cuisine mess menus catering to Nepali, South Asian, African, and Middle Eastern palates.",
      "Active cultural councils celebrating Dashain, Tihar, Eid, Diwali, and international food fests.",
    ],
    statBadge: "24/7 Gated Security & Care",
    quickTakeaway: "A safe, vibrant second home with authentic food and cultural warmth.",
  },
  {
    id: "visa-paperwork-logistics",
    category: "visas",
    categoryLabel: "Visas & Paperwork",
    question: "How complex is the visa and travel paperwork for Nepali vs global international students?",
    studentDilemma:
      "Will I get tangled in complicated embassy appointments, police clearances, or immigration delays?",
    answer:
      "The paperwork is straightforward and streamlined. For Nepali students: Under the historic 1950 Indo-Nepal Friendship Treaty, you have full visa exemption—you travel freely with your Nepali Citizenship card or Passport. You only need your university offer letter to get a MoEST No Objection Certificate (NOC) for bank transfers. For Global Students (Bangladesh, Sri Lanka, Africa, Middle East): Indian diplomatic missions issue an expedited paperless e-Student Visa in 5 to 7 business days with university sponsorship.",
    keyPoints: [
      "Nepali Citizens: 100% Visa-Free travel with valid Citizenship or Passport.",
      "Simple MoEST NOC processing for foreign exchange wire transfers via any Nepali commercial bank.",
      "Global Students: Fast-track 5–7 day e-Student Visa directly through Indian consular e-Visa services.",
      "University airport pick-up services and seamless FRRO / local registration desk support.",
    ],
    statBadge: "Visa-Free for Nepal / 5-Day e-Visa",
    quickTakeaway: "Streamlined bilateral entry with complete advisory paperwork support.",
  },
  {
    id: "studyindia-vs-consultancies",
    category: "admission",
    categoryLabel: "Why StudyIndia vs Agents",
    question: "Why should I apply through StudyIndia instead of paying a local education consultancy?",
    studentDilemma:
      "Consultancies in my hometown demand NPR 50,000 to 1,50,000 in 'processing fees' and push colleges where they earn the biggest cut. What makes StudyIndia different?",
    answer:
      "StudyIndia is an official university admissions technology platform, not a middleman consultancy. We charge only a transparent standard application fee of $100 USD for international students and NPR 1,000 for Nepali students, with zero unauthorized agency markups. Traditional agents often hold your original certificates hostage, inflate fee sheets, and steer you toward second-tier colleges. With StudyIndia, you get transparent university fee sheets in INR and NPR, direct registrar offer letters, direct bank payments, and 1-on-1 mentorship with enrolled seniors.",
    keyPoints: [
      "Transparent Application Fee — $100 USD for international students and NPR 1,000 for Nepali students.",
      "Direct university fee schedules — No hidden consultancy markups or inflated tuition.",
      "You keep 100% custody of your original educational documents.",
      "Direct communication with university international admissions deans and registrars.",
    ],
    statBadge: "Transparent Official Fee",
    quickTakeaway: "Transparent official fee: $100 USD for international applicants and NPR 1,000 for Nepali students.",
  },
];

const categories = [
  { id: "all", label: "All Student Questions", icon: HelpCircle },
  { id: "recognition", label: "Degrees & Recognition", icon: Award },
  { id: "costs", label: "Tuition & Costs", icon: Banknote },
  { id: "admission", label: "Direct Admission & Exams", icon: GraduationCap },
  { id: "scholarships", label: "Scholarships & Aid", icon: Sparkles },
  { id: "campus", label: "Campus Life & Safety", icon: Building2 },
  { id: "visas", label: "Visas & Paperwork", icon: FileCheck2 },
];

export function WhyStudyIndiaQA() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string>("degree-recognition");

  const filteredQAs = studentQAs.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.studentDilemma.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyPoints.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="relative py-14 sm:py-20 bg-[#fafbfc] border-t border-slate-200/80 overflow-hidden">
      {/* ── Background Ambient Glowing Lights ── */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[400px] bg-gradient-to-br from-emerald-100/40 via-teal-100/20 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[350px] bg-gradient-to-tr from-emerald-100/30 via-slate-100/40 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* ── Section Header: Student Perspective ── */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          {/* Minimal Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 font-heading">
              Why Choose India?
            </span>
          </div>

          {/* Compact 2-Line Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 font-heading tracking-tight leading-snug">
            <span>Explore Your Questions. Discover Your Opportunities. </span>
            <span className="text-emerald-700 block sm:inline">
              Make an Informed Decision.
            </span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Find answers to your questions about Indian universities, admission requirements, tuition fees, scholarships, eligibility, student visas, and career opportunities in one unified place.
          </p>

          {/* Sleek Search Bar */}
          <div className="pt-1 max-w-md mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 w-4 h-4 text-emerald-600 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (fees, visa, scholarships, safety)..."
                className="w-full pl-10 pr-12 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-600 transition-all text-slate-900 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-xs font-bold text-slate-400 hover:text-slate-700 px-1.5 py-0.5 rounded cursor-pointer transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Segmented Category Filter Chips */}
          <div className="pt-1 flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-600 border-slate-200/90 hover:border-emerald-300 hover:text-emerald-900 hover:bg-emerald-50/40 shadow-2xs"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-emerald-600"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Interactive Student Q&A Accordion Studio ── */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {filteredQAs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200/80 p-8 space-y-3">
              <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800 font-heading">
                No matching questions found
              </h3>
              <p className="text-xs text-slate-500">
                Try searching for different keywords like &ldquo;fees&rdquo;, &ldquo;visa&rdquo;, &ldquo;engineering&rdquo;, or &ldquo;hostel&rdquo;.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="text-xs font-semibold rounded-xl cursor-pointer"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            filteredQAs.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className={`group rounded-3xl transition-colors duration-300 border ${
                    isExpanded
                      ? "bg-white border-emerald-400/90 shadow-[0_16px_36px_-12px_rgba(0,132,90,0.18),0_0_0_1px_rgba(16,185,129,0.2)]"
                      : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-xs"
                  } overflow-hidden`}
                >
                  {/* Top Specular Shimmer on Active */}
                  <div
                    className={`h-[3px] bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-600 shadow-[0_2px_8px_rgba(16,185,129,0.5)] transition-opacity duration-300 ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Accordion Trigger Header — Constant Stable Height (Zero Jerk) */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="space-y-2 min-w-0 pr-2">
                      {/* Meta Pill Tag */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{item.categoryLabel}</span>
                        </span>

                        <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          {item.statBadge}
                        </span>
                      </div>

                      {/* Question Heading */}
                      <h3
                        className={`text-base sm:text-lg font-black font-heading tracking-tight leading-snug transition-colors ${
                          isExpanded
                            ? "text-emerald-950"
                            : "text-slate-900 group-hover:text-emerald-900"
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>

                    {/* Ultra-Tactile 3D Morphing + / - Toggle Button */}
                    <div
                      className={`shrink-0 w-9 h-9 rounded-2xl flex items-center justify-center border transition-all duration-300 select-none ${
                        isExpanded
                          ? "bg-gradient-to-b from-emerald-500 via-[#00845A] to-[#006e4a] border-emerald-400/80 shadow-[0_3px_0_0_#004d34,0_6px_16px_rgba(0,132,90,0.35),inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(0,0,0,0.25)] translate-y-0.5"
                          : "bg-gradient-to-b from-white via-slate-50 to-slate-100 border-slate-300/90 shadow-[0_3px_0_0_#cbd5e1,0_4px_8px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,1)] group-hover:border-emerald-400 group-hover:shadow-[0_3px_0_0_#6ee7b7,0_6px_14px_rgba(16,185,129,0.2)] group-hover:-translate-y-0.5"
                      }`}
                      aria-label={isExpanded ? "Collapse answer" : "Expand answer"}
                    >
                      <div className="relative w-4 h-4 flex items-center justify-center pointer-events-none">
                        {/* 3D Horizontal Bar (Always visible) */}
                        <span
                          className={`absolute h-[2.5px] w-3.5 rounded-full transition-all duration-300 ${
                            isExpanded
                              ? "bg-white shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
                              : "bg-slate-700 group-hover:bg-emerald-800 shadow-[0_1px_0_rgba(255,255,255,0.9)]"
                          }`}
                        />
                        {/* 3D Vertical Bar (Rotates 90deg and scales to 0 to morph + into -) */}
                        <span
                          className={`absolute w-[2.5px] h-3.5 rounded-full transition-all duration-300 ease-out ${
                            isExpanded
                              ? "bg-white rotate-90 scale-0 opacity-0 shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
                              : "bg-slate-700 group-hover:bg-emerald-800 rotate-0 scale-100 opacity-100 shadow-[0_1px_0_rgba(255,255,255,0.9)]"
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Silky-Smooth Grid Animation Wrapper (min-h-0 prevents CSS grid snap) */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden min-h-0">
                      <div className="px-5 sm:px-6 pb-6 pt-4 space-y-4 text-left border-t border-slate-100/90">
                        {/* 1. The Student Dilemma Callout */}
                        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                          <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-emerald-900">
                            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                            <span>What Students &amp; Parents Ask Us:</span>
                          </div>
                          <p className="text-xs sm:text-[13px] text-emerald-950/90 font-medium italic leading-relaxed">
                            &ldquo;{item.studentDilemma}&rdquo;
                          </p>
                        </div>

                        {/* 2. The Comprehensive Professional Answer */}
                        <div className="space-y-3">
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                            {item.answer}
                          </p>

                          {/* Bulleted Proof Points */}
                          <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-2">
                            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                              Key Facts &amp; Guarantees:
                            </h4>
                            <ul className="space-y-1.5">
                              {item.keyPoints.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 leading-snug"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* 3. Bottom Takeaway Pill + Direct Action */}
                        <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-100">
                          <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Bottom Line: {item.quickTakeaway}</span>
                          </div>

                          <Link href="/courses">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-xl gap-1 px-3 h-8 cursor-pointer"
                            >
                              <span>Explore Matching Courses</span>
                              <ArrowRight className="w-3 h-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* ── Ask an Enrolled Senior / 1-on-1 Student Advisory Banner (Wide Executive Layout) ── */}
        <div className="w-full max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-[#052e22] via-[#093b2d] to-[#0f172a] px-7 py-8 sm:px-12 sm:py-10 text-white border border-emerald-500/25 shadow-[0_20px_50px_-12px_rgba(6,78,59,0.28)] relative overflow-hidden">
          {/* Subtle Ambient Accents */}
          <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 -top-20 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-extrabold border border-emerald-400/25 tracking-wide">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>Peer-to-Peer Student Advisory</span>
              </div>

              <h3 className="text-2xl sm:text-[28px] font-extrabold font-heading tracking-tight text-white leading-tight">
                Have a Personal Question We Didn&apos;t Cover?
              </h3>

              <p className="text-sm sm:text-[15px] text-slate-300/95 leading-relaxed">
                Connect directly with our international admissions counselors or speak 1-on-1 with an enrolled student from your home country currently studying in India.
              </p>

              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs font-semibold text-emerald-300/90">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  $100 USD (Intl) / NPR 1,000 (Nepal) Fee
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  50+ Countries Supported
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Direct Verified Campus Seniors
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 shrink-0">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm h-12 px-6 rounded-xl shadow-[0_8px_20px_-4px_rgba(16,185,129,0.45)] cursor-pointer gap-2.5 transition-all hover:-translate-y-0.5">
                  <MessageSquare className="w-4 h-4" />
                  <span>Talk to an Advisor</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/admission-process">
                <Button
                  variant="ghost"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white hover:text-white border border-white/25 hover:border-white/50 font-bold text-sm h-12 px-6 rounded-xl cursor-pointer backdrop-blur-md shadow-xs transition-all hover:-translate-y-0.5 gap-2.5"
                >
                  <Compass className="w-4 h-4 text-emerald-300" />
                  <span>Admission Guide</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
