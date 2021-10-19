import React from "react";
import './VideoList.css'

function selectVideo(videoIdObj, onVideoSelected,title,channelName) {
  onVideoSelected(videoIdObj.videoId,title,channelName);
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
        className="video video-thumbnail shadow"
        key={index}
        onClick={() => selectVideo(id, onVideoSelected,snippet.title,snippet.channelTitle)}>
        <div style={getCss(snippet.thumbnails.high.url)} key={index} />
        <p className="title">{snippet.title}</p>
      </div>
    );
  });
}

const VideoList = ({ data, onVideoSelected }) => {
  console.log(data)
  return <>{constructVideoTitles(data, onVideoSelected)}</>;
};

export default VideoList;