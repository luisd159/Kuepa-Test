import React from "react";
import ChatComponent from "./ChatComponent";
import VideoComponent from "./VideoComponent";

function HomePage() {
  return (
    <div className=" flex flex-row">
      <div className="w-9/12 h-dvh content-cent">
        <VideoComponent />
      </div>
      <div className="w-3/12 h-dvh bg-slate-300">
        <ChatComponent />
      </div>
    </div>
  );
}

export default HomePage;
