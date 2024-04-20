/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        rG1: "hsl(349, 71%, 52%)",
        rG2: "hsl(349, 70%, 56%)",
        sG1: "hsl(39, 89%, 49%)",
        sG2: "hsl(40, 84%, 53%)",
        pG1: "hsl(230, 89%, 62%)",
        pG2: "hsl(230, 89%, 65%)",
        bG1: "hsl(214, 47%, 23%)",
        bG2: "hsl(237, 49%, 15%)",
      },
    },
  },
  plugins: [],
};
