/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue': '#000024',
        'dark-light': '#0B1B42',
        'light-blue': '#096798',
        'celeste': '#2C8DCE'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(175,33,252,1) 0%, rgba(27,190,238,1) 73%)',
        // 'custom-gradient2': 'linear-gradient(90deg, rgba(175,33,252,1) 0%, rgba(27,190,238,1) 73%)',
        'custom-gradient2': 'linear-gradient(90deg, rgba(177,33,253,1) 62%, rgba(98,115,245,1) 100%)'
      },
    },

  },
  plugins: [],
}

