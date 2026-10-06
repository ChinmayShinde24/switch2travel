/**
 * Switch 2 Travel — Departure Glow tokens.
 * Hex values live here and as CSS variables in src/app/globals.css.
 * Semantic surfaces (surface, ink, border, brand-sky-50) point at variables
 * so the light/dark toggle can restyle them without touching brand hues.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            900: "#0B1437",
            700: "#1B2A5C",
          },
          blue: {
            600: "#1272BB",
            500: "#2B6CD0",
          },
          sky: {
            400: "#3E94D1",
            50: "var(--brand-sky-50)",
          },
          red: {
            500: "#D93A2B",
          },
          orange: {
            500: "#F7941D",
          },
          amber: {
            400: "#FDB43F",
          },
        },
        ink: {
          900: "var(--ink-900)",
          600: "var(--ink-600)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          alt: "var(--surface-alt)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        display: ["var(--font-lobster)", "Segoe Script", "cursive"],
        heading: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        navy: "0 10px 30px -12px rgba(27, 42, 92, 0.12)",
        "navy-md": "0 16px 40px -18px rgba(27, 42, 92, 0.16)",
        "navy-lg": "0 24px 60px -24px rgba(27, 42, 92, 0.22)",
        glass: "0 12px 40px rgba(27, 42, 92, 0.12)",
      },
      backgroundImage: {
        sunrise: "var(--gradient-sunrise)",
        "deep-sky": "var(--gradient-deep-sky)",
      },
      borderRadius: {
        pill: "9999px",
        card: "1rem",
        media: "1.5rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "plane-glide": {
          "0%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "100%": { transform: "translate3d(6px, -3px, 0) rotate(-12deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 400ms ease-out both",
        shimmer: "shimmer 1.4s ease-in-out infinite",
        "plane-glide": "plane-glide 350ms ease-out both",
      },
      maxWidth: {
        measure: "70ch",
      },
    },
  },
};
