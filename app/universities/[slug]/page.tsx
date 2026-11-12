import React from "react";
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

export default async function UniversityDetailPage({ params }: PageProps) {
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
