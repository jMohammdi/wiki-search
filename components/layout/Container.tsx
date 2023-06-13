import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Content from './mainContent/Content'
import Setting from './settings/Setting'
import ProviderDrags from './mainContent/ProviderDrag'

function Container() {
  return (
    <div className='h-screen w-full border flex'>

      {/* <Sidebar />
      <Content /> */}
      <ProviderDrags />
      <Setting />
    </div>
  )
}

export default Container
