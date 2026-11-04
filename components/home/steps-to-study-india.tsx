"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  Ticket,
  UserCheck,
  CreditCard,
  Sparkles,
  ExternalLink,
  ChevronRight,
  X,
  Compass,
  Clock,
  ShieldCheck,
  HelpCircle,
  Send,
  Download,
  Check,
  Building,
  GraduationCap,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ─── Step Interface ─── */
interface StepItem {
  stepNumber: number;
  badge: string;
  title: string;
  description: string;
  nepalNote?: string;
  internationalNote?: string;
  iconType: "id" | "search" | "submit" | "offer" | "visa" | "frro";
  accentColor: {
    badge: string;
    iconBg: string;
    iconRing: string;
    iconGlow: string;
    iconColor: string;
  };
  details: {
    duration: string;
    keyPoints: string[];
    prerequisites: string[];
    actionLabel: string;
    actionHref: string;
    portalName: string;
  };
}

/* ─── 6 Official Steps Data ─── */
const stepsData: StepItem[] = [
  {
    stepNumber: 1,
    badge: "STEP 1",
    title: "Register & Create Student Profile",
    description: "Unified ID to track your foreign student journey in India",
    nepalNote:
      "Nepali students can use Nepali Citizenship Card or Passport to instantly generate their student tracking number.",
    internationalNote:
      "All foreign nationals must complete basic profile to generate an official Student Registration ID.",
    iconType: "id",
    accentColor: {
      badge: "text-orange-500",
      iconBg: "bg-orange-50",
      iconRing: "ring-orange-200/80",
      iconGlow: "from-orange-400/20 to-amber-300/10",
      iconColor: "text-orange-600",
    },
    details: {
      duration: "5–10 Minutes",
      keyPoints: [
        "Create an official verified student account",
        "Obtain a unique Student Registration & Application Tracking ID",
        "Track all future college applications, scholarships, and offer letters in one unified dashboard",
      ],
      prerequisites: [
        "Valid International Passport (or National ID for Nepal/Bhutan)",
        "Active email address & mobile number",
        "Recent passport-sized digital photograph",
      ],
      actionLabel: "Create Student Profile",
      actionHref: "/register",
      portalName: "International Student Admissions Portal",
    },
  },
  {
    stepNumber: 2,
    badge: "STEP 2",
    title: "Explore Courses",
    description:
      "Explore from 24000+ courses in more than 1200+ Indian Institutes",
    nepalNote:
      "Compare dual tuition fees in both Indian Rupees (INR) and Nepali Rupees (NPR) with 1:1.60 fixed peg conversion.",
    internationalNote:
      "Filter across NIRF Top 100, NAAC A++ institutions, and international scholarship eligibility.",
    iconType: "search",
    accentColor: {
      badge: "text-blue-500",
      iconBg: "bg-blue-50",
      iconRing: "ring-blue-200/80",
      iconGlow: "from-blue-400/20 to-sky-300/10",
      iconColor: "text-blue-600",
    },
    details: {
      duration: "Self-Paced / Instant Filter",
      keyPoints: [
        "Search 24,000+ undergraduate, postgraduate, and doctoral degree programs",
        "Check instant eligibility against A-Levels, IB, WAEC, CBSE, or NEB (+2) criteria",
        "Compare campus infrastructure, hostel accommodations, and verified placement stats",
      ],
      prerequisites: [
        "Academic transcripts (Grade 10 & Grade 12 / High School / A-Levels / IB / NEB)",
        "Preferred field: Engineering, Medical, Management, IT, Nursing, Law",
      ],
      actionLabel: "Explore 24,000+ Courses",
      actionHref: "/courses",
      portalName: "Central Course Repository",
    },
  },
  {
    stepNumber: 3,
    badge: "STEP 3",
    title: "Submit Application",
    description:
      "Send in your applications simultaneously to all the institutes of your choice",
    nepalNote:
      "Our verified counselors pre-screen transcripts to prevent rejection before official registrar submission.",
    internationalNote:
      "Apply to up to 3 preferred universities with a single standardized application package.",
    iconType: "submit",
    accentColor: {
      badge: "text-emerald-500",
      iconBg: "bg-emerald-50",
      iconRing: "ring-emerald-200/80",
      iconGlow: "from-emerald-400/20 to-teal-300/10",
      iconColor: "text-emerald-600",
    },
    details: {
      duration: "15–20 Minutes",
      keyPoints: [
        "Standardized multi-application submission to top Indian colleges simultaneously",
        "Direct digital document upload to secure encrypted vault",
        "Eliminate multiple application fee charges through the unified portal",
      ],
      prerequisites: [
        "Class 10 & 12 Academic Transcripts / Character Certificates",
        "Citizenship / Passport copy",
        "Statement of Purpose (for PG / Research courses)",
      ],
      actionLabel: "Start Direct Application",
      actionHref: "/student/apply",
      portalName: "Unified Admissions Engine",
    },
  },
  {
    stepNumber: 4,
    badge: "STEP 4",
    title: "Get Offer Letters",
    description: "Accept the offer letter best suited to your needs",
    nepalNote:
      "Official Offer Letters feature approved fee schedules required by Nepali Commercial Banks for MoEST NOC clearance.",
    internationalNote:
      "Compare scholarship quotas, fee waivers, and hostel accommodations before formal acceptance.",
    iconType: "offer",
    accentColor: {
      badge: "text-purple-500",
      iconBg: "bg-purple-50",
      iconRing: "ring-purple-200/80",
      iconGlow: "from-purple-400/20 to-fuchsia-300/10",
      iconColor: "text-purple-600",
    },
    details: {
      duration: "3–7 Business Days",
      keyPoints: [
        "Receive institutional provisional offer letters with unique reference IDs",
        "Review transparent scholarship allocations and international student tuition schedules",
        "Download official university letterhead documentation for bank loans or NOC processing",
      ],
      prerequisites: [
        "Completed application status verified by University Registrar",
        "Review and select your primary offer letter before seat confirmation deadline",
      ],
      actionLabel: "View Application Status",
      actionHref: "/student/applications",
      portalName: "Institutional Registrars",
    },
  },
  {
    stepNumber: 5,
    badge: "STEP 5",
    title: "Apply for Visa/Student e-visa",
    description:
      "You can easily apply with your verified offer letter and get fast-tracked student visa approval",
    nepalNote:
      "★ VISA EXEMPTION: Under the historic 1950 Indo-Nepal Friendship Treaty, Nepali citizens DO NOT require a visa! Simply obtain your MoEST NOC for banking.",
    internationalNote:
      "Non-Nepali international passport holders apply for the fast-track Indian Student e-Visa online using their official university offer letter.",
    iconType: "visa",
    accentColor: {
      badge: "text-rose-500",
      iconBg: "bg-rose-50",
      iconRing: "ring-rose-200/80",
      iconGlow: "from-rose-400/20 to-pink-300/10",
      iconColor: "text-rose-600",
    },
    details: {
      duration: "Visa-Free for Nepal / 3–5 Days for e-Visa",
      keyPoints: [
        "Fast-tracked Indian Student e-Visa clearance for international students with university sponsorship",
        "Nepali nationals enjoy complete reciprocal visa exemption under the 1950 Friendship Treaty",
        "Online MoEST NOC application assistance for tuition wire transfers from Nepal",
      ],
      prerequisites: [
        "Official University Offer Letter",
        "Nepali Citizenship Certificate (for Nepal) OR Valid Passport (International)",
        "MoEST NOC (for currency exchange at Nepali commercial banks)",
      ],
      actionLabel: "Read Visa & Treaty Guidelines",
      actionHref: "/study-in-india",
      portalName: "Ministry of External Affairs / MoEST",
    },
  },
  {
    stepNumber: 6,
    badge: "STEP 6",
    title: "Register for E-FRRO/FRRO",
    description:
      "After landing in India, complete your online e-FRRO registration within 14 days",
    nepalNote:
      "Nepali citizens are exempt from mandatory FRRO police reporting under bilateral treaties, but campus student registration is recommended.",
    internationalNote:
      "Foreign students holding student visas must complete online e-FRRO registration within 14 calendar days of landing.",
    iconType: "frro",
    accentColor: {
      badge: "text-indigo-500",
      iconBg: "bg-indigo-50",
      iconRing: "ring-indigo-200/80",
      iconGlow: "from-indigo-400/20 to-blue-300/10",
      iconColor: "text-indigo-600",
    },
    details: {
      duration: "Within 14 Days of Arrival",
      keyPoints: [
        "Digital paperless Foreigners Regional Registration Office (e-FRRO) submission",
        "Campus International Student Cell provides hands-on onboarding support",
        "Assistance with local SIM activation, Indian student bank account, and hostel check-in",
      ],
      prerequisites: [
        "Valid University Bonafide Certificate & Hostel Residence Proof",
        "Passport with valid Student Visa (International) or Nepali Citizenship",
        "Arrival border immigration stamp details",
      ],
      actionLabel: "Arrival & Onboarding Checklist",
      actionHref: "/admission-process",
      portalName: "Bureau of Immigration (e-FRRO)",
    },
  },
];

/* ─── Ultra-Premium Neat & Clean 3D Custom Step Icons ─── */
function StepIcon({
  type,
  className = "w-14 h-14",
}: {
  type: StepItem["iconType"];
  className?: string;
}) {
  switch (type) {
    case "id":
      return (
        <svg
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            {/* Ambient & Core Ground Shadows */}
            <radialGradient id="idShadowSoft" cx="36" cy="51" r="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#064E3B" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#0F172A" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="idCardFace" x1="14" y1="13" x2="58" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#F0FDF4" />
            </linearGradient>
            <linearGradient id="idCardBevel" x1="14" y1="44" x2="58" y2="49.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="50%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
            <linearGradient id="idCardBorder" x1="14" y1="13" x2="58" y2="47" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.6" />
            </linearGradient>
            {/* Metallic Gold EMV Chip */}
            <linearGradient id="idGoldChip" x1="38" y1="21.5" x2="48.5" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="35%" stopColor="#FDE047" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            {/* 3D Student Portrait Gradients */}
            <radialGradient id="idPhotoBack" cx="24.5" cy="28.5" r="11" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ECFDF5" />
              <stop offset="100%" stopColor="#D1FAE5" />
            </radialGradient>
            <linearGradient id="idAvatarHead" x1="21.5" y1="23.5" x2="28" y2="31" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
            <linearGradient id="idAvatarBody" x1="18" y1="31" x2="31" y2="39" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="65%" stopColor="#047857" />
              <stop offset="100%" stopColor="#022C22" />
            </linearGradient>
            {/* 3D Holographic Emerald Verified Badge */}
            <linearGradient id="idBadgeGrad" x1="50" y1="37" x2="57.5" y2="44.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>

          {/* 3D Natural Diffuse Contact Shadow (Anchors card directly below) */}
          <ellipse cx="36" cy="51" rx="21" ry="4" fill="url(#idShadowSoft)" />
          <ellipse cx="36" cy="49" rx="14" ry="2" fill="#0F172A" fillOpacity="0.12" />

          {/* 3D Physical Bottom Edge Thickness (Extruded Chamfer) */}
          <rect x="13.5" y="16" width="45" height="32" rx="7.5" fill="url(#idCardBevel)" />

          {/* 3D Card Front Porcelain/Glass Face */}
          <rect
            x="13.5"
            y="13.5"
            width="45"
            height="32"
            rx="7.5"
            fill="url(#idCardFace)"
            stroke="url(#idCardBorder)"
            strokeWidth="1.15"
          />

          {/* Glossy Upper Specular Refraction Curve */}
          <path
            d="M13.5 20C13.5 16.4 16.4 13.5 20 13.5H52C55.6 13.5 58.5 16.4 58.5 20V26C43 23 27 26.5 13.5 29.5V20Z"
            fill="#FFFFFF"
            fillOpacity="0.75"
          />

          {/* Recessed Lanyard Slot with Inner Bevel */}
          <rect x="31" y="15.8" width="10" height="2.8" rx="1.4" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="0.7" />
          <rect x="32" y="16.4" width="8" height="1.6" rx="0.8" fill="#1E293B" fillOpacity="0.8" />

          {/* 3D Recessed Photo Badge (Left) */}
          <g transform="translate(17.5, 21)">
            {/* Recessed Photo Inset with Soft Inner Shadow */}
            <rect x="0" y="0" width="15" height="18.5" rx="4" fill="url(#idPhotoBack)" stroke="#A7F3D0" strokeWidth="0.8" />
            <path d="M0 0H15V3.5H0Z" fill="#0F172A" fillOpacity="0.05" />

            {/* Head Silhouette with 3D Specular Highlight */}
            <circle cx="7.5" cy="6.8" r="3.3" fill="url(#idAvatarHead)" />
            <circle cx="6.5" cy="5.6" r="0.9" fill="#FFFFFF" fillOpacity="0.85" />

            {/* Torso Silhouette */}
            <path
              d="M2.5 15.8C3.2 11.8 5.2 10.8 7.5 10.8C9.8 10.8 11.8 11.8 12.5 15.8"
              fill="url(#idAvatarBody)"
            />
            {/* Subtle Collar Highlight */}
            <path d="M6 15.8L7.5 13L9 15.8" stroke="#D1FAE5" strokeWidth="0.7" strokeLinecap="round" />
          </g>

          {/* 3D Metallic EMV Gold Microchip (Right) */}
          <g transform="translate(37.5, 21.2)">
            <rect
              x="0"
              y="0"
              width="9.5"
              height="8"
              rx="2"
              fill="url(#idGoldChip)"
              stroke="#B45309"
              strokeWidth="0.5"
            />
            {/* Fine Microcircuit Grid Lines */}
            <line x1="3.2" y1="0" x2="3.2" y2="8" stroke="#78350F" strokeWidth="0.5" strokeOpacity="0.5" />
            <line x1="6.3" y1="0" x2="6.3" y2="8" stroke="#78350F" strokeWidth="0.5" strokeOpacity="0.5" />
            <line x1="0" y1="4" x2="9.5" y2="4" stroke="#78350F" strokeWidth="0.5" strokeOpacity="0.5" />
            {/* Specular Chip Glint */}
            <circle cx="1.6" cy="1.6" r="0.8" fill="#FFFFFF" fillOpacity="0.9" />
          </g>

          {/* 3D Student Credential Pill Bars */}
          {/* Primary Name / Student ID Bar */}
          <rect x="37.5" y="31.8" width="16" height="2.4" rx="1.2" fill="#00845A" />
          {/* Degree Discipline Bar */}
          <rect x="37.5" y="35.8" width="11" height="1.8" rx="0.9" fill="#64748B" />
          {/* Country / University Code Bar */}
          <rect x="37.5" y="39.4" width="8" height="1.8" rx="0.9" fill="#94A3B8" />

          {/* 3D Holographic Verified Seal Badge (Bottom Right) */}
          <g transform="translate(50.5, 38)">
            {/* Micro Drop Shadow */}
            <circle cx="4" cy="4.5" r="3.8" fill="#0F172A" fillOpacity="0.18" />
            {/* Raised Emerald Jewel Medallion */}
            <circle cx="4" cy="4" r="3.8" fill="url(#idBadgeGrad)" stroke="#FFFFFF" strokeWidth="0.8" />
            <circle cx="4" cy="4" r="3.1" stroke="#A7F3D0" strokeWidth="0.4" strokeOpacity="0.7" />
            {/* Crisp 3D Checkmark */}
            <path
              d="M2.5 4.1L3.5 5.1L5.6 2.9"
              stroke="#FFFFFF"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );

    case "search":
      return (
        <svg
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="s2Bezel" x1="16" y1="12" x2="48" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#6EE7B7" />
              <stop offset="70%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
            <radialGradient id="s2LensGlass" cx="30" cy="26" r="16" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#ECFDF5" stopOpacity="0.5" />
              <stop offset="85%" stopColor="#A7F3D0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.45" />
            </radialGradient>
            <linearGradient id="s2Handle" x1="42" y1="42" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="25%" stopColor="#F59E0B" />
              <stop offset="40%" stopColor="#047857" />
              <stop offset="85%" stopColor="#064E3B" />
              <stop offset="100%" stopColor="#022C22" />
            </linearGradient>
            <linearGradient id="s2GoldGrad" x1="24" y1="22" x2="36" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>

          {/* Contact Ground Shadow */}
          <ellipse cx="30" cy="53" rx="18" ry="3.5" fill="#0F172A" fillOpacity="0.14" />
          <ellipse cx="30" cy="51" rx="12" ry="2" fill="#064E3B" fillOpacity="0.16" />

          {/* 3D Handle */}
          <g>
            <rect x="42" y="44" width="7" height="20" rx="3.5" transform="rotate(-45 42 44)" fill="#0F172A" fillOpacity="0.15" />
            <rect x="41" y="41" width="6.5" height="20" rx="3.25" transform="rotate(-45 41 41)" fill="url(#s2Handle)" stroke="#064E3B" strokeWidth="0.8" />
            <rect x="41" y="41" width="6.5" height="3" rx="1.5" transform="rotate(-45 41 41)" fill="#F59E0B" stroke="#B45309" strokeWidth="0.5" />
          </g>

          {/* 3D Outer Bezel Rim */}
          <circle cx="30" cy="28" r="19" fill="#064E3B" />
          <circle cx="30" cy="27" r="19" fill="url(#s2Bezel)" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="30" cy="27" r="16.5" fill="#047857" />

          {/* 3D Convex Optical Glass Lens */}
          <circle cx="30" cy="27" r="15.5" fill="url(#s2LensGlass)" />

          {/* Magnified 3D Cap & Compass Star inside Lens */}
          <g transform="translate(30, 27) scale(1.15)">
            <path d="M0 -6L8 -2L0 2L-8 -2Z" fill="url(#s2GoldGrad)" stroke="#B45309" strokeWidth="0.6" />
            <path d="M-5 0V3.5C-5 5.5 0 7 0 7C0 7 5 5.5 5 3.5V0" fill="#047857" stroke="#022C22" strokeWidth="0.6" />
            <path d="M5 -1V4M5 4L6 6" stroke="#FEF08A" strokeWidth="0.9" strokeLinecap="round" />
          </g>

          {/* Curved Specular Highlights */}
          <path d="M19 22C21 16 26 14 31 14C32 14 30 16 26 17C21 18 19 21 19 22Z" fill="#FFFFFF" fillOpacity="0.85" />
          <ellipse cx="38" cy="35" rx="4" ry="1.8" transform="rotate(-30 38 35)" fill="#FFFFFF" fillOpacity="0.4" />
        </svg>
      );

    case "submit":
      return (
        <svg
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="s3PaperBack" x1="16" y1="16" x2="52" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <linearGradient id="s3PaperFront" x1="20" y1="12" x2="56" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#ECFDF5" />
            </linearGradient>
            <linearGradient id="s3Fold" x1="44" y1="12" x2="54" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="s3CheckSeal" x1="38" y1="36" x2="54" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
          </defs>

          {/* Ground Contact Shadow */}
          <ellipse cx="36" cy="57" rx="20" ry="3.5" fill="#0F172A" fillOpacity="0.12" />
          <ellipse cx="36" cy="55.5" rx="14" ry="2" fill="#064E3B" fillOpacity="0.15" />

          {/* Bottom Document Sheet (Layered 3D Depth) */}
          <rect x="15" y="16" width="34" height="42" rx="5" transform="rotate(-6 15 16)" fill="url(#s3PaperBack)" stroke="#94A3B8" strokeWidth="0.8" />

          {/* Top Document Sheet */}
          <g>
            <rect x="22" y="14" width="34" height="42" rx="5" fill="#0F172A" fillOpacity="0.12" />
            <path d="M22 17C22 14.2386 24.2386 12 27 12H44L56 24V51C56 53.7614 53.7614 56 51 56H27C24.2386 56 22 53.7614 22 51V17Z" fill="url(#s3PaperFront)" stroke="#E2E8F0" strokeWidth="1.2" />

            {/* Folded Corner */}
            <path d="M44 12V21C44 22.6569 45.3431 24 47 24H56L44 12Z" fill="url(#s3Fold)" />
            <path d="M44 12L56 24" stroke="#94A3B8" strokeWidth="0.8" />

            {/* Embossed Application Lines */}
            <rect x="27" y="19" width="13" height="2.5" rx="1.25" fill="#00845A" />
            <rect x="27" y="26" width="22" height="2" rx="1" fill="#64748B" />
            <rect x="27" y="31" width="18" height="2" rx="1" fill="#94A3B8" />
            <rect x="27" y="36" width="14" height="2" rx="1" fill="#CBD5E1" />

            {/* Checklist Items */}
            <circle cx="29" cy="43" r="2.2" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
            <path d="M28 43L28.8 43.8L30.2 42.4" stroke="#10B981" strokeWidth="0.9" strokeLinecap="round" />
            <rect x="34" y="42" width="14" height="2" rx="1" fill="#64748B" />

            <circle cx="29" cy="49" r="2.2" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
            <path d="M28 49L28.8 49.8L30.2 48.4" stroke="#10B981" strokeWidth="0.9" strokeLinecap="round" />
            <rect x="34" y="48" width="10" height="2" rx="1" fill="#94A3B8" />
          </g>

          {/* Floating 3D Emerald Checkmark Badge */}
          <g transform="translate(43, 38)">
            <circle cx="9" cy="11" r="9" fill="#0F172A" fillOpacity="0.2" />
            <circle cx="9" cy="9" r="9" fill="url(#s3CheckSeal)" stroke="#FFFFFF" strokeWidth="1.4" />
            <circle cx="9" cy="9" r="7.5" stroke="#6EE7B7" strokeWidth="0.8" strokeOpacity="0.7" />
            <path d="M5.5 9L8 11.5L12.5 6.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="6" r="1" fill="#FFFFFF" fillOpacity="0.8" />
          </g>
        </svg>
      );

    case "offer":
      return (
        <svg
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="s4EnvelopeBody" x1="14" y1="28" x2="58" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient id="s4LetterParchment" x1="22" y1="12" x2="50" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F0FDF4" />
            </linearGradient>
            <linearGradient id="s4WaxSeal" x1="32" y1="38" x2="40" y2="46" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
            <linearGradient id="s4GoldRibbon" x1="33" y1="44" x2="39" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Contact Ground Shadow */}
          <ellipse cx="36" cy="60.5" rx="20" ry="3.5" fill="#0F172A" fillOpacity="0.12" />
          <ellipse cx="36" cy="59" rx="14" ry="2" fill="#064E3B" fillOpacity="0.15" />

          {/* Envelope Back Interior Wall */}
          <path d="M14 26H58V54C58 56.7614 55.7614 59 53 59H19C16.2386 59 14 56.7614 14 54V26Z" fill="#CBD5E1" />

          {/* Protruding 3D Offer Letter Rising Out */}
          <g transform="translate(0, -3)">
            <rect x="22" y="14" width="28" height="28" rx="4" fill="url(#s4LetterParchment)" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="25" y="17" width="22" height="3" rx="1.5" fill="#00845A" />
            {/* Gold Crest */}
            <circle cx="36" cy="24" r="2.5" fill="#F59E0B" />
            <path d="M36 22.5L36.6 23.8L38 24L37 24.8L37.3 26.2L36 25.5L34.7 26.2L35 24.8L34 24L35.4 23.8L36 22.5Z" fill="#FFFFFF" />
            <rect x="26" y="29" width="20" height="1.8" rx="0.9" fill="#64748B" />
            <rect x="26" y="33" width="16" height="1.8" rx="0.9" fill="#94A3B8" />
            <rect x="26" y="37" width="12" height="1.8" rx="0.9" fill="#CBD5E1" />
          </g>

          {/* Envelope Front Body with 3D Flaps */}
          <path d="M14 28L36 44L58 28V54C58 56.7614 55.7614 59 53 59H19C16.2386 59 14 56.7614 14 54V28Z" fill="url(#s4EnvelopeBody)" stroke="#E2E8F0" strokeWidth="1.2" />

          {/* Front Triangle Fold Flaps with Inset Shading */}
          <path d="M14 57L36 41L58 57" stroke="#CBD5E1" strokeWidth="1" fill="none" />
          <path d="M14 28L36 44L58 28" fill="#F1F5F9" fillOpacity="0.4" stroke="#CBD5E1" strokeWidth="1" />

          {/* Silk Ribbon Tails */}
          <path d="M34 44L32 54L34.5 52L36 54L35 44" fill="url(#s4GoldRibbon)" />
          <path d="M38 44L40 54L37.5 52L36 54L37 44" fill="url(#s4GoldRibbon)" />

          {/* 3D Emerald Wax Seal */}
          <g>
            <circle cx="36" cy="42" r="6" fill="#0F172A" fillOpacity="0.2" />
            <circle cx="36" cy="41" r="6" fill="url(#s4WaxSeal)" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="36" cy="41" r="4.8" stroke="#6EE7B7" strokeWidth="0.6" strokeOpacity="0.8" />
            <path d="M36 38.5C37.5 37 39.5 38.2 39.5 39.8C39.5 41.5 36 43.5 36 43.5C36 43.5 32.5 41.5 32.5 39.8C32.5 38.2 34.5 37 36 38.5Z" fill="#FFFFFF" />
          </g>
        </svg>
      );

    case "visa":
      return (
        <svg
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="s5TicketBody" x1="12" y1="18" x2="60" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="65%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#ECFDF5" />
            </linearGradient>
            <linearGradient id="s5PlaneBody" x1="26" y1="20" x2="48" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="s5ArcTrail" x1="16" y1="44" x2="44" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="60%" stopColor="#34D399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00845A" />
            </linearGradient>
            <linearGradient id="s5VisaStamp" x1="42" y1="36" x2="52" y2="46" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>

          {/* Contact Ground Shadow */}
          <ellipse cx="36" cy="52.5" rx="20" ry="3.5" fill="#0F172A" fillOpacity="0.12" />
          <ellipse cx="36" cy="51" rx="14" ry="2" fill="#064E3B" fillOpacity="0.15" />

          {/* 3D Boarding Pass Ticket Body */}
          <g>
            <rect x="13" y="24" width="46" height="28" rx="6" fill="#0F172A" fillOpacity="0.12" />
            <path d="M18 22H54C56.7614 22 59 24.2386 59 27V33C57.3431 33 56 34.3431 56 36C56 37.6569 57.3431 39 59 39V45C59 47.7614 56.7614 50 54 50H18C15.2386 50 13 47.7614 13 45V39C14.6569 39 16 37.6569 16 36C16 34.3431 14.6569 33 13 33V27C13 24.2386 15.2386 22 18 22Z" fill="url(#s5TicketBody)" stroke="#E2E8F0" strokeWidth="1.2" />

            {/* Perforated Divider Line */}
            <line x1="45" y1="23" x2="45" y2="49" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="2.5 2.5" />

            {/* Ticket Information Lines */}
            <rect x="19" y="27" width="16" height="2.5" rx="1.25" fill="#00845A" />
            <rect x="19" y="32" width="22" height="1.8" rx="0.9" fill="#64748B" />
            <rect x="19" y="36" width="14" height="1.8" rx="0.9" fill="#94A3B8" />

            {/* Mini Barcode on Stub */}
            <g transform="translate(48, 28)">
              <line x1="1" y1="0" x2="1" y2="16" stroke="#475569" strokeWidth="1.2" />
              <line x1="3.5" y1="0" x2="3.5" y2="16" stroke="#475569" strokeWidth="0.8" />
              <line x1="5.5" y1="0" x2="5.5" y2="16" stroke="#475569" strokeWidth="1.6" />
              <line x1="8" y1="0" x2="8" y2="16" stroke="#475569" strokeWidth="0.9" />
            </g>
          </g>

          {/* Circular VISA Stamp in Corner */}
          <g transform="translate(26, 38)">
            <circle cx="6" cy="6" r="5.5" stroke="url(#s5VisaStamp)" strokeWidth="1" strokeDasharray="1.5 1" fill="#ECFDF5" fillOpacity="0.8" />
            <path d="M4 6L5.5 7.5L8.5 4.5" stroke="#00845A" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Jet Flight Trajectory Ribbon */}
          <path d="M16 46C20 44 26 38 36 28" stroke="url(#s5ArcTrail)" strokeWidth="2.5" strokeLinecap="round" />

          {/* 3D Supersonic Jet Airplane */}
          <g transform="translate(36, 18) rotate(22)">
            <path d="M0 0L7 9L1 7L-4 12L-4 8L-7 8L-2 5L0 0Z" fill="#0F172A" fillOpacity="0.2" transform="translate(0, 3)" />
            <path d="M0 -6L4 3L11 6L3 7L1 11L-2 11L-1 7L-9 6L-2 3L0 -6Z" fill="url(#s5PlaneBody)" stroke="#FFFFFF" strokeWidth="0.8" />
            <ellipse cx="0" cy="-2" rx="1" ry="2" fill="#FFFFFF" />
          </g>
        </svg>
      );

    case "frro":
      return (
        <svg
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="s6ShieldLeft" x1="20" y1="12" x2="36" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#ECFDF5" />
              <stop offset="100%" stopColor="#A7F3D0" />
            </linearGradient>
            <linearGradient id="s6ShieldRight" x1="36" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A7F3D0" />
              <stop offset="50%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="s6ShieldBorder" x1="18" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="s6CheckBadge" x1="38" y1="36" x2="52" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="s6UserAvatar" x1="28" y1="20" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#047857" />
              <stop offset="100%" stopColor="#022C22" />
            </linearGradient>
          </defs>

          {/* Contact Ground Shadow */}
          <ellipse cx="36" cy="57" rx="20" ry="3.5" fill="#0F172A" fillOpacity="0.12" />
          <ellipse cx="36" cy="55.5" rx="14" ry="2" fill="#064E3B" fillOpacity="0.15" />

          {/* Biometric Scanning Radar Rings */}
          <circle cx="36" cy="32" r="23" stroke="#10B981" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="3 3" />
          <circle cx="36" cy="32" r="18" stroke="#10B981" strokeWidth="0.8" strokeOpacity="0.35" />

          {/* 3D Sculpted Security Shield */}
          <g>
            <path d="M36 14L52 19V34C52 44.5 45 52 36 55C27 52 20 44.5 20 34V19L36 14Z" fill="#0F172A" fillOpacity="0.15" transform="translate(0, 2)" />
            <path d="M36 14L20 19V34C20 44.5 27 52 36 55V14Z" fill="url(#s6ShieldLeft)" stroke="url(#s6ShieldBorder)" strokeWidth="1.2" />
            <path d="M36 14L52 19V34C52 44.5 45 52 36 55V14Z" fill="url(#s6ShieldRight)" stroke="url(#s6ShieldBorder)" strokeWidth="1.2" />
            <path d="M36 15L22 19.5L22 24L36 19.5L50 24L50 19.5L36 15Z" fill="#FFFFFF" fillOpacity="0.6" />
          </g>

          {/* 3D Student Silhouette inside Shield */}
          <g transform="translate(0, 2)">
            <circle cx="36" cy="27" r="4.5" fill="url(#s6UserAvatar)" stroke="#FFFFFF" strokeWidth="0.8" />
            <circle cx="34.8" cy="25.5" r="1.1" fill="#FFFFFF" fillOpacity="0.8" />
            <path d="M28 39C29 35 32 33.5 36 33.5C40 33.5 43 35 44 39" fill="url(#s6UserAvatar)" stroke="#FFFFFF" strokeWidth="0.8" />
          </g>

          {/* Floating 3D Gold Checkmark Badge */}
          <g transform="translate(40, 37)">
            <circle cx="7" cy="8" r="7.5" fill="#0F172A" fillOpacity="0.2" />
            <circle cx="7" cy="7" r="7.5" fill="url(#s6CheckBadge)" stroke="#FFFFFF" strokeWidth="1.2" />
            <circle cx="7" cy="7" r="6" stroke="#FEF08A" strokeWidth="0.6" />
            <path d="M4 7L6 9.2L10 4.8" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );
  }
}

