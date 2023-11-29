import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve("./src"),
      "@public": path.resolve("./public"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
