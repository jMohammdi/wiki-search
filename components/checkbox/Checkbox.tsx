import React from 'react'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import Icon from '../layout/utils/Icon'
type CheckBoxProps = {
  title: string
}
function Checkbox({ title }: CheckBoxProps) {
  return (
    <div className='flex border rounded cursor-pointer shadow-sm m-1 items-center p-1'>
      <Icon icon={AiOutlineCheckSquare} />
      <span className='mx-2'>{title}</span>
    </div>
  )
}

export default Checkbox
