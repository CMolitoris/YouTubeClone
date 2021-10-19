import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../vet-tube-logo.png';
import './SearchBar.css'


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
                    <Form.Label column xl={3} xs={2} className='text-end'>
                       <img src={logo} className='logo align-self-start' alt="logo" />
                    </Form.Label>
                    <Col xl={6} xs={8} className='my-2'>
                        <Form.Control onChange={this.onChange} value={this.state.title} type="text" name='searchInput'  placeholder="Search..."/>
                    </Col>
                    <Col xl={3} xs={2} className='my-2'>
                        <Button type='submit' className='btn btn-md btn-danger shadow'><i class="bi bi-search"></i></Button>
                    </Col>
                </Form.Group>
            </Form>
         );
    }
}
 
export default SearchBar;