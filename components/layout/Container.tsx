import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Content from './mainContent/Content'
import Setting from './settings/Setting'
import Provider from './mainContent/Provider'
type ContainerProps = {
  children: React.ReactNode
}
function Container({ children }: ContainerProps) {
  return (
    <div className='h-screen w-full border flex'>
      {/* {children}
      <Setting /> */}
      <Provider />
    </div>
  )
}

export default Container
