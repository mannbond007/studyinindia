import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db/prisma";
import { UserRole } from "@prisma/client";
import { isDemoMode, DEMO_CONFIG } from "@/lib/config/demo-mode";

export interface SessionUserData {
  id: string;
  clerkId: string;
  email: string;
  role: UserRole;
  fullName?: string;
  studentProfileId?: string;
  agentProfileId?: string;
  agentApproved?: boolean;
}

/**
 * Server-side helper to fetch the authenticated user.
 * In Demo Mode: Returns a structured demo session without requiring Clerk keys or database connectivity.
 * In Production Mode: Validates Clerk JWT and synchronizes with PostgreSQL via Prisma.
 */
export async function getAuthenticatedUser(): Promise<SessionUserData | null> {
  // 1. Centralized Demo Mode Bypass
  if (isDemoMode) {
    return DEMO_CONFIG.studentUser;
  }

  // 2. Production Credential Check
  const isClerkConfigured =
    Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_");

  if (!isClerkConfigured) {
    return DEMO_CONFIG.studentUser;
  }

  // 3. Genuine Clerk & Prisma Authentication Flow
  try {
    const { userId } = await auth();
    if (!userId) return null;

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: {
        studentProfile: true,
        agentProfile: true,
      },
    });

    if (!user) {
      // Sync from Clerk currentUser if newly created
      const clerkUser = await currentUser();
      if (!clerkUser) return null;

      const email = clerkUser.emailAddresses[0]?.emailAddress || "";
      const adminEmails = (process.env.ADMIN_EMAILS || "")
        .split(",")
        .map((e) => e.trim().toLowerCase());

      const assignedRole: UserRole = adminEmails.includes(email.toLowerCase())
        ? "ADMIN"
        : "STUDENT";

      const newUser = await prisma.user.create({
        data: {
          clerkId: userId,
          email,
          role: assignedRole,
        },
        include: {
          studentProfile: true,
          agentProfile: true,
        },
      });

      return {
        id: newUser.id,
        clerkId: newUser.clerkId,
        email: newUser.email,
        role: newUser.role,
        studentProfileId: newUser.studentProfile?.id,
        agentProfileId: newUser.agentProfile?.id,
      };
    }

    return {
      id: user.id,
      clerkId: user.clerkId,
      email: user.email,
      role: user.role,
      fullName: user.studentProfile?.fullName || user.agentProfile?.contactPerson,
      studentProfileId: user.studentProfile?.id,
      agentProfileId: user.agentProfile?.id,
      agentApproved: user.agentProfile?.approvalStatus === "APPROVED",
    };
  } catch (error) {
    console.error("Authentication resolution error:", error);
    return null;
  }
}

/**
 * Server-side guard to verify required role
 */
export async function assertAuthorizedRole(allowedRoles: UserRole[]): Promise<SessionUserData> {
  const user = await getAuthenticatedUser();
  if (!user) {
    throw new Error("Unauthorized: Please sign in to continue.");
  }

  // In Demo Mode: Allow previewing admin workflows when ADMIN role is required
  if (isDemoMode && allowedRoles.includes("ADMIN") && user.role !== "ADMIN") {
    return DEMO_CONFIG.adminUser;
  }

  if (!allowedRoles.includes(user.role)) {
    throw new Error("Forbidden: Insufficient privileges for this portal area.");
  }
  return user;
}
