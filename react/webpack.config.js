const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[hash].css",
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.EnvironmentPlugin({
      REACT_APP_API_BACK: "http://localhost:9000",
      REACT_APP_VERSION: "1.0.0",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      process: "process/browser",
    },
  },
};
