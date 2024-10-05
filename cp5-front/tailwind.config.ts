import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebes': ['Bebas Neue', 'sans-serif'],
        'afacada': ['Afacad Flux'],
      },
      colors: {
        'rosa-escuro': '#b34775',
        'rosa-claro': '#ffe6f1', 
        'bege-claro': '#f8eee1',
        'laranja': '#B34753', 
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

