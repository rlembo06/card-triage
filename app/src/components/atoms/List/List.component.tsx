import { type ListProps, List } from 'antd'

type RLListProps<T> = ListProps<T>

function RLList<T>(props: RLListProps<T>) {
    return <List {...props} />
}

const { Item } = List

RLList.Item = Item

export default RLList
