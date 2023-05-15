import type { StorybookConfig } from "@storybook/html-webpack5";
import { Configuration } from "webpack";

const webpack = require("webpack");

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-scss"],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [{ from: "../stories/public", to: "/" }],
  webpackFinal: async (config: Configuration) => {
    config.resolve!.alias = {
      ...config.resolve!.alias,
    };
    config.plugins = [
      ...config.plugins!,
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    ];
    config.module!.rules!.push({
      test: /\.tsx?$/,
      loader: "ts-loader",
      options: { configFile: "tsconfig.json" },
      exclude: /node_modules/,
    });
    return config;
  },
};
export default config;
