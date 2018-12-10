const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const commonConfig = require("./webpack.common.config.js");

commonConfig.entry = {
  app: ["@babel/polyfill", path.join(__dirname, "../src/index.js")],
  vendor: ["react", "react-router-dom", "redux", "react-dom", "react-redux"]
};

commonConfig.output = {
  path: path.join(__dirname, "../dist"),
  filename: "[name].[chunkhash].js",
  chunkFilename: "[name].[chunkhash].js",
  publicPath: "./"
};

commonConfig.plugins.push(
  new UglifyJSPlugin(),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }),
  new CleanWebpackPlugin(["dist"])
);

module.exports = commonConfig;
