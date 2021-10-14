import React from "react";
// import "./VideoPlayer.css";
function selectVideo(videoIdObj, onVideoSelected,title,channelTitle) {
  onVideoSelected(videoIdObj.videoId,title,channelTitle);
}

function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "180px",
    position: "relative"
  };
  return _styles;
}

function constructVideoTitles(vidoesData, onVideoSelected) {
  return vidoesData.map(({ snippet, id }, index) => {
    return (
      <div
        className="video"
        key={index}
        onClick={() => selectVideo(id, onVideoSelected,snippet.title,snippet.channelTitle)}>
        <div style={getCss(snippet.thumbnails.high.url)} key={index} />
        <p className="title">{snippet.title}</p>
      </div>
    );
  });
}

const VideoPlayer = ({ data, onVideoSelected }) => {
  return <>{constructVideoTitles(data, onVideoSelected)}</>;
};

export default VideoPlayer;