/*
 * @Author: your name
 * @Date: 2021-06-08 14:12:25
 * @LastEditTime: 2021-06-08 14:20:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\.eslintrc.js
 */

module.exports = {
    root: true,
    parserOptions: {
      parser: '@babel/eslint-parser',  // 解析器
      sourceType: 'module',
      ecmaVersion: 12
    },
    env: {
      browser: true,
      node: true,
      es2021: true
    },
    extends: [
      'airbnb',
      'eslint:recommended',
      'plugin:prettier/recommended'
    ],
  
    rules: {
      'prettier/prettier': 'error'
    }
  }
  