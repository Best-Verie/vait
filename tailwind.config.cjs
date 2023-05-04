/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,tsx}"
  ],
  theme: {
    fontFamily: {
      "ubuntu": ["Ubuntu", "sans-serif"]
    },
    colors: {
      "primary": "#1A395A",
      "white": "#FFFFFF",
      "secondary": "#E9F3FE",
      "gray": {
        200: "#F8F8F8", 300: "#B7B7B7"
      },
      "black": "#000000",
      "dashboard": "#F5F6FA",
      "red": "#E12323",

    },
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
}