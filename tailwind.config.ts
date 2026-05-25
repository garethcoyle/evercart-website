import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Brand palette — locked. See brief section 2.
      colors: {
        ink: "#000000",
        paper: "#FFFFFF",
        offwhite: "#F2F2F0",
        emerald: {
          DEFAULT: "#3DBF79",
          // Subtle tints for backgrounds (used very sparingly)
          50: "#F0FAF4",
          100: "#DCF3E5",
        },
        line: "#E5E5E5",
        surface: "#FAFAFA",
        meta: {
          DEFAULT: "#666666",
          500: "#888888",
          700: "#A3A3A3",
        },
        note: {
          bg: "#FFFBEB",
          border: "#FDE68A",
          text: "#92400E",
        },
      },
      fontFamily: {
        // `--font-manrope` is wired via next/font in app/layout.tsx
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial scale used for hero / display moments
        "display-sm": ["44px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        display: ["64px", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-lg": ["88px", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
      },
      letterSpacing: {
        label: "0.12em", // small caps labels
      },
      maxWidth: {
        hero: "1240px",
        wide: "1100px",
        prose: "760px",
        readable: "720px",
      },
      transitionTimingFunction: {
        // The Apple curve — used universally. Brief section 2.
        apple: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      transitionDuration: {
        180: "180ms",
        200: "200ms",
        280: "280ms",
        320: "320ms",
        500: "500ms",
      },
    },
  },
  plugins: [],
};

export default config;
