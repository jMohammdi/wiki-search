'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { DragDropContext } from 'react-beautiful-dnd'
import Container from '../Container'
import { initialData } from './faceData'
import Sidebar from '../sidebar/Sidebar'
const Column = dynamic(() => import('./Column'), { ssr: false })

const reorderColumnList = (sourceCol: any, startIndex: any, endIndex: any) => {
  const newTaskIds = Array.from(sourceCol.taskIds)
  const [removed] = newTaskIds.splice(startIndex, 1)
  newTaskIds.splice(endIndex, 0, removed)

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds
  }

  return newColumn
}
function Provider() {
  const [state, setState] = useState(initialData)

  const onDragEnd = (result: any) => {
    const { destination, source } = result

    // If user tries to drop in an unknown destination
    if (!destination) return

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    // If the user drops within the same column but in a different positoin
    const sourceCol = state.columns[source.droppableId]
    const destinationCol = state.columns[destination.droppableId]

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      )

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn
        }
      }
      setState(newState)
      return
    }

    // If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds)
    const [removed] = startTaskIds.splice(source.index, 1)
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds
    }

    const endTaskIds = Array.from(destinationCol.taskIds)
    endTaskIds.splice(destination.index, 0, removed)
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }
    }

    setState(newState)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='flex flex-row h-full  w-full m-1'>
        {state.columnOrder.map((columnId, index) => {
          const column = state.columns[index]
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId])
          return (
            <>
              1
              <Sidebar key={columnId} />
            </>
          )
        })}
      </div>
    </DragDropContext>
  )
}

export default Provider

// state.columnOrder.map((columnId:number) => {
//       const column = state.columns[columnId];
//       const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

//   return null
// })
