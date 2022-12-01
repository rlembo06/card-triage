import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Layout } from 'antd'

import { type Route, routes } from '@/commons'
import { RLMenu } from '@/components/atoms'

import './styles.css'

const { Header: AHeader } = Layout

const Header = () => {
  const navigate = useNavigate()

  return (
    <AHeader>
      <div className="navbar">
        <div className="logo">Romain LEMBO</div>
        <RLMenu
          className="menu"
          theme="dark"
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={routes.map(({ to: key, name: label }: Route) => ({ label, key }))}
          onSelect={({ key }) => navigate(key)}
        />
      </div>
    </AHeader>
  )
}

export default Header
