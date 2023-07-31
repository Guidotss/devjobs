/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "gray":           "#9DAEC2",
      "white":          "#FFFFFF",
      "violet":         "#5964E0",
      "midnight":       "#121721",
      "dark_gray":      "#6E8098",
      "light_gray":     "#F4F6F8",
      "light_violet" :  "#939BF4",
      "very_dark_blue": "#19202D",
    }
  },
  plugins: [],
}
