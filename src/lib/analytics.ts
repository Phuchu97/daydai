"use client";

import type { ConversionPayload, WebVitalPayload } from "@/types/analytics";

type AnalyticsEventPayload =
  | {
      eventType: "web_vital";
      payload: WebVitalPayload;
    }
  | {
      eventType: "conversion";
      payload: ConversionPayload;
    };

function sendAnalyticsEvent(body: AnalyticsEventPayload): void {
  const url = "/api/analytics/events";
  const data = JSON.stringify(body);

  if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
    const blob = new Blob([data], { type: "application/json" });
    navigator.sendBeacon(url, blob);
    return;
  }

  void fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
    keepalive: true,
  });
}

export function trackWebVital(payload: WebVitalPayload): void {
  sendAnalyticsEvent({ eventType: "web_vital", payload });
}

export function trackConversion(payload: ConversionPayload): void {
  sendAnalyticsEvent({ eventType: "conversion", payload });
}

