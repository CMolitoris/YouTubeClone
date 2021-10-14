import React, { Component } from 'react';
import './App.css'
import Header from './Header/Header';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoTitle from './VideoTitle/VideoTitle';
import SearchResults from './SearchResults/SearchResults';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  componentDidMount = () => {

  }

  getVideo = () => {
    
  }

  render() { 
    return ( 
      <div className='container-fluid app-base'>
        <div className='row'>
          <Header getVideo={this.getVideo} />
          <SearchResults />
        </div>
        <div className='row'>
          <VideoTitle />
        </div>
        <div className='row'>
          {/* <div className='col'>
          Playlist
          </div> */}
          <div>
            <VideoPlayer />
          </div>
          {/* <div className='col'>
          recommended
          </div> */}
        </div>
        <div className='row'>
          Comment Section
        </div>
      </div>
     );
  }
}
 
export default App;
