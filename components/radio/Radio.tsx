import React from 'react'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import Icon from '../layout/utils/Icon'
type CheckBoxProps = {
    text: string
    id: string
    type: string
}
function RadioField({ text, id, type }: CheckBoxProps) {
    return (
        <div className='flex    items-center m-1'>

            <label htmlFor={id} className='mx-2'>{text}</label>
            <input type={type} id={id} />
        </div>
    )
}

export default RadioField
