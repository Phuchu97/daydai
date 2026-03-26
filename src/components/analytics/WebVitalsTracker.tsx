"use client";

import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import { getStoredAttribution } from "@/lib/attribution";
import { trackWebVital } from "@/lib/analytics";

export function WebVitalsTracker() {
  const pathname = usePathname();

  useReportWebVitals((metric) => {
    trackWebVital({
      name: metric.name,
      value: metric.value,
      id: metric.id,
      rating: metric.rating,
      navigationType: metric.navigationType,
      pathname: pathname || "/",
      attribution: getStoredAttribution() ?? undefined,
    });
  });

  return null;
}

