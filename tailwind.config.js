/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255, 255, 255, 0.18)",
        "titleColor": "#000000",
        "secctionBg": "#212529",
        "backgroundBody": "#f8f9fe",
        "primary": "#7082e7",
        "warning": "#fb7050",
        "info": "#11cdef",
        "danger": "#f5365c",
        "success": "#2dce89",
        "default": "#172b4d",
        "perfilBg": "#5e72e4",
        "hoverBg": "#f6f9fc",
        "sideText": "#909090",
        "sideArrow": "#9da2a6",
        "hr-color": "#32363a",
        "label": "#5c6886",
      }
    },
  },
  plugins: [],
}