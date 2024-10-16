"use client";
import React, { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { CgSpinner } from "react-icons/cg";

type VideoProps = {
  url: string;
  start: number;
  end: number;
};

export const Video = ({ url, start, end }: VideoProps) => {
  const [loading, setLoading] = useState(true);

  const getVideoId = (url: string) => {
    const regExp = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(url);

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      rel: 0,
      controls: 1,
      start: start,
      end: end,
    },
  };

  const onReady = () => {
    setLoading(false);
  };

  const onStateChange = (event: { data: number }) => {
    if (event.data === 1) {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:h-[500px] relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="loader">
            <CgSpinner className="animate-spin" size={25} />
          </div>
        </div>
      )}
      {videoId ? (
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onReady}
          onStateChange={onStateChange}
          className="w-full h-full"
        />
      ) : (
        <p>Invalid YouTube URL</p>
      )}
    </div>
  );
};
