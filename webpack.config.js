const path = require('path');

const paths = {
  output: path.resolve(__dirname, 'build'),
  source: path.resolve(__dirname, 'src'),
};

module.exports = {
  entry: path.join(paths.source, 'app.js'),
  output: {
    path: paths.output,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: paths.source,
    port: 3000,
  },
};
