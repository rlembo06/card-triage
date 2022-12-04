import type { ReactNode } from 'react'
import { type TimelineProps, Timeline } from 'antd'

type RLTimelineProps = TimelineProps & { children: ReactNode[] | ReactNode }

const RLTimeline = (props: RLTimelineProps) => <Timeline {...props} />

const { Item } = Timeline

RLTimeline.Item = Item

export type { RLTimelineProps }
export default RLTimeline
