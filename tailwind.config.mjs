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
      screens: {
        // les breakpoints personnalisés
        '3xs': '256px', // 16rem
        '2xs': '288px', // 18rem
        'xs': '320px',  // 20rem
        'sm': '384px',  // 24rem
        'md': '448px',  // 28rem
        'lg': '512px',  // 32rem
        'xl': '576px',  // 36rem
        '2xl': '672px', // 42rem
        '3xl': '768px', // 48rem
        '4xl': '896px', // 56rem
        '5xl': '1024px',// 64rem
        '6xl': '1152px',// 72rem
        '7xl': '1280px',// 80rem
      },
    },
  },
  plugins: [],
};
