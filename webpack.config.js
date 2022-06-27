const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"],
  },
  devServer: {
    host: "0.0.0.0",
    historyApiFallback: {
      index: "index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,

        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
