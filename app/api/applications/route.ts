import { NextRequest, NextResponse } from "next/server";
import { CreateApplicationSchema } from "@/lib/validations/application";
import { getAuthenticatedUser } from "@/lib/auth/roles";
import { prisma } from "@/lib/db/prisma";
import { isDemoMode, DEMO_CONFIG } from "@/lib/config/demo-mode";

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const validated = CreateApplicationSchema.parse(body);

    const applicationRef = `SI-2026-${Math.floor(10000 + Math.random() * 90000)}`;

    // 1. Centralized Demo Mode Bypass (Zero external database dependency)
    if (isDemoMode) {
      return NextResponse.json({
        success: true,
        applicationRef,
        demoMode: true,
        message: DEMO_CONFIG.notices.applicationSubmission,
      });
    }

    // 2. Production Mode: PostgreSQL Record Creation via Prisma
    if (user.studentProfileId) {
      const app = await prisma.application.create({
        data: {
          applicationRef,
          studentId: user.studentProfileId,
          courseId: validated.courseId,
          universityId: validated.universityId,
          currentStatus: "SUBMITTED",
          submittedAt: new Date(),
        },
      });
      return NextResponse.json({ success: true, applicationRef: app.applicationRef });
    }

    return NextResponse.json({
      success: true,
      applicationRef,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Invalid payload";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
