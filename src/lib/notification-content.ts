import type { AttributionData } from "@/types/analytics";

export function formatAttributionText(attribution?: AttributionData): string {
  if (!attribution) return "";

  return [
    "",
    "Nguồn traffic:",
    `Landing: ${attribution.landingPath || "N/A"}`,
    `Referrer: ${attribution.referrer || "Direct"}`,
    `UTM: ${attribution.utmSource || "N/A"} / ${attribution.utmMedium || "N/A"} / ${attribution.utmCampaign || "N/A"}`,
  ].join("\n");
}

export function renderAttributionHtml(attribution?: AttributionData): string {
  if (!attribution) {
    return "<p><strong>Nguồn:</strong> Không có dữ liệu UTM</p>";
  }

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

type OrderItem = {
  name: string;
  variant?: string;
  price: number;
  quantity: number;
};

export function formatOrderItemsText(items: OrderItem[]): string {
  return items
    .map((item) => {
      const variant = item.variant ? ` | ${item.variant}` : "";
      const lineTotal = (item.price * item.quantity).toLocaleString("vi-VN");
      return `- ${item.name}${variant} x${item.quantity} = ${lineTotal}đ`;
    })
    .join("\n");
}

export function buildOrderNotificationText(input: {
  name: string;
  phone: string;
  address: string;
  items: OrderItem[];
}): { title: string; body: string; subtotal: number } {
  const subtotal = input.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const body = [
    `Tên: ${input.name}`,
    `SĐT: ${input.phone}`,
    `Địa chỉ: ${input.address}`,
    "Sản phẩm:",
    formatOrderItemsText(input.items),
    `Tạm tính: ${subtotal.toLocaleString("vi-VN")}đ`,
  ].join("\n");

  return {
    title: "ĐƠN ĐẶT HÀNG MỚI",
    body,
    subtotal,
  };
}
