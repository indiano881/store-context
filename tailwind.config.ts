import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xsm': '400px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        "infinite-scroll-left": "infinite-scroll-left 65s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 65s linear infinite",
      },
      keyframes: {
        "infinite-scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      colors: {
        "pt-primary": "#FFFFFF",
        "pt-secondary": "#0C051D",
        "pt-calmgreen": "#1D6453",
        "pt-background": "#ECF2F1",
        "pt-darkblue1": "#14243C",
        "pt-darkblue2": "#2A394E",
        "pt-gray1": "#868686",
        "pt-lightgrayborder": "#E8E8E8",
        "pt-gray2": "#F9F9F9",
        "pt-navyblue":"#0B051D",
        "bg-matilda": "#3B3B3B",//check #262626 otherwise?
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
