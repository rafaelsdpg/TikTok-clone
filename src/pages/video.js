import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/VideoFooter/videoFooter";
import VideoSidebar from "./components/videoSidebar/videoSidebar";

function Video({ likes, messager, shares, name, description, music, url,musica }) {
  const videoRef = useRef(null);

  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoFooter name={name} description={description} music={music} musica={musica}/>
      <VideoSidebar likes={likes} messager={messager} shares={shares} />
    </div>
  );
}

export default Video;
