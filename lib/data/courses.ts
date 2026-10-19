export interface Course {
  id: string;
  universityId: string;
  universityName: string;
  universitySlug: string;
  name: string;
  stream:
    | "Engineering & Technology"
    | "Medical & Allied Health"
    | "Management & Business"
    | "Computer Applications & IT"
    | "Nursing & Pharmacy"
    | "Basic & Applied Sciences";
  degree: "B.Tech" | "MBBS" | "BBA" | "BCA" | "B.Sc Nursing" | "B.Pharm" | "MBA" | "MCA" | "B.Sc";
  durationYears: number;
  annualFeeINR: number;
  totalFeeINR: number;
  seatsForInternational: number;
  applicationDeadline: string;
  eligibility: {
    minimumEducation: string;
    minimumGpaOrPercentage: string;
    requiredSubjects: string[];
    nepalEquivalenceNote: string;
  };
  overview: string;
  careerProspects: string[];
  isPopular: boolean;
}

export const coursesData: Course[] = [
  {
    id: "course-1",
    universityId: "univ-1",
    universityName: "Sharda University",
    universitySlug: "sharda-university-greater-noida",
    name: "B.Tech in Computer Science & Engineering (AI & Machine Learning)",
    stream: "Engineering & Technology",
    degree: "B.Tech",
    durationYears: 4,
    annualFeeINR: 220000,
    totalFeeINR: 880000,
    seatsForInternational: 45,
    applicationDeadline: "July 31, 2026",
    eligibility: {
      minimumEducation: "Class 12 / NEB (Science Stream)",
      minimumGpaOrPercentage: "GPA 2.4+ (or 55% Aggregate)",
      requiredSubjects: ["Physics", "Mathematics", "Chemistry or Computer Science"],
      nepalEquivalenceNote: "NEB Class 12 Science mark-sheet accepted directly without entrance test requirement for international quota.",
    },
    overview:
      "A flagship four-year curriculum focused on modern deep learning algorithms, neural networks, natural language processing, and industry software development practices.",
    careerProspects: [
      "AI/ML Engineer",
      "Full-Stack Software Developer",
      "Data Scientist",
      "Cloud Solutions Architect",
    ],
    isPopular: true,
  },
  {
    id: "course-2",
    universityId: "univ-1",
    universityName: "Sharda University",
    universitySlug: "sharda-university-greater-noida",
    name: "B.Sc in Nursing (Basic)",
    stream: "Nursing & Pharmacy",
    degree: "B.Sc Nursing",
    durationYears: 4,
    annualFeeINR: 185000,
    totalFeeINR: 740000,
    seatsForInternational: 30,
    applicationDeadline: "July 20, 2026",
    eligibility: {
      minimumEducation: "Class 12 / NEB (Biology Stream)",
      minimumGpaOrPercentage: "GPA 2.4+ (or 50% in PCB)",
      requiredSubjects: ["Physics", "Chemistry", "Biology", "English"],
      nepalEquivalenceNote: "Indian Nursing Council (INC) approved. Eligible for Nepal Nursing Council (NNC) licensing examination upon completion.",
    },
    overview:
      "Comprehensive clinical nursing education with direct practical hospital rotations at the 900-bed NABH-accredited Sharda Super-Speciality Hospital.",
    careerProspects: [
      "Registered Nurse (Hospital/ICU)",
      "Clinical Nurse Specialist",
      "Healthcare Administrator",
      "International Healthcare Practitioner (NCLEX / NHS pathway)",
    ],
    isPopular: true,
  },
  {
    id: "course-3",
    universityId: "univ-2",
    universityName: "Vellore Institute of Technology (VIT)",
    universitySlug: "vellore-institute-of-technology-vit",
    name: "B.Tech in Computer Science and Engineering",
    stream: "Engineering & Technology",
    degree: "B.Tech",
    durationYears: 4,
    annualFeeINR: 298000,
    totalFeeINR: 1192000,
    seatsForInternational: 60,
    applicationDeadline: "June 30, 2026",
    eligibility: {
      minimumEducation: "Class 12 / NEB (Science)",
      minimumGpaOrPercentage: "GPA 2.8+ (or 65% in PCM)",
      requiredSubjects: ["Physics", "Chemistry", "Mathematics"],
      nepalEquivalenceNote: "Direct international application based on Class 12 board marks (No VITEEE requirement for international students).",
    },
    overview:
      "Prestigious engineering degree ranked amongst top technical programs in India. Features comprehensive internship semesters and massive placement opportunities.",
    careerProspects: [
      "Systems Engineer",
      "Quantitative Analyst",
      "Cybersecurity Consultant",
      "Software Engineer at Global Tech Companies",
    ],
    isPopular: true,
  },
  {
    id: "course-4",
    universityId: "univ-3",
    universityName: "Manipal Academy of Higher Education (MAHE)",
    universitySlug: "manipal-academy-of-higher-education",
    name: "Bachelor of Pharmacy (B.Pharm)",
    stream: "Nursing & Pharmacy",
    degree: "B.Pharm",
    durationYears: 4,
    annualFeeINR: 310000,
    totalFeeINR: 1240000,
    seatsForInternational: 20,
    applicationDeadline: "June 25, 2026",
    eligibility: {
      minimumEducation: "Class 12 / NEB (Science PCB or PCM)",
      minimumGpaOrPercentage: "GPA 2.6+ (or 60% aggregate)",
      requiredSubjects: ["Physics", "Chemistry", "Biology or Mathematics"],
      nepalEquivalenceNote: "Pharmacy Council of India (PCI) approved; fully recognized by Nepal Pharmacy Council (NPC).",
    },
    overview:
      "Delivered at Manipal College of Pharmaceutical Sciences (MCOPS), ranked #9 in India for Pharmacy by NIRF. Extensive research infrastructure and formulation labs.",
    careerProspects: [
      "Industrial Pharmacist",
      "Drug Regulatory Affairs Executive",
      "Formulation Scientist",
      "Clinical Trial Manager",
    ],
    isPopular: true,
  },
  {
    id: "course-5",
    universityId: "univ-4",
    universityName: "Chandigarh University",
    universitySlug: "chandigarh-university-cu",
    name: "Bachelor of Business Administration (BBA - FinTech & Analytics)",
    stream: "Management & Business",
    degree: "BBA",
    durationYears: 3,
    annualFeeINR: 145000,
    totalFeeINR: 435000,
    seatsForInternational: 50,
    applicationDeadline: "August 15, 2026",
    eligibility: {
      minimumEducation: "Class 12 / NEB (Any Stream: Science, Management, Humanities)",
      minimumGpaOrPercentage: "GPA 2.0+ (or 50% Aggregate)",
      requiredSubjects: ["English"],
      nepalEquivalenceNote: "Open to students from NEB Management, Science, or Humanities with passing marks in English.",
    },
    overview:
      "Modern business degree fusing core management, business analytics, digital banking, and financial technology tools like Python and Tableau.",
    careerProspects: [
      "Financial Analyst",
      "Digital Marketing Strategist",
      "Business Development Manager",
      "Corporate Banking Associate",
    ],
    isPopular: true,
  },
  {
    id: "course-6",
    universityId: "univ-4",
    universityName: "Chandigarh University",
    universitySlug: "chandigarh-university-cu",
    name: "Bachelor of Computer Applications (BCA - Cloud & Cyber Security)",
    stream: "Computer Applications & IT",
    degree: "BCA",
    durationYears: 3,
    annualFeeINR: 135000,
    totalFeeINR: 405000,
    seatsForInternational: 60,
    applicationDeadline: "August 10, 2026",
    eligibility: {
      minimumEducation: "Class 12 / NEB (Any Stream)",
      minimumGpaOrPercentage: "GPA 2.0+ (or 50% Aggregate)",
      requiredSubjects: ["Mathematics or Computer Science or Business Math preferred"],
      nepalEquivalenceNote: "Accessible for students who took Computer Science in Class 11/12 or general Mathematics.",
    },
    overview:
      "Three-year career-focused IT program focusing on AWS Cloud infrastructure, ethical hacking, Linux server administration, and backend API design.",
    careerProspects: [
      "Cloud Operations Specialist",
      "Network Security Engineer",
      "Web Applications Developer",
      "Database Administrator",
    ],
    isPopular: true,
  },
  {
    id: "course-7",
    universityId: "univ-5",
    universityName: "KIIT Deemed to be University",
    universitySlug: "kiit-university-bhubaneswar",
    name: "B.Tech in Civil Engineering (Infrastructure Planning)",
    stream: "Engineering & Technology",
    degree: "B.Tech",
    durationYears: 4,
    annualFeeINR: 245000,
    totalFeeINR: 980000,
    seatsForInternational: 25,
    applicationDeadline: "July 15, 2026",
    eligibility: {
      minimumEducation: "Class 12 / NEB (Science Stream)",
      minimumGpaOrPercentage: "GPA 2.4+ (or 55% in PCM)",
      requiredSubjects: ["Physics", "Chemistry", "Mathematics"],
      nepalEquivalenceNote: "Recognized by Nepal Engineering Council (NEC) for licensing in Nepal.",
    },
    overview:
      "World-class laboratories in structural analysis, earthquake engineering, and environmental hydraulics with extensive field exposure.",
    careerProspects: [
      "Structural Engineer",
      "Hydropower Infrastructure Consultant",
      "Urban Planning Engineer",
      "Construction Project Manager",
    ],
    isPopular: false,
  },
  {
    id: "course-8",
    universityId: "univ-6",
    universityName: "SRM Institute of Science and Technology",
    universitySlug: "srm-institute-of-science-and-technology",
    name: "B.Tech in Electronics and Communication Engineering",
    stream: "Engineering & Technology",
    degree: "B.Tech",
    durationYears: 4,
    annualFeeINR: 260000,
    totalFeeINR: 1040000,
    seatsForInternational: 35,
    applicationDeadline: "July 10, 2026",
    eligibility: {
      minimumEducation: "Class 12 / NEB (Science Stream)",
      minimumGpaOrPercentage: "GPA 2.4+ (or 60% in PCM)",
      requiredSubjects: ["Physics", "Chemistry", "Mathematics"],
      nepalEquivalenceNote: "Eligible for Nepal Engineering Council (NEC) registration upon graduation.",
    },
    overview:
      "Specialized coursework in embedded systems, IoT architecture, VLSI circuit design, and wireless 5G communications.",
    careerProspects: [
      "VLSI Design Engineer",
      "Embedded Systems Developer",
      "Telecommunications Specialist",
      "Robotics Hardware Engineer",
    ],
    isPopular: false,
  },
];
