/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import preserveDirectives from "rollup-preserve-directives";

// https://vitejs.dev/config/
import path from "node:path";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
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
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
    }),
  ],
  css: {
    transformer: "postcss",
  },
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    minify: "oxc",
    cssMinify: "esbuild",
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
          ]),
      ),
      output: {
        globals: {
          react: "React",
          "@emotion/react/jsx-runtime": "EmotionReactJsxRuntime",
          "@emotion/react": "EmotionReact",
        },
        assetFileNames: (chunkInfo) => {
          return chunkInfo.names[0].replaceAll(".module", "");
        },
        entryFileNames: (chunkInfo) => {
          return "[name].js";
        },
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
