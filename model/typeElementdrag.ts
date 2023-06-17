import { IconType } from 'react-icons'

// elements will be drag and drop on page ✅
export interface DefaultElementDragableProps {
  id: string
  icon: IconType
  type?: string
  elementType: string
  titleElement: string
  configs: {
    value?: string
    label: string
    description: string
    isRequired?: boolean
    width: string
    disabled?: boolean
  }[]
}
// grid system ⏱️
export interface GridSystemProps {
  id: string
  title: string
  icon: IconType
  columns: string
  childrens?: DefaultElementDragableProps[]
}
