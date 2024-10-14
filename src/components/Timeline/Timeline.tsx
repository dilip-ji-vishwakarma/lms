import React from 'react'
import { Heading, ParagraphStyle } from '../core'

export const Timeline = () => {

    const timeLine = [
        {
            time: "00:49:",
            title: "Downloading Required Dependencies-",
            description: "When starting a React.js project, downloading the required dependencies is an essential step to ensure your development environment is properly set up. To begin, you'll need Node.js installed on your system, as React relies on its package manager, npm (Node Package Manager), or an alternative like Yarn, to install the necessary modules. After setting up Node.js, navigate to your project directory in the terminal and run the command npx create-react-app your-project-name. This command automatically installs the essential dependencies like React, React-DOM, and Webpack, which are crucial for building, rendering, and bundling your React application. Once the dependencies are downloaded, you can start your development server using npm start, and you're ready to build your React app."
        },
        {
            time: "00:49:",
            title: "Downloading Required Dependencies-",
            description: "When starting a React.js project, downloading the required dependencies is an essential step to ensure your development environment is properly set up. To begin, you'll need Node.js installed on your system, as React relies on its package manager, npm (Node Package Manager), or an alternative like Yarn, to install the necessary modules. After setting up Node.js, navigate to your project directory in the terminal and run the command npx create-react-app your-project-name. This command automatically installs the essential dependencies like React, React-DOM, and Webpack, which are crucial for building, rendering, and bundling your React application. Once the dependencies are downloaded, you can start your development server using npm start, and you're ready to build your React app."
        },
        {
            time: "00:49:",
            title: "Downloading Required Dependencies-",
            description: "When starting a React.js project, downloading the required dependencies is an essential step to ensure your development environment is properly set up. To begin, you'll need Node.js installed on your system, as React relies on its package manager, npm (Node Package Manager), or an alternative like Yarn, to install the necessary modules. After setting up Node.js, navigate to your project directory in the terminal and run the command npx create-react-app your-project-name. This command automatically installs the essential dependencies like React, React-DOM, and Webpack, which are crucial for building, rendering, and bundling your React application. Once the dependencies are downloaded, you can start your development server using npm start, and you're ready to build your React app."
        },
        {
            time: "00:49:",
            title: "Downloading Required Dependencies-",
            description: "When starting a React.js project, downloading the required dependencies is an essential step to ensure your development environment is properly set up. To begin, you'll need Node.js installed on your system, as React relies on its package manager, npm (Node Package Manager), or an alternative like Yarn, to install the necessary modules. After setting up Node.js, navigate to your project directory in the terminal and run the command npx create-react-app your-project-name. This command automatically installs the essential dependencies like React, React-DOM, and Webpack, which are crucial for building, rendering, and bundling your React application. Once the dependencies are downloaded, you can start your development server using npm start, and you're ready to build your React app."
        }
    ]

  return (
    <div id='description'>
        <Heading>1. Introduction to React JS</Heading>
        <div className='space-y-5 mt-3'>
        {timeLine.map((item, index) => (
            <ParagraphStyle key={index} time={item.time} title={item.title} description={item.description} />
        ))}
        </div>
    </div>
  )
}
