const webpack = require("webpack");
const commonConfig = require("./webpack.common.config.js");

commonConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

commonConfig.devServer = {
  historyApiFallback: true,
  hot: true
};

commonConfig.devtool = "source-map";

module.exports = commonConfig;
