import React, { Component } from 'react';

class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            body: '',
            videoId: this.props.videoId
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createComment(this.state)
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