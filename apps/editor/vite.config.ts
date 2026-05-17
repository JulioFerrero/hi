import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [fresh(), tailwindcss()],
  resolve: {
    alias: {
      "react/jsx-runtime": "preact/jsx-runtime",
      "react-dom": "preact/compat",
      "react": "preact/compat",
      "lucide-react": resolve(import.meta.dirname, "lucide-icons.ts"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "preact"],
  },
  ssr: {
    noExternal: ["@base-ui/react", "@base-ui/utils"],
  },
});
