"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import indiaMapData from "@svg-maps/india";
import {
  Search,
  ArrowRight,
  Plus,
  Minus,
  RotateCcw,
  Navigation,
  Sparkles,
  Landmark,
  Building2,
  MapPin,
  Award,
  Compass,
  GraduationCap,
} from "lucide-react";

type RegionZone =
  | "All India"
  | "North"
  | "South"
  | "West"
  | "East"
  | "Central"
  | "North-East";

interface StateMetadata {
  id: string;
  name: string;
  filterKey: string;
  zone: Exclude<RegionZone, "All India">;
  badge: string;
  categoryLabel: string;
  description: string;
  institutesCount: string;
  keyHubs: string;
  baseFill: string;
  cx: number;
  cy: number;
}

const STATE_METADATA_BY_ID: Record<string, StateMetadata> = {
  up: {
    id: "up",
    name: "Uttar Pradesh",
    filterKey: "Uttar Pradesh (Delhi-NCR)",
    zone: "North",
    badge: "Diverse Universities",
    categoryLabel: "MAJOR EDUCATION CENTER",
    description:
      "Top central & private institutions (Sharda University, Amity, BHU, AMU, IIT Kanpur, IIM Lucknow) and multidisciplinary programs.",
    institutesCount: "65+ Partner Institutes",
    keyHubs: "Greater Noida • Noida • Lucknow • Varanasi",
    baseFill: "#6ee7b7",
    cx: 269,
    cy: 245,
  },
  dl: {
    id: "dl",
    name: "Delhi",
    filterKey: "Uttar Pradesh (Delhi-NCR)",
    zone: "North",
    badge: "National Capital Hub",
    categoryLabel: "CAPITAL EDUCATION & DIPLOMATIC CENTER",
    description:
      "India's capital hosting IIT Delhi, AIIMS, Delhi University, JNU, Jamia Millia Islamia, and international diplomatic missions.",
    institutesCount: "45+ Partner Institutes",
    keyHubs: "New Delhi • South Delhi • Rohini",
    baseFill: "#34d399",
    cx: 186,
    cy: 210,
  },
  pb: {
    id: "pb",
    name: "Punjab",
    filterKey: "Punjab (Chandigarh Region)",
    zone: "North",
    badge: "Mega Global Campuses",
    categoryLabel: "PREMIER INTERNATIONAL HUB",
    description:
      "Major global student destination hosting Chandigarh University, LPU, IIT Ropar, ISB Mohali, and NIPER.",
    institutesCount: "35+ Partner Institutes",
    keyHubs: "Mohali • Jalandhar • Amritsar • Patiala",
    baseFill: "#6ee7b7",
    cx: 151,
    cy: 152,
  },
  ch: {
    id: "ch",
    name: "Chandigarh",
    filterKey: "Punjab (Chandigarh Region)",
    zone: "North",
    badge: "Planned Smart City",
    categoryLabel: "NORTH INDIA UNIVERSITY CAPITAL",
    description:
      "India's premier planned academic city featuring Panjab University, PEC, PGIMER, and Chandigarh University nearby.",
    institutesCount: "22+ Partner Institutes",
    keyHubs: "Chandigarh Sector 14 • Mohali Tri-City",
    baseFill: "#34d399",
    cx: 179,
    cy: 160,
  },
  hr: {
    id: "hr",
    name: "Haryana",
    filterKey: "Haryana",
    zone: "North",
    badge: "Corporate & Tech NCR",
    categoryLabel: "FORTUNE 500 & ACADEMIC CORRIDOR",
    description:
      "Features Ashoka University, O.P. Jindal Global University, NIT Kurukshetra, IIM Rohtak, and Gurugram corporate hubs.",
    institutesCount: "28+ Partner Institutes",
    keyHubs: "Sonipat • Gurugram • Kurukshetra • Faridabad",
    baseFill: "#a7f3d0",
    cx: 164,
    cy: 195,
  },
  ut: {
    id: "ut",
    name: "Uttarakhand",
    filterKey: "Uttarakhand",
    zone: "North",
    badge: "STEM & Research",
    categoryLabel: "INNOVATION & TECHNICAL HUB",
    description:
      "Home to Asia's oldest engineering institution IIT Roorkee, AIIMS Rishikesh, UPES, and Graphic Era University.",
    institutesCount: "24+ Partner Institutes",
    keyHubs: "Roorkee • Dehradun • Pantnagar",
    baseFill: "#a7f3d0",
    cx: 232,
    cy: 175,
  },
  hp: {
    id: "hp",
    name: "Himachal Pradesh",
    filterKey: "Himachal Pradesh",
    zone: "North",
    badge: "IIT & Hill Campuses",
    categoryLabel: "HIMALAYAN RESEARCH HUB",
    description:
      "Renowned for IIT Mandi, IIM Sirmaur, NIT Hamirpur, Shoolini University, and serene residential campuses.",
    institutesCount: "18+ Partner Institutes",
    keyHubs: "Shimla • Mandi • Solan • Dharamshala",
    baseFill: "#d1fae5",
    cx: 191,
    cy: 133,
  },
  jk: {
    id: "jk",
    name: "Jammu & Kashmir",
    filterKey: "Jammu & Kashmir",
    zone: "North",
    badge: "NIT & Central Hubs",
    categoryLabel: "NORTHERN ACADEMIC HUB",
    description:
      "Home to IIT Jammu, NIT Srinagar, AIIMS Vijaypur, IIM Jammu, and premier central research universities.",
    institutesCount: "14+ Partner Institutes",
    keyHubs: "Srinagar • Jammu",
    baseFill: "#86efac",
    cx: 173,
    cy: 85,
  },
  ka: {
    id: "ka",
    name: "Karnataka",
    filterKey: "Karnataka",
    zone: "South",
    badge: "Silicon Valley of India",
    categoryLabel: "GLOBAL TECH, MEDICAL & R&D CAPITAL",
    description:
      "Home to IISc Bangalore, MAHE Manipal, IIM Bangalore, NITK Surathkal, Christ University, and JAIN University.",
    institutesCount: "85+ Partner Institutes",
    keyHubs: "Bengaluru • Manipal • Mysuru • Mangaluru",
    baseFill: "#6ee7b7",
    cx: 171,
    cy: 519,
  },
  tn: {
    id: "tn",
    name: "Tamil Nadu",
    filterKey: "Tamil Nadu",
    zone: "South",
    badge: "Highest NIRF Ranked",
    categoryLabel: "PREMIER ENGINEERING & HEALTHCARE HUB",
    description:
      "India's #1 state by NIRF rankings featuring IIT Madras, VIT Vellore, SRM, Anna University, CMC Vellore, and NIT Trichy.",
    institutesCount: "90+ Partner Institutes",
    keyHubs: "Chennai • Vellore • Coimbatore • Tiruchirappalli",
    baseFill: "#86efac",
    cx: 211,
    cy: 609,
  },
  tg: {
    id: "tg",
    name: "Telangana",
    filterKey: "Telangana",
    zone: "South",
    badge: "AI, Pharma & IT Capital",
    categoryLabel: "CYBERABAD TECH & LIFE SCIENCES HUB",
    description:
      "Hosts IIT Hyderabad, IIIT Hyderabad, ISB, BITS Pilani Hyderabad, University of Hyderabad, and NIPER.",
    institutesCount: "48+ Partner Institutes",
    keyHubs: "Hyderabad • Warangal",
    baseFill: "#a7f3d0",
    cx: 237,
    cy: 457,
  },
  ap: {
    id: "ap",
    name: "Andhra Pradesh",
    filterKey: "Andhra Pradesh",
    zone: "South",
    badge: "Emerging Coastal Hub",
    categoryLabel: "COASTAL TECH & CENTRAL INSTITUTES",
    description:
      "Home to IIT Tirupati, IIM Visakhapatnam, NIT Andhra, GITAM, SRM AP, and Andhra University.",
    institutesCount: "36+ Partner Institutes",
    keyHubs: "Visakhapatnam • Vijayawada • Tirupati • Guntur",
    baseFill: "#d1fae5",
    cx: 235,
    cy: 521,
  },
  kl: {
    id: "kl",
    name: "Kerala",
    filterKey: "Kerala",
    zone: "South",
    badge: "100% Literacy & Research",
    categoryLabel: "TROPICAL SCIENCE & MEDICAL EXCELLENCE",
    description:
      "Renowned for IIM Kozhikode, NIT Calicut, IIT Palakkad, IISER TVM, CUSAT, and Amrita Vishwa Vidyapeetham.",
    institutesCount: "32+ Partner Institutes",
    keyHubs: "Kochi • Thiruvananthapuram • Kozhikode",
    baseFill: "#a7f3d0",
    cx: 166,
    cy: 615,
  },
  py: {
    id: "py",
    name: "Puducherry (Pondicherry)",
    filterKey: "Tamil Nadu",
    zone: "South",
    badge: "JIPMER & Central Uni",
    categoryLabel: "COASTAL MEDICAL & RESEARCH ENCLAVE",
    description:
      "Features JIPMER (Institution of National Importance), Pondicherry Central University, and NIT Karaikal.",
    institutesCount: "10+ Partner Institutes",
    keyHubs: "Puducherry • Karaikal",
    baseFill: "#34d399",
    cx: 252,
    cy: 575,
  },
  mh: {
    id: "mh",
    name: "Maharashtra",
    filterKey: "Maharashtra",
    zone: "West",
    badge: "Financial & Edu Hub",
    categoryLabel: "OXFORD OF THE EAST & FINANCIAL CAPITAL",
    description:
      "Hosts IIT Bombay, Symbiosis (SIU) Pune, TISS, ICT Mumbai, NMIMS, Savitribai Phule Pune University, and VNIT Nagpur.",
    institutesCount: "75+ Partner Institutes",
    keyHubs: "Mumbai • Pune • Nagpur • Nashik",
    baseFill: "#86efac",
    cx: 180,
    cy: 435,
  },
  gj: {
    id: "gj",
    name: "Gujarat",
    filterKey: "Gujarat",
    zone: "West",
    badge: "Business & Design",
    categoryLabel: "INDUSTRIAL & MANAGEMENT POWERHOUSE",
    description:
      "Home to IIM Ahmedabad, IIT Gandhinagar, NID, Nirma University, PDEU, and GIFT City FinTech universities.",
    institutesCount: "40+ Partner Institutes",
    keyHubs: "Ahmedabad • Gandhinagar • Vadodara • Surat",
    baseFill: "#a7f3d0",
    cx: 95,
    cy: 345,
  },
  rj: {
    id: "rj",
    name: "Rajasthan",
    filterKey: "Rajasthan",
    zone: "West",
    badge: "BITS & IIT Campuses",
    categoryLabel: "ROYAL HERITAGE & STEM HUB",
    description:
      "Hosts BITS Pilani, IIT Jodhpur, IIM Udaipur, MNIT Jaipur, Manipal Jaipur, and vibrant residential campuses.",
    institutesCount: "38+ Partner Institutes",
    keyHubs: "Jaipur • Pilani • Jodhpur • Udaipur",
    baseFill: "#d1fae5",
    cx: 138,
    cy: 249,
  },
  ga: {
    id: "ga",
    name: "Goa",
    filterKey: "Goa",
    zone: "West",
    badge: "BITS Goa & IIT Goa",
    categoryLabel: "COASTAL INNOVATION & HOSPITALITY HUB",
    description:
      "Home to BITS Pilani Goa Campus, IIT Goa, NIT Goa, Goa Institute of Management (GIM), and NIO.",
    institutesCount: "9+ Partner Institutes",
    keyHubs: "Panaji • Vasco da Gama • Ponda",
    baseFill: "#34d399",
    cx: 122,
    cy: 512,
  },
  dn: {
    id: "dn",
    name: "Dadra & Nagar Haveli",
    filterKey: "Gujarat",
    zone: "West",
    badge: "NAMO Medical & Tech",
    categoryLabel: "WESTERN UNION TERRITORY HUB",
    description:
      "Emerging coastal and industrial academic center connected with Gujarat and Mumbai metropolitan corridors.",
    institutesCount: "4+ Partner Institutes",
    keyHubs: "Silvassa",
    baseFill: "#34d399",
    cx: 102,
    cy: 405,
  },
  dd: {
    id: "dd",
    name: "Daman & Diu",
    filterKey: "Gujarat",
    zone: "West",
    badge: "Coastal Campus Hub",
    categoryLabel: "ARABIAN SEA ACADEMIC ENCLAVE",
    description:
      "Coastal Union Territory offering technical, marine, and undergraduate professional institutions.",
    institutesCount: "4+ Partner Institutes",
    keyHubs: "Daman • Diu",
    baseFill: "#34d399",
    cx: 74,
    cy: 391,
  },
  mp: {
    id: "mp",
    name: "Madhya Pradesh",
    filterKey: "Madhya Pradesh",
    zone: "Central",
    badge: "IIT & IIM Dual Hub",
    categoryLabel: "CENTRAL INDIA ACADEMIC CORRIDOR",
    description:
      "Features Indore (the only city with both IIT Indore and IIM Indore) alongside IISER Bhopal, SPA, and MANIT Bhopal.",
    institutesCount: "30+ Partner Institutes",
    keyHubs: "Indore • Bhopal • Gwalior • Jabalpur",
    baseFill: "#a7f3d0",
    cx: 225,
    cy: 325,
  },
  ct: {
    id: "ct",
    name: "Chhattisgarh",
    filterKey: "Chhattisgarh",
    zone: "Central",
    badge: "IIT, IIM & AIIMS Raipur",
    categoryLabel: "EMERGING CENTRAL RESEARCH CAPITAL",
    description:
      "Naya Raipur hosts IIT Bhilai, IIM Raipur, AIIMS Raipur, NIT Raipur, and Hidayatullah National Law University.",
    institutesCount: "15+ Partner Institutes",
    keyHubs: "Raipur • Bhilai • Bilaspur",
    baseFill: "#d1fae5",
    cx: 296,
    cy: 388,
  },
  wb: {
    id: "wb",
    name: "West Bengal",
    filterKey: "West Bengal",
    zone: "East",
    badge: "IIT Kharagpur & Jadavpur",
    categoryLabel: "EASTERN INTELLECTUAL & RESEARCH CAPITAL",
    description:
      "Hosts IIT Kharagpur, IIM Calcutta, Jadavpur University, ISI Kolkata, IIEST Shibpur, and NIT Durgapur.",
    institutesCount: "42+ Partner Institutes",
    keyHubs: "Kolkata • Kharagpur • Durgapur • Siliguri",
    baseFill: "#6ee7b7",
    cx: 412,
    cy: 335,
  },
  or: {
    id: "or",
    name: "Odisha",
    filterKey: "Odisha",
    zone: "East",
    badge: "Smart City Education Hub",
    categoryLabel: "EAST COAST EDUCATION CAPITAL",
    description:
      "Bhubaneswar-Cuttack corridor hosting IIT Bhubaneswar, NIT Rourkela, KIIT University, SOA, XIM, and AIIMS.",
    institutesCount: "34+ Partner Institutes",
    keyHubs: "Bhubaneswar • Rourkela • Cuttack",
    baseFill: "#86efac",
    cx: 340,
    cy: 405,
  },
  br: {
    id: "br",
    name: "Bihar",
    filterKey: "Bihar",
    zone: "East",
    badge: "Nalanda & IIT Patna",
    categoryLabel: "HISTORIC & MODERN SCHOLARSHIP HUB",
    description:
      "Features Nalanda International University, IIT Patna, IIM Bodh Gaya, NIT Patna, and AIIMS Patna.",
    institutesCount: "16+ Partner Institutes",
    keyHubs: "Patna • Rajgir • Bodh Gaya",
    baseFill: "#a7f3d0",
    cx: 377,
    cy: 274,
  },
  jh: {
    id: "jh",
    name: "Jharkhand",
    filterKey: "Jharkhand",
    zone: "East",
    badge: "IIT-ISM & XLRI",
    categoryLabel: "MINING, ENGINEERING & MANAGEMENT",
    description:
      "Home to IIT (ISM) Dhanbad, XLRI Jamshedpur, BIT Mesra, IIM Ranchi, and NIT Jamshedpur.",
    institutesCount: "18+ Partner Institutes",
    keyHubs: "Ranchi • Jamshedpur • Dhanbad",
    baseFill: "#d1fae5",
    cx: 355,
    cy: 325,
  },
  as: {
    id: "as",
    name: "Assam",
    filterKey: "Assam",
    zone: "North-East",
    badge: "IIT Guwahati & Central Unis",
    categoryLabel: "ASEAN GATEWAY & GREEN RESEARCH HUB",
    description:
      "Premier North-Eastern hub featuring IIT Guwahati, NIT Silchar, Tezpur University, and AIIMS Guwahati.",
    institutesCount: "22+ Partner Institutes",
    keyHubs: "Guwahati • Silchar • Tezpur • Jorhat",
    baseFill: "#86efac",
    cx: 505,
    cy: 268,
  },
  ml: {
    id: "ml",
    name: "Meghalaya",
    filterKey: "Assam",
    zone: "North-East",
    badge: "IIM Shillong & NEHU",
    categoryLabel: "SCOTLAND OF THE EAST EDUCATION HUB",
    description:
      "Home to IIM Shillong, North-Eastern Hill University (NEHU), NIT Meghalaya, and NIFT Shillong.",
    institutesCount: "8+ Partner Institutes",
    keyHubs: "Shillong",
    baseFill: "#d1fae5",
    cx: 484,
    cy: 283,
  },
  sk: {
    id: "sk",
    name: "Sikkim",
    filterKey: "West Bengal",
    zone: "North-East",
    badge: "Sikkim Manipal & NIT",
    categoryLabel: "HIMALAYAN BIO & MEDICAL HUB",
    description:
      "Features Sikkim Manipal Institute of Technology (SMIT), Sikkim Central University, and NIT Sikkim.",
    institutesCount: "6+ Partner Institutes",
    keyHubs: "Gangtok • Majitar",
    baseFill: "#a7f3d0",
    cx: 425,
    cy: 235,
  },
  ar: {
    id: "ar",
    name: "Arunachal Pradesh",
    filterKey: "Assam",
    zone: "North-East",
    badge: "NIT Yupia & RGU",
    categoryLabel: "EASTERN HIMALAYAN UNIVERSITY HUB",
    description:
      "Home to Rajiv Gandhi Central University, NIT Arunachal Pradesh, and NERIST.",
    institutesCount: "6+ Partner Institutes",
    keyHubs: "Itanagar • Yupia",
    baseFill: "#a7f3d0",
    cx: 535,
    cy: 218,
  },
  mn: {
    id: "mn",
    name: "Manipur",
    filterKey: "Assam",
    zone: "North-East",
    badge: "IIIT & NIT Imphal",
    categoryLabel: "NORTH-EAST SPORTS & RESEARCH HUB",
    description:
      "Hosts Manipur Central University, NIT Manipur, IIIT Manipur, and National Sports University.",
    institutesCount: "6+ Partner Institutes",
    keyHubs: "Imphal",
    baseFill: "#a7f3d0",
    cx: 537,
    cy: 301,
  },
  mz: {
    id: "mz",
    name: "Mizoram",
    filterKey: "Assam",
    zone: "North-East",
    badge: "Mizoram Central Uni",
    categoryLabel: "HIGH-LITERACY GREEN CAMPUS HUB",
    description:
      "Home to Mizoram University (Central University), NIT Mizoram, and IIMC Aizawl.",
    institutesCount: "5+ Partner Institutes",
    keyHubs: "Aizawl",
    baseFill: "#d1fae5",
    cx: 516,
    cy: 337,
  },
  nl: {
    id: "nl",
    name: "Nagaland",
    filterKey: "Assam",
    zone: "North-East",
    badge: "Nagaland Central Uni",
    categoryLabel: "HILLS RESEARCH & AGRI HUB",
    description:
      "Hosts Nagaland Central University and NIT Nagaland in Dimapur/Kohima.",
    institutesCount: "5+ Partner Institutes",
    keyHubs: "Kohima • Dimapur",
    baseFill: "#6ee7b7",
    cx: 546,
    cy: 270,
  },
  tr: {
    id: "tr",
    name: "Tripura",
    filterKey: "Assam",
    zone: "North-East",
    badge: "NIT Agartala & Central Uni",
    categoryLabel: "INDO-BANGLA CORRIDOR ACADEMIC HUB",
    description:
      "Renowned for NIT Agartala, Tripura Central University, and ICFAI Tripura.",
    institutesCount: "7+ Partner Institutes",
    keyHubs: "Agartala",
    baseFill: "#6ee7b7",
    cx: 495,
    cy: 315,
  },
  an: {
    id: "an",
    name: "Andaman & Nicobar",
    filterKey: "Tamil Nadu",
    zone: "South",
    badge: "Marine & Ocean Biology",
    categoryLabel: "ISLAND ECOLOGY & MEDICAL CENTER",
    description:
      "Specializes in deep-sea marine biology, oceanography, and Andaman & Nicobar Islands Institute of Medical Sciences.",
    institutesCount: "4+ Partner Institutes",
    keyHubs: "Port Blair",
    baseFill: "#6ee7b7",
    cx: 520,
    cy: 585,
  },
  ld: {
    id: "ld",
    name: "Lakshadweep",
    filterKey: "Kerala",
    zone: "South",
    badge: "Coral & Marine Sciences",
    categoryLabel: "ARABIAN SEA MARINE RESEARCH",
    description:
      "Calicut & Pondicherry University satellite centers focusing on coral reef ecology and sustainable aquaculture.",
    institutesCount: "3+ Partner Institutes",
    keyHubs: "Kavaratti",
    baseFill: "#6ee7b7",
    cx: 99,
    cy: 600,
  },
};

