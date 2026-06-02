"use client";

import { useState } from "react";
import { getStoredAttribution } from "@/lib/attribution";
import { trackConversion } from "@/lib/analytics";

type QuickQuoteFormProps = {
  sourcePage: string;
  className?: string;
  title?: string;
};

export function QuickQuoteForm({
  sourcePage,
  className,
  title = "Nhận báo giá nhanh",
}: QuickQuoteFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [need, setNeed] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const submitLead = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const attribution = getStoredAttribution();
      const message = `Nguồn trang: ${sourcePage}\nNhu cầu: ${need || "Không có"}\nKhách muốn nhận báo giá nhanh.`;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          company,
          message,
          attribution,
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Không gửi được yêu cầu.");
      }

      setStatus("success");
      setStatusMessage("Đã ghi nhận yêu cầu. Chúng tôi sẽ liên hệ sớm.");
      setName("");
      setPhone("");
      setCompany("");
      setNeed("");

      trackConversion({
        conversionType: "lead_form",
        pathname: window.location.pathname,
        attribution: attribution ?? undefined,
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMessage("Không gửi được yêu cầu. Vui lòng gọi trực tiếp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={className}>
      <div className="surface-card p-6">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Điền thông tin để nhận tư vấn quy cách và báo giá trong ngày làm việc.
        </p>

        <form onSubmit={submitLead} className="mt-4 grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Họ tên *"
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/20 focus:ring-2"
            />
            <input
              required
              type="tel"
              pattern="[0-9+\-\s]{8,15}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Số điện thoại *"
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/20 focus:ring-2"
            />
          </div>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Công ty / nhà máy"
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/20 focus:ring-2"
          />
          <textarea
            rows={3}
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            placeholder="Nhu cầu: quy cách, tải trọng, khu vực giao..."
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/20 focus:ring-2"
          />
          <button
            type="submit"
            disabled={submitting}
            className="btn-lift inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Đang gửi yêu cầu..." : "Nhận báo giá nhanh"}
          </button>
        </form>

        {status !== "idle" && statusMessage && (
          <p
            className={`mt-3 text-sm ${
              status === "success" ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </section>
  );
}
