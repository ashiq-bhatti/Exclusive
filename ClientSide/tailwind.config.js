/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#00FF66',
        customRed: '#DB4444',
        customGray:'#F5F5F5',

        customeYellow:'#FFAD33'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

