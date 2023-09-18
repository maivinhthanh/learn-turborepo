// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors

module.exports = {
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'zoom-in': {
          '0%': { transform: scale(1, 1) },
          '100%': { transform: scale(0.7, 0.7) },
        },
        'zoom-out': {
          '0%': { transform: scale(0.7, 0.7) },
          '100%': { transform: scale(1, 1) },
        },
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
