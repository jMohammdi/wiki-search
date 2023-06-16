import React from 'react'
import ElementDrag from '../utils/ElementDrag'
import { v4 as uuidv4 } from 'uuid'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
function GridLayout() {
  return (
    <div>
      <ElementDrag
        id={uuidv4()}
        icon={BsFillGrid1X2Fill}
        elementType='grid'
        titleElement='Grid'
      />
    </div>
  )
}

export default GridLayout
