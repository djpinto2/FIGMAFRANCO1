import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#4CAF4F',
        },
        neutral: {
          darkGray: '#4D4D4D',
          charcoal: '#263238',
          mediumGray: '#717171',
          lightGray: '#89939E',
          bgLight: '#F5F7FA',
        },
        accent: {
          purple: '#5417D7',
          navy: '#3B4158',
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
export default config

