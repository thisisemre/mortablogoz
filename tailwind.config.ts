import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        look: {
          "0%, 100%": { transform: "translate(-50%, -50%)" },
          "25%": { transform: "translate(-25%, -50%)" },
          "50%": { transform: "translate(-50%, -25%)" },
          "75%": { transform: "translate(-75%, -50%)" },
        },
      },
      animation: {
        "look": "look 4s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
