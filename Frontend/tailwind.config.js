/** @type {import('tailwindcss').Config} */
export default {
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
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Fraunces', 'serif'],
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
    ],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}
