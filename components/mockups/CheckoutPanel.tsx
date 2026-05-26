import { CreditCard, Check } from "lucide-react";

/**
 * CheckoutPanel
 *
 * A focused checkout panel mockup showing the three payment gateways
 * (Stripe, PayPal, PayFast). Used in WhatYouGet block 02 to make the
 * "Sell with whatever your customers carry" claim visually concrete.
 *
 * PayPal is shown as the selected option to make the radio behaviour read.
 */
export function CheckoutPanel() {
  return (
    <div className="rounded-[14px] bg-paper border border-line overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12),0_4px_12px_-4px_rgba(0,0,0,0.06)] max-w-[460px] mx-auto">
      {/* Header */}
      <div className="px-6 py-4 border-b border-line">
        <h4 className="font-bold text-[14px] text-ink">Choose payment</h4>
        <p className="text-[12px] text-meta mt-0.5">
          Niacinamide 10% Serum · 1 item
        </p>
      </div>

      {/* Payment options */}
      <div className="p-3 space-y-2 bg-surface/40">
        {/* Stripe */}
        <PaymentOption label="Stripe" sub="Card or Apple Pay" selected={false} />
        {/* PayPal (selected) */}
        <PaymentOption label="PayPal" sub="Pay with your PayPal account" selected />
        {/* PayFast */}
        <PaymentOption label="PayFast" sub="Instant EFT, SnapScan, Zapper" selected={false} />
      </div>

      {/* Order summary footer */}
      <div className="px-6 py-4 border-t border-line bg-paper">
        <div className="flex items-baseline justify-between text-[12px] mb-3">
          <span className="text-meta">Order total</span>
          <span className="font-bold text-[14px] text-ink">$28.00</span>
        </div>
        <div className="w-full bg-ink text-paper py-2.5 rounded-md text-[12px] font-semibold flex items-center justify-center">
          Complete order
        </div>
      </div>
    </div>
  );
}

function PaymentOption({
  label,
  sub,
  selected,
}: {
  label: string;
  sub: string;
  selected: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-md border bg-paper transition-colors duration-200 ease-apple ${
        selected ? "border-emerald" : "border-line"
      }`}
    >
      {/* Radio */}
      <div
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
          selected ? "border-emerald bg-emerald" : "border-line"
        }`}
      >
        {selected && <Check size={9} strokeWidth={3} className="text-paper" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-semibold text-ink leading-tight">
          {label}
        </p>
        <p className="text-[10px] text-meta mt-0.5">{sub}</p>
      </div>
      <CreditCard size={14} strokeWidth={2} className="text-meta flex-shrink-0" />
    </div>
  );
}
