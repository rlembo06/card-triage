import type { DataSourceItem, Patient, Status } from '@/commons'

import { RLBadge, RLCard, RLCol, RLImage, RLRow, RLSelect, useRLBreakpoint } from '../..'

import Profile from '@/assets/login.svg'

const STATUS_COLOR_MAP: { [status: string]: string } = {
  PENDING: 'blue',
  DONE: 'green',
  REJECTED: 'red',
}

const STATUS_OPTIONS: { label: string; value: string }[] = [
  { label: 'PENDING', value: 'PENDING' },
  { label: 'DONE', value: 'DONE' },
  { label: 'REJECTED', value: 'REJECTED' },
]

type RLPatientCardStatusItem = { name: string; id: string; status: Status; image?: { url: string } }

type RLPatientCardStatusProps = {
  patient: DataSourceItem<Patient>
  onChangeStatus: ({ status, id }: { status: Status; id: string }) => void
}

function RLPatientCardStatus({
  patient: { id, arrhythmias, image, patient_name: name, status },
  onChangeStatus,
}: RLPatientCardStatusProps) {
  const screens = useRLBreakpoint()

  const isXsScreen: boolean = Object.entries(screens).some(([key, value]) => key === 'xs' && value)
  const hasLogo = !!image?.url
  return (
    <RLBadge.Ribbon text={status} color={STATUS_COLOR_MAP[status]}>
      <RLCard style={{ marginBottom: '16px' }}>
        <RLRow gutter={[16, 16]}>
          <RLCol span={!isXsScreen ? 11 : 24}>
            <RLImage preview={false} src={hasLogo ? image.url : Profile} width={40} height={40} />
          </RLCol>
          <RLCol span={!isXsScreen ? 11 : 24}>
            <RLRow gutter={[16, 16]}>
              <RLCol span={24}>Name: {name}</RLCol>
              <RLCol span={24}>
                Arrhythmias:{' '}
                <ul>
                  {arrhythmias.map((arrhythmia) => (
                    <li key={`${id}-${arrhythmia}`}>{arrhythmia}</li>
                  ))}
                </ul>
              </RLCol>
              <RLCol span={24}>
                <RLSelect
                  style={{ width: '100%' }}
                  placeholder='Change status'
                  defaultValue={status}
                  onChange={(value: Status) => onChangeStatus({ status: value, id })}
                  options={STATUS_OPTIONS}
                />
              </RLCol>
            </RLRow>
          </RLCol>
        </RLRow>
      </RLCard>
    </RLBadge.Ribbon>
  )
}

export type { RLPatientCardStatusItem }
export default RLPatientCardStatus
