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
      comments: [],
      replies: []
      
     }
  }

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId,
    })
    this.getRelatedVideos(videoId)
    this.getComments(videoId)
    this.getReplies()
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
    this.getReplies()
    //console.log(this.state)
  }

  getComments = async (videoId) => {
    let response = await axios.get('http://127.0.0.1:8000/comments/')
    let filteredComments = response.data.filter((comment)=>{
      return comment.videoId ===videoId;
    })
    console.log(filteredComments)
    this.setState({
      comments: filteredComments
    })
    
  }

  getReplies = async () => {
    let response = await axios.get('http://127.0.0.1:8000/replies/')
    console.log(response.data)
    this.setState({
      replies: response.data
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

  createReply = async (reply) => {
    let response = await axios.post('http://127.0.0.1:8000/replies/',reply)
    let newReplies = this.state.replies;
    newReplies.push(response.data);
    console.log(response)
    this.setState({
      replies: newReplies
    })
  }


  componentDidMount = () => {
    this.getComments(this.state.selectedVideoId)
  }

  getRelatedVideos = async (videoId) => {
    const KEY = 'AIzaSyAEg67dDzltMnI9LlwTB2dl2VgF1y6ymDI';
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
          
          <CreateComment createComment={this.createComment} videoId={this.state.selectedVideoId}/>
          Comment Section:
          <CommentList createReply={this.createReply} replies={this.state.replies} comments={this.state.comments}/>
        </div>

      </div>
      
     );
  }
}
 
export default App;
