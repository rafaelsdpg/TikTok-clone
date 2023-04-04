import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatIcon from "@mui/icons-material/Chat";

function  VideoSidebar ({likes, messager, shares}) {
  const [liked, setLiked] = useState(false);

  function HanddleLike() {
    setLiked(!liked);
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__option" onClick={HanddleLike}>
        {liked ? 
          <FavoriteIcon fontSize="large" />
         : 
          <FavoriteBorderIcon fontSize="large" />
        }

        <p>{liked ? likes+1 : likes }</p>
      </div>
      <div className="videoSidebar__option">
        <ChatIcon fontSize="large" />
        <p> {messager} </p>
      </div>
      <div className="videoSidebar__option">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
