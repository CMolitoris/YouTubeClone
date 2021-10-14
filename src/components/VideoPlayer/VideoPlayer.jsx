import React from "react";
<<<<<<< Updated upstream
// import "./VideoPlayer.css";
function selectVideo(videoIdObj, onVideoSelected,title,channelTitle) {
  onVideoSelected(videoIdObj.videoId,title,channelTitle);
}
=======
import "./VideoPlayer.css";
>>>>>>> Stashed changes


const VideoPlayer = ({ videoId }) => {
  if (!videoId) {
    return (
<<<<<<< Updated upstream
      <div
        className="video"
        key={index}
        onClick={() => selectVideo(id, onVideoSelected,snippet.title,snippet.channelTitle)}>
        <div style={getCss(snippet.thumbnails.high.url)} key={index} />
        <p className="title">{snippet.title}</p>
      </div>
=======
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
>>>>>>> Stashed changes
    );
  }
  return (
    <div className="video-player">
      <iframe
        title={videoId}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </div>
  );
};
export default VideoPlayer;