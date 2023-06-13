import { v4 as uuidv4 } from 'uuid'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { BiText, BiHash, BiRadioCircleMarked } from 'react-icons/bi'
import { BsKeyFill } from 'react-icons/bs'
import { DefaultElementDragableProps } from './typeElementdrag'
export const Elements: DefaultElementDragableProps[] = [
  {
    id: uuidv4(),
    text: 'Checkbox',
    icon: AiOutlineCheckSquare,
    type: 'checkbox',
    elementType: 'checkbox'
  },
  {
    id: uuidv4(),
    text: 'Text Field',
    icon: BiText,
    type: 'text',
    elementType: 'text'
  },
  {
    id: uuidv4(),
    text: 'Number',
    icon: BiHash,
    type: 'number',
    elementType: 'number'
  },
  {
    id: uuidv4(),
    text: 'Password',
    icon: BsKeyFill,
    type: 'password',
    elementType: 'password'
  },
  {
    id: uuidv4(),
    text: 'Radio',
    icon: BiRadioCircleMarked,
    type: 'radio',
    elementType: 'radio'
  }
]
