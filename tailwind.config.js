/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        // screens: {
        //   sm: "100%",
        //   md: "100%",
        //   lg: "1024px",
        //   xl: "1280px",
        // },
      },
      colors: {
        primary: {
          DEFAULT: "#FF2E2E",
          50: "#FFDADA",
          100: "#FFBEBE",
          200: "#FF8F8F",
          300: "#FF6060",
          400: "#FF3131",
          500: "#FF2E2E",
          600: "#FF0F0F",
          700: "#FF0C0C",
          800: "#FF0909",
          900: "#FF0303",
        },
        background: {
          DEFAULT: "#1d1d1d",
          50: "#f2f2f2",
          100: "#e6e6e6",
          200: "#bfbfbf",
          300: "#999999",
          400: "#4d4d4d",
          500: "#1d1d1d",
          600: "#1a1a1a",
          700: "#171717",
          800: "#141414",
          900: "#0f0f0f",
        },
      },
    },
  },
  plugins: [],
};
