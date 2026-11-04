import { NextRequest, NextResponse } from "next/server";
import { DocumentActionSchema } from "@/lib/validations/application";
import { getAuthenticatedUser } from "@/lib/auth/roles";
import { prisma } from "@/lib/db/prisma";
import { isDemoMode } from "@/lib/config/demo-mode";

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser();
    // Allow in dev / demo mode or with genuine admin role
    if (!isDemoMode && user && user.role !== "ADMIN" && process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Forbidden: Staff privileges required" }, { status: 403 });
    }

    const body = await request.json();
    const validated = DocumentActionSchema.parse(body);

    const statusMap = {
      VERIFY: "VERIFIED" as const,
      REQUEST_CORRECTION: "CORRECTION_REQUESTED" as const,
      REJECT: "REJECTED" as const,
    };

    // 1. Centralized Demo Mode Bypass
    if (isDemoMode) {
      return NextResponse.json({
        success: true,
        documentId: validated.documentId,
        status: statusMap[validated.action],
        demoMode: true,
      });
    }

    // 2. Production Mode: PostgreSQL Update via Prisma
    await prisma.document.update({
      where: { id: validated.documentId },
      data: {
        verificationStatus: statusMap[validated.action],
        correctionNote: validated.correctionNote,
        verifiedAt: new Date(),
        verifiedByUserId: user?.id || "admin-system",
      },
    });

    return NextResponse.json({
      success: true,
      documentId: validated.documentId,
      status: statusMap[validated.action],
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Error processing request";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
