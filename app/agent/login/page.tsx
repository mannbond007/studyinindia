"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, Lock, Building, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function AgentLoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [isLoading, setIsLoading] = useState(false);
  const [partnerRegistered, setPartnerRegistered] = useState(false);

  // Sign In state
  const [loginEmail, setLoginEmail] = useState("agent@nepaledu.com.np");
  const [loginPassword, setLoginPassword] = useState("AgentPassword@2026");

  // Registration state
  const [agencyName, setAgencyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [panNo, setPanNo] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push("/agent/dashboard");
    }, 600);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPartnerRegistered(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 flex flex-col justify-center">
      <div className="max-w-lg w-full mx-auto px-4 space-y-8">
        {/* Brand */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-emerald-800 flex items-center justify-center text-white shadow-sm">
              <Building className="h-6 w-6" />
            </div>
            <span className="text-2xl font-extrabold text-slate-900 font-heading">
              StudyIndia<span className="text-emerald-700"> Partners</span>
            </span>
          </Link>
          <p className="text-xs text-slate-500">
            Educational Consultancy & Representative Portal
          </p>
        </div>

        <Card className="p-8 bg-white border-slate-200/90 rounded-2xl shadow-sm space-y-6">
          {/* Tab Selector */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab("login")}
              className={`py-2 rounded-lg transition-all ${
                activeTab === "login"
                  ? "bg-white text-emerald-800 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Partner Sign In
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`py-2 rounded-lg transition-all ${
                activeTab === "register"
                  ? "bg-white text-emerald-800 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Apply as Partner
            </button>
          </div>

          {activeTab === "login" ? (
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-heading">Agent Sign In</CardTitle>
                  <Badge variant="default" className="text-[10px]">Partner Access</Badge>
                </div>
                <p className="text-xs text-slate-500">
                  Access your referral pipeline, student applications, and commission ledger.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">Work Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      placeholder="agent@consultancy.com.np"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  isLoading={isLoading}
                  className="w-full font-bold shadow-sm"
                >
                  <span>Open Agent Dashboard</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          ) : partnerRegistered ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-200 flex items-center justify-center mx-auto text-emerald-800">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading">Application Under Review</h3>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Thank you, {contactPerson}. Your partnership request for <strong>{agencyName}</strong> has been received by our institutional alliances department.
              </p>
              <div className="p-3 bg-white rounded-xl border border-emerald-200 text-[11px] text-slate-600">
                Notice: Unapproved agents cannot access referral links or commission records until admin verification is granted.
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setPartnerRegistered(false);
                  setActiveTab("login");
                }}
              >
                Back to Sign In
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-1">
                <CardTitle className="text-xl font-heading">Register Your Consultancy</CardTitle>
                <p className="text-xs text-slate-500">
                  Join our verified network of authorized educational representatives across Nepal.
                </p>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <Input
                  label="Consultancy / Agency Name"
                  id="agencyName"
                  required
                  placeholder="e.g. Himalayan Educational Pathways"
                  value={agencyName}
                  onChange={(e) => setAgencyName(e.target.value)}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Contact Person Name"
                    id="contactPerson"
                    required
                    placeholder="e.g. Ramesh Poudel"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                  />
                  <Input
                    label="Mobile / WhatsApp"
                    id="phone"
                    required
                    placeholder="+977 98XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Official Email"
                    id="email"
                    type="email"
                    required
                    placeholder="info@himalayanedu.com.np"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    label="PAN / VAT Number (Nepal)"
                    id="panNo"
                    placeholder="e.g. 60XXXXXXX"
                    value={panNo}
                    onChange={(e) => setPanNo(e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  isLoading={isLoading}
                  className="w-full font-bold shadow-sm"
                >
                  <span>Submit Partnership Application</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
            <Link href="/login" className="hover:text-slate-600">
              Switch to Student Portal
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
