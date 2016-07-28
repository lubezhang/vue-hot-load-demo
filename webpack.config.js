// nodejs 中的path模块
module.exports = {
  entry: './index.js',
  output: {
    path: './build',
    publicPath: 'build/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  }
}