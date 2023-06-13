import * as React from 'react'

type ContentType = {
  children: React.ReactNode
}
function Content({ children }: ContentType) {
  return (
    <div className=' w-full border  border-red-300 '>{children}</div>
  )
}

export default Content
