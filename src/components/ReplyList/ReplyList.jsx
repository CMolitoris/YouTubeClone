import React from 'react';


const ReplyList = (props) => {
    let filteredReplies = props.replies.filter((reply)=>{
        return reply.commentId === props.commentId;
    })

    return ( 
        filteredReplies.map((reply,index)=> {
            return (
                <ul>
                    <li key={index}>
                        {reply.body}
                    </li>
                </ul>
            )
        })
     );
}
 
export default ReplyList;
