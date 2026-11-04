export interface Course {
  id: string;
  universityId: string;
  universityName: string;
  universitySlug: string;
  name: string;
  shortTitle: string;
  highlightSubTitle: string;
  image: string;
  primaryTag: string;
  hudBadges?: string[];
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
    shortTitle: "Computer Science & Engineering",
    highlightSubTitle: "(AI & Machine Learning)",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=85",
    primaryTag: "AI & Machine Learning",
    hudBadges: ["AI", "ML"],
    stream: "Engineering & Technology",
    degree: "B.Tech",
    durationYears: 4,
    annualFeeINR: 220000,
    totalFeeINR: 880000,
    seatsForInternational: 45,
    applicationDeadline: "July 31, 2026",
    eligibility: {
      minimumEducation: "Grade 12 / High School (A-Levels, IB, CBSE, WAEC, NEB — Science)",
      minimumGpaOrPercentage: "GPA 2.4+ (or 55% Aggregate)",
      requiredSubjects: ["Physics", "Mathematics", "Chemistry or Computer Science"],
      nepalEquivalenceNote:
        "Direct merit admission on Grade 12 / High School transcripts without JEE Main requirement. Washington Accord & national engineering council (NEC/ABET) aligned.",
    },
    overview:
      "An industry-focused undergraduate program designed to build future-ready skills in AI, ML and modern computing.",
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
    shortTitle: "Bachelor of Science in Nursing",
    highlightSubTitle: "(Clinical & Hospital Care)",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=85",
    primaryTag: "1,200-Bed Hospital",
    hudBadges: ["INC", "RN"],
    stream: "Nursing & Pharmacy",
    degree: "B.Sc Nursing",
    durationYears: 4,
    annualFeeINR: 185000,
    totalFeeINR: 740000,
    seatsForInternational: 30,
    applicationDeadline: "July 20, 2026",
    eligibility: {
      minimumEducation: "Grade 12 / High School (Biology / PCB Stream)",
      minimumGpaOrPercentage: "GPA 2.4+ (or 50% in PCB)",
      requiredSubjects: ["Physics", "Chemistry", "Biology", "English"],
      nepalEquivalenceNote:
        "Indian Nursing Council (INC) approved. Eligible for global nursing licensure pathways (NCLEX-RN USA, UK NMC, Australia AHPRA, and SAARC Nursing Councils).",
    },
    overview:
      "Comprehensive clinical nursing education with direct practical hospital rotations at the 1,200-bed NABH-accredited Sharda Super-Speciality Hospital.",
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
    shortTitle: "Computer Science & Engineering",
    highlightSubTitle: "(Core Software & Systems)",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=85",
    primaryTag: "ABET Accredited",
    hudBadges: ["CSE", "FFCS"],
    stream: "Engineering & Technology",
    degree: "B.Tech",
    durationYears: 4,
    annualFeeINR: 298000,
    totalFeeINR: 1192000,
    seatsForInternational: 60,
    applicationDeadline: "June 30, 2026",
    eligibility: {
      minimumEducation: "Grade 12 / High School (A-Levels, IB, CBSE, WAEC, NEB — Science)",
      minimumGpaOrPercentage: "GPA 2.8+ (or 65% in PCM)",
      requiredSubjects: ["Physics", "Chemistry", "Mathematics"],
      nepalEquivalenceNote:
        "Direct international admission based on Grade 12 board marks (No VITEEE/JEE exam required for international & NRI students). ABET (USA) accredited.",
    },
    overview:
      "Prestigious ABET-accredited engineering degree ranked among the top technical programs in Asia with Fortune 500 placement opportunities.",
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
    shortTitle: "Bachelor of Pharmacy",
    highlightSubTitle: "(Pharmaceutical Sciences)",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85",
    primaryTag: "NIRF #9 Pharmacy",
    hudBadges: ["PCI", "R&D"],
    stream: "Nursing & Pharmacy",
    degree: "B.Pharm",
    durationYears: 4,
    annualFeeINR: 310000,
    totalFeeINR: 1240000,
    seatsForInternational: 20,
    applicationDeadline: "June 25, 2026",
    eligibility: {
      minimumEducation: "Grade 12 / High School (Science PCB or PCM)",
      minimumGpaOrPercentage: "GPA 2.6+ (or 60% Aggregate)",
      requiredSubjects: ["Physics", "Chemistry", "Biology or Mathematics"],
      nepalEquivalenceNote:
        "Pharmacy Council of India (PCI) approved; recognized globally for postgraduate pharmaceutical research and national pharmacy council licensure.",
    },
    overview:
      "Delivered at Manipal College of Pharmaceutical Sciences (MCOPS), ranked #9 in India for Pharmacy by NIRF with advanced formulation labs.",
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
    shortTitle: "Bachelor of Business Administration",
    highlightSubTitle: "(FinTech & Analytics)",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
    primaryTag: "FinTech & Analytics",
    hudBadges: ["BBA", "FIN"],
    stream: "Management & Business",
    degree: "BBA",
    durationYears: 3,
    annualFeeINR: 145000,
    totalFeeINR: 435000,
    seatsForInternational: 50,
    applicationDeadline: "August 15, 2026",
    eligibility: {
      minimumEducation: "Grade 12 / High School (Any Stream: Commerce, Science, Humanities)",
      minimumGpaOrPercentage: "GPA 2.0+ (or 50% Aggregate)",
      requiredSubjects: ["English"],
      nepalEquivalenceNote:
        "Open to international students from any recognized high school board (A-Levels, IB, WAEC, CBSE, NEB) with passing marks in English. WES verified.",
    },
    overview:
      "Modern business degree fusing corporate management, business analytics, digital banking, and financial technology tools like Python and Tableau.",
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
    shortTitle: "Bachelor of Computer Applications",
    highlightSubTitle: "(Cloud & Cyber Security)",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
    primaryTag: "Cloud & Cyber Security",
    hudBadges: ["AWS", "SEC"],
    stream: "Computer Applications & IT",
    degree: "BCA",
    durationYears: 3,
    annualFeeINR: 135000,
    totalFeeINR: 405000,
    seatsForInternational: 60,
    applicationDeadline: "August 10, 2026",
    eligibility: {
      minimumEducation: "Grade 12 / High School (Any Stream)",
      minimumGpaOrPercentage: "GPA 2.0+ (or 50% Aggregate)",
      requiredSubjects: ["Mathematics, Computer Science, or Business Math preferred"],
      nepalEquivalenceNote:
        "Accessible for international high school graduates from Science, Commerce, or Arts streams. Includes industry cloud certifications.",
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
    shortTitle: "Civil & Structural Engineering",
    highlightSubTitle: "(Infrastructure Planning)",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85",
    primaryTag: "Smart Infrastructure",
    hudBadges: ["CAD", "BIM"],
    stream: "Engineering & Technology",
    degree: "B.Tech",
    durationYears: 4,
    annualFeeINR: 245000,
    totalFeeINR: 980000,
    seatsForInternational: 25,
    applicationDeadline: "July 15, 2026",
    eligibility: {
      minimumEducation: "Grade 12 / High School (Science PCM Stream)",
      minimumGpaOrPercentage: "GPA 2.4+ (or 55% in PCM)",
      requiredSubjects: ["Physics", "Chemistry", "Mathematics"],
      nepalEquivalenceNote:
        "IET (UK) & Washington Accord accredited engineering degree, recognized for global professional engineering registration.",
    },
    overview:
      "World-class laboratories in structural analysis, earthquake engineering, and sustainable urban infrastructure with extensive field exposure.",
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
    shortTitle: "Electronics & Communication",
    highlightSubTitle: "(VLSI, 5G & Embedded IoT)",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
    primaryTag: "VLSI & 5G Systems",
    hudBadges: ["IoT", "VLSI"],
    stream: "Engineering & Technology",
    degree: "B.Tech",
    durationYears: 4,
    annualFeeINR: 260000,
    totalFeeINR: 1040000,
    seatsForInternational: 35,
    applicationDeadline: "July 10, 2026",
    eligibility: {
      minimumEducation: "Grade 12 / High School (Science PCM Stream)",
      minimumGpaOrPercentage: "GPA 2.4+ (or 60% in PCM)",
      requiredSubjects: ["Physics", "Chemistry", "Mathematics"],
      nepalEquivalenceNote:
        "ABET (USA) & NBA accredited program eligible for global graduate engineering fellowships and professional council licensure.",
    },
    overview:
      "Specialized coursework in embedded systems, IoT architecture, VLSI semiconductor circuit design, and wireless 5G communications.",
    careerProspects: [
      "VLSI Design Engineer",
      "Embedded Systems Developer",
      "Telecommunications Specialist",
      "Robotics Hardware Engineer",
    ],
    isPopular: false,
  },
  {
    id: "course-9",
    universityId: "univ-3",
    universityName: "Manipal Academy of Higher Education (MAHE)",
    universitySlug: "manipal-academy-of-higher-education",
    name: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
    shortTitle: "Medicine & Surgery (MBBS)",
    highlightSubTitle: "(WHO & USMLE Listed Clinicals)",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=85",
    primaryTag: "WHO / WDOMS Listed",
    hudBadges: ["MBBS", "MD"],
    stream: "Medical & Allied Health",
    degree: "MBBS",
    durationYears: 5,
    annualFeeINR: 1450000,
    totalFeeINR: 7250000,
    seatsForInternational: 35,
    applicationDeadline: "June 15, 2026",
    eligibility: {
      minimumEducation: "Grade 12 / High School (Biology PCB Stream + NEET Qualification)",
      minimumGpaOrPercentage: "GPA 3.0+ (or 65% in PCB)",
      requiredSubjects: ["Physics", "Chemistry", "Biology", "English"],
      nepalEquivalenceNote:
        "Listed in WHO World Directory of Medical Schools (WDOMS). Recognized for USMLE (USA), PLAB/UKMLA (UK), AMC (Australia), and NMC licensing.",
    },
    overview:
      "Delivered at Kasturba Medical College (KMC Manipal), consistently ranked among India's Top 10 medical colleges with 2,000+ teaching hospital beds.",
    careerProspects: [
      "Licensed Medical Physician / Surgeon",
      "USMLE / UKMLA International Resident",
      "Clinical Medical Researcher",
      "Hospital Specialist Consultant",
    ],
    isPopular: true,
  },
  {
    id: "course-10",
    universityId: "univ-7",
    universityName: "Lovely Professional University (LPU)",
    universitySlug: "lovely-professional-university-lpu",
    name: "B.Tech in Artificial Intelligence & Data Science",
    shortTitle: "Artificial Intelligence & Data Science",
    highlightSubTitle: "(Generative AI & Big Data)",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=85",
    primaryTag: "GenAI & Data Science",
    hudBadges: ["GenAI", "ML"],
    stream: "Engineering & Technology",
    degree: "B.Tech",
    durationYears: 4,
    annualFeeINR: 195000,
    totalFeeINR: 780000,
    seatsForInternational: 60,
    applicationDeadline: "August 05, 2026",
    eligibility: {
      minimumEducation: "Grade 12 / High School (A-Levels, IB, CBSE, WAEC, NEB — Science)",
      minimumGpaOrPercentage: "GPA 2.4+ (or 60% in PCM)",
      requiredSubjects: ["Physics", "Mathematics", "Chemistry or Computer Science"],
      nepalEquivalenceNote:
        "Direct admission on Grade 12 transcript with up to 50% International Merit Scholarship waiver. Industry co-developed with Google Cloud & Intel.",
    },
    overview:
      "Industry-integrated engineering program covering Generative AI, Big Data Engineering, MLOps, and Distributed Cloud Systems with capstone internships.",
    careerProspects: [
      "Generative AI Engineer",
      "Lead Data Scientist",
      "Machine Learning Architect",
      "Business Intelligence Lead",
    ],
    isPopular: true,
  },
  {
    id: "course-11",
    universityId: "univ-8",
    universityName: "Amity University",
    universitySlug: "amity-university-noida",
    name: "Master of Business Administration (MBA - Global Business & Finance)",
    shortTitle: "Master of Business Administration",
    highlightSubTitle: "(Global Business & Finance)",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
    primaryTag: "Global MBA",
    hudBadges: ["MBA", "GLB"],
    stream: "Management & Business",
    degree: "MBA",
    durationYears: 2,
    annualFeeINR: 340000,
    totalFeeINR: 680000,
    seatsForInternational: 40,
    applicationDeadline: "July 25, 2026",
    eligibility: {
      minimumEducation: "Bachelor's Degree (3 or 4 Years from any accredited university)",
      minimumGpaOrPercentage: "GPA 2.5+ (or 55% Aggregate in Undergraduate)",
      requiredSubjects: ["Any Undergraduate Discipline", "English Proficiency"],
      nepalEquivalenceNote:
        "WASC (USA) & QAA (UK) accredited postgraduate degree. Direct interview-based admission for international graduates without CAT/GMAT requirement.",
    },
    overview:
      "Executive-grade two-year MBA in Delhi-NCR featuring Harvard Business Publishing case studies, global trade simulations, and corporate residencies.",
    careerProspects: [
      "Management Consultant",
      "Investment Banking Associate",
      "Global Supply Chain Director",
      "Product & Strategy Lead",
    ],
    isPopular: true,
  },
  {
    id: "course-12",
    universityId: "univ-9",
    universityName: "JAIN (Deemed-to-be University)",
    universitySlug: "jain-deemed-to-be-university-bangalore",
    name: "Master of Computer Applications (MCA - Cloud & Full-Stack Engineering)",
    shortTitle: "Master of Computer Applications",
    highlightSubTitle: "(Cloud & Full-Stack Engineering)",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=85",
    primaryTag: "Full-Stack & Cloud",
    hudBadges: ["MCA", "DEV"],
    stream: "Computer Applications & IT",
    degree: "MCA",
    durationYears: 2,
    annualFeeINR: 180000,
    totalFeeINR: 360000,
    seatsForInternational: 45,
    applicationDeadline: "August 12, 2026",
    eligibility: {
      minimumEducation: "BCA / B.Sc (CS/IT) / B.Tech or Bachelor's with Mathematics",
      minimumGpaOrPercentage: "GPA 2.2+ (or 50% Aggregate in Undergraduate)",
      requiredSubjects: ["Computer Science, IT, or Mathematics at UG or Grade 12 level"],
      nepalEquivalenceNote:
        "Located in Bengaluru's Silicon Valley tech corridor with direct Fortune 500 R&D internship pipelines and AWS/IBM professional certification tracks.",
    },
    overview:
      "Advanced two-year postgraduate computing degree in Bengaluru focused on microservices, Kubernetes, DevSecOps, and enterprise software architecture.",
    careerProspects: [
      "Senior Full-Stack Engineer",
      "DevOps & Site Reliability Engineer",
      "Enterprise Cloud Architect",
      "Software Engineering Lead",
    ],
    isPopular: false,
  },
];
