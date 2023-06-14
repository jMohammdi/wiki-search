'use client'
import React, { useState } from 'react'
import Setting from './settings/Setting'
import ProviderDrags from './mainContent/ProviderDrag'
import { DefaultElementDragableProps as ItemProps } from '../../model/typeElementdrag'

function Container() {
  const [column2, setColumn2] = useState<ItemProps[]>([])
  const [activeItemId, setActiveItemId] = useState<string | null>(null)
  return (
    <div className='h-screen w-full border flex'>
      <ProviderDrags
        setColumn2={setColumn2}
        column2={column2}
        activeItemId={activeItemId}
        setActiveItemId={setActiveItemId}
      />
      <Setting column2={column2} setColumn2={setColumn2} activeElement={activeItemId} />
    </div>
  )
}

export default Container
