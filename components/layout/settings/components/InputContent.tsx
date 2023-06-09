import React from 'react'

type InputConfigProp = {
  label: string
  changePropsHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  length?: number
  value: string
}
function InputContent({
  label,
  changePropsHandler,
  length,
  value
}: InputConfigProp) {
  return (
    <div className='flex items-center justify-between px-3 m-auto border-b border-b-gray-200 pb-2'>
      <span className='text-sm'>{label}</span>
      <input
        value={value}
        className='border outline-none rounded border-gray-700 w-36'
        type='text'
        maxLength={length}
        name={label}
        onChange={(event) => changePropsHandler(event)}
      />
    </div>
  )
}

export default InputContent
