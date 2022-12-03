import { Layout } from 'antd'
import { ReactNode } from 'react'

import './styles.css'

const { Content: AContent } = Layout

type ContentProps = { children: ReactNode }

const Content = ({ children }: ContentProps) => {
  return (
    <AContent>
      <div className="content">{children}</div>
    </AContent>
  )
}

export type { ContentProps }
export default Content
