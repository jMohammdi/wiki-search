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

          state.column2 = [...state.column2, changeId]
          state.selectedElement = changeId.id
        }
      }
    }
  }
})
export const { SetcolumnHnadler, setColumnonDropHandler } =
  CreateFormSlice.actions
export default CreateFormSlice.reducer
