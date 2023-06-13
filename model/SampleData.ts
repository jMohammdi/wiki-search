import { v4 as uuidv4 } from 'uuid'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { BiText, BiHash, BiRadioCircleMarked } from 'react-icons/bi'
import { BsKeyFill } from 'react-icons/bs'
import { DefaultElementDragableProps } from './typeElementdrag'
export const Elements: DefaultElementDragableProps[] = [
  {
    id: uuidv4(),
    titleElement: 'Checkbox',
    icon: AiOutlineCheckSquare,
    type: 'checkbox',
    elementType: 'checkbox',
    configs: [{ description: '', label: '', width: '' }]
  },

  {
    id: uuidv4(),
    titleElement: 'Text Field',
    icon: BiText,
    type: 'text',
    elementType: 'text'
  },
  {
    id: uuidv4(),
    titleElement: 'Number',
    icon: BiHash,
    type: 'number',
    elementType: 'number'
  },
  {
    id: uuidv4(),
    titleElement: 'Password',
    icon: BsKeyFill,
    type: 'password',
    elementType: 'password'
  },
  {
    id: uuidv4(),
    titleElement: 'Radio',
    icon: BiRadioCircleMarked,
    type: 'radio',
    elementType: 'radio'
  }
]
// elements basic data for show configs
