/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orchid: "#D988FF",
      azure: "#2FD3BA",
      purple: "#9488FF",
      lime: "#98C641",
      "orchid-dark": "#8438BA",
      "azure-dark": "#07564A",
      "purple-dark": "#4638BA",
      "lime-dark": "#416D00",
      "orchid-light": "#E8B8FF",
      "azure-light": "#82E5D6",
      "purple-light": "#BFB8FF",
      "lime-light": "#C1DD8D",
      "orchid-sx": "#D0CBFF",
      "azure-sx": "#A4ECE1",
      "purple-sx": "#EECBFF",
      "lime-sx": "#D2E6AC",
      dark: "#000000",
      white: "#ffffff",
    },
    fontFamily: {
      primary: ["Raleway", "sans-serif"],
      monts: ["Montserrat"],
      jakarta: ["Plus Jakarta Sans"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom: "5px 4px 8px #0000001A", // Add a custom shadow
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  corePlugins: {
    objectPosition: false,
  },
};
