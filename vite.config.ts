import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["src"] })],
  css: {
    modules: {
      globalModulePaths: [
        /.*\/src\/base\/Minolith\/.*/,
        /.*\/src\/base\/MinolithCssVariableStylesProvider\/.*/,
        /.*\/src\/base\/MinolithCssVariableStylesProviderStatic\/.*/,
        /.*\/src\/base\/MinolithStatic\/.*/,
      ],
    },
  },
  build: {
    copyPublicDir: false,
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/react-minolith.ts"),
      name: "ReactMinolith",
      fileName: "react-minolith",
      formats: ["es"],
    },
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob
          .sync("src/**/*!(*.d).{ts,tsx}", {
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
        },
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
