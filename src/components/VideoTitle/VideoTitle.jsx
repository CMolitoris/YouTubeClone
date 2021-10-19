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
            <Col className='text-center title-styling my-3 h4'>
                {props.title}
            </Col>
        </Row>
    );
}

export default VideoTitle;