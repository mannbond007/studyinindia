"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  LayoutDashboard,
  FileCheck2,
  Users,
  Building,
  GraduationCap,
  Coins,
  History,
  LogOut,
  Menu,
  X,
} from "lucide-react";

function AdminLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If in admin login, don't show admin sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const navigation = [
    { name: "Executive Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Applications & Docs", href: "/admin/applications", icon: FileCheck2 },
    { name: "Student Registry", href: "/admin/students", icon: Users },
    { name: "Agent Approvals", href: "/admin/agents", icon: Building },
    { name: "Universities & Courses", href: "/admin/universities", icon: GraduationCap },
    { name: "Commission Payouts", href: "/admin/commissions", icon: Coins },
    { name: "Audit Trail", href: "/admin/audit-logs", icon: History },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="font-extrabold text-white font-heading">
            StudyIndia<span className="text-emerald-400"> Admin</span>
          </span>
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg text-slate-400 hover:bg-slate-800"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between transition-transform duration-200 md:translate-x-0 md:static ${
          sidebarOpen ? "translate-x-0" : "-translate-x-100"
        }`}
      >
        <div className="p-6 space-y-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-extrabold text-white font-heading block leading-tight">
                StudyIndia<span className="text-emerald-400">.np</span>
              </span>
              <span className="text-[10px] text-amber-300 font-semibold px-1.5 py-0.2 rounded bg-amber-950/80 border border-amber-800 inline-block">
                Staff Admin Console
              </span>
            </div>
          </Link>

          <nav className="space-y-1 pt-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-emerald-600 text-white"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 space-y-3">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
            <div className="text-[11px] text-slate-400">Authenticated Session:</div>
            <div className="font-bold text-white truncate">Admissions Registrar</div>
            <div className="text-[10px] text-emerald-400">Super Administrator</div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <Link href="/" className="hover:text-emerald-400 text-[11px]">
              Public Home
            </Link>
            <Link href="/admin/login" className="hover:text-red-400 flex items-center gap-1 text-[11px]">
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10 max-w-7xl mx-auto w-full text-slate-100">
        {children}
      </main>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 text-slate-100">{children}</div>}>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </Suspense>
  );
}
