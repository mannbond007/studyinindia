"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  Upload,
  Building,
  Save,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { coursesData } from "@/lib/data/courses";
import { universitiesData } from "@/lib/data/universities";
import { formatCurrencyINR, formatCurrencyNPR } from "@/lib/utils";

function ApplyContent() {
  const searchParams = useSearchParams();
  const initialCourseId = searchParams.get("courseId") || "course-1";

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourseId);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    // Step 2: Personal
    fullName: "Bibek Thapa",
    dateOfBirth: "2006-04-15",
    gender: "Male",
    phone: "+977 9801234567",
    whatsapp: "+977 9801234567",
    citizenshipNo: "27-01-78-01942",
    passportNo: "",
    cityInNepal: "Kathmandu",
    provinceInNepal: "Bagmati Province",
    permanentAddress: "Kapan-04, Budhanilkantha, Kathmandu",

    // Step 3: Education
    seeSchool: "Budhanilkantha School, Kathmandu",
    seeGpa: "3.65",
    seeYear: "2022",
    nebCollege: "St. Xavier's College, Maitighar, Kathmandu",
    nebStream: "Science",
    nebGpa: "3.45",
    nebPcmScore: "82.5",
    nebYear: "2024",

    // Referral code
    referralCode: "",
  });

  // Step 4: Documents state
  const [documents, setDocuments] = useState<{
    seeMarksheet: { name: string; size: string } | null;
    nebTranscript: { name: string; size: string } | null;
    citizenship: { name: string; size: string } | null;
    studentPhoto: { name: string; size: string } | null;
  }>({
    seeMarksheet: { name: "SEE_Marksheet_BibekThapa.pdf", size: "1.4 MB" },
    nebTranscript: { name: "NEB_Transcript_BibekThapa.pdf", size: "2.1 MB" },
    citizenship: { name: "Nepali_Citizenship_Card.pdf", size: "1.8 MB" },
    studentPhoto: { name: "Passport_Photo_WhiteBg.jpg", size: "640 KB" },
  });

  const selectedCourse =
    coursesData.find((c) => c.id === selectedCourseId) || coursesData[0];
  const selectedUniversity =
    universitiesData.find((u) => u.id === selectedCourse.universityId) ||
    universitiesData[0];

  const handleFileUpload = (docKey: keyof typeof documents, fileName: string) => {
    setDocuments((prev) => ({
      ...prev,
      [docKey]: { name: fileName, size: "1.5 MB" },
    }));
  };

  const handleSaveDraft = () => {
    setIsSavingDraft(true);
    setTimeout(() => {
      setIsSavingDraft(false);
      alert("Draft saved successfully! You can resume anytime from your dashboard.");
    }, 500);
  };

  const handleSubmitApplication = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `SI-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedRef(generatedRef);
    }, 1200);
  };

  if (submittedRef) {
    return (
      <div className="max-w-2xl mx-auto py-12 space-y-6">
        <Card className="p-8 sm:p-10 bg-white border-emerald-300 rounded-3xl text-center shadow-lg space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <Badge variant="default" className="text-xs font-semibold">
              Application Successfully Submitted
            </Badge>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Congratulations, {formData.fullName}!
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              Your admission dossier for <strong>{selectedCourse.name}</strong> at <strong>{selectedUniversity.name}</strong> has been saved and queued for counselor review.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
            <span className="text-xs text-slate-400 font-medium">Your Unique Application ID:</span>
            <div className="font-mono text-2xl font-black text-emerald-700 tracking-wider">
              {submittedRef}
            </div>
            <p className="text-[11px] text-slate-500">
              Please quote this reference number for all future inquiries.
            </p>
          </div>

          <div className="text-left p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-2">
            <div className="font-bold">Next Steps in the Review Pipeline:</div>
            <ul className="list-disc pl-5 space-y-1 text-[11px] text-emerald-900 leading-relaxed">
              <li>Our verification team will inspect your SEE & NEB marksheets against council rules.</li>
              <li>If any mark is unclear, you will receive an in-app correction notification.</li>
              <li>Upon verification, your dossier is formally submitted to the university registrar.</li>
              <li>Expected timeline for provisional admission decision: 3–5 business days.</li>
            </ul>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/student/dashboard">
              <Button size="lg" className="w-full sm:w-auto font-bold">
                Go to Student Dashboard
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold">
                Apply to Another Program
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Title & Progress Tracker */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              New University Admission Application
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Complete each section carefully. You can save your draft at any point.
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleSaveDraft}
            isLoading={isSavingDraft}
            className="font-semibold text-xs gap-1.5 self-start sm:self-auto"
          >
            <Save className="w-3.5 h-3.5 text-emerald-700" />
            <span>Save Draft</span>
          </Button>
        </div>

        {/* Step Progress Bar */}
        <div className="grid grid-cols-5 gap-2 pt-2">
          {[
            { num: 1, label: "Program" },
            { num: 2, label: "Personal" },
            { num: 3, label: "Education" },
            { num: 4, label: "Documents" },
            { num: 5, label: "Review" },
          ].map((st) => (
            <div
              key={st.num}
              onClick={() => setCurrentStep(st.num)}
              className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                currentStep === st.num
                  ? "border-emerald-600 bg-emerald-50 text-emerald-900 font-bold"
                  : currentStep > st.num
                  ? "border-slate-200 bg-white text-emerald-700"
                  : "border-slate-200 bg-slate-50 text-slate-400"
              }`}
            >
              <div className="text-[10px] font-semibold uppercase">Step {st.num}</div>
              <div className="text-xs truncate">{st.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* STEP 1: PROGRAM SELECTION */}
      {currentStep === 1 && (
        <Card className="p-6 sm:p-8 bg-white border-slate-200/90 rounded-2xl space-y-6 shadow-sm">
          <div className="space-y-1">
            <CardTitle className="text-xl font-heading">Step 1: Program & Campus Selection</CardTitle>
            <p className="text-xs text-slate-500">
              Choose the course and partner Indian university you wish to apply to.
            </p>
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-700">
              Select Desired Course:
            </label>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="w-full h-12 px-3.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              {coursesData.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.degree}: {c.name} — {c.universityName} ({formatCurrencyINR(c.annualFeeINR)}/yr)
                </option>
              ))}
            </select>
          </div>

          {/* Selected Program Summary Card */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-xs">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h3 className="font-bold text-base text-slate-900 font-heading">
                  {selectedCourse.name}
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <Building className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{selectedUniversity.name} ({selectedUniversity.city}, {selectedUniversity.state})</span>
                </p>
              </div>
              <Badge variant="accent" className="font-bold">
                NAAC {selectedUniversity.naacGrade}
              </Badge>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-200 text-[11px]">
              <div>
                <span className="text-slate-400 block">Annual Tuition:</span>
                <span className="font-bold text-slate-800 text-xs">
                  {formatCurrencyINR(selectedCourse.annualFeeINR)}
                </span>
                <span className="text-emerald-700">~{formatCurrencyNPR(selectedCourse.annualFeeINR)}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Duration:</span>
                <span className="font-bold text-slate-800 text-xs">{selectedCourse.durationYears} Years</span>
              </div>
              <div>
                <span className="text-slate-400 block">Eligibility:</span>
                <span className="font-bold text-slate-800 text-xs">{selectedCourse.eligibility.minimumGpaOrPercentage}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={() => setCurrentStep(2)} className="font-semibold text-xs gap-1.5">
              <span>Next: Personal Details</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 2: PERSONAL & CONTACT */}
      {currentStep === 2 && (
        <Card className="p-6 sm:p-8 bg-white border-slate-200/90 rounded-2xl space-y-6 shadow-sm">
          <div className="space-y-1">
            <CardTitle className="text-xl font-heading">Step 2: Personal Profile & Nationality</CardTitle>
            <p className="text-xs text-slate-500">
              Details will appear on your official University Provisional Offer Letter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Name (As printed on Citizenship/Passport)"
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <Input
              label="Date of Birth"
              id="dob"
              type="date"
              required
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Gender
              </label>
              <select
                className="w-full h-11 px-3 rounded-xl border border-slate-300 bg-white text-sm"
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <Input
              label="Phone / Mobile Number (+977)"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Nepali Citizenship Certificate No."
              id="citizenshipNo"
              required
              placeholder="e.g. 27-01-78-01942"
              value={formData.citizenshipNo}
              onChange={(e) => setFormData({ ...formData, citizenshipNo: e.target.value })}
            />
            <Input
              label="Passport Number (Optional if Citizenship provided)"
              id="passportNo"
              placeholder="e.g. 09182344"
              value={formData.passportNo}
              onChange={(e) => setFormData({ ...formData, passportNo: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Province in Nepal
              </label>
              <select
                className="w-full h-11 px-3 rounded-xl border border-slate-300 bg-white text-sm"
                value={formData.provinceInNepal}
                onChange={(e) => setFormData({ ...formData, provinceInNepal: e.target.value })}
              >
                <option value="Koshi Province">Koshi Province</option>
                <option value="Madhesh Province">Madhesh Province</option>
                <option value="Bagmati Province">Bagmati Province</option>
                <option value="Gandaki Province">Gandaki Province</option>
                <option value="Lumbini Province">Lumbini Province</option>
                <option value="Karnali Province">Karnali Province</option>
                <option value="Sudurpashchim Province">Sudurpashchim Province</option>
              </select>
            </div>
            <Input
              label="City / Municipality"
              id="cityInNepal"
              required
              value={formData.cityInNepal}
              onChange={(e) => setFormData({ ...formData, cityInNepal: e.target.value })}
            />
          </div>

          <Input
            label="Permanent Address in Nepal"
            id="permanentAddress"
            required
            value={formData.permanentAddress}
            onChange={(e) => setFormData({ ...formData, permanentAddress: e.target.value })}
          />

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <Button variant="outline" onClick={() => setCurrentStep(1)} className="text-xs">
              Back
            </Button>
            <Button onClick={() => setCurrentStep(3)} className="font-semibold text-xs gap-1.5">
              <span>Next: Education History</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 3: EDUCATION HISTORY */}
      {currentStep === 3 && (
        <Card className="p-6 sm:p-8 bg-white border-slate-200/90 rounded-2xl space-y-6 shadow-sm">
          <div className="space-y-1">
            <CardTitle className="text-xl font-heading">Step 3: Academic History (SEE & NEB +2)</CardTitle>
            <p className="text-xs text-slate-500">
              Provide your Class 10 and Class 12 board marks for eligibility evaluation.
            </p>
          </div>

          {/* Class 10 */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
            <h3 className="font-bold text-sm text-slate-800">Class 10 (SEE / SLC) Details:</h3>
            <Input
              label="School Name & District"
              id="seeSchool"
              required
              value={formData.seeSchool}
              onChange={(e) => setFormData({ ...formData, seeSchool: e.target.value })}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="SEE Overall GPA (e.g. 3.65)"
                id="seeGpa"
                required
                value={formData.seeGpa}
                onChange={(e) => setFormData({ ...formData, seeGpa: e.target.value })}
              />
              <Input
                label="Year of Passing SEE"
                id="seeYear"
                required
                value={formData.seeYear}
                onChange={(e) => setFormData({ ...formData, seeYear: e.target.value })}
              />
            </div>
          </div>

          {/* Class 12 */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
            <h3 className="font-bold text-sm text-slate-800">Class 12 (NEB / +2) Details:</h3>
            <Input
              label="College / +2 School Name"
              id="nebCollege"
              required
              value={formData.nebCollege}
              onChange={(e) => setFormData({ ...formData, nebCollege: e.target.value })}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Academic Stream
                </label>
                <select
                  className="w-full h-11 px-3 rounded-xl border border-slate-300 bg-white text-sm"
                  value={formData.nebStream}
                  onChange={(e) => setFormData({ ...formData, nebStream: e.target.value })}
                >
                  <option value="Science">Science (Physical / Biological)</option>
                  <option value="Management">Management / Commerce</option>
                  <option value="Humanities">Humanities / Arts</option>
                  <option value="A-Levels">A-Levels / CBSE</option>
                </select>
              </div>
              <Input
                label="Class 12 GPA (e.g. 3.45)"
                id="nebGpa"
                required
                value={formData.nebGpa}
                onChange={(e) => setFormData({ ...formData, nebGpa: e.target.value })}
              />
              <Input
                label="Passing Year"
                id="nebYear"
                required
                value={formData.nebYear}
                onChange={(e) => setFormData({ ...formData, nebYear: e.target.value })}
              />
            </div>
            <Input
              label="Physics, Chemistry & Math Aggregate % (If applying for Engineering)"
              id="nebPcm"
              value={formData.nebPcmScore}
              onChange={(e) => setFormData({ ...formData, nebPcmScore: e.target.value })}
            />
          </div>

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <Button variant="outline" onClick={() => setCurrentStep(2)} className="text-xs">
              Back
            </Button>
            <Button onClick={() => setCurrentStep(4)} className="font-semibold text-xs gap-1.5">
              <span>Next: Document Uploads</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 4: DOCUMENT UPLOADS */}
      {currentStep === 4 && (
        <Card className="p-6 sm:p-8 bg-white border-slate-200/90 rounded-2xl space-y-6 shadow-sm">
          <div className="space-y-1">
            <CardTitle className="text-xl font-heading">Step 4: Upload Required Documents</CardTitle>
            <p className="text-xs text-slate-500">
              Only PDF, JPG, or PNG under 5MB are accepted. Files are stored securely in encrypted storage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* SEE Marksheet */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Class 10 (SEE) Marksheet</h4>
                  <p className="text-[11px] text-slate-500">Scanned color copy</p>
                </div>
                {documents.seeMarksheet ? (
                  <Badge variant="success" className="text-[10px]">Uploaded</Badge>
                ) : (
                  <Badge variant="warning" className="text-[10px]">Pending</Badge>
                )}
              </div>
              {documents.seeMarksheet && (
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] flex items-center justify-between">
                  <span className="truncate max-w-[180px] font-mono">{documents.seeMarksheet.name}</span>
                  <span className="text-slate-400">{documents.seeMarksheet.size}</span>
                </div>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleFileUpload("seeMarksheet", "SEE_Marksheet_Verified.pdf")}
                className="w-full text-xs gap-1"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{documents.seeMarksheet ? "Replace File" : "Choose File"}</span>
              </Button>
            </div>

            {/* NEB Transcript */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Class 12 (NEB) Transcript</h4>
                  <p className="text-[11px] text-slate-500">Must include all subject grades</p>
                </div>
                {documents.nebTranscript ? (
                  <Badge variant="success" className="text-[10px]">Uploaded</Badge>
                ) : (
                  <Badge variant="warning" className="text-[10px]">Pending</Badge>
                )}
              </div>
              {documents.nebTranscript && (
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] flex items-center justify-between">
                  <span className="truncate max-w-[180px] font-mono">{documents.nebTranscript.name}</span>
                  <span className="text-slate-400">{documents.nebTranscript.size}</span>
                </div>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleFileUpload("nebTranscript", "NEB_Grade12_Transcript.pdf")}
                className="w-full text-xs gap-1"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{documents.nebTranscript ? "Replace File" : "Choose File"}</span>
              </Button>
            </div>

            {/* Citizenship */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Nepali Citizenship / Passport</h4>
                  <p className="text-[11px] text-slate-500">Front & back or passport bio page</p>
                </div>
                {documents.citizenship ? (
                  <Badge variant="success" className="text-[10px]">Uploaded</Badge>
                ) : (
                  <Badge variant="warning" className="text-[10px]">Pending</Badge>
                )}
              </div>
              {documents.citizenship && (
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] flex items-center justify-between">
                  <span className="truncate max-w-[180px] font-mono">{documents.citizenship.name}</span>
                  <span className="text-slate-400">{documents.citizenship.size}</span>
                </div>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleFileUpload("citizenship", "Nepali_Citizenship_Clear.pdf")}
                className="w-full text-xs gap-1"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{documents.citizenship ? "Replace File" : "Choose File"}</span>
              </Button>
            </div>

            {/* Student Photo */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Passport-Size Photo</h4>
                  <p className="text-[11px] text-slate-500">Plain white background</p>
                </div>
                {documents.studentPhoto ? (
                  <Badge variant="success" className="text-[10px]">Uploaded</Badge>
                ) : (
                  <Badge variant="warning" className="text-[10px]">Pending</Badge>
                )}
              </div>
              {documents.studentPhoto && (
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] flex items-center justify-between">
                  <span className="truncate max-w-[180px] font-mono">{documents.studentPhoto.name}</span>
                  <span className="text-slate-400">{documents.studentPhoto.size}</span>
                </div>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleFileUpload("studentPhoto", "Student_Photo_WhiteBg.jpg")}
                className="w-full text-xs gap-1"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{documents.studentPhoto ? "Replace File" : "Choose File"}</span>
              </Button>
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <Button variant="outline" onClick={() => setCurrentStep(3)} className="text-xs">
              Back
            </Button>
            <Button onClick={() => setCurrentStep(5)} className="font-semibold text-xs gap-1.5">
              <span>Next: Review & Submit</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 5: REVIEW & SUBMIT */}
      {currentStep === 5 && (
        <Card className="p-6 sm:p-8 bg-white border-slate-200/90 rounded-2xl space-y-6 shadow-sm">
          <div className="space-y-1">
            <CardTitle className="text-xl font-heading">Step 5: Review & Final Submission</CardTitle>
            <p className="text-xs text-slate-500">
              Please double check all submitted information before locking your submission.
            </p>
          </div>

          {/* Program Overview */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2 text-xs">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
              Applied Program
            </span>
            <div className="font-bold text-base text-emerald-950 font-heading">
              {selectedCourse.name}
            </div>
            <div className="text-slate-600">
              {selectedUniversity.name} • {selectedUniversity.city}, {selectedUniversity.state}
            </div>
            <div className="pt-2 flex gap-4 text-[11px]">
              <div>Annual Fee: <strong>{formatCurrencyINR(selectedCourse.annualFeeINR)}</strong></div>
              <div>Duration: <strong>{selectedCourse.durationYears} Years</strong></div>
            </div>
          </div>

          {/* Applicant & Education Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-800 block">Personal Details:</span>
              <div>Name: {formData.fullName}</div>
              <div>Citizenship: {formData.citizenshipNo}</div>
              <div>City/Province: {formData.cityInNepal}, {formData.provinceInNepal}</div>
              <div>Phone: {formData.phone}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-800 block">Academic Summary:</span>
              <div>SEE (Class 10): GPA {formData.seeGpa} ({formData.seeYear})</div>
              <div>NEB (Class 12): GPA {formData.nebGpa} ({formData.nebStream})</div>
              <div>PCM Aggregate: {formData.nebPcmScore}%</div>
            </div>
          </div>

          {/* Declaration Checkbox */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed text-[11px]">
              I hereby declare that all information and scanned educational marksheets submitted in this application are genuine and authentic. I authorize StudyIndia admissions desk to process this dossier for university registration.
            </p>
          </div>

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <Button variant="outline" onClick={() => setCurrentStep(4)} className="text-xs">
              Back to Documents
            </Button>
            <Button
              onClick={handleSubmitApplication}
              isLoading={isSubmitting}
              className="font-bold text-xs gap-1.5 shadow-sm px-6"
            >
              <span>Submit Application</span>
              <CheckCircle2 className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}

export default function StudentApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <ApplyContent />
    </Suspense>
  );
}
