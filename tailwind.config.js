/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080d1a", // Deep obsidian navy
        surface: "#0f172a", // Slate 900
        surfaceAlt: "#1e293b", // Slate 800
        primary: "#06b6d4", // Cyan 500
        primaryHover: "#22d3ee", // Cyan 400
        secondary: "#3b82f6", // Blue 500
        accent: "#6366f1", // Indigo 500
        text: "#f8fafc", // Slate 50
        muted: "#94a3b8", // Slate 400
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.25)',
        'glow-subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
