import React from "react";
import ReactPlayer from "react-player";

function VideoComponent() {
  return (
    <div>
      <ReactPlayer
        controls={true}
        url="https://www.youtube.com/watch?v=jhd1XsuQabw"
      />
    </div>
  );
}

export default VideoComponent;
