"use client";

import { useState } from "react";
import { Section } from "../Section";

export function LeadFormSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, company, message }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Gửi thông tin thất bại.");
      }

      setStatus("success");
      setStatusMessage("Đã gửi yêu cầu báo giá. Chúng tôi sẽ liên hệ sớm nhất!");
      setName("");
      setPhone("");
      setCompany("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMessage(
        "Không gửi được thông tin. Vui lòng thử lại hoặc gọi/Zalo trực tiếp.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Nhận báo giá nhanh trong ngày
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Điền thông tin bên dưới hoặc gọi trực tiếp, chúng tôi sẽ tư vấn quy
          cách dây đai và gửi báo giá chi tiết.
        </p>
      </div>

      <div className="mt-8 mx-auto max-w-xl rounded-2xl border border-border bg-background p-6 shadow-sm">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="text-left">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-foreground"
              >
                Họ tên *
              </label>
              <input
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/20 focus:ring-2"
                placeholder="Ví dụ: Nguyễn Văn A"
              />
            </div>
            <div className="text-left">
              <label
                htmlFor="phone"
                className="block text-xs font-medium text-foreground"
              >
                Số điện thoại *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/20 focus:ring-2"
                placeholder="Số Zalo / di động"
              />
            </div>
          </div>
          <div className="text-left">
            <label
              htmlFor="company"
              className="block text-xs font-medium text-foreground"
            >
              Công ty
            </label>
            <input
              id="company"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/20 focus:ring-2"
              placeholder="Tên công ty / nhà máy (nếu có)"
            />
          </div>
          <div className="text-left">
            <label
              htmlFor="message"
              className="block text-xs font-medium text-foreground"
            >
              Nhu cầu của bạn
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/20 focus:ring-2"
              placeholder="Ví dụ: Dây đai cho pallet thép 1.5 tấn, dùng ngoài trời, cần tư vấn quy cách..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/40 transition hover:opacity-90"
          >
            {submitting ? "Đang gửi..." : "Nhận báo giá nhanh"}
          </button>
        </form>

        {status !== "idle" && statusMessage && (
          <p
            className={`mt-3 text-center text-xs ${
              status === "success" ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {statusMessage}
          </p>
        )}

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Hoặc gọi trực tiếp{" "}
          <a href="tel:0339689386" className="font-semibold text-primary">
            0339 689 386 (Mr. Phú)
          </a>{" "}
          hoặc Zalo cùng số.
        </p>
      </div>
    </Section>
  );
}

