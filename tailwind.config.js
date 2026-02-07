/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sf: {
          bg: '#0a0f0a',
          panel: '#0f1a0f',
          card: '#142014',
          border: '#1e3a1e',
          hover: '#1a2e1a',
          accent: '#2d5a2d',
          green: '#4a8c4a',
          bright: '#6abf6a',
          text: '#c8e6c8',
          muted: '#7a9f7a',
          dim: '#3a5a3a',
        }
      }
    },
  },
  plugins: [],
}
