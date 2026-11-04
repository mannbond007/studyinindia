import { NextRequest, NextResponse } from "next/server";
import { ApplicationStatusTransitionSchema } from "@/lib/validations/application";
import { getAuthenticatedUser } from "@/lib/auth/roles";
import { prisma } from "@/lib/db/prisma";
import { isDemoMode } from "@/lib/config/demo-mode";

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    if (!isDemoMode && user && user.role !== "ADMIN" && process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Forbidden: Staff privileges required" }, { status: 403 });
    }

    const body = await request.json();
    const validated = ApplicationStatusTransitionSchema.parse(body);

    // 1. Centralized Demo Mode Bypass
    if (isDemoMode) {
      return NextResponse.json({
        success: true,
        applicationId: validated.applicationId,
        newStatus: validated.toStatus,
        demoMode: true,
      });
    }

    // 2. Production Mode: PostgreSQL Update via Prisma
    await prisma.application.update({
      where: { id: validated.applicationId },
      data: {
        currentStatus: validated.toStatus,
        adminRemarks: validated.adminRemarks,
        ...(validated.toStatus === "FORWARDED_TO_UNIVERSITY" ? { forwardedAt: new Date() } : {}),
        ...(validated.toStatus === "OFFER_RECEIVED" ? { decidedAt: new Date() } : {}),
      },
    });

    return NextResponse.json({
      success: true,
      applicationId: validated.applicationId,
      newStatus: validated.toStatus,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Error transitioning application";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
