// import React,{Component} from 'react';
import Badge from 'react-bootstrap/Badge';
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
                                    <li className='list-group-item justify-content-between align-items-start bg-dark text-light shadow' key={index}>
                                        <div className='row ms-2 me-auto'>
                                            <div className='col'>
                                                <div className='h4'>
                                                    {comment.username}
                                                </div> 
                                                <hr className=''/>
                                                <div className='h5'>
                                                    {comment.body} 
                                                </div>
                                                <hr className=''/>
                                                <div className='h5'>
                                                    <ReplyList replies={props.replies} commentId={comment.id}/>
                                                    <CreateReply createReply={props.createReply} commentId={comment.id}/>
                                                </div>
                                            </div>
                                            <div className='col-xl-3 text-end order-xl-last order-first'>  
                                                <button className='btn btn-sm btn-success rounded-circle shadow' onClick={() => props.likeComment(comment)}>
                                                    <i class="bi bi-hand-thumbs-up-fill"></i>
                                                </button>
                                                <Badge bg='success' className='ms-1 me-3'>{comment.likes}</Badge>
                                                <button className='btn btn-sm btn-danger rounded-circle shadow' onClick>
                                                    <i class="bi bi-hand-thumbs-down-fill"></i>
                                                </button>
                                                <Badge bg='danger' className='ms-1'>0</Badge>
                                            </div>
                                        </div>
                                    </li>     
                                </div>  
                            )
                        })}
                    </ul>
                </div>
            );
        }
        else if(props.videoId===null || props.videoId===undefined){
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

