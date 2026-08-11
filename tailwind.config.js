/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: '#111112',
        paper: '#f8f5ef',
        citron: '#d6ff4d',
        coral: '#ff6b5a',
        aqua: '#30d5c8',
        violet: '#7c5cff',
      },
      boxShadow: {
        sharp: '8px 8px 0 #111112',
        glow: '0 0 48px rgba(48, 213, 200, 0.28)',
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        scan: 'scan 7s linear infinite',
        ticker: 'ticker 22s linear infinite',
        blink: 'blink 1s steps(2, start) infinite',
        pulseCode: 'pulseCode 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
