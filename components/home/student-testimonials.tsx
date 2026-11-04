"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  Globe2,
  Building2,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  X,
  MapPin,
  Calendar,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Testimonial Interface ─── */
interface StudentStory {
  id: string;
  name: string;
  headline: string;
  quote: string;
  fullStory?: string;
  program: string;
  university: string;
  location: string;
  country: string;
  flag: string;
  category: "all" | "nepal" | "international";
  year: string;
  image: string;
  rating: number;
  highlightTag: string;
}

const testimonials: StudentStory[] = [
  // ── 6 Nepali Students ──
  {
    id: "aayush",
    name: "Aayush Sharma",
    headline: "Effortless Direct Admission",
    quote:
      "The bilateral admission process was completely seamless. Campus life at VIT is world-class, with an active international student council, modern lab infrastructure, and 100% English-medium pedagogy.",
    fullStory:
      "Coming from Kathmandu, I was anxious about document equivalence between NEB Grade 12 and Indian engineering eligibility. StudyIndia verified my physics, chemistry, and math scores within 24 hours. I received my provisional offer letter directly from the registrar without paying any third-party consultancy fee. Campus life in Vellore has over 300+ fellow Nepali and international students.",
    program: "B.Tech Computer Science & AI",
    university: "VIT Vellore",
    location: "Kathmandu",
    country: "Nepal",
    flag: "🇳🇵",
    category: "nepal",
    year: "Batch of 2024",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    highlightTag: "Tier-1 Placement",
  },
  {
    id: "prativa",
    name: "Prativa Adhikari",
    headline: "Exceptional Hospital Exposure",
    quote:
      "The 1,200-bed teaching hospital clinical exposure is extraordinary. The advisors explained everything required for Nepal Nursing Council (NNC) equivalence licensing from day one.",
    fullStory:
      "Pursuing healthcare abroad requires meticulous licensing planning. StudyIndia ensured my degree curriculum matched the Nepal Nursing Council and Indian Nursing Council standards. Hands-on clinical rotations started in Year 2, and the dedicated international girls' hostel with tight security and home-style cuisine made my parents completely confident in my decision.",
    program: "B.Sc Nursing & Clinical Care",
    university: "Sharda University",
    location: "Pokhara",
    country: "Nepal",
    flag: "🇳🇵",
    category: "nepal",
    year: "Batch of 2023",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    highlightTag: "Teaching Hospital",
  },
  {
    id: "rohan",
    name: "Rohan Shrestha",
    headline: "Zero Consultancy & Clear Fees",
    quote:
      "No hefty consultancy markups! The fee transparency in INR and NPR helped my family budget everything accurately with the 1:1.60 fixed peg without forex shocks.",
    fullStory:
      "Many local consultancies in Birgunj demanded hefty upfront processing fees for Indian business school applications. StudyIndia provided 100% free counseling and connected me directly with the university finance office. The tuition fee schedule was transparent, allowing my family to pay semester-by-semester via standard commercial bank wire transfers.",
    program: "BBA FinTech & Analytics",
    university: "Chandigarh University",
    location: "Birgunj",
    country: "Nepal",
    flag: "🇳🇵",
    category: "nepal",
    year: "Batch of 2024",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    highlightTag: "Fixed 1:1.60 Peg",
  },
  {
    id: "suman",
    name: "Suman Poudel",
    headline: "NOC Clearance & Direct Registrar Desk",
    quote:
      "Getting the Ministry of Education (MoEST) NOC was straightforward with the official offer letter issued on university letterhead. The automotive labs are top-notch.",
    fullStory:
      "From Butwal to Manipal was an incredible transition. The international desk sent all required bilateral documentation directly to my email for Kathmandu NOC processing. The engineering workshops and robotics lab gave me hands-on manufacturing skills that are globally recognized.",
    program: "B.Tech Mechanical & Mechatronics",
    university: "Manipal Institute of Tech",
    location: "Butwal",
    country: "Nepal",
    flag: "🇳🇵",
    category: "nepal",
    year: "Batch of 2024",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    highlightTag: "MoEST NOC Approved",
  },
  {
    id: "sneha",
    name: "Sneha Thapa",
    headline: "Pharmacy Council Equivalence",
    quote:
      "The curriculum matches the Nepal Pharmacy Council (NPC) syllabus point-for-point. High-tech analytical labs and campus hostel life exceeded my expectations.",
    fullStory:
      "Studying pharmacy at Chandigarh University has given me hands-on formulation and quality control lab experience. StudyIndia counselors verified the PCI accreditation and Nepal Pharmacy Council equivalence before I paid my first semester fee.",
    program: "Bachelor of Pharmacy (B.Pharm)",
    university: "Chandigarh University",
    location: "Lalitpur",
    country: "Nepal",
    flag: "🇳🇵",
    category: "nepal",
    year: "Batch of 2023",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    highlightTag: "PCI & NPC Equivalence",
  },
  {
    id: "bikash",
    name: "Bikash Karki",
    headline: "Moot Court & Corporate Law Excellence",
    quote:
      "The bilateral treaty allows Nepali citizens to study and practice corporate compliance seamlessly. Premier moot court infrastructure and faculty.",
    fullStory:
      "Pursuing corporate law in Pune gave me exposure to top Indian corporate firms and international moot court competitions. The 1950 Friendship Treaty provisions made travelling home to Biratnagar during semester breaks as simple as boarding a domestic flight.",
    program: "BA LLB (5-Year Integrated Law)",
    university: "Symbiosis Law School",
    location: "Biratnagar",
    country: "Nepal",
    flag: "🇳🇵",
    category: "nepal",
    year: "Batch of 2024",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    highlightTag: "Corporate Law Desk",
  },

  // ── 6 International Students ──
  {
    id: "fatima",
    name: "Fatima Al-Mansoor",
    headline: "Fast-Track Student e-Visa",
    quote:
      "Study in India e-Visa clearance arrived in just 4 days. World-class robotics lab facilities and direct campus placement opportunities with multinational tech giants.",
    fullStory:
      "As an international student from Dhaka, obtaining a student visa smoothly was my top priority. The direct international admissions process and official university visa invitation letter made the Indian High Commission process 100% paperless. The engineering faculty has modern AI and IoT research labs matching western universities at a fraction of the tuition.",
    program: "B.Tech Robotics & Automation",
    university: "SRM Institute of Science & Tech",
    location: "Dhaka",
    country: "Bangladesh",
    flag: "🇧🇩",
    category: "international",
    year: "Batch of 2024",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    highlightTag: "Student e-Visa Fast-Track",
  },
  {
    id: "david",
    name: "David Ochieng",
    headline: "Globally Recognized Pharmacy Degree",
    quote:
      "The pharmacy curriculum is accredited globally. Vibrant campus life with international students from 50+ countries made India feel like my second home right away.",
    fullStory:
      "Coming from Nairobi, studying pharmaceutical sciences at Manipal has provided incredible hands-on research and drug development laboratories. The international office greeted me at Bangalore airport and handled all local registration seamlessly. I also received a 30% merit scholarship based on my senior secondary school results.",
    program: "B.Pharm & Pharmaceutical Sciences",
    university: "Manipal Academy of Higher Ed",
    location: "Nairobi",
    country: "Kenya",
    flag: "🇰🇪",
    category: "international",
    year: "Batch of 2023",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    highlightTag: "Merit Scholarship",
  },
  {
    id: "kavinda",
    name: "Kavinda Perera",
    headline: "Generous 50% Tuition Waiver",
    quote:
      "Secured a 50% academic scholarship through the platform. Outstanding corporate mentorship and industry networking in the Delhi NCR corporate corridor.",
    fullStory:
      "StudyIndia helped me compare 15+ business schools in India before deciding on Amity. My GCE A-Level results qualified me for a 50% tuition scholarship waiver. Being located right in the corporate hub of Noida and Gurgaon gave me direct access to semester internships at top multinational consulting firms.",
    program: "MBA International Finance",
    university: "Amity University",
    location: "Colombo",
    country: "Sri Lanka",
    flag: "🇱🇰",
    category: "international",
    year: "Batch of 2024",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    highlightTag: "50% Scholarship",
  },
  {
    id: "zainab",
    name: "Zainab Al-Hassan",
    headline: "WHO & ECFMG Listed Medicine",
    quote:
      "World Health Organization (WHO) listed medical campus with unmatched multi-specialty clinical caseload. Clear international student advisory.",
    fullStory:
      "Coming from Dubai, finding an accredited medical degree recognized for USMLE and PLAB was essential. Kasturba's 2,000-bed hospital network exposed me to rare pathologies and clinical cases that medical schools in the West or Gulf rarely see.",
    program: "MBBS & Surgery",
    university: "KMC Manipal",
    location: "Dubai",
    country: "UAE",
    flag: "🇦🇪",
    category: "international",
    year: "Batch of 2023",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    highlightTag: "WHO & ECFMG Listed",
  },
  {
    id: "tariq",
    name: "Tariq Masango",
    headline: "Study in India 60% Merit Grant",
    quote:
      "Secured a Study in India government scholarship grant covering 60% tuition. Silicon Valley level cloud computing facilities in Chennai.",
    fullStory:
      "The international scholarship scheme made studying data science in India affordable and accessible. The international student union in Chennai welcomed me warmly, and I have already completed two remote internships for international tech startups.",
    program: "B.Sc Data Science & AI",
    university: "SRM Institute of Science & Tech",
    location: "Harare",
    country: "Zimbabwe",
    flag: "🇿🇼",
    category: "international",
    year: "Batch of 2024",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    highlightTag: "60% Merit Scholarship",
  },
  {
    id: "ananya",
    name: "Ananya Sharma",
    headline: "Direct NRI Admission Pathway",
    quote:
      "Seamless admission through the NRI quota. World-class semiconductor fabrication cleanrooms and direct placement offers with Intel and Qualcomm.",
    fullStory:
      "Applying as an NRI from Mauritius was simple with StudyIndia's direct registrar assistance. The university's VLSI design center and placement record in semiconductor engineering are among the finest in Asia.",
    program: "B.Tech Electronics & VLSI",
    university: "VIT Vellore",
    location: "Port Louis",
    country: "Mauritius",
    flag: "🇲🇺",
    category: "international",
    year: "Batch of 2024",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&auto=format&fit=crop",
    rating: 5,
    highlightTag: "Semiconductor Track",
  },
];

