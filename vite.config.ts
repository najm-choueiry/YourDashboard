import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfifPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [ tsconfifPaths()  , react()],
});
