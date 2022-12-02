import type { DataSourceItem, Patient, Status } from '@/commons'

import { RLCard, RLCol, RLImage, RLRow, useRLBreakpoint } from '../..'

import Profile from '@/assets/login.svg'

type RLPatientCardStatusItem = { name: string; id: string; status: Status; image?: { url: string } }

type RLPatientCardStatusProps = { patient: DataSourceItem<Patient> }

function RLPatientCardStatus({
  patient: { id, arrhythmias, image, patient_name: name, status },
}: RLPatientCardStatusProps) {
  const screens = useRLBreakpoint()

  const isXsScreen: boolean = Object.entries(screens).some(([key, value]) => key === 'xs' && value)
  const hasLogo = !!image?.url
  return (
    <RLCard>
      <RLRow gutter={[16, 16]}>
        <RLCol span={!isXsScreen ? 11 : 24}>
          <RLImage preview={false} src={hasLogo ? image.url : Profile} width={40} height={40} />
        </RLCol>
        <RLCol span={!isXsScreen ? 11 : 24}>
          <RLRow gutter={[16, 16]}>
            <RLCol span={24}>Name: {name}</RLCol>
            <RLCol span={24}>Status: {status}</RLCol>
            <RLCol span={24}>
              Arrhythmias:{' '}
              <ul>
                {arrhythmias.map((arrhythmia) => (
                  <li key={`${id}-${arrhythmia}`}>{arrhythmia}</li>
                ))}
              </ul>
            </RLCol>
          </RLRow>
        </RLCol>
      </RLRow>
    </RLCard>
  )
}

export type { RLPatientCardStatusItem }
export default RLPatientCardStatus
