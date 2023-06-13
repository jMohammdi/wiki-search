import React from 'react'

function InputContent() {
    return (
        <div className='flex items-center justify-around w-4/5 m-auto border-b border-b-gray-200 pb-2'>
            <span className='text-sm'>Name</span>
            <input className='border outline-none rounded border-gray-700 w-36' type="text" />
        </div>
    )
}

export default InputContent