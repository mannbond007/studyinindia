import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db/prisma";
import { UserRole } from "@prisma/client";

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
 * Server-side helper to fetch the authenticated user from the database.
 * If Clerk credentials are not yet configured in local development, returns a default mock user
 * so that the entire portal UI, multi-step application workflow, and dashboards can be tested.
 */
export async function getAuthenticatedUser(): Promise<SessionUserData | null> {
  const isClerkConfigured =
    Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_");

  if (!isClerkConfigured) {
    // Development mode fallback session for seamless local preview
    return {
      id: "dev-student-user-id",
      clerkId: "clerk_dev_student",
      email: "bibek.thapa@gmail.com",
      role: "STUDENT",
      fullName: "Bibek Thapa",
      studentProfileId: "profile-student-1",
    };
  }

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

  if (!allowedRoles.includes(user.role)) {
    throw new Error(`Forbidden: You do not have permission to access this resource.`);
  }

  return user;
}
