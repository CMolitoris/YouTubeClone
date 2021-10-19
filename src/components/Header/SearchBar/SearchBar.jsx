
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",

         }
    }

    onChange = (event) => {
        const newTitle = event.target.value;
        this.setState({
            title: newTitle
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onSearch(this.state.title)
    }

    render() { 
        return (
            <Form onSubmit={this.onSubmit} className='get'>
                <Form.Group as={Row} className='my-1' controlID='searchBar'>
                    <Form.Label column xs={2} className='text-end'>
                        Logo
                    </Form.Label>
                    <Col xs={8}>
                        <Form.Control onChange={this.onChange} value={this.state.title} type="text" name='searchInput'  placeholder="Search..."/>
                    </Col>
                    <Col xs={2}>
                        <Button type='submit' className='btn btn-md btn-danger shadow'><i class="bi bi-search"></i></Button>
                    </Col>
                </Form.Group>
            </Form>
         );
    }
}
 
export default SearchBar;