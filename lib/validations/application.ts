import { z } from "zod";

export const CreateApplicationSchema = z.object({
  courseId: z.string().min(1, "Course is required"),
  universityId: z.string().min(1, "University is required"),
  referralCode: z.string().optional(),
  fullName: z.string().min(2, "Full name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  phone: z.string().min(7, "Valid phone number is required"),
  citizenshipNo: z.string().min(3, "Citizenship or passport number is required"),
  cityInNepal: z.string().min(2, "City is required"),
  seeSchool: z.string().min(2, "SEE school name is required"),
  seeGpa: z.string().min(1, "SEE GPA is required"),
  nebCollege: z.string().min(2, "Class 12 college is required"),
  nebStream: z.string().min(2, "Stream is required"),
  nebGpa: z.string().min(1, "Class 12 GPA is required"),
  nebPcmScore: z.string().optional(),
  documents: z.object({
    seeMarksheet: z.string().min(1, "SEE marksheet is required"),
    nebTranscript: z.string().min(1, "NEB transcript is required"),
    citizenship: z.string().min(1, "Citizenship is required"),
    studentPhoto: z.string().min(1, "Photo is required"),
  }),
});

export const AgentReferralSchema = z.object({
  studentName: z.string().min(2, "Student full name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Valid phone number required"),
  city: z.string().min(2, "City is required"),
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
