import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");

export default defineConfig({
  plugins: [fresh(), tailwindcss()],
  resolve: {
    alias: {
      "react": "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
      "lucide-react": resolve(import.meta.dirname, "lucide-icons.ts"),
      "@fontsource/fraunces": resolve(root, "node_modules/@fontsource/fraunces"),
      "@fontsource/recursive": resolve(root, "node_modules/@fontsource/recursive"),
      "@hi/website": resolve(import.meta.dirname, "../../packages/website/src"),
      "@hi/api": resolve(import.meta.dirname, "../../packages/api/src/index.ts"),
      "@hi/database": resolve(import.meta.dirname, "../../packages/database/src/index.ts"),
      "@hi/types": resolve(import.meta.dirname, "../../packages/types/src/index.ts"),
      "@hi/utils": resolve(import.meta.dirname, "../../packages/utils/src/index.ts"),
    },
  },
});
