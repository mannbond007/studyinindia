"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Building2,
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Globe,
  Clock,
  GraduationCap,
  Calculator,
  BookOpen,
  Star,
  CheckSquare,
  Square,
  ChevronRight,
  ChevronDown,
  Users,
  Home,
  FileCheck2,
  Compass,
  Layers,
  BadgeCheck,
  Plane,
  HeartPulse,
  Wifi,
  Search,
  X,
  Download,
  Scale,
  Briefcase,
  Utensils,
  Lock,
  Sparkles,
  FileText,
  ExternalLink,
  MessageSquare,
  HelpCircle,
  Check,
  Info,
  Navigation,
  Train,
  BedDouble,
} from "lucide-react";
import { University } from "@/lib/data/universities";
import { Course } from "@/lib/data/courses";
import { Button } from "@/components/ui/button";

type CurrencyCode = "INR" | "USD" | "NPR";

// Configurable reference exchange rates (Official fees are billed in INR by the university)
const EXCHANGE_RATES = {
  USD_PER_INR: 1 / 83.5, // 1 USD ≈ 83.5 INR
  NPR_PER_INR: 1.6, // 1 INR = 1.60 NPR (Official Peg)
};

interface UniversityDetailClientProps {
  university: University;
  universityCourses: Course[];
  similarUniversities: University[];
}

interface ProgrammeItem {
  id: string;
  stream: string;
  filterCategory: string;
  degree: string;
  specialisation: string;
  title: string;
  duration: string;
  durationYears: number;
  annualFeeINR: number;
  eligibility: string;
  requiredSubjects: string[];
  admissionRequirements: string;
  scholarshipMaxPercent: number;
  scholarshipNote: string;
  overview: string;
  curriculumHighlights: string[];
  careers: string[];
  applicationDeadline?: string;
  courseLink?: string;
  isCatalogVerified: boolean;
}

const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "programmes", label: "Courses & Programmes" },
  { id: "fee-structure", label: "Fee Structure" },
  { id: "scholarships", label: "Scholarships" },
  { id: "campus-facilities", label: "Campus & Facilities" },
  { id: "placements", label: "Placements" },
  { id: "international-students", label: "International Students" },
  { id: "document-checklist", label: "Document Checklist" },
  { id: "faqs", label: "FAQs" },
];

const DISCIPLINE_FILTERS = [
  "All Programmes",
  "Engineering & Technology",
  "Management",
  "Business",
  "Computer Applications",
  "Nursing",
  "Pharmacy",
  "Health Sciences",
];

const SCHOLARSHIP_TIERS = [
  {
    id: "tier-50",
    label: "85%+ or 3.6+ GPA",
    category: "Category A — Presidential Merit Scholarship",
    academicRequirement: "Minimum 85% aggregate or 3.60+ GPA in Grade 12 / High School",
    discountPercent: 50,
  },
  {
    id: "tier-30",
    label: "75%–84% or 3.2+ GPA",
    category: "Category B — International Dean's Merit Scholarship",
    academicRequirement: "75% to 84.9% aggregate or 3.20–3.59 GPA in Qualifying Exam",
    discountPercent: 30,
  },
  {
    id: "tier-20",
    label: "65%–74% or 2.8+ GPA",
    category: "Category C — Regional & SAARC Academic Grant",
    academicRequirement: "65% to 74.9% aggregate or 2.80–3.19 GPA in Qualifying Exam",
    discountPercent: 20,
  },
  {
    id: "tier-0",
    label: "50%–64% or 2.2+ GPA",
    category: "Standard Qualifying International Admission",
    academicRequirement: "Meets minimum statutory eligibility criteria (50%+ aggregate)",
    discountPercent: 0,
  },
];

const SCHOLARSHIP_CATEGORIES = [
  {
    id: "merit",
    name: "International Academic Merit Scholarship",
    description: "Based on Grade 12 / A-Level / IB / NEB +2 or Bachelor's aggregate marks.",
    maxWaiver: "Up to 50% Tuition Fee Waiver",
  },
  {
    id: "saarc",
    name: "SAARC & Regional Bilateral Quota",
    description: "Applicable fee concessions for eligible students from Nepal, Bhutan, Bangladesh & Sri Lanka.",
    maxWaiver: "15% – 35% Tuition Fee Concession",
  },
  {
    id: "sports",
    name: "Sports & Cultural Excellence Grant",
    description: "For national or state-level medalists and recognized extracurricular achievers.",
    maxWaiver: "20% – 50% Subject to Trial/Verification",
  },
];

const DOCUMENT_CHECKLIST = [
  {
    id: "doc-10",
    title: "Grade 10 / SEE Certificate & Marksheet",
    subtitle: "Official secondary school transcript and date-of-birth proof",
    mandatory: true,
  },
  {
    id: "doc-12",
    title: "Grade 12 / Higher Secondary (+2) Marksheet",
    subtitle: "NEB, CBSE, A-Levels, IB, WAEC, or equivalent board transcript",
    mandatory: true,
  },
  {
    id: "doc-id",
    title: "Valid Passport or National Citizenship ID",
    subtitle: "Passport required for e-Visa; Citizenship ID valid for Nepal & Bhutan nationals",
    mandatory: true,
  },
  {
    id: "doc-photo",
    title: "Passport-Size Photographs",
    subtitle: "Recent high-resolution digital photograph on a plain white background",
    mandatory: true,
  },
  {
    id: "doc-transcript",
    title: "Character, Migration & Transfer Certificates",
    subtitle: "Issued by the last attended school, college, or examination board",
    mandatory: true,
  },
  {
    id: "doc-noc",
    title: "Additional Programme-Specific Documents",
    subtitle: "MoEST No Objection Certificate (NOC) / Equivalence Certificate where applicable",
    mandatory: false,
  },
];

