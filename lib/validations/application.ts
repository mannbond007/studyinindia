import { z } from "zod";

export const CreateApplicationSchema = z.object({
  courseId: z.string().min(1, "Course is required"),
  universityId: z.string().min(1, "University is required"),
  referralCode: z.string().optional(),
  fullName: z.string().min(2, "Full name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  phone: z.string().min(7, "Valid phone number is required"),
  citizenshipNo: z.string().min(3, "Passport or National ID number is required"),
  cityInNepal: z.string().min(2, "Country & City is required"),
  seeSchool: z.string().min(2, "Grade 10 / Secondary school name is required"),
  seeGpa: z.string().min(1, "Grade 10 GPA / Score is required"),
  nebCollege: z.string().min(2, "Grade 12 / High school name is required"),
  nebStream: z.string().min(2, "Academic stream is required"),
  nebGpa: z.string().min(1, "Grade 12 GPA / Score is required"),
  nebPcmScore: z.string().optional(),
  documents: z.object({
    seeMarksheet: z.string().min(1, "Grade 10 / O-Level marksheet is required"),
    nebTranscript: z.string().min(1, "Grade 12 transcript is required"),
    citizenship: z.string().min(1, "Passport / National ID is required"),
    studentPhoto: z.string().min(1, "Passport-size photo is required"),
  }),
});

export const AgentReferralSchema = z.object({
  studentName: z.string().min(2, "Student full name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Valid phone number required"),
  city: z.string().min(2, "Country & City is required"),
  selectedCourseId: z.string().min(1, "Target course is required"),
  seeGpa: z.string().optional(),
  nebGpa: z.string().optional(),
  consentConfirmed: z.boolean().refine((val) => val === true, {
    message: "Consent confirmation is mandatory",
  }),
});

export const DocumentActionSchema = z.object({
  documentId: z.string().min(1),
  action: z.enum(["VERIFY", "REQUEST_CORRECTION", "REJECT"]),
  correctionNote: z.string().optional(),
});

export const ApplicationStatusTransitionSchema = z.object({
  applicationId: z.string().min(1),
  toStatus: z.enum([
    "DRAFT",
    "SUBMITTED",
    "UNDER_REVIEW",
    "ACTION_REQUIRED",
    "VERIFIED",
    "FORWARDED_TO_UNIVERSITY",
    "OFFER_RECEIVED",
    "ACCEPTED",
    "ENROLLED",
    "REJECTED",
    "WITHDRAWN",
  ]),
  adminRemarks: z.string().optional(),
});
