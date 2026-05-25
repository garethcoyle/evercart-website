// The Apple iOS sheet-presentation curve. Used universally per brief section 2.
export const APPLE_CURVE = [0.32, 0.72, 0, 1] as const;

// Standard durations in seconds (Framer Motion uses seconds, CSS uses ms)
export const DURATIONS = {
  fast: 0.18, // button presses, small UI feedback
  base: 0.2,
  drawer: 0.28, // sheets, drawers
  transition: 0.32, // major transitions
  reveal: 0.5, // scroll-triggered reveals
} as const;

// Stagger between child reveals — keeps things elegant rather than synchronous
export const STAGGER = 0.06;
