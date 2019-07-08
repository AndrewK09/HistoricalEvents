const path = require('path');

const config = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env', 'react', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
