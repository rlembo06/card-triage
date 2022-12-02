import { type RLCardStatusItem, RLCardStatus, RLCol, RLList, RLRow } from '../..'

type RLListStatusProps = {
  dataSource: RLCardStatusItem[]
}

function RLListStatus({ dataSource }: RLListStatusProps) {
  const dataSourceByPendingStatus = dataSource.filter(({ status }) => status === 'PENDING')
  const dataSourceByDoneStatus = dataSource.filter(({ status }) => status === 'DONE')
  const dataSourceByRejectedStatus = dataSource.filter(({ status }) => status === 'REJECTED')

  const dataSourceMap: { [statusKey: string]: RLCardStatusItem[] } = {
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
            renderItem={(item) => <RLCardStatus item={item} />}
          />
        </RLCol>
      ))}
    </RLRow>
  )
}

export type { RLCardStatusItem as RLListStatusItem }
export default RLListStatus
