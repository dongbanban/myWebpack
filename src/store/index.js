/*
 * @file: 创建完整store
 * @author: dongyang
 */

import { configureStore } from '@reduxjs/toolkit'
import logger from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import counterReducer from './testStore'

export default configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: [logger],
  enhancers: [monitorReducerEnhancer]
})
