'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from '@/store'
import { SetcolumnHnadler, setColumnonDropHandler, setactiveElement } from '@/store/DragDrop'
import {
  DefaultElementDragableProps as ItemProps,
} from '../../../model/typeElementdrag'
import Sidebar from '../sidebar/Sidebar'
import ElementDrag from '../utils/ElementDrag'
import Content from './Content'
import ElementCreator from '@/components/ElementCreator/components/ElementCreator'




export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const ExampleComponent = () => {
  const dispatch = useAppDispatch()
  const column1 = useAppSelector((state) => state.builder.column1)
  const column2 = useAppSelector((state) => state.builder.column2)
  const activeItemId = useAppSelector((state) => state.builder.selectedElement)
  //✅
  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    item: string
  ) => {
    // Store the dragged item's ID
    event.dataTransfer.setData('text/plain', item.toString())
  }
  //✅
  const handleDragStartColumn2 = (
    event: React.DragEvent<HTMLDivElement>,
    item: ItemProps
  ) => {
    // Store the dragged item's ID
    event.dataTransfer.setData('text/plain', item.id.toString())
    dispatch(SetcolumnHnadler(item.id))
  }
  //✅
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const itemId = event.dataTransfer.getData('text/plain')
    dispatch(setColumnonDropHandler({ event, itemSelected: itemId }))
  }
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    dispatch(setColumnonDropHandler({ event }))

  }

  return (
    <>
      {/* (wrapper) sidebar Element */}
      <Sidebar>
        <div className='w-full h-64'>
          {column1.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(event) => handleDragStart(event, item.id)}
            >
              <ElementDrag key={item.id} {...item} />
            </div>
          ))}
          {/* {gridTemplate.map((item) => (
            <div
              onDragStart={(event) => handleDragStart(event, item.id)}
              key={item.id}
              draggable
            >
              <GridItem {...item} />
            </div>
          ))} */}
        </div>
      </Sidebar>
      {/* (wrapper) content Element */}
      <Content>
        <div
          className='w-full h-full'
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
        >
          {column2.map((item, index) => (
            <div
              key={item.id}
              onClick={() => dispatch(setactiveElement(item.id))}
              draggable
              onDragStart={(event) => handleDragStartColumn2(event, item)}
              className={`border my-1 rounded p-1 ${activeItemId === item.id ? 'border-blue-400' : ''
                }`}
            >
              <ElementCreator key={item.id} item={item} />
            </div>
          ))}
          {/* {gridTemplate.map((item) => <p className='border border-blue-500 rounded p-1 h-auto' key={item.id}> {item.title}</p>)} */}
        </div>
      </Content>
    </>
  )
}

export default ExampleComponent
