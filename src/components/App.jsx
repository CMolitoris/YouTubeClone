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
      <div className='container-fluid'>
        <div className='row'>
          <Header />
          <VideoTitle />
        </div>
      </div>
     );
  }
}
 
export default App;
