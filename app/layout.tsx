import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { AppAuthProvider } from "@/components/layout/auth-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Study in India | Official Admission Platform for Nepali Students",
  description:
    "Discover top accredited Indian universities, explore B.Tech, MBBS, BBA, Nursing courses, verify eligibility, and submit verified admission applications directly from Nepal.",
  keywords: [
    "Study in India",
    "Nepali students in India",
    "Indian Universities admission Nepal",
    "B.Tech in India for Nepali students",
    "MBBS India Nepal",
    "COMPEX scholarship Nepal",
    "Study in India portal",
  ],
  authors: [{ name: "StudyIndia Admission Portal" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans"
        suppressHydrationWarning
      >
        <AppAuthProvider>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <main className="flex-1">{children}</main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </AppAuthProvider>
      </body>
    </html>
  );
}
