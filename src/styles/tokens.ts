/**
 * Design tokens for the portfolio site.
 * Centralized configuration for colors, typography, spacing, shadows, etc.
 */

export const colors = {
  // Primary palette
  primary: {
    DEFAULT: "#6C63FF",
    light: "#8B83FF",
    dark: "#4F46E5",
    50: "#EEECFF",
    100: "#D5D3FF",
    200: "#B3AFFF",
    300: "#918CFF",
    400: "#6C63FF",
    500: "#4F46E5",
    600: "#3730A3",
    700: "#2E2887",
    800: "#23206B",
    900: "#191750",
  },
  // Background
  bg: {
    primary: "#0A0A0F",
    secondary: "#111118",
    tertiary: "#1A1A24",
    card: "#16161E",
    cardHover: "#1E1E28",
  },
  // Text
  text: {
    primary: "#F5F5F7",
    secondary: "#A1A1AA",
    muted: "#71717A",
    accent: "#6C63FF",
  },
  // Borders
  border: {
    DEFAULT: "#27272A",
    light: "#3F3F46",
    accent: "#6C63FF",
  },
  // Status
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
};

export const typography = {
  fontFamily: {
    sans: '"Inter", system-ui, -apple-system, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
  },
};

export const spacing = {
  section: {
    paddingY: "6rem",
    paddingX: "1.5rem",
  },
  container: {
    maxWidth: "1200px",
  },
};

export const shadows = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.3)",
  md: "0 4px 6px rgba(0, 0, 0, 0.3)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.3)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.3)",
  glow: "0 0 20px rgba(108, 99, 255, 0.3)",
  glowLg: "0 0 40px rgba(108, 99, 255, 0.2)",
};

export const borderRadius = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
  full: "9999px",
};

export const animation = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
};
