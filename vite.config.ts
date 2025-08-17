import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Replace "Saran-Portfolio" with your repo name
export default defineConfig({
 base: "/SARAN-PORTFOLIO/", 
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
