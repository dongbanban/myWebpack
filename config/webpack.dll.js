/*
 * @Author: your name
 * @Date: 2021-06-16 18:06:32
 * @LastEditTime: 2021-06-16 20:36:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\config\webpack.dll.js
 */
const path = require('path')
const { DllPlugin } = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    react: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, '../dll'),
    // 输出的动态链接库的文件名称 [name] 代表当前动态链接库的名称,entry key值
    filename: '[name].dll.js',
    // library必须和dllplugin中的name一致
    library: '[name]_library'
  },
  plugins: [
    new DllPlugin({
      context: path.resolve(__dirname, '..'),
      // 描述动态链接库的 manifest.json 文件输出时的文件名称，输出的位置
      path: path.join(__dirname, '../dll/[name].manifest.json'),
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      name: '[name]_library'
    })
  ]
}
