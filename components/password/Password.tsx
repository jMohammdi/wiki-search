import React from 'react'
import { BsFillKeyFill } from 'react-icons/bs'
import Icon from '../layout/utils/Icon'
type PasswordProps = {
  title: string
}
function Password({ title }: PasswordProps) {
  return (
    <div className='flex border rounded cursor-pointer shadow-sm m-1 items-center p-1'>
      <Icon icon={BsFillKeyFill} />
      <span className='mx-2'>{title}</span>
    </div>
  )
}

export default Password
