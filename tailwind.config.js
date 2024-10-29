/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For WebKit-based browsers (Chrome, Safari) */
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
};
