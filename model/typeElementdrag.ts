import { IconType } from 'react-icons'
export interface ElementDragableProps {
  label: string | 'input'
  tableView: boolean
  name: string
  key: string
  type: string
  input: boolean
  defaultValue: false | string
  description: string
  uipattern: string
  withs: string
  isRequired: boolean
}
export interface DefaultElementDragableProps {
  id: string
  icon: IconType
  type: string
  text: string
  elementType: string
}
