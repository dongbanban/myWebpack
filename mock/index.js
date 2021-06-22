/*
 * @Author: your name
 * @Date: 2021-06-22 15:15:12
 * @LastEditTime: 2021-06-22 16:46:33
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

Mock.mock(RegExp('/getData1?.*'), 'get', {
  // 属性 name 的值是一个字符串，重复3次
  'name|3': 3
})

Mock.mock('/getData2', 'post', {
  // 属性 name 的值是一个长度在3-7之间的随机字符串
  name: Random.string(3, 7)
})
