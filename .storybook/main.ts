import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  babel: (options) => {
    return {
      ...options,
      presets: [...options.presets, "@emotion/babel-preset-css-prop"],
    };
  },
  viteFinal: (config) => {
    return {
      ...config,
      build: {
        ...config.build,
        minify: false,
        sourcemap: false,
      },
    };
  },
};
export default config;
