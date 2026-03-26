"use client";

import type { AttributionData } from "@/types/analytics";

const ATTRIBUTION_STORAGE_KEY = "daithep_attribution_v1";

function safeGetLocalStorageItem(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetLocalStorageItem(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore storage write errors in private mode/quota issues.
  }
}

export function getStoredAttribution(): AttributionData | null {
  const raw = safeGetLocalStorageItem(ATTRIBUTION_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AttributionData;
  } catch {
    return null;
  }
}

function readCurrentAttributionFromUrl(pathname: string, search: string): AttributionData {
  const params = new URLSearchParams(search);
  return {
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
    utmTerm: params.get("utm_term") ?? undefined,
    utmContent: params.get("utm_content") ?? undefined,
    gclid: params.get("gclid") ?? undefined,
    fbclid: params.get("fbclid") ?? undefined,
    ttclid: params.get("ttclid") ?? undefined,
    referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
    lastPath: pathname,
    lastAt: new Date().toISOString(),
  };
}

export function upsertAttribution(pathname: string, search: string): AttributionData {
  const existing = getStoredAttribution();
  const current = readCurrentAttributionFromUrl(pathname, search);
  const now = new Date().toISOString();

  const merged: AttributionData = {
    landingPath: existing?.landingPath ?? pathname,
    landingAt: existing?.landingAt ?? now,
    referrer: existing?.referrer ?? current.referrer,
    utmSource: existing?.utmSource ?? current.utmSource,
    utmMedium: existing?.utmMedium ?? current.utmMedium,
    utmCampaign: existing?.utmCampaign ?? current.utmCampaign,
    utmTerm: existing?.utmTerm ?? current.utmTerm,
    utmContent: existing?.utmContent ?? current.utmContent,
    gclid: existing?.gclid ?? current.gclid,
    fbclid: existing?.fbclid ?? current.fbclid,
    ttclid: existing?.ttclid ?? current.ttclid,
    lastPath: current.lastPath,
    lastAt: current.lastAt,
  };

  safeSetLocalStorageItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(merged));
  return merged;
}

