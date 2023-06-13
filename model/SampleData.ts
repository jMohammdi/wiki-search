import { v4 as uuidv4 } from 'uuid'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { BiText, BiHash, BiRadioCircleMarked } from 'react-icons/bi'
import { BsKeyFill } from 'react-icons/bs'
import {
  DefaultElementDragableProps,
  AllelementsConfigsProps
} from './typeElementdrag'
export const Elements: DefaultElementDragableProps[] = [
  {
    id: uuidv4(),
    text: 'Checkbox',
    icon: AiOutlineCheckSquare,
    type: 'checkbox',
    elementType: 'checkbox',
    label: 'checkbox',
    description: ''
  }
  // {
  //   id: uuidv4(),
  //   text: 'Text Field',
  //   icon: BiText,
  //   type: 'text',
  //   elementType: 'text'
  // },
  // {
  //   id: uuidv4(),
  //   text: 'Number',
  //   icon: BiHash,
  //   type: 'number',
  //   elementType: 'number'
  // },
  // {
  //   id: uuidv4(),
  //   text: 'Password',
  //   icon: BsKeyFill,
  //   type: 'password',
  //   elementType: 'password'
  // },
  // {
  //   id: uuidv4(),
  //   text: 'Radio',
  //   icon: BiRadioCircleMarked,
  //   type: 'radio',
  //   elementType: 'radio'
  // }
]
// elements basic data for show configs
export const AllelementsConfigs: AllelementsConfigsProps[] = [
  {
    name: 'checkbox',
    configs: [
      {
        description: 'this is checkbox',
        disabled: false,
        id: '',
        label: 'checkbox',
        width: '',
        isRequired: true
      }
    ]
  }
]
