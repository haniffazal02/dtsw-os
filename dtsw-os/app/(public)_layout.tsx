"use client";

import { ReactNode } from "react";
import { PublicLayout } from "@/components/PublicLayout";

export default function PublicLayout_({ children }: { children: ReactNode }) {
  return <PublicLayout>{children}</PublicLayout>;
}
