import './VideoTitle.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const VideoTitle = (props) => {


    if(props.title === null) {
        return ( 
            <Col className='text-center title-spacing'>
                
            </Col>
    );
    }
    return ( 
        <Row>
            <Col className='text-end title-styling h2'>
               {/* {props.title + ' '} | */}
               This Title |
            </Col>
            <Col className='text-start title-styling h2'>
                {/*| {' ' + props.channelName}  */}
                | Channel Name
            </Col>
        </Row>
    );
}

export default VideoTitle;