import "./App.css";
import Video from "./pages/video";
import React, { useEffect, useState } from "react";
import db from "./config/firebase";
import { collection, doc, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videoCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videoCollection);
    const videoList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messager={item.mensager}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
              musica={item.musica}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
