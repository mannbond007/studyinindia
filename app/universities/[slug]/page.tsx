import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Building,
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import { universitiesData } from "@/lib/data/universities";
import { coursesData } from "@/lib/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrencyINR, formatCurrencyNPR } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return universitiesData.map((u) => ({
    slug: u.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const uni = universitiesData.find((u) => u.slug === slug);
  if (!uni) return { title: "University Not Found" };

  return {
    title: `${uni.name} | Admissions & Courses for Nepali Students`,
    description: `Explore admissions, approved courses, hostel fees, and scholarships for Nepali students at ${uni.name}, ${uni.city}, ${uni.state}.`,
  };
}

export default async function UniversityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const university = universitiesData.find((u) => u.slug === slug);

  if (!university) {
    notFound();
  }

  const universityCourses = coursesData.filter(
    (c) => c.universityId === university.id
  );

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <Link href="/universities" className="hover:text-emerald-700">Universities</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">{university.name}</span>
        </div>

        {/* Hero Banner Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm">
          <div className="relative h-64 sm:h-80 w-full bg-slate-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={university.image}
              alt={university.name}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <div className="flex gap-2 mb-2">
                  <Badge variant="accent" className="font-bold">
                    NAAC Grade {university.naacGrade}
                  </Badge>
                  {university.nirfRank && (
                    <Badge variant="secondary" className="bg-white/95 text-slate-900 font-bold">
                      NIRF Rank #{university.nirfRank}
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold font-heading">
                  {university.name}
                </h1>
                <p className="flex items-center gap-2 text-sm text-slate-200 mt-1">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{university.city}, {university.state}</span>
                </p>
              </div>

              <Link href={`/register?universityId=${university.id}`}>
                <Button size="lg" className="font-bold shadow-md">
                  Apply for Admission
                </Button>
              </Link>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-slate-100 bg-slate-50/50 text-xs">
            <div>
              <span className="text-slate-400 block">Established:</span>
              <span className="font-bold text-slate-800 text-sm">{university.establishedYear}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Campus Area:</span>
              <span className="font-bold text-slate-800 text-sm">{university.campusSize}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Nepali Students:</span>
              <span className="font-bold text-emerald-700 text-sm">{university.nepaliStudentCount}+ Enrolled</span>
            </div>
            <div>
              <span className="text-slate-400 block">Hostel (Annual):</span>
              <span className="font-bold text-slate-800 text-sm">{formatCurrencyINR(university.hostelFeePerYearINR)}</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <Card className="rounded-2xl border-slate-200/90 bg-white p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-heading">About the Campus</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {university.description}
              </p>

              <div className="pt-4">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Key Highlights:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {university.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Courses Offered */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900 font-heading">
                  Approved Programs for Nepali Students ({universityCourses.length})
                </h2>
              </div>

              {universityCourses.length === 0 ? (
                <Card className="p-8 text-center text-slate-500 text-sm">
                  Full course catalog being synced for this campus. Contact counselor for specific seat availability.
                </Card>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {universityCourses.map((c) => (
                    <Card key={c.id} className="p-6 border-slate-200/90 rounded-2xl hover:border-emerald-300 transition-colors">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-1.5">
                          <div className="flex gap-2 items-center">
                            <Badge variant="default" className="text-xs">{c.degree}</Badge>
                            <span className="text-xs text-slate-500">{c.durationYears} Years</span>
                          </div>
                          <h3 className="font-bold text-base text-slate-900 hover:text-emerald-700">
                            <Link href={`/courses/${c.id}`}>{c.name}</Link>
                          </h3>
                          <p className="text-xs text-slate-500">
                            Min. Eligibility: {c.eligibility.minimumEducation} ({c.eligibility.minimumGpaOrPercentage})
                          </p>
                        </div>

                        <div className="sm:text-right shrink-0">
                          <div className="text-base font-extrabold text-slate-900">
                            {formatCurrencyINR(c.annualFeeINR)} / yr
                          </div>
                          <div className="text-xs text-emerald-700 font-medium">
                            ~{formatCurrencyNPR(c.annualFeeINR)}
                          </div>
                          <Link href={`/register?courseId=${c.id}`} className="mt-2 inline-block">
                            <Button size="sm" className="font-semibold text-xs gap-1">
                              <span>Apply</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Campus Facilities */}
            <Card className="rounded-2xl border-slate-200/90 bg-white p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-heading">Campus Infrastructure</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {university.facilities.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Building className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Admission & Contact Desk */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 p-6 space-y-4">
              <CardTitle className="text-lg text-emerald-950 font-heading">
                Nepali Admission Desk
              </CardTitle>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Direct guidance for documents, equivalence verification, fee estimates, and hostel allocation for this university.
              </p>

              <div className="space-y-2.5 text-xs text-emerald-950 pt-2 border-t border-emerald-200">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{university.contactEmail}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{university.contactPhone}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link href={`/register?universityId=${university.id}`} className="block">
                  <Button className="w-full font-bold shadow-sm">
                    Start Direct Application
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="rounded-2xl border-slate-200 bg-white p-6 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm font-heading">Documents Needed</h4>
              <ul className="space-y-1.5 text-slate-600 list-disc pl-4 leading-relaxed">
                <li>Class 10 (SEE) Marksheet & Character Certificate</li>
                <li>Class 12 (NEB) Transcript & Migration Certificate</li>
                <li>Nepali Citizenship or Passport copy</li>
                <li>Passport-size photographs (white background)</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
