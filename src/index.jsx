/*
 * @Author: your name
 * @Date: 2021-06-07 10:55:41
 * @LastEditTime: 2021-06-10 10:28:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\index.js
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import dayjs from 'dayjs'
import RouterView from './routes'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

const App = () => {
  return (
    <ConfigProvider direction="ltr" locale={zhCN}>
      <RouterView />
    </ConfigProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
