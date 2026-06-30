"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * AUTH ROUTE GROUP LAYOUT
 * 
 * This file should be placed at: app/(auth)/layout.tsx
 * Wraps authentication pages with a centered card layout
 * 
 * Routes handled:
 * - /login
 * - /signup
 * - /forgot-password
 */
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface-secondary p-lg">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-md mb-2xl">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold text-text-inverse">DT</span>
          </div>
          <span className="text-2xl font-bold text-text-primary">DTSW</span>
        </div>

        {/* Content */}
        <div className="bg-surface-primary rounded-xl border border-border-primary p-2xl">
          {children}
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-text-tertiary mt-lg">
          © 2026 DT Student Wing. All rights reserved.
        </p>
      </div>
    </div>
  );
}
