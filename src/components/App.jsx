import axios from 'axios';
import React, { Component } from 'react';
import './App.css'
import Header from './Header/Header';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoTitle from './VideoTitle/VideoTitle';
import YouTube from './YouTubeAPI/YouTube'
import Search from './Search/Search';
import VideoList from './VideoList/VideoList';
import VideoplayerWindow from './VideoPlayerWindow/VideoPlayerWindow';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videoMetaInfo: [],
      selectedVideoId: null
     }
  }

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId
    })

  }

  onSearch = async (keyword) => {
    const response = await YouTube.get("/search", {
      params: {
        q:keyword
      }
    })
    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    })
    console.log(response)
    console.log(this.state)
  }


  componentDidMount = () => {

  }

  getVideo = () => {

  }

  render() { 
    return ( 
      <div className='container-fluid app-base'>
        <div className='row'>

          <Header />
        </div>
        <div className='row'>
          <VideoTitle />
          
        </div>
        <div className='row'>
          <div className='col'>
          Playlist
          </div>
          <div className='col'>
            <Search onSearch={this.onSearch}/>
            {/* <VideoPlayer /> */}
            <VideoplayerWindow videoId={this.state.selectedVideoId} />
            
          </div>
          <div className='col'>
          recommended
          <VideoList onVideoSelected={this.onVideoSelected} data={this.state.videoMetaInfo}/>
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
