import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { universitiesData } from "@/lib/data/universities";
import { coursesData } from "@/lib/data/courses";
import { UniversityDetailClient } from "@/components/universities/university-detail-client";

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
    title: `${uni.name} | Admissions, Fees & Scholarships for International Students`,
    description: `Explore approved degree programmes, interactive tuition & scholarship calculators, hostel fees, and direct international admissions at ${uni.name}, ${uni.city}, ${uni.state}.`,
  };
}

function UniversityDetailSkeleton() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24">
      <div className="bg-white border-b border-slate-200/80 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-pulse">
          <div className="h-4 w-56 rounded-full bg-slate-200/80" />
          <div className="flex flex-wrap gap-2">
            <div className="h-6 w-32 rounded-full bg-emerald-100/80" />
            <div className="h-6 w-28 rounded-full bg-slate-200/70" />
            <div className="h-6 w-24 rounded-full bg-slate-200/70" />
          </div>
          <div className="h-10 sm:h-12 w-3/4 max-w-2xl rounded-2xl bg-slate-200/90" />
          <div className="h-5 w-1/2 max-w-md rounded-xl bg-slate-200/70" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-24 rounded-2xl bg-slate-100 border border-slate-200/60"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

async function UniversityDetailContent({ params }: PageProps) {
  const { slug } = await params;
  const university = universitiesData.find((u) => u.slug === slug);

  if (!university) {
    notFound();
  }

  const universityCourses = coursesData.filter(
    (c) => c.universityId === university.id
  );

  // Pick 3 similar universities (same state or same NAAC tier first)
  const similarUniversities = universitiesData
    .filter((u) => u.id !== university.id)
    .sort((a, b) => {
      const aScore =
        (a.state === university.state ? 2 : 0) +
        (a.naacGrade === university.naacGrade ? 1 : 0);
      const bScore =
        (b.state === university.state ? 2 : 0) +
        (b.naacGrade === university.naacGrade ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, 3);

  return (
    <UniversityDetailClient
      university={university}
      universityCourses={universityCourses}
      similarUniversities={similarUniversities}
    />
  );
}

export default function UniversityDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<UniversityDetailSkeleton />}>
      <UniversityDetailContent params={params} />
    </Suspense>
  );
}
