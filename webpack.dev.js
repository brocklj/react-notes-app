/* eslint-disable no-undef */
const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const htmlPlugin = new HTMLWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    open: true,
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
      'X-Custom-Header': 'yes'
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [htmlPlugin, new Dotenv()]
};