export function StepsToStudyIndia() {
  const [selectedStep, setSelectedStep] = useState<StepItem | null>(null);
  const [studentMode, setStudentMode] = useState<"nepal" | "international">(
    "international"
  );
  const [showFloatingApply, setShowFloatingApply] = useState(true);

  return (
    <section
      id="steps-to-study-in-india"
      className="relative py-20 sm:py-28 bg-[#fafbfc] overflow-hidden"
    >
      {/* ── Background Aesthetics: Radiant White & Emerald Glow ── */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-emerald-100/30 via-teal-50/20 to-emerald-200/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header: Title & Accent Underline Bar ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200/80 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="text-[11px] font-bold text-emerald-800 tracking-wider uppercase">
              Official Study in India Roadmap
            </span>
            <Sparkles className="w-3 h-3 text-emerald-600 ml-0.5" />
          </div>

          {/* Main Title Matching Screenshot */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Steps to study in India
          </h2>

          {/* Signature Accent Underline Bar */}
          <div className="flex justify-center items-center gap-1.5 pt-1">
            <span className="w-2.5 h-1 rounded-full bg-emerald-400" />
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-orange-400 via-emerald-500 to-teal-500 shadow-xs" />
            <span className="w-2.5 h-1 rounded-full bg-teal-400" />
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto pt-1 leading-relaxed">
            From initial registration and course discovery to university offer
            letters and campus arrival — your seamless, transparent path to
            higher education in India.
          </p>

          {/* Audience Switcher (Enhancement: Personalized Guidance for Nepal vs International) */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center p-1 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <button
                type="button"
                onClick={() => setStudentMode("nepal")}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  studentMode === "nepal"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>🇳🇵 Nepali Students</span>
                <span className="text-[10px] font-medium opacity-90 hidden sm:inline">
                  (Visa-Free Treaty)
                </span>
              </button>
              <button
                type="button"
                onClick={() => setStudentMode("international")}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  studentMode === "international"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>🌏 International Students</span>
                <span className="text-[10px] font-medium opacity-90 hidden sm:inline">
                  (Student Visa)
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Active Context Banner (When Nepali Mode is Active) ── */}
        {studentMode === "nepal" && (
          <div className="mt-6 max-w-3xl mx-auto bg-emerald-50/90 border border-emerald-200/80 rounded-2xl p-3.5 sm:p-4 text-xs text-emerald-950 flex items-start gap-3 shadow-xs">
            <div className="shrink-0 p-1.5 rounded-xl bg-emerald-100 text-emerald-800 mt-0.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="space-y-0.5">
              <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                <span>Special 1950 Indo-Nepal Friendship Treaty Provision</span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-emerald-700 text-white">
                  Active
                </span>
              </div>
              <p className="text-emerald-800/90 leading-relaxed text-[11.5px]">
                Nepali citizens travel & study freely in India with NO visa
                required. Steps 5 and 6 are adapted below to emphasize your
                MoEST NOC clearance & campus onboarding.
              </p>
            </div>
          </div>
        )}

        {/* ── Steps Grid: 2 rows of 3 cards (Matches Screenshot) ── */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {stepsData.map((step) => {
            const isNepaliSpecial =
              studentMode === "nepal" &&
              (step.stepNumber === 5 || step.stepNumber === 6);

            return (
              <div
                key={step.stepNumber}
                onClick={() => setSelectedStep(step)}
                className={`group relative bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between items-center text-center cursor-pointer
                  border border-slate-200/90 hover:border-emerald-500/50
                  shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)]
                  hover:shadow-[0_20px_45px_-12px_rgba(0,132,90,0.18)]
                  hover:-translate-y-1.5 transition-all duration-300 ease-out`}
              >
                {/* Ambient Card Background Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white via-white to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Subtle Step Index Watermark in Top Right */}
                <div className="absolute top-4 right-5 text-[11px] font-black text-slate-200 group-hover:text-emerald-500/40 transition-colors pointer-events-none select-none">
                  0{step.stepNumber}
                </div>

                <div className="relative z-10 w-full flex flex-col items-center">
                  {/* ── 3D Ceramic/Glass Pedestal Medallion with Radiant Glow ── */}
                  <div className="relative mb-6">
                    {/* Radial Lens Bloom Glow */}
                    <div
                      className={`absolute -inset-3 rounded-full bg-gradient-to-tr ${step.accentColor.iconGlow} blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}
                    />

                    {/* Circular 3D Medallion Pedestal */}
                    <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-b from-white via-white to-emerald-50/50 p-[1.5px] shadow-[0_12px_28px_-6px_rgba(0,132,90,0.16),0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-emerald-500/15 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_18px_36px_-6px_rgba(0,132,90,0.24)] group-hover:ring-emerald-400/50">
                      <div className="relative w-full h-full rounded-full bg-gradient-to-b from-white via-slate-50/80 to-emerald-50/30 flex items-center justify-center overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_6px_rgba(0,132,90,0.06)]">
                        {/* Upper Specular Glass Curve */}
                        <div className="absolute inset-x-3 top-0 h-[45%] bg-gradient-to-b from-white/95 via-white/40 to-transparent pointer-events-none rounded-t-full" />

                        {/* 3D Floating Vector Icon */}
                        <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-110">
                          <StepIcon type={step.iconType} className="w-14 h-14 sm:w-16 sm:h-16" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── STEP BADGE (Matches Orange/Coral Style from Screenshot) ── */}
                  <div className="mb-2">
                    <span
                      className={`text-[11px] sm:text-xs font-black tracking-widest uppercase ${step.accentColor.badge}`}
                    >
                      {step.badge}
                    </span>
                  </div>

                  {/* ── Title ── */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors tracking-tight font-heading leading-snug max-w-[260px]">
                    {step.title}
                  </h3>

                  {/* ── Description ── */}
                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-[270px]">
                    {step.description}
                  </p>

                  {/* ── Contextual Tag for Special Steps ── */}
                  {isNepaliSpecial && (
                    <div className="mt-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                      {step.stepNumber === 5
                        ? "Visa-Free for Nepal"
                        : "Police Reporting Exempt"}
                    </div>
                  )}
                </div>

                {/* ── Card Interactive Footer / Action Link ── */}
                <div className="relative z-10 w-full mt-6 pt-4 border-t border-slate-100/90 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                    Click for roadmap
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-600 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all">
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom Value Proposition & Full Roadmap CTA Dock ── */}
        <div className="mt-14 sm:mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Need personal guidance for your Study in India application?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Our accredited international counselors guide you step-by-step
                through your admissions application.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <Link href="/admission-process" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto font-semibold text-xs sm:text-sm border-slate-300 text-slate-700 h-11 px-5 rounded-xl cursor-pointer hover:bg-slate-50"
              >
                Full Admission Guide
              </Button>
            </Link>
            <Link href="/register" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto font-semibold text-xs sm:text-sm gap-2 bg-emerald-600 hover:bg-emerald-700 text-white h-11 px-6 rounded-xl shadow-sm cursor-pointer hover:-translate-y-0.5 transition-all">
                <span>Start Step 1: Create Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── STEP DEEP-DIVE MODAL / DIALOG ── */}
      {selectedStep && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Dismiss */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-b from-white via-slate-50 to-emerald-50/50 p-[1.5px] shadow-md ring-1 ring-emerald-500/20 flex items-center justify-center shrink-0">
                  <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-white to-emerald-50/30 flex items-center justify-center shadow-inner overflow-hidden">
                    <StepIcon type={selectedStep.iconType} className="w-12 h-12" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-black uppercase tracking-wider ${selectedStep.accentColor.badge}`}
                    >
                      {selectedStep.badge}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {selectedStep.details.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-heading">
                    {selectedStep.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStep(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-5 space-y-5">
              {/* Official Description */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-800">Overview: </span>
                {selectedStep.description}
              </div>

              {/* Student Mode Note (Highlighting Nepali vs International rules) */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>
                    {studentMode === "nepal"
                      ? "Guidance for Nepali Students:"
                      : "Guidance for International Students:"}
                  </span>
                </div>
                <p className="leading-relaxed text-emerald-800">
                  {studentMode === "nepal"
                    ? selectedStep.nepalNote
                    : selectedStep.internationalNote}
                </p>
              </div>

              {/* Key Milestones */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Key Steps & Expectations
                </h5>
                <ul className="space-y-2 text-xs text-slate-600">
                  {selectedStep.details.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="mt-0.5 p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Documents Checklist */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  What You Should Prepare
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedStep.details.prerequisites.map((prereq, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2 text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{prereq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedStep(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Close
              </button>
              <Link
                href={selectedStep.details.actionHref}
                onClick={() => setSelectedStep(null)}
              >
                <Button className="font-semibold text-xs sm:text-sm gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-10 px-5 cursor-pointer shadow-sm">
                  <span>{selectedStep.details.actionLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── FLOATING "APPLY NOW" QUICK ACTION PILL ── */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        {showFloatingApply ? (
          <>
            <Link href="/register">
              <button
                type="button"
                className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm shadow-[0_12px_28px_-6px_rgba(5,150,105,0.5),0_4px_10px_rgba(15,23,42,0.12)] hover:shadow-[0_16px_32px_-4px_rgba(5,150,105,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ring-2 ring-white"
              >
                <Send className="w-4 h-4 -rotate-12" />
                <span>Apply Now</span>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </button>
            </Link>

            <button
              type="button"
              onClick={() => setShowFloatingApply(false)}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-900 text-white border border-slate-700 shadow-md ring-2 ring-white flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
              title="Minimize button"
              aria-label="Minimize button"
            >
              <X className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setShowFloatingApply(true)}
            className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-[0_10px_24px_-4px_rgba(5,150,105,0.5)] ring-2 ring-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            title="Show Apply Now button"
            aria-label="Show Apply Now button"
          >
            <Send className="w-4 h-4 -rotate-12" />
          </button>
        )}
      </div>
    </section>
  );
}
