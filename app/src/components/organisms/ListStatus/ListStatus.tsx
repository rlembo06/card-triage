import type { Status } from '@/commons'

import { RLCol, RLList, RLRow } from '../../atoms'

type RLListStatusItem = { name: string; id: string; status: Status }

type RLListStatusProps = {
  dataSource: RLListStatusItem[]
}

function RLListStatus({ dataSource }: RLListStatusProps) {
  const dataSourceByPendingStatus = dataSource.filter(({ status }) => status === 'PENDING')
  const dataSourceByDoneStatus = dataSource.filter(({ status }) => status === 'DONE')
  const dataSourceByRejectedStatus = dataSource.filter(({ status }) => status === 'REJECTED')

  const dataSourceMap: { [statusKey: string]: RLListStatusItem[] } = {
    PENDING: dataSourceByPendingStatus,
    DONE: dataSourceByDoneStatus,
    REJECTED: dataSourceByRejectedStatus,
  }
  const colSpan: number = 24 / Object.keys(dataSourceMap).length

  return (
    <RLRow gutter={[16, 16]}>
      {Object.keys(dataSourceMap).map((statusKey: string) => (
        <RLCol span={colSpan} key={statusKey}>
          <RLList
            dataSource={dataSourceMap[statusKey]}
            renderItem={({ id, name, status }) => (
              <RLList.Item
                key={`${statusKey}-${id}`}
                actions={[
                  <a key='list-loadmore-edit'>edit</a>,
                  <a key='list-loadmore-more'>more</a>,
                ]}
              >
                <RLList.Item.Meta title={<a href='https://ant.design'>{name}</a>} />
                <div>{status}</div>
              </RLList.Item>
            )}
          />
        </RLCol>
      ))}
    </RLRow>
  )
}

export type { RLListStatusItem }
export default RLListStatus
