// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // → if you ever want to pick up TS “paths” from tsconfig, you can
    //   install vite-tsconfig-paths and uncomment the next two lines:
    //
    // import tsconfigPaths from "vite-tsconfig-paths"
    // tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
