import * as React from 'react'
import * as ReactDOM from 'react-dom'
type ContentType = {
  children: React.ReactNode
}
function Content({ children }: ContentType) {
  return (
    <div className=' w-full border  border-red-300 bg-lime-300'>{children}</div>
  )
}

export default Content
