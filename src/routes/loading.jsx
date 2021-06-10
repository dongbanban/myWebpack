import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'

export default function Loading(props) {
  const { isLoading, timedOut, pastDelay, error } = props
  if (isLoading) {
    if (timedOut) {
      return <div>Loader timed out!</div>
    }
    if (pastDelay) {
      return <div>Loading...</div>
    }
    return <LoadingOutlined />
  }
  return error ? <div>Error! Component failed to load</div> : null
}
