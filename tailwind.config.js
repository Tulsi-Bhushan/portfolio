module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs-sm': { 'min': '320px', 'max': '640px' },
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
      },
      colors: {
        first: "#B3C8CF",
        second:"#51829B",
        third:"#116A7B",
      },
    },
  },
  plugins: [],
};
