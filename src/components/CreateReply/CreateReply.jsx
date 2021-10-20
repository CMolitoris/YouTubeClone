import React, { Component } from 'react';
import './CreateReply.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


class CreateReply extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            body: '',
            //Issue should be here
            commentId: this.props.commentId
         }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.commentId !== this.props.commentId) {
          this.setState({ commentId: nextProps.commentId })
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
        this.props.createReply(this.state)
        this.setState({
            body: '',
            
        })
    }

    render() { 
        return ( 
            <div>
                <Accordion className='bg-dark' flush>
                    <Accordion.Item className='bg-dark' eventKey='0'>
                        <Accordion.Button id='reply-toggle' className='bg-dark mt-3' onClick={this.handleOnClick} eventKey='0'>
                            <h3 className='font-style'>Reply</h3>
                        </Accordion.Button>    
                        <Accordion.Body>
                            <form onSubmit={(event)=> this.handleSubmit(event)}>
                                <Form.Group as={Row} className='my-1' controlID='createReply'>
                                    <Col md={8}>
                                        <Form.Control placeholder="Reply.." name="body" onChange={this.handleChange} value={this.state.body}/>
                                    </Col>
                                    <Col>
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
 
export default CreateReply;