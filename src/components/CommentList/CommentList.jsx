// import React,{Component} from 'react';
import CreateReply from '../CreateReply/CreateReply';
import ReplyList from '../ReplyList/ReplyList'

// class CommentList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }

//     filterReplies = (commentId) => {
//         let filteredReplies = this.props.replies.filter((reply)=>{
//             return reply.commentId === commentId;
//         })
//         return filteredReplies.map((reply,index)=> {
//             return (
//                 <ul>
//                     <li key={index}>
//                         {reply.body}
//                     </li>
//                 </ul>
//             )
//         })
           
//     }

const CommentList = (props) => {
    
        if(props.comments.length>0) {
            return ( 
                <div>
                    <ul>
                        {props.comments.map((comment,index)=>{
                            return (
                                <>
                                    <li key={index}>{comment.username}: {comment.body}</li>
                                    <CreateReply createReply={props.createReply} commentId={comment.id}/>
                                    {/* {this.filterReplies(comment.id)} */}
                                    <ReplyList replies={props.replies} commentId={comment.id}/>
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

 
export default CommentList;

