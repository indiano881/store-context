import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xsm': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        "infinite-scroll-left": "infinite-scroll-left 65s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 65s linear infinite",
      },
      colors: {
        "pt-primary": "#21528F",
        "pt-secondary": "#E0A73F",
        "pt-calmgreen": "#1D6453",
        "pt-background": "#ECF2F1",
        "pt-bluegray": "#556E8B",
        "pt-darkblue2": "#2A394E",
        "pt-gray1": "#556E8B",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        roboto: ["var(--font-roboto)"],
        bodoni: ['Bodoni', 'serif'],
      },
    },
  },
  plugins: [nextui()],
};

export default config;
