"use client";

import { useState } from "react";
import { ContactCtaLabel } from "@/components/contact/ContactCtaLabel";
import { QuoteIcon } from "@/components/contact/ContactIcons";
import { Section } from "../Section";
import { getStoredAttribution } from "@/lib/attribution";
import { trackConversion } from "@/lib/analytics";

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
      const attribution = getStoredAttribution();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, company, message, attribution }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Gửi thông tin thất bại.");
      }

      setStatus("success");
      setStatusMessage("Đã gửi yêu cầu báo giá. Chúng tôi sẽ liên hệ sớm.");
      setName("");
      setPhone("");
      setCompany("");
      setMessage("");

      trackConversion({
        conversionType: "lead_form",
        pathname: window.location.pathname,
        attribution: attribution ?? undefined,
      });
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
      <div className="section-intro">
        <p className="eyebrow">Tư vấn theo nhu cầu thực tế</p>
        <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl md:text-4xl">
          Nhận báo giá nhanh trong ngày
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Điền thông tin bên dưới hoặc gọi trực tiếp, chúng tôi sẽ tư vấn quy
          cách dây đai và gửi báo giá chi tiết.
        </p>
      </div>

      <div className="surface-card mt-8 mx-auto max-w-xl p-6">
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
                pattern="[0-9+\-\s]{8,15}"
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
            className="btn-lift mt-2 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_32px_-18px_rgba(25,61,112,0.84)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <ContactCtaLabel icon={<QuoteIcon className="h-4 w-4" />}>
              {submitting ? "Đang gửi..." : "Nhận báo giá nhanh"}
            </ContactCtaLabel>
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
          <a href="tel:0339.689.386" className="font-semibold text-primary">
            0339 689 386 (Mr. Phú)
          </a>{" "}
          hoặc Zalo cùng số.
        </p>
      </div>
    </Section>
  );
}

