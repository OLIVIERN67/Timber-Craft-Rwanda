/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="timbercraft-dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'timbercraft': {
          'green': '#2D5A27',
          'dark-green': '#1E3D1A',
          'light-green': '#4A8C42',
          'dark': '#1A1A1A',
          'cream': '#F5F5F0',
          'wood': '#8B4513',
        },
        // Semantic, theme-aware tokens backed by CSS custom properties
        // (defined in index.css for :root and .dark). These automatically
        // swap between light/dark values — no `dark:` prefix needed.
        'theme-bg': 'var(--color-bg)',
        'theme-surface': 'var(--color-surface)',
        'theme-surface-alt': 'var(--color-surface-alt)',
        'theme-text': 'var(--color-text-primary)',
        'theme-text-secondary': 'var(--color-text-secondary)',
        'theme-border': 'var(--color-border)',
        'theme-primary': 'var(--color-primary)',
        'theme-primary-hover': 'var(--color-primary-hover)',
        'theme-primary-text': 'var(--color-primary-text)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Fraunces', 'serif'],
      },
      transitionDuration: {
        '350': '350ms',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        timbercraft: {
          "primary": "#2D5A27",
          "primary-content": "#ffffff",
          "secondary": "#8B4513",
          "secondary-content": "#ffffff",
          "accent": "#4A8C42",
          "accent-content": "#ffffff",
          "neutral": "#1A1A1A",
          "neutral-content": "#F5F5F0",
          "base-100": "#ffffff",
          "base-200": "#F5F5F0",
          "base-300": "#e7e5df",
          "base-content": "#1A1A1A",
          "info": "#3b82f6",
          "success": "#2D5A27",
          "warning": "#C97D3C",
          "error": "#dc2626",

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--tab-radius": "0.5rem",
        },
      },
      {
        "timbercraft-dark": {
          "primary": "#43813C",
          "primary-content": "#ffffff",
          "secondary": "#C97D3C",
          "secondary-content": "#0F172A",
          "accent": "#54A04A",
          "accent-content": "#0F172A",
          "neutral": "#F8FAFC",
          "neutral-content": "#0F172A",
          "base-100": "#1E293B",
          "base-200": "#0F172A",
          "base-300": "#334155",
          "base-content": "#F8FAFC",
          "info": "#3B82F6",
          "success": "#43813C",
          "warning": "#C97D3C",
          "error": "#ef4444",

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--tab-radius": "0.5rem",
        },
      },
    ],
    darkTheme: "timbercraft-dark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}
