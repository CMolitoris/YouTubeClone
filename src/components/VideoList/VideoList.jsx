import React from "react";

function selectVideo(videoIdObj, onVideoSelected,description) {
  onVideoSelected(videoIdObj.videoId,description);
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
        onClick={() => selectVideo(id, onVideoSelected,snippet.description)}>
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