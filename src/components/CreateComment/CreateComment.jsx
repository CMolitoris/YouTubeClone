import React, { Component } from 'react';
import './CreateComment.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';



class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            body: '',
            videoId: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.createComment(this.state, this.props.videoId)
        this.setState({
            username: '',
            body: '',
            videoId: ''
        })
    }
    
    handleOnClick = (event) => {
    }

    render() { 
        return ( 
            <div className='col-6 mx-auto mt-3'>
                
                <Accordion>
                    <Accordion.Item className='bg-dark' eventKey='0'>
                    <Accordion.Button onClick={this.handleOnClick} className='panel-toggle panel-height bg-dark' eventKey='0'>
                        <h3 className='panel-toggle ms-auto'>Create Comment:</h3>
                    </Accordion.Button>    
                        <Accordion.Body>
                            <form onSubmit={(event)=> this.handleSubmit(event)}>
                                <Form.Group as={Row} className='my-1' controlID='createComment'>
                                    <Col lg={3}>
                                        <Form.Control placeholder="Username.." name="username" onChange={this.handleChange} value={this.state.username}/>
                                    </Col>
                                    <Col lg={7}>
                                        <Form.Control placeholder="Comment.." name="body" onChange={this.handleChange} value={this.state.body}/>
                                    </Col>
                                    <Col lg={1}>
                                        <Button className='btn btn-md btn-danger shadow' type="submit">Submit</Button>
                                    </Col>
                                </Form.Group>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            
         );
    }
}
 
export default CreateComment;