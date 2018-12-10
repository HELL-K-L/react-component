const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log("kylin::::" + __dirname);
module.exports = {
  entry: {
    app: ["react-hot-loader/patch", path.join(__dirname, "../src/index.js")],
    vendor: ["react", "react-router-dom", "redux", "react-dom", "react-redux"]
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.join(__dirname, "../src")
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // replace ExtractTextPlugin.extract({..})
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(.+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // name:'./asset/fonts/[name].[ext]',
              //name: path.join(__dirname, '../asset/fonts/[name].[ext]'),
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "../src/index.html"),
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].[chunkhash:8].css"
    })
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      pages: path.join(__dirname, "../src/pages"),
      component: path.join(__dirname, "../src/component"),
      router: path.join(__dirname, "../src/router"),
      actions: path.join(__dirname, "../src/redux/actions"),
      reducers: path.join(__dirname, "../src/redux/reducers"),
      images: path.join(__dirname, "../src/images")
    }
  }
};
