/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      hvid: "#FFFFFF",
      sort: "#000000",
      beige: "#EBE1CE",
      orange: "#FF7556",
      lysegron: "#C8DEA4",
      morkegron: "#92A377",
      graagron: "#D3D9C8",
    },
    fontSize: {
      h1_mobil: "3.125rem",
      h2_mobil: "2rem",
      h3_mobil: "1.25rem",
      brodtekst_mobil: "1rem",
      h1_web: "6.25rem",
      h2_web: "4.375rem",
      h3_web: "3.125rem",
      brodtekst_web: "1.875rem",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
