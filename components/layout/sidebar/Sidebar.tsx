import React from 'react'

type PropsType = {
  children: React.ReactNode
}
function Sidebar({ children }: PropsType) {
  return (
    <div className=' w-1/5 '>
      <div className='w-full p-2 text-center text-white text-base bg-emerald-500'>
        Elements
      </div>
      {children}

    </div>
  )
}

export default Sidebar
