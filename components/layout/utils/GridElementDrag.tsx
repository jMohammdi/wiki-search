import React from 'react'
import { GridSystemProps } from '@/model/typeElementdrag'
import Icon from './Icon'
function GridElementDrag({ columns, icon, id, title, childrens }: GridSystemProps) {
    return (
        <div className='flex border rounded  shadow-sm  items-center py-2 m-1'>
            <Icon icon={icon} />
            <span className='mx-1'>{title}</span>
        </div>
    )
}

export default GridElementDrag