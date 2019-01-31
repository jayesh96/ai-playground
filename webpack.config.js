const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill','./index.js'],
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, './lib/t'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['file?name=[name].[ext]'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    // alias: { 'react-monaco-editor': MonacoEditorSrc }
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['json', 'javascript', 'typescript']
    }),
  ],
  devServer: { contentBase: './' },
  node: {
    fs: 'empty'
  }
}