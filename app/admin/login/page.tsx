"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, ArrowRight, Mail, Lock, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@studyindia.edu.np");
  const [password, setPassword] = useState("AdminSecure@2026");
  const [isLoading, setIsLoading] = useState(false);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push("/admin/dashboard");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-900 py-16 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-emerald-600 text-white shadow-lg mx-auto">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-extrabold text-white font-heading">
            Staff Administration
          </h1>
          <p className="text-xs text-slate-400">
            Internal Operations, Verification & Audit Console
          </p>
        </div>

        <Card className="p-8 bg-slate-800 border-slate-700 rounded-2xl shadow-xl space-y-6 text-white">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-heading text-white">
                Authorized Personnel Only
              </CardTitle>
              <Badge variant="warning" className="text-[10px]">Staff Only</Badge>
            </div>
            <p className="text-xs text-slate-400">
              Access application verifications, university submissions, and agent commissions.
            </p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-300">Staff Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-600 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-300">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-600 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              isLoading={isLoading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 font-bold"
            >
              <span>Access Internal Console</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700 text-[11px] text-slate-400 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              All administrative access and status transitions are recorded in immutable audit logs.
            </span>
          </div>

          <div className="pt-2 text-center text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Return to Public Portal
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
