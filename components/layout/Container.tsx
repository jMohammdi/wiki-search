'use client'
import React, { useState } from 'react'
import Setting from './settings/Setting'
import ProviderDrags from './mainContent/ProviderDrag'
import { DefaultElementDragableProps as ItemProps, GridSystemProps } from '../../model/typeElementdrag'
import { Grids } from '@/model/SampleData'
function Container() {
  // const [column2, setColumn2] = useState<ItemProps[]>([])
  // const [gridTemplate, setGridTemplate] = useState<GridSystemProps[]>(Grids)
  // const [activeItemId, setActiveItemId] = useState<string | null>(null)
  return (
    <div className='h-screen w-full border flex'>
      <ProviderDrags />
      <Setting />
    </div>
  )
}

export default Container
