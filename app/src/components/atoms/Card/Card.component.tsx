import { type CardProps, Card } from 'antd'

type RLCardProps = CardProps

const RLCard = (props: RLCardProps) => <Card {...props} />

const { Grid, Meta } = Card

RLCard.Meta = Meta
RLCard.Grid = Grid

export default RLCard
