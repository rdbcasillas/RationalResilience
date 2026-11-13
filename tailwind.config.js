/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // One book serif for the whole site. (The hero sketch uses a
      // handwriting face for its labels, set in that component.)
      fontFamily: {
        serif: ['"EB Garamond"', "Georgia", "serif"],
      },
      // A warm page, dark text, and a single accent for links and actions.
      colors: {
        paper: "#FAF8F4",
        ink: "#1C1917",
        muted: "#57534E",
        line: "#E5DFD5",
        panel: "#EFEAE1", // pale tint behind a hero
        stone: "#E4DFD3", // flat block that holds a group of content
        accent: { DEFAULT: "#3A4A9F", dark: "#2C3A82" },
      },
    },
  },
  plugins: [],
};
