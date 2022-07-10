/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    
    // colors
    'text-black',
    'bg-black',
    'to-black',
    'text-red',
    'bg-red',
    'to-red',
    'text-red-light',
    'bg-red-light',
    'to-red-light',
    'text-blue',
    'bg-blue',
    'to-blue',
    'text-blue-light',
    'bg-blue-light',
    'to-blue-light',
    'text-orange',
    'bg-orange',
    'to-orange',
    'text-orange-light',
    'bg-orange-light',
    'to-orange-light',
    'text-brown',
    'bg-brown',
    'to-brown',
    'text-brown-light',
    'bg-brown-light',
    'to-brown-light',
    'text-cyan',
    'bg-cyan',
    'to-cyan',
    'text-cyan-light',
    'bg-cyan-light',
    'to-cyan-light',
    'text-green',
    'bg-green',
    'to-green',
    'text-green-light',
    'bg-green-light',
    'to-green-light',
    'text-yellow',
    'bg-yellow',
    'to-yellow',
    'text-yellow-light',
    'bg-yellow-light',
    'to-yellow-light',
    'text-purple',
    'bg-purple',
    'to-purple',
    'text-purple-light',
    'bg-purple-light',
    'to-purple-light',
    'text-dark',
    'bg-dark',
    'to-dark',
    'text-gray',
    'bg-gray',
    'text-gray-light',
    'bg-gray-light',
    'text-gray-lighter',
    'bg-gray-lighter',
    'text-gray-dark',
    'bg-gray-dark',
    'text-gray-darker',
    'bg-gray-darker',

    // transitions
    'duration-[10000ms]'
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          'lighter': '#9999',
          'light': '#666666',
          DEFAULT: '#4d4d4d',
          'dark': '#333333',
          'darker': '#1a1a1a',
        },
        'blue': {
          DEFAULT: '#5b74ff',
          'light': '#adbaff'
        },
        'red': {
          DEFAULT: '#ff5b74',
          'light': '#ffadba'
        },
        'red': {
          DEFAULT: '#ff5b74',
          'light': '#ffadba'
        },
        'green': {
          DEFAULT: '#74ff5b',
          'light': '#baffad'
        },
        'yellow': {
          DEFAULT: '#f9ff5b',
          'light': '#fcffad'
        },
        'purple': {
          DEFAULT: '#e65bff',
          'light': '#f3adff'
        },
        'cyan': {
          DEFAULT: '#5bffe6',
          'light': '#adfff3'
        },
        'orange': {
          DEFAULT: '#FFA85B',
          'light': '#ffd4ad'
        },
        'brown': {
          DEFAULT: '#7D4E25',
          'light': '#bea792'
        },
        'dark': {
          DEFAULT: '#402b8c'
        }
      },
      keyframes: {
        neumann: {
          '0%': {transform: 'translateY(5px)'},
          '100%': {transform: 'translateY(-5px)'},
        },
        terror: {
          '0%': {transform: 'translateY(10px)'},
          '100%': {transform: 'translateY(-10px)'},
        },
        menuPlanet1: {
          '0%': {transform: 'translate(5px, -5px)'},
          '50%': {transform: 'translate(-5px, 5px)'},
          '100%': {transform: 'translate(0px, 0px)'},
        },
        menuPlanet2: {
          '0%': {transform: 'translate(0px, 0px)'},
          '50%': {transform: 'translate(-5px, -5px)'},
          '100%': {transform: 'translate(5px, 5px)'},
        },
        menuPlanet3: {
          '0%': {transform: 'translate(5px, 0px)'},
          '50%': {transform: 'translate(-5px, 0px)'},
          '100%': {transform: 'translate(0px, -5px)'},
        },
        menuPlanet4: {
          '0%': {transform: 'translate(-5px, 0px)'},
          '50%': {transform: 'translate(5px, 5px)'},
          '100%': {transform: 'translate(5px, 5px)'},
        }
      },
      boxShadow: {
        'neumann': '5px 5px 0 #1a1a1a'
      }
    },
  },
  plugins: [],
}
