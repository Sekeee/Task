/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //common
        "light": "#FFFFFF",
        "light-40": "rgb(255,255,255, 0.4)",
        "darken": "#1E1F21",
        "dark-grey": "#2E2E30",
        "purple": "#9264F3",
        "purple-secondary": "rgba(146, 100, 243, 0.1)",
        "grey": "#696969",
        "disabled": "#A19FA1",
        "border": "#424244",
      },
    },
  },
  plugins: [],
}
