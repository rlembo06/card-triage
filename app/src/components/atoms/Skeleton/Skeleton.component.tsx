import { type SkeletonProps, Skeleton } from 'antd'

type RLSkeletonProps = SkeletonProps

function RLSkeleton(props: RLSkeletonProps) {
    return <Skeleton {...props} />
}

export default RLSkeleton
