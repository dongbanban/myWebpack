/*
 * @Author: your name
 * @Date: 2021-06-30 10:22:14
 * @LastEditTime: 2021-06-30 10:22:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\store\enhancers\monitorReducer.js
 */
const round = number => Math.round(number * 100) / 100

const monitorReducerEnhancer = createStore => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const diff = round(end - start)

    console.log('reducer process time:', diff)

    return newState
  }

  return createStore(monitoredReducer, initialState, enhancer)
}

export default monitorReducerEnhancer
