import React, { Component } from 'react';
import './App.css'
import Header from './Header/Header';
import YouTube from './YouTubeAPI/YouTube'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import SearchResults from './SearchResults/SearchResults';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';
import axios from 'axios';
import CommentList from './CommentList/CommentList';
import CreateComment from './CreateComment/CreateComment';
// import RecommendedVideoCarousal from './RecommendedVideoCarousal/RecommendedVideoCarousal';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videoMetaInfo: [],
      selectedVideoId: null,
      relatedVideosMetaInfo: [],
      comments: []
      
     }
  }

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId,
    })
    this.getRelatedVideos(videoId)
    this.getComments(videoId)
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
    this.getComments(this.state.selectedVideoId)
    //console.log(this.state)
  }

  getComments = async (videoId) => {
    let response = await axios.get('http://127.0.0.1:8000/comments/')
    let filteredComments = response.data.filter((comment)=>{
      return comment.videoId ===videoId;
    })
    console.log(response.data)
    console.log(filteredComments)
    this.setState({
      comments: filteredComments
    })
  }

  createComment = async (comment) => {
    let response = await axios.post('http://127.0.0.1:8000/comments/',comment)
    let newComments = this.state.comments;
    newComments.push(response.data);
    console.log(response)
    this.setState({
      comments: newComments
    })
  }


  componentDidMount = () => {
    this.getComments(this.state.selectedVideoId)
  }

  getRelatedVideos = async (videoId) => {
    const KEY = 'AIzaSyDP9AghNJkgynFq0oAPDKmt6bE0dWUzjDg';
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${KEY}`)
    this.setState({
      relatedVideosMetaInfo: response.data.items
    })
    //console.log(this.state.relatedVideosMetaInfo)

  }

  render() { 
    return ( 
      <div className='container-fluid app-base'>

        <div className='row'>
          <Header onSearch={this.onSearch} />
          
        </div>

        <div className='row'>
          {/* <VideoTitle title={this.state.selectedVideoTitle} channelName={this.state.selectedVideoChannelTitle} />  */}
        </div>

        <div className='row my-5 bg-dark'>
          <div className='col'>
            <SearchResults onVideoSelected={this.onVideoSelected} data={this.state.videoMetaInfo} />
          </div>


          <div>
            <VideoPlayer videoId={this.state.selectedVideoId} />
          </div>

          <div className='col'>
            <RecommendedVideos onVideoSelected={this.onVideoSelected} data={this.state.relatedVideosMetaInfo} />
          </div>
        
        </div>
        
        <div className='row'>
          
          <CreateComment createComment={this.createComment} videoId={this.state.selectedVideoId}/>
          Comment Section
          <CommentList comments={this.state.comments}/>
        </div>

      </div>
      
     );
  }
}
 
export default App;
