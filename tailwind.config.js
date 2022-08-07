/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Components/**/*.{jsx, js}",
    "./src/Components/IconComponents/**/*.{jsx, js}",
  ],
  theme: {
    fontFamily: {
      body: ["Poppins"],
      number: ["Rubik"],
    },

    extend: {
      colors: {
        primary: "#F67E57",
        secondary: {
          100: "#F6FAFF",
          200: "#DDEDF8",
          300: "#D4E8F3",
          400: "#abccdf",
          500: "#486575",
          600: "#334F60",
        },
      },
      fontSize: {
        xxs: ".625rem",
      },
    },
  },
  plugins: [],
};
