import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const LoadingSpin: React.FC = () => {
  return (<Spin indicator={<LoadingOutlined style={{ fontSize: 20, color: '#fff' }} spin />} />)
}

export default LoadingSpin
