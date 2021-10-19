import './VideoTitle.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const VideoTitle = (props) => {


    if(props.title === '') {
        return ( 
            <Col className='text-center title-spacing'>
                
            </Col>
    );
    }
    return ( 
        <Row>
            <Col className='text-end title-styling h2'>
               {props.title + ' '} |
               
            </Col>
            <Col className='text-start title-styling h2'>
                | {' ' + props.channelName} 
                
            </Col>
        </Row>
    );
}

export default VideoTitle;