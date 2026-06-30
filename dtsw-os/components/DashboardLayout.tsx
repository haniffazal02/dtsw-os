"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-bg-primary overflow-hidden">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar with mobile menu */}
        <div className="flex items-center justify-between h-16 px-lg border-b border-border-primary bg-surface-primary lg:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-xs hover:bg-surface-secondary rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-text-primary">DTSW</h1>
          <div className="w-10" /> {/* Spacer for symmetry */}
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-lg lg:p-2xl">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
