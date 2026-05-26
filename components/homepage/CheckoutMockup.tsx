import { CreditCard, Check } from "lucide-react";

/**
 * CheckoutMockup
 *
 * A constructed mockup of the payment-method selection during checkout on a
 * Halo Skin Co. shop. Directly illustrates the multi-gateway claim in the
 * block copy (Stripe / PayPal / PayFast in the box, 0% transaction fees).
 *
 * Used in WhatYouGet block 02.
 */

type PaymentMethod = {
  id: string;
  name: string;
  detail: string;
  badge: string; // small text-only mark on the right
  selected?: boolean;
  cardIcon?: boolean;
};

const METHODS: PaymentMethod[] = [
  {
    id: "card",
    name: "Credit or debit card",
    detail: "Visa, Mastercard, Amex",
    badge: "via Stripe",
    selected: true,
    cardIcon: true,
  },
  {
    id: "paypal",
    name: "PayPal",
    detail: "Pay with your PayPal balance",
    badge: "PayPal",
  },
  {
    id: "applepay",
    name: "Apple Pay",
    detail: "One-tap with your saved card",
    badge: "Apple Pay",
  },
  {
    id: "payfast",
    name: "PayFast",
    detail: "Local rails for South Africa",
    badge: "PayFast",
  },
];

export function CheckoutMockup() {
  return (
    <div className="bg-paper h-full flex flex-col p-5 sm:p-7">
      {/* Header — what's being bought */}
      <div className="flex items-baseline justify-between pb-4 border-b border-line">
        <div>
          <p className="text-[9px] uppercase tracking-[0.14em] font-bold text-meta">
            Order total
          </p>
          <p className="mt-1 text-[26px] sm:text-[30px] font-extrabold tracking-[-0.025em] text-ink leading-none">
            $52.00
          </p>
        </div>
        <p className="text-[10px] text-meta-700 font-medium">
          Halo Skin Co. — 2 items
        </p>
      </div>

      {/* Payment methods */}
      <div className="mt-5 flex-1 flex flex-col gap-2">
        <p className="text-[9px] uppercase tracking-[0.14em] font-bold text-emerald mb-1">
          Choose how to pay
        </p>
        {METHODS.map((m) => (
          <div
            key={m.id}
            className={[
              "flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-colors",
              m.selected
                ? "border-ink bg-surface"
                : "border-line bg-paper",
            ].join(" ")}
          >
            <span
              aria-hidden
              className={[
                "shrink-0 w-4 h-4 rounded-full border flex items-center justify-center",
                m.selected ? "border-ink bg-ink" : "border-line",
              ].join(" ")}
            >
              {m.selected && (
                <Check
                  size={10}
                  strokeWidth={3}
                  className="text-paper"
                />
              )}
            </span>
            {m.cardIcon && (
              <CreditCard
                size={14}
                strokeWidth={2}
                className="text-ink shrink-0"
                aria-hidden
              />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-[12px] sm:text-[13px] font-semibold text-ink leading-tight">
                {m.name}
              </p>
              <p className="text-[10px] text-meta mt-0.5 truncate">
                {m.detail}
              </p>
            </div>
            <span className="text-[9px] uppercase tracking-[0.1em] font-bold text-meta-700 shrink-0">
              {m.badge}
            </span>
          </div>
        ))}
      </div>

      {/* Pay button */}
      <button
        type="button"
        aria-label="Pay"
        className="mt-5 w-full bg-ink text-paper text-[13px] font-semibold py-3 rounded-lg pointer-events-none"
      >
        Pay $52.00
      </button>
    </div>
  );
}
