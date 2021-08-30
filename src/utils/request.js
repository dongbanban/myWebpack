/*
 * @file: 请求类
 * @author: dongyang
 */

import axios from 'axios'
import { addCancel } from './cancelManage'
import { stringify } from 'qs'

const request = ({ reqId, url, method = 'get', params, headers = {}, formData = null, cancelable }) => {
  const config = {
    method,
    url,
    baseURL: '/',
    withCredentials: true,
    headers: {
      ...headers,
      Authorization: 'dongbanban'
    },
    params: method === 'get' ? params : null,
    paramsSerializer: params => stringify(params, { arrayFormat: 'brackets' }),
    data: formData
      ? Object.prototype.toString.call(formData) === '[object FormData]'
        ? formData
        : new FormData(formData)
      : ['post', 'put', 'delete'].includes(method)
      ? params
      : null
  }
  if (cancelable) {
    const source = axios.CancelToken.source()
    addCancel({
      reqId,
      url,
      source
    })

    config.cancelToken = source?.token
  }
  return axios(config)
}

export default request
