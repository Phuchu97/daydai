"use client";

const PHONE = "0339689386";
const ZALO_URL = `https://zalo.me/${PHONE}`;
const MESSENGER_URL = "https://m.me/";

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
        className="ring-pulse flex items-center gap-2 rounded-full bg-[#0892d0] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#0892d0]/40 transition hover:-translate-y-0.5 hover:shadow-[#0892d0]/60 md:text-sm"
      >
        <span>Chat Zalo</span>
      </a>
      <a
        href={MESSENGER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="ring-pulse flex items-center gap-2 rounded-full bg-[#0084ff] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#0084ff]/40 transition hover:-translate-y-0.5 hover:shadow-[#0084ff]/60 md:text-sm"
      >
        <span>Messenger</span>
      </a>
    </div>
  );
}

