const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["var(--font-IBM)", ...fontFamily.sans],
        lato: ["var(--font-Lato)", ...fontFamily.sans],
      },
    },
  },
   plugins: [require("@tailwindcss/line-clamp")],
};
