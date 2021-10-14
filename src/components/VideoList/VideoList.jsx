import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";


const VideoList = ({ data, onVideoSelected }) => {
  return (
    <div className="video-list">
      <div style={{ padding: "20px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          Videos List
        </h3>
        <VideoPlayer data={data} onVideoSelected={onVideoSelected} />
      </div>
    </div>
  );
};

export default VideoList;