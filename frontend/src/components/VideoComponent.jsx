import React from "react";
import ReactPlayer from "react-player";

function VideoComponent() {
  return (
    <ReactPlayer
      controls={true}
      url="https://www.youtube.com/watch?v=jhd1XsuQabw"
    />
  );
}

export default VideoComponent;
