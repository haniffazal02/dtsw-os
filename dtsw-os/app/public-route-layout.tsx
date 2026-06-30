"use client";

import { ReactNode } from "react";
import { PublicLayout } from "@/components/PublicLayout";

/**
 * PUBLIC ROUTE GROUP LAYOUT
 * 
 * This file should be placed at: app/(public)/layout.tsx
 * It wraps all public-facing pages with PublicLayout (header + footer)
 * 
 * Routes handled:
 * - /
 * - /about
 * - /clubs
 * - /events
 * - /contact
 * - /privacy
 * - /terms
 */
export default function PublicLayoutGroup({ children }: { children: ReactNode }) {
  return <PublicLayout>{children}</PublicLayout>;
}
