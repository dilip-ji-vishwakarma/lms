import React from 'react'
import { IconRender } from '../IconRender';
type TutorialProps = {
    title: string;
}

export const Tutorial = ({title}:TutorialProps) => {
  return (
      <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <div className="w-8 h-8 flex items-center justify-center  rounded-full">
              <IconRender name='FileText' />
          </div>
          <span className="font-bold text-xl pl-4">{title}</span>
      </div>
  )
}
