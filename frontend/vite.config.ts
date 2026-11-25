/// <reference types="vitest" />

import { createLogger, defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "node:path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import { browserslistToTargets } from 'lightningcss';
import browserslist from "browserslist"

// Svelte styles run through lightningcss before the Svelte compiler removes
// :global(), so lightningcss warns about every use of it. Only that message is dropped.
const logger = createLogger();
const warn = logger.warn;
logger.warn = (msg, options) => {
  if (msg.includes("'global' is not recognized as a valid pseudo-class")) return;
  warn(msg, options);
};

// Config
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_DEMO_BASE,
    customLogger: logger,
    compilerOptions: {
      hmr: !process.env.VITEST && mode !== 'production',
    },
    build: {
      cssMinify: 'lightningcss',
      minify: true,
      lib: {
        entry: resolve(import.meta.dirname, "src/main.ts"),
        name: "Loop",
        fileName: "loop",
        formats: ["es"],
      },
      outDir: "../assets",
      emptyOutDir: true,
    },
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        drafts: {
          customMedia: true
        },
        targets: browserslistToTargets(browserslist(["last 2 versions", ">= 0.4%", "not dead", "Firefox ESR", "not op_mini all", "not and_uc > 0"]))
      }
    },
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    plugins: [
      svelte({ compilerOptions: { customElement: true } }),
      cssInjectedByJsPlugin(),
      ViteEjsPlugin((viteConfig) => ({
        // viteConfig is the current Vite resolved config
        env: viteConfig.env,
      }))
    ],
    test: {
      globals: true,
      environment: "jsdom",
    },
    server: {
      allowedHosts: ['kirby-loop.test'],
      cors: {
        // Allow ddev and .test domains
        origin: /https?:\/\/([A-Za-z0-9\-.]+)?(\.(ddev\.site|test))(?::\d+)?$/,
      },
    }
  }
});
