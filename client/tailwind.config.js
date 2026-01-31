import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  plugins: [tailwindcss()],
});
