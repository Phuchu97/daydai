"use client";

const PHONE = "0339689386";
const ZALO_URL = `https://zalo.me/${PHONE}`;

export function StickyContacts() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 md:bottom-6 md:right-6">
      <a
        href={`tel:${PHONE}`}
        className="ring-pulse flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition hover:-translate-y-0.5 hover:shadow-primary/60 md:text-sm"
      >
        <span>Gọi ngay</span>
      </a>
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="ring-pulse flex items-center gap-2 rounded-full border border-primary/30 bg-white/90 px-4 py-2 text-xs font-semibold text-primary shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-primary/35 md:text-sm"
      >
        <span>Chat Zalo</span>
      </a>
    </div>
  );
}

