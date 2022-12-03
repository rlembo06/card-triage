import { type LayoutProps as ALayoutProps, Layout as ALayout } from 'antd'

import { type ContentProps, Content, Header } from './components'

export type LayoutProps = ALayoutProps & ContentProps

const Layout = ({ children }: LayoutProps) => {
  return (
    <ALayout style={{ background: 'inherit' }}>
      <Header />
      <Content>{children}</Content>
    </ALayout>
  )
}

export default Layout
