module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust the paths to match your project structure
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        marqueeReverse: 'marqueeReverse 10s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
