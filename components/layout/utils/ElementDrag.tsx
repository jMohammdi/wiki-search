import React from 'react'
import { IconType } from 'react-icons'
import Icon from './Icon'
import { DefaultElementDragableProps } from '../../../model/typeElementdrag'
function ElementDrag({ icon, titleElement }: DefaultElementDragableProps) {
  return (
    <div className='flex border rounded  shadow-sm  items-center py-2 m-1'>
      <Icon icon={icon} />
      <span className='mx-1'>{titleElement}</span>
    </div>
  )
}

export default ElementDrag
