const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

module.exports = {
  devServer: {
    port: 8080,
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public")
  },
  entry: {
    app: "./src/app.jsx",
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: 'lib/[name]-[hash].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js.*$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }, 
      { test: /\.html$/, loader: 'html-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new FlowStatusWebpackPlugin({
      failOnError: true
    }),
  ],
  devtool: 'source-map'
}
