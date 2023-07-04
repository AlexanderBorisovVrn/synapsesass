/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary:'#006363',
        light:'#009999',
        secondary:'#FFAA00',
        aluminium:'#888B8D',
        chrome:'#DBE2E9',
        blue:'#033E6B'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        permanent: ['var(--font-permanent)'],
      },
    },
  },
  plugins: [],
}
