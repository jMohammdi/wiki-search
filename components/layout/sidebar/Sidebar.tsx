import Checkbox from '@/components/checkbox/Checkbox'
import Password from '@/components/password/Password'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
function Sidebar() {
  return (
    <div className=' w-1/5 border  border-yellow-400 text-black'>
      <h3 className='w-full mt-2 border border-transparent border-b-red-500  text-center text-lg'>
        Basic
      </h3>
      <div className='w-full'>
        <Checkbox title='checkbox' />
        <Password title='password' />
      </div>
    </div>
  )
}

export default Sidebar
