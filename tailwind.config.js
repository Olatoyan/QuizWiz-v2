/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        bgColor: "#f5f5f5",
        primary: "#003d66",
        secondary: "#336485",
        textColor: "#333333",
        "cta-bg-color": "#668ba3",
        tertiary: "#012813",
        skew: {
          17: "17deg",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        besley: ["Besley", "serif"],
      },
    },
  },
  plugins: [],
};
