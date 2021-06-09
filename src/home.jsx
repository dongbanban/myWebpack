/*
 * @Author: your name
 * @Date: 2021-06-09 17:11:07
 * @LastEditTime: 2021-06-09 17:24:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\home.jsx
 */
import React from 'react'
import { useHistory, useRouteMatch, useParams } from 'react-router-dom'

export default function Home() {
  const history = useHistory()

  const handleClick = () => {
    history.push('/topics/props-v-state')
  }

  const match = useRouteMatch()
  console.log(match)

  const { route1Id = '' } = useParams()

  return (
    <div onClick={handleClick}>
      {match.path} {route1Id}
    </div>
  )
}
