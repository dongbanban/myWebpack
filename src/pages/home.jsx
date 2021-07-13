/*
 * @Author: your name
 * @Date: 2021-06-09 17:11:07
 * @LastEditTime: 2021-07-01 11:26:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\home.jsx
 */
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useRouteMatch, useParams } from 'react-router-dom'
import { DatePicker, Space } from 'antd'

export default function Home() {
  setTimeout(() => {
    console.log(100)
  }, 100)
  setTimeout(() => {
    console.log(0)
  }, 0)

  const count = useSelector(state => state.counter.value)
  const history = useHistory()

  const handleClick = () => {
    history.push('/route1/home2')
  }

  const match = useRouteMatch()
  console.log(match)

  const { route1Id = '' } = useParams()

  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
    <>
      <div onClick={handleClick}>
        {match.path} {route1Id} {count}
      </div>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>
    </>
  )
}
