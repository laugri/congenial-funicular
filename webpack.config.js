const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  output: path.resolve(__dirname, 'build'),
  source: path.resolve(__dirname, 'src'),
};

const config = {
  entry: path.join(paths.source, 'app.js'),
  output: {
    path: paths.output,
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: paths.source,
    // hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
          },
        },
      },
    ],
  },
};

module.exports = config;
