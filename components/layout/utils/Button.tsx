import React from 'react'
type ButtonProps = {
    label: string;
    color: string;
    actionHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
function Button({ label, color, actionHandler }: ButtonProps) {
    return (
        <button onClick={actionHandler} className={`btn w-full
                 mt-1
              text-white 
              text-base  
              border-transparent
              border
              rounded
              py-2
               ${color === 'red' ? 'bg-rose-500' : "bg-lime-500"}
               hover:border-yellow-500`}
        >
            {label}
        </button>
    )
}

export default Button