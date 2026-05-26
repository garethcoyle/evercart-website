/**
 * Payment brand logos as inline SVG components.
 *
 * Each logo is sized via the className prop (set width/height on the parent
 * or pass classes here). All decorative — wrap in semantic context that
 * describes the payment method by text.
 *
 * Brand colours are the canonical hex values from each company's brand
 * guidance. Approximation, not pixel-perfect to official press kits.
 */

type LogoProps = { className?: string };

export function VisaLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 22"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <text
        x="32"
        y="17"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
        fontWeight="900"
        fontSize="17"
        fontStyle="italic"
        fill="#1A1F71"
        letterSpacing="0.4"
      >
        VISA
      </text>
    </svg>
  );
}

export function MastercardLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 36 22"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="13" cy="11" r="8.5" fill="#EB001B" />
      <circle cx="23" cy="11" r="8.5" fill="#F79E1B" />
      <path
        d="M18 4.6a8.5 8.5 0 0 1 0 12.8 8.5 8.5 0 0 1 0-12.8z"
        fill="#FF5F00"
      />
    </svg>
  );
}

export function AmexLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 36 22"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="36" height="22" rx="2.5" fill="#006FCF" />
      <text
        x="18"
        y="14"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
        fontWeight="900"
        fontSize="8"
        fill="white"
        letterSpacing="0.4"
      >
        AMEX
      </text>
    </svg>
  );
}

export function PayPalLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 22"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <text
        x="32"
        y="16"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
        fontWeight="900"
        fontSize="14"
        fontStyle="italic"
        letterSpacing="-0.4"
      >
        <tspan fill="#003087">Pay</tspan>
        <tspan fill="#009CDE">Pal</tspan>
      </text>
    </svg>
  );
}

export function ApplePayLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 56 22"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Apple silhouette — stylised, single path */}
      <path
        d="M13.7 5.6c-0.2 0.4-0.7 0.8-1.1 0.8-0.5 0-0.8-0.4-0.8-0.7 0-0.1 0.1-0.3 0.1-0.4 0.3-0.6 0.9-1 1.5-1.1 0.4 0 0.6 0.3 0.6 0.6 0 0.2-0.1 0.5-0.3 0.8zm0.7 1.6c-0.7 0-1.3 0.4-1.8 0.4-0.5 0-1-0.4-1.7-0.4-0.9 0-1.7 0.5-2.2 1.3-0.9 1.6-0.2 4 0.6 5.3 0.4 0.6 0.9 1.3 1.5 1.3 0.6 0 0.8-0.4 1.5-0.4 0.7 0 0.9 0.4 1.5 0.4 0.6 0 1-0.6 1.4-1.2 0.5-0.7 0.7-1.3 0.7-1.4-0.1 0-1.4-0.5-1.4-2 0-1.3 1-1.9 1.1-2-0.6-0.9-1.5-1-1.9-1-0.5 0-1 0.4-1.3 0.4z"
        fill="#000"
      />
      {/* "Pay" wordmark */}
      <text
        x="22"
        y="15"
        fontFamily="system-ui, -apple-system, 'SF Pro Display', BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
        fontWeight="500"
        fontSize="13"
        fill="#000"
        letterSpacing="-0.3"
      >
        Pay
      </text>
    </svg>
  );
}

export function StripeLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 56 22"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <text
        x="28"
        y="16"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="#635BFF"
        letterSpacing="-0.3"
      >
        stripe
      </text>
    </svg>
  );
}
