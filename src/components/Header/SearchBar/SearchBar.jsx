
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

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
            
        <div>
            <Form onSubmit={this.onSubmit} className='get'>
                <Col>
                    <Form.Label>Logo</Form.Label>
                </Col>
                <Col>
                    <Form.Control onChange={this.onChange} value={this.state.title} type="text" name='searchInput'  placeholder="Search..."/>
                </Col>
                <Col>
                    <Button type='submit' className='btn btn-sm btn-danger'>logo</Button>
                </Col>
            </Form>
        </div>
         );
    }
}
 
export default SearchBar;