import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { coursesData } from "@/lib/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EligibilityChecker } from "@/components/courses/eligibility-checker";
import { formatCurrencyINR, formatCurrencyNPR } from "@/lib/utils";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return coursesData.map((c) => ({
    id: c.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const course = coursesData.find((c) => c.id === id);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.name} at ${course.universityName} | StudyIndia.np`,
    description: `Fees, duration, syllabus, eligibility criteria, and admissions for ${course.name} at ${course.universityName}.`,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-emerald-700">Courses</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">{course.name}</span>
        </div>

        {/* Header Hero Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default" className="text-xs font-semibold">
                {course.degree}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {course.stream}
              </Badge>
              <span className="text-xs text-slate-500">
                {course.durationYears} Years Full-Time
              </span>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>Application Deadline: <strong>{course.applicationDeadline}</strong></span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              {course.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Offered by <strong>{course.universityName}</strong>
              </span>
              <span className="text-slate-300">•</span>
              <Link
                href={`/universities/${course.universitySlug}`}
                className="text-emerald-700 hover:underline font-medium text-xs"
              >
                View Campus Profile
              </Link>
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block">Annual Tuition:</span>
              <span className="text-base font-extrabold text-slate-900">
                {formatCurrencyINR(course.annualFeeINR)}
              </span>
              <span className="text-[11px] text-emerald-700 block">
                ~{formatCurrencyNPR(course.annualFeeINR)}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Total Program Fee:</span>
              <span className="text-base font-extrabold text-slate-900">
                {formatCurrencyINR(course.totalFeeINR)}
              </span>
              <span className="text-[11px] text-emerald-700 block">
                ~{formatCurrencyNPR(course.totalFeeINR)}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Reserved Intl. Seats:</span>
              <span className="text-base font-extrabold text-slate-900">
                {course.seatsForInternational} Seats
              </span>
              <span className="text-[11px] text-slate-500 block">Nepali quota available</span>
            </div>
            <div>
              <span className="text-slate-400 block">Entrance Exam:</span>
              <span className="text-base font-extrabold text-emerald-700">
                Exempt / Direct
              </span>
              <span className="text-[11px] text-slate-500 block">Based on +2 Marksheet</span>
            </div>
          </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Interactive Eligibility Checker */}
            <EligibilityChecker course={course} />

            {/* Overview */}
            <Card className="rounded-2xl border-slate-200/90 bg-white p-6 sm:p-8 space-y-4">
              <CardTitle className="text-xl font-heading">Course Curriculum & Scope</CardTitle>
              <p className="text-sm text-slate-600 leading-relaxed">
                {course.overview}
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm">Graduation Career Pathways:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {course.careerProspects.map((cp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{cp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Eligibility Breakdown */}
            <Card className="rounded-2xl border-slate-200/90 bg-white p-6 sm:p-8 space-y-4">
              <CardTitle className="text-xl font-heading">Eligibility Criteria Breakdown</CardTitle>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-800">Minimum Academic Level:</span>
                  <p className="text-slate-600">{course.eligibility.minimumEducation}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-800">Minimum Score / GPA:</span>
                  <p className="text-slate-600">{course.eligibility.minimumGpaOrPercentage}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-800">Mandatory Core Subjects:</span>
                  <p className="text-slate-600">{course.eligibility.requiredSubjects.join(", ")}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1 text-emerald-900">
                  <span className="font-bold">Equivalence Guidance for Nepal Board:</span>
                  <p className="text-[11px] leading-relaxed">{course.eligibility.nepalEquivalenceNote}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar CTA & Next Steps */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="rounded-2xl border-emerald-300 bg-white p-6 shadow-md space-y-4 sticky top-28">
              <div className="space-y-1">
                <Badge variant="default" className="text-xs">Admission Open</Badge>
                <CardTitle className="text-xl pt-1">Apply for this Degree</CardTitle>
                <p className="text-xs text-slate-500">
                  Submit your application form and get verified by our admission counselors.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between font-semibold">
                  <span>Application Processing:</span>
                  <span className="text-emerald-700">Free / Zero Charge</span>
                </div>
                <div className="flex justify-between">
                  <span>Target Semester:</span>
                  <span className="text-slate-700 font-medium">Fall 2026 Batch</span>
                </div>
              </div>

              <Link href={`/register?courseId=${course.id}`} className="block">
                <Button size="lg" className="w-full font-bold shadow-sm gap-2">
                  <span>Start Admission Application</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <div className="pt-2 text-[11px] text-slate-400 text-center">
                Save drafts anytime & track verification status in real-time.
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
