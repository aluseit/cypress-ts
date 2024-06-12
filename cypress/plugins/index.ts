/* const webpack = require("@cypress/webpack-preprocessor");

module.exports = on => {
  const options = {
    webpackOptions: require("../webpack.config.js")
  };
  on("file:preprocessor", webpack(options));
}; */

const cucumber = require('cypress-cucumber-preprocessor').default;
const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on: any, config: Cypress.PluginConfigOptions): Cypress.PluginConfigOptions => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: 'ts-loader'
              }
            ]
          },
          {
            test: /\.feature$/,
            use: [
              {
                loader: 'cypress-cucumber-preprocessor/loader'
              }
            ]
          }
        ]
      }
    },
  };

  on('file:preprocessor', webpack(options));
  on('file:preprocessor', cucumber());
  return config;
};
