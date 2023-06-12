'use client'
import React, { useState } from 'react'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from 'react-beautiful-dnd'
import Sidebar from '../sidebar/Sidebar'
import Checkbox from '../../checkbox/Checkbox'
import Content from './Content'

interface Item {
  id: string
  content: string
}

const initialItems: Item[] = [
  { id: 'item-1', content: 'Item 1' },
  { id: 'item-2', content: 'Item 2' },
  { id: 'item-3', content: 'Item 3' },
  { id: 'item-4', content: 'Item 4' }
]

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems)
  const [droppedItems, setDroppedItems] = useState<Item[]>([])

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const updatedItems = Array.from(items)
    const [removed] = updatedItems.splice(result.source.index, 1)

    if (result.destination.droppableId === 'column-2') {
      setDroppedItems((prevItems) => [...prevItems, removed])
    }

    setItems(updatedItems)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className='flex w-4/5'>
        {/* Element ✅😊 */}
        <Droppable droppableId='column-1'>
          {(provided) => {
            const { droppableProps, innerRef, placeholder } = provided
            return (
              <Sidebar>
                <div className='w-full' ref={innerRef} {...droppableProps}>
                  {items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => {
                        const { draggableProps, dragHandleProps, innerRef } =
                          provided
                        return (
                          <div
                            ref={innerRef}
                            {...draggableProps}
                            {...dragHandleProps}
                          >
                            <Checkbox title={item.content} />
                          </div>
                        )
                      }}
                    </Draggable>
                  ))}
                  {placeholder}
                </div>
              </Sidebar>
            )
          }}
        </Droppable>
        {/* content ✅😊 */}
        <Droppable droppableId='column-2'>
          {(provided) => {
            const { droppableProps, innerRef, placeholder } = provided
            return (
              <Content>
                <div
                  ref={innerRef}
                  {...droppableProps}
                  className='border border-red-400 h-full'
                >
                  {droppedItems.map((item, index) => (
                    <div
                      className='block'
                      key={item.id}
                      style={{
                        userSelect: 'none',
                        padding: 16,
                        margin: '0 0 8px 0',
                        minHeight: '50px',
                        backgroundColor: 'white',
                        cursor: 'default'
                      }}
                    >
                      {item.content}
                    </div>
                  ))}
                  {placeholder}
                </div>
              </Content>
            )
          }}
        </Droppable>
      </div>
    </DragDropContext>
  )
}

export default App
