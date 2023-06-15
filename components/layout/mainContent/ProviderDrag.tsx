'use client'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { DefaultElementDragableProps as ItemProps } from '../../../model/typeElementdrag'
import { Elements } from '../../../model/SampleData'
import Sidebar from '../sidebar/Sidebar'
import ElementDrag from '../utils/ElementDrag'
import Content from './Content'
import ElementCreator from '@/components/ElementCreator/components/ElementCreator'

interface MyComponentProps {
  setColumn2: React.Dispatch<React.SetStateAction<ItemProps[]>>
  column2: ItemProps[]
  activeItemId: string | null
  setActiveItemId: React.Dispatch<React.SetStateAction<string | null>>
}

const ExampleComponent = ({
  setColumn2,
  column2,
  setActiveItemId,
  activeItemId
}: MyComponentProps) => {
  const [column1, setColumn1] = useState<ItemProps[]>(Elements)

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    item: ItemProps
  ) => {
    // Store the dragged item's ID
    event.dataTransfer.setData('text/plain', item.id.toString())
  }
  const handleDragStartColumn2 = (
    event: React.DragEvent<HTMLDivElement>,
    item: ItemProps
  ) => {
    // Store the dragged item's ID
    event.dataTransfer.setData('text/plain', item.id.toString())
    setActiveItemId(item.id.toString())
  }
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const itemId = event.dataTransfer.getData('text/plain')
    const item = column1.find((item) => item.id.toString() === itemId)
    const isUniqueElement = column2.find(
      (item) => item.id.toString() === itemId
    )

    if (item && !isUniqueElement) {
      const rect = event.currentTarget.getBoundingClientRect()
      const offsetX = event.clientX - rect.left
      const offsetY = event.clientY - rect.top

      // Check if the drop occurred inside the target container
      if (
        offsetX >= 0 &&
        offsetX <= rect.width &&
        offsetY >= 0 &&
        offsetY <= rect.height
      ) {
        // Remove the item from Column 1 🧰
        // setColumn1((prevColumn1) => prevColumn1.filter((i) => i.id !== item.id));

        // Add the item to Column 2
        const { icon, type, elementType, configs, titleElement } = item
        const changeId = {
          icon,
          type,
          elementType,
          id: uuidv4(),
          titleElement,
          configs
        }

        setColumn2([...column2, changeId])
        setActiveItemId(changeId.id)
      }
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const newOrder = [...column2] // Create a copy of column2
    const itemId = event.dataTransfer.getData('text/plain')
    const draggedItemIndex = newOrder.findIndex(
      (item) => item.id.toString() === activeItemId
    )
    const dropzoneIndex = Array.from(
      event.currentTarget.parentNode.children
    ).indexOf(event.currentTarget)

    console.log('draggedItemIndex:', draggedItemIndex)
    console.log('dropzoneIndex:', dropzoneIndex)

    if (
      draggedItemIndex !== -1 &&
      dropzoneIndex !== -1 &&
      draggedItemIndex !== dropzoneIndex
    ) {
      const [draggedItem] = newOrder.splice(draggedItemIndex, 1)
      newOrder.splice(dropzoneIndex, 0, draggedItem)
      setColumn2(newOrder)
    }
  }

  return (
    <>
      {/* (wrapper) sidebar Element */}
      <Sidebar>
        <div className='w-full h-full'>
          {column1.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(event) => handleDragStart(event, item)}
            >
              <ElementDrag key={item.id} {...item} />
            </div>
          ))}
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
              onClick={() => setActiveItemId(item.id)}
              draggable
              onDragStart={(event) => handleDragStartColumn2(event, item)}
              className={`border my-1 rounded p-1 ${
                activeItemId === item.id ? 'border-blue-400' : ''
              }`}
            >
              <ElementCreator key={item.id} item={item} />
            </div>
          ))}
        </div>
      </Content>
    </>
  )
}

export default ExampleComponent
