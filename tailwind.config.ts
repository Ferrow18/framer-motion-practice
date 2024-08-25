import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#000",
      backgroundContrast: "#111",
      textBlack: "#1d1d1f",
      white: "#fff",
    },
    fontFamily: {
      sans: [
        "SF Pro Display",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1.0625rem",
      lg: ["1.1875rem", "1.21"], //second value line height
      xl: "1.3125rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": ["2.5rem", "1.1"],
      "5xl": ["4.5rem", "1.05"],
    },
    keyframes: {
      "carousel-move": {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(-100%)",
        },
      },
    },
    animation: {
      "carousel-move": "carousel-move var(--carousel-duration, 80s) infinite",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
