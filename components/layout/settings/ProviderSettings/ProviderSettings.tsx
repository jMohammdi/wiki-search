import React, { useEffect } from 'react'
import { DefaultElementDragableProps as elProps } from '@/model/typeElementdrag'
import InputContent from '../components/InputContent'
type SettinElement = {
    elementProps: elProps[]
    activeElId: string | null
}
function ProviderSettings({ elementProps, activeElId }: SettinElement) {
    const findActiveElement: elProps[] = elementProps.filter((el) => el?.id === activeElId)
    const item = findActiveElement[0] ? findActiveElement[0] : null
    const data = item?.configs[0]
    useEffect(() => {

    }, [activeElId])

    return (
        <div className='w-full h-full flex flex-col'>


            <div className='mt-2 p-1' >
                <InputContent label="label" />
            </div>
            <div className='mt-2 p-1' >
                <InputContent label="value" />
            </div>
            <div className='mt-2 p-1' >
                <InputContent label="width" />
            </div>
            <div className='mt-2 p-1' >
                <InputContent label="description" />
            </div>


        </div>
    )
}

export default ProviderSettings