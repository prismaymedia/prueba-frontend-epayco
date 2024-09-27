import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('postcss').Plugin} */
export default {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
  ],
};
