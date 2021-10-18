import React, { Component } from 'react';

class CreateReply extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            body: '',
            commentId: this.props.commentId
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
        this.setState({body: ''})
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={(event)=> this.handleSubmit(event)}>
                    <input placeholder="Reply.." name="body" onChange={this.handleChange} value={this.state.body}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default CreateReply;