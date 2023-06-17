import { v4 as uuidv4 } from 'uuid'
import { BiText } from 'react-icons/bi'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { DefaultElementDragableProps, GridSystemProps } from './typeElementdrag'
type AllElementProp = DefaultElementDragableProps
export const Elements: AllElementProp[] = [
  {
    id: uuidv4(),
    titleElement: 'Text Field',
    icon: BiText,
    type: 'text',
    elementType: 'text',
    configs: [{ description: 'ddd', label: 'Name', width: '3', value: '' }]
  }
]
// Grid system template
export const Grids: GridSystemProps[] = [
  {
    columns: '3',
    icons: BsFillGrid1X2Fill,
    id: uuidv4(),
    title: 'Layout',
    childrens: []
  }
]
