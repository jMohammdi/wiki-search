import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IconType } from 'react-icons'
import { v4 as uuidv4 } from 'uuid'
import { BiText } from 'react-icons/bi'
export interface DefaultElementDragableProps {
  selectedElement: string
  column1: {
    id: string
    icon: IconType
    type?: string
    elementType: string
    titleElement: string
    configs: {
      value?: string
      label: string
      description: string
      isRequired?: boolean
      width: string
      disabled?: boolean
    }[]
  }[]
  column2: DefaultProps
}
;[]
const initialState: DefaultElementDragableProps = {
  selectedElement: '',
  column1: [
    {
      id: uuidv4(),
      titleElement: 'Text Field',
      icon: BiText,
      type: 'text',
      elementType: 'text',
      configs: [
        { description: 'descriptions', label: 'Name', width: '3', value: '' }
      ]
    }
  ],
  column2: []
}
const CreateFormSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    SetcolumnHnadler: (state, action) => {
      state.selectedElement = action.payload
    },
    setColumnonDropHandler: (state, action) => {
      const { event, itemSelected } = action.payload
      const item = state.column1.find(
        (item) => item.id.toString() === itemSelected
      )
      const isUniqueElement = state.column2.find(
        (item) => item.id.toString() === itemSelected
      )

      if (item && !isUniqueElement) {
        const rect = event.currentTarget.getBoundingClientRect()
        const offsetX = event.clientX - rect.left
        const offsetY = event.clientY - rect.top
        if (
          offsetX >= 0 &&
          offsetX <= rect.width &&
          offsetY >= 0 &&
          offsetY <= rect.height
        ) {
          const { icon, type, elementType, configs, titleElement } = item
          const changeId = {
            icon,
            type,
            elementType,
            id: uuidv4(),
            titleElement,
            configs
          }

          state.column2 = [...state.column2, changeId]
          state.selectedElement = changeId.id
        }
      }
    },
    setColumnonOrderHandler: (state, action) => {
      const { event } = action.payload
      const newOrder = [...state.column2]
      const draggedItemIndex = newOrder.findIndex(
        (item) => item.id.toString() === state.selectedElement
      )
      const dropzoneIndex = Array.from(
        event.currentTarget.parentNode.children
      ).indexOf(event.currentTarget)

      if (
        draggedItemIndex !== -1 &&
        dropzoneIndex !== -1 &&
        draggedItemIndex !== dropzoneIndex
      ) {
        const [draggedItem] = newOrder.splice(draggedItemIndex, 1)
        newOrder.splice(dropzoneIndex, 0, draggedItem)
        state.column2 = newOrder
      }
    },
    changeElementValues: (state, action) => {
      const selectAllElementProps = JSON.stringify(state.column2)
      const allPropsArray = JSON.parse(selectAllElementProps)
      let findActiveElement = allPropsArray.filter(
        (el: any) => el?.id === state.selectedElement
      )
      const { value, name, type, checked } = action.payload

      const item = findActiveElement[0].configs[0]
      if (name === 'disabled' || name === 'isRequired') {
        /* @ts-ignore */
        findActiveElement[0].configs[0][name] = checked
      } else {
        /* @ts-ignore */
        findActiveElement[0].configs[0][name] = value
      }
      const findIndex = state.column2.findIndex(
        (element) => element.id === state.selectedElement
      )

      findActiveElement[0].configs[0] = item
      state.column2[findIndex] = findActiveElement[0]
      state.column2 = [...state.column2]
    },
    setactiveElement: (state, action) => {
      state.selectedElement = action.payload
    }
  }
})
export const {
  SetcolumnHnadler,
  setColumnonDropHandler,
  setColumnonOrderHandler,
  changeElementValues,
  setactiveElement
} = CreateFormSlice.actions
export default CreateFormSlice.reducer
