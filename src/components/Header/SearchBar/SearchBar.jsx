import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


const SearchBar = () => {
    const [search, setSearch] = useState({
        searchInput: ''
    })

    const handleChange = (event) => {
        event.persist();
        setSearch((search) => ({
            [event.target.name]: event.target.value,
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return ( 
        <Col>
            <Form onSubmit={handleSubmit} className='get'>
                <Col>
                    <Form.Label>Logo</Form.Label>
                </Col>
                <Col>
                    <Form.Control className='form-control' type="text" name='searchInput'  placeholder="Search..." onChange={handleChange}/>
                </Col>
                <Col>
                    <Button type='submit' className='btn btn-sm btn-danger'>Logo</Button>
                </Col>
                
            </Form>
        </Col>
     );
}

export default SearchBar;