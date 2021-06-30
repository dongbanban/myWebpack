/*
 * @Author: your name
 * @Date: 2021-06-07 18:26:32
 * @LastEditTime: 2021-06-30 09:10:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\config\webpack.dev.js
 */
const { merge } = require('webpack-merge')
const path = require('path')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    compress: true, // 为每个静态文件开启gzip
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true, // 启用 webpack 的 Hot Module Replacement 功能
    historyApiFallback: true,
    port: 8888,
    host: '0.0.0.0'
    // https: false,
    // proxy: {
    //     '/api': {
    //         target: 'http://localhost:3000',
    //         secure: false,
    //         // pathRewrite: {
    //         //     '^/api': ''
    //         // },
    //     }
    // },
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  }
})
