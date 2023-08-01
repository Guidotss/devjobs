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
      "gray": "#9DAEC2",
      "black": "#1F1F1F",
      "white": "#FFFFFF",
      "violet": "#5964E0",
      "almond": "#F2DECB",
      "old_gold": "#E99210",
      "midnight": "#121721",
      "vermilion": "#E54D25",
      "dark_gray": "#6E8098",
      "navy_blue": "#132034",
      "light_gray": "#F4F6F8",
      "royal_blue": "#21427D",
      "dark_purple": "#4E1853",
      "burnt_orange": "#F16718",
      "light_violet": "#939BF4",
      "emerald_green": "#37C790",
      "electric_blue": "#4722C6",
      "very_dark_blue": "#19202D",
      "dark_slate_gray": "#34353F",
    },
    animation: {
      'move-right' : 'moveRight 0.5s',
      'move-left' : 'moveLeft 0.5s',
    }
  },
  plugins: [],
}
