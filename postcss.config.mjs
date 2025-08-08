/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Changed from 'tailwindcss' to '@tailwindcss/postcss'
    autoprefixer: {},
  },
};

export default config;
