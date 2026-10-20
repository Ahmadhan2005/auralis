import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        background: "#F7F7F5",
        foreground: "var(--foreground)",
        border: "var(--border)",
        ring: "var(--ring)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        "primary-foreground": "var(--primary-foreground)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: "var(--destructive)",
        input: "var(--input)",
        surface: "#FCFCFB",
        "surface-low": "#F3F2EF",
        "surface-soft": "#F7F3F2",
        "surface-high": "#EBE7E6",
        "surface-variant": "#E5E2E1",
        secondary: "#C1CBC4",
        outline: "#E7E7E4",
        "outline-strong": "#C4C7C7",
        "on-primary": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Geist", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(3.5rem, 8vw, 6.75rem)", { lineHeight: "0.98", letterSpacing: "-0.075em", fontWeight: "600" }],
        section: ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.06em", fontWeight: "600" }],
        label: ["0.7rem", { lineHeight: "1", letterSpacing: "0.14em", fontWeight: "600" }],
      },
      maxWidth: {
        auralis: "1280px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 24px 80px -42px rgba(24, 24, 24, 0.22)",
        soft: "0 18px 50px -28px rgba(24, 24, 24, 0.18)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
