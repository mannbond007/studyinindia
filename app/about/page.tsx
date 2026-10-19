import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "About Us | Study in India Platform for Nepali Students",
  description:
    "Learn about our mission to bring ethical, transparent, and direct university admissions to Nepali students without middlemen exploitation.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <Badge variant="default" className="text-xs font-semibold">
              Our Purpose & Ethics
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Dedicated to Transparent Higher Education for Nepal
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We bridge the gap between high school graduates in Nepal and accredited universities across India through verifiable eligibility evaluation, direct digital applications, and zero hidden charges.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 bg-white border-slate-200/90 rounded-2xl shadow-sm space-y-3">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <CardTitle className="text-xl font-heading">100% Fee Transparency</CardTitle>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every fee displayed on our platform is identical to the university official gazette. We never add markups, secret consultancy fees, or commission deductions from student tuition.
            </p>
          </Card>

          <Card className="p-8 bg-white border-slate-200/90 rounded-2xl shadow-sm space-y-3">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <CardTitle className="text-xl font-heading">Direct University Liaisons</CardTitle>
            <p className="text-xs text-slate-600 leading-relaxed">
              We coordinate with official international admissions offices at UGC, AICTE, and NAAC accredited universities, giving students direct tracking from initial application to offer letter.
            </p>
          </Card>

          <Card className="p-8 bg-white border-slate-200/90 rounded-2xl shadow-sm space-y-3">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <CardTitle className="text-xl font-heading">Comprehensive Equivalency</CardTitle>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our team verifies that all selected academic programs are approved by relevant professional councils in Nepal (NEC, NMC, NNC, NPC) and Tribhuvan University CDC.
            </p>
          </Card>
        </div>

        {/* Offices & Physical Advisory */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Advisory Desks & Contact Offices
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Physical points of contact in Kathmandu and major educational hubs across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                Nepal Liaison Office
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Kathmandu Advisory Desk</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Putalisadak Commercial Complex, Opposite Star Mall, Kathmandu, Nepal
              </p>
              <p className="text-xs text-slate-500 pt-2">
                Services: SEE/NEB Marksheet verification, offline document counseling, NOC guidelines, and parent briefing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                India Liaison Offices
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">New Delhi & Bengaluru Hubs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connaught Place, Central New Delhi & 5th Block Koramangala, Bengaluru, India
              </p>
              <p className="text-xs text-slate-500 pt-2">
                Services: Campus reception coordination, hostel inspections, emergency support, and local bank account setup.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold font-heading text-white">Have Questions for our Advisors?</h3>
            <p className="text-emerald-100 text-xs sm:text-sm mt-1">
              Connect with our counselor team for guidance customized to your Class 12 stream and budget.
            </p>
          </div>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-50 font-bold shrink-0">
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
