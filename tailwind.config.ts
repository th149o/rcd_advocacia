import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        gold: "var(--color-gold)",
        "gold-deep": "var(--color-gold-deep)",
        "off-white": "var(--color-off-white)",
        "ink-soft": "var(--color-ink-soft)",
        "gold-wash": "var(--color-gold-wash)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        quiet: "var(--shadow-quiet)",
        card: "var(--shadow-card)",
        gold: "var(--shadow-gold)",
      },
      borderRadius: {
        editorial: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
