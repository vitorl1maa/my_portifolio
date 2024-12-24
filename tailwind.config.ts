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
        background: "#f6f8fa",
        foreground: "#ffff",
        textColor: "#6a707f",
        elements: "#d5d5d4"
      },
    },
  },
  plugins: [],
} satisfies Config;
