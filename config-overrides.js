const fs = require('fs');
const webpack = require('webpack');

module.exports = (config, env) => {
  // Append sass loader to oneOf rule
  const oneOfRuleIndex = config.module.rules.findIndex(rule => rule.oneOf !== undefined);
  config.module.rules[oneOfRuleIndex].oneOf = [
    {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader",
      }],
    },
    ...config.module.rules[oneOfRuleIndex].oneOf,
  ];

  return config;
};