/**
 * Normalizes multi-subpath SVG paths into valid absolute-moveto (`M x,y l ... z`) paths
 * and filters out micro-enclave / 1px coastal dust speckles.
 */
function getCleanSubpaths(id: string, rawPath: string): string {
  const rawSubpaths = rawPath
    .trim()
    .split(/z\s*/i)
    .filter(Boolean);
  if (rawSubpaths.length <= 1) return rawPath;

  let sx = 0;
  let sy = 0;
  const parsed: { len: number; path: string }[] = [];

  rawSubpaths.forEach((sp, idx) => {
    const tokens = sp.trim().match(/[a-zA-Z]|-?\d*\.?\d+(?:e-?\d+)?/g);
    if (!tokens || tokens.length < 3) return;
    const cmd = tokens[0];
    const dx = parseFloat(tokens[1]);
    const dy = parseFloat(tokens[2]);
    if (idx === 0 || cmd === "M") {
      sx = dx;
      sy = dy;
    } else {
      sx += dx;
      sy += dy;
    }
    const rest = sp
      .trim()
      .replace(
        /^[mM]\s*-?\d*\.?\d+(?:e-?\d+)?[,\s]+-?\d*\.?\d+(?:e-?\d+)?/,
        ""
      );
    parsed.push({
      len: sp.length,
      path: `M ${sx.toFixed(3)},${sy.toFixed(3)} l ${rest.trim()} z`,
    });
  });

  if (parsed.length === 0) return rawPath;
  if (id === "an") {
    return parsed
      .filter((p) => p.len > 220)
      .map((p) => p.path)
      .join(" ");
  }
  if (id === "ld" || id === "py") {
    return parsed
      .sort((a, b) => b.len - a.len)
      .slice(0, 2)
      .map((p) => p.path)
      .join(" ");
  }
  return parsed.sort((a, b) => b.len - a.len)[0].path;
}

