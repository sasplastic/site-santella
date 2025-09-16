import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isWpTheme = process.env.WP_THEME === "1";
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: isWpTheme ? "" : undefined,
    build: isWpTheme
      ? {
          manifest: true,
          outDir: "wp-theme/santella/dist",
          emptyOutDir: true,
        }
      : undefined,
  };
});
