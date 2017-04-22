export default [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: true
    }
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  },
  {
    test: /.styl$/,
    loader: ['style-loader', 'css-loader', 'stylus-loader']
  }
]
