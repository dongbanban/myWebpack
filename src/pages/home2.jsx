/*
 * @Author: your name
 * @Date: 2021-06-09 17:11:07
 * @LastEditTime: 2021-06-29 16:40:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\home.jsx
 */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '@/store/testStore'

export default function Home2() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <div>{count}</div>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(incrementByAmount(2))}>
          incrementByAmount
        </button>
      </div>
    </div>
  )
}
