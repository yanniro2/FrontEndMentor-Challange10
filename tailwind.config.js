/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "Mobile": { "min": "375px", "max": "600px" }
    },
    colors: {

      // ### Primary
      "Pale-blue": "hsl(225, 100%, 94%)",
      "Bright-blue": "hsl(245, 75%, 52%)",

      // ### Neutral
      "Very-pale-blue": "hsl(225, 100%, 98%)",
      "Desaturated-blue": "hsl(224, 23%, 55%)",
      "Dark-blue": "hsl(223, 47%, 23%)",
    },
    fontSize: {
      'ms': '16px',
    },
    fontFamily: {
      'RedHat': ["Red Hat Display", "sans-serif"],
    },
    fontWeight: {
      'ms': 500,
      'lg': 700,
      'xl': 900
    },
    extend: {},
  },
  plugins: [],
}
