/**
 * ChatDrawerMockup
 *
 * A constructed mockup of the in-product support chat drawer described in
 * WhatYouGet block 04. Real-feeling exchange, no bot-pretending-to-be-a-person
 * artifacts.
 */

type Message = {
  side: "merchant" | "support";
  initial: string;
  name: string;
  body: string;
  time: string;
};

const THREAD: Message[] = [
  {
    side: "merchant",
    initial: "E",
    name: "Erika · Halo Skin Co.",
    body: "Hey — how do I connect a custom domain I bought elsewhere?",
    time: "2 min ago",
  },
  {
    side: "support",
    initial: "M",
    name: "Mira at Evercart",
    body: "Go to Storefront → Domains, then paste the domain in. We'll generate the DNS records you need to add at your registrar. Want me to walk you through it?",
    time: "Just now",
  },
];

export function ChatDrawerMockup() {
  return (
    <div className="bg-paper h-full flex flex-col rounded-[14px] overflow-hidden">
      {/* Drawer header */}
      <header className="flex items-center justify-between px-5 py-3.5 border-b border-line shrink-0">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="w-2 h-2 rounded-full bg-emerald"
            style={{ boxShadow: "0 0 0 3px rgba(61,191,121,0.18)" }}
          />
          <div>
            <p className="text-[12px] font-bold text-ink leading-tight">
              Support
            </p>
            <p className="text-[10px] text-meta">
              Real people · Usually replies in under 2 minutes
            </p>
          </div>
        </div>
        <span
          aria-hidden
          className="text-meta text-[14px] font-light"
        >
          ✕
        </span>
      </header>

      {/* Messages */}
      <div className="flex-1 px-4 sm:px-5 py-5 space-y-4 overflow-hidden bg-surface">
        {THREAD.map((msg, i) => {
          const isMerchant = msg.side === "merchant";
          return (
            <div
              key={i}
              className={`flex gap-2.5 ${isMerchant ? "" : "flex-row-reverse"}`}
            >
              <div
                aria-hidden
                className={[
                  "w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0",
                  isMerchant
                    ? "bg-[#FFD9C2] text-[#7A3A0F]"
                    : "bg-ink text-paper",
                ].join(" ")}
              >
                {msg.initial}
              </div>
              <div
                className={`flex-1 ${isMerchant ? "" : "flex flex-col items-end"}`}
                style={{ maxWidth: "85%" }}
              >
                <p
                  className={`text-[9px] font-semibold text-meta-700 mb-1 ${
                    isMerchant ? "" : "text-right"
                  }`}
                >
                  {msg.name}
                </p>
                <div
                  className={[
                    "px-3.5 py-2.5 rounded-2xl text-[12px] leading-snug",
                    isMerchant
                      ? "bg-paper border border-line text-ink rounded-tl-sm"
                      : "bg-ink text-paper rounded-tr-sm",
                  ].join(" ")}
                >
                  {msg.body}
                </div>
                <p className="text-[9px] text-meta-700 mt-1">{msg.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="px-4 sm:px-5 py-3 border-t border-line bg-paper shrink-0">
        <div className="flex items-center justify-between bg-surface rounded-lg px-3 py-2">
          <span className="text-[11px] text-meta-700">
            Type a message…
          </span>
          <span
            aria-hidden
            className="text-[11px] font-bold text-meta-700"
          >
            ↵
          </span>
        </div>
      </div>
    </div>
  );
}
