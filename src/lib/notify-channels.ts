import { isEmailConfigured, sendNotificationEmail } from "@/lib/notification-email";
import {
  isTelegramConfigured,
  sendTelegramNotification,
} from "@/lib/telegram-notify";

type DispatchInput = {
  subject: string;
  html: string;
  telegramTitle: string;
  telegramBody: string;
};

type DispatchResult = {
  success: boolean;
  message?: string;
  channels?: { email: boolean; telegram: boolean };
};

export function isNotificationConfigured(): boolean {
  return isEmailConfigured() || isTelegramConfigured();
}

export async function dispatchNotifications(
  input: DispatchInput,
): Promise<DispatchResult> {
  const [emailResult, telegramResult] = await Promise.all([
    isEmailConfigured()
      ? sendNotificationEmail({ subject: input.subject, html: input.html })
      : Promise.resolve({
          ok: false as const,
          skipped: true,
          message: "Chưa cấu hình email.",
        }),
    isTelegramConfigured()
      ? sendTelegramNotification({
          title: input.telegramTitle,
          body: input.telegramBody,
        })
      : Promise.resolve({
          ok: false as const,
          skipped: true,
          message: "Chưa cấu hình Telegram.",
        }),
  ]);

  const emailOk = emailResult.ok;
  const telegramOk = telegramResult.ok;

  if (!emailOk && !telegramOk) {
    const details = [emailResult, telegramResult]
      .filter((result) => !result.ok && !result.skipped)
      .map((result) => result.message)
      .filter(Boolean)
      .join(" | ");

    const needsConfig =
      !isEmailConfigured() && !isTelegramConfigured();

    console.error("Notification failed:", { emailResult, telegramResult });
    return {
      success: false,
      message: needsConfig
        ? "Chưa cấu hình email hoặc Telegram trong file .env."
        : details ||
          "Không gửi được thông báo. Kiểm tra Resend domain hoặc Telegram bot.",
    };
  }

  if (!emailOk) {
    console.warn("Email failed but Telegram sent:", emailResult.message);
  }
  if (!telegramOk && !telegramResult.skipped) {
    console.warn("Telegram failed but email sent:", telegramResult.message);
  }

  return {
    success: true,
    channels: { email: emailOk, telegram: telegramOk },
  };
}
