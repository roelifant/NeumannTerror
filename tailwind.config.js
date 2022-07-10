/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'text-rose-500',
    'bg-rose-500',
    'to-rose-500',
    'text-purple-500',
    'bg-purple-500',
    'to-purple-500',
    'text-blue-500',
    'bg-blue-500',
    'to-blue-500',
    'text-green-300',
    'bg-green-300',
    'to-green-300',
    'text-orange-900',
    'bg-orange-900',
    'to-orange-900',
    'text-orange-300',
    'bg-orange-300',
    'to-orange-300',
    'text-black',
    'bg-black',
    'to-black',
    'text-gray-700',
    'bg-gray-700',
    'to-gray-700',
    'duration-[10000ms]'
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
