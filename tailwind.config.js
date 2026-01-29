/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Blueprint Navy - main background
        navy: {
          950: '#0a1628',
          900: '#0f2340',
          800: '#1a3556',
          700: '#254a6e',
          600: '#2f5f87',
        },
        // Blueprint Cyan - accent color
        cyan: {
          500: '#22d3ee',
          400: '#67e8f9',
          300: '#a5f3fc',
        },
        // Paper/Cream - for cards and panels
        paper: {
          50: '#fefdfb',
          100: '#faf8f3',
          200: '#f5f0e6',
        },
        // Keep orange for CTAs only
        cta: {
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'blueprint-grid': `
          linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'blueprint-grid': '24px 24px',
      },
    },
  },
  plugins: [],
}
