import React, { Component } from 'react';
import './CreateComment.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


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

    render() { 
        return ( 
            <div className='col-auto mx-auto'>
                <h3>Add a comment:</h3>
                <form onSubmit={(event)=> this.handleSubmit(event)}>
                    <Form.Group as={Row} className='my-1' controlID='createComment'>
                        <Col lg={3}>
                            <Form.Control placeholder="Username.." name="username" onChange={this.handleChange} value={this.state.username}/>
                        </Col>
                        <Col lg={8}>
                            <Form.Control placeholder="Comment.." name="body" onChange={this.handleChange} value={this.state.body}/>
                        </Col>
                        <Col lg={1}>
                            <Button className='btn btn-md btn-danger shadow' type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </form>
            </div>
            
         );
    }
}
 
export default CreateComment;