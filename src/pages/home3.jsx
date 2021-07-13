/*
 * @Author: your name
 * @Date: 2021-06-29 16:40:07
 * @LastEditTime: 2021-07-13 18:28:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\pages\home3.jsx
 */

import React from 'react'
import { ContextTest, MemoTest, RecoilDemo } from '@/components/index'

export default function Home3() {
  return (
    <div>
      <RecoilDemo />
      <ContextTest />
      <MemoTest />
      {/* <Geti18n /> */}
    </div>
  )
}
