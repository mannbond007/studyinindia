"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function StudentOnboardingPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "Bibek Thapa",
    dateOfBirth: "2006-04-15",
    gender: "Male",
    phone: "+977 9801234567",
    citizenshipNo: "27-01-78-01942",
    cityInNepal: "Kathmandu",
    seeSchool: "Budhanilkantha School",
    seeGpa: "3.65",
    nebCollege: "St. Xavier's College",
    nebStream: "Science",
    nebGpa: "3.45",
  });

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push("/student/dashboard");
    }, 600);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      <div className="text-center space-y-2">
        <Badge variant="default" className="text-xs">Quick Setup</Badge>
        <h1 className="text-3xl font-extrabold text-slate-900 font-heading">
          Complete Your Student Profile
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
          Setting up your academic history allows instant eligibility matching for Indian universities.
        </p>
      </div>

      <Card className="p-8 bg-white border-slate-200/90 rounded-2xl shadow-sm space-y-6">
        <form onSubmit={handleComplete} className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-slate-800">1. Personal & Contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                id="name"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
              <Input
                label="Mobile / WhatsApp (+977)"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Citizenship / Passport Number"
                id="citizenship"
                required
                value={formData.citizenshipNo}
                onChange={(e) => setFormData({ ...formData, citizenshipNo: e.target.value })}
              />
              <Input
                label="City / Town in Nepal"
                id="city"
                required
                value={formData.cityInNepal}
                onChange={(e) => setFormData({ ...formData, cityInNepal: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="font-bold text-sm text-slate-800">2. Academic Background</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="SEE (Class 10) School"
                id="seeSchool"
                required
                value={formData.seeSchool}
                onChange={(e) => setFormData({ ...formData, seeSchool: e.target.value })}
              />
              <Input
                label="SEE Overall GPA"
                id="seeGpa"
                required
                value={formData.seeGpa}
                onChange={(e) => setFormData({ ...formData, seeGpa: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input
                label="Class 12 (+2) College"
                id="nebCollege"
                required
                value={formData.nebCollege}
                onChange={(e) => setFormData({ ...formData, nebCollege: e.target.value })}
              />
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Stream</label>
                <select
                  className="w-full h-11 px-3 rounded-xl border border-slate-300 bg-white text-sm"
                  value={formData.nebStream}
                  onChange={(e) => setFormData({ ...formData, nebStream: e.target.value })}
                >
                  <option value="Science">Science</option>
                  <option value="Management">Management</option>
                  <option value="Humanities">Humanities</option>
                </select>
              </div>
              <Input
                label="Class 12 GPA"
                id="nebGpa"
                required
                value={formData.nebGpa}
                onChange={(e) => setFormData({ ...formData, nebGpa: e.target.value })}
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            isLoading={isLoading}
            className="w-full font-bold shadow-sm"
          >
            <span>Finish Setup & Open Dashboard</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </Card>
    </div>
  );
}
