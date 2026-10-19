"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  LayoutDashboard,
  FileText,
  User,
  Compass,
  Bell,
  LogOut,
  Menu,
  X,
  PlusCircle,
  HelpCircle,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

function StudentNavLinks({
  navigation,
  onNavigate,
}: {
  navigation: NavItem[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav className="space-y-1 pt-2">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={onNavigate}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
              isActive
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200/80"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? "text-emerald-700" : "text-slate-400"}`} />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation: NavItem[] = [
    { name: "My Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
    { name: "My Applications", href: "/student/applications", icon: FileText },
    { name: "Apply to University", href: "/student/apply", icon: PlusCircle },
    { name: "My Academic Profile", href: "/student/profile", icon: User },
    { name: "Explore Courses", href: "/courses", icon: Compass },
    { name: "Notifications", href: "/student/notifications", icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <Link href="/student/dashboard" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="font-extrabold text-slate-900 font-heading">
            StudyIndia<span className="text-emerald-700"> Student</span>
          </span>
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col justify-between transition-transform duration-200 md:translate-x-0 md:static ${
          sidebarOpen ? "translate-x-0" : "-translate-x-100"
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-extrabold text-slate-900 font-heading block leading-tight">
                StudyIndia<span className="text-emerald-700">.np</span>
              </span>
              <span className="text-[10px] text-emerald-800 font-semibold px-1.5 py-0.2 rounded bg-emerald-100 inline-block">
                Student Portal
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <Suspense
            fallback={
              <nav className="space-y-1 pt-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50"
                    >
                      <Icon className="w-4 h-4 text-slate-400" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            }
          >
            <StudentNavLinks
              navigation={navigation}
              onNavigate={() => setSidebarOpen(false)}
            />
          </Suspense>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-100 space-y-3">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium">Profile:</span>
              <span className="font-bold text-emerald-700">85% Complete</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full w-[85%]" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <Link href="/faq" className="hover:text-emerald-700 flex items-center gap-1 text-[11px]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Help & NOC</span>
            </Link>
            <Link href="/login" className="hover:text-red-600 flex items-center gap-1 text-[11px]">
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10 max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
