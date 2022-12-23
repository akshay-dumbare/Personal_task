const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry: "index.ts",
  mode: process.env.RUNTIME_ENV !== 'Development' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  plugins: [
    new NodemonPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    modules: [
        __dirname, 
        __dirname + "/src", 
        __dirname + "/node_modules",
    ],
  },
  target: "node",
};
