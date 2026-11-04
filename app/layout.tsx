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
  title: "StudyIndia Global | Premier International Admissions Platform for Indian Universities",
  description:
    "Explore 300+ top NIRF ranked & NAAC A++ accredited Indian universities. Compare verified fees in INR & USD, apply for Engineering, Medicine, Management, and IT degrees, with fast-track Student Visa guidance.",
  keywords: [
    "Study in India",
    "Study in India portal",
    "Top universities in India for international students",
    "NIRF ranked universities India",
    "NAAC accredited universities",
    "B.Tech in India for international students",
    "MBBS in India global admission",
    "Indian Student Visa guidance",
    "Study in India fees in USD",
    "StudyIndia Global admissions",
  ],
  authors: [{ name: "StudyIndia Global Admissions" }],
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
