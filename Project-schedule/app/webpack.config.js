const path = require("path"); // CommonJS

module.exports = {
  mode: "production",
  entry: "./public/js/main.js",
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "source-map",
};
