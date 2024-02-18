import React from "react";
import ChatComponent from "./ChatComponent";
import VideoComponent from "./VideoComponent";

function HomePage() {
  return (
    <div className="flex flex-row h-[calc(100%_-_64px)]">
      <div className="flex justify-center items-center w-[calc(100%_-_400px)]">
        <VideoComponent />
      </div>
      <div className="w-[400px] bg-slate-300">
        <ChatComponent />
      </div>
    </div>
  );
}

export default HomePage;
