/*
 * @Author: your name
 * @Date: 2021-06-07 10:55:41
 * @LastEditTime: 2021-06-09 16:57:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\index.js
 */

import React from 'react'
import ReactDOM from 'react-dom'
import RouterView from './routes'

const App = () => {
  return <RouterView />
}

ReactDOM.render(<App />, document.getElementById('root'))
