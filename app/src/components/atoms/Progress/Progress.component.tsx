import { type ProgressProps, Progress } from 'antd'

type RLProgressProps = ProgressProps

const RLProgress = (props: RLProgressProps) => <Progress {...props} />

export type { RLProgressProps }
export default RLProgress
