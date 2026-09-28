import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'Plus Jakarta Sans'",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      colors: {
        ink: "#E7EDF8",
        body: "#93A0B8",
        canvas: "#070D1B",
        surface: "#121A2E",
        elevated: "#1B2640",
        hairline: "#2C3A55",
        contrast: "#F4F7FB",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(148,163,184,0.06), 0 16px 40px -18px rgba(124,58,237,0.45)",
        "glow-lg": "0 0 0 1px rgba(148,163,184,0.08), 0 28px 70px -20px rgba(124,58,237,0.5)",
        "glow-pink": "0 16px 40px -16px rgba(236,72,153,0.45)",
        "inner-hairline": "inset 0 0 0 1px rgba(167,139,250,0.16)",
      },
      backgroundSize: {
        "auto-200": "200% 200%",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--float-rot, 0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--float-rot, 0deg))" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(24px, -32px) scale(1.08)" },
          "66%": { transform: "translate(-18px, 18px) scale(0.94)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        "grow-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        typewidth: {
          "0%": { width: "0%" },
          "100%": { width: "var(--w, 100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        blink: "blink 1.1s step-end infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "grow-line": "grow-line 0.6s cubic-bezier(0.16,1,0.3,1) both",
        typewidth: "typewidth 1.4s steps(20, end) both",
      },
    },
  },
  plugins: [],
};

export default config;
