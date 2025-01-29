import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://nikemman.github.io/",
  optimizeDeps: {
    include: ["react-markdown"],
  },
  server: {
    cors: true,
  },
});
