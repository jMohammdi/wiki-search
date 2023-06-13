import * as React from 'react'

type ContentType = {
  children: React.ReactNode
}
function Content({ children }: ContentType) {
  return (
    <div className=' w-full  '>
      <div className='w-full p-2 text-center text-white text-base bg-violet-500'>
        Content
      </div>
      {children}
    </div>
  )
}

export default Content
