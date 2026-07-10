type TelegramNotifyInput = {
  title: string;
  body: string;
};

type TelegramNotifyResult =
  | { ok: true; messageId?: number }
  | { ok: false; message: string; skipped?: boolean };

function isPlaceholderValue(value?: string): boolean {
  if (!value) return true;
  const v = value.trim();
  if (!v) return true;
  return (
    v.startsWith("<") ||
    v.includes("your_") ||
    v.includes("@BotFather") ||
    v.toLowerCase() === "chat id"
  );
}

export function isTelegramConfigured(): boolean {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (isPlaceholderValue(token) || isPlaceholderValue(chatId)) return false;
  return Boolean(token && chatId);
}

export async function sendTelegramNotification(
  input: TelegramNotifyInput,
): Promise<TelegramNotifyResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    return {
      ok: false,
      skipped: true,
      message: "Chưa cấu hình TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID.",
    };
  }

  const text = `${input.title}\n\n${input.body}`.slice(0, 4000);

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
      },
    );

    const payload = (await response.json()) as {
      ok?: boolean;
      description?: string;
      result?: { message_id?: number };
    };

    if (!response.ok || !payload.ok) {
      console.error("Telegram API error:", payload);
      return {
        ok: false,
        message: payload.description || "Không gửi được Telegram.",
      };
    }

    return {
      ok: true,
      messageId: payload.result?.message_id,
    };
  } catch (error) {
    console.error("Telegram request failed:", error);
    const message =
      error instanceof Error ? error.message : "Không kết nối được Telegram.";
    return {
      ok: false,
      message,
    };
  }
}
