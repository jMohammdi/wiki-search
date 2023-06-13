import Checkbox from '@/components/checkbox/Checkbox'
import NumberField from '@/components/number/NumberField'
import PasswordField from '@/components/password/Password'
import RadioField from '@/components/radio/Radio'
import TextField from '@/components/textField/TextField'
import React from 'react'
import { DefaultElementDragableProps } from '@/model/typeElementdrag'
type ElementProps = {
  item: DefaultElementDragableProps
}
const generateElement: React.FC<ElementProps> = ({ item }) => {
  const { elementType, icon, id, titleElement, configs, type } = item

  switch (elementType) {
    case 'checkbox':
      return <Checkbox text={titleElement} id={id} type={type} />
    case 'text':
      return <TextField text={titleElement} id={id} type={type} />
    case 'number':
      return <NumberField text={titleElement} id={id} type={type} />
    case 'password':
      return <PasswordField text={titleElement} id={id} type={type} />
    case 'radio':
      // You can define your own custom component here
      return <RadioField text={titleElement} id={id} type={type} />
    default:
      return null
  }
}

const ElementCreator = ({ item }: ElementProps) => {
  const dynamicElement = generateElement({ item })

  return <div className={`  my-1 `}>{dynamicElement}</div>
}

export default ElementCreator