const path = require('path');
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
  plugins: [new HtmlWebpackPlugin()],
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
