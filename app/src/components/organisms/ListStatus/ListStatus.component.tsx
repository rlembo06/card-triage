import type { ReactNode } from 'react'

import { RLCol, RLList, RLRow } from '../..'

type RLListStatusProps<T extends { status: string }> = {
  dataSource: T[]
  renderItem: (item: T) => ReactNode
}

function RLListStatus<T extends { status: string }>({
  dataSource,
  renderItem,
}: RLListStatusProps<T>) {
  const dataSourceByPendingStatus = dataSource.filter(({ status }) => status === 'PENDING')
  const dataSourceByDoneStatus = dataSource.filter(({ status }) => status === 'DONE')
  const dataSourceByRejectedStatus = dataSource.filter(({ status }) => status === 'REJECTED')

  const dataSourceMap: { [statusKey: string]: T[] } = {
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
            renderItem={renderItem}
          />
        </RLCol>
      ))}
    </RLRow>
  )
}

export default RLListStatus
