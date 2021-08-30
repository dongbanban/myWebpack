/*
 * @file: mock类
 * @author: dongyang
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
