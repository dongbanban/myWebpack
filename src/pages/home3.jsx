/*
 * @Author: your name
 * @Date: 2021-06-29 16:40:07
 * @LastEditTime: 2021-06-29 17:22:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\pages\home3.jsx
 */

import React from 'react'
import ContextTest from '@/pages/contextDemo'
import MemoTest from '@/pages/memoDemo'
// import { Geti18n } from '@/components/index'

export default function Home3() {
  return (
    <div>
      {/* <Geti18n /> */}
      <ContextTest />
      <MemoTest />
    </div>
  )
}
