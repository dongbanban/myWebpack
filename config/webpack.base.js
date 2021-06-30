/*
 * @Author: your name
 * @Date: 2021-06-07 18:26:13
 * @LastEditTime: 2021-06-30 09:10:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\config\webpack.base.js
 */
const path = require('path')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')], // 配置webpack根目录的node_modules寻找第三方模块
    alias: {
      // 设置目录别名
      '@': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../src/assets/'),
      '@utils': path.resolve(__dirname, '../src/utils/')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] // 支持ts
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x$/,
        exclude: /node_modules/, // 指定目录下的文件不编译
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|less)$/, // 解析顺序自下而上
        use: [
          {
            loader: MiniCssExtractPlugin.loader // 以link标签的形式先创建css文件再引入
          },
          {
            loader: 'css-loader',
            options: {
              // modules: true, // 开启css-module后会影响antd的样式载入
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
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#7546C9',
                  'link-color': '#7546C9'
                },
                javascriptEnabled: true
              }
            }
          }
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
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true // 删除空⽩符与换⾏符
      }
    }),
    new MiniCssExtractPlugin({
      // 配置link的css文件的文件名
      filename: '[name].[contenthash:6].css'
    }),
    new DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV),
      USE_MOCK: JSON.stringify(process.env.MOCK)
    })
  ]
}
