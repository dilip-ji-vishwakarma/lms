"use client";
import React, { useState } from 'react';
import YouTube, { YouTubeProps} from 'react-youtube';
import { CgSpinner } from "react-icons/cg";

type VideoProps = {
  url: string;
};

export const Video = ({ url }: VideoProps) => {
  const [loading, setLoading] = useState(true);

  const getVideoId = (url: string) => {
    const regExp = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(url);

  const opts: YouTubeProps['opts'] = {
    height: '500px',
    width: '100%',
    playerVars: {
      autoplay: 0,
      rel: 0,
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
    <div className="w-full h-[500px] relative">
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
        />
      ) : (
        <p>Invalid YouTube URL</p>
      )}
    </div>
  );
};
