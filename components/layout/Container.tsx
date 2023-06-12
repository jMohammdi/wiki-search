import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Content from './mainContent/Content'
import Setting from './settings/Setting'

function Container() {
  return (
    <div className='h-screen w-full border flex'>
      <Sidebar />
      <Content />
      <Setting />
    </div>
  )
}

export default Container
