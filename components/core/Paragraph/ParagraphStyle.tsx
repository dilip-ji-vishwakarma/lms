import React from 'react'

type Paragraph = {
    time: string;
    title: string;
    description: string;
}

export const ParagraphStyle = ({time, title, description}: Paragraph) => {
  return (
    <p><b>{time}</b> <i>{title}</i>{description}</p>
  )
}