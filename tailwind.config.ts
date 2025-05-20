import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f8bbd0",
        secondary: "#f48fb1",
        accent: "#f06292",
        dark: "#880e4f",
        light: "#fff5f7",
      },
    },
  },
  plugins: [],
} satisfies Config;
