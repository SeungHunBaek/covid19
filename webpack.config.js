const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/index.tsx',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      { 
        test: /\.css$/, 
        use: 'css-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    proxy: {
      "/": "http://localhost"
  }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ]
}
