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
        lG1: "hsl(261, 73%, 60%)",
        lG2: "hsl(261, 72%, 63%)",
        spG1: "hsl(189, 59%, 53%)",
        spG2: "hsl(189, 58%, 57%)",
      },
      keyframes: {
        fasterBounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        fasterBounce: "fasterBounce 0.5s infinite",
      },
    },
  },
  plugins: [],
};
