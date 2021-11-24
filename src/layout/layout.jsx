/*
 * @Author: your name
 * @Date: 2021-06-09 16:49:22
 * @LastEditTime: 2021-11-24 14:29:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\layout.jsx
 */

import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function RouterLayout({ children }) {
  const location = useLocation()
  useEffect(() => {
    console.log('pageview', location.pathname)
  }, [location])

  return (
    <div>
      <ul>
        <li key={1}>
          <Link to="/route1/dongbanbantest">route1</Link>
        </li>
        <li key={2}>
          <Link to="/route2/home">route2</Link>
        </li>
        <li key={3}>
          <Link to="/route3">route3</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}
