import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // Attach standard security headers
  const response = NextResponse.next();

  response.headers.set("X-StudyIndia-Path", request.nextUrl.pathname);

  // Standard Security Headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: [
    // Match all request paths except for static files and images
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
