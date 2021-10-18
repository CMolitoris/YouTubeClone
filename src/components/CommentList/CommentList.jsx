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
                    <ul className='list-group list-group-flush'>
                        {props.comments.map((comment,index)=>{
                            return (
                                <div>
                                    <li className='list-group-item d-flex justify-content-between align-items-start bg-dark text-light' key={index}>
                                        <div class='ms-2 me-auto'>
                                            <div>
                                                {comment.username}: {comment.body} | {comment.likes} <button className='btn btn-sm btn-success rounded-circle shadow'onClick={() => props.likeComment(comment)}><i class="bi bi-hand-thumbs-up-fill"></i></button>
                                                <ReplyList replies={props.replies} commentId={comment.id}/>
                                                <CreateReply createReply={props.createReply} commentId={comment.id}/>
                                            </div>
                                        </div>
                                    </li>     
                                    {/* {this.filterReplies(comment.id)} */}
                                </div>  
                            )
                        })}
                    </ul>
                </div>
            );
        }
        else if(props.videoId===null){
            return (
                <div classname='col-auto mx-auto'>
                    
                </div>
            )
        }
        return (
            <div classname='col-auto mx-auto'>
                There are no comments for this video.
            </div>
        )
}

 
export default CommentList;

