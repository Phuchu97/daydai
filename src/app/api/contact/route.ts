import { NextResponse } from "next/server";
import type { AttributionData } from "@/types/analytics";
import {
  formatAttributionText,
  renderAttributionHtml,
} from "@/lib/notification-content";
import {
  dispatchNotifications,
  isNotificationConfigured,
} from "@/lib/notify-channels";

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

    if (!isNotificationConfigured()) {
      return NextResponse.json(
        {
          success: false,
          message: "Chưa cấu hình email hoặc Telegram trên server.",
        },
        { status: 500 },
      );
    }

    const subject = `Yêu cầu báo giá dây đai thép từ ${name}`;
    const telegramBody = [
      `Tên: ${name}`,
      `SĐT: ${phone}`,
      `Công ty: ${company || "Không cung cấp"}`,
      `Nội dung: ${message || "Không có"}`,
      formatAttributionText(attribution),
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <h2>Thông tin khách hàng yêu cầu báo giá</h2>
      <p><strong>Họ tên:</strong> ${name}</p>
      <p><strong>Số điện thoại:</strong> ${phone}</p>
      <p><strong>Công ty:</strong> ${company || "Không cung cấp"}</p>
      <p><strong>Nội dung:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>
      ${renderAttributionHtml(attribution)}
    `;

    const result = await dispatchNotifications({
      subject,
      html,
      telegramTitle: "YÊU CẦU BÁO GIÁ MỚI",
      telegramBody,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, channels: result.channels });
  } catch (error) {
    console.error("Error sending contact notification:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Không gửi được yêu cầu, vui lòng thử lại sau.",
      },
      { status: 500 },
    );
  }
}
