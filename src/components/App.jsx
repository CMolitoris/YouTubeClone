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
import DisplayDescription from './DisplayDescription/DisplayDescription';
import VideoTitle from './VideoTitle/VideoTitle';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videoMetaInfo: [],
      selectedVideoId: null,
      selectedVideoDescription: [],
      relatedVideosMetaInfo: [],
      comments: [],
      replies: []
      
     }
  }

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId
    })
    this.getRelatedVideos(videoId)
    this.getComments(videoId)
    this.getReplies()
    this.getVideoDescription(videoId)
  }

  onSearch = async (keyword) => {
    //-- Attempts to find video based off the keyword as a search type --//
    try {
      const response = await YouTube.get("/search", {
        params: {
          q: keyword
        }
        
      })
      this.setState({
        videoMetaInfo: response.data.items,
        selectedVideoId: response.data.items[0].id.videoId,
      })
      
    }
    catch(error) {
      console.log(error)
    }
    console.log(this.state)

    //-- If a video cannot be found based on the search keyword, a video list will be queried based on a pontential channel name --//
    if(this.state.selectedVideoId===undefined){
      try {
        const response = await YouTube.get("/search", {
          params: {
            channelId: keyword
          }
        })
        console.log(response)
        this.setState({
          videoMetaInfo: response.data.items,
          selectedVideoId: response.data.items[0].id.videoId,
        })
      }
      catch (error) {
        console.log(error)
      }
    }
    console.log(this.state)
    //-- After finding a video, each stateful object will be populated from the database/Django backend --//
    await this.getRelatedVideos(this.state.selectedVideoId)
    await this.getComments(this.state.selectedVideoId)
    await this.getReplies()
    await this.getVideoDescription(this.state.selectedVideoId)
    
  }

  getComments = async (videoId) => {
    let response = await axios.get('http://127.0.0.1:8000/comments/')
    let filteredComments = response.data.filter((comment)=>{
      return comment.videoId ===videoId;
    })
    // console.log(filteredComments)
    this.setState({
      comments: filteredComments
    })
    
  }

  getReplies = async () => {
    let response = await axios.get('http://127.0.0.1:8000/replies/')
    // console.log(response.data)
    this.setState({
      replies: response.data
    })
    
  }

  createComment = async (comment,videoId) => {
    comment.videoId = videoId
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

  likeComment = async (comment) => {
    // console.log(comment)
    let tempComments = this.state.comments;
    let commentIndex = tempComments.indexOf(comment);
    let response = await axios.patch(`http://127.0.0.1:8000/comments/${comment.id}/`, {likes: comment.likes+=1})
    tempComments.splice(commentIndex,1,response.data);
    this.setState({comments: tempComments})

  }

  dislikeComment = async (comment) => {
    // console.log(comment)
    let tempComments = this.state.comments;
    let commentIndex = tempComments.indexOf(comment);
    let response = await axios.patch(`http://127.0.0.1:8000/comments/${comment.id}/`, {dislikes: comment.dislikes+=1})
    tempComments.splice(commentIndex,1,response.data);
    this.setState({comments: tempComments})

  }


  componentDidMount = () => {
    this.getComments(this.state.selectedVideoId)
  }

  getRelatedVideos = async (videoId) => {
    const KEY = 'AIzaSyAEg67dDzltMnI9LlwTB2dl2VgF1y6ymDI';
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${KEY}`)
      this.setState({
        relatedVideosMetaInfo: response.data.items
      })
    }
    catch(error) {
      console.log(error)
    }
    console.log(this.state.relatedVideosMetaInfo)
  }

  getVideoDescription = async (videoId) => {
    const KEY = 'AIzaSyAEg67dDzltMnI9LlwTB2dl2VgF1y6ymDI';

    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${KEY}`)
      let stringDescription = response.data.items[0].snippet.description.split("\n");
    
      let paragraphs = []
      let startIndex = 0
      for(let i=0;i<stringDescription.length;i++){
        if(stringDescription[i]===''){
          let newArray = []
          for(;startIndex<i;startIndex++){
            newArray.push(stringDescription[startIndex])
            
          }
          paragraphs.push(newArray)
        }
      }

      for(let i=0;i<paragraphs.length;i++){
        let string = paragraphs[i].join(' ')
        paragraphs.splice(i,1,string)
        console.log(string)
      }
      console.log(paragraphs)
      this.setState({
        selectedVideoDescription: paragraphs
      })
    }
    catch(error) {
      console.log(error)
    }
    
    console.log(this.state)
  }


  render() { 
    return ( 
      <div className='container-fluid app-base'>

        <div className='row'>
          <Header onSearch={this.onSearch} />
        </div>

        <div>
          <VideoTitle />
        </div>
        
        <div className='row bg-dark'>
          <div className='col-auto'>
            <SearchResults onVideoSelected={this.onVideoSelected} data={this.state.videoMetaInfo} />
          </div>

          <div className='col-auto ms-auto'>
            <RecommendedVideos onVideoSelected={this.onVideoSelected} data={this.state.relatedVideosMetaInfo} />
          </div>
        </div>

        <div className='row bg-dark shadow'>
          <div className='col'>
            <VideoPlayer videoId={this.state.selectedVideoId} />
          </div>
        </div>

        <div className='row'>
          <div className='col-xl-3 col-lg-2 col-sm-none mt-3'>
            <DisplayDescription description={this.state.selectedVideoDescription}/>
          </div>
          <div className='col-xl-6 col-lg-8 col-sm mt-3'>
            <CreateComment createComment={this.createComment} videoId={this.state.selectedVideoId}/>
            <CommentList videoId={this.state.selectedVideoId} dislikeComment={this.dislikeComment} likeComment={this.likeComment} createReply={this.createReply} replies={this.state.replies} comments={this.state.comments}/>
          </div>
          <div className='col-xl-3 col-lg-2 col-sm-none'></div>
        </div>  
        
      </div>
      
     );
  }
}
 
export default App;
