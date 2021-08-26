const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-postcss'
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

     config.plugins.push(
         new CopyPlugin({
           patterns: [
             {
               from: path.resolve(__dirname, '../static/fonts'),
               to:  'static/fonts',
             }
           ],
         }),
     )

    // config.module.rules.push({
    //   test: /\.(ttf|svg)$/,
    //   use: [
    //       {
    //         loader: 'file-loader',
    //         options: {
    //           name: '[name].[contenthash].[ext]',
    //           // outputPath: 'static/img',
    //           esModule: false
    //         }
    //       }
    //   ],
    //   include: path.resolve(__dirname, '../'),
    //
    // });
    // config.module.rules.push({
    //
    //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    //       use: ['file-loader'],
    //   //type: 'asset/inline',
    //     include: path.resolve(__dirname, '../')
    // })

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};