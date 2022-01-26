module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#1f2235",
        "primary-light": "#23273a",
        secondary: "#ff4a57",
      }),
      colors: {
        secondary: "#ff4a57",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
