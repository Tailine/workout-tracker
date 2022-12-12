import { ISelectItemProps, ISelectProps, Select } from 'native-base'
import theme from '../theme'

type SelectItems = {
  value: string
  label: string
}

interface Props {
  selectProps?: ISelectProps
  itemProps?: ISelectItemProps
  items: SelectItems[]
}

export function Dropdown({ items, selectProps, itemProps }: Props) {
  return (
    <Select
      _selectedItem={{
        bg: theme.colors.blue[600]
      }}
      {...selectProps}
    >
      {items.map((item) => (
        <Select.Item
          bg={theme.colors.blue[500]}
          key={item.value}
          label={item.label}
          value={item.value}
          {...itemProps}
        />
      ))}
    </Select>
  )
}
