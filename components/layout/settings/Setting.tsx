import React from 'react'
import ProviderSettings from './ProviderSettings/ProviderSettings'
import { DefaultElementDragableProps as ItemProps } from '../../../model/typeElementdrag';
interface ColumnProps {
  column2: ItemProps[]
}
function Setting({ column2 }: ColumnProps) {
  return <div className=' w-96'>
    <div className='w-full p-2 text-center text-white text-base bg-cyan-400'>
      Settings
    </div>
    {column2.length > 0 && <ProviderSettings />}
    {column2.length === 0 && <h3 className='text-center mt-3 text-red-600'>موردی یافت نشد</h3>}

  </div>
}

export default Setting
