/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#887350",
      },
      textDecorationColor: {
        primary: "#887350",
      },
      fontFamily: {
        "tinos-regular": ["Tinos-Regular"],
        "tinos-italic": ["Tinos-Italic"],
        "tinos-bold": ["Tinos-Bold"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
