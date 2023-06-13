import { IconType } from 'react-icons'

export interface DefaultElementDragableProps {
  id: string
  icon: IconType
  type: string
  text: string
  elementType: string
  label: string
  description: string
}
export interface AllelementsConfigsProps {
  name: string
  configs: {
    id: string
    label: string
    description: string
    isRequired?: boolean
    width: string
    disabled: boolean
  }[]
}
