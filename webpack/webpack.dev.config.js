const webpack = require("webpack");
const commonConfig = require("./webpack.common.config.js");

commonConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

commonConfig.devServer = {
  historyApiFallback: true,
  hot: true,
  proxy: {
    "/api/*": "http://localhost:8090/$1"
  }
};

commonConfig.devtool = "source-map";

module.exports = commonConfig;
