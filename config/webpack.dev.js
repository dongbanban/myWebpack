/*
 * @Author: your name
 * @Date: 2021-06-07 18:26:32
 * @LastEditTime: 2021-06-07 18:30:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\config\webpack.dev.js
 */
const {
    merge
} = require("webpack-merge");
const path = require("path");
const base = require("./webpack.base");

module.exports = merge(base, {
    mode: 'development',
    target: "web",
    devtool: "inline-source-map",
    devServer: {
        compress: true,
        contentBase: path.resolve(__dirname, "dist"),
        hot: true,
        historyApiFallback: true,
        port: 8888,
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
});