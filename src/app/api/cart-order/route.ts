import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "phuchu199749@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      note,
      items,
    } = body as {
      name?: string;
      phone?: string;
      note?: string;
      items?: Array<{
        id: string;
        name: string;
        price: number;
        image: string;
        variant?: string;
        quantity: number;
      }>;
    };

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Thiếu họ tên hoặc số điện thoại." },
        { status: 400 },
      );
    }

    if (!items || items.length === 0) {
      return NextResponse.json(
        { success: false, message: "Giỏ hàng đang trống." },
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

    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const subject = `Đơn đặt hàng mới từ ${name}`;

    const rows = items
      .map(
        (item) => `
        <tr>
          <td>${item.name}</td>
          <td>${item.variant ?? ""}</td>
          <td align="right">${item.quantity}</td>
          <td align="right">${item.price.toLocaleString("vi-VN")}đ</td>
          <td align="right">${(item.price * item.quantity).toLocaleString(
            "vi-VN",
          )}đ</td>
        </tr>
      `,
      )
      .join("");

    const html = `
      <h2>Thông tin đơn đặt hàng mới</h2>
      <p><strong>Họ tên:</strong> ${name}</p>
      <p><strong>Số điện thoại:</strong> ${phone}</p>
      <p><strong>Ghi chú:</strong> ${note || "Không có"}</p>
      <h3>Chi tiết giỏ hàng</h3>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
        <thead>
          <tr>
            <th align="left">Sản phẩm</th>
            <th align="left">Phiên bản</th>
            <th align="right">SL</th>
            <th align="right">Đơn giá</th>
            <th align="right">Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
      <p><strong>Tạm tính:</strong> ${subtotal.toLocaleString("vi-VN")}đ</p>
    `;

    await resend.emails.send({
      from: "Dat hang day dai thep <onboarding@resend.dev>",
      to: [TO_EMAIL],
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending cart order:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Không gửi được đơn hàng, vui lòng thử lại sau.",
      },
      { status: 500 },
    );
  }
}

