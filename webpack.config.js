import webpack from 'webpack';
import path from 'path';
let HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
  devtool: 'inline-source',
 // entry: ['webpack-hot-middleware/client?reload=true','index.js'],
  entry: ['webpack-hot-middleware/client?reload=true','./src/index'],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist/'),
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.tpls.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  target:'web',
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }

}

export default config;
