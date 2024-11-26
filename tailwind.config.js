/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ft-error': '#F03D3E',
        'ft-Success': '#007B40',
        'ft-Notificaiton': '#D84910',
        'ft-Pink': '#E85B81',
        'ft-purple': '#5E48E8',
        'ft-Highlight': '#8CE0F3',
        'ft-Black': '#252525',
        'ft-Gray-4': '#505050',
        'ft-Gray-3': '#B5B5B5',
        'ft-Gray-2': '#E1E1E1',
        'ft-Gray-1': '#F9F9F9',
      },
    },
    fontFamily: { roboto: ['Roboto', 'sans-serif'] }
  },
  plugins: [require('@tailwindcss/forms')],
}

