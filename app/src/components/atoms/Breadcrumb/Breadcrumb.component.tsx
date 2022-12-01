import type { BreadcrumbProps } from 'antd'

import { ReactNode } from 'react'
import { Breadcrumb } from 'antd'

type RLBreadcrumbProps = BreadcrumbProps & { children: ReactNode[] | ReactNode }

const RLBreadcrumb = (props: RLBreadcrumbProps) => <Breadcrumb {...props} />

const { Item } = Breadcrumb

RLBreadcrumb.Item = Item

export default RLBreadcrumb
