import React from 'react'

type VideoProps = {
    url: string;
}

export const Video = ({url}: VideoProps) => {
  return (
    <iframe width="100%" height="200px" className="lg:h-[600px] mt-5" src={url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
  )
}
