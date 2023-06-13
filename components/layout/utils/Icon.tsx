import React from 'react'
import { IconType } from 'react-icons'
type IconsProps = {
  icon: IconType
}
function Icon({ icon: Icon }: IconsProps) {
  return <div className='flex items-center mt-1 mx-1'>{Icon && <Icon />}</div>
}

export default Icon
