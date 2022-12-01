import { Layout } from 'antd'
import { ReactNode } from 'react'

const { Content: AContent } = Layout

type ContentProps = { children: ReactNode }

const Content = ({ children }: ContentProps) => {
  return (
    <AContent>
      <div>{children}</div>
    </AContent>
  )
}

export type { ContentProps }
export default Content
