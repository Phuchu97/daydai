"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { upsertAttribution } from "@/lib/attribution";

export function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    const search =
      typeof window !== "undefined" ? window.location.search || "" : "";
    upsertAttribution(pathname, search);
  }, [pathname]);

  return null;
}

