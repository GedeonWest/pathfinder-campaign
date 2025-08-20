import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
// @ts-expect-error exports in package.json not working
import eslint from "vite-plugin-eslint";
import { resolve } from "path";

process.env = { ...process.env, ...loadEnv("", process.cwd()) };

export default defineConfig({
    plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }), eslint()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "@components": resolve(__dirname, "src/components"),
            "@assets": resolve(__dirname, "src/assets"),
            "@styles": resolve(__dirname, "src/styles"),
        },
    },
    base: "/",
    server: {
        host: true,
        port: 3000,
        proxy: {
            "/api": {
                target: "http://localhost:8813",
                changeOrigin: true,
                secure: true,
            },
            "/storage": {
                target: "http://localhost:8813",
                changeOrigin: true,
                secure: true,
            },
        },
        watch: {
            usePolling: true,
        },
    },
    css: {
        postcss: "./postcss.config.js",
    },
    build: {
      outDir: 'build',
  }
});
