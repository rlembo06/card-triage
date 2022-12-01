import type { MenuProps } from 'antd'

import { Menu } from 'antd'

type RLMenuProps = MenuProps

const RLMenu = (props: RLMenuProps) => <Menu {...props} />

const { Item } = Menu

RLMenu.Item = Item

export default RLMenu
