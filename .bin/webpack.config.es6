import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './playground/web/playground.es6'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'playground.js',
    publicPath: 'http://localhost:3001/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  module: {
    loaders: [{
      test: /\.es6$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules|blocks/
    }]
  }
};