import React from 'react'

type InputConfigProp = {
    label: string
}
function InputContent({ label }: InputConfigProp) {
    return (
        <div className='flex items-center justify-between px-3 m-auto border-b border-b-gray-200 pb-2'>
            <span className='text-sm'>{label}</span>
            <input className='border outline-none rounded border-gray-700 w-36' type="text" />
        </div>
    )
}

export default InputContent