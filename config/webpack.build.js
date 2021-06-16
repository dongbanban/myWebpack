/*
 * @Author: your name
 * @Date: 2021-06-07 18:26:18
 * @LastEditTime: 2021-06-16 19:00:43
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
      // async：异步导入， initial：同步导入， all：异步/同步导入
      chunks: 'all'
      // // 最小尺寸: 单位是字节，如果拆分出来一个, 那么拆分出来的这个包的大小最小为minSize
      // minSize: 20000,
      // // 将大于maxSize的包, 拆分成不小于minSize的包
      // maxSize: 30000,
      // minChunks表示引入的包, 至少被导入了几次 【才拆分】
      // minChunks: 1,
      // cacheGroups: {
      //   // 【vendor：供应商。所有第三方的东西匹配到了后，打包到vendor里，不是必须叫vendor，可以自定义】
      //   // vendor: {
      //   //   test: /[\\/]node_modules[\\/]/, // 这里是路径，匹配windows、mac平台
      //   //   filename: '[id]_vendors.js',
      //   //   // name: "vendor-chunks.js",
      //   //   priority: -10 // 优先级，都是写负数
      //   // },
      //   recoil: {
      //     test:/recoil/,
      //     filename: '[contenthash:6]-recoil.js',
      //   },
      //   // default: {
      //   //   // 如果一个文件被引入了2次，就单独打包出来一个js文件
      //   //   minChunks: 2,
      //   //   filename: 'common_[id].js',
      //   //   priority: -20
      //   // }
      // }
    }
  }
})
