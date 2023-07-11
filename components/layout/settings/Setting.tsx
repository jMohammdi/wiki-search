import React from 'react'
import ProviderSettings from './ProviderSettings/ProviderSettings'
import { DefaultElementDragableProps as ItemProps } from '../../../model/typeElementdrag';
import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
interface ColumnProps {
  column2: ItemProps[]
  activeElement: string | null
  setColumn2: React.Dispatch<React.SetStateAction<ItemProps[]>>
}
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
function Setting() {
  const column2 = useAppSelector((state) => state.builder.column2)
  return <div className=' w-96 border'>
    <div className='w-full p-2 text-center text-white text-base bg-cyan-400'>
      Settings
    </div>
    {column2.length > 0 && <ProviderSettings />}
    {column2.length === 0 && <h3 className='text-center mt-3 text-red-600'>موردی یافت نشد</h3>}

  </div>
}

export default Setting
