import { Resend } from "resend";

type SendEmailInput = {
  subject: string;
  html: string;
};

type SendEmailResult =
  | { ok: true; id?: string }
  | { ok: false; message: string; skipped?: boolean };

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim());
}

export function getOrderNotificationEmail(): string {
  return (
    process.env.ORDER_NOTIFICATION_EMAIL?.trim() || "phuchu199749@gmail.com"
  );
}

export function getResendFromAddress(): string {
  return (
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "Day Đai Thép VN <notifications@daydaivn.com>"
  );
}

export async function sendNotificationEmail(
  input: SendEmailInput,
): Promise<SendEmailResult> {
  const resend = getResendClient();
  if (!resend) {
    return {
      ok: false,
      skipped: true,
      message: "Chưa cấu hình RESEND_API_KEY.",
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: getResendFromAddress(),
      to: [getOrderNotificationEmail()],
      subject: input.subject,
      html: input.html,
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        ok: false,
        message: error.message || "Không gửi được email.",
      };
    }

    return { ok: true, id: data?.id };
  } catch (error) {
    console.error("Resend request failed:", error);
    const message =
      error instanceof Error ? error.message : "Không kết nối được email.";
    return {
      ok: false,
      message,
    };
  }
}