export function PopularLocationsMap() {
  const router = useRouter();
  const [selectedStateId, setSelectedStateId] = useState<string>("up");
  const [hoveredMapStateId, setHoveredMapStateId] = useState<string | null>(
    null
  );
  const [activeZone, setActiveZone] = useState<RegionZone>("All India");
  const [stateSearch, setStateSearch] = useState<string>("");
  const [zoom, setZoom] = useState<number>(1);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  const handleStateMouseEnter = (id: string) => {
    setHoveredMapStateId(id);
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setSelectedStateId(id);
    }, 95);
  };

  const handleStateMouseLeave = () => {
    setHoveredMapStateId(null);
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  // Merge @svg-maps/india authentic paths with our rich educational metadata
  const mapLocations = useMemo(() => {
    return indiaMapData.locations.map((loc) => {
      const meta = STATE_METADATA_BY_ID[loc.id] || {
        id: loc.id,
        name: loc.name,
        filterKey: loc.name,
        zone: "North" as const,
        badge: "Accredited Campuses",
        categoryLabel: "MAJOR EDUCATION CENTER",
        description: `Explore top NIRF and NAAC accredited universities and institutes in ${loc.name}.`,
        institutesCount: "10+ Partner Institutes",
        keyHubs: loc.name,
        baseFill: "#a7f3d0",
        cx: 269,
        cy: 245,
      };
      return {
        ...meta,
        svgPath: getCleanSubpaths(loc.id, loc.path),
      };
    });
  }, []);

  const selectedState = useMemo(() => {
    return (
      mapLocations.find((s) => s.id === selectedStateId) || mapLocations[0]
    );
  }, [mapLocations, selectedStateId]);

  // Top destinations ordered precisely as requested for international admissions
  const filteredDestinations = useMemo(() => {
    const TOP_DESTINATION_IDS = [
      "up", // Uttar Pradesh
      "ut", // Uttarakhand
      "tn", // Tamil Nadu
      "kl", // Kerala
      "dl", // Delhi
      "mh", // Maharashtra
      "ap", // Andhra Pradesh
      "pb", // Punjab
      "mp", // Madhya Pradesh
      "ka", // Karnataka
      "hp", // Himachal Pradesh
      "hr", // Haryana
      "rj", // Rajasthan
      "or", // Odisha
      "wb", // West Bengal
      "tg", // Telangana
      "ga", // Goa
      "gj", // Gujarat
      "ch", // Chandigarh
    ];

    // If searching, search across all locations
    if (stateSearch.trim() !== "") {
      const q = stateSearch.toLowerCase();
      return mapLocations.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.keyHubs.toLowerCase().includes(q)
      );
    }

    // Top 19 destinations in exact specified order
    const topDestinations = TOP_DESTINATION_IDS
      .map((id) => mapLocations.find((loc) => loc.id === id))
      .filter((item): item is NonNullable<typeof item> => Boolean(item));

    if (activeZone === "All India") {
      return topDestinations;
    }

    return topDestinations.filter((item) => item.zone === activeZone);
  }, [mapLocations, activeZone, stateSearch]);

  const zones: RegionZone[] = [
    "All India",
    "North",
    "South",
    "West",
    "East",
    "Central",
    "North-East",
  ];

  const activeHoveredState = useMemo(() => {
    if (!hoveredMapStateId) return null;
    return mapLocations.find((s) => s.id === hoveredMapStateId) || null;
  }, [mapLocations, hoveredMapStateId]);

  // Percentage coordinates for the crisp HTML floating callout card (follows hovered state)
  const calloutTarget = activeHoveredState || selectedState;
  const calloutLeftPct = Math.min(
    Math.max((calloutTarget.cx / 612) * 100, 16),
    84
  );
  const calloutTopPct = Math.min(
    Math.max((calloutTarget.cy / 675) * 100, 14),
    88
  );

  // Mainland India locations rendered on the primary cartographic map
  // (Excludes offshore archipelagos to match Study in India official clean layout and prevent stray ocean artifacts)
  const mainlandMapLocations = useMemo(() => {
    return mapLocations.filter((st) => st.id !== "an" && st.id !== "ld");
  }, [mapLocations]);

  return (
    <section className="py-20 bg-[#fafbfc] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-extrabold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            Popular Study Locations Across India
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Explore Academic Hubs{" "}
            <span className="text-emerald-700">State by State</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Explore educational destinations across India and discover top ranked institutes in each state.
          </p>
        </div>

        {/* Main Split Grid: Interactive Map (Left 7 Cols) + Spotlight & Directory (Right 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* ── LEFT 7 COLS: Authentic Cartographic Interactive India Map Card ── */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-7 shadow-[0_12px_36px_-10px_rgba(15,23,42,0.06)] flex flex-col justify-between relative overflow-hidden">
            {/* Top Bar: Pill + Hint (Fixed single-row height) */}
            <div className="h-9 flex items-center justify-between gap-3 relative z-20 shrink-0">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Interactive India Map
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 truncate">
                <Navigation className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600 shrink-0" />
                Hover or tap a state to explore
              </span>
            </div>

            {/* Right Floating Map Zoom Controls */}
            <div className="absolute right-5 top-20 z-30 flex flex-col gap-2">
              <button
                type="button"
                onClick={() =>
                  setZoom((z) => Math.min(1.3, Number((z + 0.1).toFixed(2))))
                }
                aria-label="Zoom in map"
                className="w-9 h-9 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setZoom((z) => Math.max(0.85, Number((z - 0.1).toFixed(2))))
                }
                aria-label="Zoom out map"
                className="w-9 h-9 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setZoom(1);
                  setActiveZone("All India");
                  setSelectedStateId("up");
                }}
                aria-label="Reset map view"
                className="w-9 h-9 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Interactive Map Viewport (Strictly Fixed Height — Zero Layout Shift) */}
            <div
              onMouseLeave={handleStateMouseLeave}
              className="relative h-[460px] sm:h-[490px] flex items-center justify-center my-2 overflow-hidden bg-white shrink-0"
            >
              <div
                className="relative h-full aspect-[612/675] transition-transform duration-300 ease-out"
                style={{ transform: `scale(${zoom})` }}
              >
                <svg
                  viewBox="0 0 612 675"
                  onMouseLeave={handleStateMouseLeave}
                  className="w-full h-full select-none block"
                  role="img"
                  aria-label="Interactive cartographic map of India showing continental states and union territories"
                >
                  {/* Static DOM Order for Mainland States (Prevents DOM Remount Glitches on Hover) */}
                  <g>
                    {mainlandMapLocations.map((st) => {
                      const isSelected = selectedState.id === st.id;
                      const isHovered = hoveredMapStateId === st.id;
                      const isZoneFiltered =
                        activeZone === "All India" || st.zone === activeZone;

                      const fillColor = isSelected
                        ? "#047857"
                        : isHovered
                        ? "#10b981"
                        : isZoneFiltered
                        ? st.baseFill
                        : "#f1f5f9";

                      return (
                        <path
                          key={st.id}
                          id={`india-state-${st.id}`}
                          d={st.svgPath}
                          onMouseEnter={() => handleStateMouseEnter(st.id)}
                          onMouseLeave={handleStateMouseLeave}
                          onClick={() => {
                            if (hoverTimerRef.current) {
                              clearTimeout(hoverTimerRef.current);
                            }
                            setSelectedStateId(st.id);
                          }}
                          fill={fillColor}
                          stroke="#ffffff"
                          strokeWidth="1.15"
                          strokeLinejoin="round"
                          className="cursor-pointer outline-none focus:outline-none transition-colors duration-150"
                        />
                      );
                    })}

                    {/* Top-Layer Active State Border Overlay (Always Crisp, Zero DOM Reordering) */}
                    {selectedState.id !== "an" && selectedState.id !== "ld" && (
                      <path
                        d={selectedState.svgPath}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2.2"
                        strokeLinejoin="round"
                        className="pointer-events-none"
                      />
                    )}
                  </g>
                </svg>

                {/* Crisp HTML Floating Callout Badge — Visible ONLY when hovering over a state on the map */}
                {activeHoveredState && activeHoveredState.id !== "an" && activeHoveredState.id !== "ld" && (
                  <div
                    style={{
                      left: `${calloutLeftPct}%`,
                      top: `${calloutTopPct}%`,
                    }}
                    onMouseEnter={() => {
                      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
                      setHoveredMapStateId(activeHoveredState.id);
                    }}
                    onMouseLeave={handleStateMouseLeave}
                    className="absolute z-20 -translate-x-1/2 -translate-y-[112%] pointer-events-none transition-all duration-150 ease-out"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        router.push(
                          `/universities?state=${encodeURIComponent(
                            activeHoveredState.filterKey
                          )}`
                        )
                      }
                      className="pointer-events-auto cursor-pointer group relative bg-[#065f46] hover:bg-[#047857] p-[5px] rounded-2xl shadow-[0_10px_25px_-5px_rgba(6,78,59,0.45)] transition-colors"
                    >
                      <div className="bg-white rounded-xl px-4 py-2 text-center min-w-[148px] max-w-[195px] whitespace-nowrap">
                        <div className="text-[13px] font-extrabold text-slate-900 font-heading leading-tight truncate">
                          {activeHoveredState.name}
                        </div>
                        <div className="text-[11px] font-bold text-emerald-700 group-hover:text-emerald-800 mt-0.5 flex items-center justify-center gap-1">
                          <span>Click to explore</span>
                          <span>→</span>
                        </div>
                      </div>
                      {/* Bottom Center Pointer Triangle */}
                      <div className="w-3 h-3 bg-[#065f46] group-hover:bg-[#047857] rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 rounded-[2px] transition-colors" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Map Legend & Key Hubs (Strictly Single Line, Fixed Height — Never Wraps) */}
            <div className="h-9 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs text-slate-500 overflow-hidden whitespace-nowrap shrink-0">
              <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">
                  Selected Hub:{" "}
                  <strong className="text-slate-900">
                    {selectedState.name}
                  </strong>{" "}
                  <span className="text-slate-400">
                    ({selectedState.keyHubs})
                  </span>
                </span>
              </div>
              <span className="font-bold text-emerald-700 shrink-0">
                {selectedState.institutesCount}
              </span>
            </div>
          </div>

          {/* ── RIGHT 5 COLS: State Spotlight Card + Search + Zone Tabs + Top Destinations ── */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-[0_12px_36px_-10px_rgba(15,23,42,0.06)] flex flex-col justify-between gap-5">
            {/* 1. Top Dark-Emerald/Navy State Spotlight Card (Strictly Locked 236px Height — Zero Shift Glitch) */}
            <div className="relative h-[236px] shrink-0 rounded-2xl bg-gradient-to-br from-[#062e22] via-[#093b2c] to-[#041d17] text-white p-5 sm:p-6 border border-emerald-500/30 shadow-lg overflow-hidden flex flex-col justify-between">
              {/* Subtle top-right glow */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />

              {/* Row 1: Category Eyebrow + Badge Pill (Fixed 26px height, no wrapping) */}
              <div className="relative z-10 h-[26px] flex items-center justify-between gap-2 overflow-hidden shrink-0">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-300 truncate">
                  {selectedState.categoryLabel}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[10.5px] font-bold text-emerald-100 shrink-0 whitespace-nowrap">
                  {selectedState.badge}
                </span>
              </div>

              {/* Row 2: State Title + 2-Line Description (Fixed 82px height, no layout shift) */}
              <div className="relative z-10 h-[82px] flex flex-col justify-center shrink-0">
                <h3 className="text-2xl sm:text-[26px] font-black text-white font-heading tracking-tight leading-tight truncate">
                  {selectedState.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-emerald-100/85 leading-[20px] line-clamp-2 h-[40px] mt-1.5 overflow-hidden">
                  {selectedState.description}
                </p>
              </div>

              {/* Row 3: Full-Width CTA Button (Fixed 44px height, single-line truncate) */}
              <div className="relative z-10 h-11 shrink-0">
                <Link
                  href={`/universities?state=${encodeURIComponent(
                    selectedState.filterKey
                  )}`}
                  className="block h-full"
                >
                  <button
                    type="button"
                    className="w-full h-11 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-between gap-2 shadow-md transition-colors cursor-pointer"
                  >
                    <span className="truncate">
                      Explore Institutes in{" "}
                      <strong>{selectedState.name}</strong>
                    </span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </Link>
              </div>
            </div>

            {/* 2. Search State Input */}
            <div className="relative shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="text"
                value={stateSearch}
                onChange={(e) => setStateSearch(e.target.value)}
                placeholder="Search state or UT (e.g. Karnataka, Delhi, Punjab)..."
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
              />
            </div>

            {/* 3. Regional Zone Filter Pills */}
            <div className="flex flex-wrap gap-1.5 shrink-0">
              {zones.map((zone) => {
                const isActive = activeZone === zone;
                return (
                  <button
                    key={zone}
                    type="button"
                    onClick={() => setActiveZone(zone)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#064e3b] text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
                    }`}
                  >
                    {zone}
                  </button>
                );
              })}
            </div>

            {/* 4. Top Destinations Scrollable Grid (All 36 Official States & UTs) */}
            <div className="space-y-3 pt-1 flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between text-xs shrink-0">
                <span className="inline-flex items-center gap-1.5 font-extrabold uppercase tracking-wider text-slate-800">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Top Destinations
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  {filteredDestinations.length} Locations
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 h-[200px] overflow-y-auto pr-1 content-start">
                {filteredDestinations.map((dest, idx) => {
                  const isCurrent = selectedStateId === dest.id;
                  const PillIcon =
                    idx % 4 === 0
                      ? Landmark
                      : idx % 4 === 1
                      ? Building2
                      : idx % 4 === 2
                      ? GraduationCap
                      : Award;

                  return (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => setSelectedStateId(dest.id)}
                      className={`h-10 px-2.5 rounded-xl border text-left flex items-center gap-2 transition-colors cursor-pointer ${
                        isCurrent
                          ? "bg-emerald-50 border-emerald-500 text-emerald-950 shadow-2xs ring-1 ring-emerald-500/30"
                          : "bg-white hover:bg-emerald-50/50 border-slate-200/80 text-slate-700"
                      }`}
                    >
                      <PillIcon
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isCurrent ? "text-emerald-600" : "text-emerald-600/80"
                        }`}
                      />
                      <span className="text-xs font-bold truncate">
                        {dest.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
