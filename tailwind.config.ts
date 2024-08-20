import { type Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        lg: '85ch',
      },
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
