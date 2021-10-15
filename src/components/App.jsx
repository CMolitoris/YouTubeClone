import React, { Component } from 'react';
import './App.css'
import Header from './Header/Header';
import YouTube from './YouTubeAPI/YouTube'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import SearchResults from './SearchResults/SearchResults';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';
import axios from 'axios';
// import RecommendedVideoCarousal from './RecommendedVideoCarousal/RecommendedVideoCarousal';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videoMetaInfo: [],
      selectedVideoId: null,
      relatedVideosMetaInfo: []
      
     }
  }

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId,
    })
    this.getRelatedVideos(videoId)
  }

  onSearch = async (keyword) => {
    const response = await YouTube.get("/search", {
      params: {
        q:keyword
      }
    })

    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
      
    })
    this.getRelatedVideos(this.state.selectedVideoId)
    console.log(this.state)
  }


  componentDidMount = () => {

  }

  getRelatedVideos = async (videoId) => {
    const KEY = 'AIzaSyDP9AghNJkgynFq0oAPDKmt6bE0dWUzjDg';
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${KEY}`)
    this.setState({
      relatedVideosMetaInfo: response.data.items
    })
    console.log(response.data)

  }

  render() { 
    return ( 
      <div className='container-fluid app-base'>

        <div className='row'>
          <Header onSearch={this.onSearch} />
          <SearchResults onVideoSelected={this.onVideoSelected} data={this.state.videoMetaInfo} />
          <RecommendedVideos onVideoSelected={this.onVideoSelected} data={this.state.relatedVideosMetaInfo} />
        </div>

        <div className='row'>
          {/* <VideoTitle title={this.state.selectedVideoTitle} channelName={this.state.selectedVideoChannelTitle} />  */}
        </div>

        <div className='row my-5 bg-dark'>
          {/* <div className='col'>
            Playlist
          </div> */}


          <div>
            <VideoPlayer videoId={this.state.selectedVideoId} />
          </div>
        
        </div>
        
        <div className='row'>
          Comment Section
        </div>

      </div>
      
     );
  }
}
 
export default App;
