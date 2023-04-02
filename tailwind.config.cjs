/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        halloween: {
          ...require("daisyui/src/colors/themes")["[data-theme=halloween]"],
          "base-100": "#151d30",
          secondary: "#2dd4bf",
          accent: "#991b1b",
        },
      },
    ],
  },
};

module.exports = config;
