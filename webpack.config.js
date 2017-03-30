const path = require('path');

const outputPath = process.env.OUTPUT_PATH ? process.env.OUTPUT_PATH : 'lib';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, outputPath)
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }]
  }
};