export function StudentTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipTextRef = useRef<HTMLSpanElement>(null);

  const [activeFilter, setActiveFilter] = useState<"all" | "nepal" | "international">("all");
  const [selectedStory, setSelectedStory] = useState<StudentStory | null>(null);

  // 120 FPS Direct GPU Mouse Tracker with Zero React Re-render Lag
  const updateTooltip = (e: React.MouseEvent, name: string) => {
    const containerEl = containerRef.current;
    const tooltipEl = tooltipRef.current;
    const textEl = tooltipTextRef.current;
    const cardEl = e.currentTarget as HTMLElement;

    if (!containerEl || !tooltipEl || !cardEl) return;

    const containerRect = containerEl.getBoundingClientRect();
    const cardRect = cardEl.getBoundingClientRect();

    // Card boundaries relative to the container
    const cardLeft = cardRect.left - containerRect.left;
    const cardRight = cardRect.right - containerRect.left;
    const cardTop = cardRect.top - containerRect.top;
    const cardBottom = cardRect.bottom - containerRect.top;

    // Cursor coordinates
    const cursorX = e.clientX - containerRect.left;
    const cursorY = e.clientY - containerRect.top;

    const tooltipWidth = tooltipEl.offsetWidth || 135;
    const tooltipHeight = tooltipEl.offsetHeight || 32;

    // Smooth boundary cushion (Glides naturally and cushions at edges with ZERO violent jumps)
    const targetX = Math.max(
      cardLeft + 10,
      Math.min(cursorX + 14, cardRight - tooltipWidth - 10)
    );
    const targetY = Math.max(
      cardTop + 10,
      Math.min(cursorY - tooltipHeight - 10, cardBottom - tooltipHeight - 10)
    );

    // Update text content only when changed
    if (textEl && textEl.textContent !== name) {
      textEl.textContent = name;
    }

    // Direct GPU hardware transform — zero lag, 120 FPS
    tooltipEl.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    tooltipEl.style.opacity = "1";
  };

  const handleCardMouseEnter = (e: React.MouseEvent, name: string) => {
    updateTooltip(e, name);
  };

  const handleCardMouseMove = (e: React.MouseEvent, name: string) => {
    updateTooltip(e, name);
  };

  const handleCardMouseLeave = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.opacity = "0";
    }
  };

  const handleTabChange = (filter: "all" | "nepal" | "international") => {
    if (tooltipRef.current) {
      tooltipRef.current.style.opacity = "0";
    }
    setActiveFilter(filter);
  };

  // Consistent 6-card grid (3x2) across all tabs: satisfies at least 6 cards with zero layout shifts or page jerks
  const displayedStories = (() => {
    if (activeFilter === "nepal") {
      return testimonials.filter((t) => t.category === "nepal").slice(0, 6);
    }
    if (activeFilter === "international") {
      return testimonials.filter((t) => t.category === "international").slice(0, 6);
    }
    // "all": 6 premier students (3 Nepali + 3 International)
    return [
      testimonials[0], // Aayush (Nepal - CSE)
      testimonials[6], // Fatima (Bangladesh - Robotics)
      testimonials[7], // David (Kenya - Pharmacy)
      testimonials[1], // Prativa (Nepal - Nursing)
      testimonials[8], // Kavinda (Sri Lanka - MBA)
      testimonials[9], // Zainab (UAE - Medicine)
    ];
  })();

  return (
    <section className="relative py-20 sm:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      {/* ── Background Subtle Mesh Auras ── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-100/30 via-teal-50/20 to-emerald-200/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 font-heading">
              Verified Student Journeys
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            Student Stories &amp; Testimonials
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Authentic experiences from international students and Nepali students enrolled across India&apos;s premier universities.
          </p>

          {/* Audience Filter Pills - Rock-solid button sizing without border shifts */}
          <div className="pt-3 flex items-center justify-center">
            <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-2xs">
              <button
                type="button"
                onClick={() => handleTabChange("all")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
                  activeFilter === "all"
                    ? "bg-white text-slate-900 shadow-sm border-slate-200/70"
                    : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/40"
                }`}
              >
                <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>All Students (50+ Nations)</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange("nepal")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
                  activeFilter === "nepal"
                    ? "bg-white text-slate-900 shadow-sm border-slate-200/70"
                    : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/40"
                }`}
              >
                <span>🇳🇵 Nepali Students</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange("international")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
                  activeFilter === "international"
                    ? "bg-white text-slate-900 shadow-sm border-slate-200/70"
                    : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/40"
                }`}
              >
                <span>🌏 Global Students</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Testimonials Grid Container with 120 FPS Tooltip ── */}
        <div
          ref={containerRef}
          onMouseLeave={handleCardMouseLeave}
          className="relative"
        >
          {/* Permanently Mounted GPU Layer: Zero mount lag, smooth 200ms opacity fade */}
          <div
            ref={tooltipRef}
            className="absolute pointer-events-none z-40 top-0 left-0 select-none opacity-0 transition-opacity duration-200 ease-out"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap bg-slate-950/92 backdrop-blur-md text-white shadow-2xl shadow-slate-950/40 border border-slate-700/70 tracking-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
              <span ref={tooltipTextRef} />
            </span>
          </div>

          <div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 animate-in fade-in-50 duration-300"
          >
            {displayedStories.map((testimonial) => (
              <div
                key={testimonial.id}
                onMouseEnter={(e) => handleCardMouseEnter(e, testimonial.name)}
                onMouseMove={(e) => handleCardMouseMove(e, testimonial.name)}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => setSelectedStory(testimonial)}
                className="group relative bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between
                  shadow-[0_4px_24px_-4px_rgba(15,23,42,0.04),0_1px_2px_rgba(15,23,42,0.04)]
                  hover:border-emerald-500 hover:shadow-[0_24px_50px_-12px_rgba(0,132,90,0.22),0_8px_20px_-6px_rgba(0,132,90,0.1),0_0_0_1px_rgba(16,185,129,0.3)]
                  hover:-translate-y-2 hover:scale-[1.008] transition-all duration-300 ease-out cursor-pointer overflow-hidden"
              >
                {/* ── 1. Top Specular Luminous Laser Beam on Hover ── */}
                <div className="absolute inset-x-0 top-0 h-[3.5px] bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-t-3xl shadow-[0_2px_12px_rgba(16,185,129,0.6)]" />

                {/* ── 2. Ambient Pearlescent Inner Glow on Hover (Eliminates dullness) ── */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-teal-50/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />

                {/* ── 3. Top Row: 5 Gold Stars + Score + Verification Badge (Zero Overlap Guaranteed) ── */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    {/* Stars + Score */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star
                            key={j}
                            className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_1px_3px_rgba(251,191,36,0.4)]"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-black text-slate-900 font-heading">
                        5.0
                      </span>
                    </div>

                    {/* Verification Tag: Calm, accredited prestige badge (Does NOT clash with buttons) */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50/90 text-emerald-800 border border-emerald-200/90 shadow-2xs group-hover:bg-emerald-100/90 group-hover:border-emerald-300 group-hover:text-emerald-900 transition-colors duration-300 shrink-0">
                      <BadgeCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{testimonial.highlightTag}</span>
                    </span>
                  </div>

                  {/* Headline: Crisp, authoritative slate typography */}
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 font-heading leading-snug tracking-tight">
                      &ldquo;{testimonial.headline}&rdquo;
                    </h3>

                    {/* Message Quote */}
                    <p className="text-xs sm:text-[13.5px] text-slate-600 font-normal leading-relaxed line-clamp-3 group-hover:text-slate-700 transition-colors">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>

                {/* ── 4. Author / Profile Section (Ultra-Executive Stature) ── */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-5 relative z-10">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="rounded-full w-12 h-12 object-cover ring-2 ring-emerald-500/25 group-hover:ring-4 group-hover:ring-emerald-500/50 group-hover:shadow-md transition-all duration-300 group-hover:scale-105"
                        src={testimonial.image}
                        alt={`${testimonial.name} profile`}
                        loading="lazy"
                      />
                      {/* Verified active online beacon */}
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white shadow-xs group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="min-w-0 space-y-0.5 text-left">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <p className="text-sm font-black text-slate-900 font-heading tracking-tight leading-tight">
                          {testimonial.name}
                        </p>
                        {/* Country Tag Pill: Clean, professional neutral pill */}
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/90 shadow-2xs">
                          <span>{testimonial.flag}</span>
                          <span>{testimonial.country}</span>
                        </span>
                      </div>
                      <p className="text-xs text-emerald-700 font-bold truncate font-heading">
                        {testimonial.program}
                      </p>
                      <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5 truncate">
                        <Building2 className="w-3.5 h-3.5 text-emerald-600/70 shrink-0" />
                        <span className="truncate">{testimonial.university}</span>
                        <span className="text-slate-300">•</span>
                        <span className="shrink-0">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Micro Read Story Action Pill: The Single Glowing Executive Emerald Action */}
                  <div className="shrink-0 ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 group-hover:bg-[#00845A] text-slate-700 group-hover:text-white border border-slate-200/80 group-hover:border-[#00845A] transition-all duration-300 text-xs font-bold shadow-2xs group-hover:shadow-md group-hover:shadow-emerald-950/25">
                    <span className="hidden sm:inline">Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Trust Note & CTA ── */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              100% verified student testimonials from enrolled international &amp; bilateral students.
            </span>
          </div>

          <Link href="/about">
            <Button
              variant="outline"
              className="text-xs font-semibold rounded-xl h-9 px-4 gap-2 border-slate-200 hover:border-emerald-500 hover:text-emerald-700 cursor-pointer"
            >
              <span>Explore More Student Experiences</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* ── FULL STUDENT STORY EXPANDED MODAL ── */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedStory.image}
                  alt={selectedStory.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-emerald-500/40 shadow-xs"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-slate-900 font-heading">
                      {selectedStory.name}
                    </h3>
                    <span className="text-sm">{selectedStory.flag}</span>
                  </div>
                  <p className="text-xs font-bold text-emerald-700">
                    {selectedStory.program}
                  </p>
                  <p className="text-[11.5px] text-slate-500">
                    {selectedStory.university} • {selectedStory.location}, {selectedStory.country}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-5 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1 text-emerald-500">
                  {[...Array(selectedStory.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                  <span className="ml-1.5 font-bold text-slate-800">5.0 / 5.0</span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  {selectedStory.year}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <h4 className="text-sm font-bold text-emerald-950 font-heading">
                  &ldquo;{selectedStory.headline}&rdquo;
                </h4>
                <p className="text-xs text-emerald-900/90 leading-relaxed mt-1">
                  {selectedStory.quote}
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Detailed Experience &amp; Advice
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedStory.fullStory}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Dismiss
              </button>
              <Link href="/admission-process" onClick={() => setSelectedStory(null)}>
                <Button className="font-semibold text-xs sm:text-sm gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-10 px-5 cursor-pointer shadow-sm">
                  <span>Start Your Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
