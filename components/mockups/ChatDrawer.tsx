import { X } from "lucide-react";

/**
 * ChatDrawer
 *
 * A small mockup of the in-dashboard support chat drawer. Used in WhatYouGet
 * block 04 to make "support that lives where the work happens" concrete —
 * no stock photography of headset-wearing agents, no team-in-meeting cliches.
 *
 * Static by design (no animated typing dots) to respect prefers-reduced-motion
 * by default and keep the streaming render quiet.
 */
export function ChatDrawer() {
  return (
    <div className="rounded-[14px] bg-paper border border-line overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12),0_4px_12px_-4px_rgba(0,0,0,0.06)] max-w-[440px] mx-auto">
      {/* Chat header */}
      <div className="px-5 py-3 bg-ink text-paper flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-emerald flex items-center justify-center text-[12px] font-extrabold text-ink">
            A
          </div>
          <div>
            <p className="text-[12px] font-bold leading-tight">
              Alex from Evercart
            </p>
            <p className="text-[10px] text-paper/60 mt-0.5">
              Replies in around 2 minutes
            </p>
          </div>
        </div>
        <X size={14} strokeWidth={2} className="text-paper/60" />
      </div>

      {/* Messages */}
      <div className="px-5 py-5 space-y-3 bg-surface/40 min-h-[180px]">
        {/* Merchant message (left, lighter) */}
        <div className="flex">
          <div className="bg-paper border border-line text-ink px-3.5 py-2 rounded-2xl rounded-bl-md max-w-[80%] text-[12px] leading-snug">
            How do I connect my custom domain haloskin.co?
          </div>
        </div>

        {/* Agent reply (right, dark) */}
        <div className="flex justify-end">
          <div className="bg-ink text-paper px-3.5 py-2 rounded-2xl rounded-br-md max-w-[80%] text-[12px] leading-snug">
            I&rsquo;ve added the DNS records on our side — once you point your
            CNAME to evercart.io, you&rsquo;ll be live. Want me to wait with you?
          </div>
        </div>

        {/* Timestamp */}
        <div className="text-center text-[10px] text-meta-700 pt-1">
          Just now
        </div>
      </div>

      {/* Input */}
      <div className="px-5 py-3 border-t border-line bg-paper flex items-center justify-between">
        <span className="text-[12px] text-meta">Type a message…</span>
        <div className="w-7 h-7 rounded-md bg-ink text-paper flex items-center justify-center text-[12px]">
          →
        </div>
      </div>
    </div>
  );
}
