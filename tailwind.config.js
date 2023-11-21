/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    colors: {
      primary: "#f7f7f7",
      light: "#fff",
      dark: "#000",
      secondary: "#828282",
    },
    borderRadius: {
      "2xl": "24px",
      full: "9999px",
    },
    fontFamily: {
      popoins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "banner-img": "url('/src/assets/images/img.jpeg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
