import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      smd: '600px',
      md: '825px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'primary': '#1D3557',
        'secondary': '#F2F4F7',
        'accent': '#FF4F18',
        'light': '#FFFFFF',
        'dark': '#141517'
      },
      fontFamily:{
        'primary': ['var(--font-playfair-display)'],
        'secondary': ['var(--font-lato)'],
      }
    },
  },
  plugins: [],
};
export default config;
