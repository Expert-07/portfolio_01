import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glsl"],
  base: "/"
    // Uncomment the following line if you want to use a custom base path
});