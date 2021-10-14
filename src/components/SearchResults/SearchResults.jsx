import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas';
import VideoList from '../VideoList/VideoList';


const SearchResults = (props) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <Button variant="primary" onClick={handleShow}>Search</Button>
    
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Search Results</Offcanvas.Title>
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

export default SearchResults;