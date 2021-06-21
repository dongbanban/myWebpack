/*
 * @Author: your name
 * @Date: 2021-06-21 17:33:38
 * @LastEditTime: 2021-06-21 17:35:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\store\index.js
 */
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './testStore'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
