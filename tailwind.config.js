/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'rotate-swing': 'swing 2s ease-in-out infinite', // Añade la animación
      },
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },   // Empieza en posición normal
          '25%': { transform: 'rotate(15deg)' },       // Gira a 15 grados en sentido horario
          '50%': { transform: 'rotate(-15deg)' },      // Gira a -15 grados en sentido antihorario
          '75%': { transform: 'rotate(10deg)' },       // Vuelve un poco en sentido horario
        },
      },
      colors:{
        'dark-light': '#0B1B42',
        'dark-blue': '#000024',
        'light-blue': '#096798',
        'celeste': '#2C8DCE',
        "purple": "#B121FD",
        "purple-black": "#7163F6"
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

