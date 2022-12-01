import { type LayoutProps as ALayoutProps, Layout as ALayout } from 'antd'

import { type ContentProps, Content, Header, Footer } from './components'

export type LayoutProps = ALayoutProps & ContentProps

const Layout = ({ children }: LayoutProps) => {
  return (
    <ALayout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </ALayout>
  )
}

export default Layout
