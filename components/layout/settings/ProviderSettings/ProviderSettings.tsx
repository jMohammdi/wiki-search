import React, { useEffect } from 'react'
import { DefaultElementDragableProps as elProps } from '@/model/typeElementdrag'
import InputContent from '../components/InputContent'
type SettinElement = {
  elementProps: elProps[]
  activeElId: string | null
  setColumn2: React.Dispatch<React.SetStateAction<elProps[]>>
}
function ProviderSettings({
  elementProps,
  activeElId,
  setColumn2
}: SettinElement) {
  const allProps = JSON.stringify(elementProps)
  const allPropsArray = JSON.parse(allProps)
  const findActiveElement = allPropsArray.filter(
    (el: any) => el?.id === activeElId
  )
  /* @ts-ignore */
  const typeEvents =
    React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  /* @ts-ignore */
  const changeElPropHnadler = (event: typeEvents): void => {
    const { value, name, type, checked } = event.target
    const item = findActiveElement[0].configs[0]

    if (name === 'disabled' || name === 'isRequired') {
      /* @ts-ignore */
      findActiveElement[0].configs[0][name] = checked
    } else {
      /* @ts-ignore */
      findActiveElement[0].configs[0][name] = value
    }
    const findIndex = elementProps.findIndex(
      (element) => element.id === activeElId
    )
    findActiveElement[0].configs[0] = item
    elementProps[findIndex] = findActiveElement[0]
    setColumn2([...elementProps])
    // findActiveElement[0].configs[0]['value'] = "javaddedddddddd"
  }
  const { description, label, width, disabled, isRequired, value } =
    findActiveElement[0].configs[0]
  //   useEffect(() => {
  //     alert(123)
  //   }, [activeElId])
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='mt-2 p-1'>
        <InputContent
          label='label'
          changePropsHandler={changeElPropHnadler}
          length={10}
          value={label}
        />
      </div>
      <div className='mt-2 p-1'>
        <InputContent
          label='value'
          changePropsHandler={changeElPropHnadler}
          length={15}
          value={value}
        />
      </div>
      <div className='mt-2 p-1 text-center w-full flex items-center justify-between px-4'>
        <div>width</div>
        <select
          value={width}
          name='width'
          onChange={(event) => changeElPropHnadler(event)}
          id='countries'
          className=' outline-none
                bg-gray-50 border border-gray-300 text-gray-900
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                 block  p-1 w-[145px]
                  '
        >
          <option value='0'>25</option>
          <option value='1'>50</option>
          <option value='2'>75</option>
          <option value='3' selected>
            100
          </option>
        </select>
      </div>
      <div className='mt-2 p-1 px-4'>
        <div>description</div>
        <textarea
          value={description}
          onChange={(event) => changeElPropHnadler(event)}
          name='description'
          className='outline-none border focus:outline-none rounded resize-y'
          cols={30}
          rows={10}
        />
      </div>
      <div className='mt-2 p-1 flex items-center justify-between px-4'>
        <div>isDisable</div>
        <label className='relative inline-flex items-center cursor-pointer'>
          <input
            type='checkbox'
            name='disabled'
            className=' outline-none focus:outline-none border'
            onChange={(event) => changeElPropHnadler(event)}
            checked={disabled ? true : false}
          />
        </label>
      </div>
      <div className='mt-2 p-1 flex items-center justify-between px-4'>
        <div>isRequired</div>
        <label className='relative inline-flex items-center cursor-pointer'>
          <input
            type='checkbox'
            name='isRequired'
            className='outline-none focus:outline-none'
            onChange={(event) => changeElPropHnadler(event)}
            checked={isRequired ? true : false}
          />
        </label>
      </div>
      <div className='w-full text-center px-3'>
        <button
          className='btn w-full
                text-white 
                text-base  
                border-transparent
                border
                rounded
                py-1
                 bg-rose-500
                 hover:border-yellow-500'
        >
          export
        </button>
      </div>
    </div>
  )
}

export default ProviderSettings
