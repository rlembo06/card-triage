import { type InputProps, Input } from 'antd'

type RLInputProps = InputProps

const RLInput = (props: RLInputProps) => <Input {...props} />

const { Group, Password, Search, TextArea } = Input

RLInput.Group = Group
RLInput.Password = Password
RLInput.Search = Search
RLInput.TextArea = TextArea

export default RLInput
