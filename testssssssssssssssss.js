import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const YourComponent = () => {
  const [items, setItems] = useState([
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' }
  ])

  const onDragEnd = (result) => {
    // Check if the drag ended outside of a droppable area
    if (!result.destination) {
      return
    }

    // Get the dragged item and its index
    const { source, destination } = result
    const draggedItem = items[source.index]
    const draggedIndex = source.index

    // Update the items array with the dragged item frozen in its new position
    const updatedItems = [...items]
    updatedItems.splice(draggedIndex, 1)
    updatedItems.splice(destination.index, 0, draggedItem)

    // Set the updated items array to state
    setItems(updatedItems)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='items'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
