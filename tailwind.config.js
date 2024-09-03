/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        main: "#FF916F",
        graid: "#0F0B07",
      },
      boxShadow: {
        "custom-white": "rgba(255, 255, 255, 0.15) 0px 5px 15px 0px",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 100%)",
      },
    },
    screens: {
      xsm: "350px",
      ssm: "465px",
      msm: "550px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      smd: "769px",
      mmd: "865px",
      nmd: "900px",
      // => @media (min-width: 768px) { ... }
      lmd: "992px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
