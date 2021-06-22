/*
 * @Author: your name
 * @Date: 2021-06-22 15:54:07
 * @LastEditTime: 2021-06-22 16:47:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\utils\request.js
 */
import axios from 'axios'
import { stringify } from 'qs'

const request = axios.create({
  baseURL: '/',
  timeout: 50000,
  headers: {
    Authorization: 'dongbanban'
  }
})

/** GET请求 */
request.get = options =>
  new Promise((resolve, reject) => {
    request({
      ...options,
      method: 'get',
      paramsSerializer: params => stringify(params, { arrayFormat: 'brackets' })
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })

export default request
