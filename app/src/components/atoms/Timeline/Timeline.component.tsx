import type { TimelineProps } from 'antd'

import { ReactNode } from 'react'
import { Timeline } from 'antd'

type RLTimelineProps = TimelineProps & { children: ReactNode[] | ReactNode }

const RLTimeline = (props: RLTimelineProps) => <Timeline {...props} />

const { Item } = Timeline

RLTimeline.Item = Item

export type { RLTimelineProps }
export default RLTimeline
