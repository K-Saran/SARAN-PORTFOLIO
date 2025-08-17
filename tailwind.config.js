/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(0 0% 20%)", 
        background: "hsl(240 10% 5%)",
        foreground: "hsl(0 0% 100%)",
        card: "hsl(240 5% 15%)",

        // 🚀 Add neon project colors
        neon: {
          cyan: "#00ffff",
          magenta: "#ff00ff",
          purple: "#a020f0",
        }
      },
      boxShadow: {
        "neon-cyan": "0 0 10px #00ffff, 0 0 20px #00ffff",
        "neon-magenta": "0 0 10px #ff00ff, 0 0 20px #ff00ff",
        "neon-purple": "0 0 10px #a020f0, 0 0 20px #a020f0",
      }
    },
  },
  plugins: [],
}
