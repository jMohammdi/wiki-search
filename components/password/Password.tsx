import React from 'react'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import Icon from '../layout/utils/Icon'
type CheckBoxProps = {
  text: string
  id: string
  type: string | undefined
}
function PasswordField({ text, id, type }: CheckBoxProps) {
  return (
    <div className='  items-center  m-1 flex'>
      <label htmlFor={id} className='mx-3 text-sm'>
        {text}
      </label>
      <input
        className='border outline-none w-4/5 p-1 rounded'
        type={type}
        id={id}
      />
    </div>
  )
}

export default PasswordField
