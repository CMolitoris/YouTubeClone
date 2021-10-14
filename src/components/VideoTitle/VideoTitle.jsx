import React, { useState, useEffect } from 'react';
import './VideoTitle.css';
import Col from 'react-bootstrap/Col'


const VideoTitle = (props) => {



    return ( 
            <Col className='text-center title-spacing'>
               {props.title} | {props.channelName} 
            </Col>
    );
}

export default VideoTitle;