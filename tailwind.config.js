/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00bcd4",
        "secondary": "#ff9800"
      },
      minHeight: {
        "page": "calc(100vh - 5rem)"
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00bcd4",
          "secondary": "#ff9800",
          "accent": "#1A1736",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#1d4ed8",
          "success": "#22c55e",
          "warning": "#FBBD23",
          "error": "#dc2626",
        },
      },
    ],
  },
}
