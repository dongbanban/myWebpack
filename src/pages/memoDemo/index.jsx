/*
 * @Author: your name
 * @Date: 2021-06-29 16:39:10
 * @LastEditTime: 2021-06-29 16:52:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\pages\memoDemo\index.jsx
 */

import React, { useState, memo } from 'react'

const Child1 = props => {
  console.log('我是子组件1', props)
  return <div>我是子组件1</div>
}

const isEqual = (prevProps, nextProps) => {
  console.log(prevProps)
  console.log(nextProps)
  return prevProps.count !== nextProps.count
}
const Child2 = props => {
  console.log('我是子组件2', props)
  return <div>我是子组件2</div>
}

const ChildMemo = memo(Child2, isEqual)

function MemoTest() {
  const [count, setCount] = useState(0)
  return (
    <>
      <button type="button" onClick={() => setCount(c => c + 1)}>
        {count}
      </button>
      <Child1 count={count} />
      <ChildMemo count={count} />
    </>
  )
}

export default MemoTest
