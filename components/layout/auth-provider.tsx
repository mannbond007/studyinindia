"use client";

import React, { createContext, useContext } from "react";
import { ClerkProvider } from "@clerk/nextjs";

interface AuthContextType {
  isConfigured: boolean;
  isDemoMode: boolean;
}

const DevAuthContext = createContext<AuthContextType>({
  isConfigured: false,
  isDemoMode: true,
});

export function useAuthStatus() {
  return useContext(DevAuthContext);
}

export function AppAuthProvider({ children }: { children: React.ReactNode }) {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const isDemoActive =
    process.env.NEXT_PUBLIC_DEMO_MODE === "true" ||
    (process.env.NEXT_PUBLIC_DEMO_MODE !== "false" && !clerkPublishableKey);

  // In Demo Mode: bypass ClerkProvider entirely so no external script/session check runs
  if (!isDemoActive && clerkPublishableKey && clerkPublishableKey.startsWith("pk_")) {
    return (
      <ClerkProvider
        publishableKey={clerkPublishableKey}
        appearance={{
          variables: {
            colorPrimary: "#047857",
            borderRadius: "0.5rem",
          },
        }}
      >
        <DevAuthContext.Provider value={{ isConfigured: true, isDemoMode: false }}>
          {children}
        </DevAuthContext.Provider>
      </ClerkProvider>
    );
  }

  // Seamless local demo fallback: provides context without external network calls
  return (
    <DevAuthContext.Provider value={{ isConfigured: false, isDemoMode: true }}>
      {children}
    </DevAuthContext.Provider>
  );
}
