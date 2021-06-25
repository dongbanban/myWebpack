/*
 * @Author: your name
 * @Date: 2021-06-22 15:15:12
 * @LastEditTime: 2021-06-23 09:36:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\mock\index.js
 */

// https://github.com/nuysoft/Mock/wiki/Syntax-Specification
import Mock from 'mockjs'

const { Random } = Mock
Mock.setup({
  timeout: '1000'
})

// 问号拼接参数的get请求匹配
Mock.mock('/getData1.*', 'get', {
  // 属性 name 的值是一个字符串，重复3次
  'name|3': '3'
})

Mock.mock('/getData2', 'post', {
  // 属性 name 的值是一个长度在3-7之间的随机字符串
  name: Random.string(3, 7)
})

// restful形式的get请求，如/api/:id
Mock.mock(/getData3\/./, 'get', {
  // 属性 name 的值是一个长度在3-7之间的随机字符串
  name: 'test'
})
