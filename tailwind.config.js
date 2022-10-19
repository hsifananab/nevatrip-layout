/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: { body: ['"Open Sans"'] },
    extend: {
      backgroundColor: {
        'color-violet': '#7553FF',
        'color-blue': '#099CE8',
        'color-yellow': '#FFD83B',
      },
    },
  },
  plugins: [],
};
