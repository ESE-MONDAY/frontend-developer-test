/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Sf-Pro-Thin": ["Sf Pro Display Thin"],
        "Sf-Pro-Ultralight": ["Sf Pro Display Ultralight"],
        "Sf-Pro-Light": ["Sf Pro Display Light"],
        "Sf-Pro-Regular": ["Sf Pro Display Regular"],
        "Sf-Pro-Medium": ["Sf Pro Display Medium"],
        "Sf-Pro-Semibold": ["Sf Pro Display Semibold"],
        "Sf-Pro-Bold": ["Sf Pro Display Bold"],
        "Sf-Pro-Heavy": ["Sf Pro Display Heavy"],

      },
      colors:{
        "primary": "#282A31",
        "gray-1": "#131417",
        "gray-2": "#18191D",
      }

    },
  },
  plugins: [],
}

