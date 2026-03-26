import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { AttributionData } from "@/types/analytics";

const TO_EMAIL = "phuchu199749@gmail.com";

function renderAttributionHtml(attribution?: AttributionData): string {
  if (!attribution) return "<p><strong>Nguồn:</strong> Không có dữ liệu UTM</p>";

  return `
    <h3>Nguồn traffic (SEO/Ads)</h3>
    <p><strong>Landing page:</strong> ${attribution.landingPath || "N/A"}</p>
    <p><strong>Last page:</strong> ${attribution.lastPath || "N/A"}</p>
    <p><strong>Referrer:</strong> ${attribution.referrer || "Direct"}</p>
    <p><strong>UTM Source:</strong> ${attribution.utmSource || "N/A"}</p>
    <p><strong>UTM Medium:</strong> ${attribution.utmMedium || "N/A"}</p>
    <p><strong>UTM Campaign:</strong> ${attribution.utmCampaign || "N/A"}</p>
    <p><strong>UTM Term:</strong> ${attribution.utmTerm || "N/A"}</p>
    <p><strong>UTM Content:</strong> ${attribution.utmContent || "N/A"}</p>
    <p><strong>gclid/fbclid/ttclid:</strong> ${
      attribution.gclid || attribution.fbclid || attribution.ttclid || "N/A"
    }</p>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, company, message, attribution } = body as {
      name?: string;
      phone?: string;
      company?: string;
      message?: string;
      attribution?: AttributionData;
    };

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Thiếu họ tên hoặc số điện thoại." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          message: "Chưa cấu hình RESEND_API_KEY trên server.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const subject = `Yêu cầu báo giá dây đai thép từ ${name}`;

    const html = `
      <h2>Thông tin khách hàng yêu cầu báo giá</h2>
      <p><strong>Họ tên:</strong> ${name}</p>
      <p><strong>Số điện thoại:</strong> ${phone}</p>
      <p><strong>Công ty:</strong> ${company || "Không cung cấp"}</p>
      <p><strong>Nội dung:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>
      ${renderAttributionHtml(attribution)}
    `;

    await resend.emails.send({
      // Sử dụng domain mặc định của Resend để không cần cấu hình DNS
      from: "Day dai thep <onboarding@resend.dev>",
      to: [TO_EMAIL],
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Không gửi được email, vui lòng thử lại sau.",
      },
      { status: 500 },
    );
  }
}

