import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas';

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
                something
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
    }

export default SearchResults;