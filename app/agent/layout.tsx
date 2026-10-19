"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  LayoutDashboard,
  Users,
  Coins,
  UserPlus,
  LogOut,
  Menu,
  X,
  HelpCircle,
} from "lucide-react";

function AgentLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If in agent login, don't wrap with agent sidebar
  if (pathname === "/agent/login") {
    return <>{children}</>;
  }

  const navigation = [
    { name: "Partner Dashboard", href: "/agent/dashboard", icon: LayoutDashboard },
    { name: "Refer New Student", href: "/agent/refer", icon: UserPlus },
    { name: "My Referred Students", href: "/agent/students", icon: Users },
    { name: "Commission Ledger", href: "/agent/commissions", icon: Coins },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <Link href="/agent/dashboard" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-emerald-800 flex items-center justify-center text-white">
            <Building2 className="h-5 w-5" />
          </div>
          <span className="font-extrabold text-slate-900 font-heading">
            StudyIndia<span className="text-emerald-700"> Partner</span>
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
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col justify-between transition-transform duration-200 md:translate-x-0 md:static ${
          sidebarOpen ? "translate-x-0" : "-translate-x-100"
        }`}
      >
        <div className="p-6 space-y-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-extrabold text-white font-heading block leading-tight">
                StudyIndia<span className="text-emerald-400">.np</span>
              </span>
              <span className="text-[10px] text-emerald-300 font-semibold px-1.5 py-0.2 rounded bg-emerald-950 border border-emerald-800 inline-block">
                Educational Agent
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
                      ? "bg-emerald-800 text-white"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-emerald-300" : "text-slate-400"}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 space-y-3">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs space-y-1">
            <div className="text-[11px] text-slate-400">Consultancy:</div>
            <div className="font-bold text-white truncate">Himalayan Edu Pathways</div>
            <div className="text-[10px] text-emerald-400">Verified Representative</div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <Link href="/contact" className="hover:text-emerald-400 flex items-center gap-1 text-[11px]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Desk Support</span>
            </Link>
            <Link href="/agent/login" className="hover:text-red-400 flex items-center gap-1 text-[11px]">
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

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC]">{children}</div>}>
      <AgentLayoutContent>{children}</AgentLayoutContent>
    </Suspense>
  );
}
