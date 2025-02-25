import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'hsl(var(--border))'
      },
      backgroundColor: {
        DEFAULT: 'hsl(var(--background))'
      },
      textColor: {
        DEFAULT: 'hsl(var(--foreground))'
      },
    },
  },
  darkMode: 'media',
  plugins: [],
}

export default config