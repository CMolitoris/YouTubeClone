import React, { Component } from 'react';
import './App.css'
import Header from './Header/Header';
import VideoTitle from './VideoTitle/VideoTitle';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
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
          Video Player
          </div>
          <div className='col'>
          recommended
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
