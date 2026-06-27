import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
          soft: "var(--accent-soft)",
        },
        violet: {
          DEFAULT: "var(--violet)",
          light: "var(--violet-light)",
        },
        navy: {
          DEFAULT: "#0F172A",
          soft: "#1E293B",
          muted: "#334155",
        },
        surface: {
          DEFAULT: "var(--surface)",
          elevated: "var(--surface-elevated)",
          muted: "var(--surface-muted)",
        },
        gold: {
          DEFAULT: "#B8860B",
          soft: "#D4A843",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "display-md": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
      },
      boxShadow: {
        soft: "0 2px 20px rgba(15, 23, 42, 0.04)",
        card: "0 4px 24px rgba(15, 23, 42, 0.06)",
        elevated: "0 8px 40px rgba(15, 23, 42, 0.08)",
        float: "0 20px 60px rgba(15, 23, 42, 0.1)",
        glow: "0 0 0 1px rgba(37, 99, 235, 0.08), 0 4px 24px rgba(37, 99, 235, 0.12)",
        "glow-violet": "0 0 0 1px rgba(124, 58, 237, 0.2), 0 4px 24px rgba(124, 58, 237, 0.25)",
        "glow-violet-lg": "0 8px 40px rgba(124, 58, 237, 0.35)",
        "hero-image": "0 25px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        drift: "drift 12s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        "bounce-gentle": "bounceGentle 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(12px, -18px) rotate(3deg)" },
          "66%": { transform: "translate(-8px, 10px) rotate(-2deg)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "gradient-subtle": "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(37,99,235,0.03) 100%)",
        "gradient-hero": "radial-gradient(ellipse 70% 60% at 70% 20%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        "gradient-section": "linear-gradient(180deg, var(--surface-muted) 0%, var(--background) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;