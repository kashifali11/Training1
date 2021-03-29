const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: {
      index: "/",
    },
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: [/nodeModules/],
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.jsx/,
        exclude: [/nodeModules/],
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        exclude: [/nodeModules/],
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],

  devtool: "inline-source-map",
};
