import { IconType } from 'react-icons'
export interface ElementDragableProps {
  label: string
  tableView: boolean
  key: string
  type: string
  input: boolean
  defaultValue: false | string
}
export interface DefaultElementDragableProps {
  id: string
  icon: IconType
  type: string
  text: string
}
