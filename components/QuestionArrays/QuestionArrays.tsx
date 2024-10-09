import React from 'react'
import { Heading } from '../core'
import { Radio } from '../core/input'

export const QuestionArrays = () => {

    const questions = [
        {
            label: "What is the primary purpose of React?",
            input: [
                {
                    index: "A)",
                    name: "radio1",
                    value: "To manage server-side data"
                },
                {
                    index: "B)",
                    name: "radio1",
                    value: "To build user interfaces"
                },
                {
                    index: "C)",
                    name: "radio1",
                    value: "To connect databases"
                },
                {
                    index: "D)",
                    name: "radio1",
                    value: "To write CSS"
                }
            ]
        },
        {
            label: "How Does ReactJS work?",
            input: [
                {
                    index: "A)",
                    name: "radio2",
                    value: "Its One pade web"
                },
                {
                    index: "B)",
                    name: "radio2",
                    value: " To build other pages"
                },
                {
                    index: "C)",
                    name: "radio2",
                    value: "To continue dom"
                },
                {
                    index: "D)",
                    name: "radio2",
                    value: "On server manage"
                }
            ]
        },
        {
            label: "How to Create a YouTube Clone Using React?",
            input: [
                {
                    index: "A)",
                    name: "radio3",
                    value: "programming language"
                },
                {
                    index: "B)",
                    name: "radio3",
                    value: "react"
                },
                {
                    index: "C)",
                    name: "radio3",
                    value: "JavaScript"
                },
                {
                    index: "D)",
                    name: "radio3",
                    value: " web development"
                }
            ]
        },
        {
            label: "A Beginners Guide To React Props?",
            input: [
                {
                    index: "A)",
                    name: "radio4",
                    value: "JavaScript library"
                },
                {
                    index: "B)",
                    name: "radio4",
                    value: " React's components"
                },
                {
                    index: "C)",
                    name: "radio4",
                    value: "understand its concepts"
                },
                {
                    index: "D)",
                    name: "radio4",
                    value: "mobile applications"
                }
            ]
        },
    ]

    return (
        <form id='queries'>
            
            <Heading>Answer The Questions</Heading>
            <div className='space-y-5'>
            {questions.map((item, index) => (
                <div key={index} className='mt-3'>
                    <p className='text-[20px] font-bold'>{item.label}</p>
                    <div className='flex gap-5 flex-wrap mt-2'>
                    {item.input.map((radio, index) => (

                        <Radio key={index}  index={radio.index} name={radio.name} value={radio.value}/>

                    ))}
                    </div>
                </div>
            ))}
            </div>
        </form>
    )
}