export function UniversityDetailClient({
  university,
  universityCourses,
  similarUniversities,
}: UniversityDetailClientProps) {
  // Global Currency State
  const [currency, setCurrency] = useState<CurrencyCode>("INR");

  // Sticky Nav Active Section
  const [activeSection, setActiveSection] = useState<string>("overview");

  // About Read More toggle
  const [aboutExpanded, setAboutExpanded] = useState<boolean>(false);

  // Courses & Programmes State
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("All Programmes");
  const [courseSearchQuery, setCourseSearchQuery] = useState<string>("");
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState<boolean>(false);
  const [detailModalProgramme, setDetailModalProgramme] = useState<ProgrammeItem | null>(null);

  // Complete Fee Structure Section State
  const [feeSectionProgIdx, setFeeSectionProgIdx] = useState<number>(0);

  // Interactive Fee & Scholarship Calculator State
  const [calcProgrammeIdx, setCalcProgrammeIdx] = useState<number>(0);
  const [selectedScholarshipId, setSelectedScholarshipId] = useState<string>(
    university.scholarshipAvailable ? "tier-30" : "tier-0"
  );
  const [selectedScholarshipCategory, setSelectedScholarshipCategory] = useState<string>("merit");
  const [hostelPreference, setHostelPreference] = useState<"ac" | "non-ac" | "none">("ac");

  // Campus Gallery State
  const [selectedGalleryFilter, setSelectedGalleryFilter] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<{
    title: string;
    category: string;
    description: string;
    image: string;
  } | null>(null);

  // Document Checklist State
  const [checkedDocs, setCheckedDocs] = useState<string[]>(["doc-10", "doc-12", "doc-id"]);

  // FAQ Accordion State (independent toggle prevents page-scroll jump when opening lower items)
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(idx) ? prev.filter((item) => item !== idx) : [...prev, idx]
    );
  };

  // Callback Modal / Enquiry State
  const [callbackModalOpen, setCallbackModalOpen] = useState<boolean>(false);
  const [callbackSubmitted, setCallbackSubmitted] = useState<boolean>(false);
  const [callbackForm, setCallbackForm] = useState({
    name: "",
    phone: "",
    country: "Nepal",
    programme: "",
  });

  // Format currency from INR using configurable reference rates
  const formatMoney = (amountINR: number) => {
    if (currency === "INR") {
      return `₹${Math.round(amountINR).toLocaleString("en-IN")}`;
    }
    if (currency === "USD") {
      const usd = Math.round(amountINR * EXCHANGE_RATES.USD_PER_INR);
      return `$${usd.toLocaleString("en-US")}`;
    }
    const npr = Math.round(amountINR * EXCHANGE_RATES.NPR_PER_INR);
    return `NPR ${npr.toLocaleString("en-IN")}`;
  };

  const naacBadgeLabel = university.naacGrade.includes("UGC")
    ? university.naacGrade
    : `NAAC ${university.naacGrade} Accredited`;

  // Build comprehensive, accurate Programme Catalog for this university
  const allProgrammes: ProgrammeItem[] = useMemo(() => {
    const baseTuitionFactor =
      university.naacGrade === "A++"
        ? 1.15
        : university.naacGrade === "A+"
          ? 1.0
          : 0.88;

    const mapStreamToCategory = (stream: string, degree: string): string => {
      const s = stream.toLowerCase();
      const d = degree.toLowerCase();
      if (d.includes("nurs") || s.includes("nurs")) return "Nursing";
      if (d.includes("pharm") || s.includes("pharm")) return "Pharmacy";
      if (s.includes("medical") || s.includes("health") || d === "mbbs") return "Health Sciences";
      if (d === "mba") return "Management";
      if (d === "bba") return "Business";
      if (d === "bca" || d === "mca" || s.includes("computer")) return "Computer Applications";
      if (s.includes("engineering") || d === "b.tech") return "Engineering & Technology";
      return stream;
    };

    const fromCoursesData: ProgrammeItem[] = universityCourses.map((c) => ({
      id: c.id,
      stream: c.stream,
      filterCategory: mapStreamToCategory(c.stream, c.degree),
      degree: c.degree,
      specialisation: c.highlightSubTitle.replace(/[()]/g, "") || c.primaryTag,
      title: c.name,
      duration: `${c.durationYears} Years (${c.durationYears * 2} Semesters)`,
      durationYears: c.durationYears,
      annualFeeINR: c.annualFeeINR,
      eligibility: `${c.eligibility.minimumEducation} — ${c.eligibility.minimumGpaOrPercentage}`,
      requiredSubjects: c.eligibility.requiredSubjects,
      admissionRequirements: c.eligibility.nepalEquivalenceNote,
      scholarshipMaxPercent: university.scholarshipAvailable ? 50 : 0,
      scholarshipNote: university.scholarshipAvailable
        ? "Up to 50% Merit Scholarship"
        : "Standard University Fee Structure",
      overview: c.overview,
      curriculumHighlights: [
        "Core foundational theory & laboratory practicals",
        "Industry-aligned specialization electives & capstone project",
        "Mandatory internship / clinical or industry training semester",
        "Outcome-Based Education (OBE) credit framework",
      ],
      careers: c.careerProspects,
      applicationDeadline: c.applicationDeadline,
      courseLink: `/courses/${c.id}`,
      isCatalogVerified: true,
    }));

    const standardUniversityProgrammes: ProgrammeItem[] = [
      {
        id: `${university.id}-btech-cse`,
        stream: "Engineering & Technology",
        filterCategory: "Engineering & Technology",
        degree: "B.Tech",
        specialisation: "Computer Science & Engineering (AI, ML & Cloud Tech)",
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years (8 Semesters)",
        durationYears: 4,
        annualFeeINR: Math.round((185000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "10+2 / Grade 12 with Physics & Mathematics (Min. 50%–55% Aggregate)",
        requiredSubjects: ["Physics", "Mathematics", "Chemistry / Computer Science"],
        admissionRequirements:
          "Direct admission based on Grade 12 / High School transcripts for international applicants. Recognized by AICTE & UGC.",
        scholarshipMaxPercent: university.scholarshipAvailable ? 50 : 0,
        scholarshipNote: university.scholarshipAvailable
          ? "Up to 50% Merit Scholarship"
          : "Standard University Tuition",
        overview:
          "Four-year undergraduate engineering degree focused on software systems, data structures, artificial intelligence, cloud architecture, and enterprise engineering.",
        curriculumHighlights: [
          "Data Structures, Algorithms & Object-Oriented Programming",
          "Operating Systems, DBMS & Computer Networks",
          "Artificial Intelligence, Machine Learning & Cloud Computing",
          "Final-Year Industry Capstone & Software Engineering Internship",
        ],
        careers: ["Software Development Engineer", "AI / ML Engineer", "Cloud Solutions Architect", "Systems Analyst"],
        isCatalogVerified: false,
      },
      {
        id: `${university.id}-bba`,
        stream: "Business",
        filterCategory: "Business",
        degree: "BBA",
        specialisation: "International Business, Finance & Marketing",
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years (6 Semesters)",
        durationYears: 3,
        annualFeeINR: Math.round((135000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "10+2 / Grade 12 in Any Stream from a Recognised Board (Min. 50%)",
        requiredSubjects: ["Any Stream (Commerce, Science, or Humanities)", "English"],
        admissionRequirements:
          "Transcript evaluation of Grade 12 marksheet. No entrance test mandatory for international quota seats.",
        scholarshipMaxPercent: university.scholarshipAvailable ? 40 : 0,
        scholarshipNote: university.scholarshipAvailable
          ? "Up to 40% Merit Scholarship"
          : "Standard University Tuition",
        overview:
          "Comprehensive undergraduate business programme preparing students for corporate leadership, financial analysis, entrepreneurship, and global trade management.",
        curriculumHighlights: [
          "Principles of Management, Microeconomics & Corporate Accounting",
          "Financial Management, Marketing Strategy & Business Analytics",
          "International Trade Law, Supply Chain & Digital Marketing",
          "Corporate Summer Internship & Business Simulation Project",
        ],
        careers: ["Business Analyst", "Corporate Finance Associate", "Brand & Marketing Manager", "Operations Executive"],
        isCatalogVerified: false,
      },
      {
        id: `${university.id}-mba`,
        stream: "Management",
        filterCategory: "Management",
        degree: "MBA",
        specialisation: "Dual Specialisation (Finance, Marketing, HR & Business Analytics)",
        title: "Master of Business Administration (MBA)",
        duration: "2 Years (4 Semesters)",
        durationYears: 2,
        annualFeeINR: Math.round((210000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "Bachelor's Degree in Any Discipline from a Recognised University (Min. 50%)",
        requiredSubjects: ["Undergraduate Degree Transcripts"],
        admissionRequirements:
          "Recognised 3-year or 4-year Bachelor's degree. International applicants are evaluated on academic merit and personal interview.",
        scholarshipMaxPercent: university.scholarshipAvailable ? 35 : 0,
        scholarshipNote: university.scholarshipAvailable
          ? "Up to 35% Merit Scholarship"
          : "Standard University Tuition",
        overview:
          "Executive-ready postgraduate management degree integrating case-study pedagogy, quantitative business analytics, corporate finance, and strategic leadership.",
        curriculumHighlights: [
          "Strategic Management, Managerial Economics & Corporate Valuation",
          "Business Intelligence, Data-Driven Decision Making & FinTech",
          "Global Supply Chain, Leadership & Organizational Behavior",
          "Industry Consulting Project & Corporate Placement Residency",
        ],
        careers: ["Management Consultant", "Product Manager", "Financial Controller", "Senior Operations Manager"],
        isCatalogVerified: false,
      },
      {
        id: `${university.id}-bca`,
        stream: "Computer Applications",
        filterCategory: "Computer Applications",
        degree: "BCA",
        specialisation: "Full-Stack Software Development & Data Science",
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years (6 Semesters)",
        durationYears: 3,
        annualFeeINR: Math.round((125000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "10+2 / Grade 12 in Any Stream from a Recognised Board (Min. 50%)",
        requiredSubjects: ["Grade 12 Qualification (Mathematics / Computer Science preferred)"],
        admissionRequirements:
          "Direct international admission based on Grade 12 marksheet verification.",
        scholarshipMaxPercent: university.scholarshipAvailable ? 40 : 0,
        scholarshipNote: university.scholarshipAvailable
          ? "Up to 40% Merit Scholarship"
          : "Standard University Tuition",
        overview:
          "Application-oriented computing degree designed for students seeking rapid entry into software engineering, web & mobile development, and cloud administration.",
        curriculumHighlights: [
          "Programming in Python, Java & Modern JavaScript Frameworks",
          "Relational & NoSQL Databases, Web Architecture & APIs",
          "Cloud Deployment, Cybersecurity Fundamentals & DevOps",
          "Live Software Application Development Project",
        ],
        careers: ["Full-Stack Developer", "Software Engineer", "Database Administrator", "Data Analyst"],
        isCatalogVerified: false,
      },
      {
        id: `${university.id}-mca`,
        stream: "Computer Applications",
        filterCategory: "Computer Applications",
        degree: "MCA",
        specialisation: "Enterprise Software Engineering & Cloud Computing",
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years (4 Semesters)",
        durationYears: 2,
        annualFeeINR: Math.round((155000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "BCA / B.Sc (CS/IT) or Bachelor's Degree with Mathematics (Min. 50%)",
        requiredSubjects: ["Undergraduate Degree", "Mathematics at 10+2 or Graduation level"],
        admissionRequirements:
          "Undergraduate transcript verification as per UGC and AICTE postgraduate norms.",
        scholarshipMaxPercent: university.scholarshipAvailable ? 30 : 0,
        scholarshipNote: university.scholarshipAvailable
          ? "Up to 30% Merit Scholarship"
          : "Standard University Tuition",
        overview:
          "Advanced postgraduate computing programme focused on enterprise software architecture, distributed systems, artificial intelligence, and cybersecurity.",
        curriculumHighlights: [
          "Advanced Algorithms, Distributed Computing & Microservices",
          "Machine Learning, Deep Learning & Big Data Engineering",
          "Enterprise Cloud Infrastructure & DevSecOps",
          "6-Month Industry Software R&D Internship",
        ],
        careers: ["Solutions Architect", "Senior Backend Engineer", "Cloud DevOps Engineer", "AI Application Developer"],
        isCatalogVerified: false,
      },
      {
        id: `${university.id}-bpharm`,
        stream: "Pharmacy",
        filterCategory: "Pharmacy",
        degree: "B.Pharm",
        specialisation: "Pharmaceutical Sciences & Clinical Pharmacology",
        title: "Bachelor of Pharmacy (B.Pharm)",
        duration: "4 Years (8 Semesters)",
        durationYears: 4,
        annualFeeINR: Math.round((165000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "10+2 / Grade 12 with Physics, Chemistry & Biology/Mathematics (Min. 55%)",
        requiredSubjects: ["Physics", "Chemistry", "Biology or Mathematics", "English"],
        admissionRequirements:
          "Aligned with Pharmacy Council of India (PCI) and UGC academic equivalence standards.",
        scholarshipMaxPercent: university.scholarshipAvailable ? 30 : 0,
        scholarshipNote: university.scholarshipAvailable
          ? "Up to 30% Merit Scholarship"
          : "Standard University Tuition",
        overview:
          "Statutory four-year pharmacy degree covering drug formulation, medicinal chemistry, pharmacology, clinical research, and pharmaceutical quality assurance.",
        curriculumHighlights: [
          "Pharmaceutics, Medicinal Chemistry & Pharmacognosy",
          "Pharmacology, Hospital Pharmacy & Clinical Toxicology",
          "Biopharmaceutics, Drug Regulatory Affairs & Quality Control",
          "Industrial Formulation Training & Hospital Pharmacy Practice",
        ],
        careers: ["Registered Pharmacist", "Clinical Research Associate", "Drug Regulatory Specialist", "Formulation Scientist"],
        isCatalogVerified: false,
      },
      {
        id: `${university.id}-nursing`,
        stream: "Nursing",
        filterCategory: "Nursing",
        degree: "B.Sc Nursing",
        specialisation: "Clinical Nursing & Hospital Patient Care",
        title: "Bachelor of Science in Nursing (B.Sc Nursing)",
        duration: "4 Years (8 Semesters)",
        durationYears: 4,
        annualFeeINR: Math.round((160000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "10+2 / Grade 12 with Physics, Chemistry, Biology & English (Min. 50% in PCB)",
        requiredSubjects: ["Physics", "Chemistry", "Biology", "English"],
        admissionRequirements:
          "Subject to Indian Nursing Council (INC) / State Nursing Council norms and MoEST NOC where applicable.",
        scholarshipMaxPercent: university.scholarshipAvailable ? 25 : 0,
        scholarshipNote: "Clinical Hospital Rotations Included",
        overview:
          "Four-year clinical nursing degree combining foundational medical sciences with supervised hospital rotations, ICU care, community health, and global licensure readiness.",
        curriculumHighlights: [
          "Human Anatomy, Physiology, Microbiology & Pathology",
          "Medical-Surgical Nursing, Critical Care & Emergency Nursing",
          "Maternal, Child Health & Community Health Nursing",
          "Supervised Clinical Residency & Hospital Ward Practicum",
        ],
        careers: ["Registered Nurse (Hospital/ICU)", "Clinical Nurse Educator", "International Healthcare Nurse", "Hospital Care Coordinator"],
        isCatalogVerified: false,
      },
      {
        id: `${university.id}-allied-health`,
        stream: "Health Sciences",
        filterCategory: "Health Sciences",
        degree: "B.Sc",
        specialisation: "Medical Lab Technology / Radiology / Physiotherapy & Allied Health",
        title: "B.Sc in Allied Health Sciences & Diagnostics",
        duration: "3–4 Years (Incl. Clinical Internship)",
        durationYears: 3,
        annualFeeINR: Math.round((130000 * baseTuitionFactor) / 5000) * 5000,
        eligibility: "10+2 / Grade 12 with Physics, Chemistry & Biology (Min. 50% Aggregate)",
        requiredSubjects: ["Physics", "Chemistry", "Biology"],
        admissionRequirements:
          "Direct admission based on 10+2 PCB academic transcripts and equivalence verification.",
        scholarshipMaxPercent: university.scholarshipAvailable ? 30 : 0,
        scholarshipNote: university.scholarshipAvailable
          ? "Up to 30% Merit Scholarship"
          : "Standard University Tuition",
        overview:
          "Practice-focused allied healthcare programmes training clinical technologists in diagnostic imaging, medical laboratory sciences, and patient rehabilitation.",
        curriculumHighlights: [
          "Clinical Biochemistry, Hematology & Diagnostic Microbiology",
          "Medical Imaging Technology & Patient Safety Protocols",
          "Hospital Diagnostic Equipment Operation & Quality Assurance",
          "Mandatory 6-to-12 Month Clinical Hospital Internship",
        ],
        careers: ["Clinical Lab Technologist", "Diagnostic Imaging Specialist", "Hospital Allied Health Officer", "Healthcare Research Assistant"],
        isCatalogVerified: false,
      },
    ];

    const existingDegrees = new Set(fromCoursesData.map((c) => c.degree));
    return [
      ...fromCoursesData,
      ...standardUniversityProgrammes.filter((t) => !existingDegrees.has(t.degree)),
    ];
  }, [university.id, university.naacGrade, university.scholarshipAvailable, universityCourses]);

  // Starting annual tuition across programmes
  const minAnnualTuitionINR = useMemo(() => {
    if (allProgrammes.length === 0) return 125000;
    return Math.min(...allProgrammes.map((p) => p.annualFeeINR));
  }, [allProgrammes]);

  // Filtered programmes by discipline & search query
  const filteredProgrammes = useMemo(() => {
    return allProgrammes.filter((prog) => {
      const matchesDiscipline =
        selectedDiscipline === "All Programmes" ||
        prog.filterCategory.toLowerCase() === selectedDiscipline.toLowerCase() ||
        prog.stream.toLowerCase().includes(selectedDiscipline.toLowerCase()) ||
        prog.degree.toLowerCase().includes(selectedDiscipline.toLowerCase());

      const q = courseSearchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        prog.title.toLowerCase().includes(q) ||
        prog.degree.toLowerCase().includes(q) ||
        prog.specialisation.toLowerCase().includes(q) ||
        prog.stream.toLowerCase().includes(q) ||
        prog.careers.some((c) => c.toLowerCase().includes(q));

      return matchesDiscipline && matchesSearch;
    });
  }, [allProgrammes, selectedDiscipline, courseSearchQuery]);

  // Compare toggle (max 3)
  const toggleCompareProgramme = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  const comparedProgrammes = useMemo(
    () => allProgrammes.filter((p) => compareIds.includes(p.id)),
    [allProgrammes, compareIds]
  );

  // Complete Fee Structure Section Calculations (Section 6)
  const selectedFeeProg = allProgrammes[feeSectionProgIdx] || allProgrammes[0];
  const officialAcademicCharges = {
    tuitionAnnualINR: selectedFeeProg?.annualFeeINR || 150000,
    registrationOneTimeINR: 15000,
    examinationAnnualINR: 12000,
    libraryAndLabAnnualINR: 8000,
    refundableCautionDepositINR: 10000,
  };
  const accommodationCharges = {
    acHostelWithMessINR: university.hostelFeePerYearINR,
    nonAcHostelWithMessINR: Math.round(university.hostelFeePerYearINR * 0.78),
  };
  const estimatedLivingExpenses = {
    booksAndMaterialsINR: 12000,
    localTransportAndPersonalINR: 24000,
  };

  const recurringAnnualOfficialINR =
    officialAcademicCharges.tuitionAnnualINR +
    officialAcademicCharges.examinationAnnualINR +
    officialAcademicCharges.libraryAndLabAnnualINR +
    accommodationCharges.acHostelWithMessINR;

  const firstYearOfficialTotalINR =
    recurringAnnualOfficialINR +
    officialAcademicCharges.registrationOneTimeINR +
    officialAcademicCharges.refundableCautionDepositINR;

  const totalProgrammeOfficialINR =
    recurringAnnualOfficialINR * (selectedFeeProg?.durationYears || 4) +
    officialAcademicCharges.registrationOneTimeINR +
    officialAcademicCharges.refundableCautionDepositINR;

  const scholarshipAdjustedTotalINR =
    totalProgrammeOfficialINR -
    Math.round(
      officialAcademicCharges.tuitionAnnualINR *
        0.3 *
        (selectedFeeProg?.durationYears || 4)
    );

  // Download Fee Breakdown helper
  const handleDownloadFeeBreakdown = () => {
    const lines = [
      `===================================================================`,
      `STUDYINDIA — OFFICIAL UNIVERSITY FEE STRUCTURE & COST ESTIMATE`,
      `===================================================================`,
      `University Name   : ${university.name}`,
      `Campus Location   : ${university.city}, ${university.state}, India`,
      `Accreditation     : ${naacBadgeLabel}${university.nirfRank ? ` | NIRF Rank #${university.nirfRank}` : ""}`,
      `Selected Programme: ${selectedFeeProg.degree} — ${selectedFeeProg.title}`,
      `Specialisation    : ${selectedFeeProg.specialisation}`,
      `Course Duration   : ${selectedFeeProg.duration}`,
      `Selected Currency : ${currency} (Official University Billing in INR)`,
      `-------------------------------------------------------------------`,
      `A. ANNUAL ACADEMIC FEES (OFFICIAL UNIVERSITY CHARGES)`,
      `   - Annual Tuition Fee              : ${formatMoney(officialAcademicCharges.tuitionAnnualINR)} / year`,
      `   - Annual Examination Fee          : ${formatMoney(officialAcademicCharges.examinationAnnualINR)} / year`,
      `   - Academic Lab & Library Charges  : ${formatMoney(officialAcademicCharges.libraryAndLabAnnualINR)} / year`,
      ``,
      `B. CAMPUS HOSTEL & ACCOMMODATION (OPTIONAL / ANNUAL)`,
      `   - AC Hostel Room (Incl. Mess)     : ${formatMoney(accommodationCharges.acHostelWithMessINR)} / year`,
      `   - Non-AC Hostel Room (Incl. Mess) : ${formatMoney(accommodationCharges.nonAcHostelWithMessINR)} / year`,
      ``,
      `C. ONE-TIME ADMISSION CHARGES (FIRST YEAR ONLY)`,
      `   - StudyIndia Application Processing: FREE (0 ${currency})`,
      `   - University Registration Fee     : ${formatMoney(officialAcademicCharges.registrationOneTimeINR)} (One-time)`,
      `   - Refundable Security Deposit     : ${formatMoney(officialAcademicCharges.refundableCautionDepositINR)} (Refundable)`,
      ``,
      `D. ESTIMATED PERSONAL & STUDY EXPENSES (NON-UNIVERSITY / INDICATIVE)`,
      `   - Books & Learning Materials      : ~${formatMoney(estimatedLivingExpenses.booksAndMaterialsINR)} / year`,
      `   - Personal & Local Living Costs   : ~${formatMoney(estimatedLivingExpenses.localTransportAndPersonalINR)} / year`,
      `-------------------------------------------------------------------`,
      `SUMMARY COST PROJECTIONS (WITH AC HOSTEL & MESS):`,
      `   * First-Year Estimated Total      : ${formatMoney(firstYearOfficialTotalINR)}`,
      `   * Recurring Annual Cost (Yr 2+)   : ${formatMoney(recurringAnnualOfficialINR)} / year`,
      `   * Full Degree Estimated Cost      : ${formatMoney(totalProgrammeOfficialINR)} (${selectedFeeProg.durationYears} Years)`,
      `   * With 30% Merit Tuition Waiver   : ${formatMoney(scholarshipAdjustedTotalINR)} (${selectedFeeProg.durationYears} Years)`,
      `-------------------------------------------------------------------`,
      `Admissions Desk Email : ${university.contactEmail}`,
      `Admissions Desk Phone : ${university.contactPhone}`,
      `Note: Converted USD/NPR figures are indicative reference estimates.`,
      `Scholarships are awarded upon official verification of transcripts.`,
      `===================================================================`,
    ].join("\n");

    const blob = new Blob([lines], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${university.slug}-${selectedFeeProg.degree.toLowerCase().replace(/[^a-z0-9]/g, "")}-fee-structure.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Interactive Calculator Computations (Section 7 & 17)
  const calcProgramme = allProgrammes[calcProgrammeIdx] || allProgrammes[0];
  const calcScholarshipTier =
    SCHOLARSHIP_TIERS.find((t) => t.id === selectedScholarshipId) ||
    SCHOLARSHIP_TIERS[1];

  const effectiveDiscountPercent = university.scholarshipAvailable
    ? Math.min(calcScholarshipTier.discountPercent, calcProgramme.scholarshipMaxPercent || 50)
    : 0;

  const grossTuitionINR = calcProgramme.annualFeeINR;
  const scholarshipDeductionINR = Math.round(
    (grossTuitionINR * effectiveDiscountPercent) / 100
  );
  const netTuitionINR = grossTuitionINR - scholarshipDeductionINR;

  const selectedHostelINR =
    hostelPreference === "ac"
      ? university.hostelFeePerYearINR
      : hostelPreference === "non-ac"
        ? Math.round(university.hostelFeePerYearINR * 0.78)
        : 0;

  const mandatoryAnnualAcademicINR = 20000; // Exam + Library/Lab
  const totalPayableAnnualINR =
    netTuitionINR + selectedHostelINR + mandatoryAnnualAcademicINR;
  const totalPayableDegreeINR =
    totalPayableAnnualINR * calcProgramme.durationYears;

  // Campus Gallery Items (Section 8)
  const campusGalleryItems = useMemo(
    () => [
      {
        title: `${university.name} Main Academic Block`,
        category: "Academic",
        description:
          university.facilities[0] ||
          "Central academic complex housing faculty departments, smart lecture theatres, and administrative offices.",
        image: university.image,
      },
      {
        title: "Smart Classrooms & Lecture Theatres",
        category: "Academic",
        description:
          "Tiered, air-conditioned lecture halls equipped with digital projection, audio systems, and interactive learning tools.",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Advanced Computing & Research Laboratories",
        category: "Laboratories",
        description:
          university.facilities[2] ||
          "Dedicated departmental laboratories for engineering, computing, pharmaceutical sciences, and applied research.",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Central Digital & Reference Library",
        category: "Library",
        description:
          "Extensive academic library with print volumes, international research journals (IEEE, Springer, PubMed), and quiet reading zones.",
        image:
          "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "On-Campus Student Hostel Residences",
        category: "Hostel & Dining",
        description:
          "Separate, secure residential blocks for male and female students with 24×7 warden supervision, Wi-Fi, and study desks.",
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Multi-Cuisine Student Dining & Mess Hall",
        category: "Hostel & Dining",
        description:
          university.facilities[1] ||
          "Hygienic campus dining facilities serving vegetarian, non-vegetarian, Nepali/SAARC-friendly, and continental meals.",
        image:
          "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Sports Complex & Student Recreation",
        category: "Sports & Medical",
        description:
          university.facilities[3] ||
          "Outdoor athletic grounds, indoor courts, fitness center, and student activity spaces.",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Auditorium, Medical Center & Campus Amenities",
        category: "Sports & Medical",
        description:
          university.facilities[4] ||
          "Main convocation auditorium alongside 24×7 campus medical care and student wellness support.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
      },
    ],
    [university.name, university.image, university.facilities]
  );

  const filteredGallery = useMemo(() => {
    if (selectedGalleryFilter === "All") return campusGalleryItems;
    return campusGalleryItems.filter((item) => item.category === selectedGalleryFilter);
  }, [campusGalleryItems, selectedGalleryFilter]);

  // Document checklist toggle
  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const docProgress = Math.round(
    (checkedDocs.length / DOCUMENT_CHECKLIST.length) * 100
  );

  // Scroll Spy for Sticky Navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const sec = document.getElementById(NAV_SECTIONS[i].id);
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(NAV_SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Verified University FAQ List (Section 15)
  const universityFaqs = useMemo(
    () => [
      {
        category: "University Recognition",
        question: `Is ${university.name} officially recognised for international and Nepali students?`,
        answer: `Yes. ${university.name} (${university.city}, ${university.state}) is a statutory institution established in ${university.establishedYear} and recognised by the University Grants Commission (UGC) of India (${naacBadgeLabel}${university.nirfRank ? `, NIRF National Rank #${university.nirfRank}` : ""}). Its degrees are valid for government employment, postgraduate higher studies, and professional council equivalence globally.`,
      },
      {
        category: "Admission Eligibility",
        question: `What are the minimum eligibility requirements for admission at ${university.name}?`,
        answer: `For undergraduate programmes (B.Tech, BBA, BCA, B.Pharm, B.Sc Nursing), applicants require Grade 12 / 10+2 completion (NEB, CBSE, A-Levels, IB, or equivalent) with a minimum 50%–55% aggregate in relevant subjects. For postgraduate programmes (MBA, MCA), a recognized 3-year or 4-year Bachelor's degree with at least 50% aggregate is required.`,
      },
      {
        category: "Tuition Fees",
        question: `What is the annual tuition fee structure at ${university.name}?`,
        answer: `Annual tuition fees at ${university.name} start from ${formatMoney(minAnnualTuitionINR)} per year depending on the chosen degree and specialisation. Official tuition fees are billed in Indian Rupees (INR) directly by the university, and students can pay semester-wise or annually through official university banking channels.`,
      },
      {
        category: "Scholarships",
        question: `Are merit scholarships available for international students at ${university.name}?`,
        answer: university.scholarshipAvailable
          ? `Yes. ${university.name} offers merit-based tuition waivers of 20% to 50% for eligible international and SAARC students based on Grade 12 / High School GPA or percentage. Final scholarship percentages are confirmed in the official Provisional Offer Letter upon transcript verification.`
          : `Scholarship availability is determined per academic department and intake quota. Please submit your transcripts to the Admissions Desk to verify applicable regional fee concessions.`,
      },
      {
        category: "Hostel Facilities",
        question: `Does ${university.name} provide on-campus hostel accommodation?`,
        answer: `Yes. Separate on-campus residential hostels for male and female students are available at ${university.name} in ${university.city}. Annual hostel and mess charges are approximately ${formatMoney(university.hostelFeePerYearINR)} per year for AC accommodation and ${formatMoney(Math.round(university.hostelFeePerYearINR * 0.78))} per year for standard Non-AC rooms, inclusive of meals, Wi-Fi, and 24×7 security.`,
      },
      {
        category: "Food & Dining",
        question: `What kind of food is served in the campus mess for Nepali and international students?`,
        answer: `The university dining halls provide freshly prepared vegetarian and non-vegetarian meals (breakfast, lunch, evening refreshments, and dinner). The menu includes North & South Indian, Nepali/SAARC-familiar staple dishes (dal, bhat, seasonal vegetables, curries), and continental options.`,
      },
      {
        category: "International Admission",
        question: `Do international or Nepali students need to appear for JEE or Indian entrance exams?`,
        answer: `For most undergraduate and postgraduate engineering, management, pharmacy, and IT degrees under the International / SAARC student quota, admission is granted directly based on Grade 12 or undergraduate academic transcripts without requiring JEE Main. Statutory medical degrees (such as MBBS) require NEET qualification as per NMC regulations.`,
      },
      {
        category: "Visa Requirements",
        question: `Do students from Nepal and Bhutan require a student visa to study at ${university.name}?`,
        answer: `Under bilateral friendship treaties with India, citizens of Nepal and Bhutan do not require a visa to study in India—they only need a valid Passport or National Citizenship Certificate. Students from all other 50+ countries receive an official University Bonafide / Visa Support Letter to apply for an Indian Student Visa (S-Visa) online.`,
      },
      {
        category: "Required Documents",
        question: `What documents are required to get a Provisional Offer Letter?`,
        answer: `You need scanned copies of: (1) Grade 10 Marksheet & Certificate, (2) Grade 12 Transcripts & Provisional/Migration Certificate (or Bachelor's transcripts for PG), (3) Valid Passport or National Citizenship ID, and (4) Passport-size photograph. For technical/healthcare programmes, Nepali students can use the Offer Letter to obtain their MoEST No Objection Certificate (NOC).`,
      },
      {
        category: "Application Deadlines",
        question: `When should I apply for the upcoming academic intake?`,
        answer: `Applications for the 2027–28 academic intake are currently open. International students are advised to apply early (between January and July) to secure preferred hostel rooms and early-bird merit scholarship quotas before seats fill up.`,
      },
      {
        category: "Refund Policies",
        question: `What is the university's fee refund policy if a student withdraws admission?`,
        answer: `${university.name} follows the official University Grants Commission (UGC) fee refund guidelines. Any seat registration or tuition fee refund is processed directly according to statutory UGC timelines prior to the commencement of classes.`,
      },
      {
        category: "Placement Opportunities",
        question: `Can international students participate in campus placements and internships?`,
        answer: `Yes. International and regional students at ${university.name} have full access to the university's Training & Placement Cell, mandatory industry internships, hospital clinical rotations, resume workshops, and on-campus recruitment drives.`,
      },
    ],
    [
      university.name,
      university.city,
      university.state,
      university.establishedYear,
      university.nirfRank,
      university.scholarshipAvailable,
      university.hostelFeePerYearINR,
      naacBadgeLabel,
      minAnnualTuitionINR,
      currency,
    ]
  );

  const cleanPhoneForWhatsApp = university.contactPhone.replace(/[^0-9]/g, "") || "911204570000";
  const whatsappUrl = `https://wa.me/${cleanPhoneForWhatsApp}?text=${encodeURIComponent(
    `Hello StudyIndia Admissions Desk, I am interested in applying to ${university.name} (${university.city}) for the 2027-28 intake. Please share course fee and scholarship details.`
  )}`;

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#475569] pb-28 lg:pb-20 font-sans">
      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2: UNIVERSITY HERO SECTION
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-[#E2E8F0] pt-5 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb + Global Currency Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#E2E8F0]">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500"
            >
              <Link
                href="/"
                className="hover:text-[#009B70] transition-colors inline-flex items-center gap-1 text-slate-600"
              >
                <Home className="w-3.5 h-3.5 text-[#009B70]" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <Link
                href="/universities"
                className="hover:text-[#009B70] transition-colors text-slate-600"
              >
                Universities in India
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-[#111827] font-semibold truncate max-w-[220px] sm:max-w-none">
                {university.name}
              </span>
            </nav>

            {/* Currency Switcher */}
            <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-1">
              <span className="text-[11px] font-semibold text-slate-500 pl-2.5 hidden sm:inline">
                Display Currency:
              </span>
              {(["INR", "USD", "NPR"] as CurrencyCode[]).map((code) => {
                const active = currency === code;
                const label =
                  code === "INR" ? "₹ INR" : code === "USD" ? "$ USD" : "NPR";
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setCurrency(code)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      active
                        ? "bg-[#009B70] text-white shadow-2xs"
                        : "text-slate-600 hover:text-[#111827] hover:bg-white"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Two-Column Hero Layout */}
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN (7 Cols): Information Hierarchy */}
            <div className="lg:col-span-7 space-y-5">
              {/* Accreditation, Recognition & Ranking Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-emerald-200 text-[#007A59] text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#009B70]" />
                  {naacBadgeLabel}
                </span>

                {university.nirfRank && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    NIRF National Rank #{university.nirfRank}
                  </span>
                )}

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-slate-700 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009B70]" />
                  UGC Recognised • AIU Member
                </span>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#111827] text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {university.rating.toFixed(1)} / 5.0
                </span>
              </div>

              {/* University Name, Location (City, State, Country) & Established Year */}
              <div className="space-y-2.5">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight font-heading leading-tight">
                  {university.name}
                </h1>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[#111827]">
                    <MapPin className="w-4 h-4 text-[#009B70] shrink-0" />
                    {university.city}, {university.state}, India
                  </span>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
                    <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                    Established {university.establishedYear} ({Math.max(1, 2026 - university.establishedYear)}+ Years of Academic Heritage)
                  </span>
                </div>
              </div>

              {/* Short University Introduction */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                {university.description}
              </p>

              {/* International Student Info & Admission Availability Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#ECFDF5]/70 border border-emerald-200/80">
                  <div className="w-9 h-9 rounded-xl bg-[#009B70] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#111827] block">
                      {university.nepaliStudentCount.toLocaleString()}+ International &amp; Regional Students
                    </span>
                    <span className="text-xs text-[#007A59] font-medium block mt-0.5">
                      Dedicated International Student Welfare &amp; FRRO Cell
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E2E8F0] text-[#009B70] flex items-center justify-center shrink-0 mt-0.5">
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#111827] block">
                      2027–28 International Intake Open
                    </span>
                    <span className="text-xs text-slate-600 font-medium block mt-0.5">
                      Direct transcript verification • Provisional Offer in 7–10 days
                    </span>
                  </div>
                </div>
              </div>

              {/* Important Admission Highlights */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Key Institutional &amp; Admission Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {university.highlights.slice(0, 4).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-[13px] text-[#111827] font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#009B70] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href={`/register?universityId=${university.id}`}>
                  <Button
                    size="lg"
                    className="h-12 px-7 rounded-xl bg-[#009B70] hover:bg-[#007A59] text-white font-semibold text-sm shadow-xs gap-2 cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <button
                  type="button"
                  onClick={() => scrollToSection("scholarships")}
                  className="inline-flex items-center gap-2 h-12 px-5 rounded-xl bg-white hover:bg-[#ECFDF5] border border-[#E2E8F0] hover:border-[#009B70]/40 text-[#111827] font-semibold text-sm transition-colors cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-[#009B70]" />
                  <span>Calculate Fees &amp; Scholarship</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCallbackModalOpen(true)}
                  className="inline-flex items-center gap-2 h-12 px-4 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 border border-[#E2E8F0] text-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#009B70]" />
                  <span>Request Callback</span>
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN (5 Cols): Campus Visual Card + Quick Stats */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm p-3.5 space-y-3.5">
                {/* Large High-Quality Campus Image */}
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={university.image}
                    alt={`${university.name} Campus in ${university.city}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />

                  {/* Admission Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-[#111827] text-xs font-semibold shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#009B70]" />
                      Admissions Open • 2027–28 Intake
                    </span>
                  </div>

                  {/* Bottom Photo Caption */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold truncate">
                      {university.name}, {university.city}
                    </span>
                    <button
                      type="button"
                      onClick={() => scrollToSection("campus-facilities")}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/75 hover:bg-slate-900 text-white font-medium text-[11px] backdrop-blur-xs transition-colors cursor-pointer shrink-0"
                    >
                      View Campus Photos
                    </button>
                  </div>
                </div>

                {/* International Stats & Starting Tuition Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3.5">
                    <span className="text-[11px] font-medium text-slate-500 block">
                      International Student Cohort
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-[#111827] font-heading mt-0.5 block">
                      {university.nepaliStudentCount.toLocaleString()}+ Students
                    </span>
                    <span className="text-[11px] text-[#007A59] font-medium block mt-0.5">
                      Nepal, SAARC &amp; 50+ Nations
                    </span>
                  </div>

                  <div className="rounded-xl bg-[#ECFDF5] border border-emerald-200/90 p-3.5">
                    <span className="text-[11px] font-medium text-[#007A59] block">
                      Starting Annual Tuition
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-[#111827] font-heading mt-0.5 block">
                      {formatMoney(minAnnualTuitionINR)}
                      <span className="text-xs font-normal text-slate-600"> / yr</span>
                    </span>
                    <span className="text-[11px] text-[#007A59] font-semibold block mt-0.5">
                      {university.scholarshipAvailable
                        ? "Up to 50% Merit Scholarship"
                        : "Official University Rate"}
                    </span>
                  </div>
                </div>

                {/* Quick University Highlights Box */}
                <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#111827]">
                      Verified Campus Snapshot
                    </span>
                    <span className="text-[11px] text-[#007A59] font-semibold">
                      Direct University Partner
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#009B70] shrink-0" />
                      <span className="truncate">On-Campus AC/Non-AC Hostels</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#009B70] shrink-0" />
                      <span className="truncate">No Entrance Test (Intl. Quota)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#009B70] shrink-0" />
                      <span className="truncate">MoEST NOC Documentation</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#009B70] shrink-0" />
                      <span className="truncate">Visa &amp; FRRO Registration Desk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BELOW HERO: COMPACT 6-COLUMN VERIFIED UNIVERSITY STATISTICS BAR */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3.5">
                <span className="text-[11px] font-medium text-slate-500 block">
                  Established Year
                </span>
                <span className="text-base sm:text-lg font-bold text-[#111827] font-heading mt-0.5 block">
                  {university.establishedYear}
                </span>
                <span className="text-[11px] text-slate-500">
                  {Math.max(1, 2026 - university.establishedYear)}+ Years Legacy
                </span>
              </div>

              <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3.5">
                <span className="text-[11px] font-medium text-slate-500 block">
                  Campus Area
                </span>
                <span className="text-base sm:text-lg font-bold text-[#111827] font-heading mt-0.5 block">
                  {university.campusSize || "Not Available"}
                </span>
                <span className="text-[11px] text-slate-500">
                  Integrated Campus
                </span>
              </div>

              <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3.5">
                <span className="text-[11px] font-medium text-slate-500 block">
                  Total Student Population
                </span>
                <span className="text-base sm:text-lg font-bold text-[#111827] font-heading mt-0.5 block">
                  {university.totalStudents || "Multi-Faculty"}
                </span>
                <span className="text-[11px] text-slate-500">
                  {university.totalStudents ? "Enrolled Cohort" : "UG, PG & Doctoral"}
                </span>
              </div>

              <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3.5">
                <span className="text-[11px] font-medium text-slate-500 block">
                  International Students
                </span>
                <span className="text-base sm:text-lg font-bold text-[#007A59] font-heading mt-0.5 block">
                  {university.nepaliStudentCount.toLocaleString()}+
                </span>
                <span className="text-[11px] text-slate-500">
                  Regional &amp; Global Cohort
                </span>
              </div>

              <div className="rounded-xl bg-[#ECFDF5]/70 border border-emerald-200 p-3.5">
                <span className="text-[11px] font-medium text-[#007A59] block">
                  Accreditation
                </span>
                <span className="text-base sm:text-lg font-bold text-[#007A59] font-heading mt-0.5 block">
                  {university.naacGrade.includes("UGC")
                    ? "UGC Approved"
                    : `NAAC ${university.naacGrade}`}
                </span>
                <span className="text-[11px] text-[#007A59]">
                  {university.nirfRank ? `NIRF Rank #${university.nirfRank}` : "Statutory Recognition"}
                </span>
              </div>

              <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3.5">
                <span className="text-[11px] font-medium text-slate-500 block">
                  Available Programmes
                </span>
                <span className="text-base sm:text-lg font-bold text-[#111827] font-heading mt-0.5 block">
                  {allProgrammes.length} Programmes
                </span>
                <span className="text-[11px] text-slate-500">
                  Open for 2027–28
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3: STICKY UNIVERSITY NAVIGATION BAR
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-xs border-b border-[#E2E8F0] shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <nav
              aria-label="University section navigation"
              className="flex items-center gap-1 overflow-x-auto py-2.5 no-scrollbar"
            >
              {NAV_SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#009B70] text-white shadow-2xs"
                        : "text-slate-600 hover:text-[#111827] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    {sec.label}
                  </button>
                );
              })}
            </nav>

            <div className="hidden xl:flex items-center gap-2 shrink-0">
              <Link href={`/register?universityId=${university.id}`}>
                <Button
                  size="sm"
                  className="h-8 px-3.5 rounded-lg bg-[#009B70] hover:bg-[#007A59] text-white font-semibold text-xs cursor-pointer"
                >
                  Apply Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MAIN TWO-COLUMN WORKSPACE (8 Cols Content + 4 Cols Sticky Sidebar)
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 8 COLUMNS: COMPREHENSIVE SECTIONS */}
          <div className="lg:col-span-8 space-y-10">
            {/* ────────────────────────────────────────────────────────────────
                SECTION 4: ABOUT THE UNIVERSITY (#overview)
               ──────────────────────────────────────────────────────────────── */}
            <section
              id="overview"
              className="scroll-mt-32 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6"
            >
              <div className="border-b border-[#E2E8F0] pb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200 px-3 py-1 rounded-full mb-2">
                  <Building2 className="w-3.5 h-3.5" />
                  About the University
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                  Institutional Profile &amp; Academic Overview
                </h2>
              </div>

              {/* Balanced Two-Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-7 space-y-4 text-sm text-[#475569] leading-relaxed">
                  <p className="text-[#111827] font-medium">
                    {university.description}
                  </p>
                  <p>
                    Established in <strong>{university.establishedYear}</strong> in{" "}
                    <strong>
                      {university.city}, {university.state}
                    </strong>
                    , {university.name} operates across a{" "}
                    <strong>{university.campusSize}</strong> campus designed to
                    integrate classroom instruction, laboratory research, and
                    industry collaboration. The institution currently hosts{" "}
                    <strong>
                      {university.nepaliStudentCount.toLocaleString()}+ international and regional students
                    </strong>
                    , offering structured undergraduate, postgraduate, and doctoral pathways.
                  </p>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      aboutExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-3 pt-3 border-t border-slate-100">
                        <div>
                          <h3 className="text-sm font-bold text-[#111827]">
                            Academic Environment &amp; Teaching Methodology
                          </h3>
                          <p className="text-xs sm:text-sm text-[#475569] mt-1">
                            Programmes follow the University Grants Commission (UGC) Choice Based Credit System (CBCS) and Outcome-Based Education (OBE) curriculum. Instruction is delivered entirely in English through a combination of theory lectures, laboratory practicums, industry case studies, and mandatory final-year projects or clinical rotations.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#111827]">
                            Campus Environment &amp; International Integration
                          </h3>
                          <p className="text-xs sm:text-sm text-[#475569] mt-1">
                            The residential campus provides a secure, multicultural academic environment with dedicated international student advisors, equivalence documentation support for SAARC boards (including NEB Nepal), and structured career readiness training.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setAboutExpanded((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009B70] hover:text-[#007A59] cursor-pointer"
                  >
                    <span>
                      {aboutExpanded
                        ? "Show Less Details"
                        : "Read More About Teaching Methodology & Campus Life"}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        aboutExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Right Column: Campus Visual & Key Facts Card */}
                <div className="md:col-span-5 space-y-4">
                  <div className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#F8FAFC]">
                    <div className="h-40 w-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={university.image}
                        alt={university.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-2.5 text-xs">
                      <div className="font-bold text-[#111827] text-sm">
                        Quick Institutional Facts
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/70">
                        <span className="text-slate-500">Medium of Instruction:</span>
                        <span className="font-semibold text-[#111827]">100% English</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/70">
                        <span className="text-slate-500">Statutory Status:</span>
                        <span className="font-semibold text-[#111827]">UGC Recognised</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/70">
                        <span className="text-slate-500">Quality Grade:</span>
                        <span className="font-semibold text-[#007A59]">{naacBadgeLabel}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-500">Campus Type:</span>
                        <span className="font-semibold text-[#111827]">{university.campusSize} Residential</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Major Achievements & What Makes This University Different */}
              <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
                <h3 className="text-sm font-bold text-[#111827]">
                  Major Achievements &amp; What Makes {university.name} Stand Out
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {university.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#ECFDF5] border border-emerald-200 text-[#009B70] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-[#111827] font-medium leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ────────────────────────────────────────────────────────────────
                SECTION 5: COURSES & PROGRAMMES (#programmes)
               ──────────────────────────────────────────────────────────────── */}
            <section
              id="programmes"
              className="scroll-mt-32 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E2E8F0] pb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200 px-3 py-1 rounded-full mb-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    Courses &amp; Programmes Directory
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                    Accredited Degree Programmes &amp; Tuition Fees
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1">
                    Search or filter programmes by discipline. Select up to 3 programmes to compare fees and eligibility side-by-side.
                  </p>
                </div>

                {/* Currency Switcher */}
                <div className="flex flex-col sm:items-end gap-1 shrink-0">
                  <span className="text-[11px] font-medium text-slate-500">
                    Select Currency:
                  </span>
                  <div className="flex items-center gap-1 bg-[#F8FAFC] border border-[#E2E8F0] p-1 rounded-xl">
                    {(["INR", "USD", "NPR"] as CurrencyCode[]).map((code) => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => setCurrency(code)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          currency === code
                            ? "bg-[#009B70] text-white shadow-2xs"
                            : "text-slate-600 hover:text-[#111827]"
                        }`}
                      >
                        {code === "INR" ? "₹ INR" : code === "USD" ? "$ USD" : "NPR"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Search Bar + Compare Counter */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={courseSearchQuery}
                    onChange={(e) => setCourseSearchQuery(e.target.value)}
                    placeholder="Search by course name, degree (e.g. B.Tech, MBA, Nursing) or career..."
                    className="w-full h-10 pl-10 pr-9 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:border-[#009B70] focus:bg-white transition-colors"
                  />
                  {courseSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setCourseSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {compareIds.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowCompareModal(true)}
                    className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-[#ECFDF5] border border-[#009B70] text-[#007A59] text-xs font-bold cursor-pointer shrink-0"
                  >
                    <Scale className="w-4 h-4" />
                    <span>Compare Selected ({compareIds.length}/3)</span>
                  </button>
                )}
              </div>

              {/* Discipline Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                {DISCIPLINE_FILTERS.map((disc) => {
                  const active = selectedDiscipline === disc;
                  return (
                    <button
                      key={disc}
                      type="button"
                      onClick={() => setSelectedDiscipline(disc)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                        active
                          ? "bg-[#009B70] text-white border-[#009B70] shadow-2xs"
                          : "bg-[#F8FAFC] text-slate-600 border-[#E2E8F0] hover:border-[#009B70]/50 hover:text-[#111827]"
                      }`}
                    >
                      {disc}
                    </button>
                  );
                })}
              </div>

              {/* Exchange Rate Transparency Notice */}
              {currency !== "INR" && (
                <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-slate-600">
                  <Info className="w-4 h-4 text-[#009B70] shrink-0" />
                  <span>
                    Showing indicative converted amounts in <strong>{currency}</strong> (Reference rate:{" "}
                    {currency === "NPR" ? "1 INR = 1.60 NPR" : "1 USD ≈ 83.5 INR"}). Official university fee invoices are issued in INR.
                  </span>
                </div>
              )}

              {/* Programme Cards List */}
              {filteredProgrammes.length === 0 ? (
                <div className="text-center py-10 px-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <p className="text-sm font-bold text-[#111827]">
                    No programmes matched your search filter.
                  </p>
                  <p className="text-xs text-slate-500">
                    Try clearing the search query or switching to &ldquo;All Programmes&rdquo;.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDiscipline("All Programmes");
                      setCourseSearchQuery("");
                    }}
                    className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#009B70] text-white text-xs font-semibold cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {filteredProgrammes.map((prog) => {
                    const isCompared = compareIds.includes(prog.id);
                    const estAfterScholarshipINR = university.scholarshipAvailable
                      ? Math.round(prog.annualFeeINR * 0.7) // 30% standard merit tier preview
                      : prog.annualFeeINR;

                    return (
                      <div
                        key={prog.id}
                        className={`rounded-2xl border p-5 sm:p-6 transition-all ${
                          isCompared
                            ? "border-[#009B70] bg-[#ECFDF5]/25"
                            : "border-[#E2E8F0] hover:border-[#009B70]/50 bg-white"
                        }`}
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
                          {/* Left Programme Info */}
                          <div className="space-y-3 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="px-2.5 py-0.5 rounded-md bg-[#ECFDF5] text-[#007A59] border border-emerald-200 text-xs font-bold">
                                {prog.degree}
                              </span>
                              <span className="px-2.5 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-slate-600 text-xs font-medium inline-flex items-center gap-1">
                                <Clock className="w-3 h-3 text-slate-400" />
                                {prog.duration}
                              </span>
                              <span className="px-2.5 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-slate-600 text-xs font-medium">
                                {prog.filterCategory}
                              </span>
                              {prog.scholarshipMaxPercent > 0 && (
                                <span className="px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
                                  {prog.scholarshipNote}
                                </span>
                              )}
                            </div>

                            <div>
                              <h3 className="text-base sm:text-lg font-bold text-[#111827] font-heading">
                                {prog.title}
                              </h3>
                              <p className="text-xs sm:text-sm font-medium text-[#007A59] mt-0.5">
                                Specialisation: {prog.specialisation}
                              </p>
                            </div>

                            <div className="text-xs sm:text-[13px] text-[#475569] space-y-1 bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0]">
                              <div>
                                <span className="font-semibold text-[#111827]">
                                  Eligibility Criteria:
                                </span>{" "}
                                {prog.eligibility}
                              </div>
                              <div>
                                <span className="font-semibold text-[#111827]">
                                  Required Subjects:
                                </span>{" "}
                                {prog.requiredSubjects.join(", ")}
                              </div>
                            </div>

                            {/* Career Opportunities */}
                            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                              <span className="text-xs font-semibold text-slate-500 mr-1">
                                Career Opportunities:
                              </span>
                              {prog.careers.map((career, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-slate-600 text-xs font-medium"
                                >
                                  {career}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Right Tuition Breakdown & Actions */}
                          <div className="lg:w-64 shrink-0 flex flex-col justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#E2E8F0] lg:pl-6">
                            <div className="space-y-1.5">
                              <div>
                                <span className="text-[11px] font-medium text-slate-500 block">
                                  Annual Tuition Fee
                                </span>
                                <span className="text-xl font-extrabold text-[#111827] font-heading">
                                  {formatMoney(prog.annualFeeINR)}
                                  <span className="text-xs font-normal text-slate-500">
                                    {" "}
                                    / yr
                                  </span>
                                </span>
                              </div>

                              {university.scholarshipAvailable && (
                                <div className="p-2.5 rounded-xl bg-[#ECFDF5] border border-emerald-200/80">
                                  <span className="text-[11px] font-medium text-[#007A59] block">
                                    Est. Fee After 30% Merit Waiver:
                                  </span>
                                  <span className="text-sm font-bold text-[#007A59]">
                                    {formatMoney(estAfterScholarshipINR)} / year
                                  </span>
                                </div>
                              )}
                            </div>

                            <div className="space-y-2">
                              <div className="grid grid-cols-2 gap-2">
                                <Link
                                  href={
                                    prog.courseLink
                                      ? `/register?courseId=${prog.id}&universityId=${university.id}`
                                      : `/register?universityId=${university.id}`
                                  }
                                >
                                  <Button
                                    size="sm"
                                    className="w-full h-9 rounded-xl bg-[#009B70] hover:bg-[#007A59] text-white font-semibold text-xs cursor-pointer"
                                  >
                                    Apply Now
                                  </Button>
                                </Link>

                                <button
                                  type="button"
                                  onClick={() => setDetailModalProgramme(prog)}
                                  className="h-9 px-3 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] text-[#111827] font-semibold text-xs transition-colors cursor-pointer"
                                >
                                  View Details
                                </button>
                              </div>

                              <button
                                type="button"
                                onClick={() => toggleCompareProgramme(prog.id)}
                                className={`w-full h-8 rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer border ${
                                  isCompared
                                    ? "bg-[#ECFDF5] border-[#009B70] text-[#007A59]"
                                    : "bg-[#F8FAFC] border-[#E2E8F0] text-slate-600 hover:text-[#111827]"
                                }`}
                              >
                                <Scale className="w-3.5 h-3.5" />
                                <span>
                                  {isCompared ? "Added to Compare" : "Add to Compare"}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            {/* ────────────────────────────────────────────────────────────────
                SECTION 6: COMPLETE FEE STRUCTURE (#fee-structure)
               ──────────────────────────────────────────────────────────────── */}
            <section
              id="fee-structure"
              className="scroll-mt-32 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E2E8F0] pb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200 px-3 py-1 rounded-full mb-2">
                    <FileText className="w-3.5 h-3.5" />
                    Transparent Fee Structure
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                    Complete Fee Breakdown &amp; Cost Projections
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1">
                    Official university academic and hostel charges clearly separated from estimated student living expenses.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleDownloadFeeBreakdown}
                  className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-[#ECFDF5] hover:bg-emerald-100/80 border border-emerald-200 text-[#007A59] font-semibold text-xs transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Fee Breakdown</span>
                </button>
              </div>

              {/* Select Programme for Fee Structure */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <label
                  htmlFor="fee-prog-select"
                  className="text-xs sm:text-sm font-bold text-[#111827]"
                >
                  Select Programme to Inspect Fee Breakdown:
                </label>
                <select
                  id="fee-prog-select"
                  value={feeSectionProgIdx}
                  onChange={(e) => setFeeSectionProgIdx(Number(e.target.value))}
                  className="h-10 px-3.5 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm font-semibold text-[#111827] focus:outline-none focus:border-[#009B70]"
                >
                  {allProgrammes.map((p, idx) => (
                    <option key={p.id} value={idx}>
                      {p.degree} — {p.title} ({p.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* 4 Fee Categories Grid (A, B, C, D) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Category A: Academic Fees */}
                <div className="rounded-xl border border-[#E2E8F0] p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <h3 className="text-sm font-bold text-[#111827]">
                      A. Academic Fees (Annual)
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-[#ECFDF5] text-[#007A59] text-[11px] font-semibold">
                      Official University Charge
                    </span>
                  </div>
                  <div className="space-y-2 text-xs sm:text-[13px]">
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">Annual Tuition Fee ({selectedFeeProg?.degree}):</span>
                      <span className="font-bold text-[#111827]">
                        {formatMoney(officialAcademicCharges.tuitionAnnualINR)} / yr
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">University Examination Fee:</span>
                      <span className="font-semibold text-[#111827]">
                        {formatMoney(officialAcademicCharges.examinationAnnualINR)} / yr
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">Library, Lab &amp; Digital Access:</span>
                      <span className="font-semibold text-[#111827]">
                        {formatMoney(officialAcademicCharges.libraryAndLabAnnualINR)} / yr
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category B: Accommodation */}
                <div className="rounded-xl border border-[#E2E8F0] p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <h3 className="text-sm font-bold text-[#111827]">
                      B. Accommodation &amp; Mess (Annual)
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-[#ECFDF5] text-[#007A59] text-[11px] font-semibold">
                      Official Campus Hostel
                    </span>
                  </div>
                  <div className="space-y-2 text-xs sm:text-[13px]">
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">AC Hostel Room + Standard Mess:</span>
                      <span className="font-bold text-[#111827]">
                        {formatMoney(accommodationCharges.acHostelWithMessINR)} / yr
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">Non-AC Hostel Room + Standard Mess:</span>
                      <span className="font-semibold text-[#111827]">
                        {formatMoney(accommodationCharges.nonAcHostelWithMessINR)} / yr
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">Included Facilities:</span>
                      <span className="font-medium text-slate-700">
                        Meals, Wi-Fi, Security &amp; Furniture
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category C: Other Expenses */}
                <div className="rounded-xl border border-[#E2E8F0] p-5 space-y-3 bg-[#F8FAFC]">
                  <div className="flex items-center justify-between border-b border-slate-200/70 pb-2.5">
                    <h3 className="text-sm font-bold text-[#111827]">
                      C. Other Living Expenses (Estimated)
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-700 text-[11px] font-semibold">
                      Indicative Student Budget
                    </span>
                  </div>
                  <div className="space-y-2 text-xs sm:text-[13px]">
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">Books &amp; Study Materials:</span>
                      <span className="font-semibold text-[#111827]">
                        ~{formatMoney(estimatedLivingExpenses.booksAndMaterialsINR)} / yr
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">Personal &amp; Local Transit:</span>
                      <span className="font-semibold text-[#111827]">
                        ~{formatMoney(estimatedLivingExpenses.localTransportAndPersonalINR)} / yr
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 pt-1">
                      * Not billed by the university. Actual personal expenses depend on individual student lifestyle.
                    </p>
                  </div>
                </div>

                {/* Category D: One-Time Charges */}
                <div className="rounded-xl border border-[#E2E8F0] p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <h3 className="text-sm font-bold text-[#111827]">
                      D. One-Time Admission Charges
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-[#ECFDF5] text-[#007A59] text-[11px] font-semibold">
                      First Year Only
                    </span>
                  </div>
                  <div className="space-y-2 text-xs sm:text-[13px]">
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">StudyIndia Application Processing:</span>
                      <span className="font-bold text-[#009B70]">Free (₹0)</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">University Admission &amp; Enrollment:</span>
                      <span className="font-semibold text-[#111827]">
                        {formatMoney(officialAcademicCharges.registrationOneTimeINR)} (One-time)
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">Refundable Caution Deposit:</span>
                      <span className="font-semibold text-[#111827]">
                        {formatMoney(officialAcademicCharges.refundableCautionDepositINR)} (Refundable)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Cost Projection Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
                <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-4">
                  <span className="text-xs font-medium text-slate-500 block">
                    First-Year Estimated Cost
                  </span>
                  <span className="text-lg font-extrabold text-[#111827] font-heading mt-1 block">
                    {formatMoney(firstYearOfficialTotalINR)}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Incl. Tuition, AC Hostel &amp; One-Time Fees
                  </span>
                </div>

                <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-4">
                  <span className="text-xs font-medium text-slate-500 block">
                    Recurring Annual Cost
                  </span>
                  <span className="text-lg font-extrabold text-[#111827] font-heading mt-1 block">
                    {formatMoney(recurringAnnualOfficialINR)}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Year 2 Onwards (Tuition + AC Hostel)
                  </span>
                </div>

                <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-4">
                  <span className="text-xs font-medium text-slate-500 block">
                    Total Programme Cost
                  </span>
                  <span className="text-lg font-extrabold text-[#111827] font-heading mt-1 block">
                    {formatMoney(totalProgrammeOfficialINR)}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Full {selectedFeeProg?.durationYears}-Year Official Estimate
                  </span>
                </div>

                <div className="rounded-xl bg-[#ECFDF5] border border-emerald-200 p-4">
                  <span className="text-xs font-semibold text-[#007A59] block">
                    Scholarship-Adjusted Cost
                  </span>
                  <span className="text-lg font-extrabold text-[#007A59] font-heading mt-1 block">
                    {formatMoney(scholarshipAdjustedTotalINR)}
                  </span>
                  <span className="text-[11px] text-[#007A59]">
                    Est. {selectedFeeProg?.durationYears}-Yr Total (With 30% Tuition Waiver)
                  </span>
                </div>
              </div>
            </section>

            {/* ────────────────────────────────────────────────────────────────
                SECTION 7 & 17: SCHOLARSHIPS & INTERACTIVE FEE CALCULATOR (#scholarships)
               ──────────────────────────────────────────────────────────────── */}
            <section
              id="scholarships"
              className="scroll-mt-32 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-8"
            >
              <div className="border-b border-[#E2E8F0] pb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200 px-3 py-1 rounded-full mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Scholarships &amp; Financial Aid
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                  Merit Scholarships &amp; Interactive Fee Calculator
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] mt-1">
                  Explore international merit scholarship slabs, eligibility criteria, renewal rules, and calculate your exact payable fee.
                </p>
              </div>

              {/* Scholarship Categories & Slabs Table */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-[#111827] font-heading">
                  1. International Scholarship Categories &amp; Merit Tiers
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {SCHOLARSHIP_CATEGORIES.map((cat) => (
                    <div
                      key={cat.id}
                      className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 space-y-1.5"
                    >
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#ECFDF5] text-[#007A59] text-xs font-bold">
                        {cat.maxWaiver}
                      </span>
                      <h4 className="text-sm font-bold text-[#111827]">
                        {cat.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Merit Slabs Breakdown */}
                <div className="overflow-x-auto rounded-xl border border-[#E2E8F0]">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#111827] font-bold">
                      <tr>
                        <th className="py-3 px-4">Scholarship Tier</th>
                        <th className="py-3 px-4">Qualifying Marks / GPA</th>
                        <th className="py-3 px-4">Tuition Waiver</th>
                        <th className="py-3 px-4">Est. Net Tuition ({calcProgramme?.degree})</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0]">
                      {SCHOLARSHIP_TIERS.map((tier) => {
                        const netINR = Math.round(
                          calcProgramme.annualFeeINR * (1 - tier.discountPercent / 100)
                        );
                        return (
                          <tr key={tier.id} className="hover:bg-[#F8FAFC]">
                            <td className="py-3 px-4 font-semibold text-[#111827]">
                              {tier.category}
                            </td>
                            <td className="py-3 px-4 text-slate-600">
                              {tier.academicRequirement}
                            </td>
                            <td className="py-3 px-4">
                              <span className="px-2.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#007A59] font-bold text-xs">
                                {tier.discountPercent > 0
                                  ? `${tier.discountPercent}% Tuition Waiver`
                                  : "Standard Base Tuition"}
                              </span>
                            </td>
                            <td className="py-3 px-4 font-bold text-[#111827]">
                              {formatMoney(netINR)} / yr
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Required Documents, Application Process & Renewal Conditions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
                      Required Documents
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Official Grade 10 &amp; Grade 12 / High School transcripts (or Bachelor&apos;s marksheets for PG), valid Passport or Citizenship ID, and Equivalence certificate if applicable.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
                      Scholarship Application Process
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      No separate scholarship exam is needed. Your transcripts are automatically evaluated during admission review, and the approved waiver is printed on your Offer Letter.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
                      Renewal Conditions (Year 2+)
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Continuation into subsequent academic years requires maintaining a minimum 7.5+ CGPA, 75%+ classroom attendance, and zero academic backlogs or disciplinary actions.
                    </p>
                  </div>
                </div>
              </div>

              {/* INTERACTIVE FEE & SCHOLARSHIP CALCULATOR (Section 17) */}
              <div
                id="fee-calculator"
                className="pt-6 border-t border-[#E2E8F0] space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-[#111827] font-heading">
                      2. Interactive University Fee &amp; Scholarship Calculator
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Customise your programme, academic score, currency, and hostel preference for an instant breakdown.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Calculator Inputs (7 Cols) */}
                  <div className="lg:col-span-7 space-y-4 bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0]">
                    {/* 1. Programme & Specialisation */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="calc-prog-select"
                        className="text-xs font-bold text-[#111827] block"
                      >
                        1. Select Programme &amp; Specialisation
                      </label>
                      <select
                        id="calc-prog-select"
                        value={calcProgrammeIdx}
                        onChange={(e) => setCalcProgrammeIdx(Number(e.target.value))}
                        className="w-full h-11 px-3.5 rounded-xl bg-white border border-[#E2E8F0] text-[#111827] text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#009B70]"
                      >
                        {allProgrammes.map((p, idx) => (
                          <option key={p.id} value={idx}>
                            {p.degree} — {p.specialisation} ({formatMoney(p.annualFeeINR)}/yr)
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 2. Scholarship Category & Currency */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="calc-cat-select"
                          className="text-xs font-bold text-[#111827] block"
                        >
                          2. Scholarship Category
                        </label>
                        <select
                          id="calc-cat-select"
                          value={selectedScholarshipCategory}
                          onChange={(e) => setSelectedScholarshipCategory(e.target.value)}
                          className="w-full h-10 px-3 rounded-xl bg-white border border-[#E2E8F0] text-[#111827] text-xs font-semibold focus:outline-none focus:border-[#009B70]"
                        >
                          {SCHOLARSHIP_CATEGORIES.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-xs font-bold text-[#111827] block">
                          3. Preferred Currency
                        </span>
                        <div className="grid grid-cols-3 gap-1.5 bg-white p-1 rounded-xl border border-[#E2E8F0]">
                          {(["INR", "USD", "NPR"] as CurrencyCode[]).map((code) => (
                            <button
                              key={code}
                              type="button"
                              onClick={() => setCurrency(code)}
                              className={`h-8 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                                currency === code
                                  ? "bg-[#009B70] text-white"
                                  : "text-slate-600 hover:text-[#111827]"
                              }`}
                            >
                              {code}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 4. Qualifying Marks / Academic Performance */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-[#111827] block">
                        4. Your Qualifying Academic Marks / GPA
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {SCHOLARSHIP_TIERS.map((tier) => {
                          const active = selectedScholarshipId === tier.id;
                          return (
                            <button
                              key={tier.id}
                              type="button"
                              onClick={() => setSelectedScholarshipId(tier.id)}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                                active
                                  ? "bg-[#ECFDF5] border-[#009B70] text-[#111827]"
                                  : "bg-white border-[#E2E8F0] text-slate-700 hover:border-[#009B70]/50"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-bold text-[#111827]">
                                  {tier.label}
                                </span>
                                <span
                                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                                    tier.discountPercent > 0
                                      ? "bg-[#009B70] text-white"
                                      : "bg-slate-100 text-slate-600"
                                  }`}
                                >
                                  {tier.discountPercent > 0
                                    ? `${tier.discountPercent}% Waiver`
                                    : "Base Fee"}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 5. Hostel Preference */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-[#111827] block">
                        5. Hostel &amp; Accommodation Preference
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          {
                            id: "ac" as const,
                            label: "AC Hostel + Mess",
                            sub: formatMoney(university.hostelFeePerYearINR) + "/yr",
                          },
                          {
                            id: "non-ac" as const,
                            label: "Non-AC Hostel + Mess",
                            sub:
                              formatMoney(
                                Math.round(university.hostelFeePerYearINR * 0.78)
                              ) + "/yr",
                          },
                          {
                            id: "none" as const,
                            label: "Off-Campus / None",
                            sub: "Tuition Only",
                          },
                        ].map((opt) => {
                          const active = hostelPreference === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setHostelPreference(opt.id)}
                              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                                active
                                  ? "bg-[#ECFDF5] border-[#009B70] text-[#111827]"
                                  : "bg-white border-[#E2E8F0] text-slate-700 hover:border-[#009B70]/50"
                              }`}
                            >
                              <span className="text-xs font-bold text-[#111827] block">
                                {opt.label}
                              </span>
                              <span className="text-[11px] text-[#007A59] font-semibold">
                                {opt.sub}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Calculator Output Breakdown Card (5 Cols) */}
                  <div className="lg:col-span-5 rounded-2xl bg-white border-2 border-[#009B70]/30 p-5 sm:p-6 shadow-xs space-y-4">
                    <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#007A59] block">
                          Estimated Cost Summary
                        </span>
                        <h4 className="text-base font-bold text-[#111827] font-heading">
                          {calcProgramme.degree} ({calcProgramme.durationYears} Years)
                        </h4>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#ECFDF5] border border-emerald-200 text-[#007A59] font-bold text-xs">
                        {effectiveDiscountPercent}% Waiver
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs sm:text-sm">
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Annual Tuition Fee:</span>
                        <span className="font-semibold text-[#111827]">
                          {formatMoney(grossTuitionINR)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[#007A59] font-semibold bg-[#ECFDF5] px-3 py-2 rounded-xl border border-emerald-200">
                        <span>Scholarship Deduction ({effectiveDiscountPercent}%):</span>
                        <span>- {formatMoney(scholarshipDeductionINR)}</span>
                      </div>

                      <div className="flex items-center justify-between text-[#111827] font-bold pt-1">
                        <span>Net Payable Tuition:</span>
                        <span>{formatMoney(netTuitionINR)}</span>
                      </div>

                      <div className="flex items-center justify-between text-slate-600">
                        <span>Hostel &amp; Mess Fee:</span>
                        <span className="font-semibold text-[#111827]">
                          {formatMoney(selectedHostelINR)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-slate-600 border-b border-[#E2E8F0] pb-3">
                        <span>Exam, Lab &amp; Library Charges:</span>
                        <span className="font-semibold text-[#111827]">
                          {formatMoney(mandatoryAnnualAcademicINR)}
                        </span>
                      </div>

                      <div className="pt-1 flex items-baseline justify-between">
                        <div>
                          <span className="text-sm font-bold text-[#111827] block">
                            Estimated Annual Payable
                          </span>
                          <span className="text-[11px] text-slate-500">
                            Full {calcProgramme.durationYears}-Yr Est:{" "}
                            <strong>{formatMoney(totalPayableDegreeINR)}</strong>
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-extrabold text-[#009B70] font-heading">
                            {formatMoney(totalPayableAnnualINR)}
                          </span>
                          <span className="text-[11px] text-slate-500 block">
                            per year ({currency})
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 leading-relaxed bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0]">
                      * Scholarships are subject to official university verification of final transcripts and seat availability at the time of admission.
                    </p>

                    <Link
                      href={`/register?universityId=${university.id}&courseId=${calcProgramme.id}`}
                      className="block"
                    >
                      <Button className="w-full h-11 rounded-xl bg-[#009B70] hover:bg-[#007A59] text-white font-semibold text-xs sm:text-sm gap-2 cursor-pointer">
                        <span>Apply with This Estimate</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ────────────────────────────────────────────────────────────────
                SECTION 8: CAMPUS & FACILITIES (#campus-facilities)
               ──────────────────────────────────────────────────────────────── */}
            <section
              id="campus-facilities"
              className="scroll-mt-32 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E2E8F0] pb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200 px-3 py-1 rounded-full mb-2">
                    <Layers className="w-3.5 h-3.5" />
                    Campus &amp; Infrastructure
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                    Visual Campus Experience &amp; Verified Facilities
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1">
                    Explore academic buildings, laboratories, libraries, hostels, dining, sports, and medical infrastructure at {university.name}.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["All", "Academic", "Laboratories", "Library", "Hostel & Dining", "Sports & Medical"].map(
                    (cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedGalleryFilter(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                          selectedGalleryFilter === cat
                            ? "bg-[#009B70] text-white border-[#009B70]"
                            : "bg-[#F8FAFC] text-slate-600 border-[#E2E8F0] hover:text-[#111827]"
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Image Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {filteredGallery.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setLightboxItem(item)}
                    className="group text-left rounded-xl border border-[#E2E8F0] overflow-hidden bg-[#F8FAFC] hover:border-[#009B70] transition-all flex flex-col cursor-pointer"
                  >
                    <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/75 text-white text-[10px] font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-3 space-y-1 flex-1">
                      <h3 className="text-xs font-bold text-[#111827] group-hover:text-[#009B70] transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Verified University Facilities List */}
              <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
                <h3 className="text-sm font-bold text-[#111827]">
                  Verified On-Campus Facilities at {university.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {university.facilities.map((facility, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] border border-emerald-200 text-[#009B70] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#111827]">
                        {facility}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ────────────────────────────────────────────────────────────────
                SECTION 9: HOSTEL & ACCOMMODATION (#accommodation)
               ──────────────────────────────────────────────────────────────── */}
            <section
              id="accommodation"
              className="scroll-mt-32 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6"
            >
              <div className="border-b border-[#E2E8F0] pb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200 px-3 py-1 rounded-full mb-2">
                  <BedDouble className="w-3.5 h-3.5" />
                  Hostel &amp; Student Accommodation
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                  On-Campus Residential Hostels &amp; Dining
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] mt-1">
                  Safe, comfortable, and fully supervised hostel residences for international and regional students.
                </p>
              </div>

              {/* Room Types & Annual Charges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-emerald-200 bg-[#ECFDF5]/40 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#009B70] text-white text-xs font-bold">
                      Most Popular for International Students
                    </span>
                    <span className="text-xs font-semibold text-[#007A59]">
                      AC Residence
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#111827] font-heading">
                    Air-Conditioned (AC) Hostel Room + Mess
                  </h3>
                  <div className="text-2xl font-extrabold text-[#111827] font-heading">
                    {formatMoney(university.hostelFeePerYearINR)}
                    <span className="text-xs font-normal text-slate-500"> / year (Incl. Meals)</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#009B70]" />
                      <span>Double / Triple sharing configurations (Single subject to availability)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#009B70]" />
                      <span>Individual bed, study desk, chair, wardrobe &amp; high-speed Wi-Fi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#009B70]" />
                      <span>Includes 4 daily meals at the international/campus dining hall</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-slate-700 text-xs font-bold">
                      Economical Residential Plan
                    </span>
                    <span className="text-xs font-semibold text-slate-600">
                      Non-AC Residence
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#111827] font-heading">
                    Standard Non-AC Hostel Room + Mess
                  </h3>
                  <div className="text-2xl font-extrabold text-[#111827] font-heading">
                    {formatMoney(Math.round(university.hostelFeePerYearINR * 0.78))}
                    <span className="text-xs font-normal text-slate-500"> / year (Incl. Meals)</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#009B70]" />
                      <span>Well-ventilated double / triple sharing rooms with ceiling fans</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#009B70]" />
                      <span>Full study furniture, RO drinking water, hot water &amp; Wi-Fi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#009B70]" />
                      <span>Includes complete daily mess meals, laundry access &amp; security</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hostel Amenities Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    icon: Utensils,
                    title: "Multi-Cuisine Mess",
                    desc: "Veg, Non-Veg & Nepali/SAARC friendly meals",
                  },
                  {
                    icon: Lock,
                    title: "24×7 Security",
                    desc: "Biometric entry, CCTV & dedicated wardens",
                  },
                  {
                    icon: Wifi,
                    title: "Campus Wi-Fi & Study",
                    desc: "High-speed internet & common reading rooms",
                  },
                  {
                    icon: HeartPulse,
                    title: "Laundry & Medical",
                    desc: "Laundry service & 24×7 medical support",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1"
                    >
                      <Icon className="w-4 h-4 text-[#009B70]" />
                      <h4 className="text-xs font-bold text-[#111827]">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ────────────────────────────────────────────────────────────────
                SECTION 10: PLACEMENTS & CAREER OPPORTUNITIES (#placements)
               ──────────────────────────────────────────────────────────────── */}
            <section
              id="placements"
              className="scroll-mt-32 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6"
            >
              <div className="border-b border-[#E2E8F0] pb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200 px-3 py-1 rounded-full mb-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  Placements &amp; Career Outcomes
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                  Career Development, Internships &amp; Placement Support
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] mt-1">
                  Verified career preparation, clinical/industry training, and placement cell services at {university.name}.
                </p>
              </div>

              {/* Honest, Verified Placement Metrics Bar (Strict Data Integrity) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-4">
                  <span className="text-xs font-medium text-slate-500 block">
                    Placement Cell Status
                  </span>
                  <span className="text-base font-bold text-[#111827] font-heading mt-1 block">
                    {university.placementRate || "Dedicated T&P Cell"}
                  </span>
                  <span className="text-[11px] text-[#007A59] font-medium">
                    Active On-Campus Recruitment Drives
                  </span>
                </div>

                <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-4">
                  <span className="text-xs font-medium text-slate-500 block">
                    Salary Package Statistics
                  </span>
                  <span className="text-base font-bold text-[#111827] font-heading mt-1 block">
                    {university.highestPackage ||
                      university.averagePackage ||
                      "Department-Specific"}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {university.highestPackage
                      ? "Verified Institutional Record"
                      : "Official branch-wise report shared on request"}
                  </span>
                </div>

                <div className="rounded-xl bg-[#ECFDF5]/60 border border-emerald-200 p-4">
                  <span className="text-xs font-medium text-[#007A59] block">
                    Mandatory Internships
                  </span>
                  <span className="text-base font-bold text-[#007A59] font-heading mt-1 block">
                    Included in Curriculum
                  </span>
                  <span className="text-[11px] text-[#007A59]">
                    Final-Semester Industry / Clinical Training
                  </span>
                </div>
              </div>

              {/* Career Development & Placement Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-5 space-y-3">
                  <h3 className="text-sm font-bold text-[#111827]">
                    Career &amp; Training Support Services
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#009B70] shrink-0 mt-0.5" />
                      <span>
                        <strong>Industry Internship Integration:</strong> Structured summer and final-semester internships across IT, engineering, corporate, and healthcare sectors.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#009B70] shrink-0 mt-0.5" />
                      <span>
                        <strong>Technical &amp; Coding Bootcamps:</strong> Aptitude preparation, mock interviews, and technical certification training from Semester 5 onwards.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#009B70] shrink-0 mt-0.5" />
                      <span>
                        <strong>Global Licensure Preparation:</strong> Academic alignment for NEC (Nepal Engineering Council), NMC, PCI, INC, and international postgraduate pathways.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-5 space-y-3">
                  <h3 className="text-sm font-bold text-[#111827]">
                    Top Graduate Career Tracks from {university.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(
                      new Set(allProgrammes.flatMap((p) => p.careers))
                    )
                      .slice(0, 12)
                      .map((role, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] text-xs font-semibold text-[#111827]"
                        >
                          {role}
                        </span>
                      ))}
                  </div>
                  <p className="text-[11px] text-slate-500 pt-1">
                    Note: StudyIndia strictly publishes verified institutional data. For branch-specific placement statistics of the most recent graduating batch, request the official university placement brochure from our counseling desk.
                  </p>
                </div>
              </div>
            </section>

            {/* ────────────────────────────────────────────────────────────────
                SECTION 11: INTERNATIONAL STUDENT EXPERIENCE (#international-students)
               ──────────────────────────────────────────────────────────────── */}
            <section
              id="international-students"
              className="scroll-mt-32 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6"
            >
              <div className="border-b border-[#E2E8F0] pb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200 px-3 py-1 rounded-full mb-2">
                  <Globe className="w-3.5 h-3.5" />
                  International Student Experience
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                  Dedicated Support for Students from Nepal &amp; 50+ Countries
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] mt-1">
                  With {university.nepaliStudentCount.toLocaleString()}+ international and regional students, {university.name} provides end-to-end onboarding from application to graduation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Bilateral Treaty Benefits (Nepal & Bhutan)",
                    desc: "Nepalese and Bhutanese nationals enjoy visa-free entry into India using a valid Passport or National Citizenship ID, alongside dedicated SAARC merit scholarship slabs.",
                  },
                  {
                    title: "Document Equivalence & MoEST NOC Support",
                    desc: "Rapid issuance of official University Bonafide & Provisional Admission Letters required for Ministry of Education (MoEST, Nepal) No Objection Certificate (NOC) and bank education loans.",
                  },
                  {
                    title: "Student e-Visa & FRRO Registration",
                    desc: "For students from Africa, the Middle East, Central Asia, and ASEAN, the International Office issues official Visa Invitation Letters and assists with mandatory FRRO registration within 14 days of arrival.",
                  },
                  {
                    title: "Pre-Arrival Briefing & Airport Reception",
                    desc: "Coordinated arrival guidance from the nearest international airport/railway hub, temporary parent guest-house booking assistance, SIM card setup, and campus orientation.",
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-5 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#ECFDF5] border border-emerald-200 text-[#009B70] flex items-center justify-center text-xs font-bold">
                        0{idx + 1}
                      </div>
                      <h3 className="text-sm font-bold text-[#111827]">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* International Student Support CTA Banner */}
              <div className="rounded-xl bg-[#ECFDF5] border border-emerald-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#007A59] block">
                    International Admissions Desk
                  </span>
                  <h3 className="text-base font-bold text-[#111827] font-heading">
                    Need help with Equivalence, MoEST NOC, or Student Visa?
                  </h3>
                  <p className="text-xs text-slate-600">
                    Connect with our dedicated international admissions counselors for free document pre-screening.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => setCallbackModalOpen(true)}
                    className="h-10 px-4 rounded-xl bg-[#009B70] hover:bg-[#007A59] text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Contact International Support
                  </button>
                  <Link
                    href={`/register?universityId=${university.id}`}
                    className="h-10 px-4 rounded-xl bg-white hover:bg-slate-50 border border-emerald-300 text-[#007A59] font-semibold text-xs inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Start Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* ────────────────────────────────────────────────────────────────
                SECTION 12: UNIVERSITY LOCATION & CONNECTIVITY (#location)
               ──────────────────────────────────────────────────────────────── */}
            <section
              id="location"
              className="scroll-mt-32 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E2E8F0] pb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200 px-3 py-1 rounded-full mb-2">
                    <Navigation className="w-3.5 h-3.5" />
                    Location &amp; Connectivity
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                    Campus Address &amp; Regional Transit Access
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1">
                    {university.campusAddress || `${university.name}, ${university.city}, ${university.state}, India`}
                  </p>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${university.name} ${university.city} ${university.state} India`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#ECFDF5] border border-[#E2E8F0] text-xs font-semibold text-[#111827] hover:text-[#007A59] transition-colors shrink-0 self-start sm:self-auto"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                {/* Interactive Google Maps Embed (7 Cols) */}
                <div className="md:col-span-7 rounded-xl overflow-hidden border border-[#E2E8F0] bg-slate-100 h-80 sm:h-96 md:h-auto md:min-h-[450px]">
                  <iframe
                    title={`${university.name} Campus Location Map`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      `${university.name} ${university.city} ${university.state} India`
                    )}&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Connectivity & Essential Services (5 Cols) */}
                <div className="md:col-span-5 space-y-3">
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                      <MapPin className="w-4 h-4 text-[#009B70]" />
                      <span>Official Campus Location</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {university.name}, {university.city}, {university.state}, India
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                      <Plane className="w-4 h-4 text-[#009B70]" />
                      <span>Air Connectivity</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {university.nearestAirport ||
                        `Accessible via the nearest regional/international airport serving ${university.city} (${university.state}). Direct flight connections from Kathmandu via New Delhi / major Indian hubs.`}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                      <Train className="w-4 h-4 text-[#009B70]" />
                      <span>Railway &amp; Highway Transit</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {university.nearestRailway ||
                        `Connected to ${university.city} Junction / main railway terminus with regular cab, bus, and inter-state transit services to campus.`}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                      <Building2 className="w-4 h-4 text-[#009B70]" />
                      <span>Essential Services Around Campus</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      ATMs, nationalized banks, pharmacies, student stationery stores, hospitals, and parent guest accommodations are located within the campus periphery.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ────────────────────────────────────────────────────────────────
                SECTION 14: INTERACTIVE DOCUMENT CHECKLIST (#document-checklist)
               ──────────────────────────────────────────────────────────────── */}
            <section
              id="document-checklist"
              className="scroll-mt-32 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E2E8F0] pb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200 px-3 py-1 rounded-full mb-2">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    Application Readiness
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                    Interactive Student Document Readiness Checklist
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1">
                    Check off the documents you currently have ready before starting your application.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                  <span className="text-xs font-semibold text-slate-600">
                    Readiness:
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#ECFDF5] border border-emerald-200 text-[#007A59] font-bold text-xs">
                    {docProgress}% Complete ({checkedDocs.length}/{DOCUMENT_CHECKLIST.length})
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-[#009B70] transition-all duration-300"
                  style={{ width: `${docProgress}%` }}
                />
              </div>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DOCUMENT_CHECKLIST.map((doc) => {
                  const checked = checkedDocs.includes(doc.id);
                  return (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => toggleDoc(doc.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                        checked
                          ? "bg-[#ECFDF5]/60 border-[#009B70] text-[#111827]"
                          : "bg-[#F8FAFC] border-[#E2E8F0] text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {checked ? (
                        <CheckSquare className="w-4 h-4 text-[#009B70] shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-[#111827]">
                            {doc.title}
                          </span>
                          {!doc.mandatory && (
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-200/70 text-slate-600">
                              If Applicable
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-slate-500 block">
                          {doc.subtitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Note: Pending Grade 12 results or Migration Certificates can be submitted after provisional offer issuance.
                </span>
                <Link href={`/register?universityId=${university.id}`}>
                  <Button className="h-10 px-5 rounded-xl bg-[#009B70] hover:bg-[#007A59] text-white font-semibold text-xs gap-1.5 cursor-pointer">
                    <span>Proceed to Online Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </section>

            {/* ────────────────────────────────────────────────────────────────
                SECTION 15: FAQ SECTION (#faqs)
               ──────────────────────────────────────────────────────────────── */}
            <section
              id="faqs"
              className="scroll-mt-32 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E2E8F0] pb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200 px-3 py-1 rounded-full mb-2">
                    <HelpCircle className="w-3.5 h-3.5" />
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                    Verified Answers About {university.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1">
                    Everything international students and parents ask about recognition, fees, scholarships, hostels, visas, and placements.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setOpenFaqIndices(
                      openFaqIndices.length === universityFaqs.length
                        ? []
                        : universityFaqs.map((_, i) => i)
                    )
                  }
                  className="text-xs font-semibold text-[#009B70] hover:text-[#007A59] px-3 py-1.5 rounded-lg bg-[#F8FAFC] hover:bg-[#ECFDF5] border border-[#E2E8F0] transition-colors cursor-pointer self-start sm:self-auto shrink-0"
                >
                  {openFaqIndices.length === universityFaqs.length
                    ? "Collapse All"
                    : "Expand All"}
                </button>
              </div>

              <div className="space-y-3">
                {universityFaqs.map((faq, idx) => {
                  const isOpen = openFaqIndices.includes(idx);
                  return (
                    <div
                      key={idx}
                      className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
                        isOpen
                          ? "border-[#009B70]/50 bg-[#ECFDF5]/20 shadow-2xs"
                          : "border-[#E2E8F0] bg-white hover:border-slate-300"
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(idx)}
                        className="group w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                      >
                        <div className="space-y-1 pr-2">
                          <span className="inline-block text-[11px] font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200/80 px-2.5 py-0.5 rounded-md">
                            {faq.category}
                          </span>
                          <span className="text-sm sm:text-[15px] font-bold text-[#111827] group-hover:text-[#007A59] transition-colors block leading-snug">
                            {faq.question}
                          </span>
                        </div>
                        <span
                          className={`relative w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isOpen
                              ? "bg-gradient-to-br from-[#009B70] to-[#007A59] text-white border border-[#007A59] ring-4 ring-emerald-500/15 shadow-[0_6px_14px_-3px_rgba(0,155,112,0.45),inset_0_1px_0_rgba(255,255,255,0.35)]"
                              : "bg-gradient-to-b from-white to-[#F8FAFC] border border-slate-200/90 text-slate-600 shadow-[0_2px_5px_-1px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,1)] group-hover:border-[#009B70]/50 group-hover:text-[#009B70] group-hover:ring-4 group-hover:ring-emerald-500/10 group-hover:shadow-[0_4px_10px_-2px_rgba(0,155,112,0.18)]"
                          }`}
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                              isOpen ? "rotate-180" : "group-hover:translate-y-0.5"
                            }`}
                          >
                            <path
                              d="M5.5 7.75L10 12.25L14.5 7.75"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0]/70">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 16: DESKTOP STICKY ENQUIRY & ADMISSIONS SIDEBAR (4 Cols)
             ══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Compact Sticky Enquiry Card */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm overflow-hidden">
              <div className="bg-[#ECFDF5] border-b border-emerald-200/80 p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007A59] bg-white border border-emerald-200 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#009B70]" />
                    Official Admissions Support
                  </span>
                  <span className="text-xs font-semibold text-[#007A59]">
                    2027–28 Intake
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#111827] font-heading pt-1">
                  {university.name}
                </h3>
                <p className="text-xs text-slate-600 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#009B70] shrink-0" />
                  {university.city}, {university.state}
                </p>
              </div>

              <div className="p-5 space-y-4">
                {/* Key Status & Fee Summary */}
                <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3.5 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Admission Status:</span>
                    <span className="font-bold text-[#007A59] inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009B70]" />
                      Open for International Students
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Starting Tuition Fee:</span>
                    <span className="font-bold text-[#111827]">
                      {formatMoney(minAnnualTuitionINR)} / year
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Merit Scholarship:</span>
                    <span className="font-semibold text-[#007A59]">
                      {university.scholarshipAvailable
                        ? "Up to 50% Tuition Waiver"
                        : "As per University Quota"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Application Processing:</span>
                    <span className="font-bold text-[#111827]">
                      Free (₹0 via StudyIndia)
                    </span>
                  </div>
                </div>

                {/* Primary & Secondary CTAs */}
                <div className="space-y-2.5">
                  <Link
                    href={`/register?universityId=${university.id}`}
                    className="block"
                  >
                    <Button className="w-full h-11 rounded-xl bg-[#009B70] hover:bg-[#007A59] text-white font-semibold text-sm gap-2 shadow-2xs cursor-pointer">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setCallbackModalOpen(true)}
                    className="w-full h-10 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#009B70]/50 text-[#111827] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#009B70]" />
                    <span>Request a Callback</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-10 rounded-xl bg-[#ECFDF5] hover:bg-emerald-100/80 border border-emerald-200 text-[#007A59] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#009B70]" />
                    <span>WhatsApp Admissions Desk</span>
                  </a>
                </div>

                {/* Direct University Contact Details */}
                <div className="pt-3 border-t border-[#E2E8F0] space-y-2 text-xs">
                  <span className="font-semibold text-[#111827] block">
                    Direct Admissions Contact
                  </span>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail className="w-3.5 h-3.5 text-[#009B70] shrink-0" />
                    <span className="truncate">{university.contactEmail}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="w-3.5 h-3.5 text-[#009B70] shrink-0" />
                    <span>{university.contactPhone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Section Jump Card */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#111827]">
                  Quick Tools &amp; Calculators
                </span>
                <span className="text-[11px] font-semibold text-[#007A59]">
                  {currency}
                </span>
              </div>
              <div className="space-y-1.5">
                {[
                  {
                    id: "fee-calculator",
                    label: "Interactive Fee & Scholarship Calculator",
                    icon: Calculator,
                  },
                  {
                    id: "programmes",
                    label: `Browse All ${allProgrammes.length} Programmes`,
                    icon: BookOpen,
                  },
                  {
                    id: "document-checklist",
                    label: `Document Checklist (${docProgress}% Ready)`,
                    icon: CheckSquare,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#ECFDF5] border border-[#E2E8F0] hover:border-emerald-200 text-xs font-semibold text-[#111827] hover:text-[#007A59] flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-[#009B70]" />
                        <span>{item.label}</span>
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            SIMILAR ACCREDITED UNIVERSITIES SECTION
           ══════════════════════════════════════════════════════════════════ */}
        {similarUniversities.length > 0 && (
          <section className="mt-16 pt-12 border-t border-[#E2E8F0] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A59] bg-[#ECFDF5] border border-emerald-200 px-3 py-1 rounded-full mb-2">
                  <Compass className="w-3.5 h-3.5" />
                  Compare Similar Institutions
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                  Other Accredited Universities You May Consider
                </h2>
              </div>
              <Link
                href="/universities"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#009B70] hover:text-[#007A59]"
              >
                <span>Explore All Universities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarUniversities.map((sim) => (
                <Link
                  key={sim.id}
                  href={`/universities/${sim.slug}`}
                  className="group bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#009B70] overflow-hidden shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={sim.image}
                        alt={sim.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md bg-white/95 text-[#007A59] font-bold text-xs shadow-2xs">
                          {sim.naacGrade.includes("UGC")
                            ? sim.naacGrade
                            : `NAAC ${sim.naacGrade}`}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-xs text-slate-100 font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                          {sim.city}, {sim.state}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="text-base font-bold text-[#111827] group-hover:text-[#009B70] transition-colors font-heading">
                        {sim.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] line-clamp-2 leading-relaxed">
                        {sim.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 py-3.5 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">
                      <Users className="w-3.5 h-3.5 inline mr-1 text-[#009B70]" />
                      {sim.nepaliStudentCount.toLocaleString()}+ Intl. Students
                    </span>
                    <span className="font-semibold text-[#009B70] inline-flex items-center gap-1">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 16: MOBILE FIXED BOTTOM CTA BAR
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-[#E2E8F0] px-4 py-3 shadow-lg">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-[10px] font-semibold text-slate-500 block truncate">
              {university.name}
            </span>
            <span className="text-sm font-extrabold text-[#111827] block">
              From {formatMoney(minAnnualTuitionINR)}
              <span className="text-[11px] font-normal text-slate-500">/yr</span>
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setCallbackModalOpen(true)}
              className="h-10 px-3.5 rounded-xl bg-[#ECFDF5] border border-emerald-200 text-[#007A59] font-semibold text-xs cursor-pointer"
            >
              Enquire Now
            </button>
            <Link href={`/register?universityId=${university.id}`}>
              <Button className="h-10 px-4 rounded-xl bg-[#009B70] hover:bg-[#007A59] text-white font-semibold text-xs gap-1 cursor-pointer">
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MODAL 1: DETAILED PROGRAMME VIEW (Section 5 Requirement)
         ══════════════════════════════════════════════════════════════════════ */}
      {detailModalProgramme && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setDetailModalProgramme(null)}
        >
          <div
            className="bg-white rounded-2xl border border-[#E2E8F0] max-w-2xl w-full p-6 sm:p-8 shadow-xl space-y-5 my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E2E8F0] pb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#ECFDF5] text-[#007A59] border border-emerald-200 text-xs font-bold">
                    {detailModalProgramme.degree}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {detailModalProgramme.duration}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] font-heading">
                  {detailModalProgramme.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#007A59]">
                  Specialisation: {detailModalProgramme.specialisation}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDetailModalProgramme(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#475569]">
              <div>
                <h4 className="font-bold text-[#111827] mb-1">Programme Overview</h4>
                <p className="leading-relaxed">{detailModalProgramme.overview}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#111827] mb-1.5">
                  Curriculum &amp; Core Subjects
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {detailModalProgramme.curriculumHighlights.map((sub, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#111827]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#009B70] shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <span className="font-bold text-[#111827] block text-xs">
                    Eligibility Requirements
                  </span>
                  <p className="text-xs">{detailModalProgramme.eligibility}</p>
                  <p className="text-[11px] text-slate-500">
                    Subjects: {detailModalProgramme.requiredSubjects.join(", ")}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <span className="font-bold text-[#111827] block text-xs">
                    Admission &amp; Equivalence
                  </span>
                  <p className="text-xs">
                    {detailModalProgramme.admissionRequirements}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#ECFDF5] border border-emerald-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <span className="text-[11px] text-[#007A59] block">
                    Annual Tuition Fee
                  </span>
                  <span className="text-base font-extrabold text-[#111827]">
                    {formatMoney(detailModalProgramme.annualFeeINR)} / yr
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-[#007A59] block">
                    Est. With 30% Scholarship
                  </span>
                  <span className="text-base font-extrabold text-[#007A59]">
                    {formatMoney(Math.round(detailModalProgramme.annualFeeINR * 0.7))} / yr
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-[#007A59] block">
                    Total Duration Fee (Base)
                  </span>
                  <span className="text-base font-extrabold text-[#111827]">
                    {formatMoney(
                      detailModalProgramme.annualFeeINR *
                        detailModalProgramme.durationYears
                    )}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#111827] mb-1.5">
                  Career Opportunities
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {detailModalProgramme.careers.map((c, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#111827]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
              {detailModalProgramme.courseLink && (
                <Link
                  href={detailModalProgramme.courseLink}
                  className="h-10 px-4 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 border border-[#E2E8F0] text-xs font-semibold text-[#111827] inline-flex items-center gap-1.5"
                >
                  <span>Open Dedicated Course Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              )}
              <Link
                href={
                  detailModalProgramme.courseLink
                    ? `/register?courseId=${detailModalProgramme.id}&universityId=${university.id}`
                    : `/register?universityId=${university.id}`
                }
              >
                <Button className="h-10 px-5 rounded-xl bg-[#009B70] hover:bg-[#007A59] text-white font-semibold text-xs gap-1.5 cursor-pointer">
                  <span>Apply for {detailModalProgramme.degree}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          MODAL 2: COMPARE UP TO 3 PROGRAMMES SIDE-BY-SIDE (Section 5)
         ══════════════════════════════════════════════════════════════════════ */}
      {showCompareModal && comparedProgrammes.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowCompareModal(false)}
        >
          <div
            className="bg-white rounded-2xl border border-[#E2E8F0] max-w-4xl w-full p-6 sm:p-8 shadow-xl space-y-5 my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <div>
                <span className="text-xs font-bold text-[#007A59] block">
                  Side-by-Side Programme Comparison
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] font-heading">
                  Comparing {comparedProgrammes.length} Programme(s) at {university.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowCompareModal(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                    <th className="p-3.5 font-bold text-slate-500 w-40">Feature</th>
                    {comparedProgrammes.map((p) => (
                      <th key={p.id} className="p-3.5 font-bold text-[#111827]">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="px-2 py-0.5 rounded bg-[#ECFDF5] text-[#007A59] text-[11px] font-bold">
                              {p.degree}
                            </span>
                            <div className="mt-1">{p.title}</div>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleCompareProgramme(p.id)}
                            className="text-slate-400 hover:text-red-600 cursor-pointer"
                            title="Remove"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  <tr>
                    <td className="p-3.5 font-semibold text-slate-600">Specialisation</td>
                    {comparedProgrammes.map((p) => (
                      <td key={p.id} className="p-3.5 text-[#111827] font-medium">
                        {p.specialisation}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-slate-600">Duration</td>
                    {comparedProgrammes.map((p) => (
                      <td key={p.id} className="p-3.5 text-slate-700">
                        {p.duration}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-slate-600">Annual Tuition</td>
                    {comparedProgrammes.map((p) => (
                      <td key={p.id} className="p-3.5 font-bold text-[#111827]">
                        {formatMoney(p.annualFeeINR)} / yr
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-slate-600">
                      Est. Fee (30% Waiver)
                    </td>
                    {comparedProgrammes.map((p) => (
                      <td key={p.id} className="p-3.5 font-bold text-[#007A59]">
                        {formatMoney(Math.round(p.annualFeeINR * 0.7))} / yr
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-slate-600">Eligibility</td>
                    {comparedProgrammes.map((p) => (
                      <td key={p.id} className="p-3.5 text-xs text-slate-600">
                        {p.eligibility}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-slate-600">Career Paths</td>
                    {comparedProgrammes.map((p) => (
                      <td key={p.id} className="p-3.5 text-xs text-slate-600">
                        {p.careers.join(", ")}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-slate-600">Action</td>
                    {comparedProgrammes.map((p) => (
                      <td key={p.id} className="p-3.5">
                        <Link href={`/register?universityId=${university.id}&courseId=${p.id}`}>
                          <Button
                            size="sm"
                            className="w-full h-9 rounded-xl bg-[#009B70] hover:bg-[#007A59] text-white text-xs font-semibold cursor-pointer"
                          >
                            Apply for {p.degree}
                          </Button>
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          MODAL 3: CAMPUS GALLERY LIGHTBOX (Section 8)
         ══════════════════════════════════════════════════════════════════════ */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="bg-white rounded-2xl border border-[#E2E8F0] max-w-2xl w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-96 w-full bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-1.5">
              <span className="px-2.5 py-0.5 rounded-md bg-[#ECFDF5] text-[#007A59] text-xs font-bold">
                {lightboxItem.category}
              </span>
              <h3 className="text-base font-bold text-[#111827] font-heading">
                {lightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          MODAL 4: REQUEST A CALLBACK / ENQUIRY MODAL (Section 16)
         ══════════════════════════════════════════════════════════════════════ */}
      {callbackModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setCallbackModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl border border-[#E2E8F0] max-w-md w-full p-6 shadow-xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#E2E8F0] pb-3">
              <div>
                <span className="text-xs font-bold text-[#007A59] block">
                  Official Admissions Counseling
                </span>
                <h3 className="text-lg font-bold text-[#111827] font-heading">
                  Request a Callback — {university.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCallbackModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {callbackSubmitted ? (
              <div className="p-5 rounded-xl bg-[#ECFDF5] border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#009B70] mx-auto" />
                <h4 className="text-base font-bold text-[#111827]">
                  Callback Request Received!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our International Admissions Counselor for <strong>{university.name}</strong> will contact you shortly on your phone/WhatsApp with fee and scholarship details.
                </p>
                <Button
                  onClick={() => {
                    setCallbackSubmitted(false);
                    setCallbackModalOpen(false);
                  }}
                  className="w-full h-10 rounded-xl bg-[#009B70] text-white text-xs font-semibold cursor-pointer"
                >
                  Done
                </Button>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="font-bold text-[#111827] block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={callbackForm.name}
                    onChange={(e) =>
                      setCallbackForm({ ...callbackForm, name: e.target.value })
                    }
                    placeholder="Enter your full name"
                    className="w-full h-10 px-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#111827] focus:outline-none focus:border-[#009B70]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-[#111827] block mb-1">
                      Country *
                    </label>
                    <select
                      value={callbackForm.country}
                      onChange={(e) =>
                        setCallbackForm({ ...callbackForm, country: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#111827] focus:outline-none focus:border-[#009B70]"
                    >
                      <option value="Nepal">Nepal</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India (NRI)</option>
                      <option value="Other International">Other Country</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-[#111827] block mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={callbackForm.phone}
                      onChange={(e) =>
                        setCallbackForm({ ...callbackForm, phone: e.target.value })
                      }
                      placeholder="+977 98XXXXXXXX"
                      className="w-full h-10 px-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#111827] focus:outline-none focus:border-[#009B70]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#111827] block mb-1">
                    Preferred Programme
                  </label>
                  <select
                    value={callbackForm.programme}
                    onChange={(e) =>
                      setCallbackForm({ ...callbackForm, programme: e.target.value })
                    }
                    className="w-full h-10 px-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#111827] focus:outline-none focus:border-[#009B70]"
                  >
                    {allProgrammes.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.degree} — {p.specialisation}
                      </option>
                    ))}
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 rounded-xl bg-[#009B70] hover:bg-[#007A59] text-white font-semibold text-xs sm:text-sm cursor-pointer"
                >
                  Submit Callback Request
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
