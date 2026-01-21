import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import preserveDirectives from "rollup-preserve-directives";
import { PreRenderedAsset, PreRenderedChunk } from "rollup";

// https://vitejs.dev/config/
import path from "node:path";
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    libInjectCss(),
    dts({
      include: ["src"],
    }),
  ],
  css: {
    modules: {},
    preprocessorOptions: {
      scss: {
      },
    },
  },
  build: {
    copyPublicDir: false,
    emptyOutDir: false,
    lib: {
      entry: resolve(dirname, "src/react-minolith.ts"),
      name: "ReactMinolith",
      fileName: "react-minolith",
      formats: ["es"],
    },
    sourcemap: true,
    rollupOptions: {
      plugins: [preserveDirectives()],
      external: [
        "react",
        "react/jsx-runtime",
        "@emotion/react",
        "@emotion/react/jsx-runtime",
      ],
      input: Object.fromEntries(
        glob
          .sync(["src/**/*!(*.d).{ts,tsx}"], {
            ignore: ["src/**/*.stories.tsx", "src/**/*.test.{ts,tsx}"],
          })
          .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        globals: {
          react: "React",
          "@emotion/react/jsx-runtime": "EmotionReactJsxRuntime",
          "@emotion/react": "EmotionReact",
        },
        assetFileNames: (chunkInfo: PreRenderedAsset) => {
          return `assets/[name][extname]`;
        },
        entryFileNames: (chunkInfo: PreRenderedChunk) => {
          return "[name].js";
        },
      },
    },
  },
});
