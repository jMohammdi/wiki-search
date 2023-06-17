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
  ]
}
const CreateFormSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {}
})

export default CreateFormSlice.reducer
