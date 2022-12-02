import type { Status } from '@/commons'

import { RLList } from '../../atoms'

type RLListStatusItem = { name: string; id: string; status: Status }

type RLListStatusProps = {
  dataSource: RLListStatusItem[]
}

function RLListStatus({ dataSource }: RLListStatusProps) {
  return (
    <RLList
      dataSource={dataSource}
      renderItem={(item) => (
        <RLList.Item
          actions={[<a key='list-loadmore-edit'>edit</a>, <a key='list-loadmore-more'>more</a>]}
        >
          <RLList.Item.Meta
            title={<a href='https://ant.design'>{item.name}</a>}
            description='Ant Design, a design language for background applications, is refined by Ant UED Team'
          />
          <div>{item.status}</div>
        </RLList.Item>
      )}
    />
  )
}

export type { RLListStatusItem }
export default RLListStatus
