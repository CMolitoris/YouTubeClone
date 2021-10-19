import React from "react";
import "./VideoPlayer.css";
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';


const VideoPlayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <Col className='loading-spinner'>
        <Button variant="dark" disabled >
          <h3>Please search for a video.</h3> 
          <Spinner
            as="span"
            animation="grow"
            size="lg"
            role="status"
            aria-hidden="true"
          />
          <h3>User Loading...</h3>
        </Button>
      </Col>
      // <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
      //   Search for a video
      // </p>
    );
  }
  return (
    <Col className="video-player mx-auto text-center py-2">
      <iframe
        title={videoId}
        className="video-iframe border border-danger border-4 rounded-3 shadow"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </Col>
  );
};
export default VideoPlayer;