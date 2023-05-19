/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,css}", "./views/*.ejs"],

  theme: {
    extend: {
      fontFamily: {
        Header: "Roboto",
        Body: "Poppins",
        Alt: "Pacifico",
      },
      colors: {
        papayawhip: {
          light: "#f6f4fe",
          DEFAULT: "#3e3f66",
          dark: "#6a49f2",
        },
      },
      screens: {
       
        // widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        // tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },

  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};

