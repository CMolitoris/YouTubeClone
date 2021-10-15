import React, { Component } from 'react';

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
            <div>
                <h3>Add a comment</h3>
                <form onSubmit={(event)=> this.handleSubmit(event)}>
                    <input placeholder="Username.." name="username" onChange={this.handleChange} value={this.state.username}/>
                    <input placeholder="Comment.." name="body" onChange={this.handleChange} value={this.state.body}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
         );
    }
}
 
export default CreateComment;