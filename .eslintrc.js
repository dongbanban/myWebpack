/*
 * @Author: your name
 * @Date: 2021-06-08 14:12:25
 * @LastEditTime: 2021-06-10 11:44:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\.eslintrc.js
 */

module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser', // 解析器
    sourceType: 'module',
    ecmaVersion: 12
  },
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['airbnb', 'airbnb/hooks', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/', '^@assets/', '^@utils/']
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'import/no-duplicate-imports': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
    'no-unused-vars': 0,
    'max-classes-per-file': ['error', 2]
  }
}
