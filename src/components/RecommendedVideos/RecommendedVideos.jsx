import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Tooltip from 'react-bootstrap/Tooltip'
import VideoList from '../VideoList/VideoList';
import './RecommendedVideos.css'


const RecommendedVideos = (props) => {
    const [show, setShow] = useState(false);
    // const renderTooltip = (props) => {
    //     <Tooltip id="button-tooltip" {...props}>
    //         Recommended Videos
    //     </Tooltip>
    // }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        {/* <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
        </OverlayTrigger> */}
        <Button variant="dark" onClick={handleShow}>Recommended Videos<i className="bi bi-chevron-double-right"></i></Button>
    
        <Offcanvas show={show} onHide={handleClose} placement='end' id='off-canvas'>
            <Offcanvas.Header closeButton className='header shadow'>
            <Offcanvas.Title><h3>Recommended</h3></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                
                <div className="video-list">
                    <div style={{ padding: "30px 0" }}>
                        {/* <h3 style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
                            Search Results
                        </h3> */}
                        <VideoList data={props.data} onVideoSelected={props.onVideoSelected} />
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
    }

export default RecommendedVideos;