import React from 'react'
import { Tutorial } from '../core'

export const Tute = () => {
    const tutorial=[
     "React Js Tutorials Notes",
     "React Js Component Notes",
     "Hook's In react.js"
    ]
  return (
    <div className='space-y-3 '>
        {tutorial.map((item, index) => (
           <Tutorial key={index} title={item}/>
        ))}
    </div>
  )
}
