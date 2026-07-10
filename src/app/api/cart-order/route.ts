import { NextResponse } from "next/server";
import type { AttributionData } from "@/types/analytics";
import {
  buildOrderNotificationText,
  formatAttributionText,
  renderAttributionHtml,
} from "@/lib/notification-content";
import {
  dispatchNotifications,
  isNotificationConfigured,
} from "@/lib/notify-channels";
import {
  isValidVietnamesePhone,
  normalizeVietnamesePhone,
  VIETNAM_PHONE_ERROR,
} from "@/lib/phone";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      address,
      items,
      attribution,
    } = body as {
      name?: string;
      phone?: string;
      address?: string;
      attribution?: AttributionData;
      items?: Array<{
        id: string;
        name: string;
        price: number;
        image: string;
        variant?: string;
        quantity: number;
      }>;
    };

    const trimmedName = name?.trim();
    const trimmedPhone = phone?.trim();
    const trimmedAddress = address?.trim();

    if (!trimmedName || !trimmedPhone || !trimmedAddress) {
      return NextResponse.json(
        {
          success: false,
          message: "Vui lòng nhập đầy đủ họ tên, số điện thoại và địa chỉ.",
        },
        { status: 400 },
      );
    }

    if (!isValidVietnamesePhone(trimmedPhone)) {
      return NextResponse.json(
        { success: false, message: VIETNAM_PHONE_ERROR },
        { status: 400 },
      );
    }

    const normalizedPhone = normalizeVietnamesePhone(trimmedPhone);

    if (!items || items.length === 0) {
      return NextResponse.json(
        { success: false, message: "Giỏ hàng đang trống." },
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

    const { title, body: orderBody, subtotal } = buildOrderNotificationText({
      name: trimmedName,
      phone: normalizedPhone,
      address: trimmedAddress,
      items,
    });

    const telegramBody = orderBody + formatAttributionText(attribution);
    const subject = `Đơn đặt hàng mới từ ${trimmedName}`;

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
      <p><strong>Họ tên:</strong> ${trimmedName}</p>
      <p><strong>Số điện thoại:</strong> ${normalizedPhone}</p>
      <p><strong>Địa chỉ:</strong> ${trimmedAddress}</p>
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
      ${renderAttributionHtml(attribution)}
    `;

    const result = await dispatchNotifications({
      subject,
      html,
      telegramTitle: title,
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
