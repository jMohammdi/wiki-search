import { IconType } from 'react-icons'

export interface DefaultElementDragableProps {
  id: string
  icon: IconType
  type?: string
  elementType: string
  titleElement: string
  configs: {
    label: string
    description: string
    isRequired?: boolean
    width: string
    disabled?: boolean
  }[]
}
