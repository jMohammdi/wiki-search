import React from 'react'
import { TiStarburst } from 'react-icons/ti'

type CheckBoxProps = {
  text: string
  id: string
  type: string | undefined
  value?: string
  width: string
  isRequired: boolean | undefined
  isDisabled: boolean | undefined
}
function TextField({
  text,
  id,
  type,
  value,
  width,
  isRequired,
  isDisabled
}: CheckBoxProps) {
  const x: any = {
    0: 'w-3/12',
    1: 'w-6/12',
    2: 'w-9/12',
    3: 'w-full'
  }
  return (
    <div className='     items-center  m-1 flex'>
      <label
        htmlFor={id}
        className='mx-3 text-sm basis-[105px] flex items-center justify-start'
      >
        <span className='w-3'>
          {isRequired ? <TiStarburst className='text-red-600' /> : null}
        </span>{' '}
        {text}
      </label>
      <input
        className={`border outline-none ${x[width]} p-1 rounded`}
        type={type}
        id={id}
        defaultValue={value}
        placeholder='input type text ...'
        disabled={isDisabled}
        required={isRequired}
        readOnly
      />
    </div>
  )
}

export default TextField
