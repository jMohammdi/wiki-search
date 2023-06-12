import Checkbox from '@/components/checkbox/Checkbox'
import Password from '@/components/password/Password'
import React from 'react'
type PropsType = {
  children: React.ReactNode
}
function Sidebar({ children }: PropsType) {
  return (
    <div className=' w-1/5 border  border-yellow-400 '>
      {/* <div className='w-full'>
        <Checkbox title='checkbox' />
        <Password title='password' />
      </div> */}
      {children}
    </div>
  )
}

export default Sidebar
