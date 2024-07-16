import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "heading":"40px",
      },
      colors: {
        "theme-1":"#115FAA",
        "theme-2":"#F49D02",
        "grade-1": "#8C8C8C",
        "grade-2": "#656565",
        "grade-3": "#404040"
      },
      padding: {
        "top-spacing": "8rem",
        "top-spacing-s": "5rem"
      },
      backgroundColor:{
        "theme-1":"#115FAA",
        "theme-2":"#F49D02"
      }
    },
  },
  plugins: [],
};
export default config;
