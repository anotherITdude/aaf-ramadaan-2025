'use client'
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";  // Import ReactPlayer for YouTube
import Image from "next/image";
import thumbnail from "@/public/thumbnail.jpg";
import { IoPlayCircleOutline } from "react-icons/io5";

const YoutubeEmbed = ({
  embedId,
  className,
}: {
  embedId: string;
  className: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);  // Set isPlaying to true when the play button is clicked
  };

  const handlePause = () => {
    setIsPlaying(false);  // Set isPlaying to false when the video is paused
  };

  return (
    <div className={className} style={{ height: "100%", position: "relative" }}>
      {!isPlaying ? (
        <div onClick={handlePlay} style={{ cursor: "pointer", height: "600px", position: "relative" }}>
          <Image
            src={thumbnail}
            alt="Video Thumbnail"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "0px" }}
          />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <button style={{ background: "none", border: "none", cursor: "pointer" }}>
              <IoPlayCircleOutline className="text-white hover:text-primary/80 w-[100px] h-[100px]"/>
            </button>
          </div>
        </div>
      ) : (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${embedId}&modestbranding=1&rel=0&showinfo=0`}
          playing={true}
          controls={true}
          width="100%"
          height="600px"
          style={{ borderRadius: "0px" }}
          onPause={handlePause}  // Call handlePause when the video is paused
        />
      )}
    </div>
  );
};

export default YoutubeEmbed;