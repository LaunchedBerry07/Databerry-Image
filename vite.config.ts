import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  // This is a critical line that tells Vite where the "root" of the frontend app is.
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    // This ensures the output goes to the correct directory for our server to find it.
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
});