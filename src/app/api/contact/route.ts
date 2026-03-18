import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "phuchu199749@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, company, message } = body as {
      name?: string;
      phone?: string;
      company?: string;
      message?: string;
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

