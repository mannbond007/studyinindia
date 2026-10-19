export interface University {
  id: string;
  slug: string;
  name: string;
  city: string;
  state: string;
  rating: number;
  naacGrade: string;
  nirfRank?: number;
  establishedYear: number;
  campusSize: string;
  nepaliStudentCount: number;
  description: string;
  highlights: string[];
  facilities: string[];
  hostelFeePerYearINR: number;
  image: string;
  logo: string;
  isFeatured: boolean;
  scholarshipAvailable: boolean;
  contactEmail: string;
  contactPhone: string;
}

export const universitiesData: University[] = [
  {
    id: "univ-1",
    slug: "sharda-university-greater-noida",
    name: "Sharda University",
    city: "Greater Noida",
    state: "Uttar Pradesh (Delhi-NCR)",
    rating: 4.6,
    naacGrade: "A+",
    nirfRank: 87,
    establishedYear: 2009,
    campusSize: "63 Acres",
    nepaliStudentCount: 850,
    description:
      "Recognized as one of the most culturally diverse universities in India with over 2,000+ international students, including a vibrant student community from Kathmandu, Pokhara, and Biratnagar.",
    highlights: [
      "Dedicated Nepali Student Welfare Committee",
      "Special scholarship waivers up to 50% for SAARC students",
      "Direct Metro connectivity to Central Delhi",
      "900+ Multi-speciality Sharda Hospital on campus for Medical & Nursing internships",
    ],
    facilities: [
      "AC Hostels with High-Speed Wi-Fi",
      "Hygienic Mess with Vegetarian & Non-Veg options",
      "Advanced Robotics & AI Laboratories",
      "Indoor Sports Arena & Olympic-length Swimming Pool",
      "24/7 Campus Security & Medical Emergency Center",
    ],
    hostelFeePerYearINR: 110000,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=150&q=80",
    isFeatured: true,
    scholarshipAvailable: true,
    contactEmail: "international@sharda.ac.in",
    contactPhone: "+91-120-4570000",
  },
  {
    id: "univ-2",
    slug: "vellore-institute-of-technology-vit",
    name: "Vellore Institute of Technology (VIT)",
    city: "Vellore",
    state: "Tamil Nadu",
    rating: 4.8,
    naacGrade: "A++",
    nirfRank: 11,
    establishedYear: 1984,
    campusSize: "372 Acres",
    nepaliStudentCount: 420,
    description:
      "Institution of Eminence ranked among the very best technical institutions in Asia. Highly sought-after for Computer Science, AI, and Electronics Engineering.",
    highlights: [
      "NIRF Top 15 Engineering Institution across India",
      "Super Dream Placements exceeding 50+ LPA with global tech leaders",
      "Fully Flexible Credit System (FFCS) allowing students to design custom timetable",
      "ABET Accredited Engineering Programs recognized worldwide",
    ],
    facilities: [
      "Smart Air-Conditioned Auditoriums",
      "Apple Inc. authorized training centers",
      "International Guest Hostels",
      "Extensive digital research library accessible 24/7",
    ],
    hostelFeePerYearINR: 125000,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=150&q=80",
    isFeatured: true,
    scholarshipAvailable: true,
    contactEmail: "admissions@vit.ac.in",
    contactPhone: "+91-416-2202020",
  },
  {
    id: "univ-3",
    slug: "manipal-academy-of-higher-education",
    name: "Manipal Academy of Higher Education (MAHE)",
    city: "Manipal",
    state: "Karnataka",
    rating: 4.9,
    naacGrade: "A++",
    nirfRank: 6,
    establishedYear: 1953,
    campusSize: "313 Acres",
    nepaliStudentCount: 380,
    description:
      "A globally recognized institution of eminence known for world-class medical, pharmacy, dental, biotechnology, and computer engineering programs.",
    highlights: [
      "NIRF Rank #6 University in India",
      "Kasturba Medical College (KMC) recognized by Nepal Medical Council (NMC)",
      "Vibrant coastal university town with world-class student facilities",
      "Alumni network leading Fortune 500 corporations globally",
    ],
    facilities: [
      "Marena - World-Class Multi-Level Indoor Sports Complex",
      "Simulation Medical Skills Laboratory",
      "Centralized High-Tech Innovation Center",
      "Comprehensive Multi-Cuisine Dining",
    ],
    hostelFeePerYearINR: 145000,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=150&q=80",
    isFeatured: true,
    scholarshipAvailable: true,
    contactEmail: "intladm@manipal.edu",
    contactPhone: "+91-820-2922400",
  },
  {
    id: "univ-4",
    slug: "chandigarh-university-cu",
    name: "Chandigarh University",
    city: "Mohali",
    state: "Punjab (Near Chandigarh)",
    rating: 4.5,
    naacGrade: "A+",
    nirfRank: 38,
    establishedYear: 2012,
    campusSize: "200+ Acres",
    nepaliStudentCount: 1100,
    description:
      "QS Asia ranked premier university offering modern industry-integrated degrees in Computer Science, Animation, Aerospace, Business Administration, and Pharmacy.",
    highlights: [
      "Most preferred university for Nepali students in North India",
      "Direct regular bus connection between Kathmandu/Birgunj and Chandigarh",
      "9000+ placement offers with Microsoft, Amazon, IBM, and Google",
      "Up to 50% CUCET scholarship waivers for high-achieving Nepali students",
    ],
    facilities: [
      "Modern Hostel Complexes with dedicated Nepali food counters",
      "High Performance Computing Lab",
      "Automotive Center of Excellence with BMW & Honda",
      "Cricket Stadium, Gymnasiums, and Student Clubs",
    ],
    hostelFeePerYearINR: 98000,
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=150&q=80",
    isFeatured: true,
    scholarshipAvailable: true,
    contactEmail: "nepal.admissions@cumail.in",
    contactPhone: "+91-160-3051003",
  },
  {
    id: "univ-5",
    slug: "kiit-university-bhubaneswar",
    name: "KIIT Deemed to be University",
    city: "Bhubaneswar",
    state: "Odisha",
    rating: 4.7,
    naacGrade: "A++",
    nirfRank: 16,
    establishedYear: 1992,
    campusSize: "400+ Acres",
    nepaliStudentCount: 450,
    description:
      "Institution of Eminence ranked among the top 20 universities in India. Known for serene campus green spaces, KIMS super-specialty hospital, and high placement ratios.",
    highlights: [
      "NIRF #16 University in India with NAAC A++ accreditation",
      "100% placement track record for technical & management branches",
      "Dedicated international hostel with attached washrooms & AC",
      "Generous Founder's Merit Scholarships for SAARC students",
    ],
    facilities: [
      "25 Wi-Fi enabled green campus zones",
      "Central Library with 1.2 million book access",
      "Multispecialty 2000-bed KIMS Hospital",
      "Multiple International Sports Complexes",
    ],
    hostelFeePerYearINR: 105000,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=150&q=80",
    isFeatured: false,
    scholarshipAvailable: true,
    contactEmail: "international@kiit.ac.in",
    contactPhone: "+91-674-2725113",
  },
  {
    id: "univ-6",
    slug: "srm-institute-of-science-and-technology",
    name: "SRM Institute of Science and Technology",
    city: "Chennai",
    state: "Tamil Nadu",
    rating: 4.6,
    naacGrade: "A++",
    nirfRank: 18,
    establishedYear: 1985,
    campusSize: "250 Acres",
    nepaliStudentCount: 310,
    description:
      "Pioneering multi-disciplinary university near Chennai with state-of-the-art supercomputing facilities, SRM Medical College Hospital, and international exchange programs.",
    highlights: [
      "NIRF #18 overall ranking in India",
      "Over 10,000 job offers per annum with global conglomerates",
      "Active international student exchange with MIT, UC Berkeley & NTU",
      "Top-tier programs in Bio-medical, Software, and Aeronautical engineering",
    ],
    facilities: [
      "State-of-the-art Biotechnology research centers",
      "Solar-powered AC student residences",
      "Olympic-standard Sports arenas",
      "24/7 on-campus ambulance and pharmacy services",
    ],
    hostelFeePerYearINR: 120000,
    image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=150&q=80",
    isFeatured: false,
    scholarshipAvailable: true,
    contactEmail: "admissions.india@srmist.edu.in",
    contactPhone: "+91-44-27417000",
  },
];
