import React from "react";
import "./VideoPlayer.css";
import Col from 'react-bootstrap/Col';


const VideoPlayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }
  return (
    <Col className="video-player text-center py-2">
      <iframe
        title={videoId}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </Col>
  );
};
export default VideoPlayer;