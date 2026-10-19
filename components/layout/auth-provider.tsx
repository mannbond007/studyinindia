"use client";

import React, { createContext, useContext } from "react";
import { ClerkProvider } from "@clerk/nextjs";

interface AuthContextType {
  isConfigured: boolean;
}

const DevAuthContext = createContext<AuthContextType>({ isConfigured: false });

export function useAuthStatus() {
  return useContext(DevAuthContext);
}

export function AppAuthProvider({ children }: { children: React.ReactNode }) {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (clerkPublishableKey && clerkPublishableKey.startsWith("pk_")) {
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
        <DevAuthContext.Provider value={{ isConfigured: true }}>
          {children}
        </DevAuthContext.Provider>
      </ClerkProvider>
    );
  }

  // Graceful fallback for local preview and development without Clerk credentials
  return (
    <DevAuthContext.Provider value={{ isConfigured: false }}>
      {children}
    </DevAuthContext.Provider>
  );
}
