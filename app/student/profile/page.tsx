"use client";

import React, { useState } from "react";
import { CheckCircle2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function StudentProfilePage() {
  const [isSaved, setIsSaved] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "Bibek Thapa",
    email: "bibek.thapa@gmail.com",
    phone: "+977 9801234567",
    whatsapp: "+977 9801234567",
    dateOfBirth: "2006-04-15",
    gender: "Male",
    citizenshipNo: "27-01-78-01942",
    passportNo: "NP-0981245",
    cityInNepal: "Kathmandu",
    provinceInNepal: "Bagmati Province",
    permanentAddress: "Kapan-04, Budhanilkantha, Kathmandu",

    // Class 10
    seeSchool: "Budhanilkantha School, Kathmandu",
    seeGpa: "3.65",
    seeYear: "2022",

    // Class 12
    nebCollege: "St. Xavier's College, Maitighar",
    nebStream: "Science (Physical Group)",
    nebGpa: "3.45",
    nebPcmScore: "82.5",
    nebYear: "2024",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            My Academic Profile
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Manage your personal credentials, contact numbers, and verified Class 10/12 academic history.
          </p>
        </div>

        {isSaved && (
          <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Profile Updated Successfully</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Personal & Contact */}
        <Card className="p-6 sm:p-8 bg-white border-slate-200/90 rounded-2xl space-y-6 shadow-sm">
          <CardTitle className="text-lg font-heading">Personal Information</CardTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Name (As on Citizenship/Passport)"
              id="fullName"
              required
              value={profile.fullName}
              onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
            />
            <Input
              label="Email Address"
              id="email"
              type="email"
              disabled
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              label="Mobile / WhatsApp (+977)"
              id="phone"
              required
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            />
            <Input
              label="Date of Birth"
              id="dob"
              type="date"
              required
              value={profile.dateOfBirth}
              onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })}
            />
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Gender</label>
              <select
                className="w-full h-11 px-3 rounded-xl border border-slate-300 bg-white text-sm"
                value={profile.gender}
                onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Nepali Citizenship No."
              id="citizenshipNo"
              required
              value={profile.citizenshipNo}
              onChange={(e) => setProfile({ ...profile, citizenshipNo: e.target.value })}
            />
            <Input
              label="Passport Number (Optional)"
              id="passportNo"
              value={profile.passportNo}
              onChange={(e) => setProfile({ ...profile, passportNo: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="City in Nepal"
              id="city"
              value={profile.cityInNepal}
              onChange={(e) => setProfile({ ...profile, cityInNepal: e.target.value })}
            />
            <Input
              label="Permanent Address"
              id="address"
              value={profile.permanentAddress}
              onChange={(e) => setProfile({ ...profile, permanentAddress: e.target.value })}
            />
          </div>
        </Card>

        {/* Education Details */}
        <Card className="p-6 sm:p-8 bg-white border-slate-200/90 rounded-2xl space-y-6 shadow-sm">
          <CardTitle className="text-lg font-heading">Education History (SEE & NEB +2)</CardTitle>

          <div className="space-y-4">
            <h3 className="font-bold text-xs text-slate-800 uppercase tracking-wider">Class 10 (SEE / SLC)</h3>
            <Input
              label="School Name & District"
              id="seeSchool"
              value={profile.seeSchool}
              onChange={(e) => setProfile({ ...profile, seeSchool: e.target.value })}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="SEE Overall GPA"
                id="seeGpa"
                value={profile.seeGpa}
                onChange={(e) => setProfile({ ...profile, seeGpa: e.target.value })}
              />
              <Input
                label="SEE Passing Year"
                id="seeYear"
                value={profile.seeYear}
                onChange={(e) => setProfile({ ...profile, seeYear: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="font-bold text-xs text-slate-800 uppercase tracking-wider">Class 12 (NEB / +2)</h3>
            <Input
              label="College / High School Name"
              id="nebCollege"
              value={profile.nebCollege}
              onChange={(e) => setProfile({ ...profile, nebCollege: e.target.value })}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input
                label="Stream (e.g. Science, Management)"
                id="nebStream"
                value={profile.nebStream}
                onChange={(e) => setProfile({ ...profile, nebStream: e.target.value })}
              />
              <Input
                label="NEB Class 12 GPA"
                id="nebGpa"
                value={profile.nebGpa}
                onChange={(e) => setProfile({ ...profile, nebGpa: e.target.value })}
              />
              <Input
                label="Physics, Chem & Math % (Optional)"
                id="nebPcm"
                value={profile.nebPcmScore}
                onChange={(e) => setProfile({ ...profile, nebPcmScore: e.target.value })}
              />
            </div>
          </div>
        </Card>

        <div className="flex justify-end">
          <Button
            type="submit"
            size="lg"
            isLoading={isSubmitting}
            className="font-bold gap-2 shadow-sm px-8"
          >
            <Save className="w-4 h-4" />
            <span>Save Profile Changes</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
