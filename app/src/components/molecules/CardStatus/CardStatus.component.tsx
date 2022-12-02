import type { Status } from '@/commons'

import { RLCard, RLCol, RLImage, RLRow, useRLBreakpoint } from '../..'

import Profile from '@/assets/login.svg'

type RLCardStatusItem = { name: string; id: string; status: Status; image?: { url: string } }

type RLCardStatusProps = { item: RLCardStatusItem }

function RLCardStatus({ item: { image, name, status } }: RLCardStatusProps) {
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
            <RLCol span={24}>{name}</RLCol>
            <RLCol span={24}>{status}</RLCol>
          </RLRow>
        </RLCol>
      </RLRow>
    </RLCard>
  )
}

export type { RLCardStatusItem }
export default RLCardStatus
