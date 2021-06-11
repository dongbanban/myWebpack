/*
 * @Author: your name
 * @Date: 2021-06-07 18:26:18
 * @LastEditTime: 2021-06-11 12:25:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\config\webpack.build.js
 */
const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      `...`,
      new CssMinimizerPlugin() // 使用 cssnano 优化和压缩 CSS
    ],
    chunkIds: 'deterministic',
    // 提取公共代码
    splitChunks: {
      chunks: 'all'
    }
  }
})
