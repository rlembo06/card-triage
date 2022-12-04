import type { ReactNode } from 'react'
import { type TypographyProps, Typography } from 'antd'

type RLTypographyProps = TypographyProps & { children: ReactNode[] | ReactNode }

const RLTypography = (props: RLTypographyProps) => <Typography {...props} />

const { Text, Title, Paragraph } = Typography

RLTypography.Text = Text
RLTypography.Title = Title
RLTypography.Paragraph = Paragraph

export type { RLTypographyProps }
export default RLTypography
