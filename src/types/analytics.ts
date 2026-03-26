export type AttributionData = {
  landingPath?: string;
  landingAt?: string;
  lastPath?: string;
  lastAt?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  fbclid?: string;
  ttclid?: string;
};

export type WebVitalPayload = {
  name: string;
  value: number;
  id: string;
  rating: "good" | "needs-improvement" | "poor";
  navigationType: string;
  pathname: string;
  attribution?: AttributionData;
};

export type ConversionPayload = {
  conversionType: "lead_form" | "cart_order";
  value?: number;
  currency?: string;
  pathname: string;
  attribution?: AttributionData;
};

