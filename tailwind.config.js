/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      myblue: '#00214d',
      mydarkblue: '#001532',
      mywhite: '#ffffff',
      spotifydarkgray: '#121212',
      spotifylightgray: '#b3b3b3',
      black: '#000000',
      errorred: '#900603',
    },
  },
  plugins: [],
}


