import React,{Component} from 'react';
import CreateReply from '../CreateReply/CreateReply';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    filterReplies = (commentId) => {
        let filteredReplies = this.props.replies.filter((reply)=>{
            return reply.commentId === commentId;
        })
        return filteredReplies.map((reply,index)=> {
            return (
                <ul>
                    <li key={index}>
                        {reply.body}
                    </li>
                </ul>
            )
        })
           
    }

    render() { 
        if(this.props.comments.length>0) {
            return ( 
                <div>
                <ul>
                    {this.props.comments.map((comment,index)=>{
                        return (
                            <>
                                <li key={index}>{comment.username}: {comment.body}</li>
                                <CreateReply createReply={this.props.createReply} commentId={comment.id}/>
                                {/* <ReplyList getReplies={props.getReplies} replies={props.replies}/>  */}
                                {this.filterReplies(comment.id)}
                            </>  
                        )
                    })}
                </ul>
                </div>
            );
        }
        return (
            <div>
                There are no comments for this video.
            </div>
        )
    }
}
 
export default CommentList;

