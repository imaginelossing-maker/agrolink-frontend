/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#0d631b",
        "on-primary":"#ffffff",
        background:"#fff8f6",
        "on-background":"#2b160f",

        "surface-container-lowest":"#ffffff",
        "surface-container-low":"#fff1ec",
        "surface-container":"#ffe9e2",
        "surface-container-high":"#ffe2d9",
        "surface-container-highest":"#ffdbce",

        "primary-container":"#2e7d32",
        "secondary-container":"#91f78e",

        outline:"#707a6c",
        "outline-variant":"#bfcaba",

        "on-surface-variant":"#40493d",
        "on-secondary-container":"#00731e",
        "on-primary-container":"#cbffc2"
      }
    }
  },
  plugins: [],
}