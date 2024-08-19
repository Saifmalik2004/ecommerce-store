import { cn } from '@/lib/utils'
import React, { MouseEventHandler } from 'react'
interface IconButtonProps{
    onClick?:MouseEventHandler<HTMLButtonElement> | undefined;
    icon:React.ReactElement;
    className?:string;
}
const IconButton:React.FC<IconButtonProps>=({
onClick,
icon,
className
})=> {
  return (
    <button
    onClick={onClick}
     className={cn("rounded-full flex items-center justify-center bg-white border p-2 shadow-md hover:scale-110 transition",className)}>
        {icon}

    </button>
  )
}

export default IconButton