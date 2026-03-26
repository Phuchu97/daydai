import { NextResponse } from "next/server";
import type { ConversionPayload, WebVitalPayload } from "@/types/analytics";

type EventBody =
  | {
      eventType: "web_vital";
      payload: WebVitalPayload;
    }
  | {
      eventType: "conversion";
      payload: ConversionPayload;
    };

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EventBody;

    if (!body || !body.eventType || !body.payload) {
      return NextResponse.json(
        { success: false, message: "Payload analytics không hợp lệ." },
        { status: 400 },
      );
    }

    if (body.eventType === "web_vital") {
      const { name, value, rating, pathname, attribution } = body.payload;
      console.info("[analytics:web_vital]", {
        name,
        value,
        rating,
        pathname,
        attribution,
      });
    }

    if (body.eventType === "conversion") {
      const { conversionType, value, currency, pathname, attribution } =
        body.payload;
      console.info("[analytics:conversion]", {
        conversionType,
        value,
        currency: currency ?? "VND",
        pathname,
        attribution,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Analytics event error:", error);
    return NextResponse.json(
      { success: false, message: "Không ghi nhận được analytics event." },
      { status: 500 },
    );
  }
}

