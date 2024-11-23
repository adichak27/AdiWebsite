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
        background: "var(--background)",
        foreground: "var(--foreground)",
        cosmic: {
          dark: '#0B0B1A',
          primary: '#4B0082',  // Deep Purple
          accent: '#9F2B68',   // Neon Purple
          glow: '#B24BF3',     // Glowing Purple
          light: '#C3B1E1',    // Light Purple
        }
      },
      boxShadow: {
        'cosmic': '0 0 20px rgba(178, 75, 243, 0.3)',
        'cosmic-lg': '0 0 30px rgba(178, 75, 243, 0.5)',
      }
    },
  },
  plugins: [],
} satisfies Config;
