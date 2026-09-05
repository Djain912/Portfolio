const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Fluid scale — each value interpolates smoothly between mobile and desktop
        // instead of jumping at breakpoints.
        'fluid-xs':   ['clamp(0.6875rem, 0.66rem + 0.12vw, 0.75rem)',   { lineHeight: '1.5' }],
        'fluid-sm':   ['clamp(0.8125rem, 0.79rem + 0.12vw, 0.875rem)',  { lineHeight: '1.6' }],
        'fluid-base': ['clamp(0.9375rem, 0.9rem + 0.19vw, 1.0625rem)',  { lineHeight: '1.7' }],
        'fluid-lg':   ['clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)',       { lineHeight: '1.65' }],
        'fluid-xl':   ['clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem)',      { lineHeight: '1.45', letterSpacing: '-0.01em' }],
        // Headings
        'fluid-h3':   ['clamp(1.125rem, 1rem + 0.5vw, 1.375rem)',       { lineHeight: '1.35', letterSpacing: '-0.01em' }],
        'fluid-h2':   ['clamp(1.375rem, 1.15rem + 0.9vw, 1.875rem)',    { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        // Big section titles ("Projects", "Work Experience", ...)
        'fluid-section': ['clamp(2.25rem, 1.5rem + 3.2vw, 4.5rem)',     { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        // Hero name
        'fluid-hero': ['clamp(3rem, 1.9rem + 4.8vw, 6rem)',             { lineHeight: '1.02', letterSpacing: '-0.045em' }],
      },
      maxWidth: {
        prose: '68ch',
      },
      screens: {
        xs: '420px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,0.04), 0 8px 24px -12px rgba(16,24,40,0.12)',
        'card-hover': '0 2px 4px rgba(16,24,40,0.04), 0 24px 48px -20px rgba(16,24,40,0.24)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [nextui()]
}
