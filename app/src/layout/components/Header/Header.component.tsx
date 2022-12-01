import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Layout } from 'antd'

import { type Route, routes } from '@/commons'
import { RLMenu } from '@/components/atoms'

const { Header: AHeader } = Layout

const Header = () => {
  const navigate = useNavigate()

  return (
    <AHeader>
      <div>
        <a href={routes.find((route: Route) => ['Home'].includes(route.name))?.to || '/'}>
          <>
            Romain <b>LEMBO</b>
          </>
        </a>
      </div>
      <RLMenu
        mode='horizontal'
        defaultSelectedKeys={['2']}
        items={routes.map(({ to: key, name: label }: Route) => ({ label, key }))}
        onSelect={({ key }) => navigate(key)}
      />
    </AHeader>
  )
}

export default Header
