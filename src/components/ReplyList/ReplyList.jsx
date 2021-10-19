import React from 'react';


const ReplyList = (props) => {
    let filteredReplies = props.replies.filter((reply)=>{
        return reply.commentId === props.commentId;
    })

    return ( 
        filteredReplies.map((reply,index)=> {
            return (
                <ul>
                    <li key={index} className='my-2'>
                        {reply.body}
                    </li>
                </ul>
            )
        })
     );
}
 
export default ReplyList;
