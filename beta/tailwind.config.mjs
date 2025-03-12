/** @type {import('tailwindcss').Config} */
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
      },
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      keyframes: {
        bounceCustom: {
          "0%, 100%": { transform: "translateY(20px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        bounceCustom: "bounceCustom 2s infinite",
      },
    },
  },
  plugins: [],
};
