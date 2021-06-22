/*
 * @Author: your name
 * @Date: 2021-06-07 10:55:41
 * @LastEditTime: 2021-06-22 16:48:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\index.js
 */

import React from 'react'
import ReactDOM from 'react-dom'
import store from '@/store'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import dayjs from 'dayjs'
import RouterView from './routes'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider direction="ltr" locale={zhCN}>
        <RouterView />
      </ConfigProvider>
    </Provider>
  )
}

const AppRender = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

/* eslint-disable */
if (USE_MOCK === 'yes') {
  import('../mock').then(data => {
    AppRender()
  })
} else {
  AppRender()
}
/* eslint-enable */
