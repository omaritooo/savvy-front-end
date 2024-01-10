/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        lp: "1440px",
        "2xl": "1680px",
      },
      container: {
        center: true,
        padding: "1.25rem",
        screens: {
          xs: "440px",
          sm: "570px",
          md: "708px",
          lg: "984px",
          xl: "1180px",
          lp: "1340px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
