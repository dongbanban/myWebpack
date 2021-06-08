/*
 * @Author: your name
 * @Date: 2021-06-07 18:26:13
 * @LastEditTime: 2021-06-08 15:55:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\config\webpack.base.js
 */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ['@babel/polyfill', path.resolve('src/index.jsx')],
  output: {
    filename: '[name].[contenthash].js', // 输出的文件名称
    path: path.resolve(__dirname, '../dist') // 输出的文件夹
    // assetModuleFilename: 'images/[hash][ext][query]' // 输出的资源文件名
  },
  resolve: {
    alias: {
      // 设置目录别名
      '@src': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@utils': path.resolve(__dirname, 'src/utils/')
    },
    extensions: ['.ts', '.tsx', '.js', '.json'] // 支持ts
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x$/,
        exclude: /node_modules/, // 指定目录下的文件不编译
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(css|less)$/, // 解析顺序自下而上
        use: [
          {
            loader: MiniCssExtractPlugin.loader // 以link标签的形式先创建css文件再引入
          },
          // 'style-loader', // 直接以style标签形式插入head
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          }, // translates CSS into CommonJS
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // 选项
                    }
                  ]
                ]
              }
            }
          },
          'less-loader' // compiles Less to CSS
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]' // 优先级高于output.assetModuleFilename
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]' // 优先级高于output.assetModuleFilename
        }
      }
      // {
      //     test: /\.svg/,
      //     type: "asset/inline", // 所有 .svg 文件都将作为 data URI 注入到 bundle 中, 呈现为使用 Base64 算法编码的文件内容
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // chunks:['index'], // 设置的entry chunkName
      // filename: 'index.html', // 默认的filename
      hash: true,
      template: path.join(__dirname, '../index.html'),
      // inject: true, // 样式文件插入head js插入body
      minify: {
        removeComments: true
      }
    }),
    new CleanWebpackPlugin({
      root: path.join(__dirname, '../dist')
    }), // 每次打包前清空dist目录
    new MiniCssExtractPlugin({
      // 配置link的css文件的文件名
      filename: '[name].[contenthash].css'
    })
  ]
}
