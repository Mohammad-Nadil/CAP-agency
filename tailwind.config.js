/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "#3661FC",
        secondary: "#888888",
        moving: "#4043AF",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "serif"],
      DM: ['"DM Sans"', "serif"],
    },
    boxShadow: {
      cardShadow: "0 10px 20px rgba(47, 21, 135 , 0.06)",
    },
  },
  plugins: [],
};