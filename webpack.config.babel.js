import path from 'path'
import webpack from 'webpack'
import rules from './webpack.rules.babel'
const prod = (process.env.NODE_ENV === 'product')

const config = {
  cache: true,
  entry: {
    app: [
      './src/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {rules},
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000
  }
};

if (prod) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

export default config
