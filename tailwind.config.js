module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          neutral100: '#2A2D34',
          neutral200: '#3C4047',
          neutral300: '#4C5059',
          neutral400: '#60656D',
        },
        light: {
          neutral100: '#F8F9FA',
          neutral200: '#E9ECEF',
          neutral300: '#DEE2E6',
          neutral400: '#CED4DA',
        },
      },
    },
  },
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
};
