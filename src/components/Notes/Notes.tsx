import React from 'react'
import { Heading, Paragraph} from '../core'

export const Notes = () => {
  return (
    <div id='notes'>
        <div className='space-y-2 mt-3'>
        <Heading># Need to Read Paragraph</Heading>       
        <Paragraph>Creating your first screen in React.js involves building a new component that represents a full page or view in your application. Start by creating a new file for the screen, typically inside a src/components or src/screens folder for better organization. For example, you can create a file named HomeScreen.js. Inside this file, define a functional component using React’s useState or useEffect hooks if needed. The component will return JSX that represents the UI for that screen. Once your screen component is created, import it into your main App.js file and include it in the JSX structure to display the screen. As your application grows, you can manage navigation between multiple screens using a router library like react-router-dom. This modular approach allows you to manage and render different screens dynamically as part of a larger React application.</Paragraph>
        <div className='space-y-2'>
        <Heading># Need to Read Paragraph</Heading>
        <Paragraph>Download and install Node.js from nodejs.org. To confirm that Node.js and npm were installed correctly, open a terminal or command prompt and run:</Paragraph>
        </div>
        </div>
    </div>
  )
}
