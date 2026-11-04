/**
 * Centralized Demo Mode Configuration
 *
 * Controls whether external backend integrations (Clerk Auth, Supabase Storage/Auth,
 * PostgreSQL Database, Prisma ORM operations) are temporarily bypassed in favor of
 * local mock data and simulated workflows.
 *
 * Reversible: Set NEXT_PUBLIC_DEMO_MODE=false in .env and supply credentials
 * to re-engage all production cloud integrations.
 */

export const isDemoMode =
  process.env.NEXT_PUBLIC_DEMO_MODE === "true" ||
  (process.env.NEXT_PUBLIC_DEMO_MODE !== "false" &&
    (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
      !process.env.DATABASE_URL));

export const DEMO_CONFIG = {
  modeName: "Demo Mode",
  studentUser: {
    id: "demo-student-id-001",
    clerkId: "demo_clerk_student",
    email: "student.demo@studyindia.global",
    fullName: "Aarav Sharma",
    role: "STUDENT" as const,
    studentProfileId: "demo-student-profile-001",
  },
  adminUser: {
    id: "demo-admin-id-001",
    clerkId: "demo_clerk_admin",
    email: "admin.demo@studyindia.global",
    fullName: "Admissions Registrar (Demo)",
    role: "ADMIN" as const,
  },
  notices: {
    banner:
      "Demo Mode: External integrations (Clerk, Supabase, PostgreSQL) are temporarily paused. Exploring with local data.",
    documentUpload:
      "Demo Mode: Document preview is simulated locally. No files are transmitted to external cloud storage.",
    applicationSubmission:
      "Demo Mode: Application reference generated locally. External database persistence is currently paused.",
  },
} as const;

