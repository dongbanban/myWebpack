/*
 * @Author: your name
 * @Date: 2021-06-09 17:11:07
 * @LastEditTime: 2021-06-10 10:12:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\home.jsx
 */
import React from 'react'
import { useHistory, useRouteMatch, useParams } from 'react-router-dom'
import { DatePicker, Space } from 'antd'

export default function Home() {
  const history = useHistory()

  const handleClick = () => {
    history.push('/topics/props-v-state')
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
        {match.path} {route1Id}
      </div>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>
    </>
  )
}
