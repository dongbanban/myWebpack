/*
 * @Author: your name
 * @Date: 2021-06-30 10:21:21
 * @LastEditTime: 2021-06-30 10:21:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\store\middleware\logger.js
 */
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export default logger
