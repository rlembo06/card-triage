import { type BadgeProps, Badge } from 'antd'

type RLBadgeProps = BadgeProps

const RLBadge = (props: RLBadgeProps) => <Badge {...props} />

const { Ribbon } = Badge

RLBadge.Ribbon = Ribbon

export default RLBadge
