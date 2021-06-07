/*
 * @Author: your name
 * @Date: 2021-06-07 18:26:18
 * @LastEditTime: 2021-06-07 18:30:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\config\webpack.build.js
 */
const {
    merge
} = require("webpack-merge");
const base = require("./webpack.base");

module.exports = merge(base, {
    mode: "production",
});