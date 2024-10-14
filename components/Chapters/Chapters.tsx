import React from 'react'
import { Heading, Paragraph, Video } from '../core'

export const Chapters = () => {
    return (
        <div className='space-y-6'>
            <Video url="https://www.youtube.com/embed/SqcY0GlETPk?si=-OHCyzVVo4sxSZVE" />
            <Heading>React Tutorial for Beginners</Heading>
            <div>
                <Paragraph>{`Dive into the world of React with this comprehensive tutorial designed specifically for newcomers! This course will guide you through the fundamentals of React, the popular JavaScript library for building user interfaces. You'll start with the basics, including components, props, and state management, before progressing to more advanced topics such as hooks, context API, and routing.`}</Paragraph>
                <Paragraph>{`Each lesson is filled with practical examples, hands-on projects, and clear explanations to ensure you grasp the core concepts of React development. By the end of this tutorial, you will have the skills and confidence to create your own dynamic web applications using React. Whether you’re a complete beginner or looking to refresh your knowledge, this tutorial is the perfect starting point for your React journey!`}</Paragraph>
            </div>
        </div>
    )
}
