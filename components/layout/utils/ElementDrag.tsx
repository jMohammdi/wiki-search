import React from 'react'
import { IconType } from 'react-icons'
import Icon from './Icon';
type ElementDragProps = {
    id: string;
    icon: IconType
    type: string
    text: string
}
function ElementDrag({ id, icon, type, text }: ElementDragProps) {
    return (
        <div className='flex border rounded  shadow-sm  items-center py-2 m-1'>
            <Icon icon={icon} />
            <span className='mx-2'>{text}</span>
        </div>
    )
}

export default ElementDrag